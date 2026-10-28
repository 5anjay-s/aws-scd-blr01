import { ProgrammeSteps } from "../ProgrammeSteps";
import { SignalStitch } from "../SignalStitch";
import { SiteLink } from "../SiteLink";
import { ProgrammeDivider } from "../ProgrammeDivider";
// Source: Figma 00/ Final, node 866:8481.
const imgSteppedProgrammeViolet = "/assets/866-8481-2d4f1.svg";
const imgSteppedProgrammeCyan = "/assets/866-8481-4c9db.svg";
const imgSteppedProgrammeOrange = "/assets/866-8481-32bf2.svg";
const imgAccentPixelStitch = "/assets/866-8481-ae677.svg";
const imgArrow = "/assets/865-7675-0b485.svg";

type ScdFullWidthProgrammePhaseMobileProps = {
  className: string;
  programmeCategory?: string;
  sequence?: string;
  sessionSummary?: string;
  sessionTitle?: string;
  time?: string;
};

function ScdFullWidthProgrammePhaseMobile({ className, programmeCategory = "CHECK-IN", sequence = "01", sessionSummary = "Event-day check-in begins.", sessionTitle = "CHECK-IN & COMMUNITY", time = "TBA" }: ScdFullWidthProgrammePhaseMobileProps) {
  return (
    <div className={className} data-node-id="685:2329" data-name="SCD / Full-width programme phase / Mobile">
      <div className="d-ea38f6601d" data-node-id="685:2330" data-name="Programme / Ledger rule" />
      <div className="d-2a29c9d11d" data-node-id="685:2331" data-name="Phase / Metadata">
        <p className="d-7025c308e6" data-node-id="685:2332">
          {sequence}
        </p>
        <p className="d-510a72407a" data-node-id="685:2333">
          {programmeCategory}
        </p>
        <p className="d-cd228f785d" data-node-id="685:2334">
          {`TIME / ${time}`}
        </p>
      </div>
      <div className="d-7739a64de1" data-node-id="685:2335" data-name="Phase / Content">
        <p className="d-ba765cc2f2" data-node-id="685:2336">
          {sessionTitle}
        </p>
        <p className="d-486b70b514" data-node-id="685:2337">
          {sessionSummary}
        </p>
      </div>
    </div>
  );
}

