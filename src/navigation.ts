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
  faq: '/faq',
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
  const sectionPath = Object.hasOwn(homeSectionPaths, anchor) ? homeSectionPaths[anchor] : undefined;
  if (path === '/' && (sectionPath !== undefined || anchor === 'top')) {
    url.pathname = sectionPath ?? '/';
    url.hash = '';
  } else if (anchor === 'top') {
    url.hash = '';
  }
  return url;
}
