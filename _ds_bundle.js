/* @ds-bundle: {"format":4,"namespace":"KumulusPartnersDesignSystem_533273","components":[{"name":"KumulusMark","sourcePath":"components/brand/KumulusMark.jsx"},{"name":"TargetCompanyLogoPlaceholder","sourcePath":"components/brand/TargetCompanyLogoPlaceholder.jsx"},{"name":"TargetLogo","sourcePath":"components/brand/TargetCompanyLogoPlaceholder.jsx"},{"name":"ThirdPartyLogoPlaceholder","sourcePath":"components/brand/TargetCompanyLogoPlaceholder.jsx"},{"name":"CagrPill","sourcePath":"components/charts/CagrPill.jsx"},{"name":"MarginCapsule","sourcePath":"components/charts/CagrPill.jsx"},{"name":"RefChip","sourcePath":"components/charts/CagrPill.jsx"},{"name":"ColumnChart","sourcePath":"components/charts/ColumnChart.jsx"},{"name":"Donut","sourcePath":"components/charts/Donut.jsx"},{"name":"BarRow","sourcePath":"components/content/BarRow.jsx"},{"name":"BulletList","sourcePath":"components/content/BulletList.jsx"},{"name":"ColumnHeading","sourcePath":"components/content/ColumnHeading.jsx"},{"name":"KeyMessageBand","sourcePath":"components/content/KeyMessageBand.jsx"},{"name":"KpiCell","sourcePath":"components/content/KpiCell.jsx"},{"name":"KpiTable","sourcePath":"components/content/KpiTable.jsx"},{"name":"PanelHeader","sourcePath":"components/content/PanelHeader.jsx"},{"name":"ValueCapsule","sourcePath":"components/content/ValueCapsule.jsx"},{"name":"HarveyBall","sourcePath":"components/data/ComparisonMatrix.jsx"},{"name":"ComparisonMatrix","sourcePath":"components/data/ComparisonMatrix.jsx"},{"name":"FinancialTable","sourcePath":"components/data/FinancialTable.jsx"},{"name":"ProcessFlow","sourcePath":"components/diagrams/ProcessFlow.jsx"},{"name":"Pyramid","sourcePath":"components/diagrams/Pyramid.jsx"},{"name":"Timeline","sourcePath":"components/diagrams/Timeline.jsx"},{"name":"ArrowConnector","sourcePath":"components/feature/ArrowConnector.jsx"},{"name":"NumberedHighlight","sourcePath":"components/feature/NumberedHighlight.jsx"},{"name":"ProcessSteps","sourcePath":"components/feature/ProcessSteps.jsx"},{"name":"PullQuote","sourcePath":"components/feature/PullQuote.jsx"},{"name":"FooterNav","sourcePath":"components/layout/FooterNav.jsx"},{"name":"SectionBar","sourcePath":"components/layout/SectionBar.jsx"},{"name":"SlideFrame","sourcePath":"components/layout/SlideFrame.jsx"},{"name":"VerticalTab","sourcePath":"components/layout/VerticalTab.jsx"}],"sourceHashes":{"components/brand/KumulusMark.jsx":"45e854a64a5c","components/brand/TargetCompanyLogoPlaceholder.jsx":"239bed845ba9","components/charts/CagrPill.jsx":"f2501dfdd377","components/charts/ColumnChart.jsx":"13d81f918683","components/charts/Donut.jsx":"0d0e3bf800d1","components/content/BarRow.jsx":"de64d078b58f","components/content/BulletList.jsx":"adb7d51f4d50","components/content/ColumnHeading.jsx":"8a223d336c73","components/content/KeyMessageBand.jsx":"614dfa48d996","components/content/KpiCell.jsx":"cf66da4b9d7a","components/content/KpiTable.jsx":"7314bd32efa5","components/content/PanelHeader.jsx":"5047ff4336d9","components/content/ValueCapsule.jsx":"71749a70d718","components/data/ComparisonMatrix.jsx":"9475202f5bac","components/data/FinancialTable.jsx":"5a29c6129721","components/diagrams/ProcessFlow.jsx":"587827528705","components/diagrams/Pyramid.jsx":"cf72c8c4742c","components/diagrams/Timeline.jsx":"4deb63f1ba32","components/feature/ArrowConnector.jsx":"6975af6f9b18","components/feature/NumberedHighlight.jsx":"8348590b004f","components/feature/ProcessSteps.jsx":"dbfafb01b9e6","components/feature/PullQuote.jsx":"5c0021498d65","components/layout/FooterNav.jsx":"84c2170fc136","components/layout/SectionBar.jsx":"14d6d974f52e","components/layout/SlideFrame.jsx":"a6469a05c672","components/layout/VerticalTab.jsx":"da23f34e11fe"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KumulusPartnersDesignSystem_533273 = window.KumulusPartnersDesignSystem_533273 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/KumulusMark.jsx
try { (() => {
/**
 * KumulusMark — the Kumulus Partners footer wordmark, rendered in CSS
 * (Merriweather serif "kumulus" + raspberry accent dot + letter-spaced
 * "PARTNERS"). Self-contained so the footer chrome needs no image asset.
 */
