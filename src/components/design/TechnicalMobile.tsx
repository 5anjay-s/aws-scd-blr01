import { HackathonSection } from "../EventContent";
import { mainDay } from "../../content/event";
import { SiteBrand } from "../SiteBrand";
import { TrackArtwork } from "../TrackArtwork";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { SignalStitch } from "../SignalStitch";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 874:9123.
const imgArtworkCompileBracketsMobile = "/assets/874-9123-4fa4b.svg";
const imgArrow = "/assets/865-7675-207b4.svg";
const imgApprovedDitherPaperToNavyCropped = "/assets/874-9123-2e906.svg";
const imgAccentPixelStitch = "/assets/874-9123-7bab5.svg";
const imgApprovedWovenLinks = "/assets/1168-498-e1335.svg";
const imgArrow1 = "/assets/1168-498-5d2c8.svg";
const imgArrow2 = "/assets/1168-498-378aa.svg";

export default function TechnicalMobile() {
  return (
    <div className="d-3c9f0988a3" data-node-id="874:9123" data-name="Technical — Mobile">
      <SiteHeader className="d-db11631e53 site-header" data-node-id="874:9124" data-name="Mobile v2 / Header">
        <SiteBrand data-node-id="874:9125" />
        <SiteLink className="d-5760172eb5" data-node-id="874:9126" href="/tracks">
          <p className="d-95907800fd">Explore</p>
        </SiteLink>
      </SiteHeader>
      <div className="d-81a25fc133" data-node-id="874:9127" data-name="Technical / Hero — Mobile">
        <SiteLink className="d-0de2ed5394" data-node-id="874:9128" href={"/tracks"}>
          ← ALL EXPERIENCES
        </SiteLink>
        <div className="d-447a4f144a" data-node-id="874:9129">
          <p className="d-9f251d856d">01 / TECHNICAL</p>
          <p className="d-8c8cd1946c">5 NOVEMBER 2026</p>
        </div>
        <div className="d-1b5595777a" data-node-id="874:9130" role="heading" aria-level={1}>
          <p className="d-00bdb0ea46">IDEAS INTO</p>
          <p className="d-c7b43af17c">ACTION.</p>
        </div>
        <div className="d-f2cd256124" data-node-id="874:9131" data-name="Artwork / Compile brackets — Mobile">
          <TrackArtwork kind="compile" className="d-511e8f31d4" src={imgArtworkCompileBracketsMobile} />
        </div>
        <p className="d-2c3b9cd2b0" data-node-id="874:9132">
          Explore cloud, AI, security, and software development, including AWS technical sessions and hands-on workshops on the main day.
        </p>
        <SiteLink buttonTone="orange" className="d-205df6f90e" data-node-id="874:9133" data-name="Action / Registration info" href={"/registration"}>
          <p className="d-cf01328ee8" data-node-id="I874:9133;5:30">
            Registration info
          </p>
          <div className="d-4725149c0e" data-node-id="I874:9133;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
        <div className="d-0a78fc8e18" data-node-id="874:9134">
          <p className="d-ebed470a6c">SESSIONS + SPEAKERS + TIMINGS</p>
          <p className="d-d43f566f28">TO BE ANNOUNCED</p>
        </div>
      </div>
      <div className="d-2d0b76cdfd" data-node-id="874:9135" data-name="Technical / Programme — Mobile">
        <div className="d-54bd673727" data-node-id="874:9136" data-name="Programme / Introduction">
          <div className="d-d9d082fa8a" data-node-id="874:9137">
            <p className="d-8305ee571e">THREE WAYS</p>
            <p className="d-e358ca9dbc">TO GO DEEPER.</p>
          </div>
          <p className="d-486b70b514" data-node-id="874:9138">
            {mainDay.technical} Session times and details to be announced.
          </p>
        </div>
        <div className="d-8b1378b1cb" data-node-id="874:9139" data-name="SCD / Technical / Theme panel / Mobile">
          <p className="d-b795ba67a4" data-node-id="I874:9139;667:2567">
            01 / CLOUD
          </p>
          <p className="d-c7ecc424bd" data-node-id="I874:9139;667:2568">
            AWS Sessions & Workshops
          </p>
          <div className="d-b48d4df271" data-node-id="I874:9139;667:2569" data-name="Theme / Rule" />
          <div className="d-b8ff23ce63" data-node-id="I874:9139;667:2570">
            <p className="d-2a8bd1889a">Technical sessions</p>
            <p className="d-2158fa6ddb">& hands-on workshops</p>
          </div>
          <p className="d-5a1a09ea43" data-node-id="I874:9139;667:2571">
            {mainDay.aws}
          </p>
          <div className="d-b82fa5d8d7" data-node-id="I874:9139;667:2572">
            <p className="d-ebed470a6c">DATES</p>
            <p className="d-d43f566f28">5 NOVEMBER 2026 · MAIN DAY</p>
          </div>
        </div>
        <div className="d-5ab761d0eb" data-node-id="874:9140" data-name="Theme / AI">
          <p className="d-b795ba67a4" data-node-id="I874:9140;667:2567">
            02 / AI
          </p>
          <p className="d-c7ecc424bd" data-node-id="I874:9140;667:2568">
            ChatGPT Workshop
          </p>
          <div className="d-b48d4df271" data-node-id="I874:9140;667:2569" data-name="Theme / Rule" />
          <div className="d-b8ff23ce63" data-node-id="I874:9140;667:2570">
            <p className="d-2a8bd1889a">OpenAI Student</p>
            <p className="d-2158fa6ddb">Collective</p>
          </div>
          <p className="d-5a1a09ea43" data-node-id="I874:9140;667:2571">
            {mainDay.openai}
          </p>
          <div className="d-b82fa5d8d7" data-node-id="I874:9140;667:2572">
            <p className="d-ebed470a6c">DATE</p>
            <p className="d-d43f566f28">5 NOVEMBER 2026 · MAIN-DAY</p>
          </div>
        </div>
        <div className="d-381cf3dbba" data-node-id="874:9141" data-name="Theme / BUILD">
          <p className="d-a4a5347c5b" data-node-id="I874:9141;667:2567">
            03 / BUILD
          </p>
          <p className="d-7ecd3c2bde" data-node-id="I874:9141;667:2568">
            MongoDB Workshop
          </p>
          <div className="d-27985fbfcb" data-node-id="I874:9141;667:2569" data-name="Theme / Rule" />
          <div className="d-621fb4f3ee" data-node-id="I874:9141;667:2570">
            <p className="d-2a8bd1889a">Workshops &</p>
            <p className="d-2158fa6ddb">Sessions</p>
          </div>
          <p className="d-c6f15078ce" data-node-id="I874:9141;667:2571">
            {mainDay.mongodb}
          </p>
          <div className="d-3badf42354" data-node-id="I874:9141;667:2572">
            <p className="d-ebed470a6c">DATE</p>
            <p className="d-d43f566f28">5 NOVEMBER 2026 · MAIN-DAY</p>
          </div>
        </div>
      </div>
      <HackathonSection compact />
      <div className="d-0f22abb004" data-node-id="874:9142" data-name="Technical / Preparation — Mobile">
        <p className="d-b795ba67a4" data-node-id="874:9143">
          BEFORE YOU JOIN
        </p>
        <div className="d-c73b906256" data-node-id="874:9144">
          <p className="d-8305ee571e">BRING YOUR</p>
          <p className="d-e358ca9dbc">NEXT QUESTION.</p>
        </div>
        <p className="d-5a1a09ea43" data-node-id="874:9145">
          Join AWS sessions, AI workshops and developer conversations on the main day. Explore IMPULSE, our pre-SCD hackathon, below.
        </p>
        <div className="d-43f50fc4ff" data-node-id="874:9146" data-name="Preparation / EXPERIENCE LEVEL">
          <div className="d-b48d4df271" data-node-id="874:9147" data-name="Rule" />
          <p className="d-b795ba67a4" data-node-id="874:9148">
            MAIN-DAY EVENT
          </p>
          <p className="d-6d0816660e" data-node-id="874:9149">
            AWS SCD BLR · 5 NOV 2026
          </p>
        </div>
        <div className="d-43f50fc4ff" data-node-id="874:9150" data-name="Preparation / EQUIPMENT + SETUP">
          <div className="d-b48d4df271" data-node-id="874:9151" data-name="Rule" />
          <p className="d-b795ba67a4" data-node-id="874:9152">
            MAIN-DAY VENUE
          </p>
          <p className="d-6d0816660e" data-node-id="874:9153">
            REVA UNIVERSITY CAMPUS, BENGALURU
          </p>
        </div>
        <div className="d-43f50fc4ff" data-node-id="874:9154" data-name="Preparation / SESSION ACCESS">
          <div className="d-b48d4df271" data-node-id="874:9155" data-name="Rule" />
          <p className="d-b795ba67a4" data-node-id="874:9156">
            PREREQUISITES
          </p>
          <p className="d-6d0816660e" data-node-id="874:9157">
            BRING A LAPTOP & CHARGER FOR HANDS-ON SESSIONS
          </p>
        </div>
        <SiteLink buttonTone="orange" className="d-205df6f90e" data-node-id="874:9158" data-name="Action / Get Main-Day Ticket" href={siteLinks.konfhub}>
          <p className="d-cf01328ee8" data-node-id="I874:9158;5:30">
            Get Main-Day Ticket
          </p>
          <div className="d-4725149c0e" data-node-id="I874:9158;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
      <div className="d-74ac1ded28" data-node-id="1413:626" data-name="Section divider / Preparation to continue">
        <div className="d-a63d5a2087 pixel-border pixel-border-paper-navy" data-node-id="1413:624" data-name="Approved dither / Paper to navy — cropped">
          <img alt="" className="d-511e8f31d4" src={imgApprovedDitherPaperToNavyCropped} />
        </div>
      </div>
      <div className="d-83d60396f9" data-node-id="874:9159" data-name="Technical / Continue — Mobile">
        <div className="d-739b134aa7" data-node-id="874:9160" data-name="Accent / Pixel stitch">
          <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentPixelStitch} />
        </div>
        <div className="d-2b15278d3b" data-node-id="874:9165">
          <p className="d-27cc6eebfe">A DIFFERENT</p>
          <p className="d-b4067b5592">KIND OF SPARK.</p>
        </div>
        <SiteLink hoverTone="lime" buttonTone="violet" className="d-0cf2965cb0" data-node-id="874:9166" data-name="Action / Explore non-technical" href={"/non-technical"}>
          <p className="d-ad21a68151" data-node-id="I874:9166;5:30">
            Explore non-technical
          </p>
          <div className="d-4725149c0e" data-node-id="I874:9166;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
        <SiteLink hoverTone="cyan" buttonTone="white" className="d-fe15f8978d" data-node-id="874:9167" data-name="Action / View event timeline" href={"/#timeline"}>
          <p className="d-ad21a68151" data-node-id="I874:9167;5:30">
            View event timeline
          </p>
          <div className="d-4725149c0e" data-node-id="I874:9167;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
      <div className="d-46be79a14c" data-node-id="1476:670" data-name="Footer / Common — Mobile">
        <div className="d-3c2f073db3" data-node-id="1476:671" data-name="Footer / Stay connected">
          <p className="d-5f89f0b035" data-node-id="1476:672">
            THE DAY IS JUST THE START.
          </p>
          <div className="d-9653dcf1ac" data-node-id="1476:673" data-name="Footer / Copy and community">
            <div className="d-c67767f3cf" data-node-id="1476:674">
              <p className="d-63e7c83bf6">Keep the</p>
              <p className="d-63e7c83bf6">conversation</p>
              <p className="d-84bf8673ce">going.</p>
            </div>
            <div className="d-6ecc56c4c7" data-node-id="1476:675" data-name="Footer / Community connection">
              <div className="d-6d70debfa3" data-node-id="1476:676" data-name="Connection / Left rail" />
              <div className="d-5bdce84dcb" data-node-id="1476:677" data-name="Connection / Right rail" />
              <div className="d-1cf81e2c0a" data-node-id="1476:678" data-name="Connection / Left pixel" />
              <div className="d-14b239ee64" data-node-id="1476:679" data-name="Connection / Right pixel" />
              <div className="d-c97a4ecbc9" data-node-id="1476:680" data-name="Approved / Woven links">
                <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
              </div>
            </div>
          </div>
          <div className="d-f27740a856" data-node-id="1476:681">
            <p className="d-897a3c8a4f">A little more curiosity.</p>
            <p className="d-6a4f4f832e">A lot more community.</p>
          </div>
        </div>
        <div className="d-a238f29836" data-node-id="1476:682" data-name="Footer / Social channels">
          <div className="d-43f50fc4ff" data-node-id="1476:683" data-name="Footer / LinkedIn">
            <p className="d-a093f0910c" data-node-id="1476:684">
              01 / LINK UP
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:685" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
              <p className="d-ed3e8425eb" data-node-id="I1476:685;5:30">
                LinkedIn
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:685;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
            <div className="d-d0f3b39067" data-node-id="1476:686" data-name="Social / Open rule" />
          </div>
          <div className="d-43f50fc4ff" data-node-id="1476:687" data-name="Footer / Instagram">
            <p className="d-19c923c9d7" data-node-id="1476:688">
              02 / FOLLOW ALONG
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:689" data-name="Social / Instagram" href={siteLinks.instagram}>
              <p className="d-ed3e8425eb" data-node-id="I1476:689;5:30">
                Instagram
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:689;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow2} />
              </div>
            </SiteLink>
            <div className="d-23976039ee" data-node-id="1476:690" data-name="Social / Open rule" />
          </div>
        </div>
        <div className="d-116660ca67" data-node-id="1476:691" data-name="Footer / Quiet divider" />
        <div className="d-3c2f073db3" data-node-id="1476:692" data-name="Footer / Utility">
          <div className="d-f6b8f3f4a8" data-node-id="1476:693" data-name="Footer / Brand and return">
            <SiteBrand data-node-id="1476:694" />
            <SiteLink className="d-2458e22cbe" data-node-id="1476:698" data-name="Footer / Back to top" href={"#top"}>
              <p className="d-fe8d7a0908" data-node-id="1476:699">
                Back to top ↑
              </p>
            </SiteLink>
          </div>
          <p className="d-1be0a328f7" data-node-id="1476:700">
            STUDENT LED. COMMUNITY POWERED.
          </p>
        </div>
      </div>
    </div>
  );
}
