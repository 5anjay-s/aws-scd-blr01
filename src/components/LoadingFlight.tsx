import { useContext, useId, useLayoutEffect, useRef } from 'react';
import { gsap } from './animation';
import { NavigationContext } from './SiteLink';
import { flightRope } from './flightRope';
import logoArtwork from '../../public/assets/860-4959-9116d.svg?raw';
import '../styles/loading-flight.css';

const wordmark = logoArtwork.match(/id="AWS \/ pixel wordmark"[^>]*\bd="([^"]+)"/)![1];
const smile = logoArtwork.match(/id="AWS \/ pixel smile"[^>]*\bd="([^"]+)"/)![1];

const TOW_END = 1.35;
const UNFOLD_END = 1.95;
const PAPER_FADE_END = 2.2;
const DEPARTURE_END = 2.4;
const FLIGHT_END = 2.8;
const PLANE_X = -132;
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const ease = (value: number) => value * value * (3 - 2 * value);
const settle = (value: number) => value ** 3 * (value * (value * 6 - 15) + 10);

export function LoadingFlight() {
  const navigate = useContext(NavigationContext);
  const id = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const bannerRef = useRef<SVGGElement>(null);
  const flapRef = useRef<SVGGElement>(null);
  const foldShadeRef = useRef<SVGRectElement>(null);
  const foldedEdgeRef = useRef<SVGPathElement>(null);
  const ropesRef = useRef<SVGGElement>(null);
  const topRopeRef = useRef<SVGPathElement>(null);
  const bottomRopeRef = useRef<SVGPathElement>(null);
  const knotsRef = useRef<SVGGElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  useLayoutEffect(() => {
    const svg = svgRef.current!;
    const banner = bannerRef.current!;
    const flap = flapRef.current!;
    const shade = foldShadeRef.current!;
    const foldedEdge = foldedEdgeRef.current!;
    const ropes = ropesRef.current!;
    const topRope = topRopeRef.current!;
    const bottomRope = bottomRopeRef.current!;
    const knots = knotsRef.current!;
    const plane = planeRef.current!;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let entrance = 1400;
    let outside = -700;
    const clock = { seconds: 0 };
    let playback: gsap.core.Tween;
    let completion: gsap.core.Tween | undefined;

    const finish = () => {
      banner.removeAttribute('transform');
      banner.style.setProperty('--paper-opacity', '0');
      flap.removeAttribute('transform');
      shade.setAttribute('opacity', '0');
      foldedEdge.setAttribute('opacity', '0');
      ropes.setAttribute('opacity', '0');
      knots.setAttribute('opacity', '0');
      plane.setAttribute('opacity', '0');
      svg.dataset.phase = 'complete';
      // Defer the redirect so StrictMode can cancel its first effect setup.
      if (!completion) completion = gsap.delayedCall(0, () => navigate('/', { replace: true }));
    };

    const draw = (seconds: number) => {
      if (seconds >= FLIGHT_END || motionPreference.matches) {
        finish();
        return;
      }

      const towing = clamp(seconds / TOW_END);
      const x = entrance * (1 - settle(towing));
      const y = Math.sin(towing * Math.PI * 2) * 2 * Math.sin(towing * Math.PI) ** 2;
      banner.setAttribute('transform', `translate(${x} ${y})`);
      knots.setAttribute('transform', `translate(${x + 568} ${y}) scale(-1 1)`);

      const opening = ease(clamp((seconds - TOW_END) / (UNFOLD_END - TOW_END)));
      // A hinged paper panel opens from edge-on to flat; the printed smile stays on it.
      const foldScale = Math.sin(opening * Math.PI / 2);
      flap.setAttribute('transform', `translate(0 192) scale(1 ${foldScale}) translate(0 -192)`);
      shade.setAttribute('opacity', String(0.16 * (1 - foldScale)));
      foldedEdge.setAttribute('opacity', String(1 - ease(clamp(opening / 0.5))));
      const paper = 1 - ease(clamp((seconds - UNFOLD_END) / (PAPER_FADE_END - UNFOLD_END)));
      banner.style.setProperty('--paper-opacity', String(paper));

      const departure = clamp((seconds - TOW_END) / (DEPARTURE_END - TOW_END));
      const travel = departure * departure;
      const flight = { x: x + PLANE_X + (outside - PLANE_X) * travel, y: y + 88 - 40 * travel };
      const angle = Math.atan2(40, PLANE_X - outside) * 180 / Math.PI * ease(clamp(departure / 0.2));
      plane.setAttribute('transform', `translate(${flight.x} ${flight.y}) rotate(${angle})`);
      plane.setAttribute('opacity', seconds < DEPARTURE_END ? '1' : '0');

      const release = clamp((seconds - TOW_END) / 0.2);
      ropes.setAttribute('opacity', String(1 - ease(release)));
      knots.setAttribute('opacity', String(1 - ease(release)));
      if (release < 1) {
        const end = { x: flight.x * (1 - release) + (x - 20) * release, y: flight.y + release * 48 };
        topRope.setAttribute('d', flightRope({ x: x - 16, y: y + 24 }, end, 4 + release * 20));
        bottomRope.setAttribute('d', flightRope({ x: x - 16, y: y + 160 }, end, 4 + release * 20));
      }

      svg.dataset.phase = seconds < TOW_END ? 'delivery'
        : seconds < UNFOLD_END ? 'unfold'
        : seconds < PAPER_FADE_END ? 'reveal' : 'ready';
    };

    const resize = () => {
      const bounds = svg.getBoundingClientRect();
      const scale = bounds.width / 568;
      if (!scale) return;
      entrance = (window.innerWidth - bounds.left) / scale + 280;
      outside = -bounds.left / scale - 160;
      draw(clock.seconds);
    };
    const syncPlayback = () => {
      if (motionPreference.matches) playback.progress(1);
      else playback.paused(document.hidden);
    };

    resize();
    const context = gsap.context(() => {
      playback = gsap.to(clock, {
        seconds: FLIGHT_END, duration: FLIGHT_END, ease: 'none', paused: true,
        onUpdate: () => draw(clock.seconds),
      });
      syncPlayback();
    }, svg);
    const observer = new ResizeObserver(resize);
    observer.observe(svg);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', syncPlayback);
    motionPreference.addEventListener('change', syncPlayback);
    return () => {
      completion?.kill();
      context.revert();
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', syncPlayback);
      motionPreference.removeEventListener('change', syncPlayback);
    };
  }, [navigate]);

  return <svg ref={svgRef} className="loading-flight" viewBox="0 0 568 316" role="img" aria-labelledby={`${id}-title`}>
    <title id={`${id}-title`}>AWS. A pixel plane flies right to left with a folded banner, which opens to reveal the orange smile.</title>
    <defs>
      <path id={`${id}-top-rope`} ref={topRopeRef} />
      <path id={`${id}-bottom-rope`} ref={bottomRopeRef} />
    </defs>
    <g ref={bannerRef} className="loading-flight__banner" shapeRendering="crispEdges">
      <g className="loading-flight__paper">
        <path d="M-8 -16H576V-8H584V192H-16V-8H-8Z" fill="var(--white)" stroke="var(--navy)" strokeWidth="2" />
        <path d="M0 -8h24v4H0z M32 -8h16v4H32z" fill="var(--orange)" />
        <path d="M520 -8h12v4h-12z" fill="var(--violet)" />
        <path d="M540 -8h12v4h-12z" fill="var(--cyan)" />
        <path d="M560 -8h12v4h-12z" fill="var(--lime)" />
      </g>
      <path className="loading-flight__letters" d={wordmark} fill="var(--navy)" fillRule="evenodd" />
      <g ref={flapRef} className="loading-flight__fold">
        <path className="loading-flight__paper" d="M-16 192H584V320H576V328H-8V320H-16Z" fill="var(--white)" stroke="var(--navy)" strokeWidth="2" />
        <path className="loading-flight__smile" d={smile} fill="var(--orange)" />
        <rect ref={foldShadeRef} x="-15" y="192" width="598" height="135" fill="var(--navy)" opacity="0" />
      </g>
      <path ref={foldedEdgeRef} d="M-16 188H584V196H-16Z" fill="var(--orange)" opacity="0" />
      <path className="loading-flight__paper" d="M-16 192H584" stroke="var(--navy)" strokeWidth="1" strokeOpacity="0.14" />
    </g>
    <g ref={ropesRef} opacity="0" fill="none" strokeLinejoin="miter" strokeLinecap="square">
      <g stroke="var(--navy)" strokeWidth="5">
        <use href={`#${id}-top-rope`} /><use href={`#${id}-bottom-rope`} />
      </g>
      <g stroke="var(--orange)" strokeWidth="2" strokeDasharray="5 7">
        <use href={`#${id}-top-rope`} /><use href={`#${id}-bottom-rope`} />
      </g>
    </g>
    <g ref={knotsRef} opacity="0" shapeRendering="crispEdges">
      <path d="M578 18h12v12h-12z M578 154h12v12h-12z" fill="var(--navy)" />
      <path d="M582 22h4v4h-4z" fill="var(--violet)" />
      <path d="M582 158h4v4h-4z" fill="var(--orange)" />
    </g>
    <g ref={planeRef} className="loading-flight__plane" opacity="0">
      <g transform="scale(.85)">
        <image href="/assets/865-7675-cdcaf.svg" x="-120" y="-40" width="128" height="80" />
      </g>
    </g>
  </svg>;
}
