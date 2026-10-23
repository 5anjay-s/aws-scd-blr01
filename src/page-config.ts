export type Section = { node: string; anchor?: string; label: string; panel?: 'experience' };
type ResponsiveSections = { desktop: Section[]; mobile: Section[] };
const section = (node: string, label: string, anchor?: string, panel?: Section['panel']): Section => ({ node, label, anchor, panel });

const home: ResponsiveSections = {
  desktop: [
    section('865:7675', 'Student Community Day', 'home'),
    section('content:EventStatus', 'Date, venue and countdown'),
    section('860:5073', 'A day to start something', 'experience', 'experience'),
    section('860:5085', 'Learn, build, belong', undefined, 'experience'),
    section('860:5246', 'Our manifesto', 'manifesto'),
    section('860:5104', 'Choose your track', 'tracks'),
    section('content:PreScd', 'Pre-SCD and IMPULSE hackathon', 'pre-scd'),
    section('860:5180', 'Main-day timeline', 'timeline'),
    section('1154:483', 'Section divider'),
    section('860:5144', 'Speakers', 'speakers'),
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
    section('content:EventStatus', 'Date, venue and countdown'),
    section('1168:492', 'A day to start something', 'experience', 'experience'),
    section('1168:493', 'Learn, build, belong', undefined, 'experience'),
    section('866:8542', 'Our manifesto', 'manifesto'),
    section('866:8432', 'Choose your track', 'tracks'),
    section('content:PreScd', 'Pre-SCD and IMPULSE hackathon', 'pre-scd'),
    section('866:8481', 'Main-day timeline', 'timeline'),
    section('1170:640', 'Section divider'),
    section('1168:494', 'Speakers', 'speakers'),
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
  '/agenda': { desktop: [section('content:AgendaDesktop', 'Event programme')], mobile: [section('content:AgendaMobile', 'Event programme')] },
  '/venue': { desktop: [section('content:VenueDesktop', 'Venue and travel')], mobile: [section('content:VenueMobile', 'Venue and travel')] },
  '/organisers': {
    desktop: [section('1823:3588', 'Organisers'), section('155:692', 'Previous Speakers', 'previous-speakers'), section('1834:3942', 'Community initiatives'), section('860:5359', 'Keep the conversation going')],
    mobile: [section('1823:3589', 'Organisers'), section('155:692', 'Previous Speakers', 'previous-speakers'), section('1834:4182', 'Community initiatives'), section('1168:498', 'Keep the conversation going')],
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

export function groupPageSections(sections: Section[]) {
  const groups: Section[][] = [];

  for (const item of sections) {
    const previous = groups.at(-1);

    if (item.panel && previous?.[0].panel === item.panel) previous.push(item);
    else groups.push([item]);
  }

  return groups;
}

export function getPageSections(path: string, mobile: boolean, isLoading: boolean): Section[] {
  if (isLoading) return [section(mobile ? '866:8315' : '860:4959', 'Loading the day')];
  return (pages[path] ?? pages['/404'])[mobile ? 'mobile' : 'desktop'];
}
