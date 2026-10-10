import { gsap } from './animation';
import { flightRope } from './flightRope';

export type HeroWord = 'AWS' | 'STUDENT' | 'COMMUNITY' | 'DAY';

/** Measure the resting layout once; animated letters never change the line geometry. */
export function createHeroArrival(root: HTMLElement, onComplete: () => void) {
  const section = root.parentElement!;
  const bounds = root.getBoundingClientRect();
  const letter = (word: HeroWord, index: number) => root.querySelector<HTMLElement>(
    `[data-word="${word}"] .hero-word-window [data-character="${index}"] > span`,
  )!;
  const letters = (word: HeroWord) => root.querySelectorAll<HTMLElement>(
    `[data-word="${word}"] .hero-word-window .hero-word-letter`,
  );
  const awsLetters = Array.from(letters('AWS'));
  const studentLetters = Array.from(letters('STUDENT'));
  const communityLetters = Array.from(letters('COMMUNITY'));
  const letterBounds = new Map([...awsLetters, ...studentLetters, ...communityLetters].map(target => [target, target.getBoundingClientRect()]));
  const headerBottom = root.ownerDocument.querySelector('.site-header-shell')?.getBoundingClientRect().bottom ?? bounds.top;
  const c = letter('COMMUNITY', 0);
  const d = letter('DAY', 0);
  const cBox = c.getBoundingClientRect();
  const dBox = d.getBoundingClientRect();
  const city = root.querySelector<HTMLElement>('.hero-city')!;
  const cityReveal = root.querySelector('.hero-city-reveal');
  const cityRevealRows = root.querySelectorAll('.hero-city-reveal-row');
  const community = root.querySelector('[data-word="COMMUNITY"]')!.getBoundingClientRect();
  const panel = section.querySelector('[data-hero-invitation]')!.getBoundingClientRect();
  const skyFlight = section.querySelector('[data-hero-sky-flight]')!;
  const plane = root.querySelector<HTMLElement>('.hero-arrival-plane')!;
  const rig = root.querySelector('.hero-arrival-rig');
  const pixels = root.querySelectorAll('.hero-launch-pixels i');
  const planeWidth = Math.max(58, Math.min(128, bounds.width * 0.1));
  const planeHeight = planeWidth * 80 / 128;
  const cx = cBox.left - bounds.left + cBox.width / 2;
  const carryY = -cBox.height * 0.48;
  const flyY = cBox.top - bounds.top + carryY - planeWidth * 0.12;
  const startX = -bounds.left - planeWidth;
  const passX = community.right - bounds.left + planeWidth * 0.6;
  const exitX = window.innerWidth - bounds.left + planeWidth;
  const launchY = panel.top - dBox.top + dBox.height * 0.25;

  gsap.set(root, { attr: { 'data-arriving': 'true' } });
  gsap.set(root.querySelectorAll('.hero-word-letter'), { opacity: 0 });
  gsap.set(root.querySelectorAll('.hero-word-signal'), { opacity: 0 });
  gsap.set(city, { opacity: 0 });
  gsap.set(plane, { width: planeWidth, xPercent: -50, yPercent: -50,
    x: startX, y: flyY, rotation: 0, scale: 1, opacity: 0 });
  // Suspend C beneath the plane, using the loading banner's stepped, stitched ropes.
  const ropeY = cBox.height * 0.39 + planeWidth * 0.12 + planeHeight / 2;
  const hitch = { x: planeWidth * 0.5, y: planeHeight * 0.6 };
  const ropes = `${flightRope(hitch, { x: planeWidth / 2 - cBox.width * 0.23, y: ropeY }, 3)} ${flightRope(hitch, { x: planeWidth / 2 + cBox.width * 0.23, y: ropeY }, 3)}`;
  gsap.set(rig, { opacity: 1, scaleY: 1, transformOrigin: '50% 60%',
    attr: { viewBox: `0 0 ${planeWidth} ${planeHeight}` } });
  gsap.set(root.querySelectorAll('.hero-arrival-rig path'), { attr: { d: ropes } });
  gsap.set(pixels, { x: dBox.left - bounds.left + dBox.width / 2,
    y: panel.top - bounds.top, opacity: 0, scale: 1 });

  const timeline = gsap.timeline({ id: 'hero-arrival', paused: true, onComplete });

  // Orange AWS letters emerge from behind the navbar's orange pixel border.
  awsLetters.forEach((target, index) => {
    const box = letterBounds.get(target)!;
    const start = 0.05 + index * 0.07;
    timeline.fromTo(target, { y: headerBottom - box.top - box.height, opacity: 1,
      scaleX: 0.95, scaleY: 1.05 }, {
      y: 0, scaleX: 1.12, scaleY: 0.82, duration: 0.5, ease: 'power2.in',
    }, start)
      .to(target, { scaleX: 1, scaleY: 1, duration: 0.55, ease: 'elastic.out(1, 0.4)' }, start + 0.5);
  });

  // The whole word drops from above, with a tight stagger and a shared landing rhythm.
  studentLetters.forEach((target, index) => {
    const box = letterBounds.get(target)!;
    const start = index * 0.035;
    timeline.fromTo(target, { y: -box.top - box.height, opacity: 1,
      scaleX: 0.9, scaleY: 1.12 }, {
      y: 0, scaleX: 0.94, scaleY: 1.06, duration: 0.48, ease: 'power2.in',
    }, start)
      .to(target, { scaleX: 1.16, scaleY: 0.76, duration: 0.09 }, start + 0.48)
      .to(target, { scaleX: 1, scaleY: 1, duration: 0.44, ease: 'elastic.out(1, 0.4)' }, start + 0.57);
  });

  // C hangs underneath the plane. Both travel the same distance with the same easing.
  timeline.set(plane, { opacity: 1 }, 0.12)
    .to(plane, { x: cx, duration: 0.72, ease: 'power2.out' }, 0.12)
    .fromTo(c, { x: startX - cx, y: carryY, scale: 0.7, opacity: 1 }, {
      x: 0, duration: 0.72, ease: 'power2.out',
    }, 0.12)
    .to(rig, { scaleY: 0, opacity: 0, duration: 0.14, ease: 'power2.in' }, 0.84)
    .to(c, { y: 0, scaleX: 0.9, scaleY: 1.1, duration: 0.26, ease: 'power2.in' }, 0.84)
    .to(c, { scaleX: 1.15, scaleY: 0.78, duration: 0.09 }, 1.1)
    .to(c, { scaleX: 1, scaleY: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' }, 1.19);

  // Reveal solid letters at C's open edge, stretch them outward, then settle the width.
  communityLetters.slice(1).forEach((target, index) => {
    const box = letterBounds.get(target)!;
    const start = 1.2 + index * 0.075;
    timeline.fromTo(target, {
      x: cBox.right - cBox.width * 0.35 - box.left, scaleX: 0.05, scaleY: 0.85,
      opacity: 1, transformOrigin: '0% 75%', clipPath: 'inset(0 100% 0 0)',
    }, {
      x: 0, scaleX: 1.12, scaleY: 0.96, opacity: 1, clipPath: 'inset(0 0% 0 0)',
      duration: 0.42 + index * 0.025, ease: 'power3.out',
    }, start)
      .to(target, { scaleX: 1, scaleY: 1, duration: 0.32, ease: 'back.out(1.6)' }, start + 0.42 + index * 0.025)
      .set(target, { clipPath: 'none', transformOrigin: '50% 90%' }, start + 0.74 + index * 0.025);
  });
  timeline.to(plane, { x: passX, y: flyY + cBox.height * 0.45,
    duration: 1.2, ease: 'power1.inOut' }, 0.88)
    .to(plane, { x: exitX, y: flyY + cBox.height * 0.35,
      duration: 0.32, ease: 'power1.in',
      onComplete: () => {
        // Hide this copy before handing visibility to the panel flight.
        gsap.set(plane, { opacity: 0 });
        skyFlight.dispatchEvent(new Event('hero-flight-return'));
      },
    }, 2.08);

  // D stretches out of the orange panel, overshoots, and lands with a soft squash.
  timeline.fromTo(d, { y: launchY, scaleX: 1.3, scaleY: 0.12, opacity: 0 }, {
    y: launchY - dBox.height * 0.45, scaleX: 0.65, scaleY: 1.35, opacity: 1,
    duration: 0.18, ease: 'power2.in',
  }, 2)
    .to(d, { y: -dBox.height * 0.22, rotation: 7, scaleX: 0.95, scaleY: 1.08,
      duration: 0.42, ease: 'power3.out' }, 2.18)
    .to(d, { y: 0, rotation: -3, scaleX: 1.18, scaleY: 0.78,
      duration: 0.16, ease: 'power2.in' }, 2.6)
    .to(d, { rotation: 0, scaleX: 1, scaleY: 1,
      duration: 0.5, ease: 'elastic.out(1, 0.4)' }, 2.76);
  Array.from(letters('DAY')).slice(1).forEach((target, index) => {
    timeline.fromTo(target, { yPercent: 60, rotation: -8, scale: 0.65, opacity: 0 }, {
      yPercent: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.48, ease: 'back.out(2)',
    }, 2.6 + index * 0.1);
  });
  timeline.set(pixels, { opacity: 1 }, 2.06)
    .to(pixels, { x: index => `+=${(index - 1.5) * dBox.width * 0.35}`,
      y: `-=${dBox.height * 0.4}`, rotation: index => (index - 1.5) * 45,
      scale: 0, opacity: 0, duration: 0.4, ease: 'power2.out' }, 2.06)
    .fromTo(root.querySelector('.hero-cloud'), { opacity: 0, scale: 0.85 }, {
      opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out',
    }, 0.2)
    // Offset horizontal bands uncover the stationary word with a stepped leading edge.
    .set(city, { opacity: 1 }, 2.5)
    .fromTo(cityRevealRows, { attr: { width: 0 } }, {
      attr: { width: 1 }, duration: 0.58, stagger: { each: 0.035, from: 'center' }, ease: 'power2.inOut',
    }, 2.5)
    // Explicitly hand a complete, unclipped word to the idle timelines.
    .set(root.querySelectorAll('.hero-word-letter, .hero-signal-letter'), {
      x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, rotation: 0,
      rotationX: 0, rotationY: 0, opacity: 1, clipPath: 'none', transformOrigin: '50% 90%',
    }, 3.45)
    .set(root.querySelectorAll('[data-word="STUDENT"] [data-character="2"] > span, [data-word="COMMUNITY"] [data-character="6"] > span'), {
      transformOrigin: '50% 55%',
    }, 3.45)
    .set(root.querySelectorAll('.hero-word-signal'), { opacity: 1 }, 3.45)
    .set(cityRevealRows, { attr: { width: 1 } }, 3.45)
    .set(cityReveal, { attr: { 'clip-path': 'none' } }, 3.45)
    .set(city, { opacity: 1, y: 0 }, 3.45)
    .set(root, { attr: { 'data-arriving': 'false' } }, 3.45);
  return timeline;
}
