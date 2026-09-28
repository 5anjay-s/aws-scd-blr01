import { SiteLink } from "../SiteLink";
// Source: Figma 00/ Final, node 866:8605.
const imgFaqMobilePixelConversation = "/assets/866-8605-491b7.svg";

export default function MobileV2FaqGoodQuestions() {
  return (
    <div className="d-da7a5ba9f0" data-node-id="866:8605" data-name="Mobile v2 / FAQ — Good questions">
      <p className="d-a4a5347c5b" data-node-id="866:8606">
        FAQ / BEFORE WE BUILD
      </p>
      <div className="d-9a1e0cb833" data-node-id="866:8607">
        <p className="d-bc82ff3714">GOOD</p>
        <p className="d-5cecc0ef37">QUESTIONS.</p>
      </div>
      <p className="d-292ad79add" data-node-id="866:8608">
        A little clarity before the big day.
      </p>
      <p className="d-c509c55bf1" data-node-id="1171:590">
        A few things to know before we build together.
      </p>
      <div className="d-5f10091e3c" data-node-id="866:8609" data-name="FAQ / Mobile pixel conversation">
        <img alt="" className="d-511e8f31d4" src={imgFaqMobilePixelConversation} />
      </div>
      <SiteLink href="/faq" className="faq-preview-link" buttonTone="orange" hoverTone="cyan">
        Read all questions <img src="/assets/865-7675-207b4.svg" width="22" height="22" alt="" />
      </SiteLink>
    </div>
  );
}
