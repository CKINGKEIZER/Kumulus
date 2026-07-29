import React from "react";

/**
 * FooterNav — the section page-tab navigator used in the slide footer.
 * Renders a horizontal run of numbered tabs (plus an optional appendix
 * tab); the active section expands into a navy banner showing its name.
 * Mirrors the "1 2 3 [4 · CUSTOMERS & GO-TO-MARKET] 5 6 7 A" device.
 */
export function FooterNav({
  tabs,
  active,
  activeLabel = "",
  className = "",
  style = {},
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: "4px",
        height: "16px",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
    >
      {tabs.map((t) => {
        const isActive = t.n === active;
        if (isActive) {
          return (
            <div
              key={t.n}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                background: "var(--tab-active-bg)",
                color: "var(--tab-active-text)",
                borderRadius: "var(--radius-sm)",
                padding: "0 9px",
                fontWeight: "var(--fw-bold)",
              }}
            >
              <span style={{ fontSize: "10px" }}>{t.n}</span>
              {activeLabel ? (
                <span
                  style={{
                    fontSize: "8.5px",
                    letterSpacing: "var(--ls-caps-wide)",
                    textTransform: "uppercase",
                  }}
                >
                  {activeLabel}
                </span>
              ) : null}
            </div>
          );
        }
        return (
          <div
            key={t.n}
            title={t.label || ""}
            style={{
              width: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--tab-idle-text)",
              fontSize: "10px",
              fontWeight: "var(--fw-semibold)",
            }}
          >
            {t.n}
          </div>
        );
      })}
    </div>
  );
}
