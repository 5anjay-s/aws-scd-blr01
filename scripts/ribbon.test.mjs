import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { readRibbonArtwork } from '../src/components/ribbonPixels.ts';

const files = ['1160-5759-305fd.svg', '1168-493-5454f.svg', '860-5267-10945.svg', '1168-495-22597.svg', '1168-496-4ca63.svg', '1265-3035-453bd.svg', '1168-498-e1335.svg'];
const sources = files.map(file => readFileSync(new URL(`../public/assets/${file}`, import.meta.url), 'utf8'));
const artworks = sources.map(readRibbonArtwork);
const subpaths = (path, color) => path.match(/M[^Z]+Z/g).map(part => `${color}:${part}`);

test('every ribbon export retains every original subpath and fill without resampling', () => {
  const shape = artwork => artwork.pixels.map(({ x, y, size }) => [x, y, size]);
  for (const [index, artwork] of artworks.entries()) {
    assert.ok(artwork);
    assert.equal(artwork.pixels.length, 438);
    assert.equal(artwork.pixels.filter(pixel => pixel.dot).length, 10);
    assert.deepEqual(shape(artwork), shape(artworks[0]));
    const original = [...sources[index].matchAll(/<path\b([^>]+)>/g)].flatMap(([, attributes]) =>
      subpaths(attributes.match(/\bd="([^"]+)"/)[1], attributes.match(/fill="([^"]+)"/)[1]));
    const rendered = [
      ...artwork.fields.flatMap(field => subpaths(field.path, field.color)),
      ...artwork.pixels.filter(pixel => pixel.mark || pixel.dot).map(pixel => `${pixel.color}:${pixel.path}`),
    ];
    assert.deepEqual(rendered.sort(), original.sort());
  }
  assert.equal(readRibbonArtwork('<svg><path d="M0 0L1 1" /></svg>'), null);
});

// Follow the same paced SVG path in normalized artwork coordinates.
function markAt(track, progress, scale) {
  const coordinates = track.motionPath.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const points = Array.from({ length: coordinates.length / 2 }, (_, i) => coordinates.slice(i * 2, i * 2 + 2));
  points.push(points[0]);
  const lengths = points.slice(1).map((point, i) => Math.hypot(point[0] - points[i][0], point[1] - points[i][1]));
  let remaining = (progress % 1) * lengths.reduce((a, b) => a + b, 0);
  const origin = track.path.match(/^M([\d.]+) ([\d.]+)/).slice(1).map(Number);
  for (let i = 0; i < lengths.length; i++) {
    if (remaining <= lengths[i]) {
      const fraction = remaining / lengths[i];
      return points[i].map((value, axis) => (origin[axis] + value + (points[i + 1][axis] - value) * fraction) * scale);
    }
    remaining -= lengths[i];
  }
  throw new Error('Motion sample fell outside its closed circuit');
}

test('closed tracks keep an even pattern through every turn, crossing and loop seam', () => {
  for (const artwork of artworks) {
    const scale = 160 / Number(artwork.viewBox.split(' ')[2]);
    assert.equal(artwork.tracks.length, 8);
    for (const track of artwork.tracks) {
      assert.ok(track.motionPath.endsWith('Z'));
      assert.ok(artwork.pixels.some(pixel => pixel.mark && pixel.path === track.path && pixel.color === track.color));
      for (let i = 0; i < track.phases.length; i++) {
        const next = track.phases[(i + 1) % track.phases.length] + (i === track.phases.length - 1 ? 1 : 0);
        assert.ok(Math.abs(next - track.phases[i] - 0.1) < 1e-9, 'including the seam, marks must stay equally spaced');
      }
    }
    for (const ring of [0, 1]) {
      const clips = artwork.pixels.filter(pixel => pixel.ring === ring);
      for (let frame = 0; frame < 120; frame++) {
        const marks = artwork.tracks.filter(track => track.ring === ring).flatMap(track =>
          track.phases.map(phase => markAt(track, phase + frame / 120, scale)));
        const covered = clips.filter(cell => marks.some(([x, y]) =>
          Math.min(cell.x + cell.size, x + 4) - Math.max(cell.x, x) > 0.5 &&
          Math.min(cell.y + cell.size, y + 4) - Math.max(cell.y, y) > 0.5));
        assert.ok(covered.some(cell => cell.y < 24), 'top strip must retain markings');
        assert.ok(covered.some(cell => cell.y >= 56), 'bottom strip must retain markings');
        assert.ok(covered.some(cell => cell.x < ring * 64 + 16 && cell.y >= 24 && cell.y < 56), 'left turn must retain markings');
        assert.ok(covered.some(cell => cell.x >= ring * 64 + 80 && cell.y >= 24 && cell.y < 56), 'right turn must retain markings');
        assert.ok(covered.some(cell => cell.x >= 64 && cell.x < 96), 'middle crossing must retain markings');
      }
    }
    const clipped = artwork.clips.flatMap(path => path.match(/M[^Z]+Z/g)).sort();
    const original = artwork.pixels.filter(pixel => !pixel.dot).map(pixel => pixel.path).sort();
    assert.deepEqual(clipped, original);
  }
});
