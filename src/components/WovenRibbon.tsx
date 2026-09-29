import { useEffect, useLayoutEffect, useId, useRef, useState, type ImgHTMLAttributes } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';
import { readRibbonArtwork, RIBBON_CIRCUIT_SECONDS } from './ribbonPixels';
const artworkSources = new Set([
  '/assets/1160-5759-305fd.svg', '/assets/1168-493-5454f.svg',
  '/assets/860-5267-10945.svg', '/assets/1168-495-22597.svg',
  '/assets/1168-496-4ca63.svg', '/assets/1265-3035-453bd.svg',
  '/assets/1168-498-e1335.svg',
]);
type RibbonArtwork = ReturnType<typeof readRibbonArtwork>;
const artworkCache = new Map<string, Promise<RibbonArtwork>>();

function loadArtwork(src: string) {
  if (!artworkCache.has(src)) {
    artworkCache.set(src, fetch(src).then(response => response.ok ? response.text() : '')
      .then(readRibbonArtwork).catch(() => null));
  }
  return artworkCache.get(src)!;
}

type WovenRibbonProps = ImgHTMLAttributes<HTMLImageElement> & { active?: boolean };

export function WovenRibbon({ className, src, alt = '', active = true, ...props }: WovenRibbonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const nearby = useInView(ref, { once: true, margin: '160px' });
  const visible = useInView(ref, { amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const pageVisible = usePageVisible();
  const marks = useRef<gsap.core.Timeline>(null);
  const dots = useRef<gsap.core.Timeline>(null);
  const [loaded, setLoaded] = useState<{ src: string; artwork: RibbonArtwork }>();
  const artwork = loaded?.src === src ? loaded?.artwork : null;

  useEffect(() => {
    if (!nearby || reducedMotion || !src || !artworkSources.has(src)) return;
    let cancelled = false;
    // Keep the original image until this ribbon is close enough to animate.
    void loadArtwork(src).then(result => { if (!cancelled) setLoaded({ src, artwork: result }); });
    return () => { cancelled = true; };
  }, [nearby, reducedMotion, src]);

  useLayoutEffect(() => {
    if (!artwork || reducedMotion) return;
    const context = gsap.context(() => {
      marks.current = gsap.timeline({ paused: true });
      svgRef.current!.querySelectorAll<SVGPathElement>('.woven-ribbon-mark').forEach(mark => {
        const phase = Number(mark.dataset.phase);
        marks.current!.to(mark, {
          motionPath: { path: mark.dataset.motionPath!, start: phase, end: phase + 1, autoRotate: false },
          duration: RIBBON_CIRCUIT_SECONDS, repeat: -1, ease: 'none', immediateRender: true,
        }, 0);
      });
      dots.current = gsap.timeline({ repeat: -1, paused: true })
        .to('.woven-ribbon-dot', { opacity: 0, duration: 0.48, ease: 'sine.inOut' }, 0.96)
        .to('.woven-ribbon-dot', { opacity: 1, duration: 0.8, ease: 'sine.inOut' }, 2.4);
    }, svgRef);
    return () => { context.revert(); marks.current = null; dots.current = null; };
  }, [artwork, reducedMotion]);

  useLayoutEffect(() => {
    marks.current?.paused(!active || !visible || !pageVisible || reducedMotion);
    dots.current?.paused(!visible || !pageVisible || reducedMotion);
  }, [active, visible, pageVisible, reducedMotion, artwork]);

  return <span ref={ref}
    className={[className, 'woven-ribbon'].filter(Boolean).join(' ')}
    data-visible={visible}
    data-animated={Boolean(artwork) && !reducedMotion}>
    <img {...props} src={src} alt={alt} />
    {artwork && <svg ref={svgRef} className="woven-ribbon-art" viewBox={artwork.viewBox} preserveAspectRatio="none" fill="none" aria-hidden="true">
      <defs>
        {artwork.clips.map((path, ring) => <clipPath key={ring} id={`${id}-ring-${ring}`}><path d={path} /></clipPath>)}
      </defs>
      {artwork.fields.map((field, index) => <path key={index} d={field.path} fill={field.color} />)}
      {artwork.pixels.filter(pixel => pixel.mark).map((pixel, index) => <path key={index} d={pixel.path} fill={pixel.baseColor} />)}
      {[0, 1].map(ring => <g key={ring} clipPath={`url(#${id}-ring-${ring})`}>
        {artwork.tracks.filter(track => track.ring === ring).flatMap((track, lane) => track.phases.map((phase, index) => <path
          key={`${lane}-${index}`} d={track.path} fill={track.color} className="woven-ribbon-mark" data-ring={ring}
          data-phase={phase} data-motion-path={track.motionPath} />))}
      </g>)}
      {artwork.pixels.filter(pixel => pixel.dot).map((pixel, index) => <path
        key={index} d={pixel.path} fill={pixel.color} className="woven-ribbon-dot" />)}
    </svg>}
  </span>;
}
