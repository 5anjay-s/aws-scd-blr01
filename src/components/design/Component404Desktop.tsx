import { SiteBrand } from "../SiteBrand";
import { SiteHeader } from "../SiteHeader";
import { WovenRibbon } from "../WovenRibbon";
import { RegistrationButton } from "../RegistrationButton";
import { SiteLink } from "../SiteLink";
import { siteLinks } from "../../site-config";
// Source: Figma 00/ Final, node 1265:3035.
const imgFeedHousingSteppedVioletOutline = "/assets/1265-3035-4ee15.svg";
const imgFeedHousingNavyInset = "/assets/1265-3035-3d531.svg";
const imgTicketCyanPaper = "/assets/1265-3035-e8b99.svg";
const imgScdNumeral4FullCrossbar = "/assets/1265-3035-01c4f.svg";
const imgScdNumeral0OpenCounter = "/assets/1265-3035-0a058.svg";
const imgPrintBarcode = "/assets/1265-3035-a6290.svg";
const imgInkControlledPixelFade = "/assets/1265-3035-228b5.svg";
const imgPaperFourQuietFragments = "/assets/1265-3035-89a58.svg";
const imgFormCarbonBackingFollowsThePaperTear = "/assets/1265-3035-1b7d9.svg";
const imgPaperContinuousFormWithBrokenLowerEdge = "/assets/1265-3035-4d2d4.svg";
const imgFeedSquareSprocketsLeft = "/assets/1265-3035-b2300.svg";
const imgFeedTearOffHeaderSeam = "/assets/1265-3035-78e45.svg";
const imgPrintFeedBandEntersHousing = "/assets/1265-3035-9ff97.svg";
const imgArrow1 = "/assets/865-7675-207b4.svg";
const imgFeedVerticalFold = "/assets/1265-3035-d7a83.svg";
const imgFormPrintedSerial = "/assets/1265-3035-0e938.svg";
const imgFormPixelFibres = "/assets/1265-3035-ab13f.svg";
const imgApprovedWovenLinks = "/assets/1265-3035-453bd.svg";
const imgArrow2 = "/assets/1168-498-5d2c8.svg";
const imgArrow3 = "/assets/1168-498-378aa.svg";

