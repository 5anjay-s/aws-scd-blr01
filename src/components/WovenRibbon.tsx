import { useEffect, useId, useMemo, useRef, type ImgHTMLAttributes } from 'react';
import { useInView, useReducedMotion } from 'motion/react';
import { readRibbonArtwork, RIBBON_CIRCUIT_SECONDS } from './ribbonPixels';
import navyDesktop from '../../public/assets/1160-5759-305fd.svg?raw';
import navyMobile from '../../public/assets/1168-493-5454f.svg?raw';
import violetDesktop from '../../public/assets/860-5267-10945.svg?raw';
import violetMobile from '../../public/assets/1168-495-22597.svg?raw';
import partnersMobile from '../../public/assets/1168-496-4ca63.svg?raw';
import footerDesktop from '../../public/assets/1265-3035-453bd.svg?raw';
import footerMobile from '../../public/assets/1168-498-e1335.svg?raw';

const exports: Record<string, string> = {
  '/assets/1160-5759-305fd.svg': navyDesktop,
  '/assets/1168-493-5454f.svg': navyMobile,
  '/assets/860-5267-10945.svg': violetDesktop,
  '/assets/1168-495-22597.svg': violetMobile,
  '/assets/1168-496-4ca63.svg': partnersMobile,
  '/assets/1265-3035-453bd.svg': footerDesktop,
  '/assets/1168-498-e1335.svg': footerMobile,
};

type WovenRibbonProps = ImgHTMLAttributes<HTMLImageElement> & { active?: boolean };

export function WovenRibbon({ className, src, alt = '', active = true, ...props }: WovenRibbonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const visible = useInView(ref, { amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const artwork = useMemo(() => readRibbonArtwork(exports[src ?? ''] ?? ''), [src]);

  useEffect(() => {
    if (active && visible && !reducedMotion) svgRef.current?.unpauseAnimations();
    else svgRef.current?.pauseAnimations();
  }, [active, visible, reducedMotion, artwork]);

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
          key={`${lane}-${index}`} d={track.path} fill={track.color} className="woven-ribbon-mark" data-ring={ring}>
          <animateMotion path={track.motionPath} begin={`${-phase * RIBBON_CIRCUIT_SECONDS}s`}
            dur={`${RIBBON_CIRCUIT_SECONDS}s`} calcMode="paced" repeatCount="indefinite" />
        </path>))}
      </g>)}
      {artwork.pixels.filter(pixel => pixel.dot).map((pixel, index) => <path
        key={index} d={pixel.path} fill={pixel.color} className="woven-ribbon-dot" />)}
    </svg>}
  </span>;
}
