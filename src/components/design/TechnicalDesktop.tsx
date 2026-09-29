import { SiteBrand } from "../SiteBrand";
import { TrackArtwork } from "../TrackArtwork";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { SignalStitch } from "../SignalStitch";
import { RegistrationButton } from "../RegistrationButton";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 874:8915.
const imgScdTechnicalCompileBrackets = "/assets/874-8915-7e810.svg";
const imgArrow1 = "/assets/865-7675-207b4.svg";
const imgSectionDividerPreparationToContinue = "/assets/874-8915-fb0a8.svg";
const imgAccentPixelStitch = "/assets/874-8915-7bab5.svg";
const imgApprovedWovenLinks = "/assets/1265-3035-453bd.svg";
const imgArrow2 = "/assets/1168-498-5d2c8.svg";
const imgArrow3 = "/assets/1168-498-378aa.svg";

function ScdTechnicalCompileBrackets({ className }: { className: string }) {
  return (
    <div className={className} data-node-id="666:2087" data-name="SCD / Technical / Compile brackets">
      <TrackArtwork kind="compile" className="d-511e8f31d4" src={imgScdTechnicalCompileBrackets} />
    </div>
  );
}

export default function TechnicalDesktop() {
  return (
    <div className="d-3c9f0988a3" data-node-id="874:8915" data-name="Technical — Desktop">
      <SiteHeader className="d-e88f0dd487 site-header" data-node-id="874:8916" data-name="Navigation v2">
        <SiteBrand data-node-id="874:8917" />
        <div className="d-0ec2f0208b" data-node-id="874:8918" data-name="Nav links v2">
          <div className="d-467c585ef8" data-node-id="874:8919">
            <SiteLink className="d-95907800fd" href={"/tracks"}>01 Tracks</SiteLink>
          </div>
          <SiteLink className="d-0da5c9fe56" data-node-id="874:8920" href={"/technical"}>
            <p className="d-95907800fd">02 Technical</p>
          </SiteLink>
          <div className="d-467c585ef8" data-node-id="874:8921">
            <SiteLink className="d-95907800fd" href={"/non-technical"}>03 Non-tech</SiteLink>
          </div>
          <div className="d-467c585ef8" data-node-id="874:8922">
            <SiteLink className="d-95907800fd" href={"/#timeline"}>04 Timeline</SiteLink>
          </div>
        </div>
        <RegistrationButton />
      </SiteHeader>
      <div className="d-5782fa7dda" data-node-id="874:8935" data-name="Technical / Hero — Desktop">
        <div className="d-4de67d6c92" data-node-id="874:8936" data-name="Hero / Index">
          <SiteLink className="d-2669efa126" data-node-id="874:8937" href={"/tracks"}>
            ← ALL EXPERIENCES
          </SiteLink>
          <p className="d-a7403a2b46" data-node-id="874:8938">
            01 / TECHNICAL — PROGRAMME PREVIEW
          </p>
        </div>
        <div className="d-24afe222d2" data-node-id="874:8939" role="heading" aria-level={1}>
          <p className="d-6e5523dbc6">IDEAS INTO</p>
          <p className="d-2fc83ac3f5">ACTION.</p>
        </div>
        <div className="d-1e75c12a0f" data-node-id="874:8940" data-name="Hero / Compile and introduction">
          <ScdTechnicalCompileBrackets className="d-ed1e382ab8" />
          <div className="d-c99acbbd56" data-node-id="874:8942" data-name="Hero / Technical introduction">
            <div className="d-a15186a4fc" data-node-id="874:8943">
              <p className="d-2a8bd1889a">CURIOUS MINDS.</p>
              <p className="d-2158fa6ddb">REAL POSSIBILITIES.</p>
            </div>
            <p className="d-64e37b773b" data-node-id="874:8944">
              Get closer to the cloud. Explore AI. Turn your curiosity into something you can build.
            </p>
            <SiteLink buttonTone="orange" className="d-44f977d6f9" data-node-id="874:8945" data-name="Action / Registration info" href={"/registration"}>
              <p className="d-cf01328ee8" data-node-id="I874:8945;5:30">
                Registration info
              </p>
              <div className="d-4725149c0e" data-node-id="I874:8945;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
            <div className="d-1c5e80253f" data-node-id="874:8946">
              <p className="d-ebed470a6c">SESSIONS + SPEAKERS + TIMINGS</p>
              <p className="d-d43f566f28">TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-a566f726bd" data-node-id="874:8947" data-name="Technical / Programme — Desktop">
        <div className="d-64b69ec810" data-node-id="874:8948" data-name="Programme / Introduction">
          <div className="d-9bc9950760" data-node-id="874:8949">
            <p className="d-5069c0bf54">THREE WAYS</p>
            <p className="d-287d1f8085">TO GO DEEPER.</p>
          </div>
          <p className="d-549e2da3ec" data-node-id="874:8950">
            A first look at the technical themes. The final line-up, formats and timings will be announced.
          </p>
        </div>
        <div className="d-f7e6db2c74" data-node-id="874:8951" data-name="Programme / Three theme fields">
          <div className="d-0c4da33e5c" data-node-id="874:8952" data-name="SCD / Technical / Theme panel / Desktop">
            <p className="d-888b47fa83" data-node-id="I874:8952;667:2541">
              01 / CLOUD FOUNDATIONS
            </p>
            <p className="d-94d5a91ee2" data-node-id="I874:8952;667:2542">
              CLOUD
            </p>
            <div className="d-c4064b08a6" data-node-id="I874:8952;667:2543" data-name="Theme / Rule" />
            <div className="d-d5153bf1ae" data-node-id="I874:8952;667:2544">
              <p className="d-edce8460ce">Understand</p>
              <p className="d-e64f4edba4">the cloud.</p>
            </div>
            <p className="d-b2638fb3c2" data-node-id="I874:8952;667:2545">
              Explore the building blocks behind cloud technology — and how they can become the starting point for your next idea.
            </p>
            <div className="d-3133ffc36f" data-node-id="I874:8952;667:2546">
              <p className="d-ebed470a6c">FORMAT + SPEAKER</p>
              <p className="d-d43f566f28">TO BE ANNOUNCED</p>
            </div>
          </div>
          <div className="d-88921b4168" data-node-id="874:8953" data-name="Theme / AI">
            <p className="d-888b47fa83" data-node-id="I874:8953;667:2541">
              02 / AI EXPLORATION
            </p>
            <p className="d-94d5a91ee2" data-node-id="I874:8953;667:2542">
              AI
            </p>
            <div className="d-c4064b08a6" data-node-id="I874:8953;667:2543" data-name="Theme / Rule" />
            <div className="d-d5153bf1ae" data-node-id="I874:8953;667:2544">
              <p className="d-edce8460ce">Ask what</p>
              <p className="d-e64f4edba4">AI can do.</p>
            </div>
            <p className="d-b2638fb3c2" data-node-id="I874:8953;667:2545">
              Follow your questions into the world of AI. Explore the ideas and tools that are opening up new ways to create.
            </p>
            <div className="d-3133ffc36f" data-node-id="I874:8953;667:2546">
              <p className="d-ebed470a6c">FORMAT + SPEAKER</p>
              <p className="d-d43f566f28">TO BE ANNOUNCED</p>
            </div>
          </div>
          <div className="d-1ce5ee9503" data-node-id="874:8954" data-name="Theme / BUILD">
            <p className="d-2a82521e63" data-node-id="I874:8954;667:2541">
              03 / HANDS-ON BUILDING
            </p>
            <p className="d-0f2274cd94" data-node-id="I874:8954;667:2542">
              BUILD
            </p>
            <div className="d-fa05bef8aa" data-node-id="I874:8954;667:2543" data-name="Theme / Rule" />
            <div className="d-01b8dd4d38" data-node-id="I874:8954;667:2544">
              <p className="d-edce8460ce">Make the</p>
              <p className="d-e64f4edba4">next move.</p>
            </div>
            <p className="d-d53caec9f0" data-node-id="I874:8954;667:2545">
              Connect what you learn with what you want to make. Explore tools, experiment with ideas and discover your next project.
            </p>
            <div className="d-f056d2414f" data-node-id="I874:8954;667:2546">
              <p className="d-ebed470a6c">FORMAT + SPEAKER</p>
              <p className="d-d43f566f28">TO BE ANNOUNCED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-6075610caa" data-node-id="874:8955" data-name="Technical / Preparation — Desktop">
        <div className="d-20556b24a8" data-node-id="874:8956" data-name="Preparation / Invitation">
          <p className="d-d4cf649985" data-node-id="874:8957">
            BEFORE YOU JOIN
          </p>
          <div className="d-7022604942" data-node-id="874:8958">
            <p className="d-5069c0bf54">BRING YOUR</p>
            <p className="d-287d1f8085">NEXT QUESTION.</p>
          </div>
          <p className="d-c501c3aa8c" data-node-id="874:8959">
            Curious about cloud, AI or building with new tools? Keep that curiosity close. Preparation details will follow with the final programme.
          </p>
        </div>
        <div className="d-95644d43f8" data-node-id="874:8960" data-name="Preparation / Details">
          <div className="d-3cb220a981" data-node-id="874:8961" data-name="Preparation / EXPERIENCE LEVEL">
            <div className="d-f8b122a797" data-node-id="874:8962" data-name="Rule" />
            <p className="d-b83d2d963b" data-node-id="874:8963">
              EXPERIENCE LEVEL
            </p>
            <p className="d-73728e76c4" data-node-id="874:8964">
              TO BE ANNOUNCED
            </p>
          </div>
          <div className="d-3cb220a981" data-node-id="874:8965" data-name="Preparation / EQUIPMENT + SETUP">
            <div className="d-f8b122a797" data-node-id="874:8966" data-name="Rule" />
            <p className="d-b83d2d963b" data-node-id="874:8967">
              EQUIPMENT + SETUP
            </p>
            <p className="d-73728e76c4" data-node-id="874:8968">
              TO BE ANNOUNCED
            </p>
          </div>
          <div className="d-3cb220a981" data-node-id="874:8969" data-name="Preparation / SESSION ACCESS">
            <div className="d-f8b122a797" data-node-id="874:8970" data-name="Rule" />
            <p className="d-b83d2d963b" data-node-id="874:8971">
              SESSION ACCESS
            </p>
            <p className="d-73728e76c4" data-node-id="874:8972">
              TO BE ANNOUNCED
            </p>
          </div>
          <SiteLink buttonTone="orange" className="d-44f977d6f9" data-node-id="874:8973" data-name="Action / Registration info" href={"/registration"}>
            <p className="d-cf01328ee8" data-node-id="I874:8973;5:30">
              Registration info
            </p>
            <div className="d-4725149c0e" data-node-id="I874:8973;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow1} />
            </div>
          </SiteLink>
        </div>
      </div>
      <div className="d-2c32abdc78 pixel-border pixel-border-paper-navy" data-node-id="1413:622" data-name="Section divider / Preparation to continue">
        <img alt="" className="d-511e8f31d4" src={imgSectionDividerPreparationToContinue} />
      </div>
      <div className="d-b0ce775de6" data-node-id="874:8974" data-name="Technical / Continue — Desktop">
        <div className="d-af8a6e8826" data-node-id="874:8975" data-name="Continue / Copy">
          <div className="d-739b134aa7" data-node-id="874:8976" data-name="Accent / Pixel stitch">
            <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentPixelStitch} />
          </div>
          <div className="d-1089330ab3" data-node-id="874:8981">
            <p className="d-9c7634671c">A DIFFERENT</p>
            <p className="d-b593672e9c">KIND OF SPARK.</p>
          </div>
        </div>
        <div className="d-6c497b55c2" data-node-id="874:8982" data-name="Continue / Actions">
          <SiteLink hoverTone="lime" buttonTone="violet" className="d-e69857fced" data-node-id="874:8983" data-name="Action / Explore non-technical" href={"/non-technical"}>
            <p className="d-cf01328ee8" data-node-id="I874:8983;5:30">
              Explore non-technical
            </p>
            <div className="d-4725149c0e" data-node-id="I874:8983;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow1} />
            </div>
          </SiteLink>
          <SiteLink hoverTone="cyan" buttonTone="white" className="d-26815d17f7" data-node-id="874:8984" data-name="Action / View event timeline" href={"/#timeline"}>
            <p className="d-cf01328ee8" data-node-id="I874:8984;5:30">
              View event timeline
            </p>
            <div className="d-4725149c0e" data-node-id="I874:8984;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow1} />
            </div>
          </SiteLink>
        </div>
      </div>
      <div className="d-5c24635908" data-node-id="1476:628" data-name="Footer / Common — Desktop">
        <div className="d-78d3b03090" data-node-id="1476:629" data-name="Footer / Stay connected">
          <div className="d-ec1083a29e" data-node-id="1476:630" data-name="Footer / Invitation">
            <p className="d-316c95d37a" data-node-id="1476:631">
              THE DAY IS JUST THE START.
            </p>
            <div className="d-079cb0f4b8" data-node-id="1476:632">
              <p className="d-6ee5fa6884">Keep the</p>
              <p className="d-6ee5fa6884">conversation</p>
              <p className="d-f42ae1416f">going.</p>
            </div>
            <div className="d-bf5113e67d" data-node-id="1476:633">
              <p className="d-143d1e5b1d">A little more curiosity.</p>
              <p className="d-e894d19a93">A lot more community.</p>
            </div>
          </div>
          <div className="d-4556061f38" data-node-id="1476:634" data-name="Footer / Community connection">
            <div className="d-229a3a46e3" data-node-id="1476:635" data-name="Connection / Left rail" />
            <div className="d-c301621b07" data-node-id="1476:636" data-name="Connection / Right rail" />
            <div className="d-9e7418bb75" data-node-id="1476:637" data-name="Connection / Left pixel" />
            <div className="d-3a8fd5fe1d" data-node-id="1476:638" data-name="Connection / Right pixel" />
            <div className="d-b33888044b" data-node-id="1476:639" data-name="Approved / Woven links">
              <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
            </div>
          </div>
          <div className="d-bc1cc41ab7" data-node-id="1476:640" data-name="Footer / Social channels">
            <p className="d-393807428f" data-node-id="1476:641">
              FIND YOUR PEOPLE
            </p>
            <div className="d-9c698a8db5" data-node-id="1476:642" data-name="Footer / Social links">
              <div className="d-1969baa6ce" data-node-id="1476:643" data-name="Footer / LinkedIn">
                <p className="d-24df9d72c3" data-node-id="1476:644">
                  01 / LINK UP
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:645" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:645;5:30">
                    LinkedIn
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:645;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow2} />
                  </div>
                </SiteLink>
                <div className="d-20b3bae21a" data-node-id="1476:646" data-name="Social / Open rule" />
              </div>
              <div className="d-1969baa6ce" data-node-id="1476:647" data-name="Footer / Instagram">
                <p className="d-14d435a7de" data-node-id="1476:648">
                  02 / FOLLOW ALONG
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:649" data-name="Social / Instagram" href={siteLinks.instagram}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:649;5:30">
                    Instagram
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:649;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow3} />
                  </div>
                </SiteLink>
                <div className="d-d800ec1288" data-node-id="1476:650" data-name="Social / Open rule" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-e2d3cf23e7" data-node-id="1476:652" data-name="Footer / Quiet divider" />
        <div className="d-cd7fcf8b0a" data-node-id="1476:653" data-name="Footer / Utility">
          <SiteBrand data-node-id="1476:654" />
          <p className="d-393807428f" data-node-id="1476:658">
            STUDENT LED. COMMUNITY POWERED.
          </p>
          <SiteLink className="d-a959ee36a6" data-node-id="1476:659" href={"#top"}>
            Back to top
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
