import { useId, useLayoutEffect, useRef } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';
import { SignalStitch } from './SignalStitch';
import { createHeroArrival, type HeroWord } from './heroArrival';
import { resolveLocation } from '../navigation';
import cloudArtwork from '../../public/assets/1590-802-cfe72.svg?raw';

const imgAccentSignalStitch = '/assets/865-7675-fa3f0.svg';
const imgHeroCloudTexture = '/assets/865-7675-28d92.webp';
const imgHeroPlane = '/assets/865-7675-cdcaf.svg';
const cloudCut = cloudArtwork.match(/\bd="([^"]+)"/)![1];

let heroHasArrived = false;

function WordLetters({ text, signal = false }: { text: HeroWord; signal?: boolean }) {
  return Array.from(text).map((letter, index) => <span key={index} data-character={index}
    className="hero-letter-slot">
    <span className={signal ? 'hero-signal-letter' : 'hero-word-letter'} data-letter={letter}>{letter}</span>
  </span>);
}

function TitleWord({ text, nodeId }: { text: HeroWord; nodeId?: string }) {
  return <span className={`hero-word hero-word--${text.toLowerCase()}`} data-node-id={nodeId} data-word={text}>
    <span className="hero-word-window">
      <span className="hero-word-base" aria-hidden="true">
        <WordLetters text={text} />
      </span>
    </span>
    <span className="hero-word-signal" aria-hidden="true">
      <span className="hero-word-base">
        <WordLetters text={text} signal />
      </span>
    </span>
  </span>;
}

// Both the icon and the city lettering use this exact 32 × 24 cloud print.
function CloudInk({ orangeAccent = true }: { orangeAccent?: boolean }) {
  return <>
    <rect width="32" height="24" fill="#22d3ee" />
    <image className="hero-cloud-texture" href={imgHeroCloudTexture} x="-12" y="-8" width="56" height="38" preserveAspectRatio="xMidYMid slice" />
    {orangeAccent && <path d="M12 12H20V14H12Z" fill="#ff9900" />}
  </>;
}

function CloudWindow() {
  const id = useId();
  return <svg className="hero-cloud" viewBox="0 0 48 36" aria-hidden="true" focusable="false">
    <defs><clipPath id={id}><path d={cloudCut} fillRule="evenodd" clipRule="evenodd" /></clipPath></defs>
    <g className="hero-cloud-float">
      <g transform="translate(8 6)">
        <g clipPath={`url(#${id})`}><CloudInk /></g>
      </g>
    </g>
    <g className="hero-cloud-pixels">
      <rect x="2" y="20" width="2" height="2" fill="#a78bfa" />
      <rect x="42" y="10" width="2" height="2" fill="#22d3ee" />
      <rect x="38" y="29" width="1" height="1" fill="#ff9900" />
    </g>
  </svg>;
}

function CloudCity() {
  const id = useId();
  return <span className="hero-city" aria-hidden="true">
    <span className="hero-city-measure">BENGAL<span className="hero-city-ending">URU</span></span>
    <svg className="hero-city-art" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} patternUnits="userSpaceOnUse" width="1.333333em" height="1em" viewBox="0 0 32 24">
          <CloudInk orangeAccent={false} />
        </pattern>
        <clipPath id={`${id}-reveal`} clipPathUnits="objectBoundingBox">
          {Array.from({ length: 7 }, (_, row) =>
            <rect key={row} className="hero-city-reveal-row" x="0" y={row / 7} width="1" height={1 / 7 + 0.001} />,
          )}
        </clipPath>
      </defs>
      <g className="hero-city-reveal" clipPath={`url(#${id}-reveal)`}>
        <g className="hero-city-float">
          {/* One text run keeps the city on one baseline; dx retains the LU spacing correction. */}
          <text x="0" y="50%" dx="0 0 0 0 0 0 -0.107em 0 0" dominantBaseline="central" fill={`url(#${id})`}>BENGALURU</text>
        </g>
      </g>
    </svg>
    <span className="hero-city-pixels"><i /><i /><i /></span>
  </span>;
}

