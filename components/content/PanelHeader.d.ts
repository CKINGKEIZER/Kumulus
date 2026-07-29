import * as React from "react";
export interface PanelHeaderProps {
  children: React.ReactNode;
  /** Optional trailing tag (e.g. period "(FY24A)") in deal colour. */
  trailing?: React.ReactNode;
  /** "grey" (default light band) or "plain". */
  tone?: "grey" | "plain";
  className?: string;
  style?: React.CSSProperties;
}
/** Grey small-caps panel header — the house default (colour reserved for data, not headers). */
export function PanelHeader(props: PanelHeaderProps): JSX.Element;
