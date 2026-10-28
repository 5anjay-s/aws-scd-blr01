import { event, mainDay } from '../content/event';
import { siteLinks } from '../site-config';
import { SiteLink } from './SiteLink';

// The confirmed programme is shared by the original desktop and mobile frames.
export function TechnicalProgramme({ mobile = false }: { mobile?: boolean }) {
  const node = (desktop: string, compact: string) => mobile ? compact : desktop;
  return <section className="technical-programme" data-node-id={node('874:8947', '874:9135')}
    aria-labelledby="technical-programme-title">
    <header className="technical-programme-heading" data-node-id={node('874:8948', '874:9136')}>
      <p className="event-kicker">MAIN-DAY PROGRAMME</p>
      <h2 id="technical-programme-title" data-node-id={node('874:8949', '874:9137')}>AWS sessions<br />&amp; hands-on workshops.</h2>
      <p data-node-id={node('874:8950', '874:9138')}>{mainDay.aws}</p>
    </header>
    <dl className="technical-programme-facts" data-node-id={node('874:8951', '874:9139')}>
      <div><dt>DATE</dt><dd>{event.date}</dd></div>
      <div><dt>VENUE</dt><dd>{event.venue}</dd></div>
      <div><dt>WHAT TO BRING</dt><dd>A laptop and charger for hands-on sessions.</dd></div>
    </dl>
    <div className="event-actions">
      <SiteLink href={siteLinks.konfhub} buttonTone="orange" className="event-action">Get your main-day ticket ↗</SiteLink>
      <SiteLink href="/agenda" className="event-text-link">View the agenda ↗</SiteLink>
    </div>
    <p className="technical-programme-archive">Looking for IMPULSE results? <SiteLink href="/#pre-scd" className="event-text-link">Meet the hackathon winners ↗</SiteLink></p>
  </section>;
}
