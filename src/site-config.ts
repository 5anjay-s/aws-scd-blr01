// The event's official destinations. Empty URLs keep the Figma controls inactive.
export const siteLinks = {
  meetup: 'https://www.meetup.com/aws-sbg-at-reva-university',
  meetupEvent: 'https://www.meetup.com/aws-sbg-at-reva-university/events/316557754/',
  hackathonLuma: 'https://luma.com/t67kuo2c',
  konfhub: 'https://konfhub.com/aws-student-community-day-bengaluru-2026',
  linkedin: 'https://www.linkedin.com/company/aws-sbg-reva-university',
  instagram: 'https://www.instagram.com/aws.scd.blr',
};

// Official organiser destinations for the community contact tabs.
export const organizerLinks = {
  eventInstagram: 'https://www.instagram.com/aws.scd.blr',
  campusInstagram: 'https://www.instagram.com/aws.sbg.ru',
  linkedin: 'https://www.linkedin.com/company/aws-sbg-reva-university',
  meetup: 'https://www.meetup.com/aws-sbg-at-reva-university',
  luma: 'https://luma.com/aws.sbg.ru',
  builderCenter: 'https://bit.ly/3S7naIT',
};

type SponsorConfig = {
  role: string;
  name: string;
  logo: string;
  /** Optional second line under the sponsor logo. */
  caption?: string;
};

export const siteSponsors: Record<'title' | 'poweredBy' | 'workshop', SponsorConfig> = {
  title: { role: 'TITLE SPONSOR', name: 'AWS', logo: '/assets/sponsors/aws.svg' },
  poweredBy: { role: 'POWERED BY', name: 'OpenAI Student Collective', logo: '/assets/sponsors/openai.svg', caption: 'Student Collective' },
  workshop: { role: 'POWERED BY', name: 'MongoDB', logo: '/assets/sponsors/mongodb.svg' },
};
