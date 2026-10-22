import { SiteBrand } from "../SiteBrand";
import { TrackArtwork } from "../TrackArtwork";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 880:9338.
const imgArrow = "/assets/865-7675-0b485.svg";
const imgSharedGlyphOpenExchange = "/assets/880-9338-d328b.svg";
const imgApprovedDitherPaperToNavyCropped = "/assets/880-9338-2e906.svg";
const imgArrow1 = "/assets/865-7675-207b4.svg";
const imgApprovedWovenLinks = "/assets/1168-498-e1335.svg";
const imgArrow2 = "/assets/1168-498-5d2c8.svg";
const imgArrow3 = "/assets/1168-498-378aa.svg";

export default function NonTechnicalMobile() {
  return (
    <div className="d-3c9f0988a3" data-node-id="880:9338" data-name="Non-technical — Mobile">
      <SiteHeader className="d-db11631e53 site-header" data-node-id="880:9339" data-name="Mobile v2 / Header">
        <SiteBrand data-node-id="880:9340" />
        <SiteLink className="d-5760172eb5" data-node-id="880:9341" href="/tracks">
          <p className="d-95907800fd">Explore</p>
        </SiteLink>
      </SiteHeader>
      <div className="d-b3450f466a" data-node-id="880:9342" data-name="Nontechnical / Beyond the code — Hero / Mobile">
        <p className="d-b795ba67a4" data-node-id="880:9343">
          02 / NON-TECHNICAL
        </p>
        <div className="d-d4c1ca5aa4" data-node-id="880:9344" role="heading" aria-level={1}>
          <p className="d-9c7634671c">BEYOND</p>
          <p className="d-b593672e9c">THE CODE.</p>
        </div>
        <p className="d-9a93de92ab" data-node-id="880:9345">
          Explore the business and people side of technology through entrepreneurship, startup, management, and strategy conversations.
        </p>
        <SiteLink hoverTone="violet" buttonTone="navy" className="d-1ed1e68c5b" data-node-id="880:9346" data-name="Action / Explore the programme" href={"/#timeline"}>
          <p className="d-7669a2de49" data-node-id="I880:9346;5:30">
            Explore the programme
          </p>
          <div className="d-4725149c0e" data-node-id="I880:9346;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
        <div className="d-4f46e0635f" data-node-id="880:9347" data-name="Open exchange artwork / Mobile">
          <div className="d-c281aec83f" data-node-id="I880:9347;670:2185" data-name="Shared glyph / Open exchange">
            <TrackArtwork kind="quotes" className="d-511e8f31d4" src={imgSharedGlyphOpenExchange} />
          </div>
        </div>
        <div className="d-b82fa5d8d7" data-node-id="880:9348">
          <p className="d-ebed470a6c">DIFFERENT MINDS.</p>
          <p className="d-d43f566f28">COMMON GROUND.</p>
        </div>
        <div className="d-bf5e7e0620" data-node-id="880:9349">
          <p className="d-9f251d856d">PROGRAMME PREVIEW</p>
          <p className="d-8c8cd1946c">Details to be announced</p>
        </div>
      </div>
      <div className="d-74ac1ded28" data-node-id="1413:633" data-name="Section divider / Hero to open exchange">
        <div className="d-a63d5a2087 pixel-border pixel-border-paper-navy" data-node-id="1413:631" data-name="Approved dither / Paper to navy — cropped">
          <img alt="" className="d-511e8f31d4" src={imgApprovedDitherPaperToNavyCropped} />
        </div>
      </div>
      <div className="d-df5e0f4257" data-node-id="880:9350" data-name="Nontechnical / Open exchange — Programme / Mobile">
        <div className="d-2dad3ffbfb" data-node-id="880:9351" data-name="Programme / Introduction">
          <p className="d-d387601105" data-node-id="880:9352">
            A PLACE FOR EVERY PERSPECTIVE
          </p>
          <div className="d-b2b8c5b5de" data-node-id="880:9353">
            <p className="d-9c7634671c">OPEN</p>
            <p className="d-b593672e9c">EXCHANGE.</p>
          </div>
          <p className="d-b4d7a1dfce" data-node-id="880:9354">
            Explore the business and people side of technology through entrepreneurship, startup, management, and strategy conversations.
          </p>
          <div className="d-a889512826" data-node-id="880:9355">
            <p className="d-ebed470a6c">SESSIONS</p>
            <p className="d-d43f566f28">TO BE ANNOUNCED</p>
          </div>
        </div>
      </div>
      <div className="d-c378ebfe77" data-node-id="880:9377" data-name="Nontechnical / Before you join / Mobile">
        <div className="d-b82fa5d8d7" data-node-id="880:9378">
          <p className="d-ebed470a6c">CURIOUS MINDS,</p>
          <p className="d-d43f566f28">SHARED POSSIBILITIES</p>
        </div>
        <div className="d-c73b906256" data-node-id="880:9379">
          <p className="d-8305ee571e">BRING YOUR WAY</p>
          <p className="d-e358ca9dbc">OF THINKING.</p>
        </div>
        <p className="d-9a93de92ab" data-node-id="880:9380">
          Speakers and sessions will be announced. Check back for the full line-up and everything you need to take part.
        </p>
        <div className="d-ffe19a0b04" data-node-id="880:9381" data-name="Participation / Before you join">
          <p className="d-b24c1a3b18" data-node-id="880:9382">
            BEFORE YOU JOIN
          </p>
          <div className="d-372174b68b" data-node-id="880:9383" data-name="Rule / Activity line-up" />
          <div className="d-9720deff99" data-node-id="880:9384" data-name="Detail / Activity line-up">
            <p className="d-588c372a58" data-node-id="880:9385">
              Sessions & speakers
            </p>
            <p className="d-391553d552" data-node-id="880:9386">
              To be announced
            </p>
          </div>
          <div className="d-372174b68b" data-node-id="880:9387" data-name="Rule / Formats & participation" />
          <div className="d-9720deff99" data-node-id="880:9388" data-name="Detail / Formats & participation">
            <p className="d-588c372a58" data-node-id="880:9389">{`Expected topics`}</p>
            <p className="d-391553d552" data-node-id="880:9390">
              Entrepreneurship · Startups · Management · Business and Product Strategy · Leadership and Community
            </p>
          </div>
          <div className="d-372174b68b" data-node-id="880:9391" data-name="Rule / Schedule & location" />
          <div className="d-9720deff99" data-node-id="880:9392" data-name="Detail / Schedule & location">
            <p className="d-588c372a58" data-node-id="880:9393">{`Schedule & location`}</p>
            <p className="d-391553d552" data-node-id="880:9394">
              5 November 2026 · REVA University, Bengaluru
            </p>
          </div>
        </div>
        <SiteLink hoverTone="violet" buttonTone="orange" className="d-205df6f90e" data-node-id="880:9395" data-name="Action / Registration info" href={"/registration"}>
          <p className="d-cf01328ee8" data-node-id="I880:9395;5:30">
            Registration info
          </p>
          <div className="d-4725149c0e" data-node-id="I880:9395;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow1} />
          </div>
        </SiteLink>
      </div>
      <div className="d-74ac1ded28" data-node-id="1413:636" data-name="Section divider / Before joining to continue">
        <div className="d-a63d5a2087 pixel-border pixel-border-paper-navy" data-node-id="1413:634" data-name="Approved dither / Paper to navy — cropped">
          <img alt="" className="d-511e8f31d4" src={imgApprovedDitherPaperToNavyCropped} />
        </div>
      </div>
      <div className="d-ee5c1c47d2" data-node-id="880:9396" data-name="Nontechnical / Continue exploring / Mobile">
        <p className="d-f56fd59305" data-node-id="880:9397">
          THE FUTURE IS A GROUP PROJECT.
        </p>
        <div className="d-ace20555dd" data-node-id="880:9398">
          <p className="d-edce8460ce">CURIOUS ABOUT</p>
          <p className="d-edce8460ce">THE TECHNICAL</p>
          <p className="d-e64f4edba4">TRACK?</p>
        </div>
        <SiteLink buttonTone="orange" className="d-80d50af47c" data-node-id="880:9399" data-name="Action / Explore technical" href={"/technical"}>
          <p className="d-ad21a68151" data-node-id="I880:9399;5:30">
            Explore technical
          </p>
          <div className="d-4725149c0e" data-node-id="I880:9399;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow1} />
          </div>
        </SiteLink>
        <SiteLink hoverTone="violet" buttonTone="white" className="d-fe15f8978d" data-node-id="880:9400" data-name="Action / Back to tracks" href={"/tracks"}>
          <p className="d-ad21a68151" data-node-id="I880:9400;5:30">
            Back to tracks
          </p>
          <div className="d-4725149c0e" data-node-id="I880:9400;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow1} />
          </div>
        </SiteLink>
      </div>
      <div className="d-46be79a14c" data-node-id="1476:753" data-name="Footer / Common — Mobile">
        <div className="d-3c2f073db3" data-node-id="1476:754" data-name="Footer / Stay connected">
          <p className="d-5f89f0b035" data-node-id="1476:755">
            THE DAY IS JUST THE START.
          </p>
          <div className="d-9653dcf1ac" data-node-id="1476:756" data-name="Footer / Copy and community">
            <div className="d-c67767f3cf" data-node-id="1476:757">
              <p className="d-63e7c83bf6">Keep the</p>
              <p className="d-63e7c83bf6">conversation</p>
              <p className="d-84bf8673ce">going.</p>
            </div>
            <div className="d-6ecc56c4c7" data-node-id="1476:758" data-name="Footer / Community connection">
              <div className="d-6d70debfa3" data-node-id="1476:759" data-name="Connection / Left rail" />
              <div className="d-5bdce84dcb" data-node-id="1476:760" data-name="Connection / Right rail" />
              <div className="d-1cf81e2c0a" data-node-id="1476:761" data-name="Connection / Left pixel" />
              <div className="d-14b239ee64" data-node-id="1476:762" data-name="Connection / Right pixel" />
              <div className="d-c97a4ecbc9" data-node-id="1476:763" data-name="Approved / Woven links">
                <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
              </div>
            </div>
          </div>
          <div className="d-f27740a856" data-node-id="1476:764">
            <p className="d-897a3c8a4f">A little more curiosity.</p>
            <p className="d-6a4f4f832e">A lot more community.</p>
          </div>
        </div>
        <div className="d-a238f29836" data-node-id="1476:765" data-name="Footer / Social channels">
          <div className="d-43f50fc4ff" data-node-id="1476:766" data-name="Footer / LinkedIn">
            <p className="d-a093f0910c" data-node-id="1476:767">
              01 / LINK UP
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:768" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
              <p className="d-ed3e8425eb" data-node-id="I1476:768;5:30">
                LinkedIn
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:768;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow2} />
              </div>
            </SiteLink>
            <div className="d-d0f3b39067" data-node-id="1476:769" data-name="Social / Open rule" />
          </div>
          <div className="d-43f50fc4ff" data-node-id="1476:770" data-name="Footer / Instagram">
            <p className="d-19c923c9d7" data-node-id="1476:771">
              02 / FOLLOW ALONG
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:772" data-name="Social / Instagram" href={siteLinks.instagram}>
              <p className="d-ed3e8425eb" data-node-id="I1476:772;5:30">
                Instagram
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:772;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow3} />
              </div>
            </SiteLink>
            <div className="d-23976039ee" data-node-id="1476:773" data-name="Social / Open rule" />
          </div>
        </div>
        <div className="d-116660ca67" data-node-id="1476:774" data-name="Footer / Quiet divider" />
        <div className="d-3c2f073db3" data-node-id="1476:775" data-name="Footer / Utility">
          <div className="d-f6b8f3f4a8" data-node-id="1476:776" data-name="Footer / Brand and return">
            <SiteBrand data-node-id="1476:777" />
            <SiteLink className="d-2458e22cbe" data-node-id="1476:781" data-name="Footer / Back to top" href={"#top"}>
              <p className="d-fe8d7a0908" data-node-id="1476:782">
                Back to top ↑
              </p>
            </SiteLink>
          </div>
          <p className="d-1be0a328f7" data-node-id="1476:783">
            STUDENT LED. COMMUNITY POWERED.
          </p>
        </div>
      </div>
    </div>
  );
}
