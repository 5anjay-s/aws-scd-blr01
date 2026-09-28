import { useLayoutEffect, useRef, type HTMLAttributes } from 'react';
import { gsap, useInView, useReducedMotion } from './animation';

export function ProgrammeSteps({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const complete = useRef(false);
  const revealed = useInView(ref, { once: true, amount: 0.35 });
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const steps = Array.from(ref.current!.querySelectorAll<HTMLElement>('.programme-step'))
      .sort((a, b) => Number(a.dataset.step) - Number(b.dataset.step));
    const context = gsap.context(() => {
      if (reducedMotion || complete.current) {
        gsap.set(steps, { opacity: 1, y: 0 });
        complete.current = true;
      } else if (revealed) gsap.fromTo(steps, { opacity: 0, y: -40 }, {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.14, ease: 'power3.out',
        onComplete: () => { complete.current = true; },
      });
    }, ref);
    return () => context.revert();
  }, [revealed, reducedMotion]);
  return <div {...props} ref={ref} className={[className, 'programme-steps'].filter(Boolean).join(' ')} />;
}
