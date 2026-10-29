import { SignalStitch } from "../SignalStitch";
import { TrackArtwork } from "../TrackArtwork";
import { SiteLink } from "../SiteLink";
import { DitherDivider } from "../DitherDivider";
// Source: Figma 00/ Final, node 860:5104.
const imgArtworkNonTechnicalTrackPixelQuotations = "/assets/860-5104-db107.svg";
const imgArtworkTechnicalTrackPixelBrackets = "/assets/860-5104-5f40e.svg";
const imgAccentPixelStitch = "/assets/860-5104-70864.svg";
const imgArrow = "/assets/865-7675-0b485.svg";

function ArtworkNonTechnicalTrackPixelQuotations({ className }: { className: string }) {
  return (
    <div className={className} data-node-id="676:2196" data-name="Artwork / Non-technical track — Pixel quotations">
      <TrackArtwork kind="quotes" className="d-511e8f31d4" src={imgArtworkNonTechnicalTrackPixelQuotations} />
    </div>
  );
}

function ArtworkTechnicalTrackPixelBrackets({ className }: { className: string }) {
  return (
    <div className={className} data-node-id="676:2190" data-name="Artwork / Technical track — Pixel brackets">
      <TrackArtwork kind="brackets" className="d-511e8f31d4" src={imgArtworkTechnicalTrackPixelBrackets} />
    </div>
  );
}

export default function ProgrammeV2ChooseYourTrackApprovedDesktop() {
  return (
    <div className="d-3c9f0988a3" data-node-id="860:5104" data-name="Programme v2 / Choose your track — Approved / Desktop">
      <DitherDivider from="cyan" to="white" />
      <div className="d-065ea19f3d" data-node-id="860:5105" data-name="Choose your track / Masthead">
        <div className="d-22f3efd1f0" data-node-id="860:5106" data-name="Masthead / Title">
          <p className="d-b693183aa7" data-node-id="860:5107">
            TWO TRACKS / ONE COMMUNITY
          </p>
          <div className="d-c92da026bf" data-node-id="860:5108">
            <p className="d-e4f7b17a79">FIND YOUR</p>
            <p className="d-d28ee2b6a4">WAY IN.</p>
          </div>
        </div>
        <div className="d-5aab0ab334" data-node-id="860:5109" data-name="Masthead / Introduction">
          <div className="d-3392969d42" data-node-id="860:5110">
            <p className="d-2eae06771a">Follow your curiosity.</p>
            <p className="d-2eae06771a">Choose the experience</p>
            <p className="d-afb1b38150">that speaks to you.</p>
          </div>
          <div className="d-50ee84bc7e" data-node-id="860:5111" data-name="Accent / Pixel stitch">
            <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentPixelStitch} />
          </div>
        </div>
      </div>
      <div className="d-46702215f1" data-node-id="860:5116" data-name="Track route / 01 — Technical">
        <div className="d-eb068680ac" data-node-id="860:5117" data-name="Route index / 01">
          <p className="d-bf473a22c4" data-node-id="860:5118">
            01
          </p>
          <div className="d-0ce07179f9" data-node-id="860:5119">
            <p className="d-8c06a6239d">START WITH</p>
            <p className="d-7600d62c87">THE BUILD.</p>
          </div>
        </div>
        <div className="d-a04cc975a0" data-node-id="860:5120" data-name="Choose technical">
          <div className="d-9eb9f99b54" data-node-id="860:5121" data-name="Technical / Copy">
            <p className="d-e2eaaa8a2f" data-node-id="860:5122">
              EXPLORE THE TECHNICAL TRACK
            </p>
            <p className="d-5f3bea0a6e" data-node-id="860:5123">
              TECHNICAL
            </p>
            <p className="d-160b8bdb33" data-node-id="860:5124">{`Cloud, AI & hands-on building.`}</p>
            <SiteLink hoverTone="orange" buttonTone="navy" className="d-3ea4699496" data-node-id="860:5125" data-name="Action / Explore technical" href={"/technical"}>
              <p className="d-7a0f1f17eb" data-node-id="I860:5125;5:30">
                Explore technical
              </p>
              <div className="d-4725149c0e" data-node-id="I860:5125;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow} />
              </div>
            </SiteLink>
          </div>
          <ArtworkTechnicalTrackPixelBrackets className="d-2b3bdbf669" />
        </div>
      </div>
      <div className="d-46702215f1" data-node-id="860:5127" data-name="Track route / 02 — Non-technical">
        <div className="d-f85e5baf3d" data-node-id="860:5128" data-name="Choose non-technical">
          <ArtworkNonTechnicalTrackPixelQuotations className="d-2b3bdbf669" />
          <div className="d-9eb9f99b54" data-node-id="860:5130" data-name="Non-technical / Copy">
            <p className="d-e2eaaa8a2f" data-node-id="860:5131">
              EXPLORE THE NON-TECHNICAL TRACK
            </p>
            <div className="d-3b1dd09c8a" data-node-id="860:5132">
              <p className="d-58de503319">NON-</p>
              <p className="d-39cfb050ad">TECHNICAL</p>
            </div>
            <p className="d-160b8bdb33" data-node-id="860:5133">{`Startups, management & product strategy.`}</p>
            <SiteLink hoverTone="lime" buttonTone="navy" className="d-3ea4699496" data-node-id="860:5134" data-name="Action / Explore non-technical" href={"/non-technical"}>
              <p className="d-7a0f1f17eb" data-node-id="I860:5134;5:30">
                Explore non-technical
              </p>
              <div className="d-4725149c0e" data-node-id="I860:5134;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow} />
              </div>
            </SiteLink>
          </div>
        </div>
        <div className="d-eb068680ac" data-node-id="860:5135" data-name="Route index / 02">
          <p className="d-bf473a22c4" data-node-id="860:5136">
            02
          </p>
          <div className="d-cea314c430" data-node-id="860:5137">
            <p className="d-8c06a6239d">START WITH</p>
            <p className="d-7600d62c87">AN IDEA.</p>
          </div>
        </div>
      </div>
      <DitherDivider from="navy" to="lime" className="track-speakers-divider" />
    </div>
  );
}
