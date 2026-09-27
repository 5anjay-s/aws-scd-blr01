import type { RefObject } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type HTMLMotionProps } from 'motion/react';

type ScrollSparkProps = HTMLMotionProps<'img'> & {
  sectionRef: RefObject<HTMLElement | null>;
};

export function ScrollSpark({ sectionRef, className, style, ...props }: ScrollSparkProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const targetRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // Smooth wheel steps without bounce or a long trailing spin.
  const rotation = useSpring(targetRotation, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
    restDelta: 0.01,
    restSpeed: 0.01,
    skipInitialAnimation: true,
  });

  useMotionValueEvent(targetRotation, 'change', (angle) => {
    // Stop immediately once the section leaves the viewport in either direction.
    if (angle === 0 || angle === 360) rotation.jump(angle);
  });

  return <motion.img {...props}
    className={[className, 'curiosity-spark-scroll'].filter(Boolean).join(' ')}
    style={{ ...style, rotate: reducedMotion ? 0 : rotation }} />;
}