function KumulusMark({
  height = 24,
  color = "var(--navy-800)",
  className = "",
  style = {}
}) {
  const scale = height / 24;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "flex-start",
      lineHeight: 1,
      color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: `${20 * scale}px`,
      letterSpacing: "0.005em",
      position: "relative",
      display: "inline-block"
    }
  }, "kumulus", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      width: `${3.4 * scale}px`,
      height: `${3.4 * scale}px`,
      borderRadius: "999px",
      background: "var(--accent-coral)",
      // sits over the second 'u', just above the baseline gap
      left: "47%",
      bottom: `${1.5 * scale}px`
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: `${7 * scale}px`,
      letterSpacing: "0.42em",
      textTransform: "uppercase",
      marginTop: `${3 * scale}px`,
      marginLeft: `${1 * scale}px`,
      opacity: 0.92
    }
  }, "Partners"));
}
Object.assign(__ds_scope, { KumulusMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/KumulusMark.jsx", error: String((e && e.message) || e) }); }

// components/brand/TargetCompanyLogoPlaceholder.jsx
try { (() => {
/**
 * TargetCompanyLogoPlaceholder — the MANDATORY yellow placeholder that stands
 * in for a target-company logo until a real asset is supplied (Plan §8).
 * It must never collapse or disappear; supplying a logo replaces it at the
 * same dimensions with a contain-fit image. It is visually distinct from the
 * Kumulus (advisor) mark and must never be confused with it.
 *
 * Use `<ThirdPartyLogoPlaceholder>` (neutral grey) for supplier / customer
 * logos instead — never this yellow one.
 */
const VARIANTS = {
  "cover-large": {
    h: 96,
    fs: 13,
    label: "TARGET COMPANY LOGO"
  },
  "header-medium": {
    h: 34,
    fs: 8,
    label: "TARGET LOGO"
  },
  "footer-small": {
    h: 16,
    fs: 6,
    label: "TARGET LOGO"
  },
  "diagram-node": {
    h: 48,
    fs: 8,
    label: "TARGET"
  }
};
function TargetCompanyLogoPlaceholder({
  variant = "footer-small",
  width = null,
  height = null,
  label = null,
  className = "",
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS["footer-small"];
  const h = height ?? v.h;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "img",
    "aria-label": "Target company logo placeholder",
    style: {
      height: h,
      width: width ?? h * 2.6,
      minWidth: h * 1.8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 6px",
      boxSizing: "border-box",
      background: "var(--placeholder-target-fill)",
      border: "1px solid var(--placeholder-target-border)",
      borderRadius: "var(--radius-sm)",
      color: "var(--placeholder-target-text)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: label === false ? 0 : v.fs,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      lineHeight: 1.05,
      ...style
    }
  }, label === false ? null : label ?? v.label);
}

/**
 * TargetLogo — renders the supplied target-company logo (contain-fit) or the
 * mandatory yellow placeholder when none is given. Dimensions stay constant
 * whether the logo is present or not.
 */
function TargetLogo({
  src = null,
  alt = "",
  variant = "footer-small",
  width = null,
  height = null,
  style = {}
}) {
  const v = VARIANTS[variant] || VARIANTS["footer-small"];
  const h = height ?? v.h;
  if (!src) {
    return /*#__PURE__*/React.createElement(TargetCompanyLogoPlaceholder, {
      variant: variant,
      width: width,
      height: height,
      style: style
    });
  }
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height: h,
      width: width ?? "auto",
      maxWidth: width ?? h * 4,
      objectFit: "contain",
      display: "block",
      ...style
    }
  });
}

/**
 * ThirdPartyLogoPlaceholder — neutral grey placeholder for supplier / customer
 * (third-party) logos. Deliberately NOT yellow, so it can never be mistaken
 * for the target-company placeholder or the Kumulus mark.
 */
function ThirdPartyLogoPlaceholder({
  label = "LOGO",
  width = 84,
  height = 32,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "Third-party logo placeholder",
    style: {
      height,
      width,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--placeholder-neutral-fill)",
      border: "1px dashed var(--placeholder-neutral-border)",
      borderRadius: "var(--radius-sm)",
      color: "var(--placeholder-neutral-text)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: label === false ? 0 : 7,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      boxSizing: "border-box",
      ...style
    }
  }, label === false ? null : label);
}
Object.assign(__ds_scope, { TargetCompanyLogoPlaceholder, TargetLogo, ThirdPartyLogoPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TargetCompanyLogoPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/charts/CagrPill.jsx
try { (() => {
/**
 * Chart annotation atoms used across IM chart slides:
 *  - CagrPill: grey rounded pill with a dashed up-arrow + growth %, the house
 *    CAGR/delta callout ("5.4%", "34.4%").
 *  - MarginCapsule: outline rounded pill for a margin/ratio readout ("45.5%"),
 *    used on the GROSS MARGIN row beneath charts.
 *  - RefChip: black rounded pill with a magnifier + page ref ("P. 47"), the
 *    house cross-reference marker.
 */
function CagrPill({
  value,
  label = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "var(--gray-300)",
      color: "var(--text-heading)",
      borderRadius: "5px",
      padding: "3px 8px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 10 L11 3",
    stroke: "var(--text-heading)",
    strokeWidth: "1.3",
    strokeDasharray: "2 2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2 L12 2.5 L10.5 6 Z",
    fill: "var(--text-heading)"
  })), value, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-regular)",
      marginLeft: 3
    }
  }, label) : null);
}
function MarginCapsule({
  value,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--gray-400)",
      borderRadius: "5px",
      padding: "3px 12px",
      fontFamily: "var(--font-sans)",
      fontStyle: "italic",
      fontWeight: "var(--fw-semibold)",
      fontSize: 12,
      color: "var(--text-heading)",
      ...style
    }
  }, value);
}
function RefChip({
  page,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: "6px",
      padding: "3px 9px",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: 11,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "3.4",
    stroke: "#fff",
    strokeWidth: "1.2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.6 7.6 L10.5 10.5",
    stroke: "#fff",
    strokeWidth: "1.4"
  })), "P. ", page);
}
Object.assign(__ds_scope, { CagrPill, MarginCapsule, RefChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/CagrPill.jsx", error: String((e && e.message) || e) }); }

// components/charts/ColumnChart.jsx
try { (() => {
/**
 * ColumnChart — the workhorse IM bar/column chart. Stacked or grouped columns
 * with series colours from the deal chart ramp (--deal-chart-1..5), value
 * labels inside segments, a total above each column, and a category axis.
 * Left-side category labels (as on the revenue-mix slide) can be supplied via
 * `seriesLabels`. Pair with <CagrPill>, <MarginCapsule> and <ColumnHeading>
 * for the full slide construction. Pure CSS/flex — no chart library.
 */
function ColumnChart({
  data = [],
  // [{ label, segments:[{value,label?}] }]  or [{label,value}]
  mode = "stacked",
  // "stacked" | "grouped" | "simple"
  height = 260,
  colors = null,
  // override series colours
  seriesLabels = null,
  // left-axis category names (stacked)
  showTotals = true,
  formatTotal = n => n.toFixed(1),
  barWidth = 90,
  gap = 44,
  className = "",
  style = {}
}) {
  const ramp = colors || ["var(--deal-chart-1)", "var(--deal-chart-2)", "var(--deal-chart-3)", "var(--deal-chart-4)", "var(--deal-chart-5)"];
  const norm = data.map(d => d.segments ? d : {
    ...d,
    segments: [{
      value: d.value
    }]
  });
  const totals = norm.map(d => d.segments.reduce((s, x) => s + x.value, 0));
  const max = Math.max(...totals, 1);
  const plot = height - 30; // leave room for total + axis label

  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      gap: 14,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, seriesLabels ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 2,
      paddingBottom: 26,
      textAlign: "right"
    }
  }, seriesLabels.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: "var(--fs-label)",
      color: "var(--text-body)",
      lineHeight: 1.3
    }
  }, s))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap,
      flex: "1 1 auto",
      justifyContent: "space-around"
    }
  }, norm.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: barWidth
    }
  }, showTotals ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: 15,
      color: "var(--text-heading)",
      marginBottom: 5
    }
  }, formatTotal(totals[i])) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: totals[i] / max * plot,
      display: "flex",
      flexDirection: mode === "grouped" ? "row" : "column",
      alignItems: "flex-end",
      gap: mode === "grouped" ? 3 : 0,
      borderRadius: "2px",
      overflow: "hidden"
    }
  }, mode === "grouped" ? d.segments.map((seg, j) => {
    const h = seg.value / (totals[i] || 1) * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: j,
      title: String(seg.value),
      style: {
        flex: 1,
        height: h + "%",
        minHeight: 2,
        background: ramp[j % ramp.length],
        borderRadius: "2px 2px 0 0"
      }
    });
  }) : d.segments.map((seg, j) => {
    const h = seg.value / totals[i] * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        height: h + "%",
        background: ramp[j % ramp.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: "var(--fw-semibold)"
      }
    }, seg.label != null ? seg.label : h > 12 ? seg.value : "");
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "0.04em",
      color: "var(--text-heading)"
    }
  }, d.label)))));
}
Object.assign(__ds_scope, { ColumnChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ColumnChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/Donut.jsx
try { (() => {
/**
 * Donut — segmented ring with an optional centre label and side legend. The
 * house share/split chart (revenue mix, segmentation, tenure). Segment colours
 * default to the deal chart ramp. Pure SVG.
 */
function Donut({
  segments = [],
  // [{ value, label?, color? }]
  size = 150,
  thickness = 26,
  centerLabel = null,
  centerSub = null,
  legend = false,
  gap = 2,
  // degrees between segments
  className = "",
  style = {}
}) {
  const ramp = ["var(--deal-chart-1)", "var(--deal-chart-2)", "var(--deal-chart-3)", "var(--deal-chart-4)", "var(--deal-chart-5)"];
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = 50 - thickness / 2 / (size / 100);
  const R = 50,
    cx = 50,
    cy = 50;
  let angle = -90;
  const arcs = segments.map((s, i) => {
    const sweep = s.value / total * 360 - gap;
    const a0 = (angle + gap / 2) * Math.PI / 180;
    const a1 = (angle + gap / 2 + sweep) * Math.PI / 180;
    angle += s.value / total * 360;
    const rr = R - thickness / 2;
    const x0 = cx + rr * Math.cos(a0),
      y0 = cy + rr * Math.sin(a0);
    const x1 = cx + rr * Math.cos(a1),
      y1 = cy + rr * Math.sin(a1);
    const large = sweep > 180 ? 1 : 0;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M ${x0} ${y0} A ${rr} ${rr} 0 ${large} 1 ${x1} ${y1}`,
      fill: "none",
      stroke: s.color || ramp[i % ramp.length],
      strokeWidth: thickness
    });
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100"
  }, arcs), centerLabel != null ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: size * 0.15,
      color: "var(--text-heading)",
      lineHeight: 1
    }
  }, centerLabel), centerSub ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.075,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, centerSub) : null) : null), legend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)"
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 2,
      background: s.color || ramp[i % ramp.length],
      flex: "0 0 auto"
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label)))) : null);
}
Object.assign(__ds_scope, { Donut });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Donut.jsx", error: String((e && e.message) || e) }); }

// components/content/BulletList.jsx
try { (() => {
/**
 * BulletList — the bullet copy list that carries most body text in the IM.
 * House rules (intern manual): spacing ≈3pt before/after each bullet;
 * first-level indent 0.48cm, nested 1cm. Two marker styles exist in the
 * house style: `marker="square"` (navy/cobalt square — IM body copy) and
 * `marker="triangle"` (the customized ▷ bullet from the formatting bible).
 * Each item may be a string or `{ text, sub, items }` — `items` renders a
 * nested second-level list.
 */
function BulletList({
  items,
  size = "md",
  dense = false,
  marker = "square",
  className = "",
  style = {}
}) {
  const fs = size === "sm" ? "var(--fs-body-sm)" : "var(--fs-body)";
  const Marker = () => marker === "triangle" ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bullet)",
      fontSize: "0.75em",
      flex: "0 0 auto",
      transform: "translateY(-1px)"
    }
  }, "\u25B7") : /*#__PURE__*/React.createElement("span", {
    style: {
      width: "5px",
      height: "5px",
      background: "var(--bullet)",
      flex: "0 0 auto",
      transform: "translateY(-2px)"
    }
  });
  return /*#__PURE__*/React.createElement("ul", {
    className: className,
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: dense ? "5px" : "var(--bullet-gap)",
      color: "var(--text-body)",
      ...style
    }
  }, items.map((it, i) => {
    const text = typeof it === "string" ? it : it.text;
    const sub = typeof it === "string" ? null : it.sub;
    const kids = typeof it === "string" ? null : it.items;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        lineHeight: "var(--lh-body)",
        fontSize: fs
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement(Marker, null), /*#__PURE__*/React.createElement("span", {
      style: {
        textWrap: "pretty"
      }
    }, text, sub ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        color: "var(--text-muted)",
        fontSize: "var(--fs-body-sm)"
      }
    }, sub) : null)), kids ? /*#__PURE__*/React.createElement(BulletList, {
      items: kids,
      size: "sm",
      dense: true,
      marker: marker,
      style: {
        marginTop: "5px",
        marginLeft: "calc(var(--bullet-indent-2) - var(--bullet-indent-1))",
        paddingLeft: 0
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/content/ColumnHeading.jsx
try { (() => {
/**
 * ColumnHeading — small-caps heading used at the top of each body column /
 * sub-section. House rule: title underlines are BLACK 0.5pt lines (all other
 * separators are 0.25pt grey) — `rule="title"` (default) vs `rule="separator"`
 * vs `rule={false}`.
 */
function ColumnHeading({
  children,
  icon = null,
  rule = true,
  align = "center",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: align === "center" ? "center" : "flex-start",
      gap: "6px",
      paddingBottom: rule ? "5px" : 0
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--brand-secondary)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)"
    }
  }, children)), rule ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: rule === "separator" ? "var(--rule-separator)" : "var(--rule-title)"
    }
  }) : null);
}
Object.assign(__ds_scope, { ColumnHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ColumnHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/KeyMessageBand.jsx
try { (() => {
/**
 * KeyMessageBand — the one-line takeaway strip under a slide title. Serif,
 * subtle grey background, used to state the argument the page proves. Distinct
 * from the title (which is the topic) — this is the sentence.
 */
function KeyMessageBand({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      background: "var(--surface-band)",
      borderRadius: 2,
      padding: "8px 14px",
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { KeyMessageBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/KeyMessageBand.jsx", error: String((e && e.message) || e) }); }

// components/content/KpiCell.jsx
try { (() => {
/**
 * KpiCell — a single headline metric: optional icon, big navy figure, and
 * a small-caps label (with optional second line). Used in KPI strips and
 * case-study fact boxes.
 */
function KpiCell({
  value,
  label,
  sublabel = null,
  icon = null,
  align = "center",
  size = "md",
  className = "",
  style = {}
}) {
  const fs = size === "lg" ? "var(--fs-kpi-lg)" : "var(--fs-kpi)";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      gap: "3px",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--brand-secondary)",
      marginBottom: "2px"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: fs,
      lineHeight: 1,
      color: "var(--text-heading)"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), sublabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, sublabel) : null);
}
Object.assign(__ds_scope, { KpiCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/KpiCell.jsx", error: String((e && e.message) || e) }); }

// components/content/KpiTable.jsx
try { (() => {
/**
 * KpiTable — a compact two-(or-more)-column reference table with a
 * small-caps header row and hairline-ruled rows (e.g. KPI | DESCRIPTION).
 */
function KpiTable({
  columns,
  rows,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: columns.map(c => c.width || "1fr").join(" "),
      columnGap: "16px",
      padding: "0 0 5px",
      borderBottom: "var(--border-rule-strong)"
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      textAlign: c.align || "left"
    }
  }, c.label))), rows.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: "grid",
      gridTemplateColumns: columns.map(c => c.width || "1fr").join(" "),
      columnGap: "16px",
      padding: "7px 0",
      borderBottom: "var(--border-hair)"
    }
  }, row.map((cell, c) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-snug)",
      color: c === 0 ? "var(--text-heading)" : "var(--text-body)",
      fontWeight: c === 0 ? "var(--fw-semibold)" : "var(--fw-regular)",
      textAlign: columns[c]?.align || "left"
    }
  }, cell)))));
}
Object.assign(__ds_scope, { KpiTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/KpiTable.jsx", error: String((e && e.message) || e) }); }

// components/content/PanelHeader.jsx
try { (() => {
/**
 * PanelHeader — the light grey band with centered small-caps title that heads
 * a content panel in the IM (e.g. "DIVERSIFIED CUSTOMER BASE", "CUSTOMER
 * CONCENTRATION BASED ON REVENUE (FY24A)"). This is the house default for panel
 * headings — NOT a filled deal-colour bar. Colour is reserved for data and the
 * value-chain nav; panels are white/grey. Optional trailing period tag.
 */
function PanelHeader({
  children,
  trailing = null,
  tone = "grey",
  className = "",
  style = {}
}) {
  const bg = tone === "grey" ? "var(--surface-band)" : "transparent";
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: bg,
      padding: "6px 12px",
      borderRadius: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      textAlign: "center"
    }
  }, children), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      color: "var(--deal-primary)"
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { PanelHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PanelHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueCapsule.jsx
try { (() => {
/**
 * ValueCapsule — the pale-blue rounded pill that wraps a data value beside
 * chart rows and KPIs. Navy figure on sky-200.
 */
function ValueCapsule({
  children,
  tone = "sky",
  className = "",
  style = {}
}) {
  const bg = tone === "navy" ? "var(--navy-800)" : "var(--capsule-bg)";
  const fg = tone === "navy" ? "var(--white)" : "var(--capsule-text)";
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: bg,
      color: fg,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1,
      padding: "3px 8px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ValueCapsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueCapsule.jsx", error: String((e && e.message) || e) }); }

// components/content/BarRow.jsx
try { (() => {
/**
 * BarRow — one horizontal bar in a labelled bar chart: a small-caps row
 * label, a navy bar scaled to `value/max`, and a trailing ValueCapsule.
 * Compose several to build the bar charts seen throughout the IM.
 */
function BarRow({
  label,
  value,
  max,
  display = null,
  labelWidth = "82px",
  barColor = "var(--chart-1)",
  capsuleTone = "sky",
  className = "",
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: labelWidth,
      flex: "0 0 auto",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "13px",
      width: `${pct}%`,
      minWidth: "2px",
      background: barColor,
      borderRadius: "1px"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.ValueCapsule, {
    tone: capsuleTone
  }, display != null ? display : value)));
}
Object.assign(__ds_scope, { BarRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BarRow.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonMatrix.jsx
try { (() => {
/**
 * HarveyBall — 0–4 fill rating glyph (empty, quarter, half, three-quarter,
 * full) in the deal primary colour. The house rating mark used across
 * capability / competitive matrices.
 */
function HarveyBall({
  level = 0,
  size = 15,
  color = "var(--deal-primary)",
  style = {}
}) {
  const r = size / 2;
  const clip = {
    0: null,
    1: `polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)`,
    2: `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`,
    3: `polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)`,
    4: `none`
  }[Math.max(0, Math.min(4, level))];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "999px",
      border: `1.4px solid ${color}`,
      verticalAlign: "middle",
      ...style
    }
  }, clip ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "999px",
      background: color,
      clipPath: clip === "none" ? undefined : clip
    }
  }) : null);
}

/**
 * ComparisonMatrix — capability / competitive / field-description-impact table.
 * Columns across, rows down; each cell is either a 0–4 number (rendered as a
 * HarveyBall), a boolean (check/dash), or a ReactNode (text). Optional left
 * vertical deal-primary tab label, and an optional first "description" column.
 */
function ComparisonMatrix({
  columns = [],
  rows = [],
  tabLabel = null,
  firstColHead = "",
  className = "",
  style = {}
}) {
  const cell = {
    padding: "8px 12px",
    textAlign: "center",
    borderBottom: "var(--rule-separator)",
    fontSize: "var(--fs-body-sm)"
  };
  const renderCell = v => {
    if (typeof v === "number") return /*#__PURE__*/React.createElement(HarveyBall, {
      level: v
    });
    if (v === true) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--deal-positive)",
        fontWeight: "var(--fw-bold)"
      }
    }, "\u2713");
    if (v === false) return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gray-400)"
      }
    }, "\u2013");
    return v;
  };
  const table = /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...cell,
      textAlign: "left",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-label)",
      borderBottom: "var(--rule-title)"
    }
  }, firstColHead), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-label)",
      borderBottom: "var(--rule-title)"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: "left",
      fontWeight: "var(--fw-semibold)"
    }
  }, r.label), r.cells.map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: cell
  }, renderCell(v)))))));
  if (!tabLabel) return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, table);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      gap: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      background: "var(--deal-primary)",
      color: "#fff",
      padding: "10px 6px",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      textAlign: "center",
      borderRadius: "3px 0 0 3px"
    }
  }, tabLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto"
    }
  }, table));
}
Object.assign(__ds_scope, { HarveyBall, ComparisonMatrix });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonMatrix.jsx", error: String((e && e.message) || e) }); }

// components/data/FinancialTable.jsx
try { (() => {
/**
 * FinancialTable — the IM financial-statement / KPI table (P&L, balance sheet,
 * cash flow, QoE). House execution: deal-primary filled header cells (white
 * bold), left row labels, right-aligned period columns, bold subtotal rows on
 * a light grey band, parenthesised negatives, indented italic sub-rows,
 * optional numbered markers linking to a commentary rail, and an italic KPI
 * block beneath a rule. Numbers are passed pre-formatted (strings) so the deal
 * team controls rounding and the "(1.2)" negative convention.
 */
function FinancialTable({
  columns = [],
  rows = [],
  kpis = null,
  rowLabelHead = "€m",
  note = null,
  markerColor = "var(--deal-accent)",
  className = "",
  style = {}
}) {
  const cell = {
    padding: "5px 10px",
    textAlign: "right",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap"
  };
  const Marker = ({
    n
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 15,
      height: 15,
      borderRadius: "999px",
      background: markerColor,
      color: "#fff",
      fontSize: 9,
      fontWeight: "var(--fw-bold)",
      marginLeft: 6,
      verticalAlign: "middle"
    }
  }, n);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...cell,
      textAlign: "left",
      fontWeight: "var(--fw-regular)",
      color: "var(--text-muted)"
    }
  }, rowLabelHead), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      background: "var(--deal-primary)",
      color: "#fff",
      fontWeight: "var(--fw-bold)",
      borderLeft: "2px solid #fff"
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const rowStyle = {
      background: r.subtotal ? "var(--surface-band)" : "transparent",
      fontWeight: r.bold || r.subtotal ? "var(--fw-bold)" : "var(--fw-regular)",
      fontStyle: r.italic ? "italic" : "normal"
    };
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: rowStyle
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        textAlign: "left",
        paddingLeft: r.indent ? 24 : 10
      }
    }, r.label, r.marker != null ? /*#__PURE__*/React.createElement(Marker, {
      n: r.marker
    }) : null), r.values.map((v, j) => /*#__PURE__*/React.createElement("td", {
      key: j,
      style: cell
    }, v)));
  }))), kpis ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      borderTop: "var(--rule-title)",
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "KPIs"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, kpis.map((k, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      fontStyle: "italic"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: "left"
    }
  }, k.label), k.values.map((v, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: cell
  }, v))))))) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: "var(--fs-footnote)",
      color: "var(--text-footnote)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { FinancialTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FinancialTable.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/ProcessFlow.jsx
try { (() => {
/**
 * ProcessFlow — a row of chevron/arrow steps in the deal primary, each with a
 * label and optional body beneath. The house process / value-chain construction
 * (LP-PROCESS-CHEVRON). Steps tint uniformly or ramp from light to deep.
 */
function ProcessFlow({
  steps = [],
  // [{ label, body? }]
  ramp = false,
  // tint light->deep across steps
  height = 34,
  className = "",
  style = {}
}) {
  const shades = ["color-mix(in srgb, var(--deal-primary) 55%, #fff)", "color-mix(in srgb, var(--deal-primary) 75%, #fff)", "var(--deal-primary)", "var(--deal-primary-deep)"];
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: ramp ? shades[Math.min(i, shades.length - 1)] : "var(--deal-primary)",
      color: "#fff",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 18px 0 12px",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      clipPath: i === steps.length - 1 ? "none" : "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
      borderRadius: i === steps.length - 1 ? "0 3px 3px 0" : 0
    }
  }, s.label))), steps.some(s => s.body) ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5,
      marginTop: 10
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.4,
      color: "var(--text-body)",
      padding: "0 8px"
    }
  }, s.body))) : null);
}
Object.assign(__ds_scope, { ProcessFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/ProcessFlow.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Pyramid.jsx
try { (() => {
/**
 * Pyramid — layered segmentation pyramid (market tiers, customer segments).
 * Tiers narrow to the top and tint from deep (top) to light (base) across the
 * deal primary. Each tier shows a label and optional value.
 */
function Pyramid({
  tiers = [],
  // top-to-bottom [{ label, value? }]
  height = 220,
  className = "",
  style = {}
}) {
  const n = tiers.length || 1;
  const shades = i => `color-mix(in srgb, var(--deal-primary) ${100 - i * 55 / n}%, #fff)`;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      height,
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tiers.map((t, i) => {
    const w = 34 + (i + 1) * (66 / n); // widen toward base
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: w + "%",
        background: shades(i),
        color: "#fff",
        textAlign: "center",
        padding: "8px 10px",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--fs-body-sm)"
      }
    }, t.label), t.value != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--fs-label)",
        opacity: 0.9
      }
    }, t.value) : null);
  }));
}
Object.assign(__ds_scope, { Pyramid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Pyramid.jsx", error: String((e && e.message) || e) }); }

// components/diagrams/Timeline.jsx
try { (() => {
/**
 * Timeline — the IM company-history timeline: a deal-ramp phase-chevron header
 * bar across the top, then a horizontal line with circular year nodes and
 * events alternating above/below. Phases tint from light to deep across the
 * deal primary. Pure CSS/flex + one SVG line.
 */
function Timeline({
  phases = [],
  // [{ label, flex? }]
  events = [],
  // [{ year, text, side?: "top"|"bottom" }]
  className = "",
  style = {}
}) {
  const shades = ["color-mix(in srgb, var(--deal-primary) 45%, #fff)", "color-mix(in srgb, var(--deal-primary) 70%, #fff)", "var(--deal-primary)", "var(--deal-primary-deep)"];
  const tops = events.filter((e, i) => (e.side || (i % 2 ? "bottom" : "top")) === "top");
  const bots = events.filter((e, i) => (e.side || (i % 2 ? "bottom" : "top")) === "bottom");
  const Node = ({
    e
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "999px",
      background: "var(--deal-primary)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: 12,
      flex: "0 0 auto"
    }
  }, e.year));
  const Cap = ({
    e
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.35,
      color: "var(--text-body)",
      textAlign: "center",
      padding: "0 6px"
    }
  }, e.text);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 22
    }
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: p.flex || 1,
      background: shades[Math.min(i, shades.length - 1)],
      color: "#fff",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "6px 10px",
      clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)"
    }
  }, p.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end"
    }
  }, tops.map((e, i) => /*#__PURE__*/React.createElement(Cap, {
    key: i,
    e: e
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      margin: "8px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "50%",
      height: 4,
      background: "var(--gray-300)",
      borderRadius: 2
    }
  }), events.map((e, i) => /*#__PURE__*/React.createElement(Node, {
    key: i,
    e: e
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start"
    }
  }, bots.map((e, i) => /*#__PURE__*/React.createElement(Cap, {
    key: i,
    e: e
  }))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/diagrams/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feature/ArrowConnector.jsx
try { (() => {
/**
 * ArrowConnector — the sky-blue circle with a white arrow used to link
 * stages/rows on the IM slides. Direction "down" (default) or "right".
 */
function ArrowConnector({
  direction = "down",
  size = 22,
  className = "",
  style = {}
}) {
  const rot = direction === "right" ? "-90deg" : "0deg";
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      width: size,
      height: size,
      borderRadius: "999px",
      background: "var(--sky-400)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.5,
    height: size * 0.5,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: `rotate(${rot})`
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2 V12 M8 12 L3.5 7.5 M8 12 L12.5 7.5",
    stroke: "var(--white)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { ArrowConnector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feature/ArrowConnector.jsx", error: String((e && e.message) || e) }); }

// components/feature/NumberedHighlight.jsx
try { (() => {
/**
 * NumberedHighlight — one row of the IM "Key investment highlights" layout:
 * a deal-primary panel (number circle + icon + small-caps title) on the left,
 * a bulleted claim card in the middle, and a visual card (chart/logos/donut)
 * on the right. Compose several in a column for the full slide.
 */
function NumberedHighlight({
  number,
  title,
  icon = null,
  bullets = [],
  visual = null,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 2fr 1.4fr",
      gap: 12,
      alignItems: "stretch",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--deal-primary)",
      color: "#fff",
      borderRadius: 4,
      padding: "16px 16px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      width: 22,
      height: 22,
      borderRadius: "999px",
      border: "1.5px solid #fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: "var(--fw-bold)"
    }
  }, number), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      marginBottom: 8
    }
  }, icon) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      lineHeight: 1.3
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-hair)",
      borderRadius: 4,
      padding: "12px 14px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 8
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "baseline",
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--deal-primary)",
      fontSize: "0.8em",
      flex: "0 0 auto"
    }
  }, "\u25B7"), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-hair)",
      borderRadius: 4,
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, visual));
}
Object.assign(__ds_scope, { NumberedHighlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feature/NumberedHighlight.jsx", error: String((e && e.message) || e) }); }

// components/feature/ProcessSteps.jsx
try { (() => {
/**
 * ProcessSteps — a vertical sequence of numbered stages. Each step gets a
 * navy circle with its index, a small-caps title, and a bullet detail list.
 * A connecting rail runs down the left. Mirrors the IM sales-process column.
 */
function ProcessSteps({
  steps,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "10px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
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
      fontSize: "11px"
    }
  }, i + 1), i < steps.length - 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "1.5px",
      flex: "1 1 auto",
      minHeight: "14px",
      background: "var(--gray-200)",
      marginTop: "3px"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: "2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-colhead)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-heading)",
      marginBottom: "3px"
    }
  }, s.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, s.items.map((it, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      display: "flex",
      gap: "7px",
      alignItems: "baseline",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-snug)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "4px",
      height: "4px",
      background: "var(--bullet)",
      flex: "0 0 auto",
      transform: "translateY(-2px)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textWrap: "pretty"
    }
  }, it))))))));
}
Object.assign(__ds_scope, { ProcessSteps });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feature/ProcessSteps.jsx", error: String((e && e.message) || e) }); }

