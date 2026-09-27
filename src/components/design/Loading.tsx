import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 860:4959.
import { DesignMotion } from "../DesignMotion";
import { LoadingFlight } from "../LoadingFlight";
const imgStaticSkyFullBleedDitherField = "/assets/860-4959-ee06b.svg";

export default function Loading() {
  return (
    <div className="d-c9a8d6565e" data-node-id="860:4959" data-name="Loading">
      <div className="d-a10e2f4a62" data-node-id="860:4960" data-name="Static sky / full-bleed dither field">
        <img alt="" className="d-511e8f31d4" src={imgStaticSkyFullBleedDitherField} />
      </div>
      <div className="d-503b60613d" data-node-id="860:4962" data-name="Cloud Clearing / Header">
        <p className="d-9d3f90348e" data-node-id="860:4963">
          aws / STUDENT COMMUNITY DAY
        </p>
        <p className="d-95da742631" data-node-id="860:4964">
          LOADING THE DAY
        </p>
      </div>
      <div className="d-e1643a6199" data-node-id="860:4965" data-name="AWS / Pixel logo">
        <LoadingFlight />
      </div>
      <div className="d-262263a29b" data-node-id="860:4968" data-name="Loading / Centered status">
        <p className="d-79f5f8e807" data-node-id="860:4969">
          STUDENT COMMUNITY DAY
        </p>
        <p className="d-ad9cbbf70e" data-node-id="860:4970">
          OPENING A WORLD OF POSSIBILITIES
        </p>
        <div className="d-4a00469e16" data-node-id="860:4971" data-name="Loading / Activity track">
          <DesignMotion className="d-735c0197cc" data-node-id="860:4976" data-name="Loading / Orange activity segment" />
        </div>
      </div>
      <div className="d-561d66d7f4" data-node-id="860:4977" data-name="Cloud Clearing / Footer">
        <p className="d-726e681a8c" data-node-id="860:4978">
          A NEW DAY FOR THE NEXT WAVE OF BUILDERS.
        </p>
        <SiteLink className="d-226d24be45" data-node-id="860:4979" href={"/#home"}>
          <p className="d-d43f566f28">ENTER THE DAY ↗</p>
        </SiteLink>
      </div>
    </div>
  );
}
