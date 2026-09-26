const assetPathPrefix = "/figma/routes/registration-mobile";
const imgPixelEnvelopeInvitationActionTab = `${assetPathPrefix}/82bb0.svg`;
const imgArrow = `${assetPathPrefix}/207b4.svg`;
const imgRsvpPixelCheck = `${assetPathPrefix}/4fc85.svg`;
const imgAwsProgramIcon = `${assetPathPrefix}/15dcc.svg`;
const imgPaletteSignalRule = `${assetPathPrefix}/19157.svg`;
const imgTicketSteppedOutline = `${assetPathPrefix}/2ba6a.svg`;
const imgTicketAssemblyPlus = `${assetPathPrefix}/08a82.svg`;
const imgTicketSquarePerforation = `${assetPathPrefix}/dc77f.svg`;
const imgTicketDecorativePrintCode = `${assetPathPrefix}/f37db.svg`;
const imgRsvpCyanToNavyPixelTransition = `${assetPathPrefix}/673f2.svg`;
const imgArrow1 = `${assetPathPrefix}/db34b.svg`;
const imgRegistrationPaperToNavyFooterTransition = `${assetPathPrefix}/5e445.svg`;

type ScdRegistrationMeetupRsvpMobileProps = {
  className?: string;
  description?: string;
  rsvpCompleted?: boolean;
  title?: string;
};

