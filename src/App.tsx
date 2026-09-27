import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ComponentType } from 'react';
import manifest from './design-manifest.json';
import { NavigationContext, type NavigationOptions } from './components/SiteLink';
import { cleanSectionUrl, homeSectionPaths, resolveLocation } from './navigation';
import { HeaderHostContext } from './components/SiteHeader';
import { LoadingTransition, type LoadingTransitionPhase } from './components/LoadingTransition';

const modules = import.meta.glob<{ default: ComponentType }>('./components/design/*.tsx', { eager: true });
const components = new Map(manifest.map((entry) => [entry.id,
  modules[`./components/design/${entry.name}.tsx`].default]));

type Section = { node: string; anchor?: string; label: string };
type ResponsiveSections = { desktop: Section[]; mobile: Section[] };
const section = (node: string, label: string, anchor?: string): Section => ({ node, label, anchor });

const home: ResponsiveSections = {
  desktop: [
    section('865:7675', 'Student Community Day', 'home'),
    section('860:5073', 'A day to start something', 'experience'),
    section('860:5085', 'Learn, build, belong'),
    section('860:5246', 'Our manifesto', 'manifesto'),
    section('860:5104', 'Choose your track', 'tracks'),
    section('860:5144', 'Speakers', 'speakers'),
    section('1154:483', 'Section divider'),
    section('860:5180', 'Event timeline', 'timeline'),
    section('860:5267', 'Your community', 'community'),
    section('1160:5759', 'Partners', 'partners'),
    section('1398:7044', 'Our partner lineup', 'partner-lineup'),
    section('1405:638', 'Section divider'),
    section('860:5320', 'Make room for more builders', 'partner-with-us'),
    section('1154:487', 'Section divider'),
    section('860:5328', 'Good questions', 'faq'),
    section('860:5342', 'The details', 'details'),
    section('860:5352', 'Build something', 'join'),
    section('860:5359', 'Keep the conversation going', 'contact'),
  ],
  mobile: [
    section('1168:491', 'Student Community Day', 'home'),
    section('1168:492', 'A day to start something', 'experience'),
    section('1168:493', 'Learn, build, belong'),
    section('866:8542', 'Our manifesto', 'manifesto'),
    section('866:8432', 'Choose your track', 'tracks'),
    section('1168:494', 'Speakers', 'speakers'),
    section('1170:640', 'Section divider'),
    section('866:8481', 'Event timeline', 'timeline'),
    section('1168:495', 'Your community', 'community'),
    section('1168:496', 'Partners', 'partners'),
    section('866:8582', 'Our partner lineup', 'partner-lineup'),
    section('1406:700', 'Section divider'),
    section('866:8600', 'Make room for more builders', 'partner-with-us'),
    section('1170:643', 'Section divider'),
    section('866:8605', 'Good questions', 'faq'),
    section('1168:497', 'The details', 'details'),
    section('866:8622', 'Build something', 'join'),
    section('1168:498', 'Keep the conversation going', 'contact'),
  ],
};

const pages: Record<string, ResponsiveSections> = {
  '/': home,
  '/technical': { desktop: [section('874:8915', 'Technical track')], mobile: [section('874:9123', 'Technical track')] },
  '/non-technical': { desktop: [section('874:9211', 'Non-technical track')], mobile: [section('880:9338', 'Non-technical track')] },
  '/registration': { desktop: [section('1367:652', 'Registration')], mobile: [section('1367:780', 'Registration')] },
  '/404': { desktop: [section('1265:3035', 'Page not found')], mobile: [section('1265:3120', 'Page not found')] },
};

const introSeenKey = 'scd-intro-seen';

