import { WovenRibbon } from "../WovenRibbon";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 1168:498.
const imgSectionDividerApprovedPixelDither = "/assets/1168-498-ba173.svg";
const imgApprovedWovenLinks = "/assets/1168-498-e1335.svg";
const imgArrow = "/assets/1168-498-5d2c8.svg";
const imgArrow1 = "/assets/1168-498-378aa.svg";

export default function FooterKeepTheConversationGoingMobile() {
  return (
    <div className="d-0b16a12d9f" data-node-id="1168:498" data-name="Footer / Keep the conversation going — Mobile">
      <div className="d-d2efcd5d06" data-node-id="1169:691" data-name="Divider / Join → Footer — Mobile">
        <div className="d-457cc0365c pixel-border pixel-border-orange-black" data-node-id="1169:692" data-name="Section divider / Approved pixel dither">
          <img alt="" className="d-511e8f31d4" src={imgSectionDividerApprovedPixelDither} />
        </div>
      </div>
      <div className="d-07dd217c4c" data-node-id="1169:694" data-name="Footer / Content — Mobile">
        <div className="d-3c2f073db3" data-node-id="1287:644" data-name="Footer / Stay connected">
          <p className="d-5f89f0b035" data-node-id="1287:645">
            THE DAY IS JUST THE START.
          </p>
          <div className="d-9653dcf1ac" data-node-id="1301:709" data-name="Footer / Copy and community">
            <div className="d-c67767f3cf" data-node-id="1287:646">
              <p className="d-63e7c83bf6">Keep the</p>
              <p className="d-63e7c83bf6">conversation</p>
              <p className="d-84bf8673ce">going.</p>
            </div>
            <div className="d-6ecc56c4c7" data-node-id="1301:710" data-name="Footer / Community connection">
              <div className="d-6d70debfa3" data-node-id="1301:711" data-name="Connection / Left rail" />
              <div className="d-5bdce84dcb" data-node-id="1301:712" data-name="Connection / Right rail" />
              <div className="d-1cf81e2c0a" data-node-id="1301:713" data-name="Connection / Left pixel" />
              <div className="d-14b239ee64" data-node-id="1301:714" data-name="Connection / Right pixel" />
              <div className="d-c97a4ecbc9" data-node-id="1301:715" data-name="Approved / Woven links">
                <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
              </div>
            </div>
          </div>
          <div className="d-f27740a856" data-node-id="1287:647">
            <p className="d-897a3c8a4f">A little more curiosity.</p>
            <p className="d-6a4f4f832e">A lot more community.</p>
          </div>
        </div>
        <div className="d-a238f29836" data-node-id="1287:648" data-name="Footer / Social channels">
          <div className="d-43f50fc4ff" data-node-id="1301:720" data-name="Footer / LinkedIn">
            <p className="d-a093f0910c" data-node-id="1301:721">
              01 / LINK UP
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1287:649" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
              <p className="d-ed3e8425eb" data-node-id="I1287:649;5:30">
                LinkedIn
              </p>
              <div className="d-4725149c0e" data-node-id="I1287:649;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow} />
              </div>
            </SiteLink>
            <div className="d-d0f3b39067" data-node-id="1301:722" data-name="Social / Open rule" />
          </div>
          <div className="d-43f50fc4ff" data-node-id="1301:723" data-name="Footer / Instagram">
            <p className="d-19c923c9d7" data-node-id="1301:724">
              02 / FOLLOW ALONG
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1287:653" data-name="Social / Instagram" href={siteLinks.instagram}>
              <p className="d-ed3e8425eb" data-node-id="I1287:653;5:30">
                Instagram
              </p>
              <div className="d-4725149c0e" data-node-id="I1287:653;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
            <div className="d-23976039ee" data-node-id="1301:725" data-name="Social / Open rule" />
          </div>
        </div>
      </div>
    </div>
  );
}
