import { speakers } from '../content/speakers';
import { SpeakerCompany } from './SpeakerCompany';
import { SiteLink } from './SiteLink';
import '../styles/speaker-lineup.css';

// Keep portrait, caption and company artwork together at every breakpoint.
export function SpeakerLineup({ mobile = false }: { mobile?: boolean }) {
  const lineup = [speakers.ayush, speakers.devansh];
  return <section className="scd-lineup" aria-label="SCD speaker lineup"
    data-node-id={mobile ? '1170:569' : '1127:2317'}>
    <div className="scd-lineup__heading"><h2>The lineup.</h2><p>More speakers to be announced.</p></div>
    <div className="scd-lineup__grid" data-node-id={mobile ? '1170:574' : '1127:2324'}>
      {lineup.map((person, index) => <article className={`scd-speaker scd-speaker--${index === 0 ? 'cyan' : 'orange'}`} key={person.name}>
        <div className="scd-speaker__portrait">
          <img src={person.photo} alt={person.name} className={`scd-speaker__photo scd-speaker__photo--${index === 0 ? 'ayush' : 'devansh'}`}
            loading="lazy" decoding="async" />
        </div>
        <div className="scd-speaker__caption">
          <p className="scd-speaker__index">0{index + 1} / SPEAKER</p>
          <h3>{'linkedin' in person
            ? <SiteLink href={person.linkedin} className="speaker-profile-link" aria-label={`${person.name} on LinkedIn`}>{person.name}</SiteLink>
            : person.name}</h3>
          <p className="scd-speaker__role">{person.role}</p>
          <p className="scd-speaker__background">{person.background}</p>
          {'credential' in person && <p className="scd-speaker__credential">{person.credential}</p>}
          <SpeakerCompany company={person.company} />
        </div>
      </article>)}
      <article className="scd-speaker scd-speaker--violet scd-speaker--pending">
        <div className="scd-speaker__portrait"><img src="/assets/860-5144-a4a5a.svg" alt="" loading="lazy" /></div>
        <div className="scd-speaker__caption"><p className="scd-speaker__index">03 / SPEAKER</p><h3>To be announced</h3><p className="scd-speaker__role">Name and session details to follow.</p></div>
      </article>
    </div>
  </section>;
}
