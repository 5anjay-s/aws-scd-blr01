import { siteSponsors } from '../site-config';
import { SponsorLogo } from './SponsorLogo';

type SponsorTierProps = {
  sponsor: keyof typeof siteSponsors;
  nodeId: string;
  labelId: string;
  logoId: string;
};

export function SponsorTier({ sponsor, nodeId, labelId, logoId }: SponsorTierProps) {
  return <button type="button" className={`sponsor-tier sponsor-tier--${sponsor}`} data-node-id={nodeId}
    data-sponsor={sponsor} aria-pressed="false" aria-label={`Spotlight ${siteSponsors[sponsor].name}, ${siteSponsors[sponsor].role.toLowerCase()}`}>
    <span className="sponsor-tier-fill" aria-hidden="true" />
    <span className="sponsor-tier-label" data-node-id={labelId}>
      <span className="sponsor-tier-marker" aria-hidden="true" />{siteSponsors[sponsor].role}
    </span>
    <SponsorLogo sponsor={sponsor} data-node-id={logoId} />
  </button>;
}
