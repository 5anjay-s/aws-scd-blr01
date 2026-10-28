import { event } from "../../content/event";
import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 866:8600.
const imgArrow = "/assets/865-7675-0b485.svg";

export default function MobileV2PartnersBuildTheNextWave() {
  return (
    <div className="d-b5b13ba448" data-node-id="866:8600" data-name="Mobile v2 / Partners — Build the next wave">
      <p className="d-b795ba67a4" data-node-id="866:8601">
        PARTNER WITH AWS SCD BENGALURU
      </p>
      <div className="d-90e577fb9c" data-node-id="866:8602">
        <p className="d-63e7c83bf6">{`Let's make room`}</p>
        <p className="d-84bf8673ce">for more builders.</p>
      </div>
      <div className="d-8e39d94473" data-node-id="1171:589">
        <p className="d-2a8bd1889a">Support the event.</p>
        <p className="d-2158fa6ddb">Meet the community.</p>
      </div>
      <p className="d-ff132c886e" data-node-id="866:8603">
        Support student builders through hands-on learning, shared ideas and a stronger community. Talk to the organisers about sponsoring the event.
      </p>
      <SiteLink hoverTone="orange" buttonTone="navy" className="d-49c8885528" data-node-id="866:8604" data-name="Button / Flat" href={`mailto:${event.email}?subject=Sponsor%20AWS%20SCD%20Bengaluru%202026`}>
        <p className="d-7669a2de49" data-node-id="I866:8604;5:30">
          Sponsor this event
        </p>
        <div className="d-4725149c0e" data-node-id="I866:8604;15:32" data-name="Arrow">
          <img alt="" className="d-511e8f31d4" src={imgArrow} />
        </div>
      </SiteLink>
    </div>
  );
}
