// Original Figma divider assets: desktop 1411:620 and mobile 1411:623.
// Reverse the existing orange-to-paper transition without changing its artwork.
export function ProgrammeDivider() {
  return (
    <div className="programme-divider" aria-hidden="true">
      <div className="pixel-border pixel-border-orange-paper" />
    </div>
  );
}
