import { SpinningSpark } from "../SpinningSpark";
import { useState } from "react";
import { WovenRibbon } from "../WovenRibbon";
import { BuildBrackets } from "../BuildBrackets";

// Source: Figma 00/ Final, node 860:5085.
const imgAccentCuriositySpark = "/assets/860-5073-2287b.svg";
const imgAccentDitherCorner = "/assets/860-5085-cefb3.svg";
const imgCodeOpenBrackets = "/assets/860-5085-96238.svg";
const imgAccentWovenLinks = "/assets/1160-5759-305fd.svg";

export default function ChaptersV2() {
  const [belongHovered, setBelongHovered] = useState(false);

  return (
    <div className="d-02422be0a0" data-node-id="860:5085" data-name="Chapters v2">
      <p className="d-68e036c5e8" data-node-id="860:5086">
        02 / LEARN. BUILD. BELONG.
      </p>
      <div className="d-4311b644bc" data-node-id="860:5087" data-name="Chapter bands">
        <div className="d-a726e4814d learn-chapter" data-node-id="860:5088" data-name="LEARN / Chapter">
          <p className="d-c2239665a9" data-node-id="860:5089">
            LEARN
          </p>
          <div className="d-d63733e482" data-node-id="860:5090">
            <p className="d-7519be8e79">Follow your curiosity.</p>
            <p className="d-7519be8e79">Explore ideas in cloud, AI,</p>
            <p className="d-95907800fd">and the tools shaping what is next.</p>
          </div>
          <div className="d-6970dad1f2" data-node-id="860:5091" data-name="Accent / Curiosity spark">
            <SpinningSpark alt="" className="d-511e8f31d4 curiosity-spark-spin" src={imgAccentCuriositySpark} />
          </div>
          <div className="d-820b371f2c" data-node-id="860:5092" data-name="Accent / Dither corner">
            <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
          </div>
        </div>
        <div className="d-d627b40ab8 build-chapter" data-node-id="860:5093" data-name="BUILD / Chapter">
          <p className="d-c2239665a9" data-node-id="860:5094">
            BUILD
          </p>
          <div className="d-d63733e482" data-node-id="860:5095">
            <p className="d-7519be8e79">Move from what-if to what-next.</p>
            <p className="d-7519be8e79">Experiment, ask better questions,</p>
            <p className="d-95907800fd">and put your ideas in motion.</p>
          </div>
          <div className="d-6970dad1f2" data-node-id="860:5096" data-name="Accent / Code brackets">
            <div className="d-d36c51b6da" data-node-id="I860:5096;114:44" data-name="Code / Open brackets">
              <BuildBrackets className="d-511e8f31d4" src={imgCodeOpenBrackets} />
            </div>
          </div>
          <div className="d-820b371f2c" data-node-id="860:5097" data-name="Accent / Dither corner">
            <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
          </div>
        </div>
        <div className="d-3ba6babcbf" data-node-id="860:5098" data-name="BELONG / Chapter"
          onPointerEnter={event => event.pointerType !== 'touch' && setBelongHovered(true)}
          onPointerLeave={() => setBelongHovered(false)}
          onPointerCancel={() => setBelongHovered(false)}>
          <p className="d-c2239665a9" data-node-id="860:5099">
            BELONG
          </p>
          <div className="d-d63733e482" data-node-id="860:5100">
            <p className="d-7519be8e79">Find the people who get it.</p>
            <p className="d-7519be8e79">Share what you know. Make room</p>
            <p className="d-95907800fd">for what you will build together.</p>
          </div>
          <div className="d-e3c7471651" data-node-id="860:5101" data-name="Accent / Woven links">
            <WovenRibbon alt="" className="d-511e8f31d4" src={imgAccentWovenLinks} active={belongHovered} />
          </div>
          <div className="d-820b371f2c" data-node-id="860:5102" data-name="Accent / Dither corner">
            <img alt="" className="d-511e8f31d4" src={imgAccentDitherCorner} />
          </div>
        </div>
      </div>
      <p className="d-dd3d36d64b" data-node-id="860:5103">
        PROGRAM + SPEAKER DETAILS / COMING SOON
      </p>
    </div>
  );
}
