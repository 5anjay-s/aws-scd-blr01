import { useLayoutEffect, useRef } from 'react';
import { gsap } from './animation';
import { createTransitionShapes, shapeScale, shapePixelRects, type TransitionShape } from './transitionShapes';
import '../styles/page-transition.css';

type TransitionOrigin = { x: number; y: number };
type ShapeField = {
  width: number;
  height: number;
  origin?: TransitionOrigin;
  shapes: TransitionShape[];
};

export function PageTransition({ phase, origin, onCovered, onComplete }: {
  phase: 'cover' | 'reveal';
  origin?: TransitionOrigin;
  onCovered: () => void;
  onComplete: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fieldRef = useRef<ShapeField | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext('2d');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tokens = getComputedStyle(document.documentElement);
    const colors = ['cyan', 'orange', 'violet', 'lime'].map(name => tokens.getPropertyValue(`--${name}`).trim());
    const duration = phase === 'cover' ? 380 : 360;
    const clock = { progress: 0 };
    let width = 0;
    let height = 0;
    let ratioX = 1;
    let ratioY = 1;
    let shapes: TransitionShape[] = [];

    const draw = (progress: number) => {
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const shape of shapes) {
        const size = shape.radius * shapeScale(shape, progress, phase);
        if (size <= 0) continue;
        context.fillStyle = colors[shape.color];
        for (const rect of shapePixelRects[shape.kind]) {
          // Shared edges snap to the same physical pixel, keeping each block
          // crisp and seamless throughout the continuous GSAP scale animation.
          const left = Math.round((shape.x + rect.x * size) * ratioX);
          const top = Math.round((shape.y + rect.y * size) * ratioY);
          const right = Math.round((shape.x + (rect.x + rect.width) * size) * ratioX);
          const bottom = Math.round((shape.y + (rect.y + rect.height) * size) * ratioY);
          context.fillRect(left, top, right - left, bottom - top);
        }
      }
    };

    const prepare = () => {
      width = document.documentElement.clientWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const pixelWidth = Math.ceil(width * ratio);
      const pixelHeight = Math.ceil(height * ratio);
      // Retain the canvas and geometry through the covered page swap.
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      ratioX = canvas.width / width;
      ratioY = canvas.height / height;
      context?.setTransform(1, 0, 0, 1, 0, 0);
      let field = fieldRef.current;
      if (!field || field.width !== width || field.height !== height
        || field.origin?.x !== origin?.x || field.origin?.y !== origin?.y) {
        field = { width, height, origin, shapes: createTransitionShapes(width, height, origin) };
        fieldRef.current = field;
      }
      shapes = field.shapes;
    };

    const resize = () => {
      prepare();
      draw(clock.progress);
    };
    const finish = () => {
      if (phase === 'cover') onCovered();
      else onComplete();
    };
    prepare();
    // Reveal starts with the same opaque frame that finished the cover.
    draw(0);
    const playback = gsap.to(clock, {
      progress: 1, duration: preference.matches || !context ? 0 : duration / 1000, ease: 'none',
      onUpdate: () => draw(clock.progress), onComplete: finish,
    });
    const syncPreference = () => { if (preference.matches) playback.progress(1); };
    preference.addEventListener('change', syncPreference);
    window.addEventListener('resize', resize);
    return () => {
      playback.kill();
      preference.removeEventListener('change', syncPreference);
      window.removeEventListener('resize', resize);
    };
  }, [phase, origin, onCovered, onComplete]);

  return <div className="page-transition" data-phase={phase} aria-hidden="true">
    <canvas ref={canvasRef} className="page-transition__canvas" />
  </div>;
}
