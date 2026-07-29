import React from "react";

export interface FooterTab {
  /** Tab marker — a section number ("1"…"7") or letter ("A"). */
  n: string | number;
  /** Full section name (used for the active banner / tooltip). */
  label?: string;
}

/** FooterNav — section page-tab navigator for the IM slide footer. */
export interface FooterNavProps {
  /** Ordered tabs to render. */
  tabs: FooterTab[];
  /** Which tab `n` is current. */
  active: string | number;
  /** Section name shown inside the active navy banner. */
  activeLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function FooterNav(props: FooterNavProps): JSX.Element;
