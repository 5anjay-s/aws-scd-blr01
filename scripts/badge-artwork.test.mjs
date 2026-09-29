import test from 'node:test';
import assert from 'node:assert/strict';
import { coverCrop, badgeFilename } from '../src/components/badgeArtwork.ts';

test('portrait crops fill a badge slot without stretching or reading beyond the photo', () => {
  for (const [sourceWidth, sourceHeight] of [[4000, 1000], [800, 2400], [1600, 1600]]) {
    for (const [width, height] of [[278, 422], [372, 388], [440, 304], [376, 234]]) {
      const crop = coverCrop(sourceWidth, sourceHeight, width, height);
      assert.ok(crop.sx >= 0 && crop.sy >= 0);
      assert.ok(crop.sx + crop.sw <= sourceWidth + 1e-8);
      assert.ok(crop.sy + crop.sh <= sourceHeight + 1e-8);
      assert.ok(Math.abs(crop.sw / crop.sh - width / height) < 1e-8);
      assert.ok(Math.abs(crop.sx * 2 + crop.sw - sourceWidth) < 1e-8);
    }
  }
});

test('download names retain international names and cannot create a path', () => {
  assert.equal(badgeFilename('  Ananya Rao  ', 'meet'), 'aws-scd-ananya-rao-meet.png');
  assert.equal(badgeFilename('Zoë / 李明', 'wave'), 'aws-scd-zoë-李明-wave.png');
  assert.equal(badgeFilename('../../', 'builder'), 'aws-scd-attendee-builder.png');
});
