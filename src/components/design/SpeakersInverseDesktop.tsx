import { SpeakerQuotation } from "../SpeakerQuotation";
import { speakers } from "../../content/speakers";
import "../../styles/speakers-updated.css";
// Reflected continuation of the approved speakers lineup (Figma 860:5144,
// frames 1127:2324–1127:2343): slot 04 (Vraj Chaubal) and slot 05 (Mitul
// Sarvaiya, violet slot) carry the confirmed profiles; slot 06 stays reserved
// in the reflected featured slot with the anonymous pixel-bust artwork and the
// "to be announced" caption treatment. No second "THE LINEUP." header. Each
// slot keeps the original directory form; the composition mirrors the original
// around its center, and the text keeps its straight reading direction
// (left = 1344 − left − width, coordinates in responsive.css).
const imgSpeakersApprovedDitheredQuotation1 = "/assets/860-5144-cc774.svg";
const imgPortraitPixelBust2 = "/assets/860-5144-a4a5a.svg";

export default function SpeakersInverseDesktop() {
  return (
    <div className="d-7fe91255b2 speakers-inverse" data-node-id="9001:5104" data-name="Speakers / The lineup — Inverse desktop">
      <div className="d-63fdf152aa" data-node-id="1127:2317" data-name="Speakers / The lineup — Reflected directory">
        <div className="d-4582b3741d" data-node-id="1127:2324" data-name="Directory / Portraits and editorial entries">
          <div className="d-f2cc43946c updated-speaker-portrait" data-node-id="1127:2335" data-name="Speaker 04 / Vraj Chaubal portrait, reflected">
            <div className="d-22bea6fb2f" data-node-id="I1127:2335;1060:533" data-name="Portrait / Pixel bust">
              <img alt={speakers.vraj.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.vraj.photo} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="d-cb8ccf733c updated-speaker-caption" data-node-id="1127:2330" data-name="Speaker 04 / Vraj Chaubal profile, reflected">
            <p className="d-423ce3d413" data-node-id="1127:2331">
              04 / SPEAKER
            </p>
            <div className="d-c1f367816d updated-speaker-name" data-node-id="1127:2332">
              <p>{speakers.vraj.name}</p>
            </div>
            <div className="d-d574c0083f" data-node-id="1127:2333" data-name="Rule" />
            <div className="d-2533afbb9b updated-speaker-metadata" data-node-id="1127:2334">
              <p className="updated-speaker-role">{speakers.vraj.role}</p>
              <p className="updated-speaker-background">{speakers.vraj.background}</p>
            </div>
          </div>
          <div className="d-438b1cea4a" data-node-id="1127:2326" data-name="Speaker 06 / Reserved announcement, reflected">
            <p className="d-477d95194b" data-node-id="1127:2327">
              06 / SPEAKER
            </p>
            <div className="d-c1f367816d" data-node-id="1127:2328">
              <p className="d-6ee5fa6884">TO BE</p>
              <p className="d-f42ae1416f">ANNOUNCED</p>
            </div>
            <div className="d-d574c0083f" data-node-id="1127:2329" data-name="Rule" />
            <div className="d-2533afbb9b">
              <p className="d-897a3c8a4f">Name, role and session</p>
              <p className="d-6a4f4f832e">details to be announced.</p>
            </div>
          </div>
          <div className="d-52fa24bcbd" data-node-id="1127:2325" data-name="Speaker 06 / Approved anonymous portrait, reflected">
            <div className="d-5aa5863203" data-node-id="I1127:2325;1060:538" data-name="Portrait / Pixel bust">
              <img alt="" className="d-511e8f31d4" src={imgPortraitPixelBust2} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="d-cf1c946646" data-node-id="1127:2336" data-name="Speakers / Approved dithered quotation">
            <SpeakerQuotation className="d-511e8f31d4" src={imgSpeakersApprovedDitheredQuotation1} />
          </div>
          <div className="d-3f5f6c56b4 updated-speaker-caption" data-node-id="1127:2338" data-name="Speaker 05 / Mitul Sarvaiya profile, reflected">
            <p className="d-423ce3d413" data-node-id="1127:2339">
              05 / SPEAKER
            </p>
            <div className="d-c1f367816d updated-speaker-name" data-node-id="1127:2340">
              <p className="d-6ee5fa6884">Mitul</p>
              <p className="d-f42ae1416f">Sarvaiya</p>
            </div>
            <div className="d-d574c0083f" data-node-id="1127:2341" data-name="Rule" />
            <div className="d-2533afbb9b updated-speaker-metadata" data-node-id="1127:2342">
              <p className="updated-speaker-role">{speakers.mitul.role}</p>
              <p className="updated-speaker-background">{speakers.mitul.company}</p>
            </div>
          </div>
          <div className="d-d9ea639326 updated-speaker-portrait" data-node-id="1127:2337" data-name="Speaker 05 / Mitul Sarvaiya portrait, reflected">
            <div className="d-22bea6fb2f" data-node-id="I1127:2337;1060:538" data-name="Portrait / Pixel bust">
              <img alt={speakers.mitul.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.mitul.photo} loading="lazy" decoding="async" />
            </div>
          </div>
          <div className="d-723111d222" data-node-id="1127:2343" data-name="Directory / More announcements, reflected">
            <div className="d-1d153cc628" data-node-id="1127:2344">
              <p className="d-73a26a6b50">MORE PERSPECTIVES.</p>
              <p className="d-9e2417ac68">MORE POSSIBILITIES.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
