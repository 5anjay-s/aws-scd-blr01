import { SpinningSpark } from "../SpinningSpark";
import { useState } from "react";
import { WovenRibbon } from "../WovenRibbon";
import { BuildBrackets } from "../BuildBrackets";

// Source: Figma 00/ Final, node 1168:493.
const imgAccentCuriositySpark = "/assets/1168-493-2adcd.svg";
const imgAccentDitherCorner = "/assets/1168-493-b4ed3.svg";
const imgCodeOpenBrackets = "/assets/1168-493-fd314.svg";
const imgAccentWovenLinks = "/assets/1168-493-5454f.svg";

export default function MobileChaptersDesktopAligned() {
  const [belongHovered, setBelongHovered] = useState(false);

  return (
    <div className="d-0b16a12d9f" data-node-id="1168:493" data-name="Mobile / chapters — Desktop aligned">
      <div className="d-2a01c6de11" data-node-id="1169:621" data-name="Chapters / Learn, build, belong">
        <p className="d-fe8ebaf1ad" data-node-id="1169:622">
          02 / LEARN. BUILD. BELONG.
        </p>
        <div className="d-954d9bd469 learn-chapter" data-node-id="1169:623" data-name="Chapter / cyan">
          <div className="d-d07a2b00ce" data-node-id="1169:624" data-name="Chapter / Title + symbol">
            <p className="d-2bbbeb5f36" data-node-id="1169:625">
              LEARN
            </p>
            <div className="d-8c43c371bf" data-node-id="1169:626" data-name="Accent / Curiosity spark">
              <SpinningSpark alt="" className="d-511e8f31d4 curiosity-spark-spin" src={imgAccentCuriositySpark} />
            </div>
          </div>
          <p className="d-72c9e63c85" data-node-id="1169:630">
            Follow your curiosity. Explore ideas in cloud, AI, and the tools shaping what is next.
          </p>
          <div className="d-6d96c470ea" data-node-id="1169:631" data-name="Chapter / Print edge">
            <div className="d-662118bfb8" data-node-id="1169:632" data-name="Accent / Dither corner">
              <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
            </div>
          </div>
        </div>
        <div className="d-f860823770 build-chapter" data-node-id="1169:635" data-name="Chapter / orange">
          <div className="d-d07a2b00ce" data-node-id="1169:636" data-name="Chapter / Title + symbol">
            <p className="d-2bbbeb5f36" data-node-id="1169:637">
              BUILD
            </p>
            <div className="d-8c43c371bf" data-node-id="1169:638" data-name="Accent / Code brackets">
              <div className="d-aa549f86dc" data-node-id="I1169:638;114:44" data-name="Code / Open brackets">
                <BuildBrackets className="d-511e8f31d4" src={imgCodeOpenBrackets} />
              </div>
            </div>
          </div>
          <p className="d-72c9e63c85" data-node-id="1169:643">
            Move from what-if to what-next. Experiment, ask better questions, and put your ideas in motion.
          </p>
          <div className="d-6d96c470ea" data-node-id="1169:644" data-name="Chapter / Print edge">
            <div className="d-662118bfb8" data-node-id="1169:645" data-name="Accent / Dither corner">
              <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
            </div>
          </div>
        </div>
        <div className="d-70017498ad" data-node-id="1169:648" data-name="Chapter / violet"
          onPointerEnter={event => event.pointerType !== 'touch' && setBelongHovered(true)}
          onPointerLeave={() => setBelongHovered(false)}
          onPointerCancel={() => setBelongHovered(false)}>
          <div className="d-d07a2b00ce" data-node-id="1169:649" data-name="Chapter / Title + symbol">
            <p className="d-2bbbeb5f36" data-node-id="1169:650">
              BELONG
            </p>
            <div className="d-c7245a1de8" data-node-id="1169:651" data-name="Accent / Woven links">
              <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinks} active={belongHovered} />
            </div>
          </div>
          <p className="d-72c9e63c85" data-node-id="1169:656">
            Find the people who get it. Share what you know. Make room for what you will build together.
          </p>
          <div className="d-6d96c470ea" data-node-id="1169:657" data-name="Chapter / Print edge">
            <div className="d-662118bfb8" data-node-id="1169:658" data-name="Accent / Dither corner">
              <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
            </div>
          </div>
        </div>
        <p className="d-41163dc795" data-node-id="1169:661">
          PROGRAM + SPEAKER DETAILS / COMING SOON
        </p>
      </div>
    </div>
  );
}
