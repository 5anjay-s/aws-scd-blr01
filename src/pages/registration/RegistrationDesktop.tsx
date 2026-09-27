import PixelDivider from "../../components/PixelDivider";
const assetPathPrefix = "/assets/registration/desktop";
const imgPixelEnvelopeInvitationActionTab = `${assetPathPrefix}/pixel-envelope-invitation-action-tab.svg`;
const imgArrow = `${assetPathPrefix}/arrow.svg`;
const imgRsvpPixelCheck = `${assetPathPrefix}/rsvp-pixel-check.svg`;


const imgTicketSteppedOutline = `${assetPathPrefix}/ticket-stepped-outline.svg`;
const imgTicketAssemblyPlus = `${assetPathPrefix}/ticket-assembly-plus.svg`;
const imgTicketSquarePerforation = `${assetPathPrefix}/ticket-square-perforation.svg`;
const imgTicketDecorativePrintCode = `${assetPathPrefix}/ticket-decorative-print-code.svg`;
const imgRsvpCyanToNavyPixelTransition = `${assetPathPrefix}/rsvp-cyan-to-navy-pixel-transition.svg`;
const imgArrow1 = `${assetPathPrefix}/arrow-1.svg`;


type ScdRegistrationMeetupRsvpDesktopProps = {
  className?: string;
  description?: string;
  rsvpCompleted?: boolean;
  title?: string;
};

