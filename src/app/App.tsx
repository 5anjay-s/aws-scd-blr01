import { useCallback, useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import HomeDesktop from "../pages/home/HomeDesktop";
import HomeMobile from "../pages/home/HomeMobile";
import NotFoundDesktop from "../pages/not-found/NotFoundDesktop";
import NotFoundMobile from "../pages/not-found/NotFoundMobile";
import NonTechnicalDesktop from "../pages/nontechnical/NontechnicalDesktop";
import NonTechnicalMobile from "../pages/nontechnical/NontechnicalMobile";
import RegistrationDesktop from "../pages/registration/RegistrationDesktop";
import RegistrationMobile from "../pages/registration/RegistrationMobile";
import TechnicalDesktop from "../pages/technical/TechnicalDesktop";
import TechnicalMobile from "../pages/technical/TechnicalMobile";
import SiteLayout from "./SiteLayout";
import StartupGate from "./StartupGate";

type RouteName = "home" | "technical" | "non-technical" | "registration" | "not-found";
type Destination = { path: string; desktopAnchor?: string; mobileAnchor?: string };

const clickDestinations: Record<string, Destination> = {
  // Final page: Figma prototype section jumps.
  "860:4983": { path: "/", desktopAnchor: "860:5073" },
  "860:4984": { path: "/", desktopAnchor: "860:5104" },
  "860:4985": { path: "/", desktopAnchor: "860:5144" },
  "860:4986": { path: "/", desktopAnchor: "860:5267" },
  "860:4987": { path: "/", desktopAnchor: "860:5246" },
  "860:5143": { path: "/", desktopAnchor: "860:5180" },
  "860:5179": { path: "/", desktopAnchor: "860:5180" },
  "860:5125": { path: "/technical" },
  "860:5134": { path: "/non-technical" },
  "860:5231": { path: "/technical" },
  "860:5235": { path: "/non-technical" },
  "860:5244": { path: "/", desktopAnchor: "860:5104" },
  "860:5264": { path: "/", desktopAnchor: "860:5180" },
  "860:5327": { path: "/", desktopAnchor: "860:5104" },
  "860:5362": { path: "/", desktopAnchor: "860:4980" },
  "1169:516": { path: "/", mobileAnchor: "866:8432" },
  "866:8437": { path: "/technical" },
  "866:8443": { path: "/technical" },
  "866:8444": { path: "/non-technical" },
  "866:8450": { path: "/non-technical" },
  "866:8455": { path: "/", mobileAnchor: "866:8481" },
  "1170:616": { path: "/", mobileAnchor: "866:8481" },
  "866:8527": { path: "/technical" },
  "866:8531": { path: "/non-technical" },
  "866:8540": { path: "/", mobileAnchor: "866:8432" },
  "866:8558": { path: "/", mobileAnchor: "866:8481" },
  "1170:633": { path: "/", mobileAnchor: "866:8582" },
  "866:8604": { path: "/", mobileAnchor: "866:8481" },
  "1169:697": { path: "/", mobileAnchor: "1168:491" },

  // Reusable Figma registration buttons share this component node.
  "5:29": { path: "/registration" },
  "860:5245": { path: "/registration" },
  "860:4988": { path: "/registration" },
  "860:5068": { path: "/registration" },
  "860:5356": { path: "/registration" },
  "1169:592": { path: "/registration" },
  "1170:562": { path: "/registration" },
  "866:8541": { path: "/registration" },
  "866:8625": { path: "/registration" },
  "874:8945": { path: "/registration" },
  "874:8973": { path: "/registration" },
  "874:9133": { path: "/registration" },
  "874:9158": { path: "/registration" },
  "874:9284": { path: "/registration" },
  "880:9395": { path: "/registration" },

  // Track routes.
  "874:8920": { path: "/technical", desktopAnchor: "874:8935" },
  "874:8983": { path: "/non-technical" },
  "874:8984": { path: "/", desktopAnchor: "860:5180" },
  "874:9126": { path: "/", mobileAnchor: "866:8432" },
  "874:9166": { path: "/non-technical" },
  "874:9167": { path: "/", mobileAnchor: "866:8481" },
  "874:9217": { path: "/non-technical", desktopAnchor: "874:9231" },
  "874:9237": { path: "/non-technical", desktopAnchor: "874:9244" },
  "874:9304": { path: "/technical" },
  "874:9305": { path: "/", desktopAnchor: "860:5104" },
  "880:9341": { path: "/", mobileAnchor: "866:8432" },
  "880:9346": { path: "/non-technical", mobileAnchor: "880:9350" },
  "880:9399": { path: "/technical" },
  "880:9400": { path: "/", mobileAnchor: "866:8432" },

  // Registration and recovery routes.
  "1367:786": { path: "/", mobileAnchor: "866:8432" },
  "1367:676": { path: "/", desktopAnchor: "860:4959", mobileAnchor: "1168:491" },
  "1367:733": { path: "/", desktopAnchor: "860:5180", mobileAnchor: "866:8481" },
  "1367:800": { path: "/", mobileAnchor: "1168:491" },
  "1367:854": { path: "/", mobileAnchor: "866:8481" },
  "1367:876": { path: "/registration", mobileAnchor: "1367:781" },
  "1332:720": { path: "/" },
  "1265:3057": { path: "/" },
  "1265:3134": { path: "/" },
};

function routeFromPath(pathname: string): RouteName {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (path === "/technical") return "technical";
  if (path === "/non-technical") return "non-technical";
  if (path === "/registration") return "registration";
  return "not-found";
}

export default function App() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 900px)").matches,
  );
  const [desktopScale, setDesktopScale] = useState(() =>
    window.innerWidth / 1440,
  );
  const [route, setRoute] = useState(() => routeFromPath(window.location.pathname));

  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 900px)");
    const updateLayout = () => {
      setIsMobile(breakpoint.matches);
      setDesktopScale(window.innerWidth / 1440);
    };
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const handlePopState = () => setRoute(routeFromPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((destination: Destination) => {
    const path = destination.path;
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
      setRoute(routeFromPath(path));
    }
    const anchor = isMobile
      ? destination.mobileAnchor ?? destination.desktopAnchor
      : destination.desktopAnchor ?? destination.mobileAnchor;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (anchor) {
          document
            .querySelector<HTMLElement>(`[data-node-id="${anchor}"]`)
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (window.location.pathname !== path || !destination.desktopAnchor && !destination.mobileAnchor) {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
    });
  }, [isMobile]);

  useEffect(() => {
    for (const [nodeId, destination] of Object.entries(clickDestinations)) {
      const nodes = document.querySelectorAll<HTMLElement>(
        `[data-node-id="${nodeId}"]`,
      );
      nodes.forEach((node) => {
        node.style.cursor = "pointer";
        if (node instanceof HTMLAnchorElement) node.href = destination.path;
        if (node.tagName !== "BUTTON" && node.tagName !== "A") {
          node.setAttribute("role", "link");
          node.tabIndex = 0;
        }
      });
    }
  }, [route, isMobile]);

  const activate = useCallback((event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    let node: HTMLElement | null = target.closest("[data-node-id]");
    while (node && event.currentTarget.contains(node)) {
      const destination = clickDestinations[node.dataset.nodeId ?? ""];
      if (destination) {
        event.preventDefault();
        navigate(destination);
        return;
      }
      node = node.parentElement?.closest("[data-node-id]") ?? null;
    }
  }, [navigate]);

  const frameClass = isMobile ? "mobile-frame" : "desktop-frame";
  const page = {
    home: isMobile ? <HomeMobile /> : <HomeDesktop />,
    technical: isMobile ? <TechnicalMobile /> : <TechnicalDesktop />,
    "non-technical": isMobile ? <NonTechnicalMobile /> : <NonTechnicalDesktop />,
    registration: isMobile ? <RegistrationMobile /> : <RegistrationDesktop />,
    "not-found": isMobile ? <NotFoundMobile /> : <NotFoundDesktop />,
  }[route];

  return (
    <main
      className="page-shell"
      onClick={activate}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const target = event.target;
        if (
          target instanceof HTMLElement &&
          target.closest("button, a")
        ) return;
        activate(event);
      }}
    >
      <StartupGate isMobile={isMobile} desktopScale={desktopScale}>
        <div
          className={frameClass}
          style={isMobile ? undefined : { zoom: desktopScale }}
        >
          <SiteLayout isMobile={isMobile}>{page}</SiteLayout>
        </div>
      </StartupGate>
    </main>
  );
}
