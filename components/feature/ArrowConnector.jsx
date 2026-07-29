import React from "react";

/**
 * ArrowConnector — the sky-blue circle with a white arrow used to link
 * stages/rows on the IM slides. Direction "down" (default) or "right".
 */
export function ArrowConnector({ direction = "down", size = 22, className = "", style = {} }) {
  const rot = direction === "right" ? "-90deg" : "0deg";
  return (
    <span
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "999px",
        background: "var(--sky-400)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 auto",
        ...style,
      }}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 16 16" fill="none" style={{ transform: `rotate(${rot})` }}>
        <path d="M8 2 V12 M8 12 L3.5 7.5 M8 12 L12.5 7.5" stroke="var(--white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
