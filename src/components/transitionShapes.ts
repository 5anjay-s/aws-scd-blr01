export type ShapeKind = 'circle' | 'square' | 'diamond' | 'cross';
export type TransitionShape = {
  x: number;
  y: number;
  radius: number;
  kind: ShapeKind;
  color: number;
  coverAt: number;
  revealAt: number;
};

const coverStagger = 0.18;
const revealStagger = 0.14;

type ShapeRect = { x: number; y: number; width: number; height: number };

const diagonal = Math.SQRT2;
const arm = Math.SQRT1_2;
const pixelsPerRadius = 8;

function createPixelOutline(kind: ShapeKind): ShapeRect[] {
  const extent = kind === 'circle' || kind === 'square' ? 1 : diagonal;
  const rows = Math.ceil(extent * pixelsPerRadius);
  const rects: ShapeRect[] = [];

  for (let row = -rows; row < rows; row++) {
    const y = row / pixelsPerRadius;
    const height = 1 / pixelsPerRadius;
    const nearestY = Math.max(y, -(y + height), 0);
    const halfWidth = kind === 'circle' ? Math.sqrt(1 - nearestY * nearestY)
      : kind === 'diamond' ? diagonal - nearestY
      : kind === 'cross' ? (nearestY < arm ? diagonal : arm) : 1;
    // Round outward so the stepped silhouettes still contain the unit circle.
    // This preserves complete viewport coverage at the page handoff.
    const x = -Math.ceil(halfWidth * pixelsPerRadius) / pixelsPerRadius;
    const width = -x * 2;
    const previous = rects[rects.length - 1];
    if (previous && previous.x === x && previous.width === width) previous.height += height;
    else rects.push({ x, y, width, height });
  }
  return rects;
}

export const shapePixelRects: Record<ShapeKind, ShapeRect[]> = {
  circle: createPixelOutline('circle'),
  square: createPixelOutline('square'),
  diamond: createPixelOutline('diamond'),
  cross: createPixelOutline('cross'),
};

export function createTransitionShapes(width: number, height: number, origin?: { x: number; y: number }) {
  const cellSize = Math.max(180, Math.min(width, height) / 2.3);
  const columns = Math.ceil(width / cellSize);
  const rows = Math.ceil(height / cellSize);
  const cellWidth = width / columns;
  const cellHeight = height / rows;
  const start = { x: Math.max(0, Math.min(width, origin?.x ?? width / 2)),
    y: Math.max(0, Math.min(height, origin?.y ?? height / 2)) };
  const kinds: ShapeKind[] = ['circle', 'cross', 'square', 'diamond'];
  const shapes: TransitionShape[] = [];

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // Slightly offset centers avoid a rigid checkerboard as the shapes overlap.
      const offsetX = ((row + column * 2) % 3 - 1) * 0.07;
      const offsetY = ((row * 2 + column) % 3 - 1) * 0.07;
      const x = (column + 0.5 + offsetX) * cellWidth;
      const y = (row + 0.5 + offsetY) * cellHeight;
      const radius = Math.hypot(cellWidth * (0.5 + Math.abs(offsetX)),
        cellHeight * (0.5 + Math.abs(offsetY))) + 2;
      shapes.push({ x, y, radius,
        kind: kinds[(column + row * 3) % kinds.length],
        color: (column * 3 + row) % 4,
        coverAt: Math.hypot(x - start.x, y - start.y),
        revealAt: 0,
      });
    }
  }

  shapes.sort((a, b) => a.coverAt - b.coverAt);
  const first = shapes[0].coverAt;
  const span = shapes[shapes.length - 1].coverAt - first || 1;
  return shapes.map(shape => {
    const distance = (shape.coverAt - first) / span;
    // The topmost shapes clear first, exposing the shapes underneath in turn.
    return { ...shape, coverAt: distance * coverStagger, revealAt: (1 - distance) * revealStagger };
  });
}

export function shapeScale(shape: TransitionShape, progress: number, phase: 'cover' | 'reveal') {
  if (progress <= 0) return phase === 'cover' ? 0 : 1;
  if (progress >= 1) return phase === 'cover' ? 1 : 0;
  const delay = phase === 'cover' ? shape.coverAt : shape.revealAt;
  const duration = 1 - (phase === 'cover' ? coverStagger : revealStagger);
  const t = Math.max(0, Math.min((progress - delay) / duration, 1));
  const eased = t * t * (3 - 2 * t);
  return phase === 'cover' ? eased : 1 - eased;
}
