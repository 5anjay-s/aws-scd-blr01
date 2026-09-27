export function readQuoteArtwork(svg: string) {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) return null;
  const width = Number(viewBox.split(' ')[2]);
  if (!Number.isFinite(width) || width <= 0) return null;
  const fields: { path: string; color: string; band?: number }[] = [];
  for (const [, attributes] of svg.matchAll(/<path\b([^>]+)>/g)) {
    const name = attributes.match(/id="([^"]+)"/)?.[1];
    const path = attributes.match(/\bd="([^"]+)"/)?.[1];
    const color = attributes.match(/fill="(#[\da-fA-F]{6})"/)?.[1];
    if (!name || !path || !color) return null;
    if (!name.endsWith('/ cyan')) {
      fields.push({ path, color });
      continue;
    }
    // Animate only the existing cyan/lime dither. Keep all source coordinates.
    // Figma also includes a zero-area endpoint at the viewBox corner.
    const squares = [...path.matchAll(/M([\d.]+) [^MZ]+Z/g)];
    if (squares.map(match => match[0]).join('') !== path) return null;
    const bands = Array.from({ length: 8 }, () => [] as string[]);
    for (const [square, x] of squares) bands[Math.min(7, Math.floor(Number(x) / width * 8))].push(square);
    bands.forEach((parts, band) => {
      if (parts.length) fields.push({ path: parts.join(''), color, band });
    });
  }
  return fields.length ? { viewBox, fields } : null;
}
