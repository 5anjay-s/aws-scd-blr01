import { SiteBrand } from "../SiteBrand";
import { SiteHeader } from "../SiteHeader";
import { RegistrationButton } from "../RegistrationButton";
import { SiteLink } from "../SiteLink";
import { DesignMotion } from "../DesignMotion";
import { SignalStitch } from "../SignalStitch";
import { HeroTitle, HeroTitleWord } from "../HeroTitle";
// Source: Figma 00/ Final, node 865:7675.
const imgDitherCorner = "/assets/1304-694-39fa8.svg";
const imgArtworkWindowOriginalTexture = "/assets/865-7675-28d92.png";
const imgAccentSignalStitch = "/assets/865-7675-fa3f0.svg";
const imgDitherWakePhase2 = "/assets/865-7675-4ceb6.svg";
const imgDitherWakePhase1 = "/assets/865-7675-008e9.svg";
const imgPixelPropellerPlaneLeftFacing = "/assets/865-7675-cdcaf.svg";
const imgPixelTowline = "/assets/865-7675-86822.svg";
const imgSteppedPixelPennant = "/assets/865-7675-fc9d7.svg";
const imgArrow1 = "/assets/865-7675-0b485.svg";

export default function Group1() {
  return (
    <div className="d-eccf51347c" data-node-id="865:7675">
      <div className="hero-dither-corner" data-node-id="1304:694" data-name="Accent / Dither corner">
        <img alt="" src={imgDitherCorner} />
      </div>
      <SiteHeader className="d-7ee4ef429a site-header" data-node-id="860:4980" data-name="Navigation v2">
        <SiteBrand data-node-id="860:4981" />
        <div className="d-06d21171a1" data-node-id="860:4982" data-name="Nav links v2">
          <SiteLink className="d-36e152c572" data-node-id="860:4983" href={"/#experience"}>
            <p>
              <span className="d-d0d8823c60">01</span>
              <span className="d-95907800fd">{` Experience`}</span>
            </p>
          </SiteLink>
          <SiteLink className="d-36e152c572" data-node-id="860:4984" href={"/tracks"}>
            <p>
              <span className="d-d0d8823c60">02</span>
              <span className="d-95907800fd">{` Tracks`}</span>
            </p>
          </SiteLink>
          <SiteLink className="d-36e152c572" data-node-id="860:4985" href={"/#speakers"}>
            <p>
              <span className="d-d0d8823c60">03</span>
              <span className="d-95907800fd">{` Speakers`}</span>
            </p>
          </SiteLink>
          <SiteLink className="d-36e152c572" data-node-id="860:4986" href={"/#community"}>
            <p>
              <span className="d-d0d8823c60">04</span>
              <span className="d-95907800fd">{` Community`}</span>
            </p>
          </SiteLink>
        </div>
        <RegistrationButton />
      </SiteHeader>
      <HeroTitle className="d-0f614aab94" data-node-id="860:5000" role="heading" aria-level={1} data-name="Masthead v2">
        <div className="d-1a6510fcd2" data-node-id="860:5001" data-name="Masthead upper band">
          <p className="d-bc49c781c8" data-node-id="860:5002">
            <HeroTitleWord text="STUDENT" />
          </p>
          <div className="d-7a855bbe86" data-node-id="860:5003" data-name="Masthead side note">
            <p className="d-e8a3679942" data-node-id="860:5004">
              FOR THE NEXT WAVE OF BUILDERS.
            </p>
            <div className="d-793b7b3230" data-node-id="860:5005">
              <p className="d-7519be8e79">A little curiosity.</p>
              <p className="d-95907800fd">A world of possibility.</p>
            </div>
            <div className="d-5d8f205d81" data-node-id="860:5007" data-name="Accent / Signal stitch">
              <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentSignalStitch} />
            </div>
          </div>
        </div>
        <p className="d-d4882944c6" data-node-id="860:5006">
          <span className="d-307cc96bda"><HeroTitleWord text="COMMUNITY" startIndex={7} /></span>
          <span className="d-4f166e438e"><HeroTitleWord text="DAY" startIndex={16} /></span>
        </p>
      </HeroTitle>
      <div className="d-f6226d2996" data-node-id="860:5008" data-name="Sky field v2">
        <div className="d-392fdfdbe3" data-node-id="860:5009" data-name="Flat sky / crop">
          <div className="d-fa92dc8775" data-node-id="860:5010" data-name="Flat sky / static print">
            <div className="d-97af6a9f14" data-node-id="1131:2448" data-name="Artwork / Window — Original texture">
              <img alt="" className="d-b9b760d314" src={imgArtworkWindowOriginalTexture} />
            </div>
          </div>
          <DesignMotion className="d-b0b08e339c" data-node-id="860:5021" data-name="Pixel propeller flight / right to left">
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
              <p className="d-9445b43840" data-node-id="860:5063">
                COMING SOON
              </p>
            </div>
          </DesignMotion>
        </div>
        <div className="d-19fc48e306" data-node-id="860:5064" data-name="Invitation panel">
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
      </div>
      <div className="d-7bf40bcb7e" data-node-id="860:5069" data-name="Metadata v2">
        <p className="d-0490a1ae8e event-detail" data-node-id="860:5070">
          <span>DATE /</span> <strong className="event-detail-date">NOVEMBER 6TH</strong>
        </p>
        <p className="d-98133fdace event-detail" data-node-id="860:5071">
          <span>PLACE /</span> <strong className="event-detail-place">BENGALURU</strong>
        </p>
        <p className="d-74e80c5c8f" data-node-id="860:5072">
          STUDENT LED. COMMUNITY POWERED.
        </p>
      </div>
    </div>
  );
}
