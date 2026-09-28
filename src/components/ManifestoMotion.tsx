import { createContext, useRef, type HTMLAttributes } from 'react';
import { useInView, usePageVisible, useReducedMotion } from './animation';

export const ManifestoMotionContext = createContext({ active: false, reducedMotion: false });

export function ManifestoMotion({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: 0.05 });
  const reducedMotion = useReducedMotion();
  const pageVisible = usePageVisible();

  const active = visible && pageVisible && !reducedMotion;
  return <ManifestoMotionContext.Provider value={{ active, reducedMotion: Boolean(reducedMotion) }}>
    <div {...props} ref={ref}
      className={[className, 'manifesto-motion'].filter(Boolean).join(' ')}
      data-motion-active={active} />
  </ManifestoMotionContext.Provider>;
}
