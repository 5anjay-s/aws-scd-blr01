import test from 'node:test';
import assert from 'node:assert/strict';
import { hashRouteUrl, isNavigationActive, resolveLinkUrl, resolveLocation } from '../src/navigation.ts';

const origin = 'https://example.com';
const at = href => resolveLocation(new URL(href, origin));
const canonical = href => {
  const url = hashRouteUrl(new URL(href, origin));
  return url.pathname + url.search + url.hash;
};

test('hash routes open standalone pages including the loading replay', () => {
  for (const page of ['loading', 'technical', 'non-technical', 'registration', 'organisers', 'faq', '404']) {
    assert.deepEqual(at(`/#${page}`), { path: `/${page}`, anchor: '' });
    assert.equal(canonical(`/${page}`), `/#${page}`);
    assert.equal(canonical(`/${page}/`), `/#${page}`);
    assert.equal(canonical(`/#${page}`), `/#${page}`);
  }
});

test('previous registration, about and hackathon bookmarks retain their destinations', () => {
  assert.deepEqual(at('/register/'), { path: '/registration', anchor: '' });
  assert.deepEqual(at('/#about'), { path: '/', anchor: 'experience' });
  for (const page of ['pre-scd', 'pre-scd-hackathon', 'pre-scd-hackathon-chatgpt-workshop']) {
    assert.deepEqual(at(`/#${page}`), { path: '/technical', anchor: 'impulse-winners' });
    assert.equal(canonical(`/#${page}`), '/#technical/impulse-winners');
  }
  assert.equal(canonical('/agenda'), '/#timeline');
  assert.equal(canonical('/venue'), '/#details');
});

test('old organizers URLs use organisers and preserve page anchors and query parameters', () => {
  for (const href of ['/organizers', '/organizers/', '/#organizers', '/#/organizers']) {
    assert.deepEqual(at(href), { path: '/organisers', anchor: '' });
    assert.equal(canonical(href), '/#organisers');
    assert.equal(resolveLinkUrl(href, new URL('/#community', origin)).href, origin + '/#organisers');
  }
  for (const href of ['/organizers?source=invite#organizers-title', '/?source=invite#organizers/organizers-title']) {
    assert.equal(canonical(href), '/?source=invite#organisers/organizers-title');
    assert.deepEqual(at(href), { path: '/organisers', anchor: 'organizers-title' });
  }
});

test('homepage sections use hashes and preserve their scrolling targets', () => {
  for (const section of ['home', 'experience', 'tracks', 'speakers', 'timeline', 'manifesto', 'community', 'partner-with-us', 'details', 'join', 'contact']) {
    assert.deepEqual(at(`/#${section}`), { path: '/', anchor: section });
    assert.equal(canonical(`/#${section}`), `/#${section}`);
    assert.equal(canonical(section === 'home' ? '/' : `/${section}`), `/#${section}`);
  }
});

test('old Program paths and bookmarks open Tracks using its hash URL', () => {
  for (const href of ['/program', '/program/', '/#program', '/tracks', '/tracks/']) {
    assert.equal(canonical(href), '/#tracks');
    assert.deepEqual(at(canonical(href)), { path: '/', anchor: 'tracks' });
  }
});

test('both old partner links resolve to the partners directory', () => {
  for (const href of ['/#partner-lineup', '/partner-lineup', '/partners', '/#partners']) {
    assert.equal(canonical(href), '/#partners');
    assert.deepEqual(at(canonical(href)), { path: '/', anchor: 'partner-lineup' });
  }
});

test('Learn, Build, Belong belongs to experience for old paths and bookmarks', () => {
  for (const href of ['/learn-build-belong', '/#learn-build-belong']) {
    assert.equal(canonical(href), '/#experience');
    assert.deepEqual(at(canonical(href)), { path: '/', anchor: 'experience' });
  }
});

test('routing retains query parameters before the hash', () => {
  assert.equal(canonical('/timeline?source=invite'), '/?source=invite#timeline');
  assert.equal(canonical('/?source=invite#timeline'), '/?source=invite#timeline');
  assert.equal(canonical('/faq?source=home#plan-your-visit'), '/?source=home#faq/plan-your-visit');
});

test('FAQ category links stay on the FAQ page and survive canonicalization', () => {
  for (const category of ['about-the-day', 'ideas-and-community', 'plan-your-visit']) {
    for (const href of [`/faq#${category}`, `/#faq/${category}`]) {
      assert.equal(canonical(href), `/#faq/${category}`);
      assert.deepEqual(at(canonical(href)), { path: '/faq', anchor: category });
    }
  }
});

test('back to top retains a standalone page and returns home from homepage sections', () => {
  for (const [current, expected] of [
    ['/#technical', '/#technical'],
    ['/technical', '/#technical'],
    ['/#faq/plan-your-visit', '/#faq'],
    ['/#organisers', '/#organisers'],
    ['/#organizers', '/#organisers'],
    ['/faq#plan-your-visit', '/#faq'],
    ['/#experience', '/#home'],
    ['/experience', '/#home'],
    ['/?source=invite#tracks', '/?source=invite#home'],
  ]) {
    assert.equal(resolveLinkUrl('#top', new URL(current, origin)).href, origin + expected);
  }
  assert.equal(canonical('/technical#top'), '/#technical');
  assert.equal(canonical('/experience#top'), '/#home');
});

test('links between hash pages preserve the destination and old composition hrefs', () => {
  const current = new URL('/#technical', origin);
  for (const href of ['/registration', '/#registration', '#registration']) {
    assert.equal(resolveLinkUrl(href, current).href, origin + '/#registration');
  }
  assert.equal(resolveLinkUrl('/#timeline', current).href, origin + '/#timeline');
  assert.equal(resolveLinkUrl('/faq#plan-your-visit', current).href, origin + '/#faq/plan-your-visit');
});

test('unknown routes remain unknown and cannot resolve through object prototype names', () => {
  for (const route of ['unknown', 'constructor', 'toString']) {
    assert.equal(canonical(`/${route}`), `/#${route}`);
    assert.deepEqual(at(`/#${route}`), { path: `/${route}`, anchor: '' });
  }
});

test('the homepage FAQ teaser has a distinct hash from the FAQ page', () => {
  for (const href of ['/questions', '/#questions', '/#faq-preview']) {
    assert.equal(canonical(href), '/#questions');
    assert.deepEqual(at(canonical(href)), { path: '/', anchor: 'faq-preview' });
  }
  assert.deepEqual(at('/#faq'), { path: '/faq', anchor: '' });
});

test('header highlights distinguish homepage sections from standalone pages', () => {
  assert.equal(isNavigationActive(at('/'), at('/#experience')), false);
  assert.equal(isNavigationActive(at('/#speakers'), at('/speakers')), true);
  assert.equal(isNavigationActive(at('/tracks'), at('/#technical')), false);
  assert.equal(isNavigationActive(at('/technical'), at('/#technical')), true);
  assert.equal(isNavigationActive(at('/faq'), at('/#faq/plan-your-visit')), true);
  assert.equal(isNavigationActive(at('/#faq'), at('/#questions')), false);
  assert.equal(isNavigationActive(at('/'), { path: '/', anchor: 'home' }), true);
});
