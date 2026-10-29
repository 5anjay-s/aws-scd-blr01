import { previousSpeakers } from '../content/organisers';
import { SiteLink } from './SiteLink';

export function PreviousSpeakers() {
  return <section className="event-content previous-speakers" aria-labelledby="previous-speakers-title">
    <p className="event-kicker">PAST COMMUNITY EVENTS</p><h2 className="event-heading" id="previous-speakers-title">Previous<br /><span>speakers.</span></h2>
    <div className="previous-speakers-grid">{previousSpeakers.map(person => <article key={person.id}>
      <div className="previous-speaker-photo"><img src={person.photo} alt={person.name} style={{ objectPosition: person.photoPosition, transform: `scale(${person.photoScale ?? 1})` }} loading="lazy" /></div>
      <div className="previous-speaker-info"><img className="speaker-company" src={person.companyLogo} alt={person.company} loading="lazy" /><h3>{person.name}</h3><p>{person.role}</p>{person.background && <p className="event-small">{person.background}</p>}<SiteLink href={person.linkedin} className="event-text-link">LinkedIn ↗</SiteLink></div>
    </article>)}</div>
  </section>;
}
