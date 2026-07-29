import React from "react";
import { KumulusMark } from "../brand/KumulusMark.jsx";
import { TargetLogo } from "../brand/TargetCompanyLogoPlaceholder.jsx";
import { FooterNav } from "./FooterNav.jsx";

/**
 * SlideFrame — the fixed 1280x720 chrome every IM slide sits in.
 * Renders the title zone (serif title + optional target logo + hairline),
 * an optional gray key-message band, the body (children), and the footer
 * chrome. Footer bottom-LEFT is the permanent ADVISOR (Kumulus) mark; footer
 * bottom-RIGHT is the swappable TARGET-company logo, which falls back to the
 * mandatory yellow placeholder when none is supplied (Plan §8).
 * `variant="divider"` renders a full-bleed section-divider instead.
 */
export function SlideFrame({
  variant = "content",
  title,
  subtitle = null,
  band = null,
  // target-company logo in the title row (top-right). Optional.
  titleLogoSrc = null,
  titleLogoAlt = "",
  showTitleLogo = false,
  children,
  // footer
  projectName = "Project [x] | [Month] [Year]",
  confidential = "Strictly private & confidential",
  note = null,
  sectionTabs = null,
  activeTab = null,
  activeLabel = "",
  pageNumber = null,
  // target-company logo in the footer (bottom-right). Falls back to the
  // mandatory yellow placeholder when null.
  targetLogoSrc = null,
  targetLogoAlt = "",
  showFooterTargetLogo = true,
  // divider / cover
  backgroundSrc = null,
  sectionNumber = null,
  // cover-only
  coverImageSrc = null,
  coverTitle = null,        // e.g. "Project Bones – Information Memorandum"
  coverDate = null,         // e.g. "October 2025"
  // divider ToC panel (optional): [{num, label}], plus active
  sections = null,
  activeSection = null,
  className = "",
  style = {},
}) {
  const frame = {
    position: "relative",
    width: "var(--slide-w)",
    height: "var(--slide-h)",
    background: "var(--surface-page)",
    color: "var(--text-body)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-body)",
    overflow: "hidden",
    boxSizing: "border-box",
    ...style,
  };

  const Footer = (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "var(--slide-footer-h)",
        padding: "0 var(--slide-margin-x)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        borderTop: "var(--border-hair)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: "0 0 auto" }}>
        <KumulusMark height={20} />
        <div style={{ lineHeight: 1.25 }}>
          <div style={{ fontWeight: "var(--fw-bold)", fontSize: "8.5px", color: "var(--text-heading)" }}>
            {projectName}
          </div>
          <div style={{ fontSize: "8.5px", color: "var(--text-muted)" }}>{confidential}</div>
        </div>
      </div>

      <div style={{ flex: "1 1 auto", textAlign: "center", fontSize: "7.5px", color: "var(--text-footnote)", paddingRight: "var(--space-6)" }}>
        {note}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: "0 0 auto" }}>
        {sectionTabs ? (
          <FooterNav tabs={sectionTabs} active={activeTab} activeLabel={activeLabel} />
        ) : null}
        {showFooterTargetLogo ? (
          <TargetLogo src={targetLogoSrc} alt={targetLogoAlt} variant="footer-small" />
        ) : null}
        {pageNumber != null ? (
          <span style={{ fontSize: "10px", color: "var(--text-muted)", minWidth: "12px", textAlign: "right" }}>
            {pageNumber}
          </span>
        ) : null}
      </div>
    </div>
  );

  // ---- COVER: full-bleed deal-themed image + bottom band + dual logos ----
  if (variant === "cover") {
    return (
      <div className={className} style={frame}>
        {coverImageSrc ? (
          <img src={coverImageSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, var(--deal-primary-deep), var(--deal-primary) 55%, var(--deal-accent))" }} />
        )}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "152px", background: "rgba(244,243,240,0.92)", display: "flex", alignItems: "center", padding: "0 var(--slide-margin-x)", boxSizing: "border-box" }}>
          <div style={{ flex: "0 0 auto", width: "200px", display: "flex", alignItems: "center" }}>
            <TargetLogo src={targetLogoSrc} alt={targetLogoAlt} variant="cover-large" height={54} />
          </div>
          <div style={{ flex: "1 1 auto", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontWeight: "var(--fw-bold)", fontSize: "26px", color: "var(--text-heading)", lineHeight: 1.15 }}>
              {coverTitle || title}
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "13px", color: "var(--text-body)", marginTop: "8px", lineHeight: 1.4 }}>
              {coverDate ? <div>{coverDate}</div> : null}
              <div>{confidential}</div>
            </div>
          </div>
          <div style={{ flex: "0 0 auto", width: "200px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <KumulusMark height={40} />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "divider") {
    return (
      <div className={className} style={frame}>
        {backgroundSrc ? (
          <img
            src={backgroundSrc}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(12,26,58,0.86) 0%, rgba(12,26,58,0.72) 34%, rgba(12,26,58,0.12) 70%, rgba(12,26,58,0) 100%)",
          }}
        />
        {sections ? (
          <div style={{ position: "absolute", left: "40px", top: "70px", background: "rgba(255,255,255,0.16)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", borderRadius: "14px", padding: "18px 26px 18px 18px", display: "flex", flexDirection: "column", gap: "14px" }}>
            {sections.map((s, i) => {
              const on = String(s.num) === String(activeSection);
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{ width: "46px", textAlign: "center", padding: "6px 0", borderRadius: "6px", fontFamily: "var(--font-serif)", fontWeight: "var(--fw-bold)", fontSize: "15px", background: on ? "var(--deal-accent)" : "rgba(120,140,175,0.6)", color: on ? "var(--deal-primary-deep)" : "#fff" }}>{s.num}</span>
                  <span style={{ fontFamily: "var(--font-serif)", fontWeight: "var(--fw-bold)", fontSize: "22px", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: on ? "var(--text-heading)" : "var(--text-body)", opacity: on ? 1 : 0.78 }}>{s.label}</span>
                </div>
              );
            })}
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            left: "var(--slide-margin-x)",
            top: "50%",
            transform: "translateY(-54%)",
            color: "var(--text-on-dark)",
            maxWidth: "640px",
            display: sections ? "none" : "block",
          }}
        >
          {sectionNumber != null ? (
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "120px",
                fontWeight: 300,
                lineHeight: 0.9,
                color: "var(--sky-400)",
                opacity: 0.95,
              }}
            >
              {sectionNumber}
            </div>
          ) : null}
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--fs-page-title)",
              fontWeight: "var(--fw-regular)",
              lineHeight: "var(--lh-tight)",
              marginTop: "var(--space-3)",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: "var(--fs-subtitle)", marginTop: "var(--space-4)", maxWidth: "460px", opacity: 0.92 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        {Footer}
      </div>
    );
  }

  return (
    <div className={className} style={frame}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "var(--slide-margin-top) var(--slide-margin-x) calc(var(--slide-footer-h) + 14px)",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-6)" }}>
          <div style={{ flex: "1 1 auto" }}>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-serif)",
                fontWeight: "var(--fw-regular)",
                fontSize: "var(--fs-title)",
                lineHeight: "var(--lh-tight)",
                letterSpacing: "var(--ls-title)",
                color: "var(--text-heading)",
              }}
            >
              {title}
            </h1>
            {subtitle ? (
              <div style={{ fontSize: "var(--fs-subtitle)", color: "var(--text-muted)", marginTop: "4px" }}>
                {subtitle}
              </div>
            ) : null}
          </div>
          {showTitleLogo ? (
            <TargetLogo src={titleLogoSrc} alt={titleLogoAlt} variant="header-medium" height={34} style={{ flex: "0 0 auto", marginTop: "2px" }} />
          ) : null}
        </div>

        <div style={{ borderTop: "var(--border-hair)", marginTop: "10px" }} />

        {/* Optional key-message band */}
        {band ? (
          <div
            style={{
              background: "var(--surface-band)",
              padding: "10px 16px",
              marginTop: "12px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            {Array.isArray(band) ? (
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                {band.map((b, i) => (
                  <li key={i} style={{ display: "flex", gap: "8px", alignItems: "baseline", fontSize: "var(--fs-body)" }}>
                    <span style={{ width: "5px", height: "5px", background: "var(--bullet)", flex: "0 0 auto", transform: "translateY(-2px)" }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              band
            )}
          </div>
        ) : null}

        {/* Body */}
        <div style={{ flex: "1 1 auto", minHeight: 0, marginTop: "14px" }}>{children}</div>
      </div>
      {Footer}
    </div>
  );
}
