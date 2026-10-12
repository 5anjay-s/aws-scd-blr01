import test from 'node:test';
import assert from 'node:assert/strict';
import { badgePhotoError } from '../src/components/badgePhoto.ts';

test('photo validation accepts supported image signatures', async () => {
  const photos = [
    ['image/jpeg', [0xff, 0xd8, 0xff, 0xe0, 0, 16, 0x4a, 0x46, 0x49, 0x46, 0, 1]],
    ['image/png', [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 13]],
    ['image/webp', [0x52, 0x49, 0x46, 0x46, 24, 0, 0, 0, 0x57, 0x45, 0x42, 0x50]],
  ];

  for (const [type, bytes] of photos) {
    assert.equal(await badgePhotoError(new File([new Uint8Array(bytes)], 'photo', { type })), null);
  }
});

test('photo validation rejects markup disguised as an image', async () => {
  for (const type of ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'text/html']) {
    const file = new File(['<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>'], 'photo.png', { type });
    assert.ok(await badgePhotoError(file));
  }
});

test('photo validation rejects empty, truncated, mismatched, oversized and non-WebP RIFF files', async () => {
  const files = [
    new File([], 'empty.png', { type: 'image/png' }),
    new File([new Uint8Array([0xff, 0xd8, 0xff])], 'partial.jpg', { type: 'image/jpeg' }),
    new File(['RIFF1234WAVE1234'], 'audio.webp', { type: 'image/webp' }),
    new File(['RIFF1234WEBP1234'], 'wrong.png', { type: 'image/png' }),
    new File([new Uint8Array(15 * 1024 * 1024 + 1)], 'large.png', { type: 'image/png' }),
  ];

  for (const file of files) assert.ok(await badgePhotoError(file));
});
