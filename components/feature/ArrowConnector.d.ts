import React from "react";

/** ArrowConnector — sky-blue circle with a white directional arrow. */
export interface ArrowConnectorProps {
  /** Arrow direction (default "down"). */
  direction?: "down" | "right";
  /** Circle diameter in px (default 22). */
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function ArrowConnector(props: ArrowConnectorProps): JSX.Element;
