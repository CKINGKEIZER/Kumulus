import * as React from "react";

export interface TargetCompanyLogoPlaceholderProps {
  /** Size preset (Plan §8.2). */
  variant?: "cover-large" | "header-medium" | "footer-small" | "diagram-node";
  /** Override width in px. */
  width?: number;
  /** Override height in px. */
  height?: number;
  /** Override label text; pass false to hide the label. */
  label?: string | false;
  className?: string;
  style?: React.CSSProperties;
}

/** Mandatory yellow placeholder for a target-company logo (Plan §8). Never
 * collapses; replaced 1:1 by a real logo. Distinct from the Kumulus mark.
 */
export function TargetCompanyLogoPlaceholder(props: TargetCompanyLogoPlaceholderProps): JSX.Element;

export interface TargetLogoProps {
  /** Supplied target logo URL; when absent the yellow placeholder renders. */
  src?: string | null;
  alt?: string;
  variant?: "cover-large" | "header-medium" | "footer-small" | "diagram-node";
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

/** Renders the target logo (contain-fit) or the mandatory placeholder. */
export function TargetLogo(props: TargetLogoProps): JSX.Element;

export interface ThirdPartyLogoPlaceholderProps {
  /** Optional label (default "LOGO"). */
  label?: string | false;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

/** Neutral grey placeholder for supplier / customer (third-party) logos. */
export function ThirdPartyLogoPlaceholder(props: ThirdPartyLogoPlaceholderProps): JSX.Element;
