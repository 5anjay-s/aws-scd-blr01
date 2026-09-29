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
      const timeline = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.1 });
      playback.current = timeline;
      if (kind === 'quotes') {
        // Each glyph has its own pivot. The opening pair speaks, then the
        // closing pair answers, with a short anticipation before each hop.
        const hop = (part: string, start: number, direction: number) => {
          timeline
            .to(part, { scaleX: 1.04, scaleY: 0.9, duration: 0.16, ease: 'power2.in' }, start)
            .to(part, {
              xPercent: direction * 2.5, yPercent: direction * -3.125,
              rotation: direction * -6, scaleX: 1, scaleY: 1.04,
              duration: 0.34, ease: 'power3.out',
            }, start + 0.16)
            .to(part, {
              xPercent: 0, yPercent: 0, rotation: 0, scaleX: 1, scaleY: 1,
              duration: 0.68, ease: 'elastic.out(1, 0.45)',
            }, start + 0.5);
        };
        hop('.track-quote-opening-first', 0.12, 1);
        hop('.track-quote-opening-second', 0.28, 1);
        hop('.track-quote-closing-first', 1.82, -1);
        hop('.track-quote-closing-second', 1.98, -1);
      } else {
        timeline
          .timeScale(1.6)
          // A small inward squeeze gives the opening a visible wind-up.
          .to('.track-bracket-left', { xPercent: 1.25, duration: 0.2, ease: 'power2.inOut' }, 0.12)
          .to('.track-bracket-right', { xPercent: -1.25, duration: 0.2, ease: 'power2.inOut' }, 0.12)
          .to('.track-bracket-center', { scale: 0.84, duration: 0.2, ease: 'power2.in' }, 0.12)
          .to('.track-bracket-left', { xPercent: -5, duration: 0.7, ease: 'back.out(1.5)' }, 0.32)
          .to('.track-bracket-right', { xPercent: 5, duration: 0.7, ease: 'back.out(1.5)' }, 0.32)
          .to('.track-bracket-center', { rotation: 90, scale: 1.12, duration: 0.85, ease: 'back.out(1.3)' }, 0.38)
          .to('.track-bracket-center', { scale: 1, duration: 0.3, ease: 'sine.inOut' }, 1.23)
          .to('.track-bracket-left', { xPercent: 0, duration: 0.7, ease: 'power3.inOut' }, 1.95)
          .to('.track-bracket-right', { xPercent: 0, duration: 0.7, ease: 'power3.inOut' }, 1.95)
          .to('.track-bracket-center', { rotation: 0, scale: 0.9, duration: 0.6, ease: 'power3.inOut' }, 1.95)
          .to('.track-bracket-center', { scale: 1, duration: 0.48, ease: 'back.out(1.8)' }, 2.55);
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
    ? ['track-quote-opening-first', 'track-quote-opening-second', 'track-quote-closing-first', 'track-quote-closing-second']
    : ['track-bracket-left', 'track-bracket-center', 'track-bracket-right'];

  return <span ref={ref} className={[className, 'track-artwork-motion'].filter(Boolean).join(' ')} data-track-artwork={kind} aria-hidden="true">
    {parts.map(part => <img key={part} src={src} alt="" className={`track-artwork-part ${part}`} draggable={false} />)}
  </span>;
}
