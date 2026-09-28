export type Point = { x: number; y: number };
export type LightGeometry = {
  pivot: Point;
  lensOffset: Point;
  axisAngle: number;
};

const radians = Math.PI / 180;
const rotate = (point: Point, angle: number): Point => ({
  x: point.x * Math.cos(angle * radians) - point.y * Math.sin(angle * radians),
  y: point.x * Math.sin(angle * radians) + point.y * Math.cos(angle * radians),
});

// Both original exports share the 448px artwork coordinates and 18.25° layout rotation.
export function telescopeGeometry(pivot: Point, artworkWidth: number): LightGeometry {
  const scale = artworkWidth / 448;
  return { pivot, lensOffset: rotate({ x: -106 * scale, y: -70 * scale }, 18.25), axisAngle: -158.2 + 18.25 };
}

export function telescopeLens(geometry: LightGeometry, rotation: number): Point {
  const offset = rotate(geometry.lensOffset, rotation);
  return { x: geometry.pivot.x + offset.x, y: geometry.pivot.y + offset.y };
}

export function aimTelescope(geometry: LightGeometry, target: Point): number {
  const delta = { x: target.x - geometry.pivot.x, y: target.y - geometry.pivot.y };
  const axis = rotate({ x: 1, y: 0 }, geometry.axisAngle);
  const sideways = axis.x * geometry.lensOffset.y - axis.y * geometry.lensOffset.x;
  const distance = Math.hypot(delta.x, delta.y);
  if (distance < 1) return 0;
  // Aim the optical axis from the lens, rather than a line from the tripod bearing.
  const angle = Math.atan2(delta.y, delta.x) / radians - geometry.axisAngle
    - Math.asin(Math.max(-1, Math.min(1, sideways / distance))) / radians;
  return ((angle + 540) % 360) - 180;
}

export function lightBeamPath(lens: Point, target: Point, edge: [Point, Point], travel: number, spread: number, lensWidth: number): string {
  const distance = Math.max(1, Math.hypot(target.x - lens.x, target.y - lens.y));
  const normal = { x: -(target.y - lens.y) / distance, y: (target.x - lens.x) / distance };
  const near = [1, -1].map(sign => ({ x: lens.x + normal.x * lensWidth * sign, y: lens.y + normal.y * lensWidth * sign }));
  const projection = (point: Point) => point.x * normal.x + point.y * normal.y;
  const orderedEdge = projection(edge[0]) >= projection(edge[1]) ? edge : [edge[1], edge[0]];
  const far = orderedEdge.map((point, index) => {
    const sign = index === 0 ? 1 : -1;
    const seed = { x: target.x + normal.x * 3.5 * sign, y: target.y + normal.y * 3.5 * sign };
    return {
      x: lens.x + (seed.x + (point.x - seed.x) * spread - lens.x) * travel,
      y: lens.y + (seed.y + (point.y - seed.y) * spread - lens.y) * travel,
    };
  });
  return [near[0], far[0], far[1], near[1]].map((point, index) =>
    `${index ? 'L' : 'M'}${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(' ') + ' Z';
}
