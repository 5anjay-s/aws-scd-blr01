import { HomeNavigation } from './HomeNavigation';
import { SiteLink } from './SiteLink';
import { organizerLinks } from '../site-config';
import { organizerArtwork } from './organizerArtwork';
import { DitherDivider } from './DitherDivider';
import { ArcadeText } from './ArcadeText';
import desktopRibbon from '../../public/assets/1823-3588-30f2c.svg?raw';
import mobileRibbon from '../../public/assets/1823-3589-14a88.svg?raw';

// Keep the exported pixel paths; give the cyan ring contrast on the cyan hero.
const heroRibbons = {
  desktop: `data:image/svg+xml,${encodeURIComponent(desktopRibbon.replaceAll('#22D3EE', '#0B1020'))}`,
  mobile: `data:image/svg+xml,${encodeURIComponent(mobileRibbon.replaceAll('#22D3EE', '#0B1020'))}`,
};

type Artwork = { src: string; width: number; height: number };
function Art({ asset, className = '', nodeId }: { asset: Artwork; className?: string; nodeId?: string }) {
  return <img className={`organizers-art ${className}`} src={asset.src} width={asset.width} height={asset.height}
    alt="" data-node-id={nodeId} decoding="async" />;
}

const initiatives = [
  {
    label: '01 / FIRST SPARKS', title: ['START.', 'TOGETHER.'], tone: 'orange', desktop: '1834:3947', mobile: '1834:4187',
    activities: [
      { date: '11 DEC 2025', title: 'CODE to CLOUD', detail: 'Build & deploy with AWS — from idea to production in 30 minutes.', link: 'Meetup archive', desktop: '1834:3950', mobile: '1834:4190' },
      { date: '13 MAR 2026', title: 'Inauguration & keynote', detail: 'AWS Cloud Club REVA University • 350 students • A shared vision for learning, with a keynote from AWS.', link: 'Meetup', desktop: '1834:3958', mobile: '1834:4198' },
    ],
  },
  {
    label: '02 / BEYOND CAMPUS', title: ['TAKE IT', 'FURTHER.'], tone: 'cyan', desktop: '1834:3966', mobile: '1834:4206',
    activities: [
      { date: '28 APR 2026', title: 'Intro to cloud & getting started with AWS', detail: '90+ participants taking their first steps in cloud computing.', link: 'Meetup', desktop: '1834:3969', mobile: '1834:4209' },
      { date: '20 MAY 2026', title: 'Cloud beyond campus / OA1', detail: '120+ participants at HKBK • Cloud fundamentals and hands-on practice with Amazon S3 and EC2.', link: 'Meetup', desktop: '1834:3977', mobile: '1834:4217' },
    ],
  },
  {
    label: '03 / A LEARNING PROGRAMME', title: ['KEEP', 'BUILDING.'], tone: 'violet', desktop: '1834:3985', mobile: '1834:4225',
    activities: [
      { date: '20 JUN 2026', title: 'AWS Launchpad / Info session', detail: '136 first-cohort registrations • A learning programme in collaboration with AWS Academy.', link: 'Meetup', desktop: '1834:3988', mobile: '1834:4228' },
      { date: '24 JUL 2026', title: 'AWS Launchpad / Goodies + Q&A', detail: 'Goodies announcement and doubt-clearing session.', link: 'Meetup', desktop: '1834:3996', mobile: '1834:4236' },
    ],
  },
];

const channels = [
  { key: 'eventInstagram', purpose: 'EVENT UPDATES', platform: 'Instagram', handle: '@aws.scd.blr' },
  { key: 'campusInstagram', purpose: 'CAMPUS COMMUNITY', platform: 'Instagram', handle: '@aws.sbg.ru' },
  { key: 'linkedin', purpose: 'STAY CONNECTED', platform: 'LinkedIn', handle: 'AWS SBG REVA' },
  { key: 'meetup', purpose: 'MEET IN PERSON', platform: 'Meetup', handle: 'AWS SBG REVA' },
  { key: 'luma', purpose: 'NEXT EVENTS', platform: 'Luma', handle: '@aws.sbg.ru' },
  { key: 'builderCenter', purpose: 'KEEP BUILDING', platform: 'AWS Builder Center', handle: 'Explore the community' },
] as const;

