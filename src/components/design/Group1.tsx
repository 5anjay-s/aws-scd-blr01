import { HomeNavigation } from "../HomeNavigation";
import { SiteLink } from "../SiteLink";
import { DesignMotion } from "../DesignMotion";
import { HeroTitle } from "../HeroTitle";
// Source: Figma 00/ Final, node 865:7675.
const imgDitherCorner = "/assets/1304-694-39fa8.svg";
const imgArtworkWindowOriginalTexture = "/assets/865-7675-28d92.webp";
const imgDitherWakePhase2 = "/assets/865-7675-4ceb6.svg";
const imgDitherWakePhase1 = "/assets/865-7675-008e9.svg";
const imgPixelPropellerPlaneLeftFacing = "/assets/865-7675-cdcaf.svg";
const imgPixelTowline = "/assets/865-7675-86822.svg";
const imgSteppedPixelPennant = "/assets/865-7675-fc9d7.svg";
const imgArrow1 = "/assets/865-7675-0b485.svg";

export default function Group1() {
  return (
    <div className="d-eccf51347c" data-node-id="865:7675">
      <HomeNavigation />
      <HeroTitle variant="desktop" />
      <div className="d-f6226d2996" data-node-id="860:5008" data-name="Sky field v2">
        <div className="d-19fc48e306" data-node-id="860:5064" data-name="Invitation panel" data-hero-invitation>
          <div className="hero-dither-corner" data-node-id="1304:694" data-name="Accent / Dither corner">
            <img alt="" src={imgDitherCorner} />
          </div>
          <p className="d-bc95ff465f" data-node-id="860:5065">
            AWS STUDENT COMMUNITY DAY
          </p>
          <div className="d-833f74a3c2" data-node-id="860:5066">
            <p className="d-c104b2dca3">THE FUTURE</p>
            <p className="d-c104b2dca3">IS A GROUP</p>
            <p className="d-307cc96bda">PROJECT.</p>
          </div>
          <div className="d-f5b51f9218" data-node-id="860:5067">
            <p className="d-7519be8e79">Meet the people. Explore the cloud.</p>
            <p className="d-95907800fd">Build something that matters.</p>
          </div>
          <SiteLink hoverTone="cyan" buttonTone="navy" className="d-2646a57d26" data-node-id="860:5068" data-name="Button / Flat" href={"/registration"}>
            <p className="d-7a0f1f17eb" data-node-id="I860:5068;5:30">
              Registration info
            </p>
            <div className="d-4725149c0e" data-node-id="I860:5068;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow1} />
            </div>
          </SiteLink>
        </div>
        <div className="d-392fdfdbe3" data-node-id="860:5009" data-name="Flat sky / crop" data-hero-sky>
          <div className="d-fa92dc8775" data-node-id="860:5010" data-name="Flat sky / static print">
            <div className="d-97af6a9f14" data-node-id="1131:2448" data-name="Artwork / Window — Original texture">
              <img alt="" className="d-b9b760d314" src={imgArtworkWindowOriginalTexture} width={1254} height={1254} loading="eager" fetchPriority="high" decoding="async" />
            </div>
          </div>
          <DesignMotion className="d-b0b08e339c" data-node-id="860:5021" data-name="Pixel propeller flight / right to left" data-hero-sky-flight waitForArrival>
            <DesignMotion className="d-e0bdd3a5d6" data-node-id="860:5034" data-name="Dither wake / phase 2">
              <img alt="" className="d-511e8f31d4" src={imgDitherWakePhase2} />
            </DesignMotion>
            <DesignMotion className="d-e0bdd3a5d6" data-node-id="860:5049" data-name="Dither wake / phase 1">
              <img alt="" className="d-511e8f31d4" src={imgDitherWakePhase1} />
            </DesignMotion>
            <div className="d-6998eaff6f" data-node-id="860:5052" data-name="Pixel propeller plane / left-facing">
              <img alt="" className="d-511e8f31d4" src={imgPixelPropellerPlaneLeftFacing} />
            </div>
            <div className="d-ffc3be19bc" data-node-id="860:5059" data-name="Pixel towline">
              <div className="d-8c3c54e805">
                <img alt="" className="d-c77fedee9b" src={imgPixelTowline} />
              </div>
            </div>
            <div className="d-51731b75d4" data-node-id="860:5060" data-name="Banner / pixel pennant">
              <div className="d-ea69cb599c" data-node-id="860:5061" data-name="Stepped pixel pennant">
                <img alt="" className="d-511e8f31d4" src={imgSteppedPixelPennant} />
              </div>
              <p className="d-9445b43840 arcade-heading" data-node-id="860:5063">
                5 NOV 2026
              </p>
            </div>
          </DesignMotion>
        </div>
      </div>
    </div>
  );
}
