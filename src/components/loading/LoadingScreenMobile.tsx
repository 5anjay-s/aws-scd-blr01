import { motion } from "motion/react";

type LoadingScreenProps = { onEnter: () => void };

export default function LoadingScreenMobile({ onEnter }: LoadingScreenProps) {
  return (
    <div className="bg-[var(--cyan,#22d3ee)] h-[844px] overflow-clip relative shrink-0 w-[390px]" data-node-id="866:8315" data-name="Loading / Cloud v2 — Cloud clearing — Mobile">
            <div className="absolute h-[844px] left-0 top-0 w-[390px]" data-node-id="866:8316" data-name="Static sky / mobile dither field">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/mobile/static-sky-mobile-dither-field.svg"} />
            </div>
            <div className="[word-break:break-word] absolute content-stretch flex font-['Geist_Mono'] font-normal h-[46px] items-center justify-between left-[24px] overflow-clip text-[color:var(--navy,#0b1020)] top-[32px] w-[342px]" data-node-id="866:8318" data-name="Cloud Clearing / Mobile header">
              <div className="h-[32px] leading-[0] relative shrink-0 text-[10px] w-[232px]" data-node-id="866:8319">
                <p className="leading-[13px] mb-0">aws / STUDENT</p>
                <p className="leading-[13px]">COMMUNITY DAY</p>
              </div>
              <p className="h-[20px] leading-[12px] relative shrink-0 text-[9px] text-right w-[100px]" data-node-id="866:8320">
                LOADING THE DAY
              </p>
            </div>
            <div className="absolute h-[148px] left-[53px] top-[276px] w-[284px]" data-node-id="866:8321" data-name="AWS / Pixel logo">
              <div className="absolute inset-[0_0_-6.76%_0]">
                <img alt="" className="block max-w-none size-full" src={"/assets/mobile/aws-pixel-logo.svg"} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[12px] h-[132px] items-center left-[24px] overflow-clip top-[466px] w-[342px]" data-node-id="866:8324" data-name="Loading / Mobile status">
              <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium h-[60px] leading-[0] relative shrink-0 text-[23px] text-[color:var(--navy,#0b1020)] text-center w-[342px]" data-node-id="866:8325">
                <p className="leading-[30px] mb-0">STUDENT</p>
                <p className="leading-[30px]">COMMUNITY DAY</p>
              </div>
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal h-[16px] leading-[12px] relative shrink-0 text-[9px] text-[color:var(--navy,#0b1020)] text-center w-[342px]" data-node-id="866:8326">
                OPENING A WORLD OF POSSIBILITIES
              </p>
              <div className="bg-[var(--navy,#0b1020)] h-[3px] overflow-clip relative shrink-0 w-[192px]" data-node-id="866:8327" data-name="Loading / Activity track">
                <motion.div className="absolute bg-[var(--orange,#f90)] h-[3px] left-[64px] top-0 w-[48px]" data-node-id="866:8332" data-name="Loading / Orange activity segment" data-figma-motion="translate" initial={{ x: -112 }} animate={{ x: [-112, 128, 128, -112, -112] }} transition={{ x: { duration: 12, times: [0, 0.15, 0.1666, 0.1667, 1], ease: "linear", repeat: Infinity } }} />
              </div>
            </div>
              <button className="absolute bg-[var(--navy,#0b1020)] content-stretch cursor-pointer flex h-[48px] items-center justify-center left-[24px] overflow-clip top-[752px] w-[342px]" data-node-id="866:8333" data-name="Enter the day / Mobile" onClick={onEnter}>
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal h-[20px] leading-[16px] relative shrink-0 text-[12px] text-[color:var(--white,#f8fafc)] text-center w-[294px]" data-node-id="866:8334">
                ENTER THE DAY ↗
              </p>
            </button>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[16px] left-[195px] text-[10px] text-[color:var(--navy,#0b1020)] text-center top-[724px] w-[342px]" data-node-id="1171:580">
              A NEW DAY FOR THE NEXT WAVE OF BUILDERS.
            </p>
          </div>
  );
}
