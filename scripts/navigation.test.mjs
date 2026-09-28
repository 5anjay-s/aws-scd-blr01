import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanSectionUrl, isNavigationActive, resolveLocation } from '../src/navigation.ts';

const origin = 'https://example.com';

test('clean section routes load the homepage at the requested section', () => {
  assert.deepEqual(resolveLocation(new URL('/experience', origin)), { path: '/', anchor: 'experience' });
  assert.deepEqual(resolveLocation(new URL('/tracks/', origin)), { path: '/', anchor: 'tracks' });
  assert.deepEqual(resolveLocation(new URL('/technical', origin)), { path: '/technical', anchor: '' });
  assert.deepEqual(resolveLocation(new URL('/unknown', origin)), { path: '/unknown', anchor: '' });
});

test('old Program paths and bookmarks open Tracks using its clean URL', () => {
  for (const href of ['/program', '/program/', '/#program', '/tracks']) {
    const url = cleanSectionUrl(new URL(href, origin));
    assert.equal(url.pathname + url.hash, '/tracks');
    assert.deepEqual(resolveLocation(url), { path: '/', anchor: 'tracks' });
  }
});

test('legacy section links become clean paths and retain query parameters', () => {
  const url = cleanSectionUrl(new URL('/?source=invite#timeline', origin));
  assert.equal(url.pathname + url.search + url.hash, '/timeline?source=invite');
});

test('both old partner links resolve to the partners directory', () => {
  for (const href of ['/#partner-lineup', '/partner-lineup', '/partners']) {
    const url = cleanSectionUrl(new URL(href, origin));
    assert.equal(url.pathname + url.hash, '/partners');
    assert.deepEqual(resolveLocation(url), { path: '/', anchor: 'partner-lineup' });
  }
});

test('Learn, Build, Belong belongs to experience for old paths and bookmarks', () => {
  for (const href of ['/learn-build-belong', '/#learn-build-belong']) {
    const url = cleanSectionUrl(new URL(href, origin));
    assert.equal(url.pathname + url.hash, '/experience');
    assert.deepEqual(resolveLocation(url), { path: '/', anchor: 'experience' });
  }
});

test('back to top stays on a track page but returns home from a homepage section', () => {
  assert.equal(cleanSectionUrl(new URL('#top', origin + '/technical')).href, origin + '/technical');
  assert.equal(cleanSectionUrl(new URL('#top', origin + '/experience')).href, origin + '/');
});

test('unknown fragments are not mistaken for homepage section routes', () => {
  assert.equal(cleanSectionUrl(new URL('/#constructor', origin)).hash, '#constructor');
});

test('FAQ is a standalone page and legacy bookmarks open it', () => {
  for (const href of ['/faq', '/faq/', '/#faq']) {
    const url = cleanSectionUrl(new URL(href, origin));
    assert.equal(url.pathname + url.hash, '/faq');
    assert.deepEqual(resolveLocation(url), { path: '/faq', anchor: '' });
  }
  assert.deepEqual(resolveLocation(new URL('/#faq', origin)), { path: '/faq', anchor: '' });
});

test('FAQ category links and return-to-top remain on the FAQ page', () => {
  const url = cleanSectionUrl(new URL('/faq?source=home#plan-your-visit', origin));
  assert.deepEqual(resolveLocation(url), { path: '/faq', anchor: 'plan-your-visit' });
  assert.equal(url.search, '?source=home');
  assert.equal(cleanSectionUrl(new URL('#top', origin + '/faq')).href, origin + '/faq');
});

test('the homepage FAQ teaser has its own section URL', () => {
  assert.deepEqual(resolveLocation(new URL('/questions', origin)), { path: '/', anchor: 'faq-preview' });
  assert.equal(cleanSectionUrl(new URL('/#faq-preview', origin)).pathname, '/questions');
});

test('header highlights distinguish homepage sections from standalone pages', () => {
  const at = href => resolveLocation(new URL(href, origin));
  assert.equal(isNavigationActive(at('/'), at('/experience')), false);
  assert.equal(isNavigationActive(at('/#speakers'), at('/speakers')), true);
  assert.equal(isNavigationActive(at('/tracks'), at('/technical')), false);
  assert.equal(isNavigationActive(at('/technical'), at('/technical')), true);
  assert.equal(isNavigationActive(at('/faq'), at('/faq#plan-your-visit')), true);
  assert.equal(isNavigationActive(at('/faq'), at('/questions')), false);
  assert.equal(isNavigationActive(at('/'), { path: '/', anchor: 'home' }), true);
});
