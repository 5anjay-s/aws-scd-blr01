import { HomeNavigation } from './HomeNavigation';
import { HackathonSection, MainDayOverview, VenueContent } from './EventContent';
import { hasHackathonEnded } from '../content/event';

export function AgendaPage({ mobile = false }: { mobile?: boolean }) {
  return <div className="agenda-page"><HomeNavigation mobile={mobile} /><header className="event-content"><p className="event-kicker">AWS STUDENT COMMUNITY DAY BENGALURU 2026</p><h1 className="event-heading">The programme.<br /><span>At a glance.</span></h1><p className="event-lead">{hasHackathonEnded() ? 'Following IMPULSE on 23–24 October, join the community for the main day on 5 November.' : 'Start with IMPULSE on 23–24 October. Join the community for the main day on 5 November.'}</p></header><HackathonSection compact /><section id="main-day" tabIndex={-1}><MainDayOverview /></section></div>;
}

export function VenuePage({ mobile = false }: { mobile?: boolean }) {
  return <div><HomeNavigation mobile={mobile} /><VenueContent full /></div>;
}
