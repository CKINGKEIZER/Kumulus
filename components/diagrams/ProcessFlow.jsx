import React from "react";

/**
 * ProcessFlow — a row of chevron/arrow steps in the deal primary, each with a
 * label and optional body beneath. The house process / value-chain construction
 * (LP-PROCESS-CHEVRON). Steps tint uniformly or ramp from light to deep.
 */
export function ProcessFlow({
  steps = [],              // [{ label, body? }]
  ramp = false,            // tint light->deep across steps
  height = 34,
  className = "",
  style = {},
}) {
  const shades = ["color-mix(in srgb, var(--deal-primary) 55%, #fff)", "color-mix(in srgb, var(--deal-primary) 75%, #fff)", "var(--deal-primary)", "var(--deal-primary-deep)"];
  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ display: "flex", gap: 5 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ flex: 1, background: ramp ? shades[Math.min(i, shades.length - 1)] : "var(--deal-primary)", color: "#fff", height, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 18px 0 12px", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-colhead)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", clipPath: i === steps.length - 1 ? "none" : "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)", borderRadius: i === steps.length - 1 ? "0 3px 3px 0" : 0 }}>{s.label}</div>
        ))}
      </div>
      {steps.some((s) => s.body) ? (
        <div style={{ display: "flex", gap: 5, marginTop: 10 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ flex: 1, fontSize: "var(--fs-body-sm)", lineHeight: 1.4, color: "var(--text-body)", padding: "0 8px" }}>{s.body}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
