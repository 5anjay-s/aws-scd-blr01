import { useLayoutEffect, useRef } from 'react';
import { gsap, useReducedMotion } from './animation';

type BuildBracketsProps = { src: string; className?: string };

export function BuildBrackets({ src, className }: BuildBracketsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const chapter = ref.current?.closest('.build-chapter');
    if (!chapter || reducedMotion) return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ paused: true, defaults: { duration: 0.45, ease: 'power3.out' } })
        .to('.build-bracket-left', { xPercent: -4 }, 0)
        .to('.build-bracket-right', { xPercent: 4 }, 0);
      const open = () => { timeline.play(); };
      const close = () => { timeline.reverse(); };
      const release = (event: Event) => { if ((event as PointerEvent).pointerType !== 'mouse') close(); };
      chapter.addEventListener('pointerenter', open);
      chapter.addEventListener('pointerdown', open);
      chapter.addEventListener('pointerleave', close);
      chapter.addEventListener('pointerup', release);
      chapter.addEventListener('pointercancel', close);
      return () => {
        chapter.removeEventListener('pointerenter', open);
        chapter.removeEventListener('pointerdown', open);
        chapter.removeEventListener('pointerleave', close);
        chapter.removeEventListener('pointerup', release);
        chapter.removeEventListener('pointercancel', close);
      };
    }, ref);
    return () => context.revert();
  }, [reducedMotion]);
  return <span ref={ref} className={[className, 'build-brackets'].filter(Boolean).join(' ')} aria-hidden="true">
    <img src={src} alt="" className="build-bracket-part build-bracket-left" />
    <img src={src} alt="" className="build-bracket-part build-bracket-center" />
    <img src={src} alt="" className="build-bracket-part build-bracket-right" />
  </span>;
}
