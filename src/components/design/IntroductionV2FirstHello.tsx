import { SignalStitch } from "../SignalStitch";
import { useRef } from "react";
import { ScrollSpark } from "../ScrollSpark";
// Source: Figma 00/ Final, node 860:5073.
const imgAccentSignalStitch = "/assets/860-5073-978e7.svg";
const imgAccentCuriositySpark = "/assets/860-5073-2287b.svg";
const imgIntroductionNavyPixelDitherTransition = "/assets/860-5073-1f258.svg";

export default function IntroductionV2FirstHello() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={sectionRef} className="d-08672ea209" data-node-id="860:5073" data-name="Introduction v2 / First hello">
      <p className="d-ecc7601611" data-node-id="860:5074">
        01 / A DAY TO START SOMETHING
      </p>
      <div className="d-ed4f3c98ce" data-node-id="860:5075" data-name="Manifesto editorial grid">
        <div className="d-d07aec3805" data-node-id="860:5076" data-name="Manifesto statement">
          <div className="d-14adb7d251" data-node-id="860:5077">
            <p className="d-c104b2dca3">Two tracks.</p>
            <p className="d-c104b2dca3">One community.</p>
            <p className="d-307cc96bda">Built for you.</p>
          </div>
        </div>
        <div className="d-6fb5331839" data-node-id="860:5079" data-name="Contents column">
          <p className="d-f0204e8f54" data-node-id="860:5080">
            MAKE ROOM FOR
          </p>
          <div className="d-cdf3a5a00c" data-node-id="860:5081">
            <p className="d-7519be8e79">{`01  NEW SKILLS`}</p>
            <p className="d-7519be8e79">{`02  BIG IDEAS`}</p>
            <p className="d-95907800fd">{`03  YOUR PEOPLE`}</p>
          </div>
          <div className="d-071c001b1a" data-node-id="860:5082">
            <p className="event-about-description">Sessions and workshops from AWS, OpenAI Student Collective and MongoDB, with non-technical sessions on the main day.</p>
          </div>
        </div>
      </div>
      <div className="d-781e95fd9c" data-node-id="860:5083" data-name="Accent / Signal stitch">
        <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentSignalStitch} />
      </div>
      <div className="d-aa89e67844" data-node-id="860:5084" data-name="Accent / Curiosity spark">
        <ScrollSpark sectionRef={sectionRef} alt="" className="d-511e8f31d4" src={imgAccentCuriositySpark} />
      </div>
      <div className="d-a5552b1cea pixel-border pixel-border-paper-navy" data-node-id="920:3377" data-name="Introduction / Navy pixel-dither transition">
        <img alt="" className="d-511e8f31d4" src={imgIntroductionNavyPixelDitherTransition} />
      </div>
    </div>
  );
}
