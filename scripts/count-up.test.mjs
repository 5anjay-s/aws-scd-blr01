import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';

const source = ts.transpileModule(readFileSync(new URL('../src/components/CountUp.tsx', import.meta.url), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
}).outputText;

function counter(initial = {}) {
  const refs = [];
  const effects = [];
  const tweens = [];
  let refIndex = 0, effectIndex = 0;
  let scheduled = [];
  let state = { visible: false, pageVisible: true, reducedMotion: false, ...initial };
  const dependencies = {
    react: {
      useRef: value => refs[refIndex++] ??= { current: value },
      useLayoutEffect: (effect, deps) => {
        const index = effectIndex++;
        if (effects[index] && deps.every((value, i) => Object.is(value, effects[index].deps[i]))) return;
        scheduled.push(() => {
          effects[index]?.cleanup?.();
          effects[index] = { deps, cleanup: effect() };
        });
      },
    },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
    './animation': {
      gsap: { to: (...args) => { const tween = gsap.to(...args); tweens.push(tween); return tween; } },
      useInView: () => state.visible,
      usePageVisible: () => state.pageVisible,
      useReducedMotion: () => state.reducedMotion,
    },
  };
  const exports = {};
  runInNewContext(source, { exports, Intl, require: name => dependencies[name] });
  const app = {
    tweens,
    render(next = {}) {
      state = { ...state, ...next };
      refIndex = effectIndex = 0;
      scheduled = [];
      const view = exports.CountUp({ value: 1222, suffix: '+' });
      view.props.ref.current ??= {};
      view.props.children[1].props.ref.current ??= { textContent: view.props.children[1].props.children };
      scheduled.forEach(effect => effect());
      return view;
    },
    text: () => refs[1].current.textContent,
    unmount() {
      effects.forEach(effect => effect.cleanup?.());
      gsap.ticker.sleep();
    },
  };
  app.render();
  return app;
}

test('the count waits for its viewport and pauses in hidden tabs without restarting', () => {
  const app = counter();
  try {
    const tween = app.tweens[0];
    assert.equal(tween.paused(), true);
    app.render({ visible: true });
    assert.equal(tween.paused(), false);
    tween.time(0.5);
    const intermediate = app.text();
    assert.notEqual(intermediate, '0+');
    assert.notEqual(intermediate, '1,222+');
    app.render({ pageVisible: false });
    assert.equal(tween.paused(), true);
    app.render({ pageVisible: true, visible: false });
    assert.equal(tween.paused(), true);
    app.render({ visible: true });
    assert.equal(app.tweens.length, 1);
    assert.equal(app.text(), intermediate);
    assert.equal(tween.paused(), false);
  } finally { app.unmount(); }
});

test('the count completes once and its accessible final label stays constant', () => {
  const app = counter({ visible: true });
  try {
    const view = app.render();
    assert.equal(view.props.children[0].props.children, '1,222+');
    assert.equal(view.props.children[1].props['aria-hidden'], 'true');
    app.tweens[0].progress(1);
    app.render({ visible: false });
    app.render({ visible: true });
    assert.equal(app.text(), '1,222+');
    assert.equal(app.tweens.length, 1);
    assert.equal(app.tweens[0].progress(), 1);
  } finally { app.unmount(); }
});

test('reduced motion settles an active count and unmount removes its tween', () => {
  const app = counter({ visible: true });
  const tween = app.tweens[0];
  try {
    tween.time(0.3);
    app.render({ reducedMotion: true });
    assert.equal(app.text(), '1,222+');
    assert.equal(tween.parent, null);
    app.render({ reducedMotion: false });
    assert.equal(app.tweens.length, 1);
    assert.equal(app.text(), '1,222+');
  } finally { app.unmount(); }
  const still = counter({ reducedMotion: true });
  try {
    assert.equal(still.tweens.length, 0);
    assert.equal(still.text(), '1,222+');
  } finally { still.unmount(); }
});