function ScdRegistrationMeetupRsvpMobile({ className, description = "RSVP to the event and stay connected with community announcements.", rsvpCompleted = false, title = "Join us on\nMeetup." }: ScdRegistrationMeetupRsvpMobileProps) {
  return (
    <div className={className || "bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start pb-[var(--space-48,48px)] pt-[var(--space-32,32px)] px-[var(--space-24,24px)] relative w-[390px]"} data-node-id="1367:819" data-name="SCD / Registration / Meetup RSVP — Mobile">
      <div className="content-stretch flex gap-[var(--space-16,16px)] h-[18px] items-center overflow-clip relative shrink-0 w-[342px]" data-node-id="1367:820" data-name="RSVP / Index and community motif">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[11px] text-[color:var(--cyan,#22d3ee)] w-[342px]" data-node-id="1367:821">
          01 / COMMUNITY RSVP
        </p>
      </div>
      <div className="h-[216px] relative shrink-0 w-[342px]" data-node-id="1367:822" data-name="Artwork / Open invitation — RSVP">
        <div className="absolute h-[203.351px] left-0 top-[6.32px] w-[342px]" data-node-id="1367:823" data-name="Pixel envelope / Invitation + action tab">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPixelEnvelopeInvitationActionTab} />
        </div>
        <p className="[word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[12px] left-[106.3px] text-[9px] text-[color:var(--navy,#0b1020)] top-[39.25px] w-[120.162px]" data-node-id="1367:834">
          COMMUNITY
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pixelify_Sans'] font-medium h-[39.284px] leading-[39.284px] left-[168.69px] text-[32.351px] text-[color:var(--navy,#0b1020)] text-center top-[54.85px] w-[120.162px]" data-node-id="1367:835">
          RSVP
        </p>
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-16,16px)] items-start overflow-clip relative shrink-0 text-[color:var(--white,#f8fafc)] w-[342px]" data-node-id="1367:836" data-name="RSVP / Invitation">
        <div className="font-['Azeret_Mono'] font-medium leading-[0] relative shrink-0 text-[28px] w-[342px]" data-node-id="1367:837">
          {title ? (
            <p className="leading-[36px] mb-0">{title}</p>
          ) : (
            <>
              <p className="leading-[36px] mb-0">Join us on</p>
              <p className="leading-[36px]">Meetup.</p>
            </>
          )}
        </div>
        <p className="font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[15px] w-[342px]" data-node-id="1367:838">
          {description}
        </p>
      </div>
      <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[342px]" data-node-id="1367:839" data-name="RSVP / RSVP on Meetup">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I1367:839;5:30">
          RSVP on Meetup
        </p>
        <div className="relative shrink-0 size-[22px]" data-node-id="I1367:839;15:32" data-name="Arrow">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start overflow-clip relative shrink-0 w-[342px]" data-node-id="1367:840" data-name="RSVP / Completion">
        <div className="bg-[var(--white,#f8fafc)] h-px opacity-22 relative shrink-0 w-[342px]" data-node-id="1367:841" data-name="RSVP / Divider" />
        <div className="content-stretch flex gap-[var(--space-16,16px)] h-[44px] items-center overflow-clip relative shrink-0 w-[342px]" data-node-id="1367:842" data-name="RSVP / Confirmation row">
          <div className="border border-[var(--cyan,#22d3ee)] border-solid content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-node-id="1367:843" data-name="RSVP / Checkbox">
            {rsvpCompleted && (
              <div className="relative shrink-0 size-[16px]" data-node-id="1367:844" data-name="RSVP / Pixel check">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRsvpPixelCheck} />
              </div>
            )}
          </div>
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[13px] text-[color:var(--white,#f8fafc)] w-[302px]" data-node-id="1367:846">
            <p className="leading-[20px] mb-0">I’ve completed my</p>
            <p className="leading-[20px]">Meetup RSVP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegistrationMobile() {
  return (
    <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start relative size-full" data-node-id="1367:780" data-name="Registration — Mobile">
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-24,24px)] h-[80px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[390px]" data-node-id="1367:781" data-name="Navigation / Mobile">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[238px]" data-node-id="1367:782" data-name="Navigation / Brand">
          <div className="relative shrink-0 size-[20px]" data-node-id="1367:783" data-name="AWS / Program icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgAwsProgramIcon} />
          </div>
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[11px] text-[color:var(--white,#f8fafc)] w-[206px]" data-node-id="1367:785">
            <p className="leading-[16px] mb-0">aws / STUDENT</p>
            <p className="leading-[16px]">COMMUNITY DAY</p>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex flex-col h-[44px] items-start justify-center relative shrink-0 w-[80px]" data-node-id="1367:786" data-name="Navigation / Explore">
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--cyan,#22d3ee)] text-right w-[80px]" data-node-id="1367:787">
            Explore
          </p>
        </a>
        <div className="absolute h-[2px] left-[24px] top-[78px] w-[120px]" data-node-id="1367:788" data-name="Palette signal rule">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPaletteSignalRule} />
        </div>
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[28px] items-start px-[var(--space-24,24px)] py-[40px] relative shrink-0 w-[390px]" data-node-id="1367:793" data-name="Registration / Mobile admission desk">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[11px] text-[color:var(--cyan,#22d3ee)] w-[342px]" data-node-id="1367:794">
          REGISTRATION / THE NEXT CHAPTER
        </p>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]" data-node-id="1367:795" data-name="Registration / You’re early">
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[72px] text-[color:var(--white,#f8fafc)] tracking-[-1.08px] w-[342px]" data-node-id="1367:796">
            <p className="leading-[72px] mb-0">YOU’RE</p>
            <p className="leading-[72px]">EARLY.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[342px]" data-node-id="1367:797" data-name="Registration / Early invitation">
          <p className="[word-break:break-word] font-['Azeret_Mono'] font-medium leading-[32px] relative shrink-0 text-[24px] text-[color:var(--violet,#a78bfa)] w-[342px]" data-node-id="1367:798">
            That’s a good thing.
          </p>
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--white,#f8fafc)] w-[342px]" data-node-id="1367:799">
            <p className="leading-[24px] mb-0">Date, venue and registration details</p>
            <p className="leading-[24px] mb-0">will be announced here soon.</p>
            <p className="leading-[24px]">The next chapter is taking shape.</p>
          </div>
          <a className="bg-[var(--orange,#f90)] content-stretch cursor-pointer flex gap-[var(--space-24,24px)] h-[56px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[342px]" data-node-id="1367:800" data-name="Registration / Back to exploring">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] text-left whitespace-nowrap" data-node-id="I1367:800;5:30">
              Back to exploring
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I1367:800;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
            </div>
          </a>
        </div>
        <div className="content-stretch flex flex-col h-[402.98px] items-start relative shrink-0 w-[342px]" data-node-id="1367:801" data-name="Admission / Next chapter — Mobile ticket">
          <div className="absolute flex h-[402.98px] items-center justify-center left-0 top-0 w-[342px]" data-node-id="1367:802">
            <div className="flex-none rotate-3">
              <div className="content-stretch flex flex-col h-[386.647px] items-start relative w-[322.206px]" data-name="Admission / Next chapter — Mobile ticket">
                <div className="absolute h-[386.647px] left-0 top-0 w-[322.206px]" data-node-id="I1367:802;1059:505" data-name="Ticket / Stepped outline">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketSteppedOutline} />
                </div>
                <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[5.959px] left-[23.01px] text-[3.97px] text-[color:var(--navy,#0b1020)] top-[23.01px] w-[276.177px]" data-node-id="I1367:802;1059:506">
                  aws / STUDENT COMMUNITY DAY
                </p>
                <div className="absolute bg-[var(--navy,#0b1020)] h-[0.575px] left-[23.01px] opacity-50 top-[46.03px] w-[276.177px]" data-node-id="I1367:802;1059:507" data-name="Ticket / Top rule" />
                <div className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[0] left-[23.01px] text-[27.15px] text-[color:var(--navy,#0b1020)] top-[59.84px] tracking-[-1.6513px] w-[276.177px]" data-node-id="I1367:802;1059:508">
                  <p className="leading-[27.146px] mb-0">THE NEXT</p>
                  <p className="leading-[27.146px]">CHAPTER.</p>
                </div>
                <div className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[0] left-[23.01px] text-[4.97px] text-[color:var(--navy,#0b1020)] top-[178.36px] w-[174.912px]" data-node-id="I1367:802;1059:509">
                  <p className="leading-[7.614px] mb-0">STARTS WITH</p>
                  <p className="leading-[7.614px]">YOUR CURIOSITY.</p>
                </div>
                <div className="absolute left-[237.05px] size-[48.331px] top-[182.97px]" data-node-id="I1367:802;1059:510" data-name="Ticket / Assembly plus">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketAssemblyPlus} />
                </div>
                <div className="absolute h-[4.603px] left-[18.41px] top-[262.37px] w-[280.78px]" data-node-id="I1367:802;1059:511" data-name="Ticket / Square perforation">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketSquarePerforation} />
                </div>
                <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[5.959px] left-[23.01px] text-[3.64px] text-[color:var(--navy,#0b1020)] top-[285.38px] w-[172.61px]" data-node-id="I1367:802;1059:512">
                  REGISTRATION
                </p>
                <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[11.918px] left-[23.01px] text-[9.93px] text-[color:var(--navy,#0b1020)] top-[300.92px] w-[276.177px]" data-node-id="I1367:802;1059:513">
                  COMING SOON
                </p>
                <div className="absolute h-[18.412px] left-[23.01px] top-[340.62px] w-[181.816px]" data-node-id="I1367:802;1059:514" data-name="Ticket / Decorative print code">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketDecorativePrintCode} />
                </div>
                <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[4.966px] left-[230.15px] text-[3.31px] text-[color:var(--navy,#0b1020)] top-[341.77px] w-[69.044px]" data-node-id="I1367:802;1059:515">
                  SCD / NEXT WAVE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[342px]" data-node-id="1367:803" data-name="Registration / Announcement note">
          <div className="bg-[var(--lime,#bef264)] relative shrink-0 size-[8px]" data-node-id="1367:804" data-name="Status / Announcement pending" />
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[10px] text-[color:var(--white,#f8fafc)] w-[322px]" data-node-id="1367:805">
            REGISTRATION DETAILS / COMING SOON
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[var(--cyan,#22d3ee)] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start px-[var(--space-24,24px)] py-[32px] relative shrink-0 text-[color:var(--navy,#0b1020)] w-[390px]" data-node-id="1367:806" data-name="Registration / Mobile details pending">
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:807" data-name="Status / DATE">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[342px]" data-node-id="1367:808">
            DATE
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[342px]" data-node-id="1367:809">
            To be announced
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:810" data-name="Status / VENUE">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[342px]" data-node-id="1367:811">
            VENUE
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[342px]" data-node-id="1367:812">
            To be announced
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:813" data-name="Status / REGISTRATION">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[342px]" data-node-id="1367:814">
            REGISTRATION
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[342px]" data-node-id="1367:815">
            Coming soon
          </p>
        </div>
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[390px]" data-node-id="1367:816" data-name="Registration / Community RSVP — Mobile">
        <div className="h-[54px] relative shrink-0 w-[390px]" data-node-id="1367:817" data-name="RSVP / Cyan-to-navy pixel transition">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRsvpCyanToNavyPixelTransition} />
        </div>
        <ScdRegistrationMeetupRsvpMobile className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start pb-[var(--space-48,48px)] pt-[var(--space-32,32px)] px-[var(--space-24,24px)] relative shrink-0 w-[390px]" />
      </div>
      <div className="bg-[var(--white,#f8fafc)] content-stretch flex flex-col gap-[var(--space-32,32px)] items-start px-[var(--space-24,24px)] py-[40px] relative shrink-0 w-[390px]" data-node-id="1367:847" data-name="Registration / Before the details arrive — Mobile">
        <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist_Mono'] font-normal gap-[var(--space-8,8px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[342px]" data-node-id="1367:848" data-name="Registration / Section index">
          <p className="leading-[18px] relative shrink-0 text-[11px] w-[342px]" data-node-id="1367:849">
            WHILE YOU’RE HERE
          </p>
          <p className="leading-[16px] relative shrink-0 text-[10px] w-[342px]" data-node-id="1367:850">
            A LITTLE CURIOSITY GOES A LONG WAY.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:851" data-name="Registration / Invitation">
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[40px] text-[color:var(--navy,#0b1020)] tracking-[-0.6px] w-[342px]" data-node-id="1367:852">
            <p className="leading-[44px] mb-0">Make a little</p>
            <p className="leading-[44px] mb-0">room for</p>
            <p className="leading-[44px]">possibility.</p>
          </div>
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] w-[342px]" data-node-id="1367:853">
            Explore the programme, meet the community and see what we are building together.
          </p>
          <a className="bg-[var(--navy,#0b1020)] content-stretch cursor-pointer flex gap-[var(--space-24,24px)] h-[56px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[342px]" data-node-id="1367:854" data-name="Registration / Explore the programme">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--white,#f8fafc)] text-left whitespace-nowrap" data-node-id="I1367:854;5:30">
              Explore the programme
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I1367:854;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
            </div>
          </a>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[342px]" data-node-id="1367:855" data-name="Registration / Details to follow">
          <div className="content-stretch flex gap-[var(--space-16,16px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:856" data-name="Registration / Event details">
            <p className="font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[12px] w-[24px]" data-node-id="1367:857">
              01
            </p>
            <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[302px]" data-node-id="1367:858" data-name="Registration / Event details copy">
              <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[20px] w-[302px]" data-node-id="1367:859">
                Event details
              </p>
              <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[302px]" data-node-id="1367:860">
                The date and venue will appear here once confirmed.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--space-16,16px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:861" data-name="Registration / How to join">
            <p className="font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[12px] w-[24px]" data-node-id="1367:862">
              02
            </p>
            <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[302px]" data-node-id="1367:863" data-name="Registration / How to join copy">
              <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[20px] w-[302px]" data-node-id="1367:864">
                How to join
              </p>
              <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[302px]" data-node-id="1367:865">
                Registration instructions will be shared here.
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[var(--space-16,16px)] items-start relative shrink-0 w-[342px]" data-node-id="1367:866" data-name="Registration / Your first step">
            <p className="font-['Geist_Mono'] font-normal leading-[24px] relative shrink-0 text-[12px] w-[24px]" data-node-id="1367:867">
              03
            </p>
            <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] items-start relative shrink-0 w-[302px]" data-node-id="1367:868" data-name="Registration / Your first step copy">
              <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[20px] w-[302px]" data-node-id="1367:869">
                Your first step
              </p>
              <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[302px]" data-node-id="1367:870">
                Bring your questions. We’ll build from there.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[54px] relative shrink-0 w-[390px]" data-node-id="1367:871" data-name="Registration / Paper-to-navy footer transition">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRegistrationPaperToNavyFooterTransition} />
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[20px] items-start px-[var(--space-24,24px)] py-[var(--space-32,32px)] relative shrink-0 w-[390px]" data-node-id="1367:873" data-name="Footer / Mobile">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[11px] text-[color:var(--white,#f8fafc)] w-[342px]" data-node-id="1367:874">
          aws / STUDENT COMMUNITY DAY
        </p>
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[11px] text-[color:var(--cyan,#22d3ee)] w-[342px]" data-node-id="1367:875">
          YOUR NEXT CHAPTER STARTS HERE.
        </p>
        <button className="content-stretch cursor-pointer flex flex-col h-[44px] items-start justify-center relative shrink-0 w-[342px]" data-node-id="1367:876" data-name="Footer / Back to top">
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--white,#f8fafc)] text-left w-[342px]" data-node-id="1367:877">
            Back to top ↑
          </p>
        </button>
      </div>
    </div>
  );
}
