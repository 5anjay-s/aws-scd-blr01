import { useLayoutEffect, useRef } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

type TrackArtworkProps = {
  src: string;
  kind: 'quotes' | 'brackets';
  className?: string;
};

export function TrackArtwork({ src, kind, className }: TrackArtworkProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const playback = useRef<gsap.core.Timeline>(null);
  const visible = useInView(ref, { amount: 0.2 });
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.7 });
      playback.current = timeline;
      if (kind === 'quotes') {
        // Two source-pixel steps, scaled with the original desktop/mobile SVG.
        timeline
          .to('.track-quote-opening', { xPercent: 2.5, yPercent: -3.125, duration: 0.48, ease: 'steps(2)' }, 0.18)
          .to('.track-quote-opening', { xPercent: 0, yPercent: 0, duration: 0.48, ease: 'steps(2)' }, 0.95)
          .to('.track-quote-closing', { xPercent: -2.5, yPercent: 3.125, duration: 0.48, ease: 'steps(2)' }, 1.65)
          .to('.track-quote-closing', { xPercent: 0, yPercent: 0, duration: 0.48, ease: 'steps(2)' }, 2.42);
      } else {
        timeline
          .to('.track-bracket-left', { xPercent: -2.5, duration: 0.64, ease: 'steps(2)' }, 0.18)
          .to('.track-bracket-right', { xPercent: 2.5, duration: 0.64, ease: 'steps(2)' }, 0.18)
          .to('.track-bracket-center', { scale: 1.08, duration: 0.3, ease: 'sine.inOut' }, 0.78)
          .to('.track-bracket-center', { scale: 1, duration: 0.42, ease: 'sine.inOut' }, 1.08)
          .to('.track-bracket-left', { xPercent: 0, duration: 0.64, ease: 'steps(2)' }, 1.75)
          .to('.track-bracket-right', { xPercent: 0, duration: 0.64, ease: 'steps(2)' }, 1.75);
      }
    }, ref);
    return () => {
      context.revert();
      playback.current = null;
    };
  }, [kind, src, reducedMotion]);

  useLayoutEffect(() => {
    playback.current?.paused(!visible || !pageVisible || reducedMotion);
  }, [visible, pageVisible, reducedMotion, kind, src]);

  const parts = kind === 'quotes'
    ? ['track-quote-opening', 'track-quote-closing']
    : ['track-bracket-left', 'track-bracket-center', 'track-bracket-right'];

  return <span ref={ref} className={[className, 'track-artwork-motion'].filter(Boolean).join(' ')} aria-hidden="true">
    {parts.map(part => <img key={part} src={src} alt="" className={`track-artwork-part ${part}`} draggable={false} />)}
  </span>;
}
