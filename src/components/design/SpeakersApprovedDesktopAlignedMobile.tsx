import { SpeakerQuotation } from "../SpeakerQuotation";
import { SiteLink } from "../SiteLink";
import { speakers } from "../../content/speakers";
import "../../styles/speakers-updated.css";
// Source: Figma 00/ Final, node 1168:494. The final four-speaker directory
// continues the same two-column layout (1170:645+, frames continued from
// 1170:611). The removed opening portrait and reserved slot make room for the
// editorial statement above the grid; the mirrored continuation composition
// exists only on the desktop responsive variant.
const imgApprovedDitheredQuotationMobileOpener = "/assets/1168-494-a5a4a.svg";
const imgApprovedDitheredQuotationSpeaker01 = "/assets/1168-494-b8c10.svg";

export default function SpeakersApprovedDesktopAlignedMobile() {
  return (
    <div className="d-7fe91255b2" data-node-id="1168:494" data-name="Speakers / Approved desktop aligned — Mobile">
      <div className="d-90fd574336" data-node-id="1170:549" data-name="Speakers / Voices in print — Mobile opener">
        <div className="d-b74a68a457" data-node-id="1170:550" data-name="Editorial masthead">
          <p className="d-6e37333e29" data-node-id="1170:551">
            03 / THE SPEAKERS
          </p>
          <p className="d-54b4003d0e" data-node-id="1170:552">
            DIFFERENT PERSPECTIVES. SHARED POSSIBILITIES.
          </p>
          <p className="d-602ee05e42 arcade-heading" data-node-id="1170:553">
            SPEAKERS
          </p>
        </div>
        <div className="d-e64ce650a0" data-node-id="1170:554" data-name="Shared possibilities">
          <div className="d-8826026b01" data-node-id="1170:555">
            <p className="d-40ace226fd">Different voices.</p>
            <p className="d-fe6c23de1d">Shared possibilities.</p>
          </div>
          <p className="d-fc9fe25a62" data-node-id="1170:556">
            FOR THE NEXT WAVE OF BUILDERS.
          </p>
        </div>
        <div className="d-f6b8f3f4a8" data-node-id="1170:557" data-name="Introduction / Copy and approved quotation">
          <div className="d-dccf0b60dd" data-node-id="1170:558">
            <p className="d-897a3c8a4f">New perspectives. New ways to build.</p>
            <p className="d-6a4f4f832e">Meet the people behind the conversation.</p>
          </div>
          <div className="d-a7b8d52d66" data-node-id="1170:559" data-name="Approved dithered quotation / Mobile opener">
            <SpeakerQuotation className="d-511e8f31d4" src={imgApprovedDitheredQuotationMobileOpener} />
          </div>
        </div>
        <div className="d-07ccbf50d6" data-node-id="1170:566" data-name="Speaker announcements / Status">
          <p className="d-4b43c08078" data-node-id="1170:567">
            MEET THE SPEAKERS
          </p>
          <p className="d-7efb926afd" data-node-id="1170:568">
            AWS STUDENT COMMUNITY DAY
          </p>
        </div>
      </div>
      <div className="d-e6fc559f21" data-node-id="1170:569" data-name="Speakers / The lineup — Mobile directory">
        <div className="d-e64ce650a0" data-node-id="1170:570" data-name="The lineup / Announcement status">
          <p className="d-feb52623df" data-node-id="1170:571">
            THE LINEUP.
          </p>
          <p className="d-e1908a6b66" data-node-id="1170:572">
            FOUR VOICES. ONE CONVERSATION.
          </p>
          <div className="d-839bc9fa18" data-node-id="1170:573">
            <p className="d-06214b5362">Meet the people building</p>
            <p className="d-0479ea4484">what comes next.</p>
          </div>
        </div>
        <div className="mobile-speaker-statement" data-name="Speakers / Editorial statement — The people in the room">
          <p className="speaker-statement-kicker">THE PEOPLE IN THE ROOM</p>
          <p className="mobile-speaker-statement-heading">BUILT IN THE OPEN.</p>
          <p className="mobile-speaker-statement-body">
            Devansh, Shreyans, Vraj and Mitul work across cloud security, AI systems, product architecture and go-to-market. They've shipped at scale, made hard calls, and learned what survives contact with the real world. Bring your questions — the best conversations start in the room.
          </p>
          <p className="mobile-speaker-statement-foot">FOUR VOICES / ONE STAGE</p>
        </div>
        <div className="d-683bc8606f mobile-speaker-grid" data-node-id="1170:574" data-name="Speaker directory / Two-column portraits">
          <div className="d-c197716cad mobile-speaker-card updated-speaker-card" data-node-id="1170:586" data-name="Speaker 01 / Portrait and profile">
            <div className="d-adcca22bcc mobile-speaker-portrait updated-speaker-portrait updated-speaker-portrait--devansh" data-node-id="1170:587" data-name="Speaker 01 / Devansh Agrawal portrait">
              <div className="d-049d28c98a" data-node-id="I1170:587;1060:533" data-name="Portrait / Pixel bust">
                <img alt={speakers.devansh.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.devansh.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-43f50fc4ff mobile-speaker-caption updated-speaker-caption updated-speaker-caption--devansh" data-node-id="1170:592" data-name="Speaker 01 / Metadata">
              <p className="d-68247c54be" data-node-id="1170:593">
                01 / SPEAKER
              </p>
              <p className="d-30c2530cb1 updated-speaker-name" data-node-id="1170:594">
                <SiteLink href={speakers.devansh.linkedin} className="updated-speaker-link" aria-label={`${speakers.devansh.name} on LinkedIn`}>{speakers.devansh.name}</SiteLink>
              </p>
              <div className="d-f6b8f3f4a8 updated-speaker-metadata" data-node-id="1170:595" data-name="Speaker 01 / Details and approved quotation">
                <div className="d-07493e07be updated-speaker-facts" data-node-id="1170:596">
                  <p className="updated-speaker-role">{speakers.devansh.role}</p>
                  <p className="updated-speaker-background">{speakers.devansh.background}</p>
                  <p className="updated-speaker-credential">{speakers.devansh.credential}</p>
                  <div className="updated-speaker-affiliation updated-speaker-affiliation--aws"><img src="/assets/sponsors/aws.svg" alt="AWS" width="54" height="32" loading="lazy" /></div>
                </div>
                <div className="d-5906cd54d7" data-node-id="1170:597" data-name="Approved dithered quotation / Speaker 01">
                  <SpeakerQuotation className="d-511e8f31d4" src={imgApprovedDitheredQuotationSpeaker01} />
                </div>
              </div>
            </div>
          </div>
          <div className="d-c197716cad mobile-speaker-card" data-node-id="1170:601" data-name="Speaker 02 / Portrait and profile">
            <div className="d-ea4a445521 mobile-speaker-portrait updated-speaker-portrait" data-node-id="1170:602" data-name="Speaker 02 / Shreyans Dhankhar portrait">
              <div className="d-049d28c98a" data-node-id="I1170:602;1060:538" data-name="Portrait / Pixel bust">
                <img alt={speakers.shreyans.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.shreyans.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-c589fabaed mobile-speaker-caption updated-speaker-caption" data-node-id="1170:607" data-name="Speaker 02 / Metadata">
              <p className="d-fc9fe25a62" data-node-id="1170:608">
                02 / SPEAKER
              </p>
              <p className="d-bf2bdce3ac" data-node-id="1170:609">
                {speakers.shreyans.name}
              </p>
              <div className="d-f308fc5ee1" data-node-id="1170:610">
                <p className="updated-speaker-role">{speakers.shreyans.role}</p>
                <p className="updated-speaker-background">{speakers.shreyans.background}</p>
                <div className="updated-speaker-affiliation updated-speaker-affiliation--aws"><img src="/assets/sponsors/aws.svg" alt="AWS" width="54" height="32" loading="lazy" /></div>
              </div>
            </div>
          </div>
          <div className="d-c197716cad mobile-speaker-card updated-speaker-card" data-node-id="1170:645" data-name="Speaker 03 / Portrait and profile">
            <div className="d-adcca22bcc mobile-speaker-portrait updated-speaker-portrait" data-node-id="1170:646" data-name="Speaker 03 / Vraj Chaubal portrait">
              <div className="d-049d28c98a" data-node-id="I1170:646;1060:533" data-name="Portrait / Pixel bust">
                <img alt={speakers.vraj.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.vraj.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-43f50fc4ff mobile-speaker-caption updated-speaker-caption updated-speaker-caption--devansh" data-node-id="1170:647" data-name="Speaker 03 / Metadata">
              <p className="d-68247c54be" data-node-id="1170:648">
                03 / SPEAKER
              </p>
              <p className="d-30c2530cb1 updated-speaker-name" data-node-id="1170:649">
                {speakers.vraj.name}
              </p>
              <div className="d-f6b8f3f4a8 updated-speaker-metadata" data-node-id="1170:650" data-name="Speaker 03 / Details">
                <div className="d-07493e07be updated-speaker-facts" data-node-id="1170:651">
                  <p className="updated-speaker-role">{speakers.vraj.role}</p>
                  <p className="updated-speaker-background">{speakers.vraj.background}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-c197716cad mobile-speaker-card" data-node-id="1170:652" data-name="Speaker 04 / Portrait and profile">
            <div className="d-ea4a445521 mobile-speaker-portrait updated-speaker-portrait" data-node-id="1170:653" data-name="Speaker 04 / Mitul Sarvaiya portrait">
              <div className="d-049d28c98a" data-node-id="I1170:653;1060:538" data-name="Portrait / Pixel bust">
                <img alt={speakers.mitul.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.mitul.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-c589fabaed mobile-speaker-caption updated-speaker-caption" data-node-id="1170:654" data-name="Speaker 04 / Metadata">
              <p className="d-fc9fe25a62" data-node-id="1170:655">
                04 / SPEAKER
              </p>
              <p className="d-bf2bdce3ac" data-node-id="1170:656">
                {speakers.mitul.name}
              </p>
              <div className="d-f308fc5ee1" data-node-id="1170:657">
                <p className="updated-speaker-role">{speakers.mitul.role}</p>
                <p className="updated-speaker-background">{speakers.mitul.company}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-b82fa5d8d7" data-node-id="1170:611">
          <p className="d-9f251d856d">FOUR PERSPECTIVES.</p>
          <p className="d-8c8cd1946c">MORE POSSIBILITIES.</p>
        </div>
      </div>
    </div>
  );
}
