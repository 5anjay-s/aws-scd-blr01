export default function NavbarMobile() {
  return (
    <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-24,24px)] h-[80px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[390px]" data-node-id="1169:507" data-name="Navigation / Mobile">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[238px]" data-node-id="1169:508" data-name="Navigation / Brand">
                <div className="relative shrink-0 size-[20px]" data-node-id="1169:509" data-name="AWS / Program icon">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/mobile/aws-program-icon.svg"} />
                </div>
                <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--white,#f8fafc)] w-[206px]" data-node-id="1169:515">
                  <p className="leading-[16px] mb-0">aws / STUDENT</p>
                  <p className="leading-[16px]">COMMUNITY DAY</p>
                </div>
              </div>
              <button className="content-stretch cursor-pointer flex flex-col h-[44px] items-start justify-center relative shrink-0 w-[80px]" data-node-id="1169:516" data-name="Navigation / Explore">
                <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--cyan,#22d3ee)] text-right w-[80px]" data-node-id="1169:517">
                  Explore
                </p>
              </button>
              <div className="absolute h-[2px] left-[24px] top-[78px] w-[120px]" data-node-id="1169:518" data-name="Palette signal rule">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/assets/mobile/palette-signal-rule.svg"} />
              </div>
            </div>
  );
}
