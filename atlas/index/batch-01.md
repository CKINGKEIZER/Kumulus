# Batch 1 index — LTP-001 … LTP-010 (long template)

Full-resolution look at each slide → canvas usage + building blocks present.
Blocks are defined once in `building-blocks.json` (with copy recipes); here we
record which slide uses which, and how the content region is divided.

| # | id | slide | content-grid usage | blocks |
|---|----|-------|--------------------|--------|
| 1 | LTP-001 | Cover | full-bleed image + bottom band | (chrome) cover band, BLK-COMPANY-LOGO-YELLOW, KumulusMark |
| 2 | LTP-002 | Executive-summary intro | title + agenda list | (chrome) contents rows |
| 3 | LTP-003 | Important notice | 1–2 dense text columns (7pt legal) | (chrome) notice text |
| 4 | LTP-004 | Section divider | oversized number + section title; footer tab expands | (chrome) divider |
| 5 | LTP-005 | **Company at a glance** | left 4/12 = BLK-KPI-TILE-GRID; mid + right = two charts; full-width lower band = BLK-DASHBOARD-PANEL | BLK-KPI-TILE-GRID, BLK-BARCHART-CAGR, BLK-COMBO-BAR-LINE, BLK-DASHBOARD-PANEL, BLK-DONUT-LABELLED×2, BLK-STACKED-AREA-SHARE, BLK-PAGE-TAB-NAV, BLK-COMPANY-LOGO-YELLOW |
| 6 | LTP-006 | **Business-unit split** | BLK-MATRIX-ROW-LAYOUT (row-labels + 3 cols) under BLK-HERO-TRIANGLE; bottom grey band | BLK-MATRIX-ROW-LAYOUT, BLK-HERO-TRIANGLE, BLK-BARCHART-CAGR×3, BLK-KPI-INLINE-TRIPLET×3, BLK-LOGO-PLACEHOLDER×3 |
| 7 | LTP-007 | **Revenue composition / bridge** | top full-width grey panel = BLK-BRIDGE-DONUT-PROGRESSION; below = 3 BLK-CATEGORY-HEADER-BAR each over BLK-HARVEYBALL-RATING-ROW + value columns | BLK-BRIDGE-DONUT-PROGRESSION, BLK-CATEGORY-HEADER-BAR×3, BLK-HARVEYBALL-RATING-ROW, BLK-DONUT-LABELLED |
| 8 | LTP-008 | **Story + vertical timeline** | left half = 3× BLK-PHOTO-CARD-ROW (with BLK-CHEVRON-PROCESS); right half = BLK-VERTICAL-PHOTO-TIMELINE | BLK-PHOTO-CARD-ROW×3, BLK-CHEVRON-PROCESS, BLK-VERTICAL-PHOTO-TIMELINE, BLK-COMPANY-LOGO-YELLOW |
| 9 | LTP-009 | **Buy-and-build revenue evolution** | full region = BLK-MA-REVENUE-EVOLUTION (column chart + acq. bubbles + 3 tracker rows) | BLK-MA-REVENUE-EVOLUTION, BLK-BARCHART-CAGR, BLK-PAGE-TAB-NAV |
| 10 | LTP-010 | **Central arrow timeline** | full region = BLK-CENTRAL-ARROW-TIMELINE (dual-sided) | BLK-CENTRAL-ARROW-TIMELINE, BLK-COMPANY-LOGO-YELLOW×4 |

## Blocks introduced this batch (20)
KPI-TILE-GRID · BARCHART-CAGR · COMBO-BAR-LINE · DASHBOARD-PANEL ·
DONUT-LABELLED · STACKED-AREA-SHARE · MATRIX-ROW-LAYOUT · HERO-TRIANGLE ·
KPI-INLINE-TRIPLET · LOGO-PLACEHOLDER · BRIDGE-DONUT-PROGRESSION ·
HARVEYBALL-RATING-ROW · CATEGORY-HEADER-BAR · MA-REVENUE-EVOLUTION ·
CENTRAL-ARROW-TIMELINE · VERTICAL-PHOTO-TIMELINE · PHOTO-CARD-ROW ·
CHEVRON-PROCESS · PAGE-TAB-NAV · COMPANY-LOGO-YELLOW

## Findings / corrections for the build phase
1. **Company-logo placeholder is SOLID yellow with a RED 1px border** (not dashed).
   Our `TargetCompanyLogoPlaceholder` currently uses a dashed border — fix to
   match: solid `#ffd400`-ish fill, `1px solid red`, navy caps "COMPANY LOGO".
2. **Title zone** on content slides is a faint grey band at the very top with the
   title in `[x]` brackets top-left — confirm exact band height in Phase A.
3. These slides are **edge-to-edge dense**: every one tiles the full content
   region with 4–8 coordinated blocks. That density is the standard to hit.
4. **Forecast/budget bars are hatched** (FY25B), actuals solid — a consistent
   house convention across LTP-005/006/009.
5. Charts carry **rotated left axis labels** ("LFL (€m)", "REVENUE (€M)").
