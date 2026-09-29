export const badgeLooks = [
  { id: 'meet', label: 'Meet me', node: '1759:6933' },
  { id: 'wave', label: 'Next wave', node: '1759:6960' },
  { id: 'company', label: 'Good company', node: '1769:3423' },
  { id: 'builder', label: 'One more', node: '1769:3451' },
] as const;
export type BadgeLook = typeof badgeLooks[number]['id'];
export const BADGE_WIDTH = 1080;
export const BADGE_HEIGHT = 1350;

const sources = {
  logo: '/assets/1759-6933-a729e.svg',
  meetField: '/assets/1759-6933-0445e.svg',
  meetDither: '/assets/1759-6933-cfc2e.svg',
  waveLeft: '/assets/1759-6960-a23af.svg',
  waveRight: '/assets/1759-6960-81908.svg',
  waveField: '/assets/1759-6960-c012d.svg',
  waveDither: '/assets/1759-6960-04e24.svg',
  woven: '/assets/1759-6996-7892a.svg',
  printBacking: '/assets/1759-6996-ea29d.svg',
  printPaper: '/assets/1759-6996-ce464.svg',
  printDither: '/assets/1759-6996-a9174.svg',
  printPerforation: '/assets/1759-6996-a3ceb.svg',
  printer: '/assets/1759-6996-fa879.svg',
};
type Artwork = Record<keyof typeof sources, HTMLImageElement>;
let artworkPromise: Promise<Artwork> | undefined;

export function loadBadgeArtwork() {
  return artworkPromise ??= Promise.all(Object.entries(sources).map(async ([key, src]) => {
    const image = new Image();
    image.src = src;
    await image.decode();
    return [key, image] as const;
  })).then((entries) => Object.fromEntries(entries) as Artwork).catch((error: unknown) => {
    artworkPromise = undefined;
    throw error;
  });
}

export function coverCrop(sourceWidth: number, sourceHeight: number, width: number, height: number) {
  const scale = Math.max(width / sourceWidth, height / sourceHeight);
  const sw = width / scale;
  const sh = height / scale;
  return { sx: (sourceWidth - sw) / 2, sy: (sourceHeight - sh) / 2, sw, sh };
}

export function badgeFilename(name: string, look: BadgeLook) {
  const slug = name.normalize('NFKC').trim().toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 60);
  return `aws-scd-${slug || 'attendee'}-${look}.png`;
}

