import type { ReactNode } from "react";
import FooterDesktop from "../components/footer/FooterDesktop";
import FooterMobile from "../components/footer/FooterMobile";
import NavbarDesktop from "../components/navigation/NavbarDesktop";
import NavbarMobile from "../components/navigation/NavbarMobile";

type SiteLayoutProps = {
  children: ReactNode;
  isMobile: boolean;
  footerTransition?: "orange" | "paper";
};

export default function SiteLayout({ children, isMobile, footerTransition }: SiteLayoutProps) {
  const transitionSrc = footerTransition === "paper"
    ? "/assets/registration/desktop/registration-paper-to-navy-footer-transition.svg"
    : footerTransition === "orange"
      ? "/assets/desktop/footer-navy-pixel-transition.svg"
      : undefined;

  return (
    <div className="site-layout">
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <main>{children}</main>
      {isMobile ? <FooterMobile transitionSrc={transitionSrc} /> : <FooterDesktop transitionSrc={transitionSrc} />}
    </div>
  );
}
