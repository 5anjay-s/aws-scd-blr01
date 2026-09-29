import { useCallback, useLayoutEffect, useState, useSyncExternalStore } from 'react';

export function usePageLayout(isLoading: boolean) {
  const [headerHost, setHeaderHost] = useState<HTMLDivElement | null>(null);
  const query = `(max-width: ${isLoading ? 767 : 1199}px)`;
  const subscribe = useCallback((notify: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener('change', notify);
    return () => media.removeEventListener('change', notify);
  }, [query]);
  // Pixel-by-pixel resizes are handled by CSS. Only remount a composition when
  // its breakpoint changes, including the narrower loading-page breakpoint.
  const mobile = useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);

  useLayoutEffect(() => {
    if (!headerHost) return;
    const header = headerHost.parentElement!;
    const measure = () => document.documentElement.style.setProperty('--site-header-height', `${header.getBoundingClientRect().height}px`);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty('--site-header-height');
    };
  }, [headerHost]);

  return { mobile, headerHost, setHeaderHost };
}
