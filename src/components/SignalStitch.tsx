import { useCallback, useLayoutEffect, useRef, type ImgHTMLAttributes } from 'react';
import { gsap, useInView, useReducedMotion } from './animation';

export function SignalStitch({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const container = useRef<HTMLElement>(null);
  const complete = useRef(false);
  const setImageRef = useCallback((image: HTMLImageElement | null) => {
    ref.current = image;
    container.current = image?.parentElement ?? null;
  }, []);
  const revealed = useInView(container, { once: true, amount: 0.5, margin: '0px 0px -24px 0px' });
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (reducedMotion || complete.current) {
        gsap.set(ref.current, { clipPath: 'inset(0 0% 0 0)' });
        complete.current = true;
      } else if (revealed) gsap.fromTo(ref.current, { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power2.inOut', onComplete: () => { complete.current = true; },
      });
    }, ref);
    return () => context.revert();
  }, [revealed, reducedMotion]);
  return <img {...props} ref={setImageRef} className={[className, 'signal-stitch-reveal'].filter(Boolean).join(' ')} />;
}
