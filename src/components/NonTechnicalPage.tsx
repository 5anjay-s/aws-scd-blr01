import { HomeNavigation } from './HomeNavigation';
import { TrackArtwork } from './TrackArtwork';
import { SiteLink } from './SiteLink';
import { DitherDivider } from './DitherDivider';
import { event, mainDay } from '../content/event';

export function NonTechnicalPage({ mobile = false }: { mobile?: boolean }) {
  return <div className="nontechnical-page" data-node-id={mobile ? '880:9338' : '874:9211'}>
    <HomeNavigation mobile={mobile} />
    <section className="nontechnical-intro" data-node-id={mobile ? '880:9342' : '874:9231'}>
      <div><p className="event-kicker">02 / NON-TECHNICAL TRACK</p>
        <h1 className="event-heading">Main-day<br /><span>sessions.</span></h1>
        <p className="event-lead">{mainDay.nonTechnical}</p>
        <div className="event-actions"><SiteLink href="/registration" buttonTone="orange" className="event-action">Register for the main day ↗</SiteLink><SiteLink href="/agenda" className="event-text-link">View the agenda ↗</SiteLink></div>
      </div>
      <div className="nontechnical-art" data-node-id={mobile ? '880:9347' : '874:9241'} aria-hidden="true">
        <TrackArtwork kind="quotes" src={mobile ? '/assets/880-9338-d328b.svg' : '/assets/874-9211-c568c.svg'} className="nontechnical-quotes" />
      </div>
    </section>
    <DitherDivider from="navy" to="white" />
    <section className="event-content event-paper nontechnical-details" aria-labelledby="nontechnical-details-title">
      <p className="event-kicker">5 NOVEMBER 2026 / REVA UNIVERSITY</p>
      <h2 id="nontechnical-details-title">More details to follow.</h2>
      <p>Session topics, speakers and timings will be shared once confirmed.</p>
      <dl className="event-facts"><div><dt>DATE</dt><dd>{event.date}</dd></div><div><dt>VENUE</dt><dd>REVA University, Bengaluru</dd></div><div><dt>SESSION DETAILS</dt><dd>To be announced</dd></div></dl>
      <SiteLink href="/technical" className="event-text-link">Explore the technical track ↗</SiteLink>
    </section>
    <DitherDivider from="white" to="navy" />
  </div>;
}
