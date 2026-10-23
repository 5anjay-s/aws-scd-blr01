import { SiteLink } from './SiteLink';
import { useRef } from 'react';
import { RevaBrand } from './RevaBrand';
import { useBrandScroll } from './useBrandScroll';
import '../styles/site-brand.css';

type SiteBrandProps = {
  'data-node-id'?: string;
};

const logoArtwork = '/assets/1590-770-568cf.svg';

export function SiteBrand(props: SiteBrandProps) {
  const identity = useRef<HTMLSpanElement>(null);
  useBrandScroll(identity);

  return <SiteLink {...props} className="site-brand" data-name="SCD / Brand lockup"
    href="/" aria-label="AWS Student Community Day BLR home">
    <img className="site-brand__artwork" src={logoArtwork} data-node-id="1590:770" alt="" />
    <span ref={identity} className="site-brand__identity" data-brand-state="reva" aria-hidden="true">
      <span className="site-brand__separator" />
      <span className="site-brand__window">
        <span className="site-brand__university"><RevaBrand variant="navbar" /></span>
        <span className="site-brand__name">
          <span className="site-brand__provider">AWS</span> SCD <span className="site-brand__city">BLR</span>
        </span>
      </span>
    </span>
  </SiteLink>;
}