function ScdTicketErrorsUnissuedRefinedDesktop({ className }: { className: string }) {
  return (
    <div className={className} data-node-id="1229:2241" data-name="SCD / Ticket errors / Unissued refined — Desktop">
      <div className="ticket-artwork ticket-artwork-desktop">
        <div className="d-c46b257eb5" data-node-id="1229:2215" data-name="Feed housing / stepped violet outline">
          <img alt="" className="d-511e8f31d4" src={imgFeedHousingSteppedVioletOutline} />
        </div>
        <div className="d-15efbff854" data-node-id="1229:2216" data-name="Feed housing / navy inset">
          <img alt="" className="d-511e8f31d4" src={imgFeedHousingNavyInset} />
        </div>
        <div className="d-18e10562e1" data-node-id="1229:2217" data-name="Feed housing / status square" />
        <div className="d-0d5678e565" data-node-id="1229:2218" data-name="Feed housing / slot inner lip" />
        <div className="d-e42995031c" data-node-id="1229:2219" data-name="Feed housing / aperture" />
        <p className="d-1b59c3adb0" data-node-id="1229:2220">
          SCD / PAGE DESK
        </p>
        <div className="d-d745e04962" data-node-id="1229:2221" data-name="Ticket / intact 404 and pixel cut">
          <div className="d-791fa7a396" data-node-id="1229:2222" data-name="Ticket / cyan paper">
            <img alt="" className="d-511e8f31d4" src={imgTicketCyanPaper} />
          </div>
          <div className="d-6e321b37f6" data-node-id="1229:2223" data-name="Feed / violet paper edge" />
          <SiteLink className="d-247a001d68" data-node-id="1229:2224" href={"/#home"}>
            AWS / STUDENT COMMUNITY DAY
          </SiteLink>
          <div className="d-32de407dbc" data-node-id="1229:2225" data-name="Print / top rule" />
          <p className="d-2c112fe8b1" data-node-id="1229:2226">
            NO PAGE ISSUED
          </p>
          <div className="d-3d0067e7da" data-node-id="1229:2227" data-name="SCD / 404 / Complete numeral lockup">
            <div className="d-fa8a06aad3" data-node-id="I1229:2227;1211:2059" data-name="SCD / Numeral / 4 — Full crossbar">
              <img alt="" className="d-511e8f31d4" src={imgScdNumeral4FullCrossbar} />
            </div>
            <div className="d-fa8a06aad3" data-node-id="I1229:2227;1211:2061" data-name="SCD / Numeral / 0 — Open counter">
              <img alt="" className="d-511e8f31d4" src={imgScdNumeral0OpenCounter} />
            </div>
            <div className="d-fa8a06aad3" data-node-id="I1229:2227;1211:2063" data-name="SCD / Numeral / 4 — Full crossbar">
              <img alt="" className="d-511e8f31d4" src={imgScdNumeral4FullCrossbar} />
            </div>
          </div>
          <div className="d-73fe9b5914" data-node-id="1229:2234" data-name="Print / lower rule" />
          <p className="d-231e97fc8a" data-node-id="1229:2235">
            DESTINATION
          </p>
          <p className="d-4136ec23d1" data-node-id="1229:2236">
            PAGE NOT FOUND
          </p>
          <div className="d-8b8cfc6671" data-node-id="1229:2237" data-name="Print / barcode">
            <img alt="" className="d-511e8f31d4" src={imgPrintBarcode} />
          </div>
          <p className="d-f74275f975" data-node-id="1229:2238">
            SCD / 404
          </p>
          <div className="d-8b076a738e" data-node-id="1229:2239" data-name="Ink / controlled pixel fade">
            <img alt="" className="d-511e8f31d4" src={imgInkControlledPixelFade} />
          </div>
        </div>
        <div className="d-c41ece8004" data-node-id="1229:2240" data-name="Paper / four quiet fragments">
          <img alt="" className="d-511e8f31d4" src={imgPaperFourQuietFragments} />
        </div>
      </div>
    </div>
  );
}

