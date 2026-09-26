import type { ReactNode } from "react";
import FooterDesktop from "../components/footer/FooterDesktop";
import FooterMobile from "../components/footer/FooterMobile";
import NavbarDesktop from "../components/navigation/NavbarDesktop";
import NavbarMobile from "../components/navigation/NavbarMobile";

type SiteLayoutProps = {
  children: ReactNode;
  isMobile: boolean;
};

export default function SiteLayout({ children, isMobile }: SiteLayoutProps) {
  return (
    <div className="site-layout">
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <main>{children}</main>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </div>
  );
}
