const photoFormats = [
  { type: 'image/jpeg', signature: [0xff, 0xd8, 0xff] },
  { type: 'image/png', signature: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a] },
  { type: 'image/webp', signature: [0x52, 0x49, 0x46, 0x46] },
];

export async function badgePhotoError(file: File) {
  const format = photoFormats.find(format => format.type === file.type);

  if (!format) return 'Choose a JPG, PNG, or WebP photo.';
  if (file.size > 15 * 1024 * 1024) return 'Choose a photo smaller than 15 MB.';

  const bytes = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const matchesHeader = format.signature.every((byte, index) => bytes[index] === byte);
  const matchesWebp = file.type !== 'image/webp'
    || [0x57, 0x45, 0x42, 0x50].every((byte, index) => bytes[index + 8] === byte);

  if (bytes.length < 12 || !matchesHeader || !matchesWebp) {
    return 'This file does not match its photo format. Choose a JPG, PNG, or WebP photo.';
  }

  return null;
}
