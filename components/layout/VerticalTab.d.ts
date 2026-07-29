import React from "react";

/** VerticalTab — navy spine label running up the left edge of a block. */
export interface VerticalTabProps {
  /** Rotated label text (uppercase small-caps). */
  label: React.ReactNode;
  /** Tab thickness (default var(--tab-width) = 22px). */
  width?: string | number;
  /** Tab height (default 100% of parent). */
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export function VerticalTab(props: VerticalTabProps): JSX.Element;
