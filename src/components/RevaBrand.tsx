import '../styles/reva-brand.css';

// Use the supplied light/dark wordmarks unchanged; crop transparent canvas only.
export function RevaBrand({ variant = 'intro' }: { variant?: 'intro' | 'footer' | 'navbar' }) {
  if (variant === 'navbar') return <span className="reva-brand reva-brand--navbar">
    <img className="reva-navbar__symbol" src="/brands/reva-symbol.png" alt="" width={106} height={106} decoding="async" />
    <span className="reva-navbar__wordmark">
      <img src="/brands/reva-wordmark.png" alt="REVA University" width={374} height={112} decoding="async" />
      <img className="reva-navbar__wordmark-contrast" src="/brands/reva-wordmark.png" alt="" aria-hidden="true"
        width={374} height={112} decoding="async" />
    </span>
  </span>;

  const intro = variant === 'intro';
  return <span className={`reva-brand reva-brand--${variant}`}>
    {variant === 'footer' && <span className="reva-brand__label">EVENT VENUE</span>}
    <span className="reva-brand__logo">
      <img src={intro ? '/brands/reva-university-dark.png' : '/brands/reva-university-white.png'}
        alt="REVA University" width={intro ? 524 : 654} height={intro ? 210 : 279}
        loading="lazy" decoding="async" />
    </span>
  </span>;
}

export function RevaIntroduction() {
  return <div className="intro-venue" aria-label="At REVA University">
    <span className="intro-venue__at">At</span>
    <RevaBrand variant="intro" />
  </div>;
}

export function RevaFooter() {
  return <footer className="reva-footer" aria-label="Event and university branding">
    <div className="reva-footer__inner">
      <RevaBrand variant="footer" />
      <div className="reva-footer__event">
        <p className="reva-footer__title">AWS Student Community Day<br />Bengaluru 2026</p>
        <p className="reva-footer__address">Rukmini Knowledge Park · Kattigenahalli<br />Yelahanka, Bengaluru</p>
      </div>
    </div>
  </footer>;
}