function firstVisitTarget() {
  const url = new URL(window.location.href);
  const { path } = resolveLocation(url);
  if (!Object.hasOwn(pages, path) || path === '/404' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  try {
    if (sessionStorage.getItem(introSeenKey) === 'true') return null;
  } catch { /* The intro also works when storage is unavailable. */ }
  return url.pathname + url.search + url.hash;
}

export default function App() {
  const readLocation = () => resolveLocation(new URL(window.location.href));
  const [location, setLocation] = useState(readLocation);
  const [entryTarget, setEntryTarget] = useState(firstVisitTarget);
  const [headerHost, setHeaderHost] = useState<HTMLDivElement | null>(null);
  const [loadingTransition, setLoadingTransition] = useState<LoadingTransitionPhase | null>(null);
  const pendingNavigation = useRef<(() => void) | null>(null);
  const scrollBehavior = useRef<ScrollBehavior>('instant');
  const [viewport, setViewport] = useState(() => document.documentElement.clientWidth);
  const isLoading = entryTarget !== null || location.path === '/loading';
  const mobile = viewport < (isLoading ? 768 : 1200);
  const sections = isLoading
    ? [section(mobile ? '866:8315' : '860:4959', 'Loading the day')]
    : (pages[location.path] ?? pages['/404'])[mobile ? 'mobile' : 'desktop'];

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

  const navigate = useCallback((href: string, options?: NavigationOptions) => {
    const url = cleanSectionUrl(new URL(isLoading && entryTarget ? entryTarget : href, window.location.href));
    if (url.origin !== window.location.origin) return;
    const nextLocation = resolveLocation(url);
    scrollBehavior.current = nextLocation.path === location.path && !isLoading && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'smooth' : 'instant';
    const commit = () => {
      if (isLoading) {
        try { sessionStorage.setItem(introSeenKey, 'true'); } catch { /* Navigation does not depend on storage. */ }
        setEntryTarget(null);
      }
      if (options?.replace || isLoading) history.replaceState(null, '', url.pathname + url.search + url.hash);
      else history.pushState(null, '', url.pathname + url.search + url.hash);
      setLocation(nextLocation);
    };
    if (isLoading && nextLocation.path !== '/loading' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (pendingNavigation.current) return;
      pendingNavigation.current = commit;
      setLoadingTransition('cover');
      return;
    }
    pendingNavigation.current = null;
    setLoadingTransition(null);
    commit();
  }, [location.path, isLoading, entryTarget]);

  const revealHero = useCallback(() => {
    if (!pendingNavigation.current) return;
    // Replace the page only once the cloud completely covers the viewport.
    pendingNavigation.current();
    pendingNavigation.current = null;
    setLoadingTransition('reveal');
  }, []);

  useEffect(() => {
    const resize = () => setViewport(document.documentElement.clientWidth);
    const back = () => {
      pendingNavigation.current = null;
      setLoadingTransition(null);
      setEntryTarget(null);
      scrollBehavior.current = 'instant';
      setLocation(readLocation());
    };
    window.addEventListener('resize', resize);
    window.addEventListener('popstate', back);
    window.addEventListener('hashchange', back);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('popstate', back);
      window.removeEventListener('hashchange', back);
    };
  }, []);

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
    // Accept old bookmarks while keeping the visible URL free of section hashes.
    const url = cleanSectionUrl(new URL(window.location.href));
    if (url.href !== window.location.href) history.replaceState(history.state, '', url.pathname + url.search + url.hash);
    // Scroll updates the URL without triggering a React navigation.
    const { anchor } = resolveLocation(url);
    const target = !isLoading && anchor ? document.getElementById(anchor) : null;
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - (headerHost?.parentElement?.getBoundingClientRect().height ?? 0), behavior });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isLoading, location, mobile, headerHost]);

  useEffect(() => {
    if (isLoading || location.path !== '/') return;
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
      const path = homeSectionPaths[current.id];
      if (path && (window.location.pathname !== path || window.location.hash)) {
        // Replace the URL without adding history entries or triggering an anchor jump.
        history.replaceState(history.state, '', path + window.location.search);
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
  }, [location.path, mobile, isLoading]);

  return <NavigationContext.Provider value={navigate}><HeaderHostContext.Provider value={headerHost}>
    <main id="top" className={`design-shell ${isLoading ? 'loading-shell' : ''}`} inert={loadingTransition !== null}>
      <div className={`design-canvas ${mobile ? 'mobile-layout' : 'desktop-layout'}`}>
        {!isLoading && <header className="site-header-shell">
          <div className="design-content" ref={setHeaderHost} />
        </header>}
        {sections.map((item) => {
          const Component = components.get(item.node)!;
          return <section key={item.node} id={item.anchor} aria-label={item.label}
            data-design-section={item.node} className="design-section">
            <div className="design-content">
              <Component />
            </div>
          </section>;
        })}
      </div>
    </main>
    {loadingTransition && <LoadingTransition phase={loadingTransition} onCovered={revealHero}
      onComplete={() => setLoadingTransition(null)} />}
  </HeaderHostContext.Provider></NavigationContext.Provider>;
}
