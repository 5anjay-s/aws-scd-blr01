// Source: Figma 00/ Final, node 866:8582.
import { SponsorTier } from "../SponsorTier";
import { SponsorSpotlight } from "../SponsorSpotlight";
const imgTelescopeTripodFixed = "/assets/866-8582-232fa.svg";
const imgTelescopeBarrelSeparateRotatingHead = "/assets/866-8582-180df.svg";

export default function PartnersEditorialDirectoryMobile() {
  return (
    <SponsorSpotlight className="d-389801b842" data-node-id="866:8582" data-name="Partners / Editorial directory — Mobile">
      <div className="d-1552e25ad7" data-node-id="1406:639" data-name="Directory / Introduction">
        <p className="d-6e37333e29" data-node-id="1406:640">
          OUR PARTNER LINEUP
        </p>
        <div className="d-20e6745efc" data-node-id="1406:641">
          <p className="d-27cc6eebfe">The people behind</p>
          <p className="d-b4067b5592">the possibility.</p>
        </div>
        <div className="d-10c4b27c8f" data-node-id="1406:642">
          <p className="d-8c06a6239d">Meet the organizations</p>
          <p className="d-7600d62c87">helping make the day possible.</p>
        </div>
      </div>
      <div className="d-45cea8108a" data-node-id="1406:643" data-name="Rule / Editorial partner divider" />
      <div className="sponsor-title-slot" data-node-id="1406:644" data-name="Directory / Title sponsor">
        <SponsorTier sponsor="title" nodeId="1406:649" labelId="1406:650" logoId="1406:651" />
      </div>
      <div className="d-45cea8108a" data-node-id="1406:653" data-name="Rule / Editorial partner divider" />
      <div className="sponsor-row-content" data-node-id="1406:654" data-name="Directory / Supporting sponsors">
        <div className="sponsor-supporting" data-node-id="1406:659" data-name="Directory / Supporting sponsors">
          <SponsorTier sponsor="poweredBy" nodeId="1406:660" labelId="1406:661" logoId="1406:662" />
          <SponsorTier sponsor="workshop" nodeId="1406:664" labelId="1406:665" logoId="1406:666" />
        </div>
      </div>
      <div className="d-82c55335ad" data-node-id="1406:683" data-name="Discovery / Telescope and announcement status">
        <div className="d-5022e5d9c4" data-spotlight-tripod="" data-node-id="1406:685" data-name="Telescope / Tripod — fixed">
          <img alt="" className="d-511e8f31d4" src={imgTelescopeTripodFixed} />
        </div>
        <div className="d-63294b4232" data-spotlight-head="" data-node-id="1406:690">
          <div className="d-309ffa8f58">
            <div className="d-12971d8d60" data-spotlight-art="" data-name="Telescope / Barrel — separate rotating head">
              <img alt="" className="d-511e8f31d4" src={imgTelescopeBarrelSeparateRotatingHead} />
            </div>
          </div>
        </div>
      </div>
    </SponsorSpotlight>
  );
}
