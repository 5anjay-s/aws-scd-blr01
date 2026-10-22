import { useEffect, useState } from 'react';
import { event, hackathon, mainDay, primaryNavigation } from '../content/event';
import { previousSpeakers } from '../content/organisers';
import { organizerLinks, siteLinks } from '../site-config';
import { SiteLink } from './SiteLink';

export function EventStatus() {
  const [remaining, setRemaining] = useState(() => Math.max(0, Date.parse(event.startsAt) - Date.now()));
  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, Date.parse(event.startsAt) - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const units = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60];
  return <div className="event-status" data-reveal="off">
    <div><span className="event-kicker">MAIN DAY / 2026</span><strong>{event.date}</strong></div>
    <div><span className="event-kicker">BENGALURU</span><SiteLink href="/venue">REVA University ↗</SiteLink></div>
    <div className="event-countdown" aria-label={`${units[0]} days, ${units[1]} hours and ${units[2]} minutes until the programme starts`}>
      {units.map((value, i) => <div key={i}><strong>{String(value).padStart(2, '0')}</strong><span>{['DAYS', 'HRS', 'MINS'][i]}</span></div>)}
    </div>
    <SiteLink href={event.calendar} className="event-calendar">Add to calendar ↗</SiteLink>
  </div>;
}

export function HackathonSection({ compact = false }: { compact?: boolean }) {
  return <div className={`event-content pre-scd${compact ? ' pre-scd--compact' : ''}`}>
    <p className="event-kicker">PRE-SCD → MAIN DAY</p>
    {!compact && <h2 className="event-heading">The event<br /><span>series.</span></h2>}
    <div className="event-roadmap" aria-label="Event series timeline">
      <SiteLink href="/#pre-scd"><span>01 / PRE-SCD</span><strong>23–24 OCT</strong><span>IMPULSE ’26 · Hackathon</span></SiteLink>
      <SiteLink href="/agenda#main-day"><span>02 / MAIN DAY</span><strong>05 NOV</strong><span>Student Community Day</span></SiteLink>
    </div>
    <article className="hackathon-poster" id="impulse">
      <div className="hackathon-title"><p className="event-kicker">{hackathon.type}</p><h3>{hackathon.name}</h3><p className="hackathon-tagline">{hackathon.tagline}</p>
        <p>{hackathon.dates} · 24 hours</p><p>{hackathon.venue}</p>
        <SiteLink href={hackathon.url} buttonTone="navy" className="event-action">Register for IMPULSE ↗</SiteLink>
        <p className="event-small">Separate registration from the main-day SCD ticket. Rules and participation details are on Luma.</p>
      </div>
      <div className="hackathon-workshop"><span className="event-kicker">FOR HACKATHON TEAMS</span><h4>ChatGPT workshop</h4><p>{hackathon.workshop}</p><p className="event-small">{hackathon.access}</p><p className="event-small">Workshop schedule and further instructions will be shared with registered teams.</p></div>
    </article>
  </div>;
}

export function MainDayOverview() {
  return <div className="event-content event-paper">
    <p className="event-kicker">05 NOVEMBER / MAIN-DAY PROGRAMME</p>
    <h2 className="event-heading">Two tracks.<br /><span>One community.</span></h2>
    <p className="event-lead">A day for students, developers, working professionals and anyone curious about what they can build next.</p>
    <div className="event-two-column">
      <article><h2>01 / Technical</h2><p>{mainDay.technical}</p><p>{mainDay.openai}</p><SiteLink href="/technical" className="event-text-link">Technical track ↗</SiteLink></article>
      <article><h2>02 / Non-technical</h2><p>{mainDay.nonTechnical}</p><SiteLink href="/non-technical" className="event-text-link">Non-technical track ↗</SiteLink></article>
    </div>
    <dl className="event-facts"><div><dt>CHECK-IN</dt><dd>{event.checkIn}</dd></div><div><dt>PROGRAMME</dt><dd>{event.programme}</dd></div><div><dt>INCLUDED</dt><dd>Food & refreshments</dd></div></dl>
    <p className="event-small">Session timings, speakers and workshop seat requirements will be announced. Follow the official channels for updates.</p>
    <div className="event-actions"><SiteLink href="/registration" buttonTone="orange" className="event-action">Get your main-day ticket ↗</SiteLink><SiteLink href={event.calendar} className="event-text-link">Add to calendar ↗</SiteLink></div>
  </div>;
}