// Figma: 03 / Desktop explorations, organizers frames 1823:3588 and 1823:3589.
export function OrganizersPage({ mobile = false }: { mobile?: boolean }) {
  const node = (desktop: string, compact: string) => mobile ? compact : desktop;
  const art = mobile ? organizerArtwork.mobile : organizerArtwork.desktop;
  const events = [
    { day: '02 SEP', category: 'CLOUD + AI', title: ['BUILDING', 'AI AGENTS'], detail: 'with Amazon Bedrock AgentCore', tone: 'cyan', art: art.imgArtworkTechnicalTrackPixelBrackets, node: node('1834:3859', '1834:4104'), artNode: '1831:3774' },
    { day: '03 SEP', category: 'AI IDEATHON', title: ['IDEATE', 'BLR ’26'], detail: 'Ideas for real-world problems', tone: 'violet', art: art.imgAccentCuriositySpark, node: node('1834:3891', '1834:4130'), artNode: '1831:3797' },
    { day: '04 SEP', category: 'WEB3 + BLOCKCHAIN', title: ['BUILD', 'ON WEB3'], detail: 'Workshop & build challenge', tone: 'orange', art: art.imgApprovedWovenLinks1, node: node('1834:3916', '1834:4156'), artNode: '1831:3826' },
  ];
  const speechEdges = mobile
    ? [art.imgDitherPrintedSpeechEdge, art.imgDitherPrintedSpeechEdge, art.imgDitherPrintedSpeechEdge]
    : [organizerArtwork.desktop.imgDitherPrintedSpeechEdge1, organizerArtwork.desktop.imgDitherPrintedSpeechEdge2, organizerArtwork.desktop.imgDitherPrintedSpeechEdge3];
  const conversations = [
    { count: '1,104', channel: 'Meetup', measure: 'members', note: 'MEET IN PERSON. BUILD TOGETHER.', art: art.imgSpeechPaper, node: node('1851:3855', '1851:3972') },
    { count: '~900', channel: 'WhatsApp', measure: 'members', note: 'KEEP THE CONVERSATION GOING.', art: art.imgSpeechPaper1, node: node('1851:3865', '1851:3982') },
    { count: '261', channel: 'LinkedIn', measure: 'followers', note: 'SHARE WHAT’S NEXT.', art: art.imgSpeechPaper2, node: node('1851:3875', '1851:3992') },
  ];

  return <div className={`organizers-page${mobile ? ' organizers-page--mobile' : ''}`} data-node-id={node('1823:3588', '1823:3589')}>
    <HomeNavigation mobile={mobile} />
    <section className="organizers-manifesto organizers-surface" aria-labelledby="organizers-title" data-node-id={node('1834:3826', '1834:4071')}>
      <div className="organizers-poster" data-node-id={node('1834:3827', '1834:4072')} data-reveal="off">
        <Art asset={{ ...art.imgApprovedWovenLinks, src: heroRibbons[mobile ? 'mobile' : 'desktop'] }} className="organizers-hero-links" nodeId={node('1834:3828', '1834:4073')} />
        <p className="organizers-eyebrow" data-node-id={node('1834:3833', '1834:4078')}>THE ORGANISERS / AWS SBG REVA</p>
        <h1 id="organizers-title">
          <span className="organizers-campus" data-node-id={node('1834:3834', '1834:4079')}>CAMPUS</span>
          <span className="organizers-is-just" data-node-id={node('1834:3835', '1834:4080')}>IS JUST</span>
          <span className="organizers-the-start" data-node-id={node('1834:3836', '1834:4081')}>THE{mobile ? <br /> : ' '}<ArcadeText>START.</ArcadeText></span>
        </h1>
      </div>
      <div className="organizers-signature" data-node-id={node('1834:3838', '1834:4083')}>
        <div className="organizers-host" data-node-id={node('1834:3839', '1834:4084')}>
          <p className="organizers-small">ORGANISED BY</p>
          <h2>AWS Student<br />Builder Group</h2>
          <p className="organizers-eyebrow">REVA UNIVERSITY</p>
        </div>
        <div className="organizers-intro" data-node-id={node('1834:3843', '1834:4088')}>
          <p>A student-led community learning, building and sharing ideas in cloud, AI and emerging technologies. We’re the team behind AWS Student Community Day Bengaluru 2026.</p>
          <p className="organizers-small organizers-lime">STUDENT LED. COMMUNITY POWERED.</p>
        </div>
      </div>
    </section>
    <div data-node-id={node('1834:3846', '1834:4091')} data-reveal="off"><DitherDivider from="cyan" to="white" /></div>
    <section className="organizers-tech-week organizers-surface" aria-labelledby="organizers-tech-title" data-node-id={node('1834:3849', '1834:4093')}>
      <p className="organizers-eyebrow">01 / BENGALURU TECH WEEK — 02–04 SEPT 2026</p>
      <div className="organizers-impact" data-node-id={node('1834:3851', '1834:4095')}>
        <p className="organizers-registration-count" data-node-id={node('1834:3852', '1834:4096')}>1,222+</p>
        <div><h2>Registrations.<br />All student led.</h2><p>The only student-led community organising at Bengaluru Tech Week 2026.</p></div>
      </div>
      <h2 className="organizers-domains" id="organizers-tech-title">Three days.{mobile ? <br /> : ' '}Three domains.</h2>
      <p>Cloud, AI and blockchain at REVA — alongside the city’s professional technology organisers.</p>
      <div className="organizers-event-wall" data-node-id={node('1834:3858', '1834:4102')}>
        {events.map(event => <article className={`organizers-event organizers-event--${event.tone}`} key={event.day} data-node-id={event.node} data-reveal="rise">
          <div className="organizers-event-date"><p>{event.day}</p><p>{event.category}</p></div>
          <h3>{event.title[0]}<br />{event.title[1]}</h3>
          <div className="organizers-event-art"><Art asset={event.art} nodeId={`I${event.node};${event.artNode}`} /></div>
          <p className="organizers-event-detail">{event.detail}</p>
          <div className="organizers-event-edition"><p>BENGALURU TECH WEEK / 2026</p><span aria-hidden="true" /></div>
        </article>)}
      </div>
      <p className="organizers-small">CLOUD / AI / BLOCKCHAIN. THREE DAYS OF BUILDING TOGETHER.</p>
    </section>
    <section className="organizers-initiatives organizers-surface" aria-labelledby="organizers-initiatives-title" data-node-id={node('1834:3942', '1834:4182')}>
      <p className="organizers-eyebrow organizers-cyan">02 / BEFORE THE BIG DAYS — DEC 2025 TO JUL 2026</p>
      <h2 id="organizers-initiatives-title"><ArcadeText>START SMALL.</ArcadeText><br /><ArcadeText>BUILD TOGETHER.</ArcadeText></h2>
      <p>A workshop becomes a programme.<br />A first question becomes a shared possibility.</p>
      <div className="organizers-chapters" data-node-id={node('1834:3946', '1834:4186')}>
        {initiatives.map(chapter => <section className={`organizers-chapter organizers-chapter--${chapter.tone}`} key={chapter.label} data-node-id={node(chapter.desktop, chapter.mobile)}>
          <p className="organizers-small">{chapter.label}</p>
          <h3><ArcadeText>{chapter.title[0]}</ArcadeText><br /><ArcadeText>{chapter.title[1]}</ArcadeText></h3>
          {chapter.activities.map(activity => <article className="organizers-activity" key={activity.date} data-node-id={node(activity.desktop, activity.mobile)}>
            <p className="organizers-eyebrow">{activity.date}</p>
            <h4>{activity.title}</h4>
            <p>{activity.detail}</p>
            <SiteLink href={organizerLinks.meetup} className="organizers-archive">{activity.link} <span aria-hidden="true">↗</span></SiteLink>
          </article>)}
        </section>)}
      </div>
      <p className="organizers-small organizers-lime">SIX FIRST CHAPTERS. THREE TECH WEEK EVENTS. STILL BUILDING.</p>
    </section>
    <section className="organizers-community organizers-surface" aria-labelledby="organizers-invitation-title" data-node-id={node('1834:4005', '1834:4245')}>
      <div className="organizers-conversations" data-node-id={node('1851:3848', '1851:3965')} data-reveal="fade">
        <p className="organizers-small organizers-conversation-label">03 / YOUR PEOPLE ARE HERE</p>
        <div className="organizers-invitation" data-node-id={node('1851:3850', '1851:3967')}>
          <Art asset={art.imgTheInvitationPixelSpeechPanel} />
          <div className="organizers-invitation-copy"><h2 id="organizers-invitation-title">COME BUILD<br /><ArcadeText>WITH US.</ArcadeText></h2><p className="organizers-lime">STUDENT LED. COMMUNITY POWERED.</p></div>
          <Art asset={mobile ? art.imgDitherPrintedSpeechEdge1 : art.imgDitherPrintedSpeechEdge} className="organizers-invitation-dither" nodeId={node('1852:3997', '1852:4005')} />
        </div>
        {conversations.map((speech, index) => <div key={speech.channel} className={`organizers-speech organizers-speech--${index}`} data-node-id={speech.node}>
          <Art asset={speech.art} />
          <div className="organizers-speech-copy">
            <div className="organizers-speech-count"><p>{speech.count}</p><div><h3>{speech.channel}</h3><p>{speech.measure}</p></div></div>
            <p className="organizers-speech-note">{speech.note}</p>
          </div>
          <Art asset={speechEdges[index]} className="organizers-speech-dither" />
        </div>)}
        <div className="organizers-invitation-note" data-node-id={node('1851:3885', '1851:4002')}>
          {!mobile && <p>A first hello.<br />A shared project.<br />A reason to keep building.</p>}
          <p>{mobile ? '~2,265 memberships + follows' : '~2,265 MEMBERSHIPS + FOLLOWS'}<br /><span>ACROSS OUR COMMUNITY CHANNELS</span></p>
        </div>
      </div>
      <div className="organizers-contact-wall" data-node-id={node('1851:3888', '1851:4005')}>
        <div className="organizers-contact-heading"><h2><ArcadeText>FIND YOUR PEOPLE.</ArcadeText></h2><p className="organizers-eyebrow">SIX WAYS TO KEEP IN TOUCH ↓</p></div>
        <div className="organizers-contacts" data-node-id={node('1851:3892', '1851:4009')}>
          {channels.map((channel, index) => <SiteLink key={channel.key} href={organizerLinks[channel.key]} className="organizers-contact" aria-label={`${channel.platform}: ${channel.handle}`}>
            <Art asset={art.imgContactPaper} className="organizers-contact-paper" />
            <Art asset={art.imgTearPerforation} className="organizers-contact-perforation" />
            {!mobile && <Art asset={organizerArtwork.desktop.imgTearHereVerticalPerforation} className="organizers-contact-tear" />}
            <div className="organizers-contact-copy"><div className="organizers-contact-number"><span>0{index + 1}</span><span aria-hidden="true">↗</span></div><p className="organizers-contact-purpose">{channel.purpose}</p><h3>{channel.platform}</h3><p className="organizers-contact-handle">{channel.handle}</p></div>
          </SiteLink>)}
        </div>
      </div>
    </section>
    <div data-node-id={node('1834:4068', '1834:4310')} data-reveal="off"><DitherDivider from="orange" to="navy" /></div>
  </div>;
}
