import { useLayoutEffect, useRef } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

type SpeakerQuotationProps = { src: string; className?: string };

export function SpeakerQuotation({ src, className }: SpeakerQuotationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const playback = useRef<gsap.core.Timeline>(null);
  const visible = useInView(ref, { amount: 0.2 });
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.35 });
      playback.current = timeline;
      ['.speaker-quotation-first', '.speaker-quotation-second'].forEach((part, index) => {
        const start = 0.12 + index * 0.2;
        timeline
          .to(part, { yPercent: 1, scaleY: 0.94, duration: 0.14, ease: 'power2.in' }, start)
          .to(part, {
            yPercent: -4.1667, scaleY: 1, rotation: index === 0 ? -3 : 3,
            duration: 0.32, ease: 'power3.out',
          }, start + 0.14)
          .to(part, {
            yPercent: 0, rotation: 0, duration: 0.62, ease: 'elastic.out(1, 0.5)',
          }, start + 0.46);
      });
    }, ref);
    return () => {
      context.revert();
      playback.current = null;
    };
  }, [src, reducedMotion]);

  useLayoutEffect(() => {
    playback.current?.paused(!visible || !pageVisible || reducedMotion);
  }, [visible, pageVisible, reducedMotion, src]);

  return <span ref={ref} className={[className, 'speaker-quotation'].filter(Boolean).join(' ')} aria-hidden="true">
    <img src={src} alt="" className="speaker-quotation-part speaker-quotation-first" draggable={false} />
    <img src={src} alt="" className="speaker-quotation-part speaker-quotation-second" draggable={false} />
  </span>;
}