function ScdRegistrationMeetupRsvpDesktop({ className, description = "RSVP to the event and stay connected with community announcements.", rsvpCompleted = false, title = "Join us on Meetup." }: ScdRegistrationMeetupRsvpDesktopProps) {
  return (
    <div className={className || "bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative w-[1440px]"} data-node-id="1367:694" data-name="SCD / Registration / Meetup RSVP — Desktop">
      <div className="content-stretch flex gap-[var(--space-16,16px)] h-[18px] items-center overflow-clip relative shrink-0 w-[1344px]" data-node-id="1367:695" data-name="RSVP / Index and community motif">
        <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[12px] text-[color:var(--cyan,#22d3ee)] w-[1344px]" data-node-id="1367:696">
          01 / COMMUNITY RSVP
        </p>
      </div>
      <div className="content-stretch flex gap-[var(--space-64,64px)] items-center overflow-clip relative shrink-0 w-[1344px]" data-node-id="1367:697" data-name="RSVP / Desktop invitation and action">
        <div className="h-[352px] relative shrink-0 w-[592px]" data-node-id="1367:698" data-name="Artwork / Open invitation — RSVP">
          <div className="absolute h-[352px] left-0 top-0 w-[592px]" data-node-id="1367:699" data-name="Pixel envelope / Invitation + action tab">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPixelEnvelopeInvitationActionTab} />
          </div>
          <p className="[word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[18px] left-[184px] text-[12px] text-[color:var(--navy,#0b1020)] top-[57px] w-[208px]" data-node-id="1367:710">
            COMMUNITY
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[68px] left-[292px] text-[56px] text-[color:var(--navy,#0b1020)] text-center top-[84px] w-[208px]" data-node-id="1367:711">
            RSVP
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-32,32px)] items-start overflow-clip relative shrink-0 w-[688px]" data-node-id="1367:712" data-name="RSVP / Invitation and RSVP steps">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-16,16px)] items-start overflow-clip relative shrink-0 text-[color:var(--white,#f8fafc)] w-[688px]" data-node-id="1367:713" data-name="RSVP / Invitation">
            <p className="font-['Azeret_Mono'] font-medium leading-[48px] relative shrink-0 text-[40px] w-[688px]" data-node-id="1367:714">
              {title}
            </p>
            <p className="font-['Geist_Mono'] font-normal leading-[28px] relative shrink-0 text-[18px] w-[600px]" data-node-id="1367:715">
              {description}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] items-start overflow-clip relative shrink-0 w-[688px]" data-node-id="1367:716" data-name="RSVP / Desktop action and confirmation">
            <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] h-[56px] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[448px]" data-node-id="1367:717" data-name="RSVP / RSVP on Meetup">
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I1367:717;5:30">
                RSVP on Meetup
              </p>
              <div className="relative shrink-0 size-[22px]" data-node-id="I1367:717;15:32" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[var(--space-16,16px)] items-start overflow-clip relative shrink-0 w-[448px]" data-node-id="1367:718" data-name="RSVP / Completion">
              <div className="bg-[var(--white,#f8fafc)] h-px opacity-22 relative shrink-0 w-[448px]" data-node-id="1367:719" data-name="RSVP / Divider" />
              <div className="content-stretch flex gap-[var(--space-16,16px)] h-[44px] items-center overflow-clip relative shrink-0 w-[448px]" data-node-id="1367:720" data-name="RSVP / Confirmation row">
                <div className="border border-[var(--cyan,#22d3ee)] border-solid content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-node-id="1367:721" data-name="RSVP / Checkbox">
                  {rsvpCompleted && (
                    <div className="relative shrink-0 size-[16px]" data-node-id="1367:722" data-name="RSVP / Pixel check">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRsvpPixelCheck} />
                    </div>
                  )}
                </div>
                <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] text-[color:var(--white,#f8fafc)] w-[408px]" data-node-id="1367:724">
                  I’ve completed my Meetup RSVP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default function RegistrationDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="1367:652" data-name="Registration — Desktop">
      
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col h-[844px] items-start overflow-clip relative shrink-0 w-[1440px]" data-node-id="1367:669" data-name="Registration / Admission desk">
        <p className="[word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[18px] left-[48px] text-[12px] text-[color:var(--cyan,#22d3ee)] top-[48px] w-[784px]" data-node-id="1367:670">
          REGISTRATION / THE NEXT CHAPTER
        </p>
        <p className="[word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[154px] left-[48px] text-[160px] text-[color:var(--white,#f8fafc)] top-[128px] tracking-[-5.6px] w-[816px]" data-node-id="1367:671">
          YOU’RE
        </p>
        <p className="[word-break:break-word] absolute font-['Geist_Mono'] font-normal leading-[154px] left-[48px] text-[160px] text-[color:var(--white,#f8fafc)] top-[280px] tracking-[-5.6px] w-[816px]" data-node-id="1367:672">
          EARLY.
        </p>
        <p className="[word-break:break-word] absolute font-['Azeret_Mono'] font-medium leading-[44px] left-[48px] text-[36px] text-[color:var(--violet,#a78bfa)] top-[466px] w-[688px]" data-node-id="1367:673">
          That’s a good thing.
        </p>
        <div className="absolute content-stretch flex flex-col gap-[var(--space-24,24px)] h-[180px] items-start left-[48px] top-[548px] w-[640px]" data-node-id="1367:674" data-name="Registration / Current status">
          <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[18px] text-[color:var(--white,#f8fafc)] w-[640px]" data-node-id="1367:675">
            <p className="leading-[29px] mb-0">Date, venue and registration details</p>
            <p className="leading-[29px] mb-0">will be announced here soon.</p>
            <p className="leading-[29px]">The next chapter is taking shape.</p>
          </div>
          <div className="bg-[var(--orange,#f90)] content-stretch flex gap-[var(--space-24,24px)] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[336px]" data-node-id="1367:676" data-name="Button / Flat">
            <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--navy,#0b1020)] whitespace-nowrap" data-node-id="I1367:676;5:30">
              Back to exploring
            </p>
            <div className="relative shrink-0 size-[22px]" data-node-id="I1367:676;15:32" data-name="Arrow">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-[48px] top-[766px] w-[640px]" data-node-id="1367:677" data-name="Registration / Announcement note">
          <div className="bg-[var(--lime,#bef264)] relative shrink-0 size-[8px]" data-node-id="1367:678" data-name="Rectangle" />
          <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[18px] relative shrink-0 text-[11px] text-[color:var(--white,#f8fafc)] w-[604px]" data-node-id="1367:679">
            REGISTRATION DETAILS / COMING SOON
          </p>
        </div>
        <div className="absolute flex h-[700.387px] items-center justify-center left-[784.83px] top-[72px] w-[594.402px]" data-node-id="1367:680">
          <div className="flex-none rotate-3">
            <div className="content-stretch flex flex-col h-[672px] items-start relative w-[560px]" data-name="Admission / Next chapter — Flat ticket">
              <div className="absolute h-[672px] left-0 top-0 w-[560px]" data-node-id="I1367:680;1059:505" data-name="Ticket / Stepped outline">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketSteppedOutline} />
              </div>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[18px] left-[40px] text-[12px] text-[color:var(--navy,#0b1020)] top-[40px] w-[480px]" data-node-id="I1367:680;1059:506">
                aws / STUDENT COMMUNITY DAY
              </p>
              <div className="absolute bg-[var(--navy,#0b1020)] h-px left-[40px] opacity-50 top-[80px] w-[480px]" data-node-id="I1367:680;1059:507" data-name="Ticket / Top rule" />
              <div className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[0] left-[40px] text-[82px] text-[color:var(--navy,#0b1020)] top-[104px] tracking-[-2.87px] w-[480px]" data-node-id="I1367:680;1059:508">
                <p className="leading-[82px] mb-0">THE NEXT</p>
                <p className="leading-[82px]">CHAPTER.</p>
              </div>
              <div className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[0] left-[40px] text-[15px] text-[color:var(--navy,#0b1020)] top-[310px] w-[304px]" data-node-id="I1367:680;1059:509">
                <p className="leading-[23px] mb-0">STARTS WITH</p>
                <p className="leading-[23px]">YOUR CURIOSITY.</p>
              </div>
              <div className="absolute left-[412px] size-[84px] top-[318px]" data-node-id="I1367:680;1059:510" data-name="Ticket / Assembly plus">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketAssemblyPlus} />
              </div>
              <div className="absolute h-[8px] left-[32px] top-[456px] w-[488px]" data-node-id="I1367:680;1059:511" data-name="Ticket / Square perforation">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketSquarePerforation} />
              </div>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[18px] left-[40px] text-[11px] text-[color:var(--navy,#0b1020)] top-[496px] w-[300px]" data-node-id="I1367:680;1059:512">
                REGISTRATION
              </p>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[36px] left-[40px] text-[30px] text-[color:var(--navy,#0b1020)] top-[523px] w-[480px]" data-node-id="I1367:680;1059:513">
                COMING SOON
              </p>
              <div className="absolute h-[32px] left-[40px] top-[592px] w-[316px]" data-node-id="I1367:680;1059:514" data-name="Ticket / Decorative print code">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTicketDecorativePrintCode} />
              </div>
              <p className="[word-break:break-word] absolute font-['Pixelify_Sans'] font-medium leading-[15px] left-[400px] text-[10px] text-[color:var(--navy,#0b1020)] top-[594px] w-[120px]" data-node-id="I1367:680;1059:515">
                SCD / NEXT WAVE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-[var(--cyan,#22d3ee)] content-stretch flex gap-[var(--space-48,48px)] h-[144px] items-start p-[var(--space-48,48px)] relative shrink-0 text-[color:var(--navy,#0b1020)] w-[1440px]" data-node-id="1367:681" data-name="Registration / What is pending">
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[48px] items-start relative shrink-0 w-[416px]" data-node-id="1367:682" data-name="Status / DATE">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[416px]" data-node-id="1367:683">
            DATE
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[416px]" data-node-id="1367:684">
            To be announced
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[48px] items-start relative shrink-0 w-[416px]" data-node-id="1367:685" data-name="Status / VENUE">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[416px]" data-node-id="1367:686">
            VENUE
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[416px]" data-node-id="1367:687">
            To be announced
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[48px] items-start relative shrink-0 w-[416px]" data-node-id="1367:688" data-name="Status / REGISTRATION">
          <p className="font-['Geist_Mono'] font-normal leading-[16px] relative shrink-0 text-[11px] w-[416px]" data-node-id="1367:689">
            REGISTRATION
          </p>
          <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[22px] w-[416px]" data-node-id="1367:690">
            Coming soon
          </p>
        </div>
      </div>
      <div className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-node-id="1367:691" data-name="Registration / Community RSVP — Desktop">
        <PixelDivider src={imgRsvpCyanToNavyPixelTransition} nodeId="1367:692" name="RSVP / Cyan-to-navy pixel transition" from="cyan" />
        <ScdRegistrationMeetupRsvpDesktop className="bg-[var(--navy,#0b1020)] content-stretch flex flex-col gap-[var(--space-32,32px)] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" />
      </div>
      <div className="bg-[var(--white,#f8fafc)] content-stretch flex flex-col gap-[var(--space-32,32px)] h-[464px] items-start p-[var(--space-48,48px)] relative shrink-0 w-[1440px]" data-node-id="1367:725" data-name="Registration / Before the details arrive">
        <div className="[word-break:break-word] content-stretch flex font-['Geist_Mono'] font-normal h-[18px] items-start justify-between leading-[18px] relative shrink-0 text-[12px] text-[color:var(--navy,#0b1020)] w-[1344px]" data-node-id="1367:726" data-name="Section index">
          <p className="relative shrink-0 w-[604.8px]" data-node-id="1367:727">
            WHILE YOU’RE HERE
          </p>
          <p className="relative shrink-0 text-right w-[672px]" data-node-id="1367:728">
            A LITTLE CURIOSITY GOES A LONG WAY.
          </p>
        </div>
        <div className="content-stretch flex gap-[var(--space-64,64px)] h-[292px] items-start relative shrink-0 w-[1344px]" data-node-id="1367:729" data-name="Registration / Useful next steps">
          <div className="content-stretch flex flex-col gap-[var(--space-24,24px)] h-[292px] items-start relative shrink-0 w-[624px]" data-node-id="1367:730" data-name="Registration / Invitation">
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[49px] text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="1367:731">
              <p className="leading-[57px] mb-0">Make a little</p>
              <p className="leading-[57px]">room for possibility.</p>
            </div>
            <div className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[0] relative shrink-0 text-[17px] text-[color:var(--navy,#0b1020)] w-[624px]" data-node-id="1367:732">
              <p className="leading-[27px] mb-0">Explore the programme, meet the community</p>
              <p className="leading-[27px]">and see what we are building together.</p>
            </div>
            <div className="bg-[var(--navy,#0b1020)] content-stretch flex gap-[var(--space-24,24px)] items-center justify-between px-[var(--space-24,24px)] py-[var(--space-16,16px)] relative shrink-0 w-[336px]" data-node-id="1367:733" data-name="Button / Flat">
              <p className="[word-break:break-word] font-['Geist_Mono'] font-normal leading-[1.5] relative shrink-0 text-[15px] text-[color:var(--white,#f8fafc)] whitespace-nowrap" data-node-id="I1367:733;5:30">
                Explore the programme
              </p>
              <div className="relative shrink-0 size-[22px]" data-node-id="I1367:733;15:32" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--space-24,24px)] h-[292px] items-start relative shrink-0 text-[color:var(--navy,#0b1020)] w-[656px]" data-node-id="1367:734" data-name="Registration / Details to follow">
            <div className="content-stretch flex gap-[var(--space-24,24px)] h-[80px] items-start relative shrink-0 w-[656px]" data-node-id="1367:735" data-name="Registration / Event details">
              <p className="font-['Geist_Mono'] font-normal leading-[20px] relative shrink-0 text-[12px] w-[48px]" data-node-id="1367:736">
                01
              </p>
              <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[80px] items-start relative shrink-0 w-[584px]" data-node-id="1367:737" data-name="Registration / Event details copy">
                <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[21px] w-[584px]" data-node-id="1367:738">
                  Event details
                </p>
                <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[584px]" data-node-id="1367:739">
                  The date and venue will appear here once confirmed.
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--space-24,24px)] h-[80px] items-start relative shrink-0 w-[656px]" data-node-id="1367:740" data-name="Registration / How to join">
              <p className="font-['Geist_Mono'] font-normal leading-[20px] relative shrink-0 text-[12px] w-[48px]" data-node-id="1367:741">
                02
              </p>
              <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[80px] items-start relative shrink-0 w-[584px]" data-node-id="1367:742" data-name="Registration / How to join copy">
                <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[21px] w-[584px]" data-node-id="1367:743">
                  How to join
                </p>
                <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[584px]" data-node-id="1367:744">
                  Registration instructions will be shared here.
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--space-24,24px)] h-[80px] items-start relative shrink-0 w-[656px]" data-node-id="1367:745" data-name="Registration / Your first step">
              <p className="font-['Geist_Mono'] font-normal leading-[20px] relative shrink-0 text-[12px] w-[48px]" data-node-id="1367:746">
                03
              </p>
              <div className="content-stretch flex flex-col gap-[var(--space-8,8px)] h-[80px] items-start relative shrink-0 w-[584px]" data-node-id="1367:747" data-name="Registration / Your first step copy">
                <p className="font-['Azeret_Mono'] font-medium leading-[28px] relative shrink-0 text-[21px] w-[584px]" data-node-id="1367:748">
                  Your first step
                </p>
                <p className="font-['Geist_Mono'] font-normal leading-[22px] relative shrink-0 text-[14px] w-[584px]" data-node-id="1367:749">
                  Bring your questions. We’ll build from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
