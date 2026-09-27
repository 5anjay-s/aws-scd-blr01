export function wrapVoiceLines(text: string, capacity: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (let word of text.trim().split(/\s+/)) {
    if (line && line.length + word.length + 1 > capacity) {
      lines.push(line);
      line = '';
    }
    while (word.length > capacity) {
      lines.push(word.slice(0, capacity));
      word = word.slice(capacity);
    }
    line = line ? `${line} ${word}` : word;
  }
  if (line) lines.push(line);
  return lines;
}

export type VoiceTypingState = { head: number; typed: number; phase: 'typing' | 'hold' | 'advance' };

export function advanceVoiceTyping(state: VoiceTypingState, lineLength: number): VoiceTypingState {
  if (state.phase === 'advance') return { head: state.head + 1, typed: 0, phase: 'typing' };
  if (state.phase === 'hold') return { ...state, phase: 'advance' };
  const typed = Math.min(lineLength, state.typed + 1);
  return { ...state, typed, phase: typed === lineLength ? 'hold' : 'typing' };
}
