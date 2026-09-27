import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 860:5352.
const imgArrow = "/assets/865-7675-0b485.svg";
const imgAccentNextStep = "/assets/860-5352-25e8e.svg";

export default function JoinV2() {
  return (
    <div className="d-694ba46bf0" data-node-id="860:5352" data-name="Join v2">
      <p className="d-ecc7601611" data-node-id="860:5353">
        AWS STUDENT COMMUNITY DAY / YOUR NEXT CHAPTER
      </p>
      <div className="d-f6a18c13f5" data-node-id="860:5354">
        <p className="d-c104b2dca3">{`LET'S BUILD`}</p>
        <p className="d-307cc96bda">SOMETHING.</p>
      </div>
      <div className="d-4b4a9cddd4" data-node-id="860:5355" data-name="Final actions">
        <SiteLink hoverTone="cyan" buttonTone="navy" className="d-2646a57d26" data-node-id="860:5356" data-name="Button / Flat" href={"/registration"}>
          <p className="d-7a0f1f17eb" data-node-id="I860:5356;5:30">
            Registration info
          </p>
          <div className="d-4725149c0e" data-node-id="I860:5356;15:32" data-name="Arrow">
            <img alt="" className="d-511e8f31d4" src={imgArrow} />
          </div>
        </SiteLink>
        <p className="d-4a2ed4174e" data-node-id="860:5357">
          REGISTRATION DETAILS COMING SOON
        </p>
      </div>
      <div className="d-2b9b55c96b" data-node-id="860:5358" data-name="Accent / Next step">
        <img alt="" className="d-511e8f31d4" src={imgAccentNextStep} />
      </div>
    </div>
  );
}
