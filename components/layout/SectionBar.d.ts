import React from "react";

/** SectionBar — navy banner heading a content block on an IM slide. */
export interface SectionBarProps {
  /** Banner text (rendered uppercase small-caps). */
  label: React.ReactNode;
  /** Optional leading icon (ReactNode — e.g. a Lucide SVG). */
  icon?: React.ReactNode;
  /** Right-side chip/logo slot (e.g. ESG framework tags, partner logos). */
  trailing?: React.ReactNode;
  /** "bar" = cobalt bar with white end-knobs; "chevron" = arrow end. */
  variant?: "bar" | "chevron";
  /** Bar height in px (default 30). */
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SectionBar(props: SectionBarProps): JSX.Element;
