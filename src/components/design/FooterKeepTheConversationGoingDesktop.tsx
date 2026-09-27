import { SiteBrand } from "../SiteBrand";
import { WovenRibbon } from "../WovenRibbon";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 860:5359.
const imgApprovedWovenLinks = "/assets/1265-3035-453bd.svg";
const imgArrow = "/assets/1168-498-5d2c8.svg";
const imgArrow1 = "/assets/1168-498-378aa.svg";
const imgFooterNavyPixelTransition = "/assets/860-5359-ef2a5.svg";

export default function FooterKeepTheConversationGoingDesktop() {
  return (
    <div className="d-21f089ff85" data-node-id="860:5359" data-name="Footer / Keep the conversation going — Desktop">
      <div className="d-78d3b03090" data-node-id="1287:626" data-name="Footer / Stay connected">
        <div className="d-ec1083a29e" data-node-id="1287:627" data-name="Footer / Invitation">
          <p className="d-316c95d37a" data-node-id="1287:628">
            THE DAY IS JUST THE START.
          </p>
          <div className="d-079cb0f4b8" data-node-id="1287:629">
            <p className="d-6ee5fa6884">Keep the</p>
            <p className="d-6ee5fa6884">conversation</p>
            <p className="d-f42ae1416f">going.</p>
          </div>
          <div className="d-bf5113e67d" data-node-id="1287:630">
            <p className="d-143d1e5b1d">A little more curiosity.</p>
            <p className="d-e894d19a93">A lot more community.</p>
          </div>
        </div>
        <div className="d-4556061f38" data-node-id="1301:686" data-name="Footer / Community connection">
          <div className="d-229a3a46e3" data-node-id="1301:687" data-name="Connection / Left rail" />
          <div className="d-c301621b07" data-node-id="1301:688" data-name="Connection / Right rail" />
          <div className="d-9e7418bb75" data-node-id="1301:689" data-name="Connection / Left pixel" />
          <div className="d-3a8fd5fe1d" data-node-id="1301:690" data-name="Connection / Right pixel" />
          <div className="d-b33888044b" data-node-id="1301:691" data-name="Approved / Woven links">
            <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
          </div>
        </div>
        <div className="d-bc1cc41ab7" data-node-id="1287:631" data-name="Footer / Social channels">
          <p className="d-393807428f" data-node-id="1287:632">
            FIND YOUR PEOPLE
          </p>
          <div className="d-9c698a8db5" data-node-id="1287:633" data-name="Footer / Social links">
            <div className="d-1969baa6ce" data-node-id="1301:696" data-name="Footer / LinkedIn">
              <p className="d-24df9d72c3" data-node-id="1301:697">
                01 / LINK UP
              </p>
              <SiteLink className="d-2d1168383e" data-node-id="1287:634" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
                <p className="d-ed3e8425eb" data-node-id="I1287:634;5:30">
                  LinkedIn
                </p>
                <div className="d-4725149c0e" data-node-id="I1287:634;15:32" data-name="Arrow">
                  <img alt="" className="d-511e8f31d4" src={imgArrow} />
                </div>
              </SiteLink>
              <div className="d-20b3bae21a" data-node-id="1301:698" data-name="Social / Open rule" />
            </div>
            <div className="d-1969baa6ce" data-node-id="1301:699" data-name="Footer / Instagram">
              <p className="d-14d435a7de" data-node-id="1301:700">
                02 / FOLLOW ALONG
              </p>
              <SiteLink className="d-2d1168383e" data-node-id="1287:638" data-name="Social / Instagram" href={siteLinks.instagram}>
                <p className="d-ed3e8425eb" data-node-id="I1287:638;5:30">
                  Instagram
                </p>
                <div className="d-4725149c0e" data-node-id="I1287:638;15:32" data-name="Arrow">
                  <img alt="" className="d-511e8f31d4" src={imgArrow1} />
                </div>
              </SiteLink>
              <div className="d-d800ec1288" data-node-id="1301:701" data-name="Social / Open rule" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-e4467a8187 pixel-border pixel-border-orange-navy" data-node-id="913:540" data-name="Footer / Navy pixel transition">
        <img alt="" className="d-511e8f31d4" src={imgFooterNavyPixelTransition} />
      </div>
      <div className="d-e2d3cf23e7" data-node-id="1287:642" data-name="Footer / Quiet divider" />
      <div className="d-cd7fcf8b0a" data-node-id="1287:625" data-name="Footer / Utility">
        <SiteBrand data-node-id="1301:702" />
        <p className="d-393807428f" data-node-id="860:5361">
          STUDENT LED. COMMUNITY POWERED.
        </p>
        <SiteLink className="d-e6baf026ef" data-node-id="860:5362" href={"#top"}>
          <p className="d-95907800fd">Back to top</p>
        </SiteLink>
      </div>
    </div>
  );
}
