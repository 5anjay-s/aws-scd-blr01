import type { CSSProperties } from 'react';
import artwork from '../../public/assets/1154-483-382cb.svg?raw';

// Use the original Figma path as a mask, preserving every pixel coordinate.
// Only the two surface colors change to match the neighboring sections.
const stencil = artwork.replace('fill="#0B1020"', 'fill="none"');
const mask = `url("data:image/svg+xml,${encodeURIComponent(stencil)}")`;
type Tone = 'navy' | 'orange' | 'lime' | 'cyan' | 'white';

export function DitherDivider({ from, to, className = '' }: { from: Tone; to: Tone; className?: string }) {
  return <div className={`dither-divider ${className}`} aria-hidden="true" style={{
    '--dither-mask': mask,
    '--dither-from': `var(--${from})`,
    '--dither-to': `var(--${to})`,
  } as CSSProperties} />;
}