// components/feature/PullQuote.jsx
try { (() => {
/**
 * PullQuote — a client / team testimonial.
 *  - "plain"        inline serif-italic quote with an oversized navy quote mark + attribution.
 *  - "card"         the same on a soft tinted card.
 *  - "testimonial"  centered: optional circular avatar, name + role on top,
 *                   then a mid-gray serif-italic quote in curly quotes
 *                   (the People / case-study treatment).
 */
function PullQuote({
  quote,
  author,
  role = null,
  avatarSrc = null,
  variant = "plain",
  className = "",
  style = {}
}) {
  if (variant === "testimonial") {
    return /*#__PURE__*/React.createElement("figure", {
      className: className,
      style: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "8px",
        ...style
      }
    }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
      src: avatarSrc,
      alt: typeof author === "string" ? author : "",
      style: {
        width: "62px",
        height: "62px",
        borderRadius: "999px",
        objectFit: "cover",
        background: "var(--gray-100)"
      }
    }) : null, author || role ? /*#__PURE__*/React.createElement("figcaption", {
      style: {
        fontFamily: "var(--font-sans)",
        lineHeight: 1.25
      }
    }, author ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontStyle: "italic",
        fontSize: "var(--fs-body-sm)",
        fontWeight: "var(--fw-semibold)",
        color: "var(--text-body)"
      }
    }, author) : null, role ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "9.5px",
        color: "var(--text-muted)"
      }
    }, role) : null) : null, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: "var(--fs-quote)",
        lineHeight: "var(--lh-quote)",
        color: "var(--text-muted)",
        maxWidth: "260px"
      }
    }, "\u201C", quote, "\u201D"));
  }
  const card = variant === "card" ? {
    background: "var(--gray-50)",
    border: "var(--border-hair)",
    borderRadius: "var(--radius-sm)",
    padding: "14px 18px"
  } : {};
  return /*#__PURE__*/React.createElement("figure", {
    className: className,
    style: {
      margin: 0,
      position: "relative",
      ...card,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: variant === "card" ? "-2px" : "-14px",
      right: variant === "card" ? "10px" : "0",
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--fw-bold)",
      fontSize: "46px",
      lineHeight: 1,
      color: "var(--brand-deep)",
      opacity: 0.4
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-quote)",
      lineHeight: "var(--lh-quote)",
      color: "var(--text-body)",
      paddingRight: "18px"
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "8px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-body-sm)",
      fontStyle: "italic",
      color: "var(--text-muted)"
    }
  }, author, role ? /*#__PURE__*/React.createElement("span", null, author ? " — " : "", role) : null));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feature/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/layout/FooterNav.jsx
