import { useLayoutEffect, useRef, type RefObject } from 'react';
import { gsap, useReducedMotion } from './animation';
import { collectScrollRevealTargets } from './scrollRevealTargets';

type Options = { pageKey: string; disabled: boolean; paused: boolean };
const ownedStyles = ['opacity', 'translate', 'will-change', '--scroll-reveal-y'];

export function useScrollReveal(rootRef: RefObject<HTMLElement | null>, { pageKey, disabled, paused }: Options) {
  const reducedMotion = useReducedMotion();
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  const resume = useRef<(() => void) | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || disabled || reducedMotion || !('IntersectionObserver' in window)) return;
    const records = collectScrollRevealTargets(root).map(target => {
      const element = target.element;
      return {
        ...target,
        translate: target.translate === 'none' ? ['0px', '0px'] : target.translate.split(' '),
        styles: ownedStyles.map(name => [name, element.style.getPropertyValue(name), element.style.getPropertyPriority(name)]),
        state: 'pending',
        tween: null as gsap.core.Tween | null,
      };
    });
    type Record = typeof records[number];
    const byElement = new Map(records.map(record => [record.element, record]));
    const visible = new Set<Record>();
    const restore = (record: Record) => {
      record.styles.forEach(([name, value, priority]) => {
        if (value) record.element.style.setProperty(name, value, priority);
        else record.element.style.removeProperty(name);
      });
    };
    const finish = (record: Record) => {
      record.tween?.kill();
      record.tween = null;
      record.state = 'revealed';
      restore(record);
      record.element.dataset.scrollReveal = 'revealed';
    };
    const reveal = (record: Record, delay = 0, instant = false) => {
      if (record.state === 'revealed' || (record.state === 'revealing' && !instant)) return;
      observer.unobserve(record.element);
      visible.delete(record);
      if (instant) { finish(record); return; }
      record.state = 'revealing';
      record.element.dataset.scrollReveal = 'revealing';
      record.element.style.willChange = 'opacity, translate';
      record.tween = gsap.to(record.element, {
        opacity: record.opacity, '--scroll-reveal-y': '0px',
        duration: record.artwork ? 0.72 : 0.58, delay, ease: 'power3.out',
        onComplete: () => finish(record),
      });
    };
    const flush = () => {
      if (document.hidden) return;
      // Stagger only this viewport's new arrivals, so a long page never queues
      // seconds of delays and fast scrolling still reveals content promptly.
      const batch = [...visible].map(record => ({ record, bounds: record.element.getBoundingClientRect() }))
        .filter(({ bounds }) => bounds.bottom > 0 && bounds.top < window.innerHeight)
        .sort((a, b) => Math.abs(a.bounds.top - b.bounds.top) < 24
          ? a.bounds.left - b.bounds.left : a.bounds.top - b.bounds.top);
      // The incoming page must already be readable as the wipe uncovers it.
      batch.forEach(({ record }, index) => reveal(record, Math.min(index * 0.055, 0.22), pausedRef.current));
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const record = byElement.get(entry.target as HTMLElement);
        if (!record || record.state !== 'pending') return;
        if (entry.isIntersecting) visible.add(record);
        else visible.delete(record);
      });
      flush();
    }, { rootMargin: '0px', threshold: 0 });

    const viewportHeight = window.innerHeight;
    const mobile = window.innerWidth < 768;
    records.forEach(record => {
      const element = record.element;
      // Keep the arrival viewport and anything above it readable. Bounds were
      // collected before any style writes, avoiding one forced layout per item.
      if (record.top < viewportHeight) { finish(record); return; }
      element.dataset.scrollReveal = 'pending';
      const offset = record.fadeOnly ? 0 : mobile ? 16 : record.artwork ? 32 : 24;
      const [x, y = '0px', z] = record.translate;
      element.style.setProperty('--scroll-reveal-y', `${offset}px`);
      element.style.translate = `${x} calc(${y} + var(--scroll-reveal-y))${z ? ` ${z}` : ''}`;
      element.style.opacity = '0';
      observer.observe(element);
    });
    // Never leave a keyboard destination or a just-activated control invisible.
    const focus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      records.forEach(record => {
        if (record.state !== 'revealed' && record.element.contains(event.target as Node)) reveal(record, 0, true);
      });
    };
    const visibility = () => {
      if (document.hidden) records.forEach(record => { if (record.state === 'revealing') finish(record); });
      else flush();
    };
    root.addEventListener('focusin', focus);
    document.addEventListener('visibilitychange', visibility);
    resume.current = flush;
    return () => {
      resume.current = null;
      observer.disconnect();
      root.removeEventListener('focusin', focus);
      document.removeEventListener('visibilitychange', visibility);
      records.forEach(record => {
        record.tween?.kill();
        restore(record);
        delete record.element.dataset.scrollReveal;
      });
    };
  }, [rootRef, pageKey, disabled, reducedMotion]);

  useLayoutEffect(() => { if (!paused) resume.current?.(); }, [paused, pageKey]);
}
