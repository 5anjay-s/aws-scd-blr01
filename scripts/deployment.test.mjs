import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);

function jpegDimensions(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8, 'preview must begin with a JPEG SOI marker');
  const frameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
  let offset = 2;
  while (offset < bytes.length) {
    assert.equal(bytes[offset++], 0xff, 'invalid JPEG segment marker');
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    if (marker === 0xd9 || marker === 0xda) break;
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
    assert.ok(offset + 2 <= bytes.length, 'truncated JPEG segment');
    const length = bytes.readUInt16BE(offset);
    assert.ok(length >= 2 && offset + length <= bytes.length, 'invalid JPEG segment length');
    if (frameMarkers.has(marker)) {
      assert.ok(length >= 8, 'truncated JPEG frame');
      return { width: bytes.readUInt16BE(offset + 5), height: bytes.readUInt16BE(offset + 3) };
    }
    offset += length;
  }
  assert.fail('preview must contain a JPEG frame with dimensions');
}

test('Workers serves direct SPA links without a looping redirect rule', () => {
  const config = JSON.parse(readFileSync(new URL('wrangler.jsonc', root), 'utf8'));
  assert.equal(config.assets.directory, './dist');
  assert.equal(config.assets.not_found_handling, 'single-page-application');
  assert.equal(existsSync(new URL('public/_redirects', root)), false);
  assert.ok(existsSync(new URL('public/_headers', root)));
});

test('social crawlers receive one versioned lightweight JPEG with matching metadata', () => {
  const html = readFileSync(new URL('index.html', root), 'utf8');
  const meta = key => html.match(new RegExp(`<meta (?:property|name)="${key.replaceAll('.', '\\.')}" content="([^"]+)"`))?.[1];
  const url = new URL(meta('og:image'));
  assert.equal(url.origin, 'https://aws-scd-blr.in');
  assert.equal(url.pathname, '/media/scd-bengaluru-2026-share-v2.jpg');
  assert.equal(url.search, '');
  assert.equal(url.hash, '');
  assert.equal(meta('og:image:secure_url'), url.href);
  assert.equal(meta('twitter:image'), url.href);
  assert.equal(meta('twitter:card'), 'summary_large_image');
  assert.equal(meta('og:image:type'), 'image/jpeg');
  assert.equal(new URL(meta('og:url')).origin, url.origin);
  const jpeg = readFileSync(new URL(`public${url.pathname}`, root));
  assert.ok(jpeg.length <= 300 * 1024, 'preview should remain at or below 300 KiB');
  assert.deepEqual([...jpeg.subarray(-2)], [0xff, 0xd9], 'preview must end with a JPEG EOI marker');
  const dimensions = jpegDimensions(jpeg);
  assert.deepEqual(dimensions, { width: 1200, height: 630 });
  assert.equal(Number(meta('og:image:width')), dimensions.width);
  assert.equal(Number(meta('og:image:height')), dimensions.height);
  const structuredData = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(([, json]) => JSON.parse(json));
  const event = structuredData.find(data => data['@type'] === 'Event');
  assert.ok(event, 'event structured data must be present');
  assert.equal(event.image, url.href);
});
