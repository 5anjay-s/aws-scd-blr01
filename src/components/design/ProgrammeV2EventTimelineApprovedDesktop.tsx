import { ProgrammeSteps } from "../ProgrammeSteps";
import { SignalStitch } from "../SignalStitch";
import { SiteLink } from "../SiteLink";
import { ProgrammeDivider } from "../ProgrammeDivider";
// Source: Figma 00/ Final, node 860:5180.
const imgSteppedProgrammeViolet = "/assets/860-5180-e4193.svg";
const imgSteppedProgrammeCyan = "/assets/860-5180-92afc.svg";
const imgSteppedProgrammeOrange = "/assets/860-5180-4545c.svg";
const imgAccentPixelStitch = "/assets/860-5180-be42c.svg";
const imgArrow = "/assets/865-7675-0b485.svg";

type ScdFullWidthProgrammePhaseDesktopProps = {
  className: string;
  programmeCategory?: string;
  sequence?: string;
  sessionSummary?: string;
  sessionTitle?: string;
  time?: string;
};

function ScdFullWidthProgrammePhaseDesktop({ className, programmeCategory = "CHECK-IN", sequence = "01", sessionSummary = "Event-day check-in begins.", sessionTitle = "CHECK-IN & COMMUNITY", time = "TBA" }: ScdFullWidthProgrammePhaseDesktopProps) {
  return (
    <div className={className} data-node-id="685:2230" data-name="SCD / Full-width programme phase / Desktop">
      <div className="d-af7b482fec" data-node-id="685:2231" data-name="Programme / Ledger rule" />
      <div className="d-4f3c7894ae" data-node-id="685:2232" data-name="Phase / Ledger columns">
        <div className="d-e60c1f722b" data-node-id="685:2233" data-name="Phase / Index">
          <div className="d-d63489ae38" data-node-id="685:2234" data-name="Sequence marker" />
          <p className="d-d24ccda8af" data-node-id="685:2235">
            {sequence}
          </p>
        </div>
        <div className="d-14a2e5d967" data-node-id="685:2236" data-name="Phase / Heading">
          <p className="d-aed963120d" data-node-id="685:2237">
            {programmeCategory}
          </p>
          <p className="d-a3f0e2bf2e" data-node-id="685:2238">
            {sessionTitle}
          </p>
        </div>
        <div className="d-16e92d0fc7" data-node-id="685:2239" data-name="Phase / Description">
          <p className="d-0c8cd4180e" data-node-id="685:2240">
            {sessionSummary}
          </p>
        </div>
        <div className="d-0d46dca5e4" data-node-id="685:2241" data-name="Phase / Timing">
          <p className="d-58a505adc6" data-node-id="685:2242">
            TIME
          </p>
          <p className="d-dab1a99bdb" data-node-id="685:2243">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammeV2EventTimelineApprovedDesktop() {
  return (
    <div className="d-3c9f0988a3" data-node-id="860:5180" data-name="Programme v2 / Event timeline — Approved / Desktop">
      <div className="d-5782fa7dda" data-node-id="860:5181" data-name="Timeline / Masthead">
        <p className="d-1b4476b588" data-node-id="860:5182">
          04 / EVENT TIMELINE
        </p>
        <div className="d-f7ce1480c6" data-node-id="860:5183" data-name="Masthead / Composition">
          <div className="d-2da1383279" data-node-id="860:5184" data-name="Masthead / Headline">
            <div className="d-e578e4dcdc" data-node-id="860:5185">
              <p className="d-9d5eeb7dfb">THE DAY,</p>
              <p className="d-009dfc7898">UNFOLDED.</p>
            </div>
            <div className="d-db28f85545" data-node-id="860:5186">
              <p className="d-2eae06771a">A little discovery. A lot of possibility.</p>
              <p className="d-afb1b38150">Here’s how the day comes together.</p>
            </div>
          </div>
          <ProgrammeSteps className="d-f8cabe3908" data-node-id="860:5187" data-name="Art / Programme steps">
            <div className="d-bd5fef2ff9 programme-step" data-node-id="860:5188" data-name="Stepped programme / violet" data-step="03">
              <div className="d-41f8d925f9">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeViolet} />
              </div>
              <p className="d-2d42c41533 programme-step-number" data-node-id="860:5193">03</p>
            </div>
            <div className="d-bd5fef2ff9 programme-step" data-node-id="860:5189" data-name="Stepped programme / cyan" data-step="02">
              <div className="d-d6125a68dc">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeCyan} />
              </div>
              <p className="d-b7a9d94ee7 programme-step-number" data-node-id="860:5192">02</p>
            </div>
            <div className="d-bd5fef2ff9 programme-step" data-node-id="860:5190" data-name="Stepped programme / orange" data-step="01">
              <div className="d-eae3fc7796">
                <img alt="" className="d-c77fedee9b" src={imgSteppedProgrammeOrange} />
              </div>
              <p className="d-8555103173 programme-step-number" data-node-id="860:5191">01</p>
            </div>
            <p className="d-b9e36edfd0" data-node-id="860:5194">
              ONE DAY / MANY POSSIBILITIES
            </p>
          </ProgrammeSteps>
        </div>
      </div>
      <div className="d-4d6088a1ba" data-node-id="860:5195" data-name="Timeline / Status rail">
        <p className="d-595f2e21a8" data-node-id="860:5196">
          5 NOV 2026 / ALL TIMES IST
        </p>
        <p className="d-4c830edfb9" data-node-id="860:5197">
          PROVISIONAL TIMINGS
        </p>
      </div>
      <div className="d-97d35dcc97" data-node-id="860:5198" data-name="Programme / Full-width schedule">
        <div className="d-17bbc17e56" data-node-id="860:5199" data-name="Programme / Full-width introduction">
          <div className="d-a52a955f66" data-node-id="860:5200" data-name="Programme / Title">
            <p className="d-caf7a4cf95" data-node-id="860:5201">
              THE PROGRAMME
            </p>
            <div className="d-4f6da4825c" data-node-id="860:5202">
              <p className="d-5069c0bf54">ONE DAY.</p>
              <p className="d-287d1f8085">MANY WAYS TO BUILD.</p>
            </div>
          </div>
          <div className="d-71a755c0b9" data-node-id="860:5203" data-name="Programme / Preview note">
            <p className="d-a051a1d382" data-node-id="860:5204">
              A first look at the day. Key timings are confirmed; the final running order will be announced.
            </p>
            <div className="d-df75d32160" data-node-id="860:5205" data-name="Accent / Pixel stitch">
              <SignalStitch alt="" className="d-511e8f31d4" src={imgAccentPixelStitch} />
            </div>
          </div>
        </div>
        <ScdFullWidthProgrammePhaseDesktop className="d-5bc03310bc" time="08:00 AM" />
        <ScdFullWidthProgrammePhaseDesktop className="d-5bc03310bc" programmeCategory="OPENING" sequence="02" sessionSummary="The programme begins at REVA University." sessionTitle="OPENING PROGRAMME" time="09:00 AM" />
        <div className="d-5bc03310bc" data-node-id="860:5212" data-name="Programme / 03 EXPLORE">
          <div className="d-af7b482fec" data-node-id="860:5213" data-name="Programme / Ledger rule" />
          <div className="d-4f3c7894ae" data-node-id="860:5214" data-name="Phase / Ledger columns">
            <div className="d-e60c1f722b" data-node-id="860:5215" data-name="Phase / Index">
              <div className="d-d63489ae38" data-node-id="860:5216" data-name="Sequence marker" />
              <p className="d-d24ccda8af" data-node-id="860:5217">
                03
              </p>
            </div>
            <div className="d-14a2e5d967" data-node-id="860:5218" data-name="Phase / Heading">
              <p className="d-aed963120d" data-node-id="860:5219">
                TRACKS
              </p>
              <p className="d-a3f0e2bf2e" data-node-id="860:5220">
                TWO PARALLEL TRACKS.
              </p>
            </div>
            <div className="d-16e92d0fc7" data-node-id="860:5221" data-name="Phase / Description">
              <p className="d-0c8cd4180e" data-node-id="860:5222">
                Parallel sessions across the Technical and Non-Technical tracks.
              </p>
            </div>
            <div className="d-0d46dca5e4" data-node-id="860:5223" data-name="Phase / Timing">
              <p className="d-58a505adc6" data-node-id="860:5224">
                TIME
              </p>
              <p className="d-dab1a99bdb" data-node-id="860:5225">
                AFTER THE OPENING
              </p>
            </div>
          </div>
          <div className="d-3ba7a50c2f" data-node-id="860:5226" data-name="Programme / Two tracks">
            <div className="d-3a0fbb554c" data-node-id="860:5227" data-name="Programme / Track pair">
              <div className="d-75d135f060" data-node-id="860:5228" data-name="Programme / TECHNICAL">
                <p className="d-7c2a925177" data-node-id="860:5229">
                  TECHNICAL
                </p>
                <p className="d-7b5e75c7c6" data-node-id="860:5230">
                  Cloud / AI / Security
                </p>
                <SiteLink hoverTone="orange" buttonTone="navy" className="d-9486bf8b78" data-node-id="860:5231" data-name="Action / View details" href={"/technical"}>
                  <p className="d-7a0f1f17eb" data-node-id="I860:5231;5:30">
                    View details
                  </p>
                  <div className="d-4725149c0e" data-node-id="I860:5231;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow} />
                  </div>
                </SiteLink>
              </div>
              <div className="d-36f4e0fcf2" data-node-id="860:5232" data-name="Programme / NON-TECHNICAL">
                <p className="d-7c2a925177" data-node-id="860:5233">
                  NON-TECHNICAL
                </p>
                <p className="d-7b5e75c7c6" data-node-id="860:5234">
                  Startups / Product / Leadership
                </p>
                <SiteLink hoverTone="lime" buttonTone="navy" className="d-9486bf8b78" data-node-id="860:5235" data-name="Action / View details" href={"/non-technical"}>
                  <p className="d-7a0f1f17eb" data-node-id="I860:5235;5:30">
                    View details
                  </p>
                  <div className="d-4725149c0e" data-node-id="I860:5235;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow} />
                  </div>
                </SiteLink>
              </div>
            </div>
            <div className="d-c9afc50cb5" data-node-id="860:5236">
              <p className="d-ebed470a6c">TRACK CONTENT PREVIEW</p>
              <p className="d-d43f566f28">Final formats, timings and running order to be announced.</p>
            </div>
          </div>
        </div>
        <ScdFullWidthProgrammePhaseDesktop className="d-5bc03310bc" programmeCategory="COMMUNITY" sequence="04" sessionSummary="Meet people across interests and industries. Food and refreshments are provided." sessionTitle="COMMUNITY CONNECTIONS" time="ALL DAY" />
        <ScdFullWidthProgrammePhaseDesktop className="d-5bc03310bc" programmeCategory="CLOSING" sequence="05" sessionSummary="Planned conclusion of the day. The conclusion time is approximate." sessionTitle="CLOSING PROGRAMME" time="APPROX. 5:00–5:30 PM" />
      </div>
      <ProgrammeDivider />
      <div className="d-8f9fa6c789" data-node-id="860:5239" data-name="Programme / Keep exploring">
        <div className="d-8a64c4dc5c" data-node-id="860:5240" data-name="Footer / Invitation">
          <p className="d-374f806def" data-node-id="860:5241">
            PEOPLE. IDEAS. CLOUD.
          </p>
          <div className="d-a9c704e610" data-node-id="860:5242">
            <p className="d-53918f0803">MAKE IT</p>
            <p className="d-941138427e">YOUR DAY.</p>
          </div>
        </div>
        <div className="d-c15645ce2b" data-node-id="860:5243" data-name="Footer / Actions">
          <SiteLink hoverTone="cyan" buttonTone="navy" className="d-09376be59c" data-node-id="860:5244" data-name="Action / All tracks" href={"/tracks"}>
            <p className="d-7669a2de49" data-node-id="I860:5244;5:30">
              All tracks
            </p>
            <div className="d-4725149c0e" data-node-id="I860:5244;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
          <SiteLink hoverTone="cyan" buttonTone="navy" className="d-ff561cfd68" data-node-id="860:5245" data-name="Action / Registration info" href={"/registration"}>
            <p className="d-7a0f1f17eb" data-node-id="I860:5245;5:30">
              Registration info
            </p>
            <div className="d-4725149c0e" data-node-id="I860:5245;15:32" data-name="Arrow">
              <img alt="" className="d-511e8f31d4" src={imgArrow} />
            </div>
          </SiteLink>
        </div>
      </div>
    </div>
  );
}