export default function Component404Desktop() {
  return (
    <div className="d-3c9f0988a3" data-node-id="1265:3035" data-name="404 — Desktop">
      <SiteHeader className="d-e88f0dd487 site-header" data-node-id="1332:688" data-name="SCD / Navigation / 404 explorations">
        <SiteBrand data-node-id="1332:689" />
        <div className="d-fd21041cfd" data-node-id="1332:690" data-name="Nav links v2">
          <SiteLink className="d-3328cbea32" data-node-id="1332:691" href={"/#experience"}>
            <span className="d-d0d8823c60">01</span>
            <span className="d-95907800fd">{` Experience`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1332:692" href={"/tracks"}>
            <span className="d-d0d8823c60">02</span>
            <span className="d-95907800fd">{` Tracks`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1332:693" href={"/#speakers"}>
            <span className="d-d0d8823c60">03</span>
            <span className="d-95907800fd">{` Speakers`}</span>
          </SiteLink>
          <SiteLink className="d-3328cbea32" data-node-id="1332:694" href={"/#community"}>
            <span className="d-d0d8823c60">04</span>
            <span className="d-95907800fd">{` Community`}</span>
          </SiteLink>
        </div>
        <RegistrationButton />
      </SiteHeader>
      <div className="d-c759ce1c08" data-node-id="1265:3037" data-name="Continuous form / a page made from feed paper">
        <div className="d-3b5a7422e7" data-node-id="1265:3038" data-name="Form / carbon backing follows the paper tear">
          <img alt="" className="d-511e8f31d4" src={imgFormCarbonBackingFollowsThePaperTear} />
        </div>
        <div className="d-a91a8ddbad" data-node-id="1265:3039" data-name="Paper / continuous form with broken lower edge">
          <img alt="" className="d-511e8f31d4" src={imgPaperContinuousFormWithBrokenLowerEdge} />
        </div>
        <div className="d-c84c8873bd" data-node-id="1265:3040" data-name="Feed / left perforation rule" />
        <div className="d-7d0733e780" data-node-id="1265:3041" data-name="Feed / right perforation rule" />
        <div className="d-d6a0c04557" data-node-id="1265:3042" data-name="Feed / square sprockets left">
          <img alt="" className="d-511e8f31d4" src={imgFeedSquareSprocketsLeft} />
        </div>
        <div className="d-0615351601" data-node-id="1265:3043" data-name="Feed / square sprockets right">
          <img alt="" className="d-511e8f31d4" src={imgFeedSquareSprocketsLeft} />
        </div>
        <div className="d-6ca5b35bc7" data-node-id="1265:3044" data-name="Status and edition">
          <p className="d-e6d513476d" data-node-id="1265:3045">
            404 / PAGE NOT FOUND
          </p>
          <p className="d-a4504fd076" data-node-id="1265:3046">
            SCD / RETURN SLIP 004
          </p>
        </div>
        <div className="d-8e5392972c" data-node-id="1265:3047" data-name="Feed / tear-off header seam">
          <img alt="" className="d-511e8f31d4" src={imgFeedTearOffHeaderSeam} />
        </div>
        <div className="d-45970aaea3" data-node-id="1265:3048" data-name="Print / orange platen" />
        <p className="d-2ab2cb11d1" data-node-id="1265:3049">
          NO PAGE ISSUED
        </p>
        <p className="d-8013f461cd" data-node-id="1265:3050">
          CURIOSITY DOESN’T STOP HERE.
        </p>
        <div className="d-346f0c017b" data-node-id="1265:3051" data-name="Print / feed band enters housing">
          <img alt="" className="d-511e8f31d4" src={imgPrintFeedBandEntersHousing} />
        </div>
        <div className="d-e7d906260f" data-node-id="1265:3052" data-name="Continuous form / message and printed output">
          <div className="d-b49b21ad12" data-node-id="1265:3053" data-name="Recovery / message and action">
            <p className="d-91b4ea2249" data-node-id="1265:3054" role="heading" aria-level={1}>
              THE PRINT STOPS HERE.
            </p>
            <div className="d-93b1fdf251" data-node-id="1265:3055">
              <p className="d-95ee4d20a7">Nothing</p>
              <p className="d-c1b667a494">came through.</p>
            </div>
            <div className="d-9699fb9d65" data-node-id="1265:3056">
              <p className="d-7517b65055">{`We couldn't find this page.`}</p>
              <p className="d-7517b65055">The link may have changed, or the</p>
              <p className="d-22d0902a25">page may have moved.</p>
            </div>
            <SiteLink buttonTone="orange" className="d-765608cfbc" data-node-id="1265:3057" data-name="Button / Flat" href={"/#home"}>
              <p className="d-cf01328ee8" data-node-id="I1265:3057;5:30">
                Back to the event
              </p>
              <div className="d-4725149c0e" data-node-id="I1265:3057;15:32" data-name="Arrow">
                <img alt="" className="d-511e8f31d4" src={imgArrow1} />
              </div>
            </SiteLink>
          </div>
          <ScdTicketErrorsUnissuedRefinedDesktop className="d-c3b3b8df99" />
        </div>
        <div className="d-2bb8a319cd" data-node-id="1265:3059" data-name="Feed / vertical fold">
          <img alt="" className="d-511e8f31d4" src={imgFeedVerticalFold} />
        </div>
        <div className="d-c2226e98da" data-node-id="1265:3060" data-name="Form / closing record">
          <div className="d-a0b50b319a" data-node-id="1265:3061">
            <p className="d-9f251d856d">THE PAGE ENDS HERE.</p>
            <p className="d-8c8cd1946c">THE POSSIBILITIES DON’T.</p>
          </div>
          <div className="d-21e0852790" data-node-id="1265:3062" data-name="Form / printed serial">
            <img alt="" className="d-511e8f31d4" src={imgFormPrintedSerial} />
          </div>
        </div>
        <div className="d-e4f92ac513" data-node-id="1265:3064" data-name="Form / pixel fibres">
          <img alt="" className="d-511e8f31d4" src={imgFormPixelFibres} />
        </div>
      </div>
      <div className="d-5c24635908" data-node-id="1476:877" data-name="Footer / Common — Desktop">
        <div className="d-78d3b03090" data-node-id="1476:878" data-name="Footer / Stay connected">
          <div className="d-ec1083a29e" data-node-id="1476:879" data-name="Footer / Invitation">
            <p className="d-316c95d37a" data-node-id="1476:880">
              THE DAY IS JUST THE START.
            </p>
            <div className="d-079cb0f4b8" data-node-id="1476:881">
              <p className="d-6ee5fa6884">Keep the</p>
              <p className="d-6ee5fa6884">conversation</p>
              <p className="d-f42ae1416f">going.</p>
            </div>
            <div className="d-bf5113e67d" data-node-id="1476:882">
              <p className="d-143d1e5b1d">A little more curiosity.</p>
              <p className="d-e894d19a93">A lot more community.</p>
            </div>
          </div>
          <div className="d-4556061f38" data-node-id="1476:883" data-name="Footer / Community connection">
            <div className="d-229a3a46e3" data-node-id="1476:884" data-name="Connection / Left rail" />
            <div className="d-c301621b07" data-node-id="1476:885" data-name="Connection / Right rail" />
            <div className="d-9e7418bb75" data-node-id="1476:886" data-name="Connection / Left pixel" />
            <div className="d-3a8fd5fe1d" data-node-id="1476:887" data-name="Connection / Right pixel" />
            <div className="d-b33888044b" data-node-id="1476:888" data-name="Approved / Woven links">
              <WovenRibbon alt="" className="d-511e8f31d4" src={imgApprovedWovenLinks} />
            </div>
          </div>
          <div className="d-bc1cc41ab7" data-node-id="1476:889" data-name="Footer / Social channels">
            <p className="d-393807428f" data-node-id="1476:890">
              FIND YOUR PEOPLE
            </p>
            <div className="d-9c698a8db5" data-node-id="1476:891" data-name="Footer / Social links">
              <div className="d-1969baa6ce" data-node-id="1476:892" data-name="Footer / LinkedIn">
                <p className="d-24df9d72c3" data-node-id="1476:893">
                  01 / LINK UP
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:894" data-name="Social / LinkedIn" href={siteLinks.linkedin}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:894;5:30">
                    LinkedIn
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:894;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow2} />
                  </div>
                </SiteLink>
                <div className="d-20b3bae21a" data-node-id="1476:895" data-name="Social / Open rule" />
              </div>
              <div className="d-1969baa6ce" data-node-id="1476:896" data-name="Footer / Instagram">
                <p className="d-14d435a7de" data-node-id="1476:897">
                  02 / FOLLOW ALONG
                </p>
                <SiteLink className="d-2d1168383e" data-node-id="1476:898" data-name="Social / Instagram" href={siteLinks.instagram}>
                  <p className="d-ed3e8425eb" data-node-id="I1476:898;5:30">
                    Instagram
                  </p>
                  <div className="d-4725149c0e" data-node-id="I1476:898;15:32" data-name="Arrow">
                    <img alt="" className="d-511e8f31d4" src={imgArrow3} />
                  </div>
                </SiteLink>
                <div className="d-d800ec1288" data-node-id="1476:899" data-name="Social / Open rule" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
