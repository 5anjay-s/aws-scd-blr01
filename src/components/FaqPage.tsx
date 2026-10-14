import { DitherDivider } from './DitherDivider';
import { FaqAccordion } from './FaqAccordion';
import { HomeNavigation } from './HomeNavigation';
import { SiteLink } from './SiteLink';

const groups = [
  {
    id: 'about-the-day', title: '01 / About the day', desktopNode: '235:541', mobileNode: '239:616',
    questions: [
      { number: '01', question: 'What is AWS Student Community Day?', answer: 'A student-led meeting point for people, ideas, and the cloud. Come to learn, explore, and build together.', desktopNode: '235:543', mobileNode: '239:618' },
      { number: '02', question: 'Who is this for?', answer: 'Students curious about cloud technology and the things we can build together.', desktopNode: '235:552', mobileNode: '239:627' },
    ],
  },
  {
    id: 'ideas-and-community', title: '02 / Ideas & community', desktopNode: '235:803', mobileNode: '239:637',
    questions: [
      { number: '03', question: 'What will we explore?', answer: 'Ideas in cloud, AI, and the tools shaping what comes next, with room to ask questions and share perspectives.', desktopNode: '235:805', mobileNode: '239:639' },
      { number: '04', question: 'What can I bring to the conversation?', answer: 'A question, a rough sketch, or a first line of code. Unfinished ideas are part of the conversation.', desktopNode: '235:814', mobileNode: '239:648' },
      { number: '05', question: 'Where can I find the program and speakers?', answer: 'Programme highlights and the day’s timeline are on this site. Speaker names and session details will be announced as they are confirmed.', desktopNode: '235:823', mobileNode: '239:657' },
    ],
  },
  {
    id: 'plan-your-visit', title: '03 / Plan your visit', desktopNode: '235:833', mobileNode: '239:667',
    questions: [
      { number: '06', question: 'When and where is the event?', answer: 'AWS Student Community Day Bengaluru 2026 takes place on 5 November 2026 at REVA University, Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru 560064. Check-in begins at 8:00 AM and the programme starts at 9:00 AM IST.', desktopNode: '235:835', mobileNode: '239:669' },
      { number: '07', question: 'How do I register?', answer: 'RSVP on Meetup and register on KonfHub. Your official ticket is issued by KonfHub, and entry is confirmed only for KonfHub-registered attendees. A Meetup RSVP alone does not confirm entry.', desktopNode: '235:844', mobileNode: '239:678' },
    ],
  },
];

// Source: Figma 01 / Website, Good questions, nodes 227:540 and 227:541.
// The live navigation and local footer replace the original study's versions.
export function FaqPage({ mobile = false }: { mobile?: boolean }) {
  const node = (desktop: string, compact: string) => mobile ? compact : desktop;
  return <div className="faq-page" data-node-id={node('227:540', '227:541')}>
    <HomeNavigation mobile={mobile} />
    <div className="faq-hero faq-surface" data-node-id={node('229:541', '237:600')}>
      <div className="faq-hero-copy" data-node-id={mobile ? undefined : '229:542'}>
        <p className="faq-eyebrow" data-node-id={node('229:543', '237:601')}>FAQ / BEFORE WE BUILD</p>
        <h1 data-node-id={node('229:544', '237:602')}>GOOD<br />QUESTIONS.</h1>
        <p className="faq-subtitle" data-node-id={node('229:545', '237:603')}>A little clarity before the big day.</p>
        {!mobile && <p className="faq-hero-note" data-node-id="229:546">A few things to know before we build together.</p>}
      </div>
      <div className="faq-artwork" data-node-id={node('229:547', '237:604')}>
        <img src={mobile ? '/assets/866-8605-491b7.svg' : '/assets/860-5328-2b89b.svg'}
          width={mobile ? 272 : 544} height={mobile ? 192 : 384} alt="" />
      </div>
    </div>
    <dl className="faq-status faq-surface" data-node-id={node('230:541', '237:853')}>
      {[
        { label: 'DATE', value: '5 November 2026', desktopNode: '230:542', mobileNode: '237:854' },
        { label: 'VENUE', value: 'REVA University', desktopNode: '230:545', mobileNode: '237:857' },
        { label: 'REGISTRATION', value: 'Open now', desktopNode: '230:548', mobileNode: '237:860' },
      ].map((item, index) => <div key={item.label} data-node-id={node(item.desktopNode, item.mobileNode)}>
        <dt>{item.label}{!mobile && ` / 0${index + 1}`}</dt><dd>{item.value}</dd>
      </div>)}
    </dl>
    <DitherDivider from="cyan" to="white" />
    <div className="faq-questions faq-surface" data-node-id={node('234:541', '238:596')}>
      <aside className="faq-index" data-node-id={node('234:542', '238:597')}>
        <p className="faq-eyebrow" data-node-id={node('234:543', '238:598')}>FIND YOUR ANSWER</p>
        <h2 data-node-id={node('234:544', '238:599')}>{mobile ? <>Select a question<br />to read more.</> : <>Curiosity<br />welcome.</>}</h2>
        <nav aria-label="FAQ categories" data-node-id={mobile ? undefined : '234:545'}>
          {groups.map((group, index) => <SiteLink key={group.id} href={`/faq#${group.id}`}
            data-node-id={node(`234:${546 + index}`, `238:${600 + index}`)}>{group.title}</SiteLink>)}
        </nav>
        {!mobile && <p className="faq-index-hint" data-node-id="234:549">Start anywhere.<br />Select a question to read more.</p>}
      </aside>
      <div className="faq-groups" data-node-id={node('234:550', '238:603')}>
        {groups.map(group => <section className="faq-group" id={group.id} tabIndex={-1}
          aria-labelledby={`${group.id}-title`} data-node-id={node(group.desktopNode, group.mobileNode)} key={group.id}>
          <h2 id={`${group.id}-title`}>{group.title}</h2>
          {group.questions.map((question, index) => <FaqAccordion key={question.number}
            {...question} nodeId={node(question.desktopNode, question.mobileNode)} defaultOpen={index === 0} />)}
        </section>)}
      </div>
    </div>
    <DitherDivider from="white" to="orange" />
    <div className="faq-closing faq-surface" data-node-id={node('236:593', '240:648')}>
      <div className="faq-closing-heading" data-node-id={mobile ? undefined : '236:594'}>
        <p className="faq-eyebrow" data-node-id={node('236:595', '240:649')}>MORE TO COME</p>
        <h2 data-node-id={node('236:596', '240:650')}>Bring your<br />next question.</h2>
      </div>
      <div className="faq-closing-details" data-node-id={mobile ? undefined : '236:597'}>
        <p data-node-id={node('236:598', '240:651')}>5 November 2026 at REVA University. Explore the day and the community behind it.</p>
        <SiteLink href="/" className="faq-explore" buttonTone="navy" hoverTone="cyan" data-node-id={node('236:599', '240:652')}>
          <span>Explore the event</span><span className="faq-explore-arrow" data-name="Arrow"><img src="/assets/865-7675-0b485.svg" width="22" height="22" alt="" /></span>
        </SiteLink>
      </div>
    </div>
  </div>;
}