export function VenueContent({ full = false }: { full?: boolean }) {
  return <div className="event-content venue-content">
    <p className="event-kicker">{full ? 'PLAN YOUR VISIT' : 'THE VENUE / BENGALURU'}</p>
    {full && <h1 className="event-heading">Find your<br /><span>way here.</span></h1>}
    <div className="venue-intro"><div><img className="venue-logo" src="/brands/reva-university-white.png" alt="REVA University" width="654" height="279" loading="lazy" />
      <p className="event-lead">A place to learn, connect and build together in north Bengaluru.</p><p>{event.address}</p>
      <div className="event-actions"><SiteLink href={event.directions} buttonTone="orange" className="event-action">Get directions ↗</SiteLink>{!full && <SiteLink href="/venue" className="event-text-link">How to reach ↗</SiteLink>}</div>
    </div>
    <figure className="venue-map"><SiteLink href={event.directions} aria-label="Open directions to REVA University in Google Maps"><img src="/maps/reva-campus.webp" alt="Map of REVA University and surrounding north Bengaluru roads" width="3543" height="1994" loading="lazy" /><span>Open in Google Maps ↗</span></SiteLink><figcaption>Map: terrain.app · © <SiteLink href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</SiteLink></figcaption></figure></div>
    {full && <><dl className="event-facts"><div><dt>DATE</dt><dd>{event.date}</dd></div><div><dt>CHECK-IN</dt><dd>{event.checkIn}</dd></div><div><dt>PROGRAMME</dt><dd>{event.programme}</dd></div></dl>
      <div className="venue-travel">
        <article><span className="event-kicker">01 / BY BUS</span><h2>Via Yelahanka</h2><p>From Yelahanka Old Town, take <strong>289R or 278A</strong> to the university main gate. Other 289-series buses can bring you near REVA or BSF Cross, followed by a walk to campus. Confirm the route and stop before boarding.</p></article>
        <article><span className="event-kicker">02 / BY TRAIN</span><h2>Yelahanka Junction</h2><p>The nearest railway station is Yelahanka Junction. Services can be limited, so check routes and availability for your travel date. You can also arrive at KSR Bengaluru (Majestic) or another major station and continue by bus via Yelahanka or by cab.</p></article>
        <article><span className="event-kicker">03 / BY ROAD OR AIR</span><h2>Set REVA as your destination</h2><p>Use REVA University, Kattigenahalli, Yelahanka in your maps or cab app. From Kempegowda International Airport, continue by cab. Allow extra time for Bengaluru traffic and follow campus security instructions on arrival.</p><SiteLink href={event.directions} className="event-text-link">Plan your route ↗</SiteLink></article>
      </div><aside className="bmtc-guide" aria-labelledby="bmtc-guide-title"><div className="bmtc-guide-symbol" aria-hidden="true">↗</div><div><p className="event-kicker">COMING BY PUBLIC TRANSPORT?</p><h2 id="bmtc-guide-title">Plan your bus journey with Namma BMTC 2.0</h2><p>Use BMTC’s government app to check live bus information and plan your commute to campus. Check your route and stop before you travel.</p></div><SiteLink href={event.bmtc} buttonTone="navy" className="event-action">Get the Android app ↗</SiteLink></aside></>}
  </div>;
}

export function PreviousSpeakers() {
  return <section className="event-content previous-speakers" aria-labelledby="previous-speakers-title">
    <p className="event-kicker">PEOPLE WHO HAVE SHARED THEIR EXPERIENCE</p><h2 className="event-heading" id="previous-speakers-title">Previous<br /><span>speakers.</span></h2><p>From past community events. The SCD 2026 speaker lineup will be announced separately.</p>
    <div className="previous-speakers-grid">{previousSpeakers.map(person => <article key={person.id}>
      <div className="previous-speaker-photo"><img src={person.photo} alt={person.name} style={{ objectPosition: person.photoPosition, transform: `scale(${person.photoScale ?? 1})` }} loading="lazy" /></div>
      <div className="previous-speaker-info"><img className="speaker-company" src={person.companyLogo} alt={person.company} loading="lazy" /><h3>{person.name}</h3><p>{person.role}</p>{person.background && <p className="event-small">{person.background}</p>}<SiteLink href={person.linkedin} className="event-text-link">LinkedIn ↗</SiteLink></div>
    </article>)}</div>
  </section>;
}

export function UtilityFooter() {
  return <footer className="event-utility"><div className="event-utility-top"><div><p className="event-kicker">QUESTIONS FOR THE ORGANISERS?</p><SiteLink href={`mailto:${event.email}`} className="event-contact">{event.email}</SiteLink></div><SiteLink href="/registration" className="event-text-link">Register for SCD ↗</SiteLink></div>
    <nav aria-label="Explore the website">{primaryNavigation.map(([href, label]) => <SiteLink key={href} href={href}>{label}</SiteLink>)}<SiteLink href="/faq">FAQ</SiteLink></nav>
    <nav aria-label="Community channels"><SiteLink href={siteLinks.instagram}>@aws.scd.blr</SiteLink><SiteLink href={organizerLinks.campusInstagram}>@aws.sbg.ru</SiteLink><SiteLink href={organizerLinks.linkedin}>LinkedIn</SiteLink><SiteLink href={organizerLinks.meetup}>Meetup</SiteLink><SiteLink href={organizerLinks.luma}>Luma</SiteLink><SiteLink href={organizerLinks.builderCenter}>AWS Builder Center</SiteLink></nav>
    <p className="event-small">© 2026 AWS Student Builder Group at REVA University. AWS Student Community Day Bengaluru 2026.</p>
  </footer>;
}
