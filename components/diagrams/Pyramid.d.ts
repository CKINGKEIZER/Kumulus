import * as React from "react";
export interface PyramidTier { label: React.ReactNode; value?: React.ReactNode; }
export interface PyramidProps {
  tiers: PyramidTier[];
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}
/** Layered segmentation pyramid tinted across the deal primary (top deep → base light). */
export function Pyramid(props: PyramidProps): JSX.Element;
