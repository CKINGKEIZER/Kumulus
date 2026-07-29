import React from "react";

/**
 * KumulusMark — the Kumulus Partners footer wordmark, rendered in CSS
 * (Merriweather serif "kumulus" + raspberry accent dot + letter-spaced
 * "PARTNERS"). Self-contained so the footer chrome needs no image asset.
 */
export function KumulusMark({ height = 24, color = "var(--navy-800)", className = "", style = {} }) {
  const scale = height / 24;
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        lineHeight: 1,
        color,
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: `${20 * scale}px`,
          letterSpacing: "0.005em",
          position: "relative",
          display: "inline-block",
        }}
      >
        kumulus
        <span
          style={{
            position: "absolute",
            width: `${3.4 * scale}px`,
            height: `${3.4 * scale}px`,
            borderRadius: "999px",
            background: "var(--accent-coral)",
            // sits over the second 'u', just above the baseline gap
            left: "47%",
            bottom: `${1.5 * scale}px`,
          }}
        />
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: `${7 * scale}px`,
          letterSpacing: "0.42em",
          textTransform: "uppercase",
          marginTop: `${3 * scale}px`,
          marginLeft: `${1 * scale}px`,
          opacity: 0.92,
        }}
      >
        Partners
      </span>
    </span>
  );
}
