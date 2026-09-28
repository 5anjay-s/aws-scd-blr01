import { useLayoutEffect, type RefObject } from 'react';
import { gsap, useReducedMotion } from './animation';

export function useButtonAnimation(ref: RefObject<HTMLAnchorElement | null>, href?: string) {
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const link = ref.current;
    if (!link || !href) return;
    const buttons = link.matches('.site-button') ? [link] : Array.from(link.querySelectorAll<HTMLElement>('.site-button'));
    if (!buttons.length) return;
    const context = gsap.context(() => {
      const timelines = buttons.map(button => {
        const style = getComputedStyle(button);
        const timeline = gsap.timeline({ paused: true, defaults: { duration: 0.14, ease: 'power1.out' } })
          .to(button, {
            backgroundColor: style.getPropertyValue('--button-hover-background').trim(),
            color: style.getPropertyValue('--navy').trim(),
          }, 0);
        const arrow = button.querySelector('[data-name="Arrow"] img');
        if (arrow && button.dataset.buttonTone === 'navy') timeline.to(arrow, { opacity: 0 }, 0);
        return timeline;
      });
      const sync = () => {
        const hovered = window.matchMedia('(hover: hover)').matches && link.matches(':hover');
        const active = hovered || link.matches(':focus-visible') || link.matches(':active');
        timelines.forEach(timeline => {
          if (reducedMotion) timeline.progress(active ? 1 : 0);
          else if (active) timeline.play();
          else timeline.reverse();
        });
      };
      const events = ['pointerenter', 'pointerleave', 'pointerdown', 'pointerup', 'pointercancel', 'focus', 'blur'];
      events.forEach(event => link.addEventListener(event, sync));
      sync();
      return () => events.forEach(event => link.removeEventListener(event, sync));
    }, link);
    return () => context.revert();
  }, [ref, href, reducedMotion]);
}
