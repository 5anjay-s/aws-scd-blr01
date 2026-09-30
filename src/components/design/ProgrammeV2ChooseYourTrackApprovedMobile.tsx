import { SignalStitch } from "../SignalStitch";
import { TrackArtwork } from "../TrackArtwork";
import { SiteLink } from "../SiteLink";
import { DitherDivider } from "../DitherDivider";
// Source: Figma 00/ Final, node 866:8432.
const imgTrackMastheadApprovedSignalStitch = "/assets/866-8432-27de8.svg";
const imgArtworkTechnicalTrackPixelBrackets = "/assets/866-8432-9a55f.svg";
const imgArrow = "/assets/865-7675-0b485.svg";
const imgArtworkNonTechnicalTrackPixelQuotations = "/assets/866-8432-00a38.svg";

export default function ProgrammeV2ChooseYourTrackApprovedMobile() {
  return (
    <div className="d-3c9f0988a3" data-node-id="866:8432" data-name="Programme v2 / Choose your track — Approved / Mobile">
      <DitherDivider from="cyan" to="white" />
      <div className="d-c378ebfe77" data-node-id="866:8433" data-name="Choose your track / Masthead — Mobile">
        <p className="d-b795ba67a4" data-node-id="866:8434">
          TWO TRACKS / ONE COMMUNITY
        </p>
        <div className="d-e6e0bcff24" data-node-id="866:8435">
          <p className="d-53918f0803">FIND YOUR</p>
          <p className="d-941138427e">WAY IN.</p>
        </div>
        <p className="d-9a93de92ab" data-node-id="866:8436">
          Follow your curiosity. Choose the experience that speaks to you.
        </p>
        <div className="d-2d63a67cb0" data-node-id="1171:581" data-name="Track masthead / Approved signal stitch">
          <SignalStitch alt="" className="d-511e8f31d4" src={imgTrackMastheadApprovedSignalStitch} />
        </div>
      </div>
      <SiteLink className="d-26298d5c62 mobile-track-card" data-node-id="866:8437" data-name="Choose technical / Whole band is linked — Mobile" href="/technical">
        <p className="d-3c923ef526 mobile-track-eyebrow" data-node-id="866:8438">
          01 / START WITH THE BUILD.
        </p>
        <p className="d-dea40ba60b mobile-track-title" data-node-id="866:8439">
          TECHNICAL
        </p>
        <p className="d-0ed9e83818 mobile-track-description" data-node-id="866:8440">{`Cloud, AI & hands-on building.`}</p>
        <div className="d-e9401eca47 mobile-track-artwork" data-node-id="866:8441" data-name="Technical / Pixel marker — Mobile">
          <div className="d-792578536f" data-node-id="866:8442" data-name="Artwork / Technical track — Pixel brackets">
            <TrackArtwork kind="brackets" className="d-511e8f31d4" src={imgArtworkTechnicalTrackPixelBrackets} />
          </div>
        </div>
        <div data-button-hover="orange" className="d-dfc8001d8b site-button mobile-track-action" data-button-tone="navy" data-node-id="866:8443" data-name="Action / Explore technical">
          <p className="d-7669a2de49" data-node-id="I866:8443;5:30">
            Explore technical
          </p>
          <div className="d-4725149c0e" data-node-id="I866:8443;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </div>
      </SiteLink>
      <SiteLink className="d-7b0f966fe7 mobile-track-card" data-node-id="866:8444" data-name="Choose non-technical / Whole band is linked — Mobile" href="/non-technical">
        <p className="d-3c923ef526 mobile-track-eyebrow" data-node-id="866:8445">
          02 / START WITH AN IDEA.
        </p>
        <div className="d-b5dd2cdca0 mobile-track-title" data-node-id="866:8446">
          <p className="d-5069c0bf54">NON-</p>
          <p className="d-287d1f8085">TECHNICAL</p>
        </div>
        <p className="d-0ed9e83818 mobile-track-description" data-node-id="866:8447">{`Ideas, teamwork & shared perspectives.`}</p>
        <div className="d-e9401eca47 mobile-track-artwork" data-node-id="866:8448" data-name="Non-technical / Pixel marker — Mobile">
          <div className="d-aa5c2a33f7" data-node-id="866:8449" data-name="Artwork / Non-technical track — Pixel quotations">
            <TrackArtwork kind="quotes" className="d-511e8f31d4" src={imgArtworkNonTechnicalTrackPixelQuotations} />
          </div>
        </div>
        <div data-button-hover="lime" className="d-dfc8001d8b site-button mobile-track-action" data-button-tone="navy" data-node-id="866:8450" data-name="Action / Explore non-technical">
          <p className="d-7669a2de49" data-node-id="I866:8450;5:30">
            Explore <span>non-technical</span>
          </p>
          <div className="d-4725149c0e" data-node-id="I866:8450;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </div>
      </SiteLink>
      <DitherDivider from="navy" to="orange" className="track-preview-divider" />
      <div className="d-e3ad48b6cf track-programme-preview" data-node-id="866:8451" data-name="Programme / One shared day — Mobile">
        <p className="d-b795ba67a4" data-node-id="866:8452">
          THE EVENT / PROGRAMME PREVIEW
        </p>
        <div className="d-d4c1ca5aa4" data-node-id="866:8453">
          <p className="d-9c7634671c">ONE SHARED</p>
          <p className="d-b593672e9c">DAY.</p>
        </div>
        <p className="d-9a93de92ab" data-node-id="866:8454">
          Explore the shape of the day. Timings to be announced.
        </p>
        <SiteLink hoverTone="cyan" buttonTone="navy" className="d-1ed1e68c5b" data-node-id="866:8455" data-name="Action / Explore the day" href={"/#timeline"}>
          <p className="d-7669a2de49" data-node-id="I866:8455;5:30">
            Explore the day
          </p>
          <div className="d-4725149c0e" data-node-id="I866:8455;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
    </div>
  );
}
