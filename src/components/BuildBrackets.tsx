type BuildBracketsProps = { src: string; className?: string };

// Clip copies of the original export so only the two brackets move.
export function BuildBrackets({ src, className }: BuildBracketsProps) {
  return <span className={[className, 'build-brackets'].filter(Boolean).join(' ')} aria-hidden="true">
    <img src={src} alt="" className="build-bracket-part build-bracket-left" />
    <img src={src} alt="" className="build-bracket-part build-bracket-center" />
    <img src={src} alt="" className="build-bracket-part build-bracket-right" />
  </span>;
}
