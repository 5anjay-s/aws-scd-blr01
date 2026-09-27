import { SiteBrand } from "../SiteBrand";
import { SiteHeader } from "../SiteHeader";
import { SignalStitch } from "../SignalStitch";
import { HeroTitle, HeroTitleWord } from "../HeroTitle";
import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 1168:491.
import { DesignMotion } from "../DesignMotion";
const imgArtworkWindowDesktopTextureMobileCrop = "/assets/865-7675-28d92.png";
const imgAccentSignalStitch = "/assets/865-7675-fa3f0.svg";
const imgDitherWakePhase2 = "/assets/1168-491-212f9.svg";
const imgDitherWakePhase1 = "/assets/1168-491-5e543.svg";
const imgPixelPropellerPlaneLeftFacing = "/assets/1168-491-96d60.svg";
const imgPixelTowline = "/assets/1168-491-7d404.svg";
const imgSteppedPixelPennant = "/assets/1168-491-5c397.svg";
const imgArrow = "/assets/865-7675-0b485.svg";

export default function MobileHeroDesktopAligned() {
  return (
    <div className="d-0b16a12d9f" data-node-id="1168:491" data-name="Mobile / hero — Desktop aligned">
      <SiteHeader className="d-7794366a59 site-header" data-node-id="1169:507" data-name="Navigation / Mobile">
        <SiteBrand data-node-id="1169:508" />
        <SiteLink className="d-8213d7a805" data-node-id="1169:516" data-name="Navigation / Explore" href={"/#experience"}>
          <p className="d-d21e8bada1" data-node-id="1169:517">
            Explore
          </p>
        </SiteLink>
      </SiteHeader>
      <HeroTitle className="d-8658b5b0ac" data-node-id="1169:523" role="heading" aria-level={1} data-name="Hero / Mobile masthead">
        <p className="d-218b1f732f" data-node-id="1169:524">
          FOR THE NEXT WAVE OF BUILDERS.
        </p>
        <div className="d-d2e138fbfe" data-node-id="1169:525">
          <p className="d-0315f35df3"><HeroTitleWord text="STUDENT" /></p>
          <p className="d-0315f35df3"><HeroTitleWord text="COMMUNITY" startIndex={7} /></p>
          <p className="d-3db78634da"><HeroTitleWord text="DAY" startIndex={16} /></p>
        </div>
        <div className="d-268191fa90" data-node-id="1169:526">
          <p className="d-7517b65055">A little curiosity.</p>
          <p className="d-22d0902a25">A world of possibility.</p>
        </div>
        <div className="d-ff3aab5f3d" data-node-id="1169:527" data-name="Accent / Signal stitch">
          <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentSignalStitch} />
        </div>
      </HeroTitle>
      <div className="d-4b7989c8c0" data-node-id="1169:532" data-name="Hero / Approved mobile sky">
        <div className="d-390d240284" data-node-id="1169:533" data-name="Mobile / Sky crop">
          <div className="d-ad5d42a9d0" data-node-id="1169:534" data-name="Mobile / Desktop cloud texture">
            <div className="d-8ac2978ed0" data-node-id="1169:535" data-name="Artwork / Window — Desktop texture, mobile crop">
              <img alt="" className="d-b9b760d314" src={imgArtworkWindowDesktopTextureMobileCrop} />
            </div>
          </div>
          <DesignMotion className="d-f473903882" data-node-id="1169:536" data-name="Mobile / Pixel propeller flight / right to left">
            <DesignMotion className="d-f6441e784b" data-node-id="1169:537" data-name="Dither wake / phase 2">
              <img alt="" className="d-511e8f31d4" src={imgDitherWakePhase2} />
            </DesignMotion>
            <DesignMotion className="d-f6441e784b" data-node-id="1169:540" data-name="Dither wake / phase 1">
              <img alt="" className="d-511e8f31d4" src={imgDitherWakePhase1} />
            </DesignMotion>
            <div className="d-838419d9b9" data-node-id="1169:543" data-name="Pixel propeller plane / left-facing">
              <img alt="" className="d-511e8f31d4" src={imgPixelPropellerPlaneLeftFacing} />
            </div>
            <div className="d-ff0e236310" data-node-id="1169:550" data-name="Pixel towline">
              <div className="d-8c3c54e805">
                <img alt="" className="d-c77fedee9b" src={imgPixelTowline} />
              </div>
            </div>
            <div className="d-b310e3d952" data-node-id="1169:551" data-name="Banner / pixel pennant">
              <div className="d-72adfe89db" data-node-id="1169:552" data-name="Stepped pixel pennant">
                <img alt="" className="d-511e8f31d4" src={imgSteppedPixelPennant} />
              </div>
              <p className="d-f99e433a84" data-node-id="1169:554">
                COMING SOON
              </p>
            </div>
          </DesignMotion>
        </div>
      </div>
      <div className="d-ddaf47eddc" data-node-id="1169:588" data-name="Hero / The future is a group project">
        <p className="d-976b59f690" data-node-id="1169:589">
          AWS STUDENT COMMUNITY DAY
        </p>
        <div className="d-c73b906256" data-node-id="1169:590">
          <p className="d-12e09ef69c">THE FUTURE IS</p>
          <p className="d-6d91ba1ca8">A GROUP PROJECT.</p>
        </div>
        <div className="d-19d4f30f9d" data-node-id="1169:591">
          <p className="d-143d1e5b1d">Meet the people. Explore the cloud.</p>
          <p className="d-e894d19a93">Build something that matters.</p>
        </div>
        <SiteLink hoverTone="cyan" buttonTone="navy" className="d-e8fa637ebf" data-node-id="1169:592" data-name="Button / Flat" href={"/registration"}>
          <p className="d-7a0f1f17eb" data-node-id="I1169:592;5:30">
            Registration info
          </p>
          <div className="d-4725149c0e" data-node-id="I1169:592;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
      <div className="d-ae46956b33" data-node-id="1169:596" data-name="Hero / Event information">
        <p className="d-f3be3a50a0 event-detail" data-node-id="1169:597">
          <span>DATE /</span> <strong className="event-detail-date">NOVEMBER 6TH</strong>
        </p>
        <p className="d-f3be3a50a0 event-detail" data-node-id="1169:598">
          <span>PLACE /</span> <strong className="event-detail-place">BENGALURU</strong>
        </p>
        <p className="d-c12a734a38" data-node-id="1169:599">
          STUDENT LED. COMMUNITY POWERED.
        </p>
      </div>
    </div>
  );
}
