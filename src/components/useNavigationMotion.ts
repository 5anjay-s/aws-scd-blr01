import { useLayoutEffect, useRef, type RefObject } from 'react';
import { gsap, useReducedMotion } from './animation';
import type { NavigationLocation } from './NavigationState';

export function useNavigationMotion(
  navRef: RefObject<HTMLElement | null>,
  indicatorRef: RefObject<HTMLSpanElement | null>,
  location: NavigationLocation,
  ready: boolean,
) {
  const reducedMotion = useReducedMotion();
  const refresh = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    if (!ready || !nav || !indicator) return;
    const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('[data-name="Nav links v2"] a'));
    let hovered: HTMLAnchorElement | null = null;
    let positioned = false;
    const update = () => {
      const focused = links.find(link => link.matches(':focus-visible'));
      const target = hovered ?? focused ?? links.find(link => link.hasAttribute('aria-current'));
      if (!target || !target.getClientRects().length) {
        gsap.to(indicator, { opacity: 0, duration: reducedMotion ? 0 : 0.15, overwrite: true });
        return;
      }
      const bounds = target.getBoundingClientRect();
      const parent = nav.getBoundingClientRect();
      const color = getComputedStyle(target).getPropertyValue('--nav-accent').trim();
      gsap.to(indicator, {
        x: bounds.left - parent.left, y: parent.height - 13, width: bounds.width,
        backgroundColor: color, opacity: 1, duration: reducedMotion || !positioned ? 0 : 0.3,
        ease: 'power3.out', overwrite: true,
      });
      positioned = true;
    };
    const enter = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      hovered = links.find(item => item === link) ?? null;
      update();
    };
    const leave = () => { hovered = null; update(); };
    const context = gsap.context(() => {
      if (!reducedMotion) {
        const items = nav.querySelectorAll(':scope > .site-brand, [data-name="Nav links v2"] a, :scope > .site-button, .site-menu-toggle');
        gsap.from(items, { opacity: 0, y: -10, duration: 0.4, stagger: 0.045, ease: 'power3.out', clearProps: 'opacity,transform', onComplete: update });
      }
      update();
    }, nav);
    refresh.current = update;
    nav.addEventListener('pointerover', enter);
    nav.addEventListener('pointerleave', leave);
    nav.addEventListener('focusin', update);
    nav.addEventListener('focusout', update);
    const resize = new ResizeObserver(update);
    resize.observe(nav);
    const linkGroup = nav.querySelector('[data-name="Nav links v2"]');
    if (linkGroup) resize.observe(linkGroup);
    return () => {
      refresh.current = null;
      resize.disconnect();
      nav.removeEventListener('pointerover', enter);
      nav.removeEventListener('pointerleave', leave);
      nav.removeEventListener('focusin', update);
      nav.removeEventListener('focusout', update);
      gsap.killTweensOf(indicator);
      context.revert();
    };
  }, [navRef, indicatorRef, ready, reducedMotion]);

  useLayoutEffect(() => { refresh.current?.(); }, [location.path, location.anchor]);
}
