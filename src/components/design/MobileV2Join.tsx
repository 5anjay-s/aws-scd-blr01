import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 866:8622.
const imgArrow = "/assets/865-7675-0b485.svg";
const imgAccentNextStep = "/assets/866-8622-12ae5.svg";

export default function MobileV2Join() {
  return (
    <div className="d-f171da553e" data-node-id="866:8622" data-name="Mobile v2 / Join">
      <p className="d-ffa7ca0278" data-node-id="866:8623">
        AWS STUDENT COMMUNITY DAY / YOUR NEXT CHAPTER
      </p>
      <div className="d-2aab9adaef" data-node-id="866:8624">
        <p className="d-c104b2dca3">{`LET'S BUILD`}</p>
        <p className="d-307cc96bda">SOMETHING.</p>
      </div>
      <SiteLink hoverTone="cyan" buttonTone="navy" className="d-dfc8001d8b" data-node-id="866:8625" data-name="Button / Flat" href={"/registration"}>
        <p className="d-7a0f1f17eb" data-node-id="I866:8625;5:30">
          Registration info
        </p>
        <div className="d-4725149c0e" data-node-id="I866:8625;15:32" data-name="Arrow">
          <img alt="" className="d-511e8f31d4" src={imgArrow} />
        </div>
      </SiteLink>
      <p className="d-ffa7ca0278" data-node-id="866:8626">
        REGISTRATION DETAILS COMING SOON
      </p>
      <div className="d-551a84cf78" data-node-id="866:8627" data-name="Accent / Next step">
        <img alt="" className="d-511e8f31d4" src={imgAccentNextStep} />
      </div>
    </div>
  );
}
