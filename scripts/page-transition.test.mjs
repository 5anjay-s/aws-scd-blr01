import test from 'node:test';
import assert from 'node:assert/strict';
import { createTransitionShapes, shapeScale, shapePixelRects } from '../src/components/transitionShapes.ts';

function contains(shape, x, y, scale, ratioX, ratioY) {
  if (!scale) return false;
  const size = shape.radius * scale;
  return shapePixelRects[shape.kind].some(rect => {
    const left = Math.round((shape.x + rect.x * size) * ratioX);
    const right = Math.round((shape.x + (rect.x + rect.width) * size) * ratioX);
    const top = Math.round((shape.y + rect.y * size) * ratioY);
    const bottom = Math.round((shape.y + (rect.y + rect.height) * size) * ratioY);
    return x * ratioX >= left && x * ratioX <= right && y * ratioY >= top && y * ratioY <= bottom;
  });
}

test('the shape outlines cover the screen at the page swap, including corners and extreme aspect ratios', () => {
  for (const [width, height] of [[320, 740], [393, 853], [853, 393], [1365, 901], [3840, 2160], [5120, 1440], [180, 1024]]) {
    for (const origin of [undefined, { x: width, y: 0 }, { x: -100, y: height + 300 }]) {
      const shapes = createTransitionShapes(width, height, origin);
      assert.ok(shapes.length < 60);
      // Check the snapped pixel outlines at ordinary, fractional, and retina DPRs.
      for (const dpr of [1, 1.25, 2]) {
        const ratioX = Math.ceil(width * dpr) / width;
        const ratioY = Math.ceil(height * dpr) / height;
        for (let row = 0; row <= 80; row++) {
          for (let column = 0; column <= 100; column++) {
            const x = column / 100 * width;
            const y = row / 80 * height;
            assert.ok(shapes.some(shape => contains(shape, x, y, shapeScale(shape, 1, 'cover'), ratioX, ratioY)),
              `Uncovered point ${x}, ${y} in ${width}x${height} at DPR ${dpr}`);
          }
        }
      }
      const revealed = createTransitionShapes(width, height, origin);
      assert.deepEqual(revealed, shapes, 'geometry must be stable across the page swap');
      shapes.forEach(shape => {
        assert.equal(shapeScale(shape, 1, 'cover'), shapeScale(shape, 0, 'reveal'));
        assert.equal(shapeScale(shape, 0, 'cover'), 0);
        assert.equal(shapeScale(shape, 1, 'reveal'), 0);
      });
    }
  }
});

test('solid shapes grow and shrink continuously without bouncing, even when frames are skipped', () => {
  const shapes = createTransitionShapes(393, 853, { x: 320, y: 50 });
  assert.equal(shapes[0].coverAt, 0);
  for (const shape of shapes) {
    for (const phase of ['cover', 'reveal']) {
      let previous = shapeScale(shape, 0, phase);
      for (const progress of [0.01, 0.2, 0.43, 0.77, 0.96, 1, 1.5]) {
        const scale = shapeScale(shape, progress, phase);
        assert.ok(scale >= 0 && scale <= 1);
        assert.ok(phase === 'cover' ? scale >= previous : scale <= previous);
        previous = scale;
      }
    }
    assert.ok(shapeScale(shape, 0.5, 'cover') > 0 && shapeScale(shape, 0.5, 'cover') < 1);
  }
});
