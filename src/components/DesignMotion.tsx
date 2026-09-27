import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

// Exact canvas keyframes from Figma. Layout rotations stay on their static wrappers.
const keyframes: Record<string, HTMLMotionProps<'div'>> = {
  "860:4976": { initial: { x: -152, }, animate: { x: [-152, 152, 152, -152, -152], }, transition: { x: { duration: 16, times: [0, 0.1125, 0.1249, 0.125, 1], ease: "linear", repeat: Infinity }, } },
  "860:5021": { initial: { x: 654, y: 0, }, animate: { x: [654, -654], y: [0, -4, 0, 4, 0], }, transition: { x: { duration: 16, times: [0, 1], ease: "linear", repeat: Infinity }, y: { duration: 16, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }, } },
  "860:5034": { initial: { opacity: 0, }, animate: { opacity: [0, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.25, 0], }, transition: { opacity: { duration: 16, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear", repeat: Infinity }, } },
  "860:5049": { initial: { opacity: 0, }, animate: { opacity: [0, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.35, 0], }, transition: { opacity: { duration: 16, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear", repeat: Infinity }, } },
  "1398:7061": { initial: { rotate: -0.001, }, animate: { rotate: [-0.001, -0.001, -21.479, -21.479, -7.913, -7.913, -36.462, -36.462, -33.302, -33.302], }, transition: { rotate: { duration: 16, times: [0, 0.075, 0.1125, 0.1875, 0.225, 0.3, 0.3375, 0.4125, 0.45, 1], ease: ["linear", "easeInOut", "linear", "easeInOut", "linear", "easeInOut", "linear", "easeInOut", "linear"], repeat: Infinity }, } },
  "1398:7073": { initial: { width: 656.753, }, animate: { width: [656.753, 656.753, 688.182, 688.182, 366.046, 366.046, 641.416, 641.416, 284.015, 284.015], }, transition: { width: { duration: 16, times: [0, 0.075, 0.1125, 0.1875, 0.225, 0.3, 0.3375, 0.4125, 0.45, 1], ease: ["linear", "easeInOut", "linear", "easeInOut", "linear", "easeInOut", "linear", "easeInOut", "linear"], repeat: Infinity }, } },
  "866:8332": { initial: { x: -112, }, animate: { x: [-112, 128, 128, -112, -112], }, transition: { x: { duration: 12, times: [0, 0.15, 0.1666, 0.1667, 1], ease: "linear", repeat: Infinity }, } },
  "1169:536": { initial: { x: 325.5, y: 0, }, animate: { x: [325.5, -325.5], y: [0, -3, 0, 3, 0], }, transition: { x: { duration: 12, times: [0, 1], ease: "linear", repeat: Infinity }, y: { duration: 12, times: [0, 0.25, 0.5, 0.75, 1], ease: "easeInOut", repeat: Infinity }, } },
  "1169:537": { initial: { opacity: 0, }, animate: { opacity: [0, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.12, 0.5, 0.25, 0], }, transition: { opacity: { duration: 12, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear", repeat: Infinity }, } },
  "1169:540": { initial: { opacity: 0, }, animate: { opacity: [0, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.55, 0.12, 0.35, 0], }, transition: { opacity: { duration: 12, times: [0, 0.0313, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 0.9625, 1], ease: "linear", repeat: Infinity }, } }
};

type Props = HTMLMotionProps<'div'> & { 'data-node-id'?: string };
export function DesignMotion(props: Props) {
  const reducedMotion = useReducedMotion();
  const animation = keyframes[props['data-node-id'] ?? ''];
  return <motion.div {...animation} {...props}
    initial={reducedMotion ? false : animation?.initial}
    animate={reducedMotion ? undefined : animation?.animate} />;
}
