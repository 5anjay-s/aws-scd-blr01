import { SiteBrand } from "./SiteBrand";
import { SiteHeader } from "./SiteHeader";
import { RegistrationButton } from "./RegistrationButton";
import { SiteLink } from "./SiteLink";

// Share the live homepage navigation with standalone pages.
export function HomeNavigation({ mobile = false }: { mobile?: boolean }) {
  if (mobile) return (
    <SiteHeader className="d-7794366a59 site-header" data-node-id="1169:507" data-name="Navigation / Mobile">
      <SiteBrand data-node-id="1169:508" />
      <SiteLink className="d-8213d7a805" data-node-id="1169:516" data-name="Navigation / Explore" href={"/#experience"}>
        <p className="d-d21e8bada1" data-node-id="1169:517">
          Explore
        </p>
      </SiteLink>
    </SiteHeader>
  );
  return (
    <SiteHeader className="d-7ee4ef429a site-header" data-node-id="860:4980" data-name="Navigation v2">
      <SiteBrand data-node-id="860:4981" />
      <div className="d-06d21171a1" data-node-id="860:4982" data-name="Nav links v2">
        <SiteLink className="d-36e152c572" data-node-id="860:4983" href={"/#experience"}>
          <p>
            <span className="d-d0d8823c60">01</span>
            <span className="d-95907800fd">{` Experience`}</span>
          </p>
        </SiteLink>
        <SiteLink className="d-36e152c572" data-node-id="860:4984" href={"/tracks"}>
          <p>
            <span className="d-d0d8823c60">02</span>
            <span className="d-95907800fd">{` Tracks`}</span>
          </p>
        </SiteLink>
        <SiteLink className="d-36e152c572" data-node-id="860:4985" href={"/#speakers"}>
          <p>
            <span className="d-d0d8823c60">03</span>
            <span className="d-95907800fd">{` Speakers`}</span>
          </p>
        </SiteLink>
        <SiteLink className="d-36e152c572" data-node-id="860:4986" href={"/#community"}>
          <p>
            <span className="d-d0d8823c60">04</span>
            <span className="d-95907800fd">{` Community`}</span>
          </p>
        </SiteLink>
        <SiteLink className="d-36e152c572" href="/organisers">
          <p>
            <span className="d-d0d8823c60">05</span>
            <span className="d-95907800fd">{` Organisers`}</span>
          </p>
        </SiteLink>
      </div>
      <RegistrationButton />
    </SiteHeader>
  );
}
