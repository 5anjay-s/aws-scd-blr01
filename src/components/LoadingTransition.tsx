import { useId, useLayoutEffect, useRef } from 'react';
import { gsap, useReducedMotion } from './animation';
import '../styles/loading-transition.css';

export type LoadingTransitionPhase = 'cover' | 'reveal';

// Stepped cloud contours with the same square dither as the loading sky.
function cloudEdge(offset: number) {
  let path = 'M144 0';
  for (let row = 0; row < 30; row++) {
    const x = Math.round((68 + Math.sin(row * 0.24) * 28 + Math.cos(row * 0.53) * 14) / 12) * 12 + offset;
    path += `H${x}V${(row + 1) * 24}`;
  }
  return `${path}H144Z`;
}

const softEdge = cloudEdge(-36);
const solidEdge = cloudEdge(12);

export function LoadingTransition({ phase, onCovered, onComplete }: {
  phase: LoadingTransitionPhase;
  onCovered: () => void;
  onComplete: () => void;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(ref.current, { xPercent: phase === 'cover' ? -100 : 0 }, {
        xPercent: phase === 'cover' ? 0 : 100,
        duration: reducedMotion ? 0 : phase === 'cover' ? 0.36 : 0.54,
        ease: phase === 'cover' ? 'scd-cloud-cover' : 'scd-cloud-reveal',
        onComplete: phase === 'cover' ? onCovered : onComplete,
      });
    }, ref);
    return () => context.revert();
  }, [phase, onCovered, onComplete, reducedMotion]);

  return <div className="loading-transition" data-phase={phase} aria-hidden="true">
    <div ref={ref} className="loading-transition__cloud">
      {['left', 'right'].map((side) => <svg key={side}
        className={`loading-transition__edge loading-transition__edge--${side}`}
        viewBox="0 0 144 720" preserveAspectRatio="none" shapeRendering="crispEdges">
        <defs>
          <pattern id={`${id}-${side}`} width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0 0h6v6H0z M6 6h6v6H6z" fill="currentColor" />
          </pattern>
        </defs>
        <path d={softEdge} fill={`url(#${id}-${side})`} />
        <path d={solidEdge} fill="currentColor" />
      </svg>)}
    </div>
  </div>;
}
