import { Children, cloneElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type HTMLAttributes, type ReactElement } from 'react';

import { gsap } from './animation';
import { ManifestoMotionContext } from './ManifestoMotion';
import { advanceVoiceTyping, wrapVoiceLines, type VoiceTypingState } from './voiceTyping';

function subscribeToWidth(onChange: () => void) {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
}

type VoiceParagraph = ReactElement<HTMLAttributes<HTMLParagraphElement> & { 'data-node-id'?: string }>;

function VoiceColumn({ column, index }: { column: VoiceParagraph; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const cursorTween = useRef<gsap.core.Tween>(null);
  const { active, reducedMotion } = useContext(ManifestoMotionContext);
  const [metrics, setMetrics] = useState({ capacity: 24, rows: 34, lineHeight: 34 });
  const [typing, setTyping] = useState<VoiceTypingState>({ head: index * 3, typed: 0, phase: 'typing' });
  const source = String(column.props.children ?? '');
  const lines = useMemo(() => wrapVoiceLines(source, metrics.capacity), [source, metrics.capacity]);
  const currentLine = lines[(typing.head + metrics.rows - 1) % lines.length] ?? '';

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      cursorTween.current = gsap.to(cursorRef.current, {
        opacity: 0, duration: 0.35, repeat: -1, yoyo: true, ease: 'steps(1)', paused: true,
      });
    }, ref);
    return () => { context.revert(); cursorTween.current = null; };
  }, [reducedMotion]);
  useLayoutEffect(() => { cursorTween.current?.paused(!active); }, [active, reducedMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const context = document.createElement('canvas').getContext('2d');
    let mounted = true;
    const measure = () => {
      if (!mounted || !context) return;
      const style = getComputedStyle(element);
      context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const characterWidth = context.measureText('M').width + (parseFloat(style.letterSpacing) || 0);
      const lineHeight = parseFloat(style.lineHeight);
      const next = {
        capacity: Math.max(8, Math.floor(element.clientWidth / characterWidth) - 1),
        rows: Math.max(2, Math.floor(element.clientHeight / lineHeight)),
        lineHeight,
      };
      setMetrics(previous => previous.capacity === next.capacity && previous.rows === next.rows && previous.lineHeight === next.lineHeight ? previous : next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    void document.fonts.ready.then(measure);
    return () => { mounted = false; observer.disconnect(); };
  }, []);

  useEffect(() => {
    setTyping({ head: index * 3, typed: 0, phase: 'typing' });
  }, [index, metrics.capacity, metrics.rows]);

  useLayoutEffect(() => {
    if (!active || reducedMotion || !lines.length) return;
    const punctuation = /[.!?]/.test(currentLine[typing.typed - 1] ?? '');
    const delay = typing.phase === 'advance' ? 90 : typing.phase === 'hold' || punctuation ? 70 : 16 + index % 4 * 3;
    const advance = () => setTyping(previous => advanceVoiceTyping(previous, currentLine.length));
    const context = gsap.context(() => {
      if (typing.phase === 'advance') gsap.to('.community-voice-track', {
        y: -metrics.lineHeight, duration: 0.09, ease: 'power1.out', onComplete: advance,
      });
      else gsap.delayedCall(delay / 1000, advance);
    }, ref);
    return () => context.revert();
  }, [active, reducedMotion, lines.length, currentLine, typing, index, metrics.lineHeight]);

  return <div ref={ref} className={[column.props.className, 'community-voice-column'].filter(Boolean).join(' ')}
    style={{ '--voice-line-height': `${metrics.lineHeight}px` } as CSSProperties}>
    {reducedMotion ? column : <div className="community-voice-track" data-advancing={typing.phase === 'advance'}>
      {Array.from({ length: metrics.rows - 1 }, (_, row) => <div className="community-voice-line" key={typing.head + row}>
        {lines[(typing.head + row) % lines.length]}
      </div>)}
      <div className="community-voice-line community-voice-typing">
        {currentLine.slice(0, typing.typed)}<span ref={cursorRef} className="community-voice-cursor" />
      </div>
      <div className="community-voice-line" aria-hidden="true" />
    </div>}
  </div>;
}

// Retain the original columns and extend the field across wide desktop screens.
export function CommunityVoices({ children, style, className, extendSides = true, ...props }: HTMLAttributes<HTMLDivElement> & { extendSides?: boolean }) {
  const viewportWidth = useSyncExternalStore(subscribeToWidth, () => window.innerWidth, () => 1440);
  const sideGroups = extendSides ? Math.ceil(Math.max(0, viewportWidth - 1440) / (2 * 1576)) : 0;
  const columns = Children.toArray(children).filter(isValidElement<VoiceParagraph['props']>);

  return <div {...props} className={[className, 'community-voices'].filter(Boolean).join(' ')} style={{ ...style, '--voice-side-groups': sideGroups } as CSSProperties}>
    {Array.from({ length: sideGroups * 2 + 1 }, (_, group) => columns.map((column, index) =>
      <VoiceColumn key={`${group - sideGroups}-${index}`} index={index}
        column={group === sideGroups ? column : cloneElement(column, { 'data-node-id': undefined })} />))}
  </div>;
}
