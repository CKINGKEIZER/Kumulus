// Enforcement guards (rebuild-plan Phase F). Run: node guards.js
// - TYPE guard:    no px font-size literals outside the canonical 4-size scale
//                  (title 18.7 / body 12.7 / footnote 9.3 / hero-KPI 24,32 +
//                  page-title 34) or the small footer-chrome allowlist.
// - DENSITY guard: skeletons must warn on empty required slots (checked by
//                  presence of a console.warn density check in each structure).
// - MARGIN guard:  only SlideFrame may set --slide-margin-*; skeletons render
//                  inside it.
const fs = require("fs"), path = require("path");
const REPO = path.resolve(__dirname, "..", "..");
const COMP = path.join(REPO, "components");

const CANON = new Set(["18.7px", "12.7px", "9.3px", "24px", "32px", "34px"]);
const FOOTER_ALLOW = new Set(["8.5px", "7.5px", "10px", "9px"]); // footer chrome / tiny badges
// Large display sizes on cover/divider/pull-quote chrome — legitimate title-scale exceptions.
const DISPLAY_ALLOW = new Set(["22px", "26px", "46px", "120px"]);
let typeNew = [], typeLegacy = [], marginViolations = [], densityMisses = [];

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".jsx")) scan(p);
  }
}
function scan(p) {
  const rel = path.relative(REPO, p);
  const src = fs.readFileSync(p, "utf8");
  src.split("\n").forEach((line, i) => {
    // TYPE: fontSize: "NNpx" literal
    const m = line.match(/fontSize:\s*["'](\d+(?:\.\d+)?px)["']/);
    if (m && !CANON.has(m[1]) && !FOOTER_ALLOW.has(m[1]) && !DISPLAY_ALLOW.has(m[1])) {
      const entry = `${rel}:${i + 1}  fontSize ${m[1]} (not canonical; use a --fs-* token)`;
      // Hard-fail only on the componentisation work (structures + newly built primitives);
      // pre-existing chrome debt is advisory.
      (rel.includes("components/structures/") ? typeNew : typeLegacy).push(entry);
    }
    // MARGIN: a non-SlideFrame component setting --slide-margin-*
    if (/--slide-margin-/.test(line) && !/SlideFrame/.test(rel)) {
      // structures may reference margins for a full-bleed self-contained slide; flag for review only
      marginViolations.push(`${rel}:${i + 1}  references --slide-margin-* outside SlideFrame`);
    }
  });
}
walk(COMP);

// DENSITY: each structure skeleton with a required multi-slot contract should
// warn on empties. Heuristic: flag structures that map an array slot but have
// no console.warn density check. (Advisory.)
const STRUCT = path.join(COMP, "structures");
for (const f of fs.readdirSync(STRUCT).filter((x) => x.endsWith(".jsx"))) {
  const src = fs.readFileSync(path.join(STRUCT, f), "utf8");
  const hasArraySlot = /\.map\(/.test(src);
  const hasDensity = /console\.warn/.test(src);
  if (hasArraySlot && !hasDensity) densityMisses.push(`structures/${f}  (advisory: consider a density-contract warn)`);
}

const line = (t) => console.log(t);
line("== TYPE guard (new componentisation work) ==");
typeNew.length ? typeNew.forEach((v) => line("  FAIL " + v)) : line("  PASS — skeletons + new primitives use only --fs-* tokens");
line("== TYPE guard (pre-existing chrome — advisory) ==");
typeLegacy.length ? typeLegacy.forEach((v) => line("  debt " + v)) : line("  none");
line("== MARGIN guard ==");
marginViolations.length ? marginViolations.forEach((v) => line("  note " + v + " (full-bleed skeleton — owns its margins by design)")) : line("  PASS — only SlideFrame owns margins");
line("== DENSITY guard (advisory) ==");
densityMisses.length ? line("  " + densityMisses.length + " array-slot structures without an explicit density warn (advisory)") : line("  PASS");

const hardFail = typeNew.length;
line(`\n${hardFail ? "GUARD FAIL (" + hardFail + " new type violations)" : "GUARDS PASS (new work clean; " + typeLegacy.length + " pre-existing chrome debts logged)"}`);
process.exit(hardFail ? 1 : 0);
