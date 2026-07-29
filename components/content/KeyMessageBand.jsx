import React from "react";

/**
 * KeyMessageBand — the one-line takeaway strip under a slide title. Serif,
 * subtle grey background, used to state the argument the page proves. Distinct
 * from the title (which is the topic) — this is the sentence.
 */
export function KeyMessageBand({ children, className = "", style = {} }) {
  return (
    <div className={className} style={{ background: "var(--surface-band)", borderRadius: 2, padding: "8px 14px", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)", ...style }}>
      {children}
    </div>
  );
}
