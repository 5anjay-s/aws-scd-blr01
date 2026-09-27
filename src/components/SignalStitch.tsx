import { useCallback, useRef, type ImgHTMLAttributes } from 'react';
import { useInView } from 'motion/react';

// Reveal the original image without scaling the pixels or changing its layout.
export function SignalStitch({ className, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  // Observe the existing layout wrapper, since a fully clipped image has no intersection.
  const container = useRef<HTMLElement>(null);
  const setImageRef = useCallback((image: HTMLImageElement | null) => {
    container.current = image?.parentElement ?? null;
  }, []);
  const revealed = useInView(container, { once: true, amount: 0.5, margin: '0px 0px -24px 0px' });

  return <img {...props} ref={setImageRef}
    className={[className, 'signal-stitch-reveal'].filter(Boolean).join(' ')}
    data-revealed={revealed} />;
}
