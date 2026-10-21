import { siteSponsors } from '../site-config';
import { SponsorLogo } from './SponsorLogo';

type SponsorTierProps = {
  sponsor: keyof typeof siteSponsors;
  nodeId: string;
  labelId: string;
  logoId: string;
};

export function SponsorTier({ sponsor, nodeId, labelId, logoId }: SponsorTierProps) {
  const { role, caption } = siteSponsors[sponsor];
  return <button type="button" className={`sponsor-tier sponsor-tier--${sponsor}`} data-node-id={nodeId}
    data-sponsor={sponsor} aria-pressed="false" aria-label={`Spotlight ${siteSponsors[sponsor].name}, ${role.toLowerCase()}`}>
    <span className="sponsor-tier-fill" aria-hidden="true" />
    <span className="sponsor-tier-label" data-node-id={labelId}>
      <span className="sponsor-tier-marker" aria-hidden="true" />{role}
    </span>
    <span className="sponsor-tier-logo">
      <SponsorLogo sponsor={sponsor} data-node-id={logoId} />
      {caption && <span className="sponsor-tier-caption">{caption}</span>}
    </span>
  </button>;
}
