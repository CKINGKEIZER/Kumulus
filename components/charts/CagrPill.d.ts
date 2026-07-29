import * as React from "react";

export interface CagrPillProps {
  /** Growth figure, e.g. "5.4%". */
  value: React.ReactNode;
  /** Optional trailing label. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Grey CAGR/delta callout pill with a dashed up-arrow. */
export function CagrPill(props: CagrPillProps): JSX.Element;

export interface MarginCapsuleProps {
  /** Ratio readout, e.g. "45.5%". */
  value: React.ReactNode;
  style?: React.CSSProperties;
}
/** Outline capsule for a margin/ratio readout beneath a chart. */
export function MarginCapsule(props: MarginCapsuleProps): JSX.Element;

export interface RefChipProps {
  /** Page reference number, e.g. 47. */
  page: React.ReactNode;
  style?: React.CSSProperties;
}
/** Black cross-reference chip ("P. 47") with a magnifier. */
export function RefChip(props: RefChipProps): JSX.Element;
