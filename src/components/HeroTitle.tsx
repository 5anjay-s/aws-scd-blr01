import { createContext, useContext, useEffect, useRef, useState, type HTMLAttributes } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

const RevealContext = createContext({ ready: false, reducedMotion: false });
const ASSEMBLY_DURATION = 1.65;
const clamp = (value: number) => Math.max(0, Math.min(1, value));
const easeOut = (value: number) => 1 - (1 - value) ** 3;
const noise = (index: number) => {
  const value = Math.sin(index * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};

type Pixel = { x: number; y: number; dx: number; dy: number; delay: number; color: string };

export function HeroTitle(props: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reducedMotion = Boolean(useReducedMotion());
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    let active = true;
    void document.fonts.ready.then(() => { if (active) setFontsReady(true); });
    return () => { active = false; };
  }, []);

  return <RevealContext.Provider value={{ ready: inView && fontsReady, reducedMotion }}>
    <div {...props} ref={ref} />
  </RevealContext.Provider>;
}

export function HeroTitleWord({ text, startIndex = 0 }: { text: string; startIndex?: number }) {
  const { ready, reducedMotion } = useContext(RevealContext);
  const wordRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasAssembled = useRef(false);
  const [complete, setComplete] = useState(false);
  const [fallback, setFallback] = useState(false);
  const [sizeRevision, setSizeRevision] = useState(0);

  useEffect(() => {
    const word = wordRef.current;
    const canvas = canvasRef.current;
    if (!ready || !word || !canvas) return;
    const context = canvas.getContext('2d');
    const mask = document.createElement('canvas');
    const maskContext = mask.getContext('2d', { willReadFrequently: true });
    if (!context || !maskContext) { setFallback(true); return; }
    setFallback(false);

    const style = getComputedStyle(word);
    const width = word.offsetWidth;
    const height = word.offsetHeight;
    const fontSize = parseFloat(style.fontSize);
    const padding = Math.ceil(fontSize * 0.35);
    const cell = Math.max(3, Math.round(fontSize / 24));
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const palette = ['--orange', '--cyan', '--violet', '--lime'].map(name => style.getPropertyValue(name).trim());

    mask.width = width;
    mask.height = height;
    maskContext.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    maskContext.letterSpacing = style.letterSpacing;
    maskContext.fillStyle = '#fff';
    const metrics = maskContext.measureText(text);
    const ascent = metrics.fontBoundingBoxAscent;
    const descent = metrics.fontBoundingBoxDescent;
    const baseline = (height - ascent - descent) / 2 + ascent;
    maskContext.fillText(text, 0, baseline);
    const { data } = maskContext.getImageData(0, 0, width, height);
    const pixels: Pixel[] = [];

    // Sample the actual font so the moving squares assemble into these exact letters.
    for (let y = 0; y < height; y += cell) {
      for (let x = 0; x < width; x += cell) {
        const sampleX = Math.min(width - 1, x + Math.floor(cell / 2));
        const sampleY = Math.min(height - 1, y + Math.floor(cell / 2));
        if (data[(sampleY * width + sampleX) * 4 + 3] < 96) continue;
        const seed = pixels.length + startIndex * 97;
        pixels.push({
          x: x + padding,
          y: y + padding,
          dx: (noise(seed) - 0.7) * fontSize * 0.65,
          dy: (noise(seed + 53) - 0.5) * fontSize * 0.6,
          delay: (x / width) * 0.28 + noise(seed + 19) * 0.14,
          color: palette[Math.floor(noise(seed + 71) * palette.length)],
        });
      }
    }

    const canvasWidth = width + padding * 2;
    const canvasHeight = height + padding * 2;
    canvas.width = Math.ceil(canvasWidth * ratio);
    canvas.height = Math.ceil(canvasHeight * ratio);
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.left = `${-padding}px`;
    canvas.style.top = `${-padding}px`;
    context.scale(ratio, ratio);
    let finished = false;
    const draw = (elapsed: number) => {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      const solidColor = easeOut(clamp((elapsed - 1.1) / 0.55));
      word.style.setProperty('--hero-title-opacity', String(solidColor));
      for (const pixel of pixels) {
        const progress = clamp((elapsed - pixel.delay) / 0.72);
        if (progress === 0) continue;
        const assembled = easeOut(progress);
        const size = cell * (0.45 + assembled * 0.48);
        context.globalAlpha = Math.min(1, progress * 5) * (1 - solidColor);
        context.fillStyle = pixel.color;
        const x = pixel.x + pixel.dx * (1 - assembled) + (cell - size) / 2;
        const y = pixel.y + pixel.dy * (1 - assembled) + (cell - size) / 2;
        context.fillRect(x, y, size, size);
      }
      context.globalAlpha = 1;
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      hasAssembled.current = true;
      draw(ASSEMBLY_DURATION);
      setComplete(true);
    };

    // One Motion timeline per word; frames draw pixels without React state updates.
    const playback = reducedMotion || hasAssembled.current ? undefined : animate(0, ASSEMBLY_DURATION, {
      duration: ASSEMBLY_DURATION,
      delay: startIndex * 0.028,
      ease: 'linear',
      onUpdate: (elapsed) => {
        if (!finished) draw(elapsed);
      },
      onComplete: finish,
    });
    if (!playback) finish();

    const resize = new ResizeObserver(() => {
      if (word.offsetWidth !== width || word.offsetHeight !== height) {
        playback?.stop();
        hasAssembled.current = true;
        setSizeRevision(revision => revision + 1);
      }
    });
    resize.observe(word);
    return () => {
      playback?.stop();
      resize.disconnect();
      canvas.width = 0;
      canvas.height = 0;
    };
  }, [ready, reducedMotion, sizeRevision, startIndex, text]);

  return <span ref={wordRef} className="hero-title-word" data-complete={complete} data-fallback={fallback}>
    <span className="hero-title-text">{text}</span>
    <canvas ref={canvasRef} className="hero-title-pixels" aria-hidden="true" />
  </span>;
}
