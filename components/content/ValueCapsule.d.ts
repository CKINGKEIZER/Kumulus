import React from "react";

/** ValueCapsule — pale-blue rounded pill wrapping a data value. */
export interface ValueCapsuleProps {
  children: React.ReactNode;
  /** "sky" = pale blue (default); "navy" = inverted. */
  tone?: "sky" | "navy";
  className?: string;
  style?: React.CSSProperties;
}
export function ValueCapsule(props: ValueCapsuleProps): JSX.Element;
