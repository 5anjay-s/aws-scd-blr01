import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);

test('Workers serves direct SPA links without a looping redirect rule', () => {
  const config = JSON.parse(readFileSync(new URL('wrangler.jsonc', root), 'utf8'));
  assert.equal(config.assets.directory, './dist');
  assert.equal(config.assets.not_found_handling, 'single-page-application');
  assert.equal(existsSync(new URL('public/_redirects', root)), false);
  assert.ok(existsSync(new URL('public/_headers', root)));
});

test('social crawlers receive a local banner with matching Open Graph dimensions', () => {
  const html = readFileSync(new URL('index.html', root), 'utf8');
  const meta = key => html.match(new RegExp(`<meta (?:property|name)="${key.replaceAll('.', '\\.')}" content="([^"]+)"`))?.[1];
  const url = new URL(meta('og:image'));
  assert.equal(url.origin, 'https://aws-scd-blr.in');
  assert.equal(meta('twitter:image'), url.href);
  assert.equal(meta('twitter:card'), 'summary_large_image');
  const png = readFileSync(new URL(`public${url.pathname}`, root));
  assert.deepEqual([...png.subarray(0, 8)], [137,80,78,71,13,10,26,10]);
  assert.equal(Number(meta('og:image:width')), png.readUInt32BE(16));
  assert.equal(Number(meta('og:image:height')), png.readUInt32BE(20));
  assert.ok(html.includes(`"image":"${url.href}"`));
});
