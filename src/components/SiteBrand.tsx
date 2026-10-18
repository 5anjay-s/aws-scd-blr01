import { SiteLink } from './SiteLink';
import '../styles/site-brand.css';

type SiteBrandProps = {
  'data-node-id'?: string;
};

const logoArtwork = '/assets/1590-770-568cf.svg';

export function SiteBrand(props: SiteBrandProps) {
  return <SiteLink {...props} className="site-brand" data-name="SCD / Brand lockup"
    href="/" aria-label="AWS Student Community Day BLR home">
    <img className="site-brand__artwork" src={logoArtwork} data-node-id="1590:770" alt="" />
    <span className="site-brand__name" aria-hidden="true">
      <span className="site-brand__provider">AWS</span> SCD <span className="site-brand__city">BLR</span>
    </span>
  </SiteLink>;
}
