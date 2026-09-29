import { useCallback, useEffect, useRef, useState } from 'react';
import { resolveLinkUrl, resolveLocation } from '../navigation';
import { hasPage } from '../page-config';
import type { NavigationOptions } from './SiteLink';
import type { LoadingTransitionPhase } from './LoadingTransition';

type TransitionState = { kind: 'intro' | 'page'; phase: LoadingTransitionPhase; origin?: NavigationOptions['origin'] };

const introSeenKey = 'scd-intro-seen';

function firstVisitTarget() {
  const url = new URL(window.location.href);
  const { path } = resolveLocation(url);
  if (!hasPage(path) || path === '/404' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  try {
    if (sessionStorage.getItem(introSeenKey) === 'true') return null;
  } catch { /* The intro also works when storage is unavailable. */ }
  return url.pathname + url.search + url.hash;
}

function readLocation() {
  return resolveLocation(new URL(window.location.href));
}

// Own history and transition commits; scrolling consumes the pending arrival refs.
export function useSiteNavigation() {
  const [location, setLocation] = useState(readLocation);
  const [entryTarget, setEntryTarget] = useState(firstVisitTarget);
  const [transition, setTransition] = useState<TransitionState | null>(null);
  const transitionActive = useRef(false);
  const handledUrl = useRef(window.location.href);
  const pendingNavigation = useRef<(() => void) | null>(null);
  const focusOnArrival = useRef(false);
  const scrollBehavior = useRef<ScrollBehavior>('instant');
  const isLoading = entryTarget !== null || location.path === '/loading';

  const navigate = useCallback((href: string, options?: NavigationOptions) => {
    if (transitionActive.current) return;
    const url = resolveLinkUrl(entryTarget ?? href, new URL(window.location.href));
    if (url.origin !== window.location.origin) return;
    const nextLocation = resolveLocation(url);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const changesPage = nextLocation.path !== location.path;
    scrollBehavior.current = !changesPage && !isLoading && !reducedMotion
      ? 'smooth' : 'instant';
    const commit = () => {
      if (isLoading) {
        try { sessionStorage.setItem(introSeenKey, 'true'); } catch { /* Navigation does not depend on storage. */ }
        setEntryTarget(null);
      }
      if (options?.replace || isLoading) history.replaceState(null, '', url.pathname + url.search + url.hash);
      else history.pushState(null, '', url.pathname + url.search + url.hash);
      handledUrl.current = window.location.href;
      focusOnArrival.current = changesPage || isLoading;
      setLocation(nextLocation);
    };
    if (!reducedMotion && (isLoading ? nextLocation.path !== '/loading' : changesPage)) {
      transitionActive.current = true;
      pendingNavigation.current = commit;
      setTransition({ kind: isLoading ? 'intro' : 'page', phase: 'cover', origin: options?.origin });
      return;
    }
    pendingNavigation.current = null;
    setTransition(null);
    commit();
  }, [location.path, isLoading, entryTarget]);

  const revealPage = useCallback(() => {
    if (!pendingNavigation.current) return;
    // Mount and position the destination while the viewport is fully covered.
    pendingNavigation.current();
    pendingNavigation.current = null;
    setTransition((current) => current && { ...current, phase: 'reveal' });
  }, []);

  const completeTransition = useCallback(() => {
    transitionActive.current = false;
    setTransition(null);
  }, []);

  useEffect(() => {
    const back = () => {
      // Hash history traversal fires both popstate and hashchange. Handle it once.
      if (handledUrl.current === window.location.href) return;
      handledUrl.current = window.location.href;
      const nextLocation = readLocation();
      const commit = () => {
        setEntryTarget(null);
        focusOnArrival.current = nextLocation.path !== location.path;
        setLocation(nextLocation);
      };
      scrollBehavior.current = 'instant';
      // A new Back/Forward action cancels a pending link instead of committing it later.
      if (!transitionActive.current && !isLoading && nextLocation.path !== location.path
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        transitionActive.current = true;
        pendingNavigation.current = commit;
        setTransition({ kind: 'page', phase: 'cover' });
        return;
      }
      pendingNavigation.current = null;
      transitionActive.current = false;
      setTransition(null);
      commit();
    };
    window.addEventListener('popstate', back);
    window.addEventListener('hashchange', back);
    return () => {
      window.removeEventListener('popstate', back);
      window.removeEventListener('hashchange', back);
    };
  }, [location.path, isLoading]);

  return { location, isLoading, transition, navigate, revealPage, completeTransition,
    handledUrl, focusOnArrival, scrollBehavior };
}

export type SiteNavigation = ReturnType<typeof useSiteNavigation>;
