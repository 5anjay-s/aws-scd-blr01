import { useEffect, useState } from "react";
import Desktop from "./figma/Desktop";
import Mobile from "./figma/Mobile";

export default function App() {
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 900px)").matches,
  );

  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 900px)");
    const updateLayout = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    breakpoint.addEventListener("change", updateLayout);
    return () => breakpoint.removeEventListener("change", updateLayout);
  }, []);

  const frameClass = isMobile ? "mobile-frame" : "desktop-frame";
  return (
    <main className="page-shell">
      <div className={frameClass}>
        {isMobile ? <Mobile /> : <Desktop />}
      </div>
    </main>
  );
}
