import { SpeakerQuotation } from "../SpeakerQuotation";
import { SiteLink } from "../SiteLink";
import { speakers } from "../../content/speakers";
import "../../styles/speakers-updated.css";
// Source: Figma 00/ Final, node 860:5144.
const imgSpeakersApprovedDitheredQuotation = "/assets/860-5144-5a444.svg";
const imgSpeakersApprovedDitheredQuotation1 = "/assets/860-5144-cc774.svg";
const imgPortraitPixelBust2 = "/assets/860-5144-a4a5a.svg";

export default function SpeakersV2IdeasWithAVoiceApprovedDesktop() {
  return (
    <div className="d-7fe91255b2" data-node-id="860:5144" data-name="Speakers v2 / Ideas with a voice — Approved / Desktop">
      <div className="d-b201ff1cb8" data-node-id="1127:2279" data-name="I / Speakers — Open mic">
        <div className="d-b238126072" data-node-id="1127:2300" data-name="Speakers / Voices in print — Editorial opener">
          <div className="d-552c1c6224" data-node-id="1127:2301" data-name="Section index">
            <p className="d-c6a4bf57de" data-node-id="1127:2302">
              03 / THE SPEAKERS
            </p>
            <p className="d-1e0f2a177d" data-node-id="1127:2303">
              DIFFERENT PERSPECTIVES. SHARED POSSIBILITIES.
            </p>
          </div>
          <div className="d-7e534468f3" data-node-id="1127:2304" data-name="Masthead / Type and quotation">
            <p className="d-de719054a7 arcade-heading" data-node-id="1127:2305">
              SPEAKERS
            </p>
            <div className="d-fd50bbe54d" data-node-id="1127:2306" data-name="Speakers / Approved dithered quotation">
              <SpeakerQuotation className="d-511e8f31d4" src={imgSpeakersApprovedDitheredQuotation} />
            </div>
          </div>
          <div className="d-f9e6b7738b" data-node-id="1127:2307" data-name="Introduction / Statement and action">
            <div className="d-b75cc71b42" data-node-id="1127:2308" data-name="Introduction / Main statement">
              <div className="d-4f2c4792fb" data-node-id="1127:2309">
                <p className="d-27c1e8a72b">Different voices.</p>
                <p className="d-015f0ff7c6">Shared possibilities.</p>
              </div>
              <p className="d-353266b000" data-node-id="1127:2310">
                FOR THE NEXT WAVE OF BUILDERS.
              </p>
            </div>
            <div className="d-9d8498279f" data-node-id="1127:2311" data-name="Introduction / Context and registration">
              <div className="d-9f74705ff9" data-node-id="1127:2312">
                <p className="d-2a8bd1889a">New perspectives. New ways to build.</p>
                <p className="d-2158fa6ddb">Meet the people behind the conversation.</p>
              </div>
            </div>
          </div>
          <div className="d-552c1c6224" data-node-id="1127:2314" data-name="Section index">
            <p className="d-c6a4bf57de" data-node-id="1127:2315">
              MEET THE SPEAKERS
            </p>
            <p className="d-1e0f2a177d" data-node-id="1127:2316">
              AWS STUDENT COMMUNITY DAY
            </p>
          </div>
        </div>
        <div className="d-63fdf152aa" data-node-id="1127:2317" data-name="Speakers / The lineup — Asymmetric directory">
          <div className="d-ee91bcbc2c" data-node-id="1127:2318" data-name="Directory / Heading and announcement">
            <p className="d-2e54b9d863" data-node-id="1127:2319">
              THE LINEUP.
            </p>
            <div className="d-e1c05ea2d8" data-node-id="1127:2320" data-name="Directory / Current announcement status">
              <p className="d-56815c6f01" data-node-id="1127:2321">
                NEW VOICES ARE JOINING THE CONVERSATION.
              </p>
              <div className="d-10aaae0f73" data-node-id="1127:2322">
                <p className="d-2a8bd1889a">More speakers and session details</p>
                <p className="d-2158fa6ddb">will be announced soon.</p>
              </div>
            </div>
          </div>
          <div className="d-66c2241b81" data-node-id="1127:2323" data-name="Rule" />
          <div className="d-4582b3741d" data-node-id="1127:2324" data-name="Directory / Portraits and editorial entries">
            <div className="d-52fa24bcbd updated-speaker-portrait updated-speaker-portrait--ayush" data-node-id="1127:2325" data-name="Speaker 01 / Ayush Hooda portrait">
              <div className="d-5aa5863203" data-node-id="I1127:2325;1060:528" data-name="Portrait / Pixel bust">
                <img alt={speakers.ayush.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.ayush.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-438b1cea4a updated-speaker-caption updated-speaker-caption--ayush" data-node-id="1127:2326" data-name="Speaker 01 / Profile">
              <p className="d-477d95194b" data-node-id="1127:2327">
                01 / SPEAKER
              </p>
              <p className="d-2d39824b22" data-node-id="1127:2328">
                {speakers.ayush.name}
              </p>
              <p className="d-f42682f4f1" data-node-id="1127:2329">
                {speakers.ayush.role}
              </p>
              <p className="updated-speaker-background">{speakers.ayush.background}</p>
              <div className="updated-speaker-affiliation updated-speaker-affiliation--nvidia"><img src="/brands/nvidia.svg" alt="NVIDIA" width="128" height="26" loading="lazy" /></div>
            </div>
            <div className="d-cb8ccf733c updated-speaker-caption updated-speaker-caption--devansh" data-node-id="1127:2330" data-name="Speaker 02 / Profile">
              <p className="d-423ce3d413" data-node-id="1127:2331">
                02 / SPEAKER
              </p>
              <div className="d-c1f367816d updated-speaker-name" data-node-id="1127:2332">
                <SiteLink href={speakers.devansh.linkedin} className="updated-speaker-link" aria-label={`${speakers.devansh.name} on LinkedIn`}>{speakers.devansh.name}</SiteLink>
              </div>
              <div className="d-d574c0083f" data-node-id="1127:2333" data-name="Rule" />
              <div className="d-2533afbb9b updated-speaker-metadata" data-node-id="1127:2334">
                <p className="updated-speaker-role">{speakers.devansh.role}</p>
                <p className="updated-speaker-background">{speakers.devansh.background}</p>
                <p className="updated-speaker-credential">{speakers.devansh.credential}</p>
                <div className="updated-speaker-affiliation updated-speaker-affiliation--aws"><img src="/assets/sponsors/aws.svg" alt="AWS" width="68" height="40" loading="lazy" /></div>
              </div>
            </div>
            <div className="d-f2cc43946c updated-speaker-portrait updated-speaker-portrait--devansh" data-node-id="1127:2335" data-name="Speaker 02 / Devansh Agrawal portrait">
              <div className="d-22bea6fb2f" data-node-id="I1127:2335;1060:533" data-name="Portrait / Pixel bust">
                <img alt={speakers.devansh.name} className="d-511e8f31d4 updated-speaker-photo" src={speakers.devansh.photo} loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="d-cf1c946646" data-node-id="1127:2336" data-name="Speakers / Approved dithered quotation">
              <SpeakerQuotation className="d-511e8f31d4" src={imgSpeakersApprovedDitheredQuotation1} />
            </div>
            <div className="d-d9ea639326" data-node-id="1127:2337" data-name="Speakers / Anonymous portrait 03 / Artwork only">
              <div className="d-22bea6fb2f" data-node-id="I1127:2337;1060:538" data-name="Portrait / Pixel bust">
                <img alt="" className="d-511e8f31d4" src={imgPortraitPixelBust2} />
              </div>
            </div>
            <div className="d-3f5f6c56b4" data-node-id="1127:2338" data-name="Speaker 03 / Announcement">
              <p className="d-423ce3d413" data-node-id="1127:2339">
                03 / SPEAKER
              </p>
              <div className="d-c1f367816d" data-node-id="1127:2340">
                <p className="d-6ee5fa6884">TO BE</p>
                <p className="d-f42ae1416f">ANNOUNCED</p>
              </div>
              <div className="d-d574c0083f" data-node-id="1127:2341" data-name="Rule" />
              <div className="d-2533afbb9b" data-node-id="1127:2342">
                <p className="d-897a3c8a4f">Name, role and session</p>
                <p className="d-6a4f4f832e">details to be announced.</p>
              </div>
            </div>
            <div className="d-723111d222" data-node-id="1127:2343" data-name="Directory / More announcements">
              <div className="d-1d153cc628" data-node-id="1127:2344">
                <p className="d-73a26a6b50">MORE PERSPECTIVES.</p>
                <p className="d-9e2417ac68">MORE POSSIBILITIES.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
