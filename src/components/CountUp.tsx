import { useLayoutEffect, useRef } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

const formatter = new Intl.NumberFormat('en-US');

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const digits = useRef<HTMLSpanElement>(null);
  const playback = useRef<gsap.core.Tween>(null);
  const completed = useRef<number | null>(null);
  const visible = useInView(ref, { amount: 0.3 });
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();
  const label = `${formatter.format(value)}${suffix}`;

  useLayoutEffect(() => {
    const element = digits.current!;
    element.textContent = label;
    if (reducedMotion || completed.current === value) {
      completed.current = value;
      return;
    }
    const counter = { value: 0 };
    let previous = -1;
    const draw = () => {
      const current = Math.round(counter.value);
      if (current === previous) return;
      previous = current;
      element.textContent = `${formatter.format(current)}${suffix}`;
    };
    draw();
    // Update one text node; the final label reserves space and stays readable to AT.
    const tween = gsap.to(counter, {
      value, duration: 1.4, ease: 'power2.out', paused: true,
      onUpdate: draw,
      onComplete: () => { completed.current = value; element.textContent = label; },
    });
    playback.current = tween;
    return () => {
      tween.kill();
      playback.current = null;
      element.textContent = label;
    };
  }, [value, suffix, label, reducedMotion]);

  useLayoutEffect(() => {
    playback.current?.paused(!visible || !pageVisible || reducedMotion);
  }, [visible, pageVisible, reducedMotion, value, suffix]);

  return <span ref={ref} className="count-up" data-reveal="off">
    <span className="count-up-final">{label}</span>
    <span ref={digits} className="count-up-digits" aria-hidden="true">{label}</span>
  </span>;
}
