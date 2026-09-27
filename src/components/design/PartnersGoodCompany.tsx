import { SiteLink } from "../SiteLink";
import { WovenRibbon } from "../WovenRibbon";
// Source: Figma 00/ Final, node 1160:5759.
const imgPartnersCollectiveImprint1440 = "/assets/1160-5759-074ac.svg";
const imgAccentWovenLinks = "/assets/1160-5759-305fd.svg";
const imgDividerPartnerOpenerDirectoryOrangeToPaper = "/assets/1160-5759-df021.svg";

export default function PartnersGoodCompany() {
  return (
    <div className="d-374451ab91" data-node-id="1160:5759" data-name="Partners / Good company">
      <p className="d-44a35e3573" data-node-id="1160:5760">
        PARTNERS / GOOD COMPANY
      </p>
      <p className="d-47acf6cd27" data-node-id="1160:5761">
        CURIOUS MINDS. SHARED POSSIBILITIES.
      </p>
      <div className="d-f942f5a22a" data-node-id="1160:5762">
        <p className="d-7ba51c60de">PARTNERS</p>
      </div>
      <div className="d-6e958ebb4a" data-node-id="1160:5764" data-name="Partners / Shared purpose">
        <div className="d-a1f92edd2b" data-node-id="1160:5765">
          <p className="d-49865f2035">A shared</p>
          <p className="d-002ccdd06f">launchpad.</p>
        </div>
        <p className="d-bdc33ebefc" data-node-id="1160:5766">
          For the people and organizations helping the next wave of builders take their first step.
        </p>
        <SiteLink className="d-c436757d44" data-node-id="1160:5767" href={"/#partner-lineup"}>{`MEET OUR PARTNERS  ↓`}</SiteLink>
      </div>
      <div className="d-08ca65d5ef" data-node-id="1160:5768" data-name="Partners / Collective imprint / 1440">
        <img alt="" className="d-511e8f31d4" src={imgPartnersCollectiveImprint1440} />
      </div>
      <p className="d-d57e342a10" data-node-id="1160:5769">
        The next wave starts with us.
      </p>
      <div className="d-15d5b1e88f" data-node-id="1160:5775" data-name="Accent / Woven links">
        <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinks} />
      </div>
      <div className="d-ddb61417b7 pixel-border pixel-border-orange-paper" data-node-id="1411:620" data-name="Divider / Partner opener → Directory — Orange to paper">
        <img alt="" className="d-511e8f31d4" src={imgDividerPartnerOpenerDirectoryOrangeToPaper} />
      </div>
    </div>
  );
}
