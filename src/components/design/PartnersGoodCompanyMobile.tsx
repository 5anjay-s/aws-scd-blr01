import { SiteLink } from "../SiteLink";
import { WovenRibbon } from "../WovenRibbon";
// Source: Figma 00/ Final, node 1168:496.
const imgAccentWovenLinksMobile = "/assets/1168-496-4ca63.svg";
const imgPartnersCollectiveImprintMobile = "/assets/1168-496-7988e.svg";
const imgDividerApprovedSquareRhythmCroppedMobile = "/assets/1168-496-9396e.svg";

export default function PartnersGoodCompanyMobile() {
  return (
    <div className="d-374451ab91" data-node-id="1168:496" data-name="Partners / Good company — Mobile">
      <div className="d-756abefbe2" data-node-id="1170:620" data-name="Partners / Mobile introduction">
        <div className="d-80befd8149" data-node-id="1170:621" data-name="Partners / Opening labels">
          <p className="d-4b43c08078" data-node-id="1170:622">
            PARTNERS / GOOD COMPANY
          </p>
          <p className="d-7efb926afd" data-node-id="1170:623">
            CURIOUS MINDS. SHARED POSSIBILITIES.
          </p>
        </div>
        <p className="d-88afbae432" data-node-id="1170:624">
          PARTNERS
        </p>
        <div className="d-97c84ffa4e" data-node-id="1170:625" data-name="Partners / Shared purpose and woven links">
          <div className="d-ad48f4bbb6" data-node-id="1170:626">
            <p className="d-623df6af32">A shared</p>
            <p className="d-318d94ea44">launchpad.</p>
          </div>
          <div className="d-2c5643f324" data-node-id="1170:627" data-name="Accent / Woven links — Mobile">
            <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinksMobile} />
          </div>
        </div>
        <p className="d-002b86814d" data-node-id="1170:632">
          For the people and organizations helping the next wave of builders take their first step.
        </p>
        <SiteLink className="d-42237462c7" data-node-id="1170:633" href={"/#partner-lineup"}>
          <p className="d-81dfdc5b19">{`MEET OUR PARTNERS  ↓`}</p>
        </SiteLink>
      </div>
      <div className="d-4d3ba1bae3" data-node-id="1170:634" data-name="Partners / Collective imprint — Mobile">
        <img alt="" className="d-511e8f31d4" src={imgPartnersCollectiveImprintMobile} />
      </div>
      <div className="d-47166bdf59" data-node-id="1170:638" data-name="Partners / Closing statement">
        <p className="d-3bffc7d302" data-node-id="1170:639">
          The next wave starts with us.
        </p>
      </div>
      <div className="d-11f997cef7" data-node-id="1411:622" data-name="Divider / Partner opener → Directory — Orange to paper">
        <div className="d-0105d30b12 pixel-border pixel-border-orange-paper" data-node-id="1411:623" data-name="Divider / Approved square rhythm — cropped mobile">
          <img alt="" className="d-511e8f31d4" src={imgDividerApprovedSquareRhythmCroppedMobile} />
        </div>
      </div>
    </div>
  );
}
