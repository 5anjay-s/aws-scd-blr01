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

export function voiceTypingTimings(line: string, column: number) {
  const delay = (16 + column % 4 * 3) / 1000;
  let elapsed = 0;
  const characters = Array.from(line, (_, index) => {
    elapsed += /[.!?]/.test(line[index - 1] ?? '') ? 0.07 : delay;
    return elapsed;
  });
  return { characters, advanceAt: (elapsed || delay) + 0.07 };
}
