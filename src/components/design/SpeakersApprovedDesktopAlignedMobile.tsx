import { SpeakerLineup } from "../SpeakerLineup";
import { SpeakerQuotation } from "../SpeakerQuotation";
// Source: Figma 00/ Final, node 1168:494.
const imgApprovedDitheredQuotationMobileOpener = "/assets/1168-494-a5a4a.svg";

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
      <SpeakerLineup mobile />
    </div>
  );
}
