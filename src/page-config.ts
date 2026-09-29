export type Section = { node: string; anchor?: string; label: string };
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
    section('860:5328', 'Good questions', 'faq-preview'),
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
    section('866:8605', 'Good questions', 'faq-preview'),
    section('1168:497', 'The details', 'details'),
    section('866:8622', 'Build something', 'join'),
    section('1168:498', 'Keep the conversation going', 'contact'),
  ],
};

const pages: Record<string, ResponsiveSections> = {
  '/': home,
  '/organizers': {
    desktop: [section('1823:3588', 'Organizers'), section('860:5359', 'Keep the conversation going')],
    mobile: [section('1823:3589', 'Organizers'), section('1168:498', 'Keep the conversation going')],
  },
  '/faq': {
    desktop: [section('227:540', 'Frequently asked questions'), section('860:5359', 'Keep the conversation going')],
    mobile: [section('227:541', 'Frequently asked questions'), section('1168:498', 'Keep the conversation going')],
  },
  '/technical': { desktop: [section('874:8915', 'Technical track')], mobile: [section('874:9123', 'Technical track')] },
  '/non-technical': { desktop: [section('874:9211', 'Non-technical track')], mobile: [section('880:9338', 'Non-technical track')] },
  '/registration': { desktop: [section('1367:652', 'Registration')], mobile: [section('1367:780', 'Registration')] },
  '/404': { desktop: [section('1265:3035', 'Page not found')], mobile: [section('1265:3120', 'Page not found')] },
};

export function hasPage(path: string) {
  return Object.hasOwn(pages, path);
}

export function getPageSections(path: string, mobile: boolean, isLoading: boolean): Section[] {
  if (isLoading) return [section(mobile ? '866:8315' : '860:4959', 'Loading the day')];
  return (pages[path] ?? pages['/404'])[mobile ? 'mobile' : 'desktop'];
}
