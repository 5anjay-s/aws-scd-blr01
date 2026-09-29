import { useLayoutEffect, useRef, type HTMLAttributes } from 'react';
import { gsap, useReducedMotion } from './animation';
import { aimTelescope, lightBeamPath, telescopeGeometry, telescopeLens } from './telescopeLight';

export function SponsorSpotlight({ children, className, lightNodeId, ...props }: HTMLAttributes<HTMLDivElement> & { lightNodeId?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const beamRef = useRef<SVGPathElement>(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    const root = ref.current!;
    const beam = beamRef.current!;
    const head = root.querySelector<HTMLElement>('[data-spotlight-head]')!;
    const art = root.querySelector<HTMLElement>('[data-spotlight-art]')!;
    const regions = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-sponsor]'));
    const fills = regions.map(region => region.querySelector<HTMLElement>('.sponsor-tier-fill')!);
    let selected: HTMLButtonElement | null = null;
    let sequence: gsap.core.Timeline | undefined;
    const progress = { travel: 0, spread: 0 };
    const context = gsap.context(() => { gsap.set(head, { rotation: 0 }); }, root);

    const illuminate = (region: HTMLButtonElement | null, instant = false) => {
      if (region === selected && !instant) return;
      sequence?.kill();
      gsap.killTweensOf([head, beam, ...fills, progress]);
      selected = region;
      root.dataset.activeSponsor = region?.dataset.sponsor ?? '';
      const still = reducedMotion || instant;
      // Finish fading the old beam before moving its source or changing its path.
      const fadeOut = still || Number(gsap.getProperty(beam, 'opacity')) < 0.001 ? 0 : 0.14;
      sequence = gsap.timeline({ defaults: { overwrite: 'auto' } });
      regions.forEach((item, index) => {
        item.setAttribute('aria-pressed', String(item === region));
        if (still) gsap.set(fills[index], { opacity: 0 });
        else sequence!.to(fills[index], { opacity: 0, duration: 0.18 }, 0);
      });
      if (!region) {
        sequence.to(beam, { opacity: 0, duration: fadeOut }, 0)
          .to(head, { rotation: 0, duration: still ? 0 : 0.4, ease: 'power2.out' }, fadeOut);
        return;
      }

      const bounds = root.getBoundingClientRect();
      const headBounds = head.getBoundingClientRect();
      const regionBounds = region.getBoundingClientRect();
      const marker = region.querySelector<HTMLElement>('.sponsor-tier-marker')!.getBoundingClientRect();
      const artWidth = art.offsetWidth;
      const geometry = telescopeGeometry({
        x: headBounds.left + headBounds.width / 2 - bounds.left,
        y: headBounds.top + headBounds.height / 2 - bounds.top,
      }, artWidth);
      const target = { x: marker.left + marker.width / 2 - bounds.left, y: marker.top + marker.height / 2 - bounds.top };
      const edge: [{ x: number; y: number }, { x: number; y: number }] = [
        { x: regionBounds.left - bounds.left, y: regionBounds.bottom - bounds.top },
        { x: regionBounds.right - bounds.left, y: regionBounds.bottom - bounds.top },
      ];
      const rotation = aimTelescope(geometry, target);
      const fill = region.querySelector<HTMLElement>('.sponsor-tier-fill')!;
      const color = getComputedStyle(region).getPropertyValue('--tier-color').trim();
      const seed = `inset(${marker.top - regionBounds.top}px ${Math.max(0, regionBounds.right - marker.right)}px ${Math.max(0, regionBounds.bottom - marker.bottom)}px ${marker.left - regionBounds.left}px)`;
      const draw = () => {
        const lens = telescopeLens(geometry, Number(gsap.getProperty(head, 'rotation')));
        beam.setAttribute('d', lightBeamPath(lens, target, edge, progress.travel, progress.spread, artWidth / 448 * 10));
      };
      if (still) {
        beam.style.fill = color;
        gsap.set(head, { rotation });
        gsap.set(fill, { opacity: 1, clipPath: 'inset(0px 0px 0px 0px)' });
        gsap.set(beam, { opacity: 0.24 });
        progress.travel = progress.spread = 1;
        draw();
        return;
      }
      const lightStart = fadeOut + 0.32;
      const arrival = lightStart + 0.24;
      sequence.to(beam, { opacity: 0, duration: fadeOut }, 0)
        .to(head, { rotation, duration: 0.32, ease: 'power2.inOut' }, fadeOut)
        .call(() => {
          beam.style.fill = color;
          progress.travel = progress.spread = 0;
          draw();
          gsap.set(fill, { opacity: 1, clipPath: seed });
        }, [], lightStart)
        .to(beam, { opacity: 0.24, duration: 0.16 }, lightStart)
        .to(progress, { travel: 1, duration: 0.24, ease: 'power1.inOut', onUpdate: draw }, lightStart)
        .to(fill, { clipPath: 'inset(0px 0px 0px 0px)', duration: 0.4, ease: 'power2.out' }, arrival)
        .to(progress, { spread: 1, duration: 0.4, ease: 'power2.out', onUpdate: draw }, arrival);
    };
    // Capture event-created tweens in the same cleanup context as the artwork.
    context.add('illuminate', illuminate);
    const activate = (region: HTMLButtonElement | null, instant = false) => context.illuminate(region, instant);
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') activate(event.currentTarget as HTMLButtonElement);
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const focused = regions.find(region => region.matches(':focus-visible'));
      activate(focused ?? null);
    };
    const focus = (event: FocusEvent) => {
      const region = event.currentTarget as HTMLButtonElement;
      if (region.matches(':focus-visible')) activate(region);
    };
    const blur = () => activate(regions.find(region => region.matches(':hover')) ?? null);
    const click = (event: MouseEvent) => {
      const region = event.currentTarget as HTMLButtonElement;
      // Mouse hover already lights the region; tapping or Enter also works.
      if (selected !== region) activate(region);
      else if (event.detail === 0 || (event instanceof PointerEvent && event.pointerType === 'touch')) activate(null);
    };
    const outside = (event: PointerEvent) => {
      if (selected && event.target instanceof Node && !regions.some(region => region.contains(event.target as Node))) activate(null);
    };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') activate(null); };
    const visibility = () => { if (document.hidden) activate(null, true); };
    const events = { pointerenter: enter, pointerleave: leave, focus, blur, click };
    regions.forEach(region => Object.entries(events).forEach(([name, handler]) => region.addEventListener(name, handler as EventListener)));
    document.addEventListener('pointerdown', outside);
    document.addEventListener('visibilitychange', visibility);
    root.addEventListener('keydown', escape);
    const resize = new ResizeObserver(() => { if (selected) activate(selected, true); });
    resize.observe(root);
    return () => {
      resize.disconnect();
      regions.forEach(region => Object.entries(events).forEach(([name, handler]) => region.removeEventListener(name, handler as EventListener)));
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('visibilitychange', visibility);
      root.removeEventListener('keydown', escape);
      sequence?.kill();
      context.revert();
      root.dataset.activeSponsor = '';
      regions.forEach(region => region.setAttribute('aria-pressed', 'false'));
    };
  }, [reducedMotion]);

  return <div {...props} ref={ref} className={`${className ?? ''} sponsor-spotlight`}>
    <svg className="sponsor-light" aria-hidden="true"><path ref={beamRef} data-node-id={lightNodeId} /></svg>
    {children}
  </div>;
}
