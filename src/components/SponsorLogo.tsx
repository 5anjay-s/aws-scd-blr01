import { siteSponsors } from '../site-config';

type SponsorLogoProps = {
  sponsor: keyof typeof siteSponsors;
  'data-node-id'?: string;
};

export function SponsorLogo({ sponsor, ...props }: SponsorLogoProps) {
  const { name, logo } = siteSponsors[sponsor];
  return <img {...props} className={`sponsor-logo${sponsor === 'title' ? ' sponsor-logo--title' : ''}`}
    src={logo} alt={name} />;
}
