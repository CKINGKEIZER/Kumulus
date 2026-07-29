# Skeleton index — intent → template → skeleton → facts

The routing map for building a slide. Classify the request by MEANING (see
`selection-rules.md` + `taxonomy.json`), find the row, then render the named
skeleton from `components/structures/*` **inside a `<SlideFrame>`**, filling its
slots. Full props/example for each skeleton are in its `.prompt.md` next to the
`.jsx`. Every skeleton is exposed on the runtime bundle
(`window.KumulusPartnersDesignSystem_533273`).

| Ask it when… | Template | Skeleton (`components/structures/`) | Required facts | Slots (→ primitive) | Real exemplar |
|---|---|---|---|---|---|
| First page of any IM/pitch. | `T-COVER` | `SlideFrame` | projectName, date | cover→FRAME-COVER | LTP-001 |
| Opening a section; frosted ToC panel style for major | `T-DIVIDER` | `SlideFrame` | sectionNumber|sections, sectionTitle | divider→FRAME-DIVIDER | LTP-050, TOR-62, TOR-74 |
| Second slide / company snapshot: 'company overview', | `T-AT-A-GLANCE` | `CompanyAtAGlance` | kpis[5-6], revenueSeries, businessMix | kpis→KPI-TILE-GRID · narrative→NARRATIVE-BULLETS · financial→CHART-STACKED-COLUMN · dashboard→DASHBOARD-MULTIGRAPH | BON-05, TOR-06 |
| 'history', 'timeline', 'key milestones', 'company jo | `T-TIMELINE` | `CompanyTimeline` | events[] | timeline→TIMELINE-AXIS | LTP-095, BON-06 |
| 'investment highlights', 'why invest', 'key strength | `T-INVEST-HIGHLIGHTS` | `InvestmentHighlights` | highlights[4-7]{title,bullets,visual} | highlights→NARRATIVE-BADGE-ROWS · photo→MEDIA-PHOTO-PANEL | BON-08, LTP-012, LTP-013 |
| 'market size', 'TAM/SAM', 'market growth', 'addressa | `T-MARKET-SIZE` | `MarketSizing` | marketSeries|tiers, commentary[] | sizing→DIAGRAM-FUNNEL · commentary→NARRATIVE-BULLETS | LTP-153, LTP-055, LTP-12 |
| 'market trends', 'growth drivers', 'demand drivers', | `T-MARKET-DRIVERS` | `TrendImpact` | drivers[3-6]{heading,evidence} | trends→TABLE-COLUMN-DESC | LTP-065, TOR-16, LTP-052 |
| 'competitors', 'competitive landscape', 'positioning | `T-COMPETITION` | `CompetitionMatrix` | players[], dimensions[] | landscape→MATRIX-2X2 · profile→PANEL-GREY-HEADER | BON-20, LTP-060, LTP-070 |
| 'products', 'services', 'offering', 'portfolio', 'wh | `T-OFFERING` | `BusinessModelService` | categories[]{name,detail} | offering→DIAGRAM-TREE · streams→TABLE-COLUMN-DESC | TOR-25, LTP-078 |
| 'business model', 'how they make money', 'revenue mo | `T-BUSINESS-MODEL` | `BusinessModelService` | modelSteps|revenueStreams, commentary[] | offering→DIAGRAM-TREE · streams→TABLE-COLUMN-DESC | TOR-25, LTP-078 |
| 'operations', 'value chain', 'process', 'logistics', | `T-VALUE-CHAIN` | `ValueChain` | stages[] | stages→PROCESS-CHEVRON · insight→NARRATIVE-BULLETS | TOR-33, BON-15 |
| 'customers', 'customer base', 'concentration', 'clie | `T-CUSTOMERS` | `CustomerConcentration` | customerMix, concentrationCurve|topCustomers | curve→CHART-PARETO-CURVE · cohort→TABLE-NUMBERED-COMMENTARY | TOR-42 |
| 'management', 'team', 'org chart', 'organization', ' | `T-ORG` | `ManagementProfiles` | people[]|orgNodes[] | intro→PANEL-GREY-HEADER · profiles→CARD-GRID | TOR-46, LTP-130 |
| 'strategy', 'growth strategy', 'strategic pillars',  | `T-STRATEGY` | `HighlightHub` | pillars[3-5]{name,initiatives} | hub→DIAGRAM-HUB-SPOKE · spokes→NARRATIVE-BADGE-ROWS | TOR-08, LTP-025 |
| 'roadmap', 'implementation plan', 'phasing', 'next s | `T-ROADMAP` | `ProcessChevronDetail` | phases[], milestones[] | steps→PROCESS-CHEVRON · detail→NARRATIVE-BULLETS | LTP-026, LTP-080 |
| 'M&A', 'buy-and-build', 'acquisition strategy', 'tar | `T-MA` | `AcqTargetScan` | targets[]|criteria[] | table→TABLE-COLUMN-DESC · positioning→PANEL-GREY-HEADER | LTP-068, LTP-069, LTP-06 |
| 'revenue', 'EBITDA', 'financial overview', 'growth', | `T-FINANCIAL-OVERVIEW` | `KpiChartRail` | series[], commentary[] | rail→CHART-COLUMN-CAGR · panel→PANEL-GREY-HEADER | LTP-043, TOR-36 |
| 'P&L', 'income statement', 'balance sheet', 'cash fl | `T-FINANCIAL-STATEMENT` | `FinancialStatement` | columns[], rows[] | table→TABLE-FIN-YEAR · commentary→TABLE-NUMBERED-COMMENTARY | TOR-64, TOR-66, TOR-69,  |
| 'case study', 'reference', 'client story', 'proof po | `T-CASE-STUDY` | `ProcessChevronDetail` | context, approach, result | steps→PROCESS-CHEVRON · detail→NARRATIVE-BULLETS | LTP-026, LTP-080 |
| 'appendix', 'detailed', 'backup', 'supporting data'. | `T-APPENDIX-TABLE` | `CriteriaBenchmark` | tableData | table→TABLE-COLUMN-DESC · positioning→PANEL-GREY-HEADER | LTP-068, LTP-069, LTP-06 |
