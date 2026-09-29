// Arcade Classic gives its full stop a wide left bearing. Keep it with its word.
export function ArcadeText({ children }: { children: string }) {
  return children.split(/(\S+\.)/g).map((part, index) => part.endsWith('.')
    ? <span className="arcade-word" key={index}>{part.slice(0, -1)}<span className="arcade-stop">.</span></span>
    : part);
}
