import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import LoadingScreenDesktop from "../components/loading/LoadingScreenDesktop";
import LoadingScreenMobile from "../components/loading/LoadingScreenMobile";

type StartupGateProps = {
  children: ReactNode;
  isMobile: boolean;
};

export default function StartupGate({
  children,
  isMobile,
}: StartupGateProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const hasStartedLeaving = useRef(false);

  const revealSite = useCallback(() => {
    if (hasStartedLeaving.current) return;
    hasStartedLeaving.current = true;
    setIsLeaving(true);
    window.setTimeout(() => setIsVisible(false), 240);
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    let cancelled = false;
    let timer = 0;
    const fallbackTimer = window.setTimeout(revealSite, 10_000);
    const imagesReady = Array.from(document.images, (image) =>
      image.decode().catch(() => undefined),
    );

    Promise.all([document.fonts.ready, ...imagesReady]).then(() => {
      if (cancelled) return;
      const remainingMinimumTime = Math.max(0, 900 - (performance.now() - startedAt));
      timer = window.setTimeout(revealSite, remainingMinimumTime);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.clearTimeout(fallbackTimer);
    };
  }, [revealSite]);

  return (
    <>
      {children}
      {isVisible && (
        <div
          className={`startup-overlay${isMobile ? " startup-overlay--mobile" : ""}${isLeaving ? " startup-overlay--leaving" : ""}`}
          role="status"
          aria-label="Loading the day"
        >
          <div
            className={isMobile ? "mobile-frame" : "desktop-frame"}
          >
            {isMobile ? (
              <LoadingScreenMobile onEnter={revealSite} />
            ) : (
              <LoadingScreenDesktop onEnter={revealSite} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
