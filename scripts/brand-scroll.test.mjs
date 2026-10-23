import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';

const source = ts.transpileModule(readFileSync(new URL('../src/components/useBrandScroll.ts', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function brand({ scrollY = 0, reducedMotion = false } = {}) {
  const university = { x: 0, xPercent: 0 };
  const event = { x: 0, xPercent: -105 };
  const root = { dataset: {}, querySelector: selector => selector.includes('university') ? university : event };
  const window = { scrollY, listeners: new Map(), addEventListener(name, fn) { this.listeners.set(name, fn); }, removeEventListener(name) { this.listeners.delete(name); } };
  let cleanup, timeline, trigger, reverted = false;
  const exports = {};
  const dependencies = {
    react: { useLayoutEffect: effect => { cleanup = effect(); } },
    './animation': {
      gsap: {
        set: gsap.set, utils: gsap.utils,
        timeline: options => timeline = gsap.timeline(options),
        context: callback => {
          callback();
          return { revert() { reverted = true; timeline.kill(); } };
        },
      },
      ScrollTrigger: { create: options => trigger = { ...options, killed: false, kill() { this.killed = true; } } },
      useReducedMotion: () => reducedMotion,
    },
  };
  runInNewContext(source, { exports, window, require: name => dependencies[name] });
  exports.useBrandScroll({ current: root });
  return {
    university, event, root, window, timeline, trigger,
    get reverted() { return reverted; },
    unmount() { cleanup(); gsap.ticker.sleep(); },
  };
}

test('the university leaves behind the separator before the event name emerges, and reversing restores it', () => {
  const app = brand();
  try {
    assert.equal(app.university.xPercent, 0);
    assert.equal(app.event.xPercent, -105);
    for (const progress of [0.2, 0.4, 0.6, 0.8]) {
      app.timeline.progress(progress);
      assert.ok(!(app.university.xPercent > -100 && app.event.xPercent > -100), 'identities never overlap in the clipping window');
    }
    app.timeline.progress(1);
    assert.equal(app.university.xPercent, -105);
    assert.equal(app.event.xPercent, 0);
    assert.equal(app.root.dataset.brandState, 'event');
    app.timeline.progress(0.65).progress(0.15).progress(0);
    assert.equal(app.university.xPercent, 0);
    assert.equal(app.event.xPercent, -105);
    assert.equal(app.root.dataset.brandState, 'reva');
  } finally { app.unmount(); }
});

test('mounting after a restored scroll initializes the correct identity and cleanup removes its trigger', () => {
  const app = brand({ scrollY: 600 });
  try {
    assert.equal(app.university.xPercent, -105);
    assert.equal(app.event.xPercent, 0);
    assert.equal(app.root.dataset.brandState, 'event');
  } finally { app.unmount(); }
  assert.equal(app.trigger.killed, true);
  assert.equal(app.reverted, true);
  assert.equal(app.timeline.parent, null);
});

test('reduced motion swaps instantly, returns to REVA at the top, and removes its listener on unmount', () => {
  const app = brand({ reducedMotion: true });
  try {
    assert.equal(app.trigger, undefined);
    assert.equal(app.event.xPercent, -105);
    app.window.scrollY = 300;
    app.window.listeners.get('scroll')();
    assert.equal(app.event.xPercent, 0);
    app.window.scrollY = 0;
    app.window.listeners.get('scroll')();
    assert.equal(app.university.xPercent, 0);
    assert.equal(app.event.xPercent, -105);
    assert.equal(app.timeline.paused(), true);
  } finally { app.unmount(); }
  assert.equal(app.window.listeners.size, 0);
  assert.equal(app.timeline.parent, null);
});
