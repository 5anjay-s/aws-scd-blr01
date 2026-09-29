import { useEffect, useLayoutEffect, useState } from 'react';

export function usePageLayout(isLoading: boolean) {
  const [viewport, setViewport] = useState(() => document.documentElement.clientWidth);
  const [headerHost, setHeaderHost] = useState<HTMLDivElement | null>(null);
  const mobile = viewport < (isLoading ? 768 : 1200);

  useEffect(() => {
    const resize = () => setViewport(document.documentElement.clientWidth);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

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