export default function ProgrammeV2EventTimelineApprovedMobile() {
  return (
    <div className="d-3c9f0988a3" data-node-id="866:8481" data-name="Programme v2 / Event timeline — Approved / Mobile">
      <div className="d-381cf3dbba" data-node-id="866:8482" data-name="Timeline / Masthead">
        <p className="d-a4a5347c5b" data-node-id="866:8483">
          04 / EVENT TIMELINE
        </p>
        <div className="d-2055d7bc3c" data-node-id="866:8484" data-name="Masthead / Composition">
          <div className="d-cec19fa64b" data-node-id="866:8485" data-name="Masthead / Headline">
            <div className="d-0fd138f51e" data-node-id="866:8486">
              <p className="d-8ea7b7754d">THE DAY,</p>
              <p className="d-2682a555d8">UNFOLDED.</p>
            </div>
            <div className="d-e108d164a0" data-node-id="866:8487">
              <p className="d-06214b5362">Check-in, sessions and community time.</p>
              <p className="d-0479ea4484">Plan your day at REVA University.</p>
            </div>
          </div>
          <ProgrammeSteps className="d-dc390b63a9" data-node-id="866:8488" data-name="Art / Programme steps">
            <div className="d-3bc45483ec programme-step" data-node-id="866:8489" data-name="Stepped programme / violet" data-step="03">
              <div className="d-fa7a880df1">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeViolet} />
              </div>
              <p className="d-66900ceb90 programme-step-number" data-node-id="866:8494">03</p>
            </div>
            <div className="d-3bc45483ec programme-step" data-node-id="866:8490" data-name="Stepped programme / cyan" data-step="02">
              <div className="d-c5133ff0d4">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeCyan} />
              </div>
              <p className="d-15844fc407 programme-step-number" data-node-id="866:8493">02</p>
            </div>
            <div className="d-3bc45483ec programme-step" data-node-id="866:8491" data-name="Stepped programme / orange" data-step="01">
              <div className="d-7153374ed5">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeOrange} />
              </div>
              <p className="d-0ec15d1280 programme-step-number" data-node-id="866:8492">01</p>
            </div>
            <p className="d-9fc2a563fc" data-node-id="866:8495">
              5 NOVEMBER / MAIN DAY
            </p>
          </ProgrammeSteps>
        </div>
      </div>
      <div className="d-1c9404c1d4" data-node-id="866:8496" data-name="Timeline / Status rail">
        <p className="d-4b43c08078" data-node-id="866:8497">
          5 NOV 2026 / ALL TIMES IST
        </p>
        <p className="d-4b43c08078" data-node-id="866:8498">
          PROVISIONAL TIMINGS
        </p>
      </div>
      <div className="d-9b2731d2f8" data-node-id="866:8499" data-name="Programme / Full-width schedule">
        <div className="d-4730841a9d" data-node-id="866:8500" data-name="Programme / Full-width introduction">
          <div className="d-7739a64de1" data-node-id="866:8501" data-name="Programme / Title">
            <p className="d-937932610c" data-node-id="866:8502">
              THE PROGRAMME
            </p>
            <div className="d-d9d082fa8a" data-node-id="866:8503">
              <p className="d-8305ee571e">MAIN DAY.</p>
              <p className="d-8305ee571e">AT A</p>
              <p className="d-e358ca9dbc">GLANCE.</p>
            </div>
          </div>
          <div className="d-9973ee015d" data-node-id="866:8504" data-name="Programme / Preview note">
            <p className="d-5a1a09ea43" data-node-id="866:8505">
              A first look at the day. Key timings are confirmed; the final running order will be announced.
            </p>
            <div className="d-77b59f1ce0" data-node-id="866:8506" data-name="Accent / Pixel stitch">
              <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentPixelStitch} />
            </div>
          </div>
        </div>
        <ScdFullWidthProgrammePhaseMobile className="d-fc2890d78c" time="08:00 AM" />
        <ScdFullWidthProgrammePhaseMobile className="d-fc2890d78c" programmeCategory="OPENING" sequence="02" sessionSummary="The programme begins at REVA University." sessionTitle="OPENING PROGRAMME" time="09:00 AM" />
        <div className="d-fc2890d78c" data-node-id="866:8513" data-name="Programme / 03 EXPLORE">
          <div className="d-ea38f6601d" data-node-id="866:8514" data-name="Programme / Ledger rule" />
          <div className="d-2a29c9d11d" data-node-id="866:8515" data-name="Phase / Metadata">
            <p className="d-7025c308e6" data-node-id="866:8516">
              03
            </p>
            <p className="d-510a72407a" data-node-id="866:8517">
              TRACKS
            </p>
            <p className="d-cd228f785d" data-node-id="866:8518">
              TIME / AFTER THE OPENING
            </p>
          </div>
          <div className="d-7739a64de1" data-node-id="866:8519" data-name="Phase / Content">
            <p className="d-ba765cc2f2" data-node-id="866:8520">
              TWO PARALLEL TRACKS.
            </p>
            <p className="d-486b70b514" data-node-id="866:8521">
              Parallel sessions across the Technical and Non-Technical tracks.
            </p>
          </div>
          <div className="d-9973ee015d" data-node-id="866:8522" data-name="Programme / Two tracks">
            <div className="d-9973ee015d" data-node-id="866:8523" data-name="Programme / Track pair">
              <div className="d-05a0169ef1" data-node-id="866:8524" data-name="Programme / TECHNICAL">
                <p className="d-745e862a55" data-node-id="866:8525">
                  TECHNICAL
                </p>
                <p className="d-902df9c1ec" data-node-id="866:8526">
                  AWS sessions & workshops
                </p>
                <SiteLink hoverTone="orange" buttonTone="navy" className="d-4ec8c19304" data-node-id="866:8527" data-name="Action / View details" href={"/technical"}>
                  <p className="d-7669a2de49" data-node-id="I866:8527;5:30">
                    View details
                  </p>
                  <div className="d-4725149c0e" data-node-id="I866:8527;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow} />
                  </div>
                </SiteLink>
              </div>
              <div className="d-c4c7f38125" data-node-id="866:8528" data-name="Programme / NON-TECHNICAL">
                <p className="d-745e862a55" data-node-id="866:8529">
                  NON-TECHNICAL
                </p>
                <p className="d-902df9c1ec" data-node-id="866:8530">
                  Main-day sessions / Details soon
                </p>
                <SiteLink hoverTone="lime" buttonTone="navy" className="d-4ec8c19304" data-node-id="866:8531" data-name="Action / View details" href={"/non-technical"}>
                  <p className="d-7669a2de49" data-node-id="I866:8531;5:30">
                    View details
                  </p>
                  <div className="d-4725149c0e" data-node-id="I866:8531;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow} />
                  </div>
                </SiteLink>
              </div>
            </div>
            <div className="d-b82fa5d8d7" data-node-id="866:8532">
              <p className="d-ebed470a6c">SESSION SCHEDULE</p>
              <p className="d-d43f566f28">Session timings will be announced.</p>
            </div>
          </div>
        </div>
        <ScdFullWidthProgrammePhaseMobile className="d-fc2890d78c" programmeCategory="COMMUNITY" sequence="04" sessionSummary="Meet people across interests and industries. Food and refreshments are provided." sessionTitle="COMMUNITY CONNECTIONS" time="ALL DAY" />
        <ScdFullWidthProgrammePhaseMobile className="d-fc2890d78c" programmeCategory="CLOSING" sequence="05" sessionSummary="Planned conclusion of the day. The conclusion time is approximate." sessionTitle="CLOSING PROGRAMME" time="5:00–5:30 PM" />
      </div>
      <ProgrammeDivider />
      <div className="d-4a0d7dd9ea" data-node-id="866:8535" data-name="Programme / Keep exploring">
        <div className="d-7739a64de1" data-node-id="866:8536" data-name="Footer / Invitation">
          <p className="d-937932610c" data-node-id="866:8537">
            PEOPLE. IDEAS. CLOUD.
          </p>
          <div className="d-713522d466" data-node-id="866:8538">
            <p className="d-40ace226fd">MAKE IT</p>
            <p className="d-fe6c23de1d">YOUR DAY.</p>
          </div>
        </div>
        <div className="d-9973ee015d" data-node-id="866:8539" data-name="Footer / Actions">
          <SiteLink hoverTone="cyan" buttonTone="navy" className="d-1ed1e68c5b" data-node-id="866:8540" data-name="Action / All tracks" href={"/tracks"}>
            <p className="d-7669a2de49" data-node-id="I866:8540;5:30">
              All tracks
            </p>
            <div className="d-4725149c0e" data-node-id="I866:8540;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
          <SiteLink hoverTone="cyan" buttonTone="navy" className="d-dfc8001d8b" data-node-id="866:8541" data-name="Action / Registration info" href={"/registration"}>
            <p className="d-7a0f1f17eb" data-node-id="I866:8541;5:30">
              Registration info
            </p>
            <div className="d-4725149c0e" data-node-id="I866:8541;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
