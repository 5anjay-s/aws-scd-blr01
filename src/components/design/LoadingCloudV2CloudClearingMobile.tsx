import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 866:8315.
import { DesignMotion } from "../DesignMotion";
import { LoadingFlight } from "../LoadingFlight";
const imgStaticSkyMobileDitherField = "/assets/866-8315-9bde5.svg";

export default function LoadingCloudV2CloudClearingMobile() {
  return (
    <div className="d-c9a8d6565e" data-node-id="866:8315" data-name="Loading / Cloud v2 — Cloud clearing — Mobile">
      <div className="d-a5ddfec8d8" data-node-id="866:8316" data-name="Static sky / mobile dither field">
        <img alt="" className="d-511e8f31d4" src={imgStaticSkyMobileDitherField} />
      </div>
      <div className="d-303182bc98" data-node-id="866:8318" data-name="Cloud Clearing / Mobile header">
        <div className="d-a8fea17f80" data-node-id="866:8319">
          <p className="d-b9789abc71">aws / STUDENT</p>
          <p className="d-d47a30e809">COMMUNITY DAY</p>
        </div>
        <p className="d-f630b10a29" data-node-id="866:8320">
          LOADING THE DAY
        </p>
      </div>
      <div className="d-6e6f4f1401" data-node-id="866:8321" data-name="AWS / Pixel logo">
        <LoadingFlight />
      </div>
      <div className="d-4b35a15af4" data-node-id="866:8324" data-name="Loading / Mobile status">
        <div className="d-aeea731e44" data-node-id="866:8325">
          <p className="d-edce8460ce">STUDENT</p>
          <p className="d-e64f4edba4">COMMUNITY DAY</p>
        </div>
        <p className="d-99e22a8cca" data-node-id="866:8326">
          OPENING A WORLD OF POSSIBILITIES
        </p>
        <div className="d-79af150e9f" data-node-id="866:8327" data-name="Loading / Activity track">
          <DesignMotion className="d-04986a059b" data-node-id="866:8332" data-name="Loading / Orange activity segment" />
        </div>
      </div>
      <SiteLink hoverTone="orange" buttonTone="navy" className="d-30e3bc975a" data-node-id="866:8333" data-name="Enter the day / Mobile" href={"/#home"}>
        <p className="d-e93b5a6731" data-node-id="866:8334">
          ENTER THE DAY ↗
        </p>
      </SiteLink>
      <p className="d-a4956769b4" data-node-id="1171:580">
        A NEW DAY FOR THE NEXT WAVE OF BUILDERS.
      </p>
    </div>
  );
}
