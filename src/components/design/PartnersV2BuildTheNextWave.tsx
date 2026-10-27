import { event } from "../../content/event";
import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 860:5320.
const imgArrow = "/assets/865-7675-0b485.svg";

export default function PartnersV2BuildTheNextWave() {
  return (
    <div className="d-1e4040c284" data-node-id="860:5320" data-name="Partners v2 / Build the next wave">
      <div className="d-5f410ad65c" data-node-id="860:5321" data-name="Invitation / Statement">
        <p className="d-c2b90059c5" data-node-id="860:5322">
          THE NEXT WAVE STARTS WITH US.
        </p>
        <div className="d-a1e417e008" data-node-id="860:5323">
          <p className="d-27c1e8a72b">{`Let's make room`}</p>
          <p className="d-015f0ff7c6">for more builders.</p>
        </div>
      </div>
      <div className="d-5de011bb5b" data-node-id="860:5324" data-name="Invitation / Details">
        <div className="d-338a7d31fd" data-node-id="860:5325">
          <p className="d-edce8460ce">Good company.</p>
          <p className="d-e64f4edba4">Greater possibility.</p>
        </div>
        <p className="d-2d9d3e40e1" data-node-id="860:5326">
          Support student builders through hands-on learning, shared ideas and a stronger community. Talk to the organisers about sponsoring the event.
        </p>
        <SiteLink hoverTone="orange" buttonTone="navy" className="d-c319985257" data-node-id="860:5327" data-name="Button / Flat" href={`mailto:${event.email}?subject=Sponsor%20AWS%20SCD%20Bengaluru%202026`}>
          <p className="d-7669a2de49" data-node-id="I860:5327;5:30">
            Sponsor this event
          </p>
          <div className="d-4725149c0e" data-node-id="I860:5327;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
      </div>
    </div>
  );
}
