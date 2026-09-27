import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanSectionUrl, resolveLocation } from '../src/navigation.ts';

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
