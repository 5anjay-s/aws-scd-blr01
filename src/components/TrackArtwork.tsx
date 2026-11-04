import { useLayoutEffect, useRef } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

type TrackArtworkProps = {
  src: string;
  kind: 'brackets' | 'compile';
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
    }, ref);
    return () => {
      context.revert();
      playback.current = null;
    };
  }, [kind, src, reducedMotion]);

  useLayoutEffect(() => {
    playback.current?.paused(!visible || !pageVisible || reducedMotion);
  }, [visible, pageVisible, reducedMotion, kind, src]);

  const parts = ['track-bracket-left', 'track-bracket-center', 'track-bracket-right'];

  return <span ref={ref} className={[className, 'track-artwork-motion'].filter(Boolean).join(' ')} data-track-artwork={kind} aria-hidden="true">
    {parts.map(part => <img key={part} src={src} alt="" className={`track-artwork-part ${part}`} draggable={false} />)}
  </span>;
}
