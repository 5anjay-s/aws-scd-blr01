import { SpinningSpark } from "../SpinningSpark";
import { WovenRibbon } from "../WovenRibbon";
import { SiteLink } from "../SiteLink";

// Source: Figma 00/ Final, node 1168:495.
const imgAccentCuriositySpark = "/assets/1168-495-4fdc0.svg";
const imgAccentWovenLinks = "/assets/1168-495-22597.svg";

export default function MobileCommunityDesktopAligned() {
  return (
    <div className="d-0b16a12d9f" data-node-id="1168:495" data-name="Mobile / community — Desktop aligned">
      <div className="d-83d60396f9" data-node-id="1169:662" data-name="Community / Your people">
        <p className="d-11ea5ff482" data-node-id="1169:663">
          03 / A SHARED STARTING POINT
        </p>
        <div className="d-1cdf9c61a0" data-node-id="1169:664">
          <p className="d-6ee5fa6884">YOU +</p>
          <p className="d-f42ae1416f">YOUR PEOPLE</p>
        </div>
        <div className="d-6830589802" data-node-id="1169:665">
          <p className="d-dd0eb8360b">Good things happen</p>
          <p className="d-d7d2882ae0">between people.</p>
        </div>
        <p className="d-284dc9d05b" data-node-id="1169:666">
          Your first project. Your biggest question. Your next collaborator. Bring all of it. A community grows one conversation at a time.
        </p>
        <div className="d-3badf42354" data-node-id="1169:667">
          <p className="d-9f251d856d">STUDENT LED.</p>
          <p className="d-8c8cd1946c">OPEN TO POSSIBILITY.</p>
        </div>
        <SiteLink href="/organisers" className="community-organizers-link" buttonTone="orange" hoverTone="violet">
          <span>Organisers</span><img src="/assets/865-7675-207b4.svg" width={22} height={22} alt="" data-name="Arrow" />
        </SiteLink>
        <div className="d-eba0bdedbb" data-node-id="1169:668" data-name="Community / Shared accents">
          <div className="d-3640469606" data-node-id="1169:669" data-name="Accent / Curiosity spark">
            <SpinningSpark alt="" className="d-511e8f31d4 curiosity-spark-spin" src={imgAccentCuriositySpark} />
          </div>
          <div className="d-fb5e31aff3" data-node-id="1169:673" data-name="Accent / Woven links">
            <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinks} />
          </div>
        </div>
      </div>
    </div>
  );
}
