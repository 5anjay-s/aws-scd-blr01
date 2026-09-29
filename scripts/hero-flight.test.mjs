import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { gsap } from 'gsap';
import { flightRope } from '../src/components/flightRope.ts';

function load(name, dependencies, globals = {}) {
  const source = ts.transpileModule(readFileSync(new URL(`../src/components/${name}`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  runInNewContext(source, { exports, Event, require: name => {
    assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
    return dependencies[name];
  }, ...globals });
  return exports;
}

// Real GSAP interpolates these plain targets. Geometry and React commits are
// controlled here; no browser layout or replacement timeline engine is involved.
class Target extends EventTarget {
  constructor(bounds = {}) {
    super();
    Object.assign(this, { x: 0, y: 0, xPercent: 0, yPercent: 0, opacity: 1,
      scale: 1, scaleX: 1, scaleY: 1, rotation: 0, rotationX: 0, rotationY: 0,
      width: 0, clipPath: 'none', transformOrigin: '50% 50%', attr: {} });
    this.bounds = { left: 0, top: 0, width: 60, height: 80, ...bounds };
  }
  getBoundingClientRect() {
    return { ...this.bounds, right: this.bounds.left + this.bounds.width,
      bottom: this.bounds.top + this.bounds.height };
  }
  closest() { return this; }
  querySelectorAll() { return []; }
}

function skyFlight(nodeId, { reducedMotion = false } = {}) {
  const element = new Target();
  const timelines = [];
  const slots = [];
  const effects = [];
  const visibilityChanges = [];
  let cursor = 0;
  let pending = [];
  let visible = true;
  let pageVisible = true;
  const animation = {
    gsap: { ...gsap, timeline(options) {
      const timeline = gsap.timeline(options);
      timelines.push(timeline);
      return timeline;
    } },
    useInView: () => visible,
    usePageVisible: () => pageVisible,
    useReducedMotion: () => reducedMotion,
  };
  const { DesignMotion } = load('DesignMotion.tsx', {
    react: {
      useRef: initial => slots[cursor++] ??= { current: initial },
      useCallback: callback => callback,
      useState(initial) {
        const index = cursor++;
        slots[index] ??= { value: initial };
        return [slots[index].value, value => {
          visibilityChanges.push({ x: element.x, waiting: element.waiting, value });
          slots[index].value = value;
        }];
      },
      useLayoutEffect(callback, deps) {
        const index = cursor++;
        if (effects[index] && deps.every((value, i) => Object.is(value, effects[index].deps[i]))) return;
        pending.push(() => {
          effects[index]?.cleanup?.();
          effects[index] = { deps, cleanup: callback() };
        });
      },
    },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
    './animation': animation,
  });
  const app = {
    element, timelines, visibilityChanges,
    render(options = {}) {
      visible = options.visible ?? visible;
      pageVisible = options.pageVisible ?? pageVisible;
      cursor = 0;
      pending = [];
      const result = DesignMotion({ 'data-node-id': nodeId, waitForArrival: true });
      result.props.ref(element);
      element.waiting = result.props['data-flight-waiting'];
      pending.forEach(run => run());
      return result;
    },
    unmount() {
      effects.forEach(effect => effect?.cleanup?.());
      timelines.forEach(timeline => timeline.kill());
      gsap.ticker.sleep();
    },
  };
  app.render();
  return app;
}

function arrival(sky, width = 1280) {
  const root = new Target({ left: 32, top: 100, width: width - 64, height: 360 });
  const plane = new Target();
  const student = [...'STUDENT'].map((_, i) => new Target({ left: 32 + i * 64, top: 100 }));
  const community = [...'COMMUNITY'].map((_, i) => new Target({ left: 32 + i * 64, top: 180 }));
  const day = [...'DAY'].map((_, i) => new Target({ left: 32 + i * 64, top: 260 }));
  const groups = { STUDENT: student, COMMUNITY: community, DAY: day };
  const singles = new Map([
    ['.hero-city', new Target()], ['.hero-city-reveal', new Target()],
    ['.hero-arrival-plane', plane], ['.hero-arrival-rig', new Target()], ['.hero-cloud', new Target()],
    ['[data-word="COMMUNITY"]', new Target({ left: 32, top: 180, width: 576 })],
  ]);
  const multiples = new Map([
    ['.hero-city-reveal-row', [new Target(), new Target()]],
    ['.hero-launch-pixels i', Array.from({ length: 4 }, () => new Target())],
    ['.hero-word-letter', [...student, ...community, ...day]],
    ['.hero-word-signal', [new Target(), new Target(), new Target()]],
    ['.hero-arrival-rig path', [new Target()]],
    ['.hero-word-letter, .hero-signal-letter', [...student, ...community, ...day]],
    ['[data-word="STUDENT"] [data-character="2"] > span, [data-word="COMMUNITY"] [data-character="6"] > span',
      [student[2], community[6]]],
  ]);
  root.querySelector = selector => {
    if (singles.has(selector)) return singles.get(selector);
    const match = selector.match(/data-word="(\w+)".*data-character="(\d+)"/);
    assert.ok(match, `Unexpected selector: ${selector}`);
    return groups[match[1]][Number(match[2])];
  };
  root.querySelectorAll = selector => {
    if (multiples.has(selector)) return multiples.get(selector);
    const match = selector.match(/data-word="(\w+)"/);
    assert.ok(match, `Unexpected selector: ${selector}`);
    return groups[match[1]];
  };
  root.parentElement = { querySelector: selector => {
    if (selector === '[data-hero-sky-flight]') return sky;
    assert.equal(selector, '[data-hero-invitation]');
    return new Target({ top: 440 });
  } };
  const { createHeroArrival } = load('heroArrival.ts', {
    './animation': { gsap }, './flightRope': { flightRope },
  }, { window: { innerWidth: width } });
  let completed = 0;
  const context = gsap.context(() => {});
  let timeline;
  context.add(() => { timeline = createHeroArrival(root, () => completed++); });
  return { plane, timeline, completed: () => completed, unmount() { context.revert(); gsap.ticker.sleep(); } };
}

for (const [variant, nodeId, rightEdge, width] of [
  ['desktop', '860:5021', 654, 1280], ['mobile', '1169:536', 325.5, 390],
]) {
  test(`${variant} cloud flight waits through visibility changes, then resets before becoming visible`, () => {
    const cloud = skyFlight(nodeId);
    try {
      const master = cloud.timelines[0];
      assert.equal(cloud.element.waiting, true);
      assert.equal(master.paused(), true);
      assert.equal(master.time(), 0);
      assert.equal(cloud.element.x, rightEdge);
      cloud.render({ visible: false });
      cloud.render({ visible: true, pageVisible: false });
      cloud.render({ pageVisible: true });
      assert.equal(master.paused(), true);
      assert.equal(cloud.element.waiting, true);
      // Even if an earlier playback position exists, the return starts at the edge.
      master.totalTime(4, true);
      assert.notEqual(cloud.element.x, rightEdge);
      cloud.element.dispatchEvent(new Event('hero-flight-return'));
      assert.equal(cloud.visibilityChanges.length, 1);
      assert.deepEqual(cloud.visibilityChanges[0], { x: rightEdge, waiting: true, value: true });
      cloud.render();
      assert.equal(cloud.element.waiting, false);
      assert.equal(master.paused(), false);
      assert.equal(cloud.element.x, rightEdge);
    } finally { cloud.unmount(); }
  });

  for (const [step, advance] of [
    ['ordinary frames', timeline => { for (const time of [0.12, 1.2, 2.08, 2.3, 2.399]) timeline.totalTime(time, false); }],
    ['a skipped frame', timeline => { timeline.totalTime(0.12, false); }],
    ['resize settling', timeline => { timeline.totalTime(1.2, false); }],
  ]) {
    test(`${variant} arrival hands off one visible plane after ${step}`, () => {
      const cloud = skyFlight(nodeId);
      const flight = arrival(cloud.element, width);
      const returns = [];
      cloud.element.addEventListener('hero-flight-return', () => returns.push({
        arrivalOpacity: flight.plane.opacity, cloudX: cloud.element.x,
      }));
      try {
        assert.equal(cloud.timelines[0].time(), 0);
        assert.equal(cloud.element.x, rightEdge);
        advance(flight.timeline);
        assert.equal(cloud.element.waiting, true);
        assert.equal(cloud.timelines[0].paused(), true);
        assert.equal(returns.length, 0);
        assert.equal(flight.plane.opacity, 1);
        if (step === 'resize settling') flight.timeline.progress(1);
        else flight.timeline.totalTime(step === 'a skipped frame' ? 2.8 : 2.4, false);
        assert.equal(returns.length, 1);
        assert.deepEqual(returns[0], { arrivalOpacity: 0, cloudX: rightEdge });
        assert.equal(cloud.timelines[0].time(), 0);
        assert.deepEqual(cloud.visibilityChanges[0], { x: rightEdge, waiting: true, value: true });
        cloud.render();
        assert.equal(cloud.element.waiting, false);
        assert.equal(flight.plane.opacity, 0);
        flight.timeline.progress(1);
        assert.equal(returns.length, 1);
        assert.equal(flight.completed(), 1);
        assert.equal(flight.plane.opacity, 0);
      } finally { flight.unmount(); cloud.unmount(); }
    });
  }
}

test('a returning flight remains paused in a hidden tab and reduced motion needs no return event', () => {
  const cloud = skyFlight('860:5021');
  try {
    cloud.render({ pageVisible: false });
    cloud.element.dispatchEvent(new Event('hero-flight-return'));
    cloud.render();
    assert.equal(cloud.element.waiting, false);
    assert.equal(cloud.timelines[0].paused(), true);
    cloud.render({ pageVisible: true });
    assert.equal(cloud.timelines[0].paused(), false);
  } finally { cloud.unmount(); }
  const still = skyFlight('860:5021', { reducedMotion: true });
  try {
    assert.equal(still.element.waiting, false);
    assert.equal(still.timelines.length, 0);
  } finally { still.unmount(); }
});
