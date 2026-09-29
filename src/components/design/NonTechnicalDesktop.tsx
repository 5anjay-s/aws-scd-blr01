import { SiteBrand } from "../SiteBrand";
import { TrackArtwork } from "../TrackArtwork";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { RegistrationButton } from "../RegistrationButton";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 874:9211.
const imgSharedGlyphOpenExchange = "/assets/874-9211-c568c.svg";
const imgArrow1 = "/assets/865-7675-0b485.svg";
const imgSectionDividerHeroToOpenExchange = "/assets/874-9211-fb0a8.svg";
const imgArrow2 = "/assets/865-7675-207b4.svg";
const imgApprovedWovenLinks = "/assets/1265-3035-453bd.svg";
const imgArrow3 = "/assets/1168-498-5d2c8.svg";
const imgArrow4 = "/assets/1168-498-378aa.svg";

function ScdArtworkOpenExchangePixelQuotations({ className }: { className: string }) {
  return (
    <div className={className} data-node-id="665:2047" data-name="SCD / Artwork / Open exchange pixel quotations">
      <div className="d-b4394b114b" data-node-id="670:2185" data-name="Shared glyph / Open exchange">
        <TrackArtwork kind="quotes" className="d-511e8f31d4" src={imgSharedGlyphOpenExchange} />
      </div>
    </div>
  );
}

