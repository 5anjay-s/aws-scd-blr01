import test from 'node:test';
import assert from 'node:assert/strict';
import { aimTelescope, lightBeamPath, telescopeGeometry, telescopeLens } from '../src/components/telescopeLight.ts';

test('the optical axis reaches every sponsor from the lens while the tripod stays fixed', () => {
  const pivot = { x: 1256, y: 824 };
  for (const width of [448, 322.56, 264.5]) {
    const scale = width / 448;
    const geometry = telescopeGeometry({ x: pivot.x * scale, y: pivot.y * scale }, width);
    for (const target of [{ x: 650, y: 270 }, { x: 430, y: 525 }, { x: 890, y: 525 }]) {
      const point = { x: target.x * scale, y: target.y * scale };
      const rotation = aimTelescope(geometry, point);
      const lens = telescopeLens(geometry, rotation);
      const axis = (geometry.axisAngle + rotation) * Math.PI / 180;
      const delta = { x: point.x - lens.x, y: point.y - lens.y };
      assert.ok(Math.abs(Math.cos(axis) * delta.y - Math.sin(axis) * delta.x) < 1e-8);
      assert.ok(Math.cos(axis) * delta.x + Math.sin(axis) * delta.y > 0, 'light exits the front of the telescope');
      assert.ok(Math.abs(Math.hypot(lens.x - geometry.pivot.x, lens.y - geometry.pivot.y)
        - Math.hypot(geometry.lensOffset.x, geometry.lensOffset.y)) < 1e-8);
      assert.deepEqual(geometry.pivot, { x: pivot.x * scale, y: pivot.y * scale });
    }
  }
});

test('the full beam joins both receiving corners without crossing its edges', () => {
  const lens = { x: 1170, y: 720 };
  const target = { x: 650, y: 270 };
  const edge = [{ x: 48, y: 466 }, { x: 1392, y: 466 }];
  const path = lightBeamPath(lens, target, edge, 1, 1, 10);
  const numbers = path.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const points = Array.from({ length: 4 }, (_, i) => ({ x: numbers[i * 2], y: numbers[i * 2 + 1] }));
  assert.deepEqual(points[1], edge[1]);
  assert.deepEqual(points[2], edge[0]);
  assert.ok(points[0].x > points[3].x);
  assert.ok(points[0].y < points[3].y);
  assert.ok(Number.isFinite(aimTelescope(telescopeGeometry(lens, 448), lens)), 'a degenerate target stays finite');
});