// All coordinates come from the 540 × 675 Figma badge components.
// The same renderer supplies the preview, thumbnails, and the 2× PNG export.
export function drawBadge(canvas: HTMLCanvasElement, art: Artwork, look: BadgeLook,
  name = '', photo: HTMLImageElement | null = null, width = BADGE_WIDTH) {
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Badge preview is unavailable in this browser.');
  canvas.width = width;
  canvas.height = Math.round(width * BADGE_HEIGHT / BADGE_WIDTH);
  const scale = width / 540;
  ctx.scale(scale, scale);
  const palette = getComputedStyle(document.documentElement);
  const color = (tone: string) => palette.getPropertyValue(`--${tone}`).trim();
  const navy = color('navy'), white = color('white'), cyan = color('cyan');
  const orange = color('orange'), violet = color('violet'), lime = color('lime');
  const fill = (tone: string, x: number, y: number, w: number, h: number) => {
    ctx.fillStyle = tone; ctx.fillRect(x, y, w, h);
  };
  const img = (key: keyof Artwork, x: number, y: number, w: number, h: number) => ctx.drawImage(art[key], x, y, w, h);
  const text = (value: string, x: number, y: number, size: number, tone: string,
    family = 'Geist Mono', lineHeight = size * 1.4, maxWidth?: number) => {
    const arcade = family === 'Arcade Classic';
    const weight = family === 'Azeret Mono' ? 500 : 400;
    const setFont = () => {
      ctx.font = `${weight} ${size}px "${family}"`;
      ctx.fontKerning = arcade ? 'none' : 'auto';
      ctx.letterSpacing = arcade ? `${size * .01}px` : '0px';
      ctx.wordSpacing = arcade ? `${size * .12}px` : '0px';
    };
    setFont();
    const width = () => ctx.measureText(value).width - (arcade ? (value.match(/\./g)?.length ?? 0) * size * .28 : 0);
    if (maxWidth && width() > maxWidth) {
      size *= maxWidth / width();
      setFont();
    }
    ctx.fillStyle = tone;
    ctx.textBaseline = 'alphabetic';
    const metrics = ctx.measureText('Hg');
    const ascent = metrics.fontBoundingBoxAscent ?? size * .8;
    const descent = metrics.fontBoundingBoxDescent ?? size * .2;
    const baseline = y + (lineHeight - ascent - descent) / 2 + ascent;
    if (arcade) {
      let cursor = x;
      for (const part of value.split(/(\.)/)) {
        if (part === '.') cursor -= size * .28;
        ctx.fillText(part, cursor, baseline);
        cursor += ctx.measureText(part).width;
      }
    } else ctx.fillText(value, x, baseline);
  };
  const lines = (values: string[], x: number, y: number, size: number, tone: string, family: string, height: number) =>
    values.forEach((value, i) => text(value, x, y + i * height, size, tone, family, height));
  const portrait = (x: number, y: number, w: number, h: number, mask?: keyof Artwork) => {
    if (!photo) return;
    const layer = document.createElement('canvas');
    layer.width = Math.ceil(w * scale); layer.height = Math.ceil(h * scale);
    const painter = layer.getContext('2d')!;
    const crop = coverCrop(photo.naturalWidth, photo.naturalHeight, w, h);
    painter.drawImage(photo, crop.sx, crop.sy, crop.sw, crop.sh, 0, 0, layer.width, layer.height);
    if (mask) {
      painter.globalCompositeOperation = 'destination-in';
      painter.drawImage(art[mask], 0, 0, layer.width, layer.height);
    }
    ctx.drawImage(layer, x, y, w, h);
  };
  const placeholder = (x: number, y: number, tone: string) => {
    if (!photo) {
      ctx.save(); ctx.textAlign = 'center';
      text('YOUR PHOTO', x, y, 18, tone, 'Geist Mono', 28); ctx.restore();
    }
  };
  const signature = (y: number, tone: string, captionTone: string, size = 38, caption = 'I’M ATTENDING / AWS SCD BENGALURU') => {
    text(name.trim() || 'YOUR NAME', 28, y, size, tone, 'Azeret Mono', 42, 484);
    text(caption, 28, y + 56, 11, captionTone, 'Geist Mono', 15);
  };

  fill(look === 'meet' ? white : look === 'builder' ? violet : navy, 0, 0, 540, 675);
  const dark = look === 'wave' || look === 'company';
  img('logo', 32, 30, 64, 36);
  lines(['AWS STUDENT', 'COMMUNITY DAY'], 120, 28, 14, dark ? white : navy, 'Geist Mono', 20);
  lines(['BENGALURU', '06 NOV 2026'], 414, 33, 11, dark ? cyan : navy, 'Geist Mono', 15);

  if (look === 'meet') {
    img('meetField', 262, 140, 278, 422);
    portrait(262, 140, 278, 422, 'meetField');
    lines(['MEET', 'ME AT', 'SCD.'], 28, 106, 88, navy, 'Arcade Classic', 80);
    fill(cyan, 28, 392, 48, 8);
    lines(['GOOD PEOPLE.', 'BIG IDEAS.', 'SEE YOU THERE.'], 28, 412, 12, navy, 'Geist Mono', 17);
    img('meetDither', 0, 514, 540, 52);
    fill(navy, 0, 562, 540, 113);
    signature(579, white, cyan);
    placeholder(406, 340, navy);
  } else if (look === 'wave') {
    text('NEXT WAVE.', 28, 99, 88, violet, 'Arcade Classic', 83, 484);
    img('waveLeft', 20, 201, 48, 380);
    img('waveRight', 472, 201, 48, 380);
    img('waveField', 84, 182, 372, 388);
    portrait(84, 182, 372, 388, 'waveField');
    img('waveDither', 0, 518, 540, 50);
    fill(lime, 0, 568, 540, 107);
    signature(581, navy, navy, 38, 'I’M ATTENDING / AWS STUDENT COMMUNITY DAY');
    placeholder(270, 335, navy);
  } else if (look === 'company') {
    lines(['IN GOOD', 'COMPANY.'], 28, 94, 82, white, 'Arcade Classic', 78);
    // The export retains the original badge-edge clipping of the woven links.
    img('woven', 0, 326, 540, 292.5);
    portrait(60, 250, 440, 304);
    ctx.save(); ctx.beginPath(); ctx.rect(0, 492, 540, 116); ctx.clip();
    img('woven', 0, 326, 540, 292.5); ctx.restore();
    signature(592, white, cyan, 36);
    placeholder(270, 284, white);
  } else {
    text('ONE MORE', 28, 97, 84, navy, 'Arcade Classic', 78, 484);
    ctx.save();
    // Figma's print assembly has a four-degree tilt around its center.
    ctx.translate(279, 398); ctx.rotate(-4 * Math.PI / 180); ctx.translate(-232, -222);
    const printedAsset = (key: keyof Artwork, x: number, y: number, originalWidth: number) => {
      // Exported child vectors already include this rotation. Cancel it locally
      // so the shared assembly transform applies it exactly once.
      ctx.save(); ctx.translate(x, y); ctx.rotate(4 * Math.PI / 180);
      ctx.drawImage(art[key], 0, -Math.sin(4 * Math.PI / 180) * originalWidth,
        art[key].naturalWidth * 7.5, art[key].naturalHeight * 7.5);
      ctx.restore();
    };
    printedAsset('printBacking', 42, 46, 404);
    ctx.save(); ctx.translate(28, 32);
    printedAsset('printPaper', 0, 0, 408);
    fill(cyan, 16, 20, 376, 234);
    portrait(16, 20, 376, 234);
    printedAsset('printDither', 16, 222, 376);
    placeholder(204, 123, navy);
    printedAsset('printPerforation', 0, 268, 408);
    text('BUILDER.', 16, 279, 66, navy, 'Arcade Classic', 64, 376);
    text(name.trim() || 'YOUR NAME', 16, 346, 25, navy, 'Azeret Mono', 28, 376);
    text('I’M ATTENDING / AWS SCD BENGALURU', 16, 380, 10, navy, 'Geist Mono', 14);
    ctx.restore();
    printedAsset('printer', 0, 0, 464);
    fill(white, 16, 38, 432, 6); fill(orange, 430, 12, 10, 10);
    text('SCD / COMMUNITY PRINT', 16, 11, 10, white, 'Geist Mono', 14);
    ctx.restore();
    text('SOME THINGS ARE BETTER BUILT TOGETHER.', 28, 646, 10, navy, 'Geist Mono', 14);
  }
}
