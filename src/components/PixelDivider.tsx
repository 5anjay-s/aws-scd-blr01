import type { CSSProperties } from "react";

type PixelDividerProps = {
  src: string;
  nodeId: string;
  name: string;
  artNodeId?: string;
  artName?: string;
  placement?: "top" | "bottom";
  from?: "white" | "orange" | "cyan";
  to?: "navy" | "white" | "cyan";
};

export default function PixelDivider({
  src,
  nodeId,
  name,
  artNodeId,
  artName,
  placement,
  from = "white",
  to = "navy",
}: PixelDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pixel-divider${placement ? ` absolute pixel-divider--${placement}` : ""}`}
      data-node-id={nodeId}
      data-name={name}
      style={{
        "--pixel-divider-image": `url("${src}")`,
        "--pixel-divider-from": `var(--${from})`,
        "--pixel-divider-to": `var(--${to})`,
      } as CSSProperties}
    >
      <span
        className="pixel-divider__art"
        data-node-id={artNodeId}
        data-name={artName}
      />
    </div>
  );
}
