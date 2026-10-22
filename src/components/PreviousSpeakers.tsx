import { DitherDivider } from './DitherDivider';
import { SiteLink } from './SiteLink';

type PreviousSpeakerProfile = {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  photo: string;
  photoPosition: string;
  photoScale?: number;
  linkedin: string;
};

const previousSpeakers: PreviousSpeakerProfile[] = [
  {
    id: 'ashita-prasad', name: 'Ashita Prasad', role: 'SDE / Developer Relations', company: 'AWS',
    companyLogo: '/brands/aws-white.svg', photo: '/media/previous-speakers/ashita-prasad.jpeg',
    photoPosition: '50% 42%', linkedin: 'https://www.linkedin.com/in/ashitaprasad/',
  },
  {
    id: 'smiti-guru', name: 'Smiti Guru', role: 'Senior Solutions Architect', company: 'AWS',
    companyLogo: '/brands/aws-white.svg', photo: '/media/previous-speakers/smiti-guru.jpeg',
    photoPosition: '50% 30%', photoScale: 1.5, linkedin: 'https://www.linkedin.com/in/smitirashmiguru/',
  },
  {
    id: 'arun-kumar', name: 'Arun Kumar', role: 'Technical Account Manager', company: 'AWS',
    companyLogo: '/brands/aws-white.svg', photo: '/media/previous-speakers/arun-kumar.png',
    photoPosition: '50% 40%', linkedin: 'https://www.linkedin.com/in/arun-kumar-402674120/',
  },
  {
    id: 'deepak-n', name: 'Deepak N', role: 'Site Reliability Engineer', company: 'JLL',
    companyLogo: '/brands/jll.svg', photo: '/media/previous-speakers/deepak-n.png',
    photoPosition: '50% 40%', linkedin: 'https://www.linkedin.com/in/deepak--n/',
  },
];

export function PreviousSpeakers() {
  return <div className="organizers-page" data-node-id="155:692">
    <section className="organizers-previous organizers-surface" aria-labelledby="previous-speakers-title">
      <div className="organizers-previous-heading">
        <p className="organizers-eyebrow">COMMUNITY VOICES / PAST EVENTS</p>
        <h2 id="previous-speakers-title">Previous Speakers</h2>
        <p>From past community events. The SCD 2026 speaker lineup will be announced separately.</p>
      </div>
      <div className="organizers-previous-grid" data-node-id="156:517">
        {previousSpeakers.map((speaker, index) => <article className="organizers-previous-card" key={speaker.id} data-node-id={['155:735', '156:529', '156:539', '156:549'][index]} data-reveal="rise">
          <div className={`organizers-previous-photo organizers-previous-photo--${index + 1}`} data-node-id="155:736">
            <img src={speaker.photo} alt={speaker.name} style={{ objectPosition: speaker.photoPosition, transform: `scale(${speaker.photoScale ?? 1})` }} loading="lazy" />
            <img className={`organizers-previous-company${index !== 1 ? ' organizers-previous-company--black' : ''}`} src={speaker.companyLogo} alt={speaker.company} loading="lazy" />
          </div>
          <div className="organizers-previous-info">
            <div className="organizers-previous-name-row">
              <h3>{speaker.name}</h3>
            </div>
            <p>{speaker.role}</p>
            <SiteLink href={speaker.linkedin} className="organizers-previous-link" aria-label={`View ${speaker.name} on LinkedIn`}>LinkedIn ↗</SiteLink>
          </div>
        </article>)}
      </div>
    </section>
    <div data-node-id="155:693" data-reveal="off"><DitherDivider from="violet" to="navy" /></div>
  </div>;
}

