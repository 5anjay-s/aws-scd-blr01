import { SignalStitch } from "../SignalStitch";
import { useRef } from "react";
import { ScrollSpark } from "../ScrollSpark";
import { RevaIntroduction } from "../RevaBrand";
import { mainDay } from "../../content/event";
// Source: Figma 00/ Final, node 1168:492.
const imgAccentSignalStitch = "/assets/1168-492-58d8d.svg";
const imgAccentCuriositySpark = "/assets/1168-492-892aa.svg";
const imgSectionDividerApprovedPixelDither = "/assets/1168-492-106e5.svg";

export default function MobileIntroDesktopAligned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={sectionRef} className="d-0b16a12d9f" data-node-id="1168:492" data-name="Mobile / intro — Desktop aligned">
      <div className="d-0f22abb004" data-node-id="1169:600" data-name="Introduction / First hello">
        <p className="d-5033b1068e" data-node-id="1169:601">
          01 / ABOUT THE EVENT
        </p>
        <div className="d-3cb557109e" data-node-id="1169:602">
          <p className="d-6ee5fa6884">Two tracks.</p>
          <p className="d-6ee5fa6884">One community.</p>
          <p className="d-6ee5fa6884">Built for</p>
          <p className="d-f42ae1416f">you.</p>
        </div>
        <RevaIntroduction />
        <div className="d-8d53dae494" data-node-id="1169:604" data-name="Accent / Signal stitch">
          <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentSignalStitch} />
        </div>
        <div className="d-9973ee015d" data-node-id="1169:609" data-name="Introduction / Make room">
          <p className="d-5033b1068e" data-node-id="1169:610">
            WHAT TO EXPECT
          </p>
          <div className="d-f6b8f3f4a8" data-node-id="1169:611" data-name="Introduction / Skills, ideas, people">
            <div className="d-1a81c67be5" data-node-id="1169:612">
              <p className="d-27cc6eebfe">{`01  AWS SESSIONS`}</p>
              <p className="d-27cc6eebfe">{`02  WORKSHOPS`}</p>
              <p className="d-b4067b5592">{`03  NETWORKING`}</p>
            </div>
            <div className="d-da41aa16e6" data-node-id="1169:613" data-name="Accent / Curiosity spark">
              <ScrollSpark sectionRef={sectionRef} alt="" className="d-511e8f31d4" src={imgAccentCuriositySpark} />
            </div>
          </div>
          <div className="d-b4110922e2" data-node-id="1169:617">
            <p className="event-about-description">{mainDay.about}</p>
          </div>
        </div>
      </div>
      <div className="d-d2efcd5d06" data-node-id="1169:618" data-name="Divider / Introduction → Chapters — Mobile">
        <div className="d-457cc0365c pixel-border pixel-border-paper-black" data-node-id="1169:619" data-name="Section divider / Approved pixel dither">
          <img alt="" className="d-511e8f31d4" src={imgSectionDividerApprovedPixelDither} />
        </div>
      </div>
    </div>
  );
}
