import React from "react";

/**
 * PullQuote — a client / team testimonial.
 *  - "plain"        inline serif-italic quote with an oversized navy quote mark + attribution.
 *  - "card"         the same on a soft tinted card.
 *  - "testimonial"  centered: optional circular avatar, name + role on top,
 *                   then a mid-gray serif-italic quote in curly quotes
 *                   (the People / case-study treatment).
 */
export function PullQuote({
  quote,
  author,
  role = null,
  avatarSrc = null,
  variant = "plain",
  className = "",
  style = {},
}) {
  if (variant === "testimonial") {
    return (
      <figure
        className={className}
        style={{ margin: 0, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "8px", ...style }}
      >
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={typeof author === "string" ? author : ""}
            style={{ width: "62px", height: "62px", borderRadius: "999px", objectFit: "cover", background: "var(--gray-100)" }}
          />
        ) : null}
        {(author || role) ? (
          <figcaption style={{ fontFamily: "var(--font-sans)", lineHeight: 1.25 }}>
            {author ? <div style={{ fontStyle: "italic", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-semibold)", color: "var(--text-body)" }}>{author}</div> : null}
            {role ? <div style={{ fontSize: "9.5px", color: "var(--text-muted)" }}>{role}</div> : null}
          </figcaption>
        ) : null}
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "var(--fs-quote)",
            lineHeight: "var(--lh-quote)",
            color: "var(--text-muted)",
            maxWidth: "260px",
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
      </figure>
    );
  }

  const card =
    variant === "card"
      ? { background: "var(--gray-50)", border: "var(--border-hair)", borderRadius: "var(--radius-sm)", padding: "14px 18px" }
      : {};
  return (
    <figure className={className} style={{ margin: 0, position: "relative", ...card, ...style }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: variant === "card" ? "-2px" : "-14px",
          right: variant === "card" ? "10px" : "0",
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-bold)",
          fontSize: "46px",
          lineHeight: 1,
          color: "var(--brand-deep)",
          opacity: 0.4,
        }}
      >
        &rdquo;
      </span>
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: "var(--fw-regular)",
          fontSize: "var(--fs-quote)",
          lineHeight: "var(--lh-quote)",
          color: "var(--text-body)",
          paddingRight: "18px",
        }}
      >
        {quote}
      </blockquote>
      <figcaption
        style={{
          marginTop: "8px",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--fs-body-sm)",
          fontStyle: "italic",
          color: "var(--text-muted)",
        }}
      >
        {author}
        {role ? <span>{author ? " — " : ""}{role}</span> : null}
      </figcaption>
    </figure>
  );
}