try { (() => {
/**
 * FooterNav — the section page-tab navigator used in the slide footer.
 * Renders a horizontal run of numbered tabs (plus an optional appendix
 * tab); the active section expands into a navy banner showing its name.
 * Mirrors the "1 2 3 [4 · CUSTOMERS & GO-TO-MARKET] 5 6 7 A" device.
 */
function FooterNav({
  tabs,
  active,
  activeLabel = "",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: "4px",
      height: "16px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.n === active;
    if (isActive) {
      return /*#__PURE__*/React.createElement("div", {
        key: t.n,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "7px",
          background: "var(--tab-active-bg)",
          color: "var(--tab-active-text)",
          borderRadius: "var(--radius-sm)",
          padding: "0 9px",
          fontWeight: "var(--fw-bold)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "10px"
        }
      }, t.n), activeLabel ? /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "8.5px",
          letterSpacing: "var(--ls-caps-wide)",
          textTransform: "uppercase"
        }
      }, activeLabel) : null);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: t.n,
      title: t.label || "",
      style: {
        width: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--tab-idle-text)",
        fontSize: "10px",
        fontWeight: "var(--fw-semibold)"
      }
    }, t.n);
  }));
}
Object.assign(__ds_scope, { FooterNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FooterNav.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionBar.jsx
try { (() => {
/**
 * SectionBar — the cobalt banner that heads a content block on an IM slide.
 * House style: a rounded cobalt bar with a white circular "knob" inset at
 * each end, a centered white small-caps title, and an optional `trailing`
 * slot on the right for framework/icon chips (e.g. ESG / SDG tags, partner
 * logos). `variant="chevron"` swaps the knobs for the right-pointing arrow
 * end used on case-study layouts.
 */
function SectionBar({
  label,
  icon = null,
  trailing = null,
  variant = "bar",
  height = 30,
  className = "",
  style = {}
}) {
  const isChevron = variant === "chevron";
  const knobSize = height * 0.56;
  const knob = side => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      [side]: `${height * 0.22}px`,
      transform: "translateY(-50%)",
      width: knobSize,
      height: knobSize,
      borderRadius: "999px",
      background: "var(--surface-knob)"
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      position: "relative",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      padding: isChevron ? "0 26px 0 16px" : `0 ${height * 1.4}px`,
      background: "var(--surface-bar)",
      color: "var(--text-on-dark)",
      borderRadius: isChevron ? "0" : "var(--radius-md)",
      clipPath: isChevron ? "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)" : "none",
      ...style
    }
  }, !isChevron ? knob("left") : null, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      color: "var(--white)"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-section)",
      letterSpacing: "var(--ls-caps-wide)",
      textTransform: "uppercase"
    }
  }, label), trailing ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      right: `${height * 0.22 + knobSize + 8}px`,
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      gap: "4px"
    }
  }, trailing) : null, !isChevron ? knob("right") : null);
}
Object.assign(__ds_scope, { SectionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/SlideFrame.jsx
try { (() => {
/**
 * SlideFrame — the fixed 1280x720 chrome every IM slide sits in.
 * Renders the title zone (serif title + optional target logo + hairline),
 * an optional gray key-message band, the body (children), and the footer
 * chrome. Footer bottom-LEFT is the permanent ADVISOR (Kumulus) mark; footer
 * bottom-RIGHT is the swappable TARGET-company logo, which falls back to the
 * mandatory yellow placeholder when none is supplied (Plan §8).
 * `variant="divider"` renders a full-bleed section-divider instead.
 */
function SlideFrame({
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
  coverTitle = null,
  // e.g. "Project Bones – Information Memorandum"
  coverDate = null,
  // e.g. "October 2025"
  // divider ToC panel (optional): [{num, label}], plus active
  sections = null,
  activeSection = null,
  className = "",
  style = {}
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
    ...style
  };
  const Footer = /*#__PURE__*/React.createElement("div", {
    style: {
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
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.KumulusMark, {
    height: 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--fw-bold)",
      fontSize: "8.5px",
      color: "var(--text-heading)"
    }
  }, projectName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "8.5px",
      color: "var(--text-muted)"
    }
  }, confidential))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      textAlign: "center",
      fontSize: "7.5px",
      color: "var(--text-footnote)",
      paddingRight: "var(--space-6)"
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      flex: "0 0 auto"
    }
  }, sectionTabs ? /*#__PURE__*/React.createElement(__ds_scope.FooterNav, {
    tabs: sectionTabs,
    active: activeTab,
    activeLabel: activeLabel
  }) : null, showFooterTargetLogo ? /*#__PURE__*/React.createElement(__ds_scope.TargetLogo, {
    src: targetLogoSrc,
    alt: targetLogoAlt,
    variant: "footer-small"
  }) : null, pageNumber != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10px",
      color: "var(--text-muted)",
      minWidth: "12px",
      textAlign: "right"
    }
  }, pageNumber) : null));

  // ---- COVER: full-bleed deal-themed image + bottom band + dual logos ----
  if (variant === "cover") {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: frame
    }, coverImageSrc ? /*#__PURE__*/React.createElement("img", {
      src: coverImageSrc,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(120deg, var(--deal-primary-deep), var(--deal-primary) 55%, var(--deal-accent))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "152px",
        background: "rgba(244,243,240,0.92)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--slide-margin-x)",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        width: "200px",
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.TargetLogo, {
      src: targetLogoSrc,
      alt: targetLogoAlt,
      variant: "cover-large",
      height: 54
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: "var(--fw-bold)",
        fontSize: "26px",
        color: "var(--text-heading)",
        lineHeight: 1.15
      }
    }, coverTitle || title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: "13px",
        color: "var(--text-body)",
        marginTop: "8px",
        lineHeight: 1.4
      }
    }, coverDate ? /*#__PURE__*/React.createElement("div", null, coverDate) : null, /*#__PURE__*/React.createElement("div", null, confidential))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        width: "200px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.KumulusMark, {
      height: 40
    }))));
  }
  if (variant === "divider") {
    return /*#__PURE__*/React.createElement("div", {
      className: className,
      style: frame
    }, backgroundSrc ? /*#__PURE__*/React.createElement("img", {
      src: backgroundSrc,
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(12,26,58,0.86) 0%, rgba(12,26,58,0.72) 34%, rgba(12,26,58,0.12) 70%, rgba(12,26,58,0) 100%)"
      }
    }), sections ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "40px",
        top: "70px",
        background: "rgba(255,255,255,0.16)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderRadius: "14px",
        padding: "18px 26px 18px 18px",
        display: "flex",
        flexDirection: "column",
        gap: "14px"
      }
    }, sections.map((s, i) => {
      const on = String(s.num) === String(activeSection);
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: "46px",
          textAlign: "center",
          padding: "6px 0",
          borderRadius: "6px",
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-bold)",
          fontSize: "15px",
          background: on ? "var(--deal-accent)" : "rgba(120,140,175,0.6)",
          color: on ? "var(--deal-primary-deep)" : "#fff"
        }
      }, s.num), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: "var(--fw-bold)",
          fontSize: "22px",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: on ? "var(--text-heading)" : "var(--text-body)",
          opacity: on ? 1 : 0.78
        }
      }, s.label));
    })) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "var(--slide-margin-x)",
        top: "50%",
        transform: "translateY(-54%)",
        color: "var(--text-on-dark)",
        maxWidth: "640px",
        display: sections ? "none" : "block"
      }
    }, sectionNumber != null ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "120px",
        fontWeight: 300,
        lineHeight: 0.9,
        color: "var(--sky-400)",
        opacity: 0.95
      }
    }, sectionNumber) : null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--fs-page-title)",
        fontWeight: "var(--fw-regular)",
        lineHeight: "var(--lh-tight)",
        marginTop: "var(--space-3)"
      }
    }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-subtitle)",
        marginTop: "var(--space-4)",
        maxWidth: "460px",
        opacity: 0.92
      }
    }, subtitle) : null), Footer);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: frame
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: "var(--slide-margin-top) var(--slide-margin-x) calc(var(--slide-footer-h) + 14px)",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--fw-regular)",
      fontSize: "var(--fs-title)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-title)",
      color: "var(--text-heading)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-subtitle)",
      color: "var(--text-muted)",
      marginTop: "4px"
    }
  }, subtitle) : null), showTitleLogo ? /*#__PURE__*/React.createElement(__ds_scope.TargetLogo, {
    src: titleLogoSrc,
    alt: titleLogoAlt,
    variant: "header-medium",
    height: 34,
    style: {
      flex: "0 0 auto",
      marginTop: "2px"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-hair)",
      marginTop: "10px"
    }
  }), band ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-band)",
      padding: "10px 16px",
      marginTop: "12px",
      borderRadius: "var(--radius-sm)"
    }
  }, Array.isArray(band) ? /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, band.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "8px",
      alignItems: "baseline",
      fontSize: "var(--fs-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "5px",
      height: "5px",
      background: "var(--bullet)",
      flex: "0 0 auto",
      transform: "translateY(-2px)"
    }
  }), /*#__PURE__*/React.createElement("span", null, b)))) : band) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      minHeight: 0,
      marginTop: "14px"
    }
  }, children)), Footer);
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/VerticalTab.jsx
try { (() => {
/**
 * VerticalTab — the navy spine label that runs up the left edge of a
 * content block (e.g. "USPS", "LOCK-IN MECHANISMS", "SOLUTIONS").
 * White small-caps text rotated 90°.
 */
function VerticalTab({
  label,
  width = "var(--tab-width)",
  height = "100%",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width,
      height,
      flex: "0 0 auto",
      background: "var(--surface-tab)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      writingMode: "vertical-rl",
      transform: "rotate(180deg)",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--fw-bold)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-on-dark)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { VerticalTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/VerticalTab.jsx", error: String((e && e.message) || e) }); }

__ds_ns.KumulusMark = __ds_scope.KumulusMark;

__ds_ns.TargetCompanyLogoPlaceholder = __ds_scope.TargetCompanyLogoPlaceholder;

__ds_ns.TargetLogo = __ds_scope.TargetLogo;

__ds_ns.ThirdPartyLogoPlaceholder = __ds_scope.ThirdPartyLogoPlaceholder;

__ds_ns.CagrPill = __ds_scope.CagrPill;

__ds_ns.MarginCapsule = __ds_scope.MarginCapsule;

__ds_ns.RefChip = __ds_scope.RefChip;

__ds_ns.ColumnChart = __ds_scope.ColumnChart;

__ds_ns.Donut = __ds_scope.Donut;

__ds_ns.BarRow = __ds_scope.BarRow;

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.ColumnHeading = __ds_scope.ColumnHeading;

__ds_ns.KeyMessageBand = __ds_scope.KeyMessageBand;

__ds_ns.KpiCell = __ds_scope.KpiCell;

__ds_ns.KpiTable = __ds_scope.KpiTable;

__ds_ns.PanelHeader = __ds_scope.PanelHeader;

__ds_ns.ValueCapsule = __ds_scope.ValueCapsule;

__ds_ns.HarveyBall = __ds_scope.HarveyBall;

__ds_ns.ComparisonMatrix = __ds_scope.ComparisonMatrix;

__ds_ns.FinancialTable = __ds_scope.FinancialTable;

__ds_ns.ProcessFlow = __ds_scope.ProcessFlow;

__ds_ns.Pyramid = __ds_scope.Pyramid;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.ArrowConnector = __ds_scope.ArrowConnector;

__ds_ns.NumberedHighlight = __ds_scope.NumberedHighlight;

__ds_ns.ProcessSteps = __ds_scope.ProcessSteps;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.FooterNav = __ds_scope.FooterNav;

__ds_ns.SectionBar = __ds_scope.SectionBar;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.VerticalTab = __ds_scope.VerticalTab;

})();
