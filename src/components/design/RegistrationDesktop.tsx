import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { RegistrationButton } from "../RegistrationButton";
import { SiteCheckbox, SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
import { useState } from "react";
// Source: Figma 00/ Final, node 1367:652.
const imgPixelEnvelopeInvitationActionTab = "/assets/1367-652-7de52.svg";
const imgArrow = "/assets/865-7675-207b4.svg";
const imgRsvpPixelCheck = "/assets/1367-652-4fc85.svg";
const imgTicketSteppedOutline = "/assets/1367-652-6ea97.svg";
const imgTicketAssemblyPlus = "/assets/1367-652-e8226.svg";
const imgTicketSquarePerforation = "/assets/1367-652-2d79b.svg";
const imgTicketDecorativePrintCode = "/assets/1367-652-ab864.svg";
const imgRsvpCyanToNavyPixelTransition = "/assets/1367-652-442d6.svg";
const imgArrow1 = "/assets/865-7675-0b485.svg";
const imgRegistrationPaperToNavyFooterTransition = "/assets/1367-652-1103f.svg";
const imgApprovedWovenLinks = "/assets/1265-3035-453bd.svg";
const imgArrow2 = "/assets/1168-498-5d2c8.svg";
const imgArrow3 = "/assets/1168-498-378aa.svg";

function ScdRegistrationMeetupRsvpDesktop({ className }: { className: string }) {
  const [completed, setCompleted] = useState(false);
  return (
    <div className={className} data-node-id="1367:694" data-name="SCD / Registration / Meetup RSVP — Desktop">
      <div className="d-3fbef98557" data-node-id="1367:695" data-name="RSVP / Index and community motif">
        <p className="d-1b4476b588" data-node-id="1367:696">
          01 / COMMUNITY RSVP
        </p>
      </div>
      <div className="d-edc6cdeee4" data-node-id="1367:697" data-name="RSVP / Desktop invitation and action">
        <div className="d-ff86f257ee" data-node-id="1367:698" data-name="Artwork / Open invitation — RSVP">
          <div className="d-b92b51390f" data-node-id="1367:699" data-name="Pixel envelope / Invitation + action tab">
            <img alt="" className="d-511e8f31d4" src={imgPixelEnvelopeInvitationActionTab} />
          </div>
          <p className="d-727b41800e" data-node-id="1367:710">
            COMMUNITY
          </p>
          <p className="d-43d15996d7" data-node-id="1367:711">
            RSVP
          </p>
        </div>
        <div className="d-7e6bfdd719" data-node-id="1367:712" data-name="RSVP / Invitation and RSVP steps">
          <div className="d-38f7ec5967" data-node-id="1367:713" data-name="RSVP / Invitation">
            <p className="d-eeb9cfc51b" data-node-id="1367:714">
              Join us on Meetup.
            </p>
            <p className="d-ee1af175bd" data-node-id="1367:715">
              RSVP to the event and stay connected with community announcements.
            </p>
          </div>
          <div className="d-31d2d1cd55" data-node-id="1367:716" data-name="RSVP / Desktop action and confirmation">
            <SiteLink buttonTone="orange" className="d-47d0fbdca1" data-node-id="1367:717" data-name="RSVP / RSVP on Meetup" href={siteLinks.meetup}>
              <p className="d-cf01328ee8" data-node-id="I1367:717;5:30">
                RSVP on Meetup
              </p>
              <div className="d-4725149c0e" data-node-id="I1367:717;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow} />
              </div>
            </SiteLink>
            <div className="d-437ef13cd4" data-node-id="1367:718" data-name="RSVP / Completion">
              <div className="d-1b878f8f90" data-node-id="1367:719" data-name="RSVP / Divider" />
              <div className="d-da46bb4c5b" data-node-id="1367:720" data-name="RSVP / Confirmation row">
                <SiteCheckbox className="d-96378a4980" data-node-id="1367:721" data-name="RSVP / Checkbox" checked={completed} onClick={() => setCompleted(!completed)}>
                  {completed && (
                    <div className="d-682bfbc359" data-node-id="1367:722" data-name="RSVP / Pixel check">
                      <img alt="" className="d-511e8f31d4" src={imgRsvpPixelCheck} />
                    </div>
                  )}
                </SiteCheckbox>
                <p className="d-51a9a45b38" data-node-id="1367:724">
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
    <div className="d-0b16a12d9f" data-node-id="1367:652" data-name="Registration — Desktop">
      <SiteHeader className="d-e88f0dd487 site-header" data-node-id="1367:653" data-name="Navigation / Existing site">
        <SiteLink className="d-fe447388c7" data-node-id="1367:654" href={"/#home"}>
          aws / STUDENT COMMUNITY DAY
        </SiteLink>
        <div className="d-fd21041cfd" data-node-id="1367:655" data-name="Nav links v2">
          <SiteLink className="d-3328cbea32" data-node-id="1367:656" href={"/#experience"}>
            <span className="d-d0d8823c60">01</span>
            <span className="d-95907800fd">{` Experience`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1367:657" href={"/tracks"}>
            <span className="d-d0d8823c60">02</span>
            <span className="d-95907800fd">{` Tracks`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1367:658" href={"/#speakers"}>
            <span className="d-d0d8823c60">03</span>
            <span className="d-95907800fd">{` Speakers`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1367:659" href={"/#community"}>
            <span className="d-d0d8823c60">04</span>
            <span className="d-95907800fd">{` Community`}</span>
          </SiteLink>
        </div>
        <RegistrationButton />
        <div className="d-c4da47cd12" data-node-id="1367:662" data-name="Logo placeholder" aria-hidden="true" />
      </SiteHeader>
      <div className="d-a8f0c92515" data-node-id="1367:669" data-name="Registration / Admission desk">
        <p className="d-09dae26e09" data-node-id="1367:670" role="heading" aria-level={1}>
          REGISTRATION / THE NEXT CHAPTER
        </p>
        <p className="d-3edd08d552" data-node-id="1367:671">
          YOU’RE
        </p>
        <p className="d-693e676d46" data-node-id="1367:672">
          EARLY.
        </p>
        <p className="d-b4f42ccefc" data-node-id="1367:673">
          That’s a good thing.
        </p>
        <div className="d-a69b48af18" data-node-id="1367:674" data-name="Registration / Current status">
          <div className="d-090bbee435" data-node-id="1367:675">
            <p className="d-24de9bb201">Date, venue and registration details</p>
            <p className="d-24de9bb201">will be announced here soon.</p>
            <p className="d-976352e9f0">The next chapter is taking shape.</p>
          </div>
          <SiteLink buttonTone="orange" className="d-86b35f0797" data-node-id="1367:676" data-name="Button / Flat" href={"/#home"}>
            <p className="d-cf01328ee8" data-node-id="I1367:676;5:30">
              Back to exploring
            </p>
            <div className="d-4725149c0e" data-node-id="I1367:676;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
        </div>
        <div className="d-31fddeba75" data-node-id="1367:677" data-name="Registration / Announcement note">
          <div className="d-31f28ff034" data-node-id="1367:678" data-name="Rectangle" />
          <p className="d-757bc9fd86" data-node-id="1367:679">
            REGISTRATION DETAILS / COMING SOON
          </p>
        </div>
        <div className="d-01015d3743" data-node-id="1367:680">
          <div className="d-c3905a3b54">
            <div className="d-3ab0ab12e8" data-name="Admission / Next chapter — Flat ticket">
              <div className="d-f077a0522e" data-node-id="I1367:680;1059:505" data-name="Ticket / Stepped outline">
                <img alt="" className="d-511e8f31d4" src={imgTicketSteppedOutline} />
              </div>
              <SiteLink className="d-68239f1ac4" data-node-id="I1367:680;1059:506" href={"/#home"}>
                aws / STUDENT COMMUNITY DAY
              </SiteLink>
              <div className="d-e827680dda" data-node-id="I1367:680;1059:507" data-name="Ticket / Top rule" />
              <div className="d-26140e6705" data-node-id="I1367:680;1059:508">
                <p className="d-cf3f6248ad">THE NEXT</p>
                <p className="d-bec5321127">CHAPTER.</p>
              </div>
              <div className="d-2880ffcd57" data-node-id="I1367:680;1059:509">
                <p className="d-06214b5362">STARTS WITH</p>
                <p className="d-0479ea4484">YOUR CURIOSITY.</p>
              </div>
              <div className="d-ad5ad21980" data-node-id="I1367:680;1059:510" data-name="Ticket / Assembly plus">
                <img alt="" className="d-511e8f31d4" src={imgTicketAssemblyPlus} />
              </div>
              <div className="d-2a4e9b64fd" data-node-id="I1367:680;1059:511" data-name="Ticket / Square perforation">
                <img alt="" className="d-511e8f31d4" src={imgTicketSquarePerforation} />
              </div>
              <p className="d-f064523f28" data-node-id="I1367:680;1059:512">
                REGISTRATION
              </p>
              <p className="d-6c6c38508c" data-node-id="I1367:680;1059:513">
                COMING SOON
              </p>
              <div className="d-994b5566a4" data-node-id="I1367:680;1059:514" data-name="Ticket / Decorative print code">
                <img alt="" className="d-511e8f31d4" src={imgTicketDecorativePrintCode} />
              </div>
              <p className="d-f87663c86a" data-node-id="I1367:680;1059:515">
                SCD / NEXT WAVE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-af30854260" data-node-id="1367:681" data-name="Registration / What is pending">
        <div className="d-8aac1916c9" data-node-id="1367:682" data-name="Status / DATE">
          <p className="d-67ca39aa4a" data-node-id="1367:683">
            DATE
          </p>
          <p className="d-51b0f0d5e7" data-node-id="1367:684">
            To be announced
          </p>
        </div>
        <div className="d-8aac1916c9" data-node-id="1367:685" data-name="Status / VENUE">
          <p className="d-67ca39aa4a" data-node-id="1367:686">
            VENUE
          </p>
          <p className="d-51b0f0d5e7" data-node-id="1367:687">
            To be announced
          </p>
        </div>
        <div className="d-8aac1916c9" data-node-id="1367:688" data-name="Status / REGISTRATION">
          <p className="d-67ca39aa4a" data-node-id="1367:689">
            REGISTRATION
          </p>
          <p className="d-51b0f0d5e7" data-node-id="1367:690">
            Coming soon
          </p>
        </div>
      </div>
      <div className="d-2bc135e391" data-node-id="1367:691" data-name="Registration / Community RSVP — Desktop">
        <div className="d-2deab807cb pixel-border pixel-border-cyan-navy" data-node-id="1367:692" data-name="RSVP / Cyan-to-navy pixel transition">
          <img alt="" className="d-511e8f31d4" src={imgRsvpCyanToNavyPixelTransition} />
        </div>
        <ScdRegistrationMeetupRsvpDesktop className="d-5782fa7dda" />
      </div>
      <div className="d-0ad43c5865" data-node-id="1367:725" data-name="Registration / Before the details arrive">
        <div className="d-552c1c6224" data-node-id="1367:726" data-name="Section index">
          <p className="d-c6a4bf57de" data-node-id="1367:727">
            WHILE YOU’RE HERE
          </p>
          <p className="d-1e0f2a177d" data-node-id="1367:728">
            A LITTLE CURIOSITY GOES A LONG WAY.
          </p>
        </div>
        <div className="d-00c843dfdd" data-node-id="1367:729" data-name="Registration / Useful next steps">
          <div className="d-ebd5dfbbe6" data-node-id="1367:730" data-name="Registration / Invitation">
            <div className="d-467d6f10a6" data-node-id="1367:731">
              <p className="d-8854808fbb">Make a little</p>
              <p className="d-58a8484bb4">room for possibility.</p>
            </div>
            <div className="d-e01c4d53d6" data-node-id="1367:732">
              <p className="d-2eae06771a">Explore the programme, meet the community</p>
              <p className="d-afb1b38150">and see what we are building together.</p>
            </div>
            <SiteLink hoverTone="orange" buttonTone="navy" className="d-733305cc49" data-node-id="1367:733" data-name="Button / Flat" href={"/#timeline"}>
              <p className="d-7a0f1f17eb" data-node-id="I1367:733;5:30">
                Explore the programme
              </p>
              <div className="d-4725149c0e" data-node-id="I1367:733;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
          </div>
          <div className="d-8479a42841" data-node-id="1367:734" data-name="Registration / Details to follow">
            <div className="d-f7f0034703" data-node-id="1367:735" data-name="Registration / Event details">
              <p className="d-6805fbd7b7" data-node-id="1367:736">
                01
              </p>
              <div className="d-4efad2a343" data-node-id="1367:737" data-name="Registration / Event details copy">
                <p className="d-e5507e86e8" data-node-id="1367:738">
                  Event details
                </p>
                <p className="d-0ae5befe23" data-node-id="1367:739">
                  The date and venue will appear here once confirmed.
                </p>
              </div>
            </div>
            <div className="d-f7f0034703" data-node-id="1367:740" data-name="Registration / How to join">
              <p className="d-6805fbd7b7" data-node-id="1367:741">
                02
              </p>
              <div className="d-4efad2a343" data-node-id="1367:742" data-name="Registration / How to join copy">
                <p className="d-e5507e86e8" data-node-id="1367:743">
                  How to join
                </p>
                <p className="d-0ae5befe23" data-node-id="1367:744">
                  Registration instructions will be shared here.
                </p>
              </div>
            </div>
            <div className="d-f7f0034703" data-node-id="1367:745" data-name="Registration / Your first step">
              <p className="d-6805fbd7b7" data-node-id="1367:746">
                03
              </p>
              <div className="d-4efad2a343" data-node-id="1367:747" data-name="Registration / Your first step copy">
                <p className="d-e5507e86e8" data-node-id="1367:748">
                  Your first step
                </p>
                <p className="d-0ae5befe23" data-node-id="1367:749">
                  Bring your questions. We’ll build from there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-2deab807cb pixel-border pixel-border-paper-navy" data-node-id="1367:750" data-name="Registration / Paper-to-navy footer transition">
        <img alt="" className="d-511e8f31d4" src={imgRegistrationPaperToNavyFooterTransition} />
      </div>
      <div className="d-5c24635908" data-node-id="1476:794" data-name="Footer / Common — Desktop">
        <div className="d-78d3b03090" data-node-id="1476:795" data-name="Footer / Stay connected">
          <div className="d-ec1083a29e" data-node-id="1476:796" data-name="Footer / Invitation">
            <p className="d-316c95d37a" data-node-id="1476:797">
              THE DAY IS JUST THE START.
            </p>
            <div className="d-079cb0f4b8" data-node-id="1476:798">
              <p className="d-6ee5fa6884">Keep the</p>
              <p className="d-6ee5fa6884">conversation</p>
              <p className="d-f42ae1416f">going.</p>
            </div>
            <div className="d-bf5113e67d" data-node-id="1476:799">
              <p className="d-143d1e5b1d">A little more curiosity.</p>
              <p className="d-e894d19a93">A lot more community.</p>
            </div>
          </div>
          <div className="d-4556061f38" data-node-id="1476:800" data-name="Footer / Community connection">
            <div className="d-229a3a46e3" data-node-id="1476:801" data-name="Connection / Left rail" />
            <div className="d-c301621b07" data-node-id="1476:802" data-name="Connection / Right rail" />
            <div className="d-9e7418bb75" data-node-id="1476:803" data-name="Connection / Left pixel" />
            <div className="d-3a8fd5fe1d" data-node-id="1476:804" data-name="Connection / Right pixel" />
            <div className="d-b33888044b" data-node-id="1476:805" data-name="Approved / Woven links">
              <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
            </div>
          </div>
          <div className="d-bc1cc41ab7" data-node-id="1476:806" data-name="Footer / Social channels">
            <p className="d-393807428f" data-node-id="1476:807">
              FIND YOUR PEOPLE
            </p>
            <div className="d-9c698a8db5" data-node-id="1476:808" data-name="Footer / Social links">
              <div className="d-1969baa6ce" data-node-id="1476:809" data-name="Footer / LinkedIn">
                <p className="d-24df9d72c3" data-node-id="1476:810">
                  01 / LINK UP
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:811" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:811;5:30">
                    LinkedIn
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:811;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow2} />
                  </div>
                </SiteLink>
                <div className="d-20b3bae21a" data-node-id="1476:812" data-name="Social / Open rule" />
              </div>
              <div className="d-1969baa6ce" data-node-id="1476:813" data-name="Footer / Instagram">
                <p className="d-14d435a7de" data-node-id="1476:814">
                  02 / FOLLOW ALONG
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:815" data-name="Social / Instagram" href={siteLinks.instagram}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:815;5:30">
                    Instagram
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:815;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow3} />
                  </div>
                </SiteLink>
                <div className="d-d800ec1288" data-node-id="1476:816" data-name="Social / Open rule" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-e2d3cf23e7" data-node-id="1476:818" data-name="Footer / Quiet divider" />
        <div className="d-cd7fcf8b0a" data-node-id="1476:819" data-name="Footer / Utility">
          <div className="d-6792f5ce03" data-node-id="1476:820" data-name="Footer / Brand lockup">
            <div className="d-8a7b794c07" data-node-id="1476:821" data-name="Logo placeholder" aria-hidden="true" />
            <SiteLink className="d-362449b657" data-node-id="1476:823" href={"/#home"}>
              aws / STUDENT COMMUNITY DAY
            </SiteLink>
          </div>
          <p className="d-393807428f" data-node-id="1476:824">
            STUDENT LED. COMMUNITY POWERED.
          </p>
          <SiteLink className="d-a959ee36a6" data-node-id="1476:825" href={"#top"}>
            Back to top
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
