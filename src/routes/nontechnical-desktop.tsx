const assetPathPrefix = "/figma/routes/nontechnical-desktop";
const imgSharedGlyphOpenExchange = `${assetPathPrefix}/c568c.svg`;
const imgArrow = `${assetPathPrefix}/207b4.svg`;
const imgAwsProgramIcon = `${assetPathPrefix}/cacc0.svg`;
const imgPaletteSignalRule = `${assetPathPrefix}/62b04.svg`;
const imgArrow1 = `${assetPathPrefix}/0b485.svg`;
const imgSectionDividerHeroToOpenExchange = `${assetPathPrefix}/fb0a8.svg`;
const imgArrow2 = `${assetPathPrefix}/7e471.svg`;

function ScdArtworkOpenExchangePixelQuotations({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--violet,#a78bfa)] h-[432px] overflow-clip relative w-[568px]"} data-node-id="665:2047" data-name="SCD / Artwork / Open exchange pixel quotations">
      <div className="absolute h-[409.6px] left-[28px] top-[11px] w-[512px]" data-node-id="670:2185" data-name="Shared glyph / Open exchange">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSharedGlyphOpenExchange} />
      </div>
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

export default function NonTechnicalDesktop() {
  return (
    <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start relative size-full" data-node-id="874:9211" data-name="Non-technical — Desktop">
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex h-[80px] items-center justify-between px-[48px] relative shrink-0 w-[1440px]" data-node-id="874:9212" data-name="Navigation v2">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[16px] text-[color:var(--white,#f8fafc)] w-[440px]" data-node-id="874:9213">
          aws / STUDENT COMMUNITY DAY
        </p>
        <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] h-[80px] items-center justify-between leading-[0] relative shrink-0 text-[14px] text-[color:var(--cyan,#22d3ee)] w-[524px]" data-node-id="874:9214" data-name="Nav links v2">
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:9215">
            <p className="leading-[1.5]">01 Tracks</p>
          </div>
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:9216">
            <p className="leading-[1.5]">02 Technical</p>
          </div>
          <button className="cursor-pointer flex flex-col h-[44px] justify-center relative shrink-0 text-left w-[112px]" data-node-id="874:9217">
            <p className="leading-[1.5]">03 Non-tech</p>
          </button>
          <div className="flex flex-col h-[44px] justify-center relative shrink-0 w-[112px]" data-node-id="874:9218">
            <p className="leading-[1.5]">04 Timeline</p>
          </div>
        </div>
        <ButtonFlat className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0" />
        <div className="absolute left-[16px] size-[24px] top-[28px]" data-node-id="874:9220" data-name="AWS / Program icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAwsProgramIcon} />
        </div>
        <div className="absolute h-[4px] left-[48px] top-[76px] w-[240px]" data-node-id="874:9226" data-name="Palette signal rule">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaletteSignalRule} />
        </div>
      </div>
      <div className="bg-[var(--white,#f8fafc)] content-stretch flex flex-col gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9231" data-name="Nontechnical / Beyond the code — Hero">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[1344px]" data-node-id="874:9232">
          02 / NON-TECHNICAL
        </p>
        <div className="content-stretch flex gap-[var(--space-48,48px)] items-start relative shrink-0 w-[1344px]" data-node-id="874:9233" data-name="Hero / Editorial grid">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[728px]" data-node-id="874:9234" data-name="Hero / Narrative">
            <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[88px] text-[color:var(--navy,#0b1020)] tracking-[-3.52px] w-[728px]" data-node-id="874:9235">
              <p className="leading-[93px] mb-0">BEYOND</p>
              <p className="leading-[93px]">THE CODE.</p>
            </div>
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[27px] relative shrink-0 text-[18px] text-[color:var(--navy,#0b1020)] w-[608px]" data-node-id="874:9236">
              Bring your perspective. Explore ideas, meet new people and make room for a different kind of challenge.
            </p>
            <button className="bg-[var(--navy,#0b1020)] content-stretch cursor-pointer flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[312px]" data-node-id="874:9237" data-name="Action / Explore the programme">
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--white,#f8fafc)] text-left whitespace-nowrap" data-node-id="I874:9237;5:30">
                Explore the programme
              </p>
              <div className="relative shrink-0 size-[22px]" data-node-id="I874:9237;15:32" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
              </div>
            </button>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-8,8px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[608px]" data-node-id="874:9238" data-name="Hero / Preview status">
              <p className="leading-[17px] relative shrink-0 text-[11px] w-[608px]" data-node-id="874:9239">
                PROGRAMME PREVIEW
              </p>
              <p className="leading-[21px] relative shrink-0 text-[14px] w-[608px]" data-node-id="874:9240">
                Details to be announced
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start relative shrink-0 w-[568px]" data-node-id="874:9241" data-name="Hero / Open exchange artwork">
            <ScdArtworkOpenExchangePixelQuotations className="bg-[var(--violet,#a78bfa)] h-[432px] overflow-clip relative shrink-0 w-[568px]" />
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[17px] relative shrink-0 text-[11px] text-[color:var(--navy,#0b1020)] w-[568px]" data-node-id="874:9243">
              DIFFERENT MINDS. COMMON GROUND.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[108px] relative shrink-0 w-full" data-node-id="1413:627" data-name="Section divider / Hero to open exchange">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSectionDividerHeroToOpenExchange} />
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-node-id="874:9244" data-name="Nontechnical / Open exchange — Programme">
        <div className="[word-break:break-word] bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-48,48px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9245" data-name="Programme / Introduction">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[648px]" data-node-id="874:9246" data-name="Programme / Heading group">
            <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--lime,#bef264)] w-[648px]" data-node-id="874:9247">
              A PLACE FOR EVERY PERSPECTIVE
            </p>
            <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[56px] text-[color:var(--white,#f8fafc)] tracking-[-2.24px] w-[648px]" data-node-id="874:9248">
              <p className="leading-[59px] mb-0">OPEN</p>
              <p className="leading-[59px]">EXCHANGE.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start pt-[var(--space-48,48px)] relative shrink-0 text-[color:var(--white,#f8fafc)] w-[648px]" data-node-id="874:9249" data-name="Programme / Description group">
            <p className="leading-[27px] relative shrink-0 text-[18px] w-[648px]" data-node-id="874:9250">
              Ideas grow when different people get involved. Here is a preview of the kinds of experiences being explored for the non-technical track.
            </p>
            <p className="leading-[17px] relative shrink-0 text-[11px] w-[648px]" data-node-id="874:9251">
              THEMES BELOW / FORMATS TO BE ANNOUNCED
            </p>
          </div>
        </div>
        <div className="bg-[var(--violet,#a78bfa)] content-stretch flex gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9252" data-name="Programme / 01 COLLABORATE">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[96px]" data-node-id="874:9253" data-name="Chapter / Number">
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[51px] relative shrink-0 text-[48px] text-[color:var(--navy,#0b1020)] tracking-[-1.92px] w-[96px]" data-node-id="874:9254">
              01
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[472px]" data-node-id="874:9255" data-name="Chapter / Topic">
            <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[472px]" data-node-id="874:9256">
              COLLABORATE
            </p>
            <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[40px] tracking-[-1.6px] w-[472px]" data-node-id="874:9257">
              <p className="leading-[42px] mb-0">THINK</p>
              <p className="leading-[42px]">TOGETHER.</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[712px]" data-node-id="874:9258" data-name="Chapter / Details">
            <p className="leading-[26px] relative shrink-0 text-[17px] w-[712px]" data-node-id="874:9259">
              Share a problem, hear a new point of view and work towards a response together. A space for teamwork and clear communication.
            </p>
            <div className="leading-[0] relative shrink-0 text-[11px] w-[712px]" data-node-id="874:9260">
              <p className="leading-[17px] mb-0">TEAMWORK / COMMUNICATION</p>
              <p className="leading-[17px]">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9261" data-name="Programme / 02 IMAGINE">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[96px]" data-node-id="874:9262" data-name="Chapter / Number">
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[51px] relative shrink-0 text-[48px] text-[color:var(--white,#f8fafc)] tracking-[-1.92px] w-[96px]" data-node-id="874:9263">
              02
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--white,#f8fafc)] w-[472px]" data-node-id="874:9264" data-name="Chapter / Topic">
            <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[472px]" data-node-id="874:9265">
              IMAGINE
            </p>
            <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[40px] tracking-[-1.6px] w-[472px]" data-node-id="874:9266">
              <p className="leading-[42px] mb-0">MAKE ROOM</p>
              <p className="leading-[42px]">FOR IDEAS.</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--white,#f8fafc)] w-[712px]" data-node-id="874:9267" data-name="Chapter / Details">
            <p className="leading-[26px] relative shrink-0 text-[17px] w-[712px]" data-node-id="874:9268">
              Look at a familiar challenge from an unexpected angle. Explore creative thinking, shape a concept and make your perspective heard.
            </p>
            <div className="leading-[0] relative shrink-0 text-[11px] w-[712px]" data-node-id="874:9269">
              <p className="leading-[17px] mb-0">CREATIVITY / STORYTELLING</p>
              <p className="leading-[17px]">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--white,#f8fafc)] content-stretch flex gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9270" data-name="Programme / 03 CONNECT">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[96px]" data-node-id="874:9271" data-name="Chapter / Number">
            <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[51px] relative shrink-0 text-[48px] text-[color:var(--navy,#0b1020)] tracking-[-1.92px] w-[96px]" data-node-id="874:9272">
              03
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[472px]" data-node-id="874:9273" data-name="Chapter / Topic">
            <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] w-[472px]" data-node-id="874:9274">
              CONNECT
            </p>
            <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[40px] tracking-[-1.6px] w-[472px]" data-node-id="874:9275">
              <p className="leading-[42px] mb-0">FIND YOUR</p>
              <p className="leading-[42px]">PEOPLE.</p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[712px]" data-node-id="874:9276" data-name="Chapter / Details">
            <p className="leading-[26px] relative shrink-0 text-[17px] w-[712px]" data-node-id="874:9277">
              Start a conversation beyond your usual circle. Exchange interests, discover different perspectives and meet others in the community.
            </p>
            <div className="leading-[0] relative shrink-0 text-[11px] w-[712px]" data-node-id="874:9278">
              <p className="leading-[17px] mb-0">CONVERSATION / COMMUNITY</p>
              <p className="leading-[17px]">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--white,#f8fafc)] content-stretch flex gap-[var(--space-48,48px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9279" data-name="Nontechnical / Before you join">
        <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[624px]" data-node-id="874:9280" data-name="Participation / Intro">
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="874:9281">
            CURIOUS MINDS, SHARED POSSIBILITIES
          </p>
          <div className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[48px] text-[color:var(--navy,#0b1020)] tracking-[-1.92px] w-[624px]" data-node-id="874:9282">
            <p className="leading-[51px] mb-0">BRING YOUR WAY</p>
            <p className="leading-[51px]">OF THINKING.</p>
          </div>
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[26px] relative shrink-0 text-[17px] text-[color:var(--navy,#0b1020)] w-[576px]" data-node-id="874:9283">
            The programme is taking shape. Check back for the activity line-up and everything you need to take part.
          </p>
          <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[296px]" data-node-id="874:9284" data-name="Action / Registration info">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:9284;5:30">
              Registration info
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:9284;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow2} />
            </div>
          </div>
        </div>
        <div className="bg-[var(--white,#f8fafc)] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start p-[var(--space-24,24px)] relative shrink-0 w-[672px]" data-node-id="874:9285" data-name="Participation / Before you join">
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[21px] relative shrink-0 text-[14px] text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="874:9286">
            BEFORE YOU JOIN
          </p>
          <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[624px]" data-node-id="874:9287" data-name="Rule / Activity line-up" />
          <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="874:9288" data-name="Detail / Activity line-up">
            <p className="leading-[23px] relative shrink-0 text-[15px] w-[352px]" data-node-id="874:9289">
              Activity line-up
            </p>
            <p className="leading-[21px] relative shrink-0 text-[14px] w-[248px]" data-node-id="874:9290">
              To be announced
            </p>
          </div>
          <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[624px]" data-node-id="874:9291" data-name="Rule / Formats & participation" />
          <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="874:9292" data-name="Detail / Formats & participation">
            <p className="leading-[23px] relative shrink-0 text-[15px] w-[352px]" data-node-id="874:9293">{`Formats & participation`}</p>
            <p className="leading-[21px] relative shrink-0 text-[14px] w-[248px]" data-node-id="874:9294">
              To be announced
            </p>
          </div>
          <div className="bg-[var(--navy,#0b1020)] h-px relative shrink-0 w-[624px]" data-node-id="874:9295" data-name="Rule / Schedule & location" />
          <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="874:9296" data-name="Detail / Schedule & location">
            <p className="leading-[23px] relative shrink-0 text-[15px] w-[352px]" data-node-id="874:9297">{`Schedule & location`}</p>
            <p className="leading-[21px] relative shrink-0 text-[14px] w-[248px]" data-node-id="874:9298">
              To be announced
            </p>
          </div>
        </div>
      </div>
      <div className="h-[108px] relative shrink-0 w-full" data-node-id="1413:629" data-name="Section divider / Before joining to continue">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSectionDividerHeroToOpenExchange} />
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-48,48px)] items-center justify-between p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="874:9299" data-name="Nontechnical / Continue exploring">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[896px]" data-node-id="874:9300" data-name="Footer / Message">
          <p className="font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--lime,#bef264)] w-[896px]" data-node-id="874:9301">
            THE FUTURE IS A GROUP PROJECT.
          </p>
          <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[36px] text-[color:var(--white,#f8fafc)] tracking-[-1.44px] w-[896px]" data-node-id="874:9302">
            <p className="leading-[38px] mb-0">CURIOUS ABOUT</p>
            <p className="leading-[38px]">THE TECHNICAL TRACK?</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start relative shrink-0 w-[312px]" data-node-id="874:9303" data-name="Footer / Actions">
          <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[312px]" data-node-id="874:9304" data-name="Action / Explore technical">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:9304;5:30">
              Explore technical
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:9304;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow2} />
            </div>
          </div>
          <div className="bg-[var(--white,#f8fafc)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[312px]" data-node-id="874:9305" data-name="Action / Back to tracks">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I874:9305;5:30">
              Back to tracks
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I874:9305;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
