import { SpeakerLineup } from "../SpeakerLineup";
import { SpeakerQuotation } from "../SpeakerQuotation";
// Source: Figma 00/ Final, node 860:5144.
const imgSpeakersApprovedDitheredQuotation = "/assets/860-5144-5a444.svg";

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
        <SpeakerLineup />
      </div>
    </div>
  );
}
