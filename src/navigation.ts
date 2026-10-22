// Route names are shared by hash URLs and the older clean-path bookmarks.
export const homeSectionRoutes: Record<string, string> = {
  home: '/',
  experience: '/experience',
  tracks: '/tracks',
  speakers: '/speakers',
  timeline: '/timeline',
  'pre-scd': '/pre-scd',
  manifesto: '/manifesto',
  community: '/community',
  partners: '/partners',
  'partner-lineup': '/partners',
  'partner-with-us': '/partner-with-us',
  'faq-preview': '/questions',
  details: '/details',
  join: '/join',
  contact: '/contact',
};

const sectionsByRoute = new Map(Object.entries(homeSectionRoutes).map(([anchor, route]) => [route, anchor]));
// The partner introduction and directory share one public URL; link to the directory.
sectionsByRoute.set('/home', 'home');
sectionsByRoute.set('/top', 'home');
sectionsByRoute.set('/partner-lineup', 'partner-lineup');
sectionsByRoute.set('/learn-build-belong', 'experience');
sectionsByRoute.set('/program', 'tracks');
sectionsByRoute.set('/faq-preview', 'faq-preview');
sectionsByRoute.set('/pre-scd-hackathon', 'pre-scd');
sectionsByRoute.set('/pre-scd-hackathon-chatgpt-workshop', 'pre-scd');
sectionsByRoute.set('/scd', 'timeline');

export function resolveLocation(url: URL) {
  let path = url.pathname.replace(/\/$/, '') || '/';
  let anchor = url.hash.slice(1);
  if (path === '/' && anchor) {
    // A second segment identifies an anchor within a standalone page.
    const [route, ...segments] = anchor.replace(/^\//, '').split('/');
    path = `/${route}`;
    anchor = segments.join('/');
  }
  // Preserve older bookmarks while using the same spelling as the page label.
  if (path === '/organizers') path = '/organisers';
  if (path === '/register') path = '/registration';
  if (path === '/faqs') path = '/faq';
  if (path === '/about') path = '/experience';
  const section = sectionsByRoute.get(path);
  return {
    path: section ? '/' : path,
    anchor: anchor === 'learn-build-belong' ? 'experience'
      : anchor === 'program' ? 'tracks' : anchor || section || '',
  };
}

export function hashRouteUrl(source: URL) {
  const url = new URL(source.href);
  const { path, anchor } = resolveLocation(url);
  const sectionRoute = Object.hasOwn(homeSectionRoutes, anchor) ? homeSectionRoutes[anchor] : '/';
  const route = path === '/' ? (anchor === 'top' ? '/' : sectionRoute) : path;
  const pageAnchor = path !== '/' && anchor && anchor !== 'top' ? `/${anchor}` : '';
  url.pathname = '/';
  url.hash = `${route === '/' ? 'home' : route.slice(1)}${pageAnchor}`;
  return url;
}

export function resolveLinkUrl(href: string, current: URL) {
  // A relative #top link must retain the page encoded in the current hash.
  if (href === '#top') {
    const { path } = resolveLocation(current);
    return hashRouteUrl(new URL(path + current.search, current));
  }
  return hashRouteUrl(new URL(href, current));
}

// Section URLs and page URLs share the same navigation highlight rules.
export function isNavigationActive(target: ReturnType<typeof resolveLocation>, current: ReturnType<typeof resolveLocation>) {
  if (target.path !== current.path) return false;
  if (target.path !== '/') return true;
  return (target.anchor || 'home') === (current.anchor || 'home');
}
