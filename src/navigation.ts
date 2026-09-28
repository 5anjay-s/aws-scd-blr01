export const homeSectionPaths: Record<string, string> = {
  home: '/',
  experience: '/experience',
  tracks: '/tracks',
  speakers: '/speakers',
  timeline: '/timeline',
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

const sectionsByPath = new Map(Object.entries(homeSectionPaths).map(([anchor, path]) => [path, anchor]));
// The partner introduction and directory share one public URL; link to the directory.
sectionsByPath.set('/partner-lineup', 'partner-lineup');
sectionsByPath.set('/learn-build-belong', 'experience');
sectionsByPath.set('/program', 'tracks');

export function resolveLocation(url: URL) {
  const path = url.pathname.replace(/\/$/, '') || '/';
  if (path === '/' && url.hash === '#faq') return { path: '/faq', anchor: '' };
  const section = sectionsByPath.get(path);
  return {
    path: section ? '/' : path,
    anchor: url.hash === '#learn-build-belong' ? 'experience'
      : url.hash === '#program' ? 'tracks' : url.hash.slice(1) || section || '',
  };
}

export function cleanSectionUrl(source: URL) {
  const url = new URL(source.href);
  const { path, anchor } = resolveLocation(url);
  if (path === '/faq' && (url.pathname === '/' || url.pathname === '/faq/')) {
    url.pathname = '/faq';
    if (url.hash === '#faq') url.hash = '';
  }
  const sectionPath = Object.hasOwn(homeSectionPaths, anchor) ? homeSectionPaths[anchor] : undefined;
  if (path === '/' && (sectionPath !== undefined || anchor === 'top')) {
    url.pathname = sectionPath ?? '/';
    url.hash = '';
  } else if (anchor === 'top') {
    url.hash = '';
  }
  return url;
}

// Section URLs and page URLs share the same navigation highlight rules.
export function isNavigationActive(target: ReturnType<typeof resolveLocation>, current: ReturnType<typeof resolveLocation>) {
  if (target.path !== current.path) return false;
  if (target.path !== '/') return true;
  return (target.anchor || 'home') === (current.anchor || 'home');
}
