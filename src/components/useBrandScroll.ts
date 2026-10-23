import { useLayoutEffect, type RefObject } from 'react';
import { gsap, ScrollTrigger, useReducedMotion } from './animation';

// Keep the icon, separator and navigation geometry stationary while the two
// identities pass through one clipped window beside the separator.
export function useBrandScroll(ref: RefObject<HTMLSpanElement | null>) {
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const university = root.querySelector('.site-brand__university');
    const event = root.querySelector('.site-brand__name');
    let trigger: ScrollTrigger | undefined;
    let removeScroll: (() => void) | undefined;

    const context = gsap.context(() => {
      gsap.set(university, { x: 0, xPercent: 0 });
      gsap.set(event, { x: 0, xPercent: -105 });
      const timeline = gsap.timeline({ paused: true, onUpdate: () => {
        const progress = timeline.progress();
        root.dataset.brandState = progress === 0 ? 'reva' : progress === 1 ? 'event' : 'swapping';
      } })
        .to(university, { xPercent: -105, duration: 0.46, ease: 'power2.in' }, 0)
        .to(event, { xPercent: 0, duration: 0.46, ease: 'power2.out' }, 0.54);

      if (reducedMotion) {
        let previous: number;
        const update = () => {
          const progress = window.scrollY > 100 ? 1 : 0;
          if (progress === previous) return;
          previous = progress;
          timeline.progress(progress);
          root.dataset.brandState = progress ? 'event' : 'reva';
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        removeScroll = () => window.removeEventListener('scroll', update);
      } else {
        const progress = gsap.utils.clamp(0, 1, (window.scrollY - 24) / 176);
        timeline.progress(progress);
        root.dataset.brandState = progress === 0 ? 'reva' : progress === 1 ? 'event' : 'swapping';
        trigger = ScrollTrigger.create({ start: 24, end: 200, animation: timeline, scrub: 0.25 });
      }
    }, root);

    return () => {
      removeScroll?.();
      trigger?.kill();
      context.revert();
      delete root.dataset.brandState;
    };
  }, [ref, reducedMotion]);
}
