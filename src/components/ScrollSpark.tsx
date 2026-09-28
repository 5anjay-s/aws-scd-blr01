import { useEffect, useRef, type ImgHTMLAttributes, type RefObject } from 'react';
import { gsap, useReducedMotion } from './animation';

type ScrollSparkProps = ImgHTMLAttributes<HTMLImageElement> & { sectionRef: RefObject<HTMLElement | null> };

export function ScrollSpark({ sectionRef, className, ...props }: ScrollSparkProps) {
  const ref = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();
  // The section ref belongs to a parent, so initialize after its ref is attached.
  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    const context = gsap.context(() => {
      gsap.fromTo(ref.current, { rotation: 0 }, {
        rotation: 360, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.2,
          onLeave: self => { self.getTween()?.progress(1); },
          onLeaveBack: self => { self.getTween()?.progress(1); },
        },
      });
    }, ref);
    return () => context.revert();
  }, [reducedMotion, sectionRef]);
  return <img {...props} ref={ref} className={[className, 'curiosity-spark-scroll'].filter(Boolean).join(' ')} />;
}
