import { speakers } from "../../content/speakers";
import "../../styles/speakers-updated.css";
// Reflected continuation of the approved mobile speakers directory (Figma
// 1168:494, frames 1170:574–1170:611): slot 04 (Vraj Chaubal) and slot 05
// (Mitul Sarvaiya, violet card) carry the confirmed profiles; slot 06 stays
// reserved in the reflected featured card with the anonymous pixel-bust
// artwork and the "to be announced" caption treatment. No second "THE
// LINEUP." header. The two-column grid mirrors the original card placement
// around its center (responsive.css holds the reflected grid placement), and
// the text keeps its straight reading direction.
const imgPortraitPixelBust2 = "/assets/1168-494-ad0f2.svg";

export default function SpeakersInverseMobile() {
  return (
    <div className="d-7fe91255b2 speakers-inverse" data-node-id="9001:5105" data-name="Speakers / The lineup — Inverse mobile">
      <div className="d-e6fc559f21" data-node-id="1170:569" data-name="Speakers / The lineup — Reflected mobile directory">
        <div className="d-683bc8606f mobile-speaker-grid" data-node-id="1170:574" data-name="Speaker directory / Two-column portraits, reflected">
          <div className="d-c197716cad mobile-speaker-card updated-speaker-card" data-node-id="1170:575" data-name="Speaker 06 / Portrait and announcement">
            <div className="d-8b0689aa60 mobile-speaker-portrait" data-node-id="1170:576" data-name="Speaker 06 / Approved anonymous portrait">
              <div className="d-049d28c98a" data-node-id="I1170:576;1060:538" data-name="Portrait / Pixel bust">
                <img alt="" className="d-511e8f31d4" src={imgPortraitPixelBust2} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-c589fabaed mobile-speaker-caption" data-node-id="1170:581" data-name="Speaker 06 / Metadata">
              <p className="d-fc9fe25a62" data-node-id="1170:582">
                06 / SPEAKER
              </p>
              <p className="d-bf2bdce3ac" data-node-id="1170:583">
                TO BE ANNOUNCED
              </p>
              <div className="d-f308fc5ee1" data-node-id="1170:584">
                <p className="d-897a3c8a4f">Name, role and session</p>
                <p className="d-6a4f4f832e">details to be announced.</p>
              </div>
            </div>
          </div>
          <div className="d-c197716cad mobile-speaker-card updated-speaker-card" data-node-id="1170:586" data-name="Speaker 04 / Portrait and profile">
            <div className="d-adcca22bcc mobile-speaker-portrait updated-speaker-portrait" data-node-id="1170:587" data-name="Speaker 04 / Vraj Chaubal portrait">
              <div className="d-049d28c98a" data-node-id="I1170:587;1060:533" data-name="Portrait / Pixel bust">
                <img alt={speakers.vraj.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.vraj.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-43f50fc4ff mobile-speaker-caption updated-speaker-caption updated-speaker-caption--devansh" data-node-id="1170:592" data-name="Speaker 04 / Metadata">
              <p className="d-68247c54be" data-node-id="1170:593">
                04 / SPEAKER
              </p>
              <p className="d-30c2530cb1 updated-speaker-name" data-node-id="1170:594">
                {speakers.vraj.name}
              </p>
              <div className="d-f6b8f3f4a8 updated-speaker-metadata" data-node-id="1170:595" data-name="Speaker 04 / Details">
                <div className="d-07493e07be updated-speaker-facts" data-node-id="1170:596">
                  <p className="updated-speaker-role">{speakers.vraj.role}</p>
                  <p className="updated-speaker-background">{speakers.vraj.background}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-c197716cad mobile-speaker-card" data-node-id="1170:601" data-name="Speaker 05 / Portrait and profile">
            <div className="d-ea4a445521 mobile-speaker-portrait updated-speaker-portrait" data-node-id="1170:602" data-name="Speaker 05 / Mitul Sarvaiya portrait">
              <div className="d-049d28c98a" data-node-id="I1170:602;1060:538" data-name="Portrait / Pixel bust">
                <img alt={speakers.mitul.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.mitul.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-c589fabaed mobile-speaker-caption updated-speaker-caption" data-node-id="1170:607" data-name="Speaker 05 / Metadata">
              <p className="d-fc9fe25a62" data-node-id="1170:608">
                05 / SPEAKER
              </p>
              <p className="d-bf2bdce3ac" data-node-id="1170:609">
                {speakers.mitul.name}
              </p>
              <div className="d-f308fc5ee1" data-node-id="1170:610">
                <p className="updated-speaker-role">{speakers.mitul.role}</p>
                <p className="updated-speaker-background">{speakers.mitul.company}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-b82fa5d8d7" data-node-id="1170:611">
          <p className="d-9f251d856d">MORE PERSPECTIVES.</p>
          <p className="d-8c8cd1946c">MORE POSSIBILITIES.</p>
        </div>
      </div>
    </div>
  );
}
