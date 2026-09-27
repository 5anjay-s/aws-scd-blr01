import { useRef, type HTMLAttributes } from 'react';
import { useInView } from 'motion/react';

export function ProgrammeSteps({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useInView(ref, { once: true, amount: 0.35 });

  return <div {...props} ref={ref}
    className={[className, 'programme-steps'].filter(Boolean).join(' ')}
    data-revealed={revealed} />;
}
