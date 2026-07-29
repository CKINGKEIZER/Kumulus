import React from "react";

/** PullQuote — client testimonial in Merriweather italic with attribution. */
export interface PullQuoteProps {
  /** The quotation text. */
  quote: React.ReactNode;
  /** Attribution name. */
  author: React.ReactNode;
  /** Optional role / company. */
  role?: React.ReactNode;
  /** Circular avatar image URL (testimonial variant). */
  avatarSrc?: string;
  /** "plain" inline, "card" tinted card, or "testimonial" centered with avatar. */
  variant?: "plain" | "card" | "testimonial";
  className?: string;
  style?: React.CSSProperties;
}
export function PullQuote(props: PullQuoteProps): JSX.Element;
