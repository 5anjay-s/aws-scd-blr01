import { useCallback, useLayoutEffect, useRef, useState, type HTMLAttributes } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

type CanvasFrames = {
  initial: Record<string, number>;
  animate: Record<string, number[]>;
  transition: Record<string, { duration: number; times: number[]; ease: 'linear' | 'easeInOut' }>;
};

// Exact canvas keyframes from Figma. Layout rotations stay on their static wrappers.
const keyframes: Record<string, CanvasFrames> = {
  "860:4976": { initial: { x: -152, }, animate: { x: [-152, 152, 152, -152, -152], }, transition: { x: { duration: 16, times: [0, 0.1125, 0.1249, 0.125, 1], ease: "linear" }, } },
  "860:5021": { initial: { x: 654, y: 0, }, animate: { x: [654, -654], y: [0, -4, 0, 4, 0], }, transition: { x: { duration: 16, times: [0, 1], ease: "linear" }, y: { duration: 16, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" }, } },
  "860:5034": { initial: { opacity: 0, }, animate: { opacity: [0, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.25, 0], }, transition: { opacity: { duration: 16, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear" }, } },
  "860:5049": { initial: { opacity: 0, }, animate: { opacity: [0, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.35, 0], }, transition: { opacity: { duration: 16, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear" }, } },
  "866:8332": { initial: { x: -112, }, animate: { x: [-112, 128, 128, -112, -112], }, transition: { x: { duration: 12, times: [0, 0.15, 0.1666, 0.1667, 1], ease: "linear" }, } },
  "1169:536": { initial: { x: 325.5, y: 0, }, animate: { x: [325.5, -325.5], y: [0, -3, 0, 3, 0], }, transition: { x: { duration: 12, times: [0, 1], ease: "linear" }, y: { duration: 12, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut" }, } },
  "1169:537": { initial: { opacity: 0, }, animate: { opacity: [0, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.25, 0], }, transition: { opacity: { duration: 12, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear" }, } },
  "1169:540": { initial: { opacity: 0, }, animate: { opacity: [0, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.35, 0], }, transition: { opacity: { duration: 12, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear" }, } }
};

type Props = HTMLAttributes<HTMLDivElement> & { 'data-node-id'?: string; waitForArrival?: boolean };
export function DesignMotion({ waitForArrival = false, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<Element>(null);
  const playback = useRef<gsap.core.Timeline>(null);
  const visible = useInView(sectionRef);
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();
  const [arrived, setArrived] = useState(!waitForArrival);
  const active = useRef(false);
  active.current = visible && pageVisible && !reducedMotion;
  const animation = keyframes[props['data-node-id'] ?? ''];
  const setRef = useCallback((element: HTMLDivElement | null) => {
    ref.current = element;
    sectionRef.current = element?.closest('.design-section') ?? element?.parentElement ?? null;
  }, []);

  useLayoutEffect(() => {
    if (!animation || reducedMotion) return;
    const context = gsap.context(() => {
      // A paused track's zero-time set is not rendered until its first tick.
      // Position the plane offscreen before the arrival handoff reveals it.
      gsap.set(ref.current, animation.initial);
      const master = gsap.timeline({ paused: true });
      playback.current = master;
      for (const [property, values] of Object.entries(animation.animate)) {
        const timing = animation.transition[property];
        const track = gsap.timeline({ repeat: -1 });
        track.set(ref.current, { [property]: values[0] });
        values.slice(1).forEach((value, index) => {
          track.to(ref.current, {
            [property]: value,
            duration: (timing.times[index + 1] - timing.times[index]) * timing.duration,
            ease: timing.ease === 'easeInOut' ? 'sine.inOut' : 'none',
          }, timing.times[index] * timing.duration);
        });
        master.add(track, 0);
      }
    }, ref);
    const element = ref.current!;
    const returnToSky = () => {
      // Reset the panel flight while it is still hidden, then let it appear.
      playback.current?.restart().paused(!active.current);
      setArrived(true);
    };
    element.addEventListener('hero-flight-return', returnToSky);
    return () => {
      element.removeEventListener('hero-flight-return', returnToSky);
      context.revert();
      playback.current = null;
    };
  }, [animation, reducedMotion]);

  useLayoutEffect(() => {
    playback.current?.paused(!visible || !pageVisible || reducedMotion || !arrived);
  }, [visible, pageVisible, reducedMotion, animation, arrived]);

  return <div {...props} ref={setRef} data-flight-waiting={waitForArrival && !arrived && !reducedMotion} />;
}
