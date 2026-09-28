import { useContext, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ImgHTMLAttributes } from 'react';
import { gsap } from './animation';
import { readQuoteArtwork } from './quotePixels';
import { ManifestoMotionContext } from './ManifestoMotion';

const artworkSources = new Set([
  '/assets/860-5246-42ed8.svg', '/assets/860-5246-85f17.svg',
  '/assets/866-8542-c8e08.svg', '/assets/866-8542-0b5fe.svg',
]);
type QuoteArtwork = ReturnType<typeof readQuoteArtwork>;
const artworkCache = new Map<string, Promise<QuoteArtwork>>();

function loadArtwork(src: string) {
  if (!artworkCache.has(src)) {
    artworkCache.set(src, fetch(src).then(response => response.ok ? response.text() : '')
      .then(readQuoteArtwork).catch(() => null));
  }
  return artworkCache.get(src)!;
}

export function PixelQuote({ src, className, alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLSpanElement>(null);
  const playback = useRef<gsap.core.Timeline>(null);
  const { active, reducedMotion } = useContext(ManifestoMotionContext);
  const [loaded, setLoaded] = useState<{ src: string; artwork: QuoteArtwork }>();
  const artwork = loaded && loaded.src === src ? loaded.artwork : null;
  useEffect(() => {
    if (!active || !src || !artworkSources.has(src)) return;
    let cancelled = false;
    // Reuse the public SVG when visible instead of embedding four exports in JS.
    void loadArtwork(src).then(result => { if (!cancelled) setLoaded({ src, artwork: result }); });
    return () => { cancelled = true; };
  }, [active, src]);
  useLayoutEffect(() => {
    if (!artwork || reducedMotion) return;
    const context = gsap.context(() => {
      playback.current = gsap.timeline({ paused: true });
      const closingDelay = ref.current!.closest('.manifesto-quote-closing') ? 0.75 : 0;
      ref.current!.querySelectorAll<SVGPathElement>('.pixel-quote-pulse').forEach(pixel => {
        const delay = Number(pixel.style.getPropertyValue('--quote-band')) * 0.05 + closingDelay;
        const pulse = gsap.timeline({ repeat: -1, delay })
          .to(pixel, { opacity: 0.15, duration: 0.36, ease: 'steps(1)' })
          .to(pixel, { opacity: 1, duration: 0.12, ease: 'steps(1)' })
          .to({}, { duration: 1.52 });
        playback.current!.add(pulse, 0);
      });
    }, ref);
    return () => { context.revert(); playback.current = null; };
  }, [artwork, reducedMotion]);
  useLayoutEffect(() => { playback.current?.paused(!active); }, [active, artwork, reducedMotion]);
  return <span ref={ref} className={[className, 'pixel-quote'].filter(Boolean).join(' ')} data-artwork={Boolean(artwork)}>
    <img {...props} src={src} alt={alt} />
    {artwork && <svg className="pixel-quote-art" viewBox={artwork.viewBox} preserveAspectRatio="none" fill="none" aria-hidden="true">
      {artwork.fields.map((field, index) => <path key={index} d={field.path} fill={field.color}
        className={field.band === undefined ? undefined : 'pixel-quote-pulse'}
        style={field.band === undefined ? undefined : { '--quote-band': field.band } as CSSProperties} />)}
    </svg>}
  </span>;
}
