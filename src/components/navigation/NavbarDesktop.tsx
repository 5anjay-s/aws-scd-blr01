const imgArrow = "/assets/desktop/arrow.svg";
type ButtonFlatProps = {
  className?: string;
  label?: string;
  state?: "Default";
};
function ButtonFlat({ className, label = "Registration info" }: ButtonFlatProps) {
  return (
    <div className={className || "bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative"} data-node-id="5:29">
      <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="5:30">
        {label}
      </p>
      <div className="relative shrink-0 size-[22px]" data-node-id="15:32" data-name="Arrow">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
      </div>
    </div>
  );
}
export default function NavbarDesktop() {
  return (
    <div className="bg-[var(--navy,#0b1020)] col-1 content-stretch flex h-[80px] items-center justify-between ml-0 mt-0 px-[48px] relative row-1 w-[1439px]" data-node-id="860:4980" data-name="Navigation v2">
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--white,#f8fafc)] w-[360px]" data-node-id="860:4981">
                aws / STUDENT COMMUNITY DAY
              </p>
              <div className="[word-break:break-word] content-stretch cursor-pointer flex font-['Geist_Mono'] font-normal h-[80px] items-center justify-between leading-[0] relative shrink-0 text-[14px] text-[color:var(--white,#f8fafc)] text-left w-[644px] whitespace-nowrap" data-node-id="860:4982" data-name="Nav links v2">
                <button className="block relative shrink-0" data-node-id="860:4983">
                  <p>
                    <span className="leading-[1.5] text-[#22d3ee]">01</span>
                    <span className="leading-[1.5]">{` Experience`}</span>
                  </p>
                </button>
                <button className="block relative shrink-0" data-node-id="860:4984">
                  <p>
                    <span className="leading-[1.5] text-[#22d3ee]">02</span>
                    <span className="leading-[1.5]">{` Program`}</span>
                  </p>
                </button>
                <button className="block relative shrink-0" data-node-id="860:4985">
                  <p>
                    <span className="leading-[1.5] text-[#22d3ee]">03</span>
                    <span className="leading-[1.5]">{` Speakers`}</span>
                  </p>
                </button>
                <button className="block relative shrink-0" data-node-id="860:4986">
                  <p>
                    <span className="leading-[1.5] text-[#22d3ee]">04</span>
                    <span className="leading-[1.5]">{` Community`}</span>
                  </p>
                </button>
                <button className="block relative shrink-0" data-node-id="860:4987">
                  <p>
                    <span className="leading-[1.5] text-[#22d3ee]">05</span>
                    <span className="leading-[1.5]">{` Manifesto`}</span>
                  </p>
                </button>
              </div>
              <ButtonFlat className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0" />
              <div className="absolute left-[16px] size-[24px] top-[28px]" data-node-id="860:4989" data-name="AWS / Program icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/desktop/aws-program-icon.svg"} />
              </div>
              <div className="absolute h-[4px] left-[48px] top-[76px] w-[240px]" data-node-id="860:4995" data-name="Palette signal rule">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/desktop/palette-signal-rule.svg"} />
              </div>
            </div>
  );
}
