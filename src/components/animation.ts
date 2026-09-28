import { useEffect, useState, useSyncExternalStore, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CustomEase } from 'gsap/CustomEase';

// Register once, so every composition uses the same GSAP clock and plugins.
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin, CustomEase);
CustomEase.create('scd-cloud-cover', '0.45,0,0.55,1');
CustomEase.create('scd-cloud-reveal', '0.45,0,0.25,1');
export { gsap, ScrollTrigger };

const motionQuery = '(prefers-reduced-motion: reduce)';
function subscribeToMotion(callback: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener('change', callback);
  return () => preference.removeEventListener('change', callback);
}
export function useReducedMotion() {
  return useSyncExternalStore(subscribeToMotion, () => window.matchMedia(motionQuery).matches, () => true);
}
function subscribeToVisibility(callback: () => void) {
  document.addEventListener('visibilitychange', callback);
  return () => document.removeEventListener('visibilitychange', callback);
}
export function usePageVisible() {
  return useSyncExternalStore(subscribeToVisibility, () => !document.hidden, () => false);
}

// Visibility observation is separate from animation so transformed artwork
// can observe its stationary section or wrapper instead.
export function useInView(ref: RefObject<Element | null>, { once = false, amount = 0, margin = '0px' } = {}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      const next = entry.isIntersecting && entry.intersectionRatio >= amount;
      setVisible(next);
      if (next && once) observer.disconnect();
    }, { threshold: amount, rootMargin: margin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, once, amount, margin]);
  return visible;
}
