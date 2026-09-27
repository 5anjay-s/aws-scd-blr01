type RibbonPixel = {
  x: number;
  y: number;
  size: number;
  color: string;
  ring: 0 | 1 | null;
  baseColor: string;
  dot: boolean;
  mark: boolean;
  path: string;
};
type RibbonArtwork = {
  viewBox: string;
  pixels: RibbonPixel[];
  fields: { path: string; color: string }[];
  clips: [string, string];
  tracks: {
    ring: 0 | 1;
    path: string;
    color: string;
    motionPath: string;
    phases: number[];
  }[];
};

export const RIBBON_CIRCUIT_SECONDS = 10;
// Four parallel tracks stay inside each 16-unit-wide strip. Repeating the
// same pattern around a complete circuit also supplies its hidden crossings.
function ribbonTracks(pixels: RibbonPixel[], scale: number): RibbonArtwork['tracks'] {
  return ([0, 1] as const).flatMap(ring => {
    const square = pixels.find(pixel => pixel.mark && pixel.ring === ring)!;
    const originX = square.x + square.size / 2;
    const originY = square.y + square.size / 2;
    return Array.from({ length: 4 }, (_, lane) => {
      const inset = 2 + lane * 4;
      const corner = 12 + inset * (Math.SQRT2 - 1);
      const points = [
        [corner, 8 + inset], [96 - corner, 8 + inset],
        [96 - inset, 8 + corner], [96 - inset, 72 - corner],
        [96 - corner, 72 - inset], [corner, 72 - inset],
        [inset, 72 - corner], [inset, 8 + corner],
      ];
      if (ring === 1) points.reverse();
      const motionPath = points.map(([x, y], index) =>
        `${index === 0 ? 'M' : 'L'}${((x + ring * 64 - originX) / scale).toFixed(4)} ${((y - originY) / scale).toFixed(4)}`
      ).join('') + 'Z';
      return {
        ring, path: square.path, color: square.color, motionPath,
        // Stagger neighboring lanes to retain the diagonal square markings.
        // Ten equally spaced marks include the wrap from the last to the first.
        phases: Array.from({ length: 10 }, (_, index) => index / 10 + lane / 60),
      };
    });
  });
}

// Keep each Figma subpath verbatim, including its original decimal coordinates.
export function readRibbonArtwork(svg: string): RibbonArtwork | null {
  const viewBox = svg.match(/viewBox="(0 0 [\d.]+ [\d.]+)"/)?.[1];
  const width = Number(viewBox?.split(' ')[2]);
  if (!viewBox || !width) return null;
  const scale = 160 / width;
  const pixels: RibbonPixel[] = [];
  const fields: RibbonArtwork['fields'] = [];
  const palette = new Map<string, string>();
  for (const [, attributes] of svg.matchAll(/<path\b([^>]+)>/g)) {
    const name = attributes.match(/id="([^"]+)"/)?.[1];
    const color = attributes.match(/fill="(#[\da-fA-F]{6})"/)?.[1];
    const path = attributes.match(/\bd="([^"]+)"/)?.[1];
    if (!name || !color || !path) return null;
    palette.set(name, color);
    const squares = [...path.matchAll(/M([\d.]+) ([\d.]+)H([\d.]+)V[\d.]+H[\d.]+V[\d.]+Z/g)];
    if (squares.map(match => match[0]).join('') !== path) return null;
    const field: string[] = [];
    for (const [sourcePath, left, top, right] of squares) {
      const x = Math.round(Number(left) * scale);
      const y = Math.round(Number(top) * scale);
      const size = Math.round((Number(right) - Number(left)) * scale);
      const dot = y === 0;
      const mark = name.startsWith('white');
      const crossing = x >= 64 && x < 96 && (y < 24 || y >= 52);
      let ring: 0 | 1 | null = null;
      if (!dot) {
        if (crossing) ring = y < 40 ? 0 : 1;
        else if (name.startsWith('cyan')) ring = 1;
        else if (name.startsWith('violet') || name.startsWith('navy')) ring = 0;
        else ring = x < 64 || (x >= 80 && x < 96) ? 0 : 1;
      }
      if (!dot && !mark) field.push(sourcePath);
      pixels.push({ x, y, size, color, ring, dot, mark, path: sourcePath, baseColor: color });
    }
    if (field.length) fields.push({ path: field.join(''), color });
  }
  const left = palette.get('violet / Pixel field');
  const right = palette.get('cyan / Pixel field');
  if (!pixels.length || !left || !right || ![0, 1].every(ring => pixels.some(pixel => pixel.mark && pixel.ring === ring))) return null;
  for (const pixel of pixels) {
    if (pixel.mark) pixel.baseColor = pixel.ring === 0 ? left : right;
  }
  const clips = [0, 1].map(ring => pixels.filter(pixel => pixel.ring === ring).map(pixel => pixel.path).join('')) as [string, string];
  return { viewBox, pixels, fields, clips, tracks: ribbonTracks(pixels, scale) };
}
