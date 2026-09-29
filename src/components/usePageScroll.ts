import { useEffect, useLayoutEffect, useState } from 'react';
import { gsap } from './animation';
import { hashRouteUrl, homeSectionRoutes, resolveLocation } from '../navigation';
import type { SiteNavigation } from './useSiteNavigation';

type ScrollNavigation = Pick<SiteNavigation,
  'location' | 'isLoading' | 'transition' | 'handledUrl' | 'focusOnArrival' | 'scrollBehavior'>;

function readLocation() {
  return resolveLocation(new URL(window.location.href));
}

// Position each destination before paint, then follow the section being read.
export function usePageScroll({ location, isLoading, transition, handledUrl, focusOnArrival, scrollBehavior }: ScrollNavigation,
  mobile: boolean, headerHost: HTMLDivElement | null) {
  const [activeSection, setActiveSection] = useState(() => readLocation().anchor || 'home');

  useEffect(() => {
    if (!transition) return;
    const preventScroll = (event: Event) => event.preventDefault();
    const preventScrollKey = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) event.preventDefault();
    };
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKey);
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKey);
    };
  }, [transition]);

  useLayoutEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    const initialLocation = readLocation();
    let active = true;
    // Font loading can move a section after the initial anchor jump.
    void document.fonts.ready.then(() => {
      const current = readLocation();
      if (!active || !initialLocation.anchor || current.path !== initialLocation.path || current.anchor !== initialLocation.anchor) return;
      document.getElementById(initialLocation.anchor)?.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
    return () => {
      active = false;
      history.scrollRestoration = previousRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const behavior = scrollBehavior.current;
    scrollBehavior.current = 'instant';
    // Cancel any previous scroll before applying the current navigation target.
    window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    // Normalize older clean-path bookmarks to the public hash URLs.
    const url = hashRouteUrl(new URL(window.location.href));
    if (url.href !== window.location.href) history.replaceState(history.state, '', url.pathname + url.search + url.hash);
    handledUrl.current = window.location.href;
    // Scroll updates the URL without triggering a React navigation.
    const { anchor } = resolveLocation(url);
    const target = !isLoading && anchor ? document.getElementById(anchor) : null;
    const top = target ? target.getBoundingClientRect().top + window.scrollY
      - (headerHost?.parentElement?.getBoundingClientRect().height ?? 0) : 0;
    if (target && behavior === 'smooth') {
      const scroll = gsap.to(window, { scrollTo: { y: top, autoKill: true }, duration: 0.65, ease: 'power2.inOut' });
      return () => { scroll.kill(); };
    }
    window.scrollTo({ top, behavior: 'instant' });
  }, [isLoading, location, mobile, headerHost, handledUrl, scrollBehavior]);

  useLayoutEffect(() => {
    if (transition || !focusOnArrival.current) return;
    focusOnArrival.current = false;
    const { anchor } = readLocation();
    const target = anchor ? document.getElementById(anchor) : document.querySelector<HTMLElement>('.design-section');
    target?.focus({ preventScroll: true });
  }, [location, transition, focusOnArrival]);

  useEffect(() => {
    if (transition || isLoading || location.path !== '/') return;
    const anchors = Array.from(document.querySelectorAll<HTMLElement>('.design-section[id]'));
    if (!anchors.length) return;
    let frame = 0;
    let ready = false;
    let active = true;

    const updateSectionUrl = () => {
      frame = 0;
      // Switch when a section reaches the upper part of the reading area.
      const readingLine = Math.min(window.innerHeight * 0.3, 240);
      let current = anchors[0];
      for (const anchor of anchors) {
        if (anchor.getBoundingClientRect().top > readingLine) break;
        current = anchor;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = anchors[anchors.length - 1];
      }
      const route = homeSectionRoutes[current.id];
      setActiveSection(current.id);
      const url = route ? hashRouteUrl(new URL(route + window.location.search, window.location.href)) : null;
      if (url && url.href !== window.location.href) {
        // Replace the URL without adding history entries or triggering an anchor jump.
        history.replaceState(history.state, '', url.pathname + url.search + url.hash);
        handledUrl.current = window.location.href;
      }
    };
    const scheduleUpdate = () => {
      if (ready && !frame) frame = window.requestAnimationFrame(updateSectionUrl);
    };
    void document.fonts.ready.then(() => {
      if (!active) return;
      ready = true;
      scheduleUpdate();
    });
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [location.path, mobile, isLoading, transition, handledUrl]);

  return activeSection;
}
