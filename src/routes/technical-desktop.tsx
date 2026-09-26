const assetPathPrefix = "/figma/routes/technical-desktop";
const imgScdTechnicalCompileBrackets = `${assetPathPrefix}/7e810.svg`;
const imgArrow = `${assetPathPrefix}/207b4.svg`;
const imgAwsProgramIcon = `${assetPathPrefix}/cacc0.svg`;
const imgPaletteSignalRule = `${assetPathPrefix}/62b04.svg`;
const imgArrow1 = `${assetPathPrefix}/7e471.svg`;
const imgSectionDividerPreparationToContinue = `${assetPathPrefix}/fb0a8.svg`;
const imgAccentPixelStitch = `${assetPathPrefix}/7bab5.svg`;

function ScdTechnicalCompileBrackets({ className }: { className?: string }) {
  return (
    <div className={className || "h-[336px] relative w-[832px]"} data-node-id="666:2087" data-name="SCD / Technical / Compile brackets">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgScdTechnicalCompileBrackets} />
    </div>
  );
}

type ButtonFlatProps = {
  className?: string;
  label?: string;
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

export default function TechnicalDesktop() {
  return (
    <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start relative size-full" data-node-id="874:8915" data-name="Technical — Desktop">
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex h-[80px] items-center justify-between px-[48px] relative shrink-0 w-[1440px]" data-node-id="874:8916" data-name="Navigation v2">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--white,#f8fafc)] w-[440px]" data-node-id="874:8917">
          aws / STUDENT COMMUNITY DAY
        </p>
        <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] h-[80px] items-center justify-between leading-[0] relative shrink-0 text-[14px] text-[color:var(--cyan,#22d3ee)] w-[524px]" data-node-id="874:8918" data-name="Nav links v2">
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:8919">
            <p className="leading-[1.5]">01 Tracks</p>
          </div>
          <button className="cursor-pointer flex flex-col h-[44px] justify-center relative shrink-0 text-left w-[112px]" data-node-id="874:8920">
            <p className="leading-[1.5]">02 Technical</p>
          </button>
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:8921">
            <p className="leading-[1.5]">03 Non-tech</p>
          </div>
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:8922">
            <p className="leading-[1.5]">04 Timeline</p>
          </div>
        </div>
        <ButtonFlat className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0" />
        <div className="absolute left-[16px] size-[24px] top-[28px]" data-node-id="874:8924" data-name="AWS / Program icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAwsProgramIcon} />
        </div>
        <div className="absolute h-[4px] left-[48px] top-[76px] w-[240px]" data-node-id="874:8930" data-name="Palette signal rule">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaletteSignalRule} />
        </div>
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:8935" data-name="Technical / Hero — Desktop">
        <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-48,48px)] items-start justify-between leading-[18px] relative shrink-0 text-[12px] w-[1344px]" data-node-id="874:8936" data-name="Hero / Index">
          <p className="relative shrink-0 text-[color:var(--white,#f8fafc)] w-[480px]" data-node-id="874:8937">
            ← ALL EXPERIENCES
          </p>
          <p className="relative shrink-0 text-[color:var(--cyan,#22d3ee)] w-[600px]" data-node-id="874:8938">
            01 / TECHNICAL — PROGRAMME PREVIEW
          </p>
        </div>
        <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[96px] text-[color:var(--white,#f8fafc)] tracking-[-3.84px] w-[1344px]" data-node-id="874:8939">
          <p className="leading-[102px] mb-0">IDEAS INTO</p>
          <p className="leading-[102px]">ACTION.</p>
        </div>
        <div className="content-stretch flex gap-[var(--space-48,48px)] items-center relative shrink-0 w-[1344px]" data-node-id="874:8940" data-name="Hero / Compile and introduction">
          <ScdTechnicalCompileBrackets className="h-[336px] relative shrink-0 w-[832px]" />
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[464px]" data-node-id="874:8942" data-name="Hero / Technical introduction">
            <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[26px] text-[color:var(--white,#f8fafc)] tracking-[-1.04px] w-[464px]" data-node-id="874:8943">
              <p className="leading-[28px] mb-0">CURIOUS MINDS.</p>
              <p className="leading-[28px]">REAL POSSIBILITIES.</p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[27px] relative shrink-0 text-[18px] text-[color:var(--white,#f8fafc)] w-[464px]" data-node-id="874:8944">
              Get closer to the cloud. Explore AI. Turn your curiosity into something you can build.
            </p>
            <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[288px]" data-node-id="874:8945" data-name="Action / Registration info">
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:8945;5:30">
                Registration info
              </p>
              <div className="relative shrink-0 size-[22px]" data-node-id="I874:8945;15:32" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
              </div>
            </div>
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--cyan,#22d3ee)] w-[464px]" data-node-id="874:8946">
              <p className="leading-[17px] mb-0">SESSIONS + SPEAKERS + TIMINGS</p>
              <p className="leading-[17px]">TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-node-id="874:8947" data-name="Technical / Programme — Desktop">
        <div className="[word-break:break-word] bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-48,48px)] items-end p-[var(--space-48,48px)] relative shrink-0 text-[color:var(--white,#f8fafc)] w-[1440px]" data-node-id="874:8948" data-name="Programme / Introduction">
          <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[48px] tracking-[-1.92px] w-[832px]" data-node-id="874:8949">
            <p className="leading-[51px] mb-0">THREE WAYS</p>
            <p className="leading-[51px]">TO GO DEEPER.</p>
          </div>
          <p className="font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[16px] w-[464px]" data-node-id="874:8950">
            A first look at the technical themes. The final line-up, formats and timings will be announced.
          </p>
        </div>
        <div className="content-stretch flex items-start relative shrink-0 w-[1440px]" data-node-id="874:8951" data-name="Programme / Three theme fields">
          <div className="bg-[var(--cyan,#22d3ee)] content-stretch flex flex-col gap-[var(--space-24,24px)] h-[560px] items-start p-[var(--space-48,48px)] relative shrink-0 w-[480px]" data-node-id="874:8952" data-name="SCD / Technical / Theme panel / Desktop">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8952;667:2541">
              01 / CLOUD FOUNDATIONS
            </p>
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[68px] relative shrink-0 text-[64px] text-[color:var(--navy,#0b1020)] tracking-[-2.56px] w-[384px]" data-node-id="I874:8952;667:2542">
              CLOUD
            </p>
            <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[384px]" data-node-id="I874:8952;667:2543" data-name="Theme / Rule" />
            <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[28px] text-[color:var(--navy,#0b1020)] tracking-[-1.12px] w-[384px]" data-node-id="I874:8952;667:2544">
              <p className="leading-[30px] mb-0">Understand</p>
              <p className="leading-[30px]">the cloud.</p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[16px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8952;667:2545">
              Explore the building blocks behind cloud technology — and how they can become the starting point for your next idea.
            </p>
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8952;667:2546">
              <p className="leading-[17px] mb-0">FORMAT + SPEAKER</p>
              <p className="leading-[17px]">TO BE ANNOUNCED</p>
            </div>
          </div>
          <div className="bg-[var(--white,#f8fafc)] content-stretch flex flex-col gap-[var(--space-24,24px)] h-[560px] items-start p-[var(--space-48,48px)] relative shrink-0 w-[480px]" data-node-id="874:8953" data-name="Theme / AI">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8953;667:2541">
              02 / AI EXPLORATION
            </p>
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[68px] relative shrink-0 text-[64px] text-[color:var(--navy,#0b1020)] tracking-[-2.56px] w-[384px]" data-node-id="I874:8953;667:2542">
              AI
            </p>
            <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[384px]" data-node-id="I874:8953;667:2543" data-name="Theme / Rule" />
            <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[28px] text-[color:var(--navy,#0b1020)] tracking-[-1.12px] w-[384px]" data-node-id="I874:8953;667:2544">
              <p className="leading-[30px] mb-0">Ask what</p>
              <p className="leading-[30px]">AI can do.</p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[16px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8953;667:2545">
              Follow your questions into the world of AI. Explore the ideas and tools that are opening up new ways to create.
            </p>
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--navy,#0b1020)] w-[384px]" data-node-id="I874:8953;667:2546">
              <p className="leading-[17px] mb-0">FORMAT + SPEAKER</p>
              <p className="leading-[17px]">TO BE ANNOUNCED</p>
            </div>
          </div>
          <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-24,24px)] h-[560px] items-start p-[var(--space-48,48px)] relative shrink-0 w-[480px]" data-node-id="874:8954" data-name="Theme / BUILD">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--cyan,#22d3ee)] w-[384px]" data-node-id="I874:8954;667:2541">
              03 / HANDS-ON BUILDING
            </p>
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[68px] relative shrink-0 text-[64px] text-[color:var(--cyan,#22d3ee)] tracking-[-2.56px] w-[384px]" data-node-id="I874:8954;667:2542">
              BUILD
            </p>
            <div className="bg-[var(--cyan,#22d3ee)] h-px relative shrink-0 w-[384px]" data-node-id="I874:8954;667:2543" data-name="Theme / Rule" />
            <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[28px] text-[color:var(--white,#f8fafc)] tracking-[-1.12px] w-[384px]" data-node-id="I874:8954;667:2544">
              <p className="leading-[30px] mb-0">Make the</p>
              <p className="leading-[30px]">next move.</p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[16px] text-[color:var(--white,#f8fafc)] w-[384px]" data-node-id="I874:8954;667:2545">
              Connect what you learn with what you want to make. Explore tools, experiment with ideas and discover your next project.
            </p>
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--white,#f8fafc)] w-[384px]" data-node-id="I874:8954;667:2546">
              <p className="leading-[17px] mb-0">FORMAT + SPEAKER</p>
              <p className="leading-[17px]">TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--white,#f8fafc)] content-stretch flex gap-[var(--space-48,48px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:8955" data-name="Technical / Preparation — Desktop">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[720px]" data-node-id="874:8956" data-name="Preparation / Invitation">
          <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[720px]" data-node-id="874:8957">
            BEFORE YOU JOIN
          </p>
          <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[48px] tracking-[-1.92px] w-[720px]" data-node-id="874:8958">
            <p className="leading-[51px] mb-0">BRING YOUR</p>
            <p className="leading-[51px]">NEXT QUESTION.</p>
          </div>
          <p className="font-['Geist_Mono'] font-normal leading-[26px] relative shrink-0 text-[17px] w-[672px]" data-node-id="874:8959">
            Curious about cloud, AI or building with new tools? Keep that curiosity close. Preparation details will follow with the final programme.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[576px]" data-node-id="874:8960" data-name="Preparation / Details">
          <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[576px]" data-node-id="874:8961" data-name="Preparation / EXPERIENCE LEVEL">
            <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[576px]" data-node-id="874:8962" data-name="Rule" />
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8963">
              EXPERIENCE LEVEL
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[23px] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8964">
              TO BE ANNOUNCED
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[576px]" data-node-id="874:8965" data-name="Preparation / EQUIPMENT + SETUP">
            <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[576px]" data-node-id="874:8966" data-name="Rule" />
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8967">
              EQUIPMENT + SETUP
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[23px] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8968">
              TO BE ANNOUNCED
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[576px]" data-node-id="874:8969" data-name="Preparation / SESSION ACCESS">
            <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[576px]" data-node-id="874:8970" data-name="Rule" />
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8971">
              SESSION ACCESS
            </p>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[23px] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:8972">
              TO BE ANNOUNCED
            </p>
          </div>
          <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[288px]" data-node-id="874:8973" data-name="Action / Registration info">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:8973;5:30">
              Registration info
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:8973;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[108px] relative shrink-0 w-full" data-node-id="1413:622" data-name="Section divider / Preparation to continue">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSectionDividerPreparationToContinue} />
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-48,48px)] items-center p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:8974" data-name="Technical / Continue — Desktop">
        <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start relative shrink-0 w-[784px]" data-node-id="874:8975" data-name="Continue / Copy">
          <div className="h-[24px] relative shrink-0 w-[144px]" data-node-id="874:8976" data-name="Accent / Pixel stitch">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAccentPixelStitch} />
          </div>
          <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[40px] text-[color:var(--white,#f8fafc)] tracking-[-1.6px] w-[784px]" data-node-id="874:8981">
            <p className="leading-[42px] mb-0">A DIFFERENT</p>
            <p className="leading-[42px]">KIND OF SPARK.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start relative shrink-0 w-[512px]" data-node-id="874:8982" data-name="Continue / Actions">
          <div className="bg-[var(--violet,#a78bfa)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[352px]" data-node-id="874:8983" data-name="Action / Explore non-technical">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:8983;5:30">
              Explore non-technical
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:8983;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
            </div>
          </div>
          <div className="bg-[var(--white,#f8fafc)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[352px]" data-node-id="874:8984" data-name="Action / View event timeline">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:8984;5:30">
              View event timeline
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:8984;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
