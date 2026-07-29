import React from "react";

export type BulletItem = string | { text: React.ReactNode; sub?: React.ReactNode };

/** BulletList — square-bullet copy list, the IM's primary body text device. */
export interface BulletListProps {
  /** Items: a string, or `{ text, sub }` for a lead-in + detail line. */
  items: BulletItem[];
  /** Body size (default "md"). */
  size?: "md" | "sm";
  /** Tighten vertical rhythm for packed layouts. */
  dense?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function BulletList(props: BulletListProps): JSX.Element;
