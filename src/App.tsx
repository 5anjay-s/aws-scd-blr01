import { useEffect, useMemo, useRef } from 'react';
import { getPageSections } from './page-config';
import { NavigationContext } from './components/SiteLink';
import { HeaderHostContext } from './components/SiteHeader';
import { NavigationLocationContext } from './components/NavigationState';
import { LoadingTransition } from './components/LoadingTransition';
import { PageTransition } from './components/PageTransition';
import { PageSections } from './components/PageSections';
import { useSiteNavigation } from './components/useSiteNavigation';
import { usePageLayout } from './components/usePageLayout';
import { usePageScroll } from './components/usePageScroll';
import { useScrollReveal } from './components/useScrollReveal';
import { UtilityFooter } from './components/EventContent';

export default function App() {
  const revealRoot = useRef<HTMLElement>(null);
  const navigation = useSiteNavigation();
  const { location, isLoading, transition, navigate, revealPage, completeTransition } = navigation;
  const { mobile, headerHost, setHeaderHost } = usePageLayout(isLoading);
  const activeSection = usePageScroll(navigation, mobile, headerHost);
  const sections = getPageSections(location.path, mobile, isLoading);
  useEffect(() => {
    const titles: Record<string, string> = { '/agenda': 'Agenda', '/venue': 'Venue & travel', '/organisers': 'Organisers', '/registration': 'Registration', '/technical': 'Technical track', '/non-technical': 'Non-technical track', '/faq': 'FAQ', '/404': 'Page not found' };
    const label = titles[location.path];
    document.title = `${label ? `${label} | ` : ''}AWS Student Community Day Bengaluru 2026${label ? '' : ' | 5 November'}`;
  }, [location.path]);
  const navigationLocation = useMemo(() => ({
    path: location.path,
    anchor: location.path === '/' ? activeSection : location.anchor,
  }), [location.path, location.anchor, activeSection]);

  useScrollReveal(revealRoot, {
    pageKey: `${location.path}:${mobile ? 'mobile' : 'desktop'}`,
    disabled: isLoading,
    paused: transition !== null,
  });

  return <NavigationContext.Provider value={navigate}>
    <NavigationLocationContext.Provider value={navigationLocation}>
      <HeaderHostContext.Provider value={headerHost}>
        <a className="event-skip" href="#main-content" onClick={e => { e.preventDefault(); document.getElementById('main-content')?.focus(); }}>Skip to content</a>
        <main ref={revealRoot} id="top" tabIndex={-1} className={`design-shell ${isLoading ? 'loading-shell' : ''}`} inert={transition !== null} aria-busy={transition !== null}>
          <div className={`design-canvas ${mobile ? 'mobile-layout' : 'desktop-layout'}`}>
            {!isLoading && <header className="site-header-shell">
              <div className="design-content" ref={setHeaderHost} />
            </header>}
            <div id="main-content" tabIndex={-1} />
            <PageSections sections={sections} />
            {!isLoading && <UtilityFooter />}
          </div>
        </main>
        {transition && (transition.kind === 'intro'
          ? <LoadingTransition phase={transition.phase} onCovered={revealPage} onComplete={completeTransition} />
          : <PageTransition phase={transition.phase} origin={transition.origin} onCovered={revealPage} onComplete={completeTransition} />)}
      </HeaderHostContext.Provider>
    </NavigationLocationContext.Provider>
  </NavigationContext.Provider>;
}
