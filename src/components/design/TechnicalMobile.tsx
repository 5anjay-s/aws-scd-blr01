import { TechnicalProgramme } from "../TechnicalProgramme";
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
          ← ALL TRACKS
        </SiteLink>
        <div className="d-447a4f144a" data-node-id="874:9129">
          <p className="d-9f251d856d">01 / TECHNICAL</p>
          <p className="d-8c8cd1946c">5 NOVEMBER 2026</p>
        </div>
        <div className="d-1b5595777a" data-node-id="874:9130" role="heading" aria-level={1}>
          <p className="d-00bdb0ea46">TECHNICAL</p>
          <p className="d-c7b43af17c">TRACK.</p>
        </div>
        <div className="d-f2cd256124" data-node-id="874:9131" data-name="Artwork / Compile brackets — Mobile">
          <TrackArtwork kind="compile" className="d-511e8f31d4" src={imgArtworkCompileBracketsMobile} />
        </div>
        <p className="d-2c3b9cd2b0" data-node-id="874:9132">
          {mainDay.technicalPreview}
        </p>
        <SiteLink buttonTone="orange" className="d-205df6f90e" data-node-id="874:9133" data-name="Action / Get your ticket" href={"/registration"}>
          <p className="d-cf01328ee8" data-node-id="I874:9133;5:30">
            Get your ticket
          </p>
          <div className="d-4725149c0e" data-node-id="I874:9133;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
      <TechnicalProgramme mobile />
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
          <p className="d-27cc6eebfe">KEEP</p>
          <p className="d-b4067b5592">EXPLORING.</p>
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
      </div>
    </div>
  );
}
