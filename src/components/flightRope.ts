type Point = { x: number; y: number };

// Shared by the loading banner and the hero's letter delivery.
export function flightRope(start: Point, end: Point, slack: number) {
  let path = `M${start.x} ${start.y}`;
  for (let step = 1; step <= 20; step++) {
    const t = step / 20;
    const x = Math.round((start.x + (end.x - start.x) * t) / 2) * 2;
    const y = Math.round((start.y + (end.y - start.y) * t + Math.sin(t * Math.PI) * slack) / 2) * 2;
    path += `H${x}V${y}`;
  }
  return `${path}L${end.x} ${end.y}`;
}
