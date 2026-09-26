import { motion } from "motion/react";

type LoadingScreenProps = { onEnter: () => void };

export default function LoadingScreenDesktop({ onEnter }: LoadingScreenProps) {
  return (
    <div className="bg-[var(--cyan,#22d3ee)] h-[900px] overflow-clip relative shrink-0 w-[1440px]" data-node-id="860:4959" data-name="Loading">
            <div className="absolute h-[900px] left-0 top-0 w-[1440px]" data-node-id="860:4960" data-name="Static sky / full-bleed dither field">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/desktop/static-sky-full-bleed-dither-field.svg"} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex font-['Geist_Mono'] font-normal h-[48px] items-center justify-between left-[64px] overflow-clip text-[color:var(--navy,#0b1020)] top-[48px] w-[1312px]" data-node-id="860:4962" data-name="Cloud Clearing / Header">
              <p className="h-[20px] leading-[17px] relative shrink-0 text-[13px] w-[650px]" data-node-id="860:4963">
                aws / STUDENT COMMUNITY DAY
              </p>
              <p className="h-[20px] leading-[16px] relative shrink-0 text-[12px] text-right w-[400px]" data-node-id="860:4964">
                LOADING THE DAY
              </p>
            </div>
            <div className="absolute h-[296px] left-[436px] top-[242px] w-[568px]" data-node-id="860:4965" data-name="AWS / Pixel logo">
              <div className="absolute inset-[0_0_-6.76%_0]">
                <img alt="" className="block max-w-none size-full" src={"/assets/desktop/aws-pixel-logo.svg"} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[14px] h-[130px] items-center left-[420px] overflow-clip top-[558px] w-[600px]" data-node-id="860:4968" data-name="Loading / Centered status">
              <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium h-[34px] leading-[34px] relative shrink-0 text-[26px] text-[color:var(--navy,#0b1020)] text-center w-[600px]" data-node-id="860:4969">
                STUDENT COMMUNITY DAY
              </p>
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal h-[20px] leading-[16px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] text-center w-[600px]" data-node-id="860:4970">
                OPENING A WORLD OF POSSIBILITIES
              </p>
              <div className="bg-[var(--navy,#0b1020)] h-[4px] overflow-clip relative shrink-0 w-[240px]" data-node-id="860:4971" data-name="Loading / Activity track">
                <motion.div className="absolute bg-[var(--orange,#f90)] h-[4px] left-[88px] top-0 w-[64px]" data-node-id="860:4976" data-name="Loading / Orange activity segment" data-figma-motion="translate" initial={{ x: -152 }} animate={{ x: [-152, 152, 152, -152, -152] }} transition={{ x: { duration: 16, times: [0, 0.1125, 0.1249, 0.125, 1], ease: "linear", repeat: Infinity } }} />
              </div>
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex font-['Geist_Mono'] font-normal h-[48px] items-center justify-between left-[64px] overflow-clip text-[color:var(--navy,#0b1020)] top-[808px] w-[1312px]" data-node-id="860:4977" data-name="Cloud Clearing / Footer">
              <p className="h-[22px] leading-[16px] relative shrink-0 text-[12px] w-[780px]" data-node-id="860:4978">
                A NEW DAY FOR THE NEXT WAVE OF BUILDERS.
              </p>
              <button className="block cursor-pointer h-[44px] leading-[0] relative shrink-0 text-[13px] text-right w-[240px]" data-node-id="860:4979" onClick={onEnter}>
                <p className="leading-[17px]">ENTER THE DAY ↗</p>
              </button>
            </div>
          </div>
  );
}
