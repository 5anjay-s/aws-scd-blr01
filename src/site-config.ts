// Add the event's official destinations when they are announced.
// Empty URLs preserve the Figma controls without sending visitors to unrelated pages.
export const siteLinks = {
  meetup: '',
  linkedin: '',
  instagram: '',
};

// Organizer destinations will be supplied later. Keep their contact tabs inactive until then.
export const organizerLinks = {
  eventInstagram: '', campusInstagram: '', linkedin: '', meetup: '', luma: '', builderCenter: '',
};

export const siteSponsors = {
  title: { role: 'TITLE SPONSOR', name: 'AWS', logo: '/assets/sponsors/aws.svg' },
  poweredBy: { role: 'POWERED BY', name: 'OpenAI', logo: '/assets/sponsors/openai.svg' },
  workshop: { role: 'POWERED BY', name: 'MongoDB', logo: '/assets/sponsors/mongodb.svg' },
};
