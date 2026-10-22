import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { getPageSections, groupPageSections, hasPage } from '../src/page-config.ts';
import { homeSectionRoutes, resolveLocation } from '../src/navigation.ts';

const manifest = JSON.parse(readFileSync(new URL('../src/design-manifest.json', import.meta.url), 'utf8'));
const pages = ['/', '/organisers', '/faq', '/technical', '/non-technical', '/registration', '/agenda', '/venue', '/404'];

test('the introduction and all three chapters share one panel without losing route anchors', () => {
  for (const mobile of [false, true]) {
    const sections = getPageSections('/', mobile, false);
    const panels = groupPageSections(sections);
    const experience = panels.find(group => group[0].anchor === 'experience');

    assert.deepEqual(experience.map(item => item.label), ['A day to start something', 'Learn, build, belong']);
    assert.deepEqual(panels.flat(), sections);
    assert.equal(panels[0][0].anchor, 'home');
    const anchors = panels.map(group => group[0].anchor).filter(Boolean);
    assert.ok(anchors.indexOf('experience') < anchors.indexOf('tracks'));
    assert.ok(anchors.indexOf('tracks') < anchors.indexOf('pre-scd'));
    assert.ok(anchors.indexOf('pre-scd') < anchors.indexOf('timeline'));
  }

  for (const page of pages.slice(1)) {
    assert.ok(groupPageSections(getPageSections(page, false, false)).every(group => group.length === 1));
  }
});

test('every page has unique desktop and mobile sections mapped to the Figma manifest', () => {
  for (const path of pages) {
    assert.ok(hasPage(path), path);
    for (const mobile of [false, true]) {
      const sections = getPageSections(path, mobile, false);
      assert.ok(sections.length > 0, path);
      assert.equal(new Set(sections.map(section => section.node)).size, sections.length);
      for (const section of sections) {
        const entry = manifest.find(entry => entry.id === section.node);
        assert.ok(entry, `${path}: ${section.node}`);
        assert.ok(existsSync(new URL(`../src/components/design/${entry.name}.tsx`, import.meta.url)));
      }
    }
  }
});

test('both homepage variants expose all navigation destinations in the same order', () => {
  const anchors = mobile => getPageSections('/', mobile, false).map(section => section.anchor).filter(Boolean);
  assert.deepEqual(anchors(false), anchors(true));
  for (const route of Object.values(homeSectionRoutes)) {
    const { path, anchor } = resolveLocation(new URL(route, 'https://example.com'));
    assert.equal(path, '/');
    assert.ok(anchors(false).includes(anchor || 'home'), route);
  }
});

test('unknown pages use the matching 404 composition', () => {
  assert.equal(hasPage('/missing'), false);
  for (const mobile of [false, true]) {
    assert.deepEqual(getPageSections('/missing', mobile, false), getPageSections('/404', mobile, false));
  }
});
