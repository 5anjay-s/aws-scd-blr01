import { useLayoutEffect, useRef, type ImgHTMLAttributes } from 'react';
import { gsap, useInView, usePageVisible, useReducedMotion } from './animation';

export function SpinningSpark(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const playback = useRef<gsap.core.Tween>(null);
  const visible = useInView(ref);
  const pageVisible = usePageVisible();
  const reducedMotion = useReducedMotion();
  const activity = useRef(false);
  activity.current = visible && pageVisible;

  useLayoutEffect(() => {
    const image = ref.current!;
    const chapter = image.closest('.learn-chapter');
    const context = gsap.context(() => {
      if (!reducedMotion) playback.current = gsap.to(image, {
        rotation: 360, duration: parseFloat(getComputedStyle(image).getPropertyValue('--spark-spin-duration')) || 8,
        ease: 'none', repeat: -1, paused: true,
      });
    }, ref);
    const sync = () => playback.current?.paused(!activity.current || Boolean(chapter && !chapter.matches(':hover')));
    sync();
    chapter?.addEventListener('pointerenter', sync);
    chapter?.addEventListener('pointerleave', sync);
    return () => {
      chapter?.removeEventListener('pointerenter', sync);
      chapter?.removeEventListener('pointerleave', sync);
      context.revert();
      playback.current = null;
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    const chapter = ref.current?.closest('.learn-chapter');
    playback.current?.paused(!activity.current || Boolean(chapter && !chapter.matches(':hover')));
  }, [visible, pageVisible, reducedMotion]);

  return <img {...props} ref={ref} />;
}
