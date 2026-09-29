import { SiteBrand } from "../SiteBrand";
import { BadgeStudio } from "../BadgeStudio";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { SiteCheckbox, SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
import { useState } from "react";
// Source: Figma 00/ Final, node 1367:780.
const imgPixelEnvelopeInvitationActionTab = "/assets/1367-780-82bb0.svg";
const imgArrow = "/assets/865-7675-207b4.svg";
const imgRsvpPixelCheck = "/assets/1367-652-4fc85.svg";
const imgTicketSteppedOutline = "/assets/1367-780-2ba6a.svg";
const imgTicketAssemblyPlus = "/assets/1367-780-08a82.svg";
const imgTicketSquarePerforation = "/assets/1367-780-dc77f.svg";
const imgTicketDecorativePrintCode = "/assets/1367-780-f37db.svg";
const imgRsvpCyanToNavyPixelTransition = "/assets/1367-780-673f2.svg";
const imgArrow1 = "/assets/865-7675-0b485.svg";
const imgRegistrationPaperToNavyFooterTransition = "/assets/1367-780-5e445.svg";
const imgApprovedWovenLinks = "/assets/1168-498-e1335.svg";
const imgArrow2 = "/assets/1168-498-5d2c8.svg";
const imgArrow3 = "/assets/1168-498-378aa.svg";

function ScdRegistrationMeetupRsvpMobile({ className }: { className: string }) {
  const [completed, setCompleted] = useState(false);
  return (
    <div className={className} data-node-id="1367:819" data-name="SCD / Registration / Meetup RSVP — Mobile">
      <div className="d-0741f220f3" data-node-id="1367:820" data-name="RSVP / Index and community motif">
        <p className="d-11ea5ff482" data-node-id="1367:821">
          01 / COMMUNITY RSVP
        </p>
      </div>
      <div className="d-4ea945f9d3" data-node-id="1367:822" data-name="Artwork / Open invitation — RSVP">
        <div className="d-20969794e5" data-node-id="1367:823" data-name="Pixel envelope / Invitation + action tab">
          <img alt="" className="d-511e8f31d4" src={imgPixelEnvelopeInvitationActionTab} />
        </div>
        <p className="d-bf9b1d779a" data-node-id="1367:834">
          COMMUNITY
        </p>
        <p className="d-aa17ac78e3" data-node-id="1367:835">
          RSVP
        </p>
      </div>
      <div className="d-7d996d1b84" data-node-id="1367:836" data-name="RSVP / Invitation">
        <div className="d-20e6745efc" data-node-id="1367:837">
          <p className="d-623df6af32">{"Join us on\nMeetup."}</p>
        </div>
        <p className="d-ab1efe5bd4" data-node-id="1367:838">
          RSVP to the event and stay connected with community announcements.
        </p>
      </div>
      <SiteLink buttonTone="orange" className="d-1f8f4797f4" data-node-id="1367:839" data-name="RSVP / RSVP on Meetup" href={siteLinks.meetup}>
        <p className="d-cf01328ee8" data-node-id="I1367:839;5:30">
          RSVP on Meetup
        </p>
        <div className="d-4725149c0e" data-node-id="I1367:839;15:32" data-name="Arrow">
          <img alt="" className="d-511e8f31d4" src={imgArrow} />
        </div>
      </SiteLink>
      <div className="d-3c2f073db3" data-node-id="1367:840" data-name="RSVP / Completion">
        <div className="d-26625795f6" data-node-id="1367:841" data-name="RSVP / Divider" />
        <div className="d-14dcff3bc1" data-node-id="1367:842" data-name="RSVP / Confirmation row">
          <SiteCheckbox className="d-96378a4980" data-node-id="1367:843" data-name="RSVP / Checkbox" checked={completed} onClick={() => setCompleted(!completed)}>
            {completed && (
              <div className="d-682bfbc359" data-node-id="1367:844" data-name="RSVP / Pixel check">
                <img alt="" className="d-511e8f31d4" src={imgRsvpPixelCheck} />
              </div>
            )}
          </SiteCheckbox>
          <div className="d-f5f399abfc" data-node-id="1367:846">
            <p className="d-73a26a6b50">I’ve completed my</p>
            <p className="d-9e2417ac68">Meetup RSVP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegistrationMobile() {
  return (
    <div className="d-3c9f0988a3" data-node-id="1367:780" data-name="Registration — Mobile">
      <SiteHeader className="d-7794366a59 site-header" data-node-id="1367:781" data-name="Navigation / Mobile">
        <SiteBrand data-node-id="1367:782" />
        <SiteLink className="d-8213d7a805" data-node-id="1367:786" data-name="Navigation / Explore" href={"/#experience"}>
          <p className="d-d21e8bada1" data-node-id="1367:787">
            Explore
          </p>
        </SiteLink>
      </SiteHeader>
      <div className="d-db1f158724" data-node-id="1367:793" data-name="Registration / Mobile admission desk">
        <p className="d-11ea5ff482" data-node-id="1367:794">
          REGISTRATION / THE NEXT CHAPTER
        </p>
        <div className="d-604c817326" data-node-id="1367:795" data-name="Registration / You’re early">
          <div className="d-c08309e7a2" data-node-id="1367:796" role="heading" aria-level={1}>
            <p className="d-90f3a58a30">YOU’RE</p>
            <p className="d-1d948fc99e">EARLY.</p>
          </div>
        </div>
        <div className="d-c197716cad" data-node-id="1367:797" data-name="Registration / Early invitation">
          <p className="d-e17191e08b" data-node-id="1367:798">
            That’s a good thing.
          </p>
          <div className="d-cef894190b" data-node-id="1367:799">
            <p className="d-143d1e5b1d">Date, venue and registration details</p>
            <p className="d-143d1e5b1d">will be announced here soon.</p>
            <p className="d-e894d19a93">The next chapter is taking shape.</p>
          </div>
          <SiteLink buttonTone="orange" className="d-d4e2f56eff" data-node-id="1367:800" data-name="Registration / Back to exploring" href={"/#home"}>
            <p className="d-ad21a68151" data-node-id="I1367:800;5:30">
              Back to exploring
            </p>
            <div className="d-4725149c0e" data-node-id="I1367:800;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
        </div>
        <div className="d-594a064392" data-node-id="1367:801" data-name="Admission / Next chapter — Mobile ticket">
          <div className="d-91fc8708c4" data-node-id="1367:802">
            <div className="d-c3905a3b54">
              <div className="d-84e4136834" data-name="Admission / Next chapter — Mobile ticket">
                <div className="d-507e719121" data-node-id="I1367:802;1059:505" data-name="Ticket / Stepped outline">
                  <img alt="" className="d-511e8f31d4" src={imgTicketSteppedOutline} />
                </div>
                <SiteLink className="d-c833ecffb1" data-node-id="I1367:802;1059:506" href={"/#home"}>
                  aws / STUDENT COMMUNITY DAY
                </SiteLink>
                <div className="d-a578d1bfe1" data-node-id="I1367:802;1059:507" data-name="Ticket / Top rule" />
                <div className="d-a78be7486b" data-node-id="I1367:802;1059:508">
                  <p className="d-c85d59d8dc">THE NEXT</p>
                  <p className="d-83b276799c">CHAPTER.</p>
                </div>
                <div className="d-ab04b6cee1" data-node-id="I1367:802;1059:509">
                  <p className="d-63cb8532db">STARTS WITH</p>
                  <p className="d-37e9bcdf1f">YOUR CURIOSITY.</p>
                </div>
                <div className="d-790e070aa2" data-node-id="I1367:802;1059:510" data-name="Ticket / Assembly plus">
                  <img alt="" className="d-511e8f31d4" src={imgTicketAssemblyPlus} />
                </div>
                <div className="d-b8115d5fc0" data-node-id="I1367:802;1059:511" data-name="Ticket / Square perforation">
                  <img alt="" className="d-511e8f31d4" src={imgTicketSquarePerforation} />
                </div>
                <p className="d-81d7223182" data-node-id="I1367:802;1059:512">
                  REGISTRATION
                </p>
                <p className="d-ff1b9b6c84" data-node-id="I1367:802;1059:513">
                  COMING SOON
                </p>
                <div className="d-cf401d4ea7" data-node-id="I1367:802;1059:514" data-name="Ticket / Decorative print code">
                  <img alt="" className="d-511e8f31d4" src={imgTicketDecorativePrintCode} />
                </div>
                <p className="d-039c2c9e55" data-node-id="I1367:802;1059:515">
                  SCD / NEXT WAVE
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-fd07aa37f7" data-node-id="1367:803" data-name="Registration / Announcement note">
          <div className="d-31f28ff034" data-node-id="1367:804" data-name="Status / Announcement pending" />
          <p className="d-9003e36c9a" data-node-id="1367:805">
            REGISTRATION DETAILS / COMING SOON
          </p>
        </div>
      </div>
      <div className="d-5a740a404a" data-node-id="1367:806" data-name="Registration / Mobile details pending">
        <div className="d-43f50fc4ff" data-node-id="1367:807" data-name="Status / DATE">
          <p className="d-6e37333e29" data-node-id="1367:808">
            DATE
          </p>
          <p className="d-5b27af2011" data-node-id="1367:809">
            To be announced
          </p>
        </div>
        <div className="d-43f50fc4ff" data-node-id="1367:810" data-name="Status / VENUE">
          <p className="d-6e37333e29" data-node-id="1367:811">
            VENUE
          </p>
          <p className="d-5b27af2011" data-node-id="1367:812">
            To be announced
          </p>
        </div>
        <div className="d-43f50fc4ff" data-node-id="1367:813" data-name="Status / REGISTRATION">
          <p className="d-6e37333e29" data-node-id="1367:814">
            REGISTRATION
          </p>
          <p className="d-5b27af2011" data-node-id="1367:815">
            Coming soon
          </p>
        </div>
      </div>
      <div className="d-4f2931b589" data-node-id="1367:816" data-name="Registration / Community RSVP — Mobile">
        <div className="d-c17ebbd7fc pixel-border pixel-border-cyan-navy" data-node-id="1367:817" data-name="RSVP / Cyan-to-navy pixel transition">
          <img alt="" className="d-511e8f31d4" src={imgRsvpCyanToNavyPixelTransition} />
        </div>
        <ScdRegistrationMeetupRsvpMobile className="d-776ab3f7b6" />
      </div>
      <BadgeStudio mobile />
      <div className="d-e6fc559f21" data-node-id="1367:847" data-name="Registration / Before the details arrive — Mobile">
        <div className="d-c589fabaed" data-node-id="1367:848" data-name="Registration / Section index">
          <p className="d-5f1f28fe2d" data-node-id="1367:849">
            WHILE YOU’RE HERE
          </p>
          <p className="d-e1908a6b66" data-node-id="1367:850">
            A LITTLE CURIOSITY GOES A LONG WAY.
          </p>
        </div>
        <div className="d-2055d7bc3c" data-node-id="1367:851" data-name="Registration / Invitation">
          <div className="d-d0158f7a9a" data-node-id="1367:852">
            <p className="d-6ee5fa6884">Make a little</p>
            <p className="d-6ee5fa6884">room for</p>
            <p className="d-f42ae1416f">possibility.</p>
          </div>
          <p className="d-18ad0cf623" data-node-id="1367:853">
            Explore the programme, meet the community and see what we are building together.
          </p>
          <SiteLink hoverTone="orange" buttonTone="navy" className="d-49c8885528" data-node-id="1367:854" data-name="Registration / Explore the programme" href="/#timeline">
            <p className="d-7669a2de49" data-node-id="I1367:854;5:30">
              Explore the programme
            </p>
            <div className="d-4725149c0e" data-node-id="I1367:854;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow1} />
            </div>
          </SiteLink>
        </div>
        <div className="d-a5386ee1f0" data-node-id="1367:855" data-name="Registration / Details to follow">
          <div className="d-1a9cf51344" data-node-id="1367:856" data-name="Registration / Event details">
            <p className="d-69a2c1c4a5" data-node-id="1367:857">
              01
            </p>
            <div className="d-06b8e507a5" data-node-id="1367:858" data-name="Registration / Event details copy">
              <p className="d-2a04321fae" data-node-id="1367:859">
                Event details
              </p>
              <p className="d-c37f273d0b" data-node-id="1367:860">
                The date and venue will appear here once confirmed.
              </p>
            </div>
          </div>
          <div className="d-1a9cf51344" data-node-id="1367:861" data-name="Registration / How to join">
            <p className="d-69a2c1c4a5" data-node-id="1367:862">
              02
            </p>
            <div className="d-06b8e507a5" data-node-id="1367:863" data-name="Registration / How to join copy">
              <p className="d-2a04321fae" data-node-id="1367:864">
                How to join
              </p>
              <p className="d-c37f273d0b" data-node-id="1367:865">
                Registration instructions will be shared here.
              </p>
            </div>
          </div>
          <div className="d-1a9cf51344" data-node-id="1367:866" data-name="Registration / Your first step">
            <p className="d-69a2c1c4a5" data-node-id="1367:867">
              03
            </p>
            <div className="d-06b8e507a5" data-node-id="1367:868" data-name="Registration / Your first step copy">
              <p className="d-2a04321fae" data-node-id="1367:869">
                Your first step
              </p>
              <p className="d-c37f273d0b" data-node-id="1367:870">
                Bring your questions. We’ll build from there.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-c17ebbd7fc pixel-border pixel-border-paper-navy" data-node-id="1367:871" data-name="Registration / Paper-to-navy footer transition">
        <img alt="" className="d-511e8f31d4" src={imgRegistrationPaperToNavyFooterTransition} />
      </div>
      <div className="d-46be79a14c" data-node-id="1476:836" data-name="Footer / Common — Mobile">
        <div className="d-3c2f073db3" data-node-id="1476:837" data-name="Footer / Stay connected">
          <p className="d-5f89f0b035" data-node-id="1476:838">
            THE DAY IS JUST THE START.
          </p>
          <div className="d-9653dcf1ac" data-node-id="1476:839" data-name="Footer / Copy and community">
            <div className="d-c67767f3cf" data-node-id="1476:840">
              <p className="d-63e7c83bf6">Keep the</p>
              <p className="d-63e7c83bf6">conversation</p>
              <p className="d-84bf8673ce">going.</p>
            </div>
            <div className="d-6ecc56c4c7" data-node-id="1476:841" data-name="Footer / Community connection">
              <div className="d-6d70debfa3" data-node-id="1476:842" data-name="Connection / Left rail" />
              <div className="d-5bdce84dcb" data-node-id="1476:843" data-name="Connection / Right rail" />
              <div className="d-1cf81e2c0a" data-node-id="1476:844" data-name="Connection / Left pixel" />
              <div className="d-14b239ee64" data-node-id="1476:845" data-name="Connection / Right pixel" />
              <div className="d-c97a4ecbc9" data-node-id="1476:846" data-name="Approved / Woven links">
                <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
              </div>
            </div>
          </div>
          <div className="d-f27740a856" data-node-id="1476:847">
            <p className="d-897a3c8a4f">A little more curiosity.</p>
            <p className="d-6a4f4f832e">A lot more community.</p>
          </div>
        </div>
        <div className="d-a238f29836" data-node-id="1476:848" data-name="Footer / Social channels">
          <div className="d-43f50fc4ff" data-node-id="1476:849" data-name="Footer / LinkedIn">
            <p className="d-a093f0910c" data-node-id="1476:850">
              01 / LINK UP
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:851" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
              <p className="d-ed3e8425eb" data-node-id="I1476:851;5:30">
                LinkedIn
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:851;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow2} />
              </div>
            </SiteLink>
            <div className="d-d0f3b39067" data-node-id="1476:852" data-name="Social / Open rule" />
          </div>
          <div className="d-43f50fc4ff" data-node-id="1476:853" data-name="Footer / Instagram">
            <p className="d-19c923c9d7" data-node-id="1476:854">
              02 / FOLLOW ALONG
            </p>
            <SiteLink className="d-da4e504246" data-node-id="1476:855" data-name="Social / Instagram" href={siteLinks.instagram}>
              <p className="d-ed3e8425eb" data-node-id="I1476:855;5:30">
                Instagram
              </p>
              <div className="d-4725149c0e" data-node-id="I1476:855;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow3} />
              </div>
            </SiteLink>
            <div className="d-23976039ee" data-node-id="1476:856" data-name="Social / Open rule" />
          </div>
        </div>
        <div className="d-116660ca67" data-node-id="1476:857" data-name="Footer / Quiet divider" />
        <div className="d-3c2f073db3" data-node-id="1476:858" data-name="Footer / Utility">
          <div className="d-f6b8f3f4a8" data-node-id="1476:859" data-name="Footer / Brand and return">
            <SiteBrand data-node-id="1476:860" />
            <SiteLink className="d-2458e22cbe" data-node-id="1476:864" data-name="Footer / Back to top" href={"#top"}>
              <p className="d-fe8d7a0908" data-node-id="1476:865">
                Back to top ↑
              </p>
            </SiteLink>
          </div>
          <p className="d-1be0a328f7" data-node-id="1476:866">
            STUDENT LED. COMMUNITY POWERED.
          </p>
        </div>
      </div>
    </div>
  );
}
