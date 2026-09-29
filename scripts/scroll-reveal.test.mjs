import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

// Run the hook with controlled effects and observer notifications. Geometry is
// explicit so these cases do not depend on a browser's asynchronous layout.
const source = ts.transpileModule(readFileSync(new URL('../src/components/useScrollReveal.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

class Element {
  constructor(top, initialStyles = {}) {
    this.top = top;
    this.dataset = {};
    this.listeners = new Map();
    this.boundsReads = 0;
    const values = new Map(Object.entries(initialStyles));
    this.style = {
      getPropertyValue: name => values.get(name)?.[0] ?? '',
      getPropertyPriority: name => values.get(name)?.[1] ?? '',
      setProperty: (name, value, priority = '') => values.set(name, [value, priority]),
      removeProperty: name => values.delete(name),
    };
    for (const [property, cssName] of [['opacity', 'opacity'], ['translate', 'translate'], ['willChange', 'will-change']]) {
      Object.defineProperty(this.style, property, {
        get: () => this.style.getPropertyValue(cssName),
        set: value => this.style.setProperty(cssName, value),
      });
    }
  }
  getBoundingClientRect() { this.boundsReads++; return { top: this.top, bottom: this.top + 100, left: 0 }; }
  addEventListener(name, callback) { this.listeners.set(name, callback); }
  removeEventListener(name) { this.listeners.delete(name); }
  contains(element) { return element === this; }
}

function setup(elements, { reducedMotion = false } = {}) {
  const effects = [];
  const refs = [];
  const tweens = [];
  const observers = [];
  let effectIndex = 0;
  let refIndex = 0;
  let scheduled = [];
  const document = new Element(0);
  document.hidden = false;
  const root = new Element(0);
  const rootRef = { current: root };
  class Observer {
    constructor(callback) { this.callback = callback; this.observed = new Set(); observers.push(this); }
    observe(element) { this.observed.add(element); }
    unobserve(element) { this.observed.delete(element); }
    disconnect() { this.observed.clear(); }
    enter(element) { this.callback([{ target: element, isIntersecting: true }]); }
  }
  const dependencies = {
    react: {
      useRef: initial => refs[refIndex++] ??= { current: initial },
      useLayoutEffect: (effect, deps) => {
        const index = effectIndex++;
        if (effects[index] && deps.every((value, i) => value === effects[index].deps[i])) return;
        scheduled.push(() => {
          effects[index]?.cleanup?.();
          effects[index] = { deps, cleanup: effect() };
        });
      },
    },
    './animation': {
      useReducedMotion: () => reducedMotion,
      gsap: { to: (element, options) => {
        const tween = { element, options, killed: false, kill() { this.killed = true; } };
        tweens.push(tween);
        return tween;
      } },
    },
    './scrollRevealTargets': { collectScrollRevealTargets: () => elements.map(element => ({
      element, top: element.top, opacity: Number(element.style.opacity || 1),
      translate: element.style.translate || 'none', artwork: false, fadeOnly: false,
    })) },
  };
  const exports = {};
  runInNewContext(source, { exports, require: name => dependencies[name], Node: Element,
    document, window: { innerWidth: 1280, innerHeight: 800, IntersectionObserver: Observer },
    IntersectionObserver: Observer });
  return {
    root, document, observers, tweens,
    render(options = {}) {
      effectIndex = 0;
      refIndex = 0;
      scheduled = [];
      exports.useScrollReveal(rootRef, { pageKey: '/', disabled: false, paused: false, ...options });
      scheduled.forEach(effect => effect());
    },
    unmount() { effects.forEach(effect => effect.cleanup?.()); },
  };
}

test('a covered destination keeps all arrival content readable without waiting for an observer', () => {
  const above = new Element(-200);
  const visible = new Element(120);
  const bottomEdge = new Element(780);
  const below = new Element(1000);
  const app = setup([above, visible, bottomEdge, below]);
  app.render({ paused: true });
  for (const element of [above, visible, bottomEdge]) {
    assert.equal(element.style.opacity, '');
    assert.equal(element.dataset.scrollReveal, 'revealed');
  }
  assert.equal(below.style.opacity, '0');
  assert.equal(app.observers[0].observed.has(below), true);
  assert.equal(app.tweens.length, 0);
  assert.ok([above, visible, bottomEdge, below].every(element => element.boundsReads === 0),
    'setup uses the collected geometry instead of interleaving new layout reads with style writes');
  app.unmount();
});

test('content entering the viewport during a wipe is ready before the wipe clears', () => {
  const element = new Element(1000);
  const app = setup([element]);
  app.render({ paused: true });
  element.top = 250;
  app.observers[0].enter(element);
  assert.equal(element.style.opacity, '');
  assert.equal(element.dataset.scrollReveal, 'revealed');
  assert.equal(app.tweens.length, 0);
  app.render({ paused: false });
  assert.equal(app.tweens.length, 0);
  app.unmount();
});

test('offscreen content reveals once and unmount restores existing styles and listeners', () => {
  const element = new Element(1000, { opacity: ['0.8', 'important'], translate: ['5px 2px', ''], 'will-change': ['filter', ''] });
  const app = setup([element]);
  app.render();
  element.top = 250;
  app.observers[0].enter(element);
  app.observers[0].enter(element);
  assert.equal(app.tweens.length, 1);
  assert.equal(app.observers[0].observed.has(element), false);
  app.tweens[0].options.onComplete();
  assert.equal(element.style.opacity, '0.8');
  assert.equal(element.style.getPropertyPriority('opacity'), 'important');
  assert.equal(element.style.translate, '5px 2px');
  assert.equal(element.style.willChange, 'filter');
  app.unmount();
  assert.equal(element.dataset.scrollReveal, undefined);
  assert.equal(element.style.getPropertyValue('--scroll-reveal-y'), '');
  assert.equal(app.root.listeners.size, 0);
  assert.equal(app.document.listeners.size, 0);
});

test('keyboard focus restores a pending control immediately and cleanup cancels an active tween', () => {
  const focused = new Element(1000);
  const moving = new Element(1200);
  const app = setup([focused, moving]);
  app.render();
  app.root.listeners.get('focusin')({ target: focused });
  assert.equal(focused.style.opacity, '');
  assert.equal(focused.dataset.scrollReveal, 'revealed');
  moving.top = 400;
  app.observers[0].enter(moving);
  app.unmount();
  assert.equal(app.tweens[0].killed, true);
  assert.equal(moving.style.opacity, '');
  assert.equal(app.observers[0].observed.size, 0);
});

test('reduced motion leaves content untouched', () => {
  const element = new Element(1000);
  const app = setup([element], { reducedMotion: true });
  app.render();
  assert.equal(element.style.opacity, '');
  assert.equal(app.observers.length, 0);
  assert.equal(app.tweens.length, 0);
  app.unmount();
});
