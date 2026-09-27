import { WovenRibbon } from "../WovenRibbon";

// Source: Figma 00/ Final, node 860:5267.
const imgAccentWovenLinks = "/assets/860-5267-10945.svg";
const imgAccentCuriositySpark = "/assets/860-5267-2eeb3.svg";

export default function CommunityV2() {
  return (
    <div className="d-f51e833ed1" data-node-id="860:5267" data-name="Community v2">
      <div className="d-ee5771173a" data-node-id="860:5268" data-name="Community margin">
        <p className="d-e3d55930ba" data-node-id="860:5269">
          03 / A SHARED STARTING POINT
        </p>
        <div className="d-83cd8ec499" data-node-id="860:5270">
          <p className="d-c104b2dca3">YOU +</p>
          <p className="d-c104b2dca3">YOUR</p>
          <p className="d-307cc96bda">PEOPLE</p>
        </div>
        <div className="d-fd320dc1de" data-node-id="860:5271">
          <p className="d-7519be8e79">STUDENT LED.</p>
          <p className="d-95907800fd">OPEN TO POSSIBILITY.</p>
        </div>
      </div>
      <div className="d-14ecb956ad" data-node-id="860:5272" data-name="Community statement">
        <div className="d-c20331f0e4" data-node-id="860:5273">
          <p className="d-c104b2dca3">Good things happen</p>
          <p className="d-307cc96bda">between people.</p>
        </div>
        <div className="d-5003bfd20e" data-node-id="860:5274">
          <p className="d-7519be8e79">Your first project. Your biggest question.</p>
          <p className="d-7519be8e79">Your next collaborator. Bring all of it.</p>
          <p className="d-95907800fd">A community grows one conversation at a time.</p>
        </div>
      </div>
      <div className="d-87e8379a2b" data-node-id="860:5275" data-name="Accent / Woven links">
        <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinks} />
      </div>
      <div className="d-d259713903" data-node-id="860:5276" data-name="Accent / Curiosity spark">
        <img alt="" className="d-511e8f31d4 curiosity-spark-spin" src={imgAccentCuriositySpark} />
      </div>
    </div>
  );
}