export default function NonTechnicalDesktop() {
  return (
    <div className="d-3c9f0988a3" data-node-id="874:9211" data-name="Non-technical — Desktop">
      <SiteHeader className="d-e88f0dd487 site-header" data-node-id="874:9212" data-name="Navigation v2">
        <SiteBrand data-node-id="874:9213" />
        <div className="d-0ec2f0208b" data-node-id="874:9214" data-name="Nav links v2">
          <div className="d-467c585ef8" data-node-id="874:9215">
            <SiteLink className="d-95907800fd" href={"/tracks"}>01 Tracks</SiteLink>
          </div>
          <div className="d-467c585ef8" data-node-id="874:9216">
            <SiteLink className="d-95907800fd" href={"/technical"}>02 Technical</SiteLink>
          </div>
          <SiteLink className="d-0da5c9fe56" data-node-id="874:9217" href={"/non-technical"}>
            <p className="d-95907800fd">03 Non-tech</p>
          </SiteLink>
          <div className="d-467c585ef8" data-node-id="874:9218">
            <SiteLink className="d-95907800fd" href={"/#timeline"}>04 Timeline</SiteLink>
          </div>
        </div>
        <RegistrationButton />
      </SiteHeader>
      <div className="d-320c8a2508" data-node-id="874:9231" data-name="Nontechnical / Beyond the code — Hero">
        <p className="d-53452c27e4" data-node-id="874:9232">
          02 / NON-TECHNICAL
        </p>
        <div className="d-f7ce1480c6" data-node-id="874:9233" data-name="Hero / Editorial grid">
          <div className="d-395823c23b" data-node-id="874:9234" data-name="Hero / Narrative">
            <div className="d-d0cc2826a8" data-node-id="874:9235" role="heading" aria-level={1}>
              <p className="d-3fb1894b4a">BEYOND</p>
              <p className="d-13cc595302">THE CODE.</p>
            </div>
            <p className="d-160b8bdb33" data-node-id="874:9236">
              Bring your perspective. Explore ideas, meet new people and make room for a different kind of challenge.
            </p>
            <SiteLink hoverTone="violet" buttonTone="navy" className="d-271d08db71" data-node-id="874:9237" data-name="Action / Explore the programme" href={"/#timeline"}>
              <p className="d-7669a2de49" data-node-id="I874:9237;5:30">
                Explore the programme
              </p>
              <div className="d-4725149c0e" data-node-id="I874:9237;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
            <div className="d-fded5a1cec" data-node-id="874:9238" data-name="Hero / Preview status">
              <p className="d-14f73599e8" data-node-id="874:9239">
                PROGRAMME PREVIEW
              </p>
              <p className="d-47fe5acf21" data-node-id="874:9240">
                Details to be announced
              </p>
            </div>
          </div>
          <div className="d-4016974eb4" data-node-id="874:9241" data-name="Hero / Open exchange artwork">
            <ScdArtworkOpenExchangePixelQuotations className="d-140dcac8e4" />
            <p className="d-d1033f088b" data-node-id="874:9243">
              DIFFERENT MINDS. COMMON GROUND.
            </p>
          </div>
        </div>
      </div>
      <div className="d-2c32abdc78 pixel-border pixel-border-paper-navy" data-node-id="1413:627" data-name="Section divider / Hero to open exchange">
        <img alt="" className="d-511e8f31d4" src={imgSectionDividerHeroToOpenExchange} />
      </div>
      <div className="d-a566f726bd" data-node-id="874:9244" data-name="Nontechnical / Open exchange — Programme">
        <div className="d-81628b8872" data-node-id="874:9245" data-name="Programme / Introduction">
          <div className="d-325bf6f6e7" data-node-id="874:9246" data-name="Programme / Heading group">
            <p className="d-78ba1195af" data-node-id="874:9247">
              A PLACE FOR EVERY PERSPECTIVE
            </p>
            <div className="d-9fa213fbbe" data-node-id="874:9248">
              <p className="d-53918f0803">OPEN</p>
              <p className="d-941138427e">EXCHANGE.</p>
            </div>
          </div>
          <div className="d-f1679ad66c" data-node-id="874:9249" data-name="Programme / Description group">
            <p className="d-d429737306" data-node-id="874:9250">
              Ideas grow when different people get involved. Here is a preview of the kinds of experiences being explored for the non-technical track.
            </p>
            <p className="d-2fb5a0fa12" data-node-id="874:9251">
              THEMES BELOW / FORMATS TO BE ANNOUNCED
            </p>
          </div>
        </div>
        <div className="d-96c02da9c3" data-node-id="874:9252" data-name="Programme / 01 COLLABORATE">
          <div className="d-fe6c6fa3bf" data-node-id="874:9253" data-name="Chapter / Number">
            <p className="d-2f24b8f57e" data-node-id="874:9254">
              01
            </p>
          </div>
          <div className="d-5190dfe567" data-node-id="874:9255" data-name="Chapter / Topic">
            <p className="d-63c423661a" data-node-id="874:9256">
              COLLABORATE
            </p>
            <div className="d-85e8a98f69" data-node-id="874:9257">
              <p className="d-9c7634671c">THINK</p>
              <p className="d-b593672e9c">TOGETHER.</p>
            </div>
          </div>
          <div className="d-2c555b0457" data-node-id="874:9258" data-name="Chapter / Details">
            <p className="d-8acd9593db" data-node-id="874:9259">
              Share a problem, hear a new point of view and work towards a response together. A space for teamwork and clear communication.
            </p>
            <div className="d-a8db87501d" data-node-id="874:9260">
              <p className="d-ebed470a6c">TEAMWORK / COMMUNICATION</p>
              <p className="d-d43f566f28">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
        <div className="d-dddf5c6c16" data-node-id="874:9261" data-name="Programme / 02 IMAGINE">
          <div className="d-fe6c6fa3bf" data-node-id="874:9262" data-name="Chapter / Number">
            <p className="d-31a4a52b6a" data-node-id="874:9263">
              02
            </p>
          </div>
          <div className="d-65fa648f17" data-node-id="874:9264" data-name="Chapter / Topic">
            <p className="d-63c423661a" data-node-id="874:9265">
              IMAGINE
            </p>
            <div className="d-85e8a98f69" data-node-id="874:9266">
              <p className="d-9c7634671c">MAKE ROOM</p>
              <p className="d-b593672e9c">FOR IDEAS.</p>
            </div>
          </div>
          <div className="d-fd6b592ca0" data-node-id="874:9267" data-name="Chapter / Details">
            <p className="d-8acd9593db" data-node-id="874:9268">
              Look at a familiar challenge from an unexpected angle. Explore creative thinking, shape a concept and make your perspective heard.
            </p>
            <div className="d-a8db87501d" data-node-id="874:9269">
              <p className="d-ebed470a6c">CREATIVITY / STORYTELLING</p>
              <p className="d-d43f566f28">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
        <div className="d-4c9a0c8255" data-node-id="874:9270" data-name="Programme / 03 CONNECT">
          <div className="d-fe6c6fa3bf" data-node-id="874:9271" data-name="Chapter / Number">
            <p className="d-2f24b8f57e" data-node-id="874:9272">
              03
            </p>
          </div>
          <div className="d-5190dfe567" data-node-id="874:9273" data-name="Chapter / Topic">
            <p className="d-63c423661a" data-node-id="874:9274">
              CONNECT
            </p>
            <div className="d-85e8a98f69" data-node-id="874:9275">
              <p className="d-9c7634671c">FIND YOUR</p>
              <p className="d-b593672e9c">PEOPLE.</p>
            </div>
          </div>
          <div className="d-2c555b0457" data-node-id="874:9276" data-name="Chapter / Details">
            <p className="d-8acd9593db" data-node-id="874:9277">
              Start a conversation beyond your usual circle. Exchange interests, discover different perspectives and meet others in the community.
            </p>
            <div className="d-a8db87501d" data-node-id="874:9278">
              <p className="d-ebed470a6c">CONVERSATION / COMMUNITY</p>
              <p className="d-d43f566f28">FORMAT TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-6075610caa" data-node-id="874:9279" data-name="Nontechnical / Before you join">
        <div className="d-77fe1ab20b" data-node-id="874:9280" data-name="Participation / Intro">
          <p className="d-a0d1d4a8bc" data-node-id="874:9281">
            CURIOUS MINDS, SHARED POSSIBILITIES
          </p>
          <div className="d-435c1e6c0e" data-node-id="874:9282">
            <p className="d-5069c0bf54">BRING YOUR WAY</p>
            <p className="d-287d1f8085">OF THINKING.</p>
          </div>
          <p className="d-5007ffeed4" data-node-id="874:9283">
            The programme is taking shape. Check back for the activity line-up and everything you need to take part.
          </p>
          <SiteLink hoverTone="violet" buttonTone="orange" className="d-f1b2e9aab1" data-node-id="874:9284" data-name="Action / Registration info" href={"/registration"}>
            <p className="d-cf01328ee8" data-node-id="I874:9284;5:30">
              Registration info
            </p>
            <div className="d-4725149c0e" data-node-id="I874:9284;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow2} />
            </div>
          </SiteLink>
        </div>
        <div className="d-259f037aa3" data-node-id="874:9285" data-name="Participation / Before you join">
          <p className="d-fd3829ce78" data-node-id="874:9286">
            BEFORE YOU JOIN
          </p>
          <div className="d-c143a98bc5" data-node-id="874:9287" data-name="Rule / Activity line-up" />
          <div className="d-b771137754" data-node-id="874:9288" data-name="Detail / Activity line-up">
            <p className="d-f1ab926c19" data-node-id="874:9289">
              Activity line-up
            </p>
            <p className="d-07bbff703b" data-node-id="874:9290">
              To be announced
            </p>
          </div>
          <div className="d-c143a98bc5" data-node-id="874:9291" data-name="Rule / Formats & participation" />
          <div className="d-b771137754" data-node-id="874:9292" data-name="Detail / Formats & participation">
            <p className="d-f1ab926c19" data-node-id="874:9293">{`Formats & participation`}</p>
            <p className="d-07bbff703b" data-node-id="874:9294">
              To be announced
            </p>
          </div>
          <div className="d-c143a98bc5" data-node-id="874:9295" data-name="Rule / Schedule & location" />
          <div className="d-b771137754" data-node-id="874:9296" data-name="Detail / Schedule & location">
            <p className="d-f1ab926c19" data-node-id="874:9297">{`Schedule & location`}</p>
            <p className="d-07bbff703b" data-node-id="874:9298">
              To be announced
            </p>
          </div>
        </div>
      </div>
      <div className="d-2c32abdc78 pixel-border pixel-border-paper-navy" data-node-id="1413:629" data-name="Section divider / Before joining to continue">
        <img alt="" className="d-511e8f31d4" src={imgSectionDividerHeroToOpenExchange} />
      </div>
      <div className="d-7354b91e02" data-node-id="874:9299" data-name="Nontechnical / Continue exploring">
        <div className="d-df96be6313" data-node-id="874:9300" data-name="Footer / Message">
          <p className="d-f5fe0ad40a" data-node-id="874:9301">
            THE FUTURE IS A GROUP PROJECT.
          </p>
          <div className="d-d2cda3451d" data-node-id="874:9302">
            <p className="d-40ace226fd">CURIOUS ABOUT</p>
            <p className="d-fe6c23de1d">THE TECHNICAL TRACK?</p>
          </div>
        </div>
        <div className="d-7c6644a638" data-node-id="874:9303" data-name="Footer / Actions">
          <SiteLink buttonTone="orange" className="d-e735579edb" data-node-id="874:9304" data-name="Action / Explore technical" href={"/technical"}>
            <p className="d-cf01328ee8" data-node-id="I874:9304;5:30">
              Explore technical
            </p>
            <div className="d-4725149c0e" data-node-id="I874:9304;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow2} />
            </div>
          </SiteLink>
          <SiteLink hoverTone="violet" buttonTone="white" className="d-d66f50b3d3" data-node-id="874:9305" data-name="Action / Back to tracks" href={"/tracks"}>
            <p className="d-cf01328ee8" data-node-id="I874:9305;5:30">
              Back to tracks
            </p>
            <div className="d-4725149c0e" data-node-id="I874:9305;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow2} />
            </div>
          </SiteLink>
        </div>
      </div>
      <div className="d-5c24635908" data-node-id="1476:711" data-name="Footer / Common — Desktop">
        <div className="d-78d3b03090" data-node-id="1476:712" data-name="Footer / Stay connected">
          <div className="d-ec1083a29e" data-node-id="1476:713" data-name="Footer / Invitation">
            <p className="d-316c95d37a" data-node-id="1476:714">
              THE DAY IS JUST THE START.
            </p>
            <div className="d-079cb0f4b8" data-node-id="1476:715">
              <p className="d-6ee5fa6884">Keep the</p>
              <p className="d-6ee5fa6884">conversation</p>
              <p className="d-f42ae1416f">going.</p>
            </div>
            <div className="d-bf5113e67d" data-node-id="1476:716">
              <p className="d-143d1e5b1d">A little more curiosity.</p>
              <p className="d-e894d19a93">A lot more community.</p>
            </div>
          </div>
          <div className="d-4556061f38" data-node-id="1476:717" data-name="Footer / Community connection">
            <div className="d-229a3a46e3" data-node-id="1476:718" data-name="Connection / Left rail" />
            <div className="d-c301621b07" data-node-id="1476:719" data-name="Connection / Right rail" />
            <div className="d-9e7418bb75" data-node-id="1476:720" data-name="Connection / Left pixel" />
            <div className="d-3a8fd5fe1d" data-node-id="1476:721" data-name="Connection / Right pixel" />
            <div className="d-b33888044b" data-node-id="1476:722" data-name="Approved / Woven links">
              <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
            </div>
          </div>
          <div className="d-bc1cc41ab7" data-node-id="1476:723" data-name="Footer / Social channels">
            <p className="d-393807428f" data-node-id="1476:724">
              FIND YOUR PEOPLE
            </p>
            <div className="d-9c698a8db5" data-node-id="1476:725" data-name="Footer / Social links">
              <div className="d-1969baa6ce" data-node-id="1476:726" data-name="Footer / LinkedIn">
                <p className="d-24df9d72c3" data-node-id="1476:727">
                  01 / LINK UP
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:728" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:728;5:30">
                    LinkedIn
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:728;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow3} />
                  </div>
                </SiteLink>
                <div className="d-20b3bae21a" data-node-id="1476:729" data-name="Social / Open rule" />
              </div>
              <div className="d-1969baa6ce" data-node-id="1476:730" data-name="Footer / Instagram">
                <p className="d-14d435a7de" data-node-id="1476:731">
                  02 / FOLLOW ALONG
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:732" data-name="Social / Instagram" href={siteLinks.instagram}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:732;5:30">
                    Instagram
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:732;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow4} />
                  </div>
                </SiteLink>
                <div className="d-d800ec1288" data-node-id="1476:733" data-name="Social / Open rule" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-e2d3cf23e7" data-node-id="1476:735" data-name="Footer / Quiet divider" />
        <div className="d-cd7fcf8b0a" data-node-id="1476:736" data-name="Footer / Utility">
          <SiteBrand data-node-id="1476:737" />
          <p className="d-393807428f" data-node-id="1476:741">
            STUDENT LED. COMMUNITY POWERED.
          </p>
          <SiteLink className="d-a959ee36a6" data-node-id="1476:742" href={"#top"}>
            Back to top
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
