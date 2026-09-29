import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import * as routing from '../src/navigation.ts';
import { hasPage } from '../src/page-config.ts';

function load(name, dependencies, globals = {}) {
  const source = ts.transpileModule(readFileSync(new URL(`../src/components/${name}`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  runInNewContext(source, { exports, URL, require: name => {
    assert.ok(name in dependencies, `Unexpected dependency: ${name}`);
    return dependencies[name];
  }, ...globals });
  return exports;
}

// Effects and updates are flushed explicitly so history actions and delayed
// font completion can be exercised in a deterministic order without a browser.
function hooks() {
  const slots = [];
  let cursor = 0;
  let pending = [];
  const effect = (callback, deps) => {
    const index = cursor++;
    if (slots[index] && deps.every((value, i) => Object.is(value, slots[index].deps[i]))) return;
    pending.push(() => {
      slots[index]?.cleanup?.();
      slots[index] = { deps, cleanup: callback() };
    });
  };
  return {
    react: {
      useState(initial) {
        const index = cursor++;
        slots[index] ??= { value: typeof initial === 'function' ? initial() : initial };
        return [slots[index].value, next => {
          slots[index].value = typeof next === 'function' ? next(slots[index].value) : next;
        }];
      },
      useRef(initial) { return slots[cursor++] ??= { current: initial }; },
      useCallback(callback) { return callback; },
      useEffect: effect,
      useLayoutEffect: effect,
    },
    render(callback) {
      cursor = 0;
      pending = [];
      const result = callback();
      pending.forEach(run => run());
      return result;
    },
    unmount() { slots.forEach(slot => slot.cleanup?.()); },
  };
}

function browser(href = '/#home', { reducedMotion = false, introSeen = true } = {}) {
  const listeners = new Map();
  const pushes = [];
  const scrolls = [];
  const window = {
    location: new URL(href, 'https://example.com'), scrollY: 0, innerHeight: 800,
    matchMedia: () => ({ matches: reducedMotion }),
    addEventListener: (name, callback) => listeners.set(name, callback),
    removeEventListener: name => listeners.delete(name),
    scrollTo: ({ top }) => { window.scrollY = top; scrolls.push(top); },
    requestAnimationFrame: () => 1,
    cancelAnimationFrame() {},
  };
  const history = {
    scrollRestoration: 'auto', state: null,
    replaceState: (_state, _title, url) => { window.location = new URL(url, window.location); },
    pushState: (_state, _title, url) => { pushes.push(url); window.location = new URL(url, window.location); },
  };
  return { window, history, pushes, scrolls, listeners,
    sessionStorage: { getItem: () => introSeen ? 'true' : null, setItem() {} } };
}

function navigation(href, options) {
  const env = browser(href, options);
  const host = hooks();
  const { useSiteNavigation } = load('useSiteNavigation.ts', {
    react: host.react, '../navigation': routing, '../page-config': { hasPage },
  }, env);
  return { ...env, render: () => host.render(useSiteNavigation), unmount: host.unmount };
}

test('repeated activation of the current URL does not add duplicate Back entries', () => {
  const app = navigation('/#home', { reducedMotion: true });
  app.render().navigate('/');
  assert.equal(app.pushes.length, 0);
  app.render().navigate('/faq');
  assert.equal(app.pushes.length, 1);
  app.render().navigate('/faq');
  assert.equal(app.pushes.length, 1);
  assert.equal(app.render().location.path, '/faq');
  app.unmount();
});

test('the first-visit cover preserves a deep link and only commits once covered', () => {
  const app = navigation('/#tracks', { introSeen: false });
  const initial = app.render();
  assert.equal(initial.isLoading, true);
  initial.navigate('/', { replace: true });
  const covered = app.render();
  assert.equal(covered.transition.kind, 'intro');
  assert.equal(covered.transition.phase, 'cover');
  assert.equal(covered.isLoading, true);
  covered.revealPage();
  const revealed = app.render();
  assert.equal(revealed.isLoading, false);
  assert.equal(revealed.location.anchor, 'tracks');
  assert.equal(app.window.location.hash, '#tracks');
  assert.equal(app.pushes.length, 0);
  revealed.completeTransition();
  assert.equal(app.render().transition, null);
  app.unmount();
});

test('Back during a page cover cancels the pending link and duplicate history events do not revive it', () => {
  const app = navigation('/#technical');
  app.render().navigate('/faq');
  assert.equal(app.render().transition.phase, 'cover');
  app.window.location = new URL('https://example.com/#home');
  app.listeners.get('popstate')();
  app.listeners.get('hashchange')();
  const cancelled = app.render();
  assert.equal(cancelled.location.path, '/');
  assert.equal(cancelled.transition, null);
  cancelled.revealPage();
  assert.equal(app.render().location.path, '/');
  assert.equal(app.pushes.length, 0);
  app.unmount();
});

function scrollArrival() {
  const env = browser('/#tracks');
  const host = hooks();
  let ready;
  const fonts = { status: 'loading', ready: new Promise(resolve => { ready = resolve; }) };
  const target = { top: 1000, getBoundingClientRect: () => ({ top: target.top - env.window.scrollY }) };
  const document = { fonts, getElementById: () => target, querySelectorAll: () => [], documentElement: { scrollHeight: 4000 } };
  const headerHost = { parentElement: { getBoundingClientRect: () => ({ height: 80 }) } };
  const { usePageScroll } = load('usePageScroll.ts', {
    react: host.react, '../navigation': routing, './animation': { gsap: { to: () => ({ kill() {} }) } },
  }, { ...env, document });
  const state = { location: routing.resolveLocation(env.window.location), isLoading: false, transition: null,
    handledUrl: { current: env.window.location.href }, focusOnArrival: { current: false }, scrollBehavior: { current: 'instant' } };
  host.render(() => usePageScroll(state, false, headerHost));
  return { ...env, target, ready, unmount: host.unmount };
}

test('late fonts correct a stationary anchor using the sticky header height', async () => {
  const app = scrollArrival();
  assert.equal(app.window.scrollY, 920);
  app.target.top = 1200;
  app.ready();
  await Promise.resolve();
  assert.equal(app.window.scrollY, 1120);
  app.unmount();
});

test('late fonts do not pull a visitor back after they scroll away', async () => {
  const app = scrollArrival();
  app.window.scrollY = 1600;
  app.target.top = 1200;
  app.ready();
  await Promise.resolve();
  assert.equal(app.window.scrollY, 1600);
  app.unmount();
});

test('unmount cancels a pending font correction and restores native scroll restoration', async () => {
  const app = scrollArrival();
  app.unmount();
  app.target.top = 1200;
  app.ready();
  await Promise.resolve();
  assert.equal(app.window.scrollY, 920);
  assert.equal(app.history.scrollRestoration, 'auto');
});

function link(props = {}) {
  const navigations = [];
  const contexts = [];
  const { SiteLink } = load('SiteLink.tsx', {
    react: { createContext: initial => ({ initial }), useContext: () => contexts.shift() },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
    '../navigation': routing,
    './NavigationState': { HeaderNavigationContext: {}, NavigationLocationContext: {} },
  }, { window: browser().window });
  contexts.push((...args) => navigations.push(args), false, { path: '/', anchor: 'home' });
  const element = SiteLink({ href: '/faq', children: 'FAQ', ...props });
  return { element, navigations, click(overrides = {}) {
    const event = { button: 0, detail: 1, clientX: 24, clientY: 32, defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; },
      currentTarget: { getBoundingClientRect: () => ({ left: 10, top: 20, width: 100, height: 40 }) }, ...overrides };
    element.props.onClick(event);
    return event;
  } };
}

test('internal link activation navigates once and uses the control center for keyboard activation', () => {
  const app = link();
  assert.equal(app.click({ detail: 0 }).defaultPrevented, true);
  assert.equal(app.navigations.length, 1);
  assert.equal(app.navigations[0][0], '/#faq');
  assert.equal(app.navigations[0][1].origin.x, 60);
  assert.equal(app.navigations[0][1].origin.y, 40);
});

test('a consumer can cancel navigation in its click handler', () => {
  const app = link({ onClick: event => event.preventDefault() });
  assert.equal(app.click().defaultPrevented, true);
  assert.equal(app.navigations.length, 0);
});

test('modified clicks, secondary clicks, explicit targets and downloads retain native behavior', () => {
  for (const event of [{ ctrlKey: true }, { metaKey: true }, { shiftKey: true }, { altKey: true }, { button: 1 }]) {
    const app = link();
    assert.equal(app.click(event).defaultPrevented, false);
    assert.equal(app.navigations.length, 0);
  }
  for (const props of [{ target: '_blank' }, { target: 'preview' }, { download: 'guide.html' }]) {
    const app = link(props);
    assert.equal(app.click().defaultPrevented, false);
    assert.equal(app.navigations.length, 0);
    assert.equal(app.element.props.target, props.target);
    if (props.download) assert.equal(app.element.props.href, '/faq');
  }
  const external = link({ href: 'https://example.org', target: '_self', rel: 'author' });
  assert.equal(external.element.props.target, '_self');
  assert.equal(external.element.props.rel, 'author');
  assert.equal(external.click().defaultPrevented, false);
});