export function HeroTitle({ variant }: { variant: 'desktop' | 'mobile' }) {
  const mobile = variant === 'mobile';
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();
  const active = visible && pageVisible && !reducedMotion;
  const activity = useRef(active);
  activity.current = active;
  const completed = useRef(heroHasArrived);
  const entrance = useRef<gsap.core.Timeline>(null);
  const ambient = useRef<gsap.core.Timeline[]>([]);

  useLayoutEffect(() => {
    const root = ref.current!;
    const bounds = root.getBoundingClientRect();
    const { anchor } = resolveLocation(new URL(window.location.href));
    // A returning visitor or a late font should get a readable title immediately.
    // Only the first visible visit measures letters for the delivery scene.
    if ((anchor && anchor !== 'home' && anchor !== 'top') || !document.fonts.check('16px "Arcade Classic"')
      || bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
      completed.current = true;
    }
    let returnFrame = 0;
    const context = gsap.context(() => {
      const letters = root.querySelectorAll('.hero-word-letter, .hero-signal-letter');
      const cloud = root.querySelector('.hero-cloud');
      const city = root.querySelector('.hero-city');
      gsap.set(letters, { opacity: 1, x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, clipPath: 'none' });
      gsap.set(cloud, { opacity: 1, scale: 1 });
      gsap.set(city, { opacity: 1, y: 0 });
      gsap.set(root.querySelectorAll('.hero-city-reveal-row'), { attr: { width: 1 } });
      gsap.set(root, { attr: { 'data-arriving': 'false' } });
      if (reducedMotion) {
        completed.current = true;
        heroHasArrived = true;
        return;
      }

      // Animate the original sky print inside the brand's stepped cloud silhouette.
      const sky = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
        .to('.hero-cloud .hero-cloud-texture', { x: 5, y: 2, duration: 7, ease: 'sine.inOut' }, 0)
        .to('.hero-cloud-float, .hero-city-float', { y: -2, duration: 3.5, repeat: 1, yoyo: true, ease: 'sine.inOut' }, 0)
        .to('.hero-cloud-pixels rect', { y: -3, opacity: 0.35, duration: 2.8, stagger: 0.35, repeat: 1, yoyo: true, ease: 'sine.inOut' }, 0)
        .to('.hero-city-pixels i', { y: -3, opacity: 0.35, duration: 2.8, stagger: 0.35, repeat: 1, yoyo: true, ease: 'sine.inOut' }, 0);
      const citySky = gsap.timeline({ paused: true, repeat: -1, yoyo: true })
        .to('.hero-city .hero-cloud-texture', { x: 5, y: 2, duration: 2.4, ease: 'sine.inOut' });
      // Both copies share every letter transform so the dither stays on the moving type.
      const signal = gsap.timeline({ paused: true, repeat: -1 });
      root.querySelectorAll('.hero-word-signal').forEach((word, index) => {
        signal.fromTo(word, { '--signal-x': '-20%' }, {
          '--signal-x': '122%', duration: 4.2, ease: 'none',
        }, index * 1.25);
      });
      const character = (word: HeroWord, index: number) => root.querySelectorAll<HTMLElement>(
        `[data-word="${word}"] [data-character="${index}"] > span`,
      );

      const characterDelay = (_index: number, target: HTMLElement) =>
        Number(target.parentElement!.dataset.character) * 0.12;

      const e = character('STUDENT', 4);
      const u = character('STUDENT', 2);
      const i = character('COMMUNITY', 6);
      const ms = [...character('COMMUNITY', 2), ...character('COMMUNITY', 3)];
      const a = character('DAY', 1);
      const y = character('DAY', 2);
      gsap.set([...i, ...u], { transformOrigin: '50% 55%', transformPerspective: 650 });

      // Short, offset character scenes repeat after the entrance, like the GSAP headline.
      const type = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.35 })
        .to(e, { scaleX: 0.64, scaleY: 1.08, duration: 0.2, ease: 'power2.inOut' }, 0.15)
        .to(e, { scaleX: 1.08, scaleY: 0.94, duration: 0.16, ease: 'power2.out' }, 0.35)
        .to(e, { scaleX: 1, scaleY: 1, duration: 0.65, ease: 'elastic.out(1, 0.38)' }, 0.51)
        .to(i, { rotationX: 360, duration: 1.5, ease: 'power2.inOut' }, 0.95)
        .set(i, { rotationX: 0 }, 2.45)
        .to(a, { scaleY: 0.78, scaleX: 1.08, duration: 0.3, ease: 'power2.inOut' }, 2.4)
        .to(a, { scaleY: 1, scaleX: 1, duration: 1.1, ease: 'elastic.out(1, 0.38)' }, 2.7)
        .to(u, { rotationY: 360, duration: 1.45, ease: 'power2.inOut' }, 3.6)
        .set(u, { rotationY: 0 }, 5.05)
        .to(ms, { yPercent: -9, scaleY: 1.06, duration: 0.4,
          stagger: characterDelay,
          ease: 'power2.out' }, 4.7)
        .to(ms, { yPercent: 0, scaleY: 1, duration: 0.95,
          stagger: characterDelay,
          ease: 'elastic.out(1, 0.5)' }, 5.1)
        .to(y, { rotation: -9, yPercent: -7, duration: 0.4, ease: 'power2.out' }, 6.15)
        .to(y, { rotation: 0, yPercent: 0, duration: 1.15, ease: 'elastic.out(1, 0.5)' }, 6.55);
      signal.timeScale(1.5);
      type.timeScale(1.5);
      ambient.current = [sky, citySky, signal, type];
      if (completed.current) {
        heroHasArrived = true;
        // The sibling sky flight installs its listener later in this commit.
        returnFrame = window.requestAnimationFrame(() => {
          root.parentElement?.querySelector('[data-hero-sky-flight]')?.dispatchEvent(new Event('hero-flight-return'));
        });
        return;
      }

      entrance.current = createHeroArrival(root, () => {
        completed.current = true;
        heroHasArrived = true;
        if (activity.current) ambient.current.forEach(timeline => timeline.play());
      });
    }, root);
    // A resize during delivery settles the scene instead of following stale coordinates.
    let width = root.clientWidth;
    const observer = new ResizeObserver(() => {
      if (Math.abs(root.clientWidth - width) > 1) {
        width = root.clientWidth;
        entrance.current?.progress(1);
      }
    });
    observer.observe(root);
    return () => {
      if (entrance.current && entrance.current.time() > 0) heroHasArrived = true;
      window.cancelAnimationFrame(returnFrame);
      observer.disconnect();
      context.revert();
      entrance.current = null;
      ambient.current = [];
    };
  }, [reducedMotion, mobile]);

  useLayoutEffect(() => {
    entrance.current?.paused(!active);
    ambient.current.forEach(timeline => timeline.paused(!active || !completed.current));
  }, [active, reducedMotion]);

  return <div ref={ref} className="hero-masthead" data-motion-active={active}
    data-arriving="true"
    data-node-id={mobile ? '1169:523' : '860:5000'} data-name="Masthead / Cloud and type">
    <p className="hero-title-kicker" data-node-id={mobile ? '1169:524' : '860:5004'}>FOR THE NEXT WAVE OF BUILDERS.</p>
    <div className="hero-title-stage">
      <h1 className="hero-title-display" aria-label="AWS Student Community Day Bengaluru" data-node-id={mobile ? '1169:525' : undefined}>
        <span className="hero-title-first-row" data-node-id={mobile ? undefined : '860:5001'}>
          <span className="hero-title-opening">
            <TitleWord text="AWS" />
            <TitleWord text="STUDENT" nodeId={mobile ? undefined : '860:5002'} />
          </span>
          <CloudWindow />
        </span>
        <span className="hero-title-lower" data-node-id={mobile ? undefined : '860:5006'}>
          <TitleWord text="COMMUNITY" />
          <span className="hero-title-last-row"><TitleWord text="DAY" /><CloudCity /></span>
        </span>
      </h1>
      <div className="hero-title-note" data-node-id={mobile ? '1169:526' : '860:5003'}>
        <div data-node-id={mobile ? undefined : '860:5005'}><p>A little curiosity.</p><p>A world of possibility.</p></div>
        <div className="hero-title-stitch" data-node-id={mobile ? '1169:527' : '860:5007'}>
          <SignalStitch alt="" src={imgAccentSignalStitch} />
        </div>
      </div>
    </div>
    <div className="hero-arrival-plane" aria-hidden="true">
      <div className="hero-arrival-plane-art"><img src={imgHeroPlane} alt="" /></div>
      <svg className="hero-arrival-rig" fill="none" aria-hidden="true" strokeLinejoin="miter" strokeLinecap="square">
        <path stroke="var(--navy)" strokeWidth="5" />
        <path stroke="var(--orange)" strokeWidth="2" strokeDasharray="5 7" />
      </svg>
    </div>
    <div className="hero-launch-pixels" aria-hidden="true"><i /><i /><i /><i /></div>
  </div>;
}
