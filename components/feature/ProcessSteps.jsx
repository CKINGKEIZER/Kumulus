import React from "react";

/**
 * ProcessSteps — a vertical sequence of numbered stages. Each step gets a
 * navy circle with its index, a small-caps title, and a bullet detail list.
 * A connecting rail runs down the left. Mirrors the IM sales-process column.
 */
export function ProcessSteps({ steps, className = "", style = {} }) {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column", gap: "10px", ...style }}
    >
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "999px",
                background: "var(--navy-800)",
                color: "var(--white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
                fontWeight: "var(--fw-bold)",
                fontSize: "11px",
              }}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 ? (
              <div style={{ width: "1.5px", flex: "1 1 auto", minHeight: "14px", background: "var(--gray-200)", marginTop: "3px" }} />
            ) : null}
          </div>
          <div style={{ paddingBottom: "2px" }}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: "var(--fw-bold)",
                fontSize: "var(--fs-colhead)",
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
                color: "var(--text-heading)",
                marginBottom: "3px",
              }}
            >
              {s.title}
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "3px" }}>
              {s.items.map((it, j) => (
                <li key={j} style={{ display: "flex", gap: "7px", alignItems: "baseline", fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-snug)", color: "var(--text-body)" }}>
                  <span style={{ width: "4px", height: "4px", background: "var(--bullet)", flex: "0 0 auto", transform: "translateY(-2px)" }} />
                  <span style={{ textWrap: "pretty" }}>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
