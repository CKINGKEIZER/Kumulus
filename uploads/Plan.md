# Kumulus IM Design System Rebuild Plan

## 1. Objective

Create an industry-neutral design system for Kumulus Partners sell-side Information Memoranda that allows an AI to:

1. Ingest one or more PDFs containing company, market, operational, strategic, or financial information.
2. Extract relevant facts and retain page-level source traceability.
3. Understand the requested slide objective.
4. Rewrite raw source material into persuasive, evidence-based sell-side language.
5. Select an appropriate semantic slide structure from a broad, clearly labelled library.
6. Populate the selected structure without breaking the layout.
7. Produce slides that resemble actual Kumulus IM work rather than generic consulting slides.
8. Explain which source slides and design patterns informed each template.
9. Replace target-company branding quickly without affecting Kumulus branding.
10. Work across unrelated industries without carrying over assumptions from Dynamate or Project Spark.

The system must become a **decision system**, not merely a component collection.

---

## 2. Core architectural principles

### 2.1 Separate permanent and transaction-specific layers

| Layer | Permanent | Changes per transaction |
|---|---|---|
| Kumulus identity | Kumulus logo, typography, footer structure, house colours | No |
| IM conventions | Confidentiality language, source handling, slide hierarchy, financial notation | Limited |
| Target-company identity | Company name, logo, colours, images, terminology | Yes |
| Company content | Products, customers, markets, strategy, financials | Yes |
| Industry logic | KPIs, terminology, market drivers, business-model framing | Yes |
| Slide structure | Selected from the design-system library | Yes |

Dynamate must be retained only as an example project:

```text
/examples/project-spark-dynamate/
```

It must not supply defaults to production components, templates, schemas, or writing logic.

### 2.2 Separate semantic purpose from visual geometry

The system should distinguish between:

- What the slide is trying to communicate.
- What evidence is available.
- What information structure is required.
- How the slide is arranged visually.
- Which canvas geometry is used.

The source decks include different aspect ratios:

- Presentation long template: 16:9
- Project Bones: 4:3
- Project Torino: 4:3

The architecture should support semantic templates independently from canvas geometry. The initial implementation can prioritize 16:9, but the system should permit future 4:3 variants without rewriting the semantic layer.

### 2.3 Build four levels of abstraction

| Layer | Purpose |
|---|---|
| Foundation | Colours, typography, spacing, lines, shadows, aspect ratios |
| Building block | KPI, chart, table, timeline segment, logo cell, description card |
| Layout pattern | Three-column comparison, two-panel analysis, bridge plus commentary |
| Semantic template | Customer concentration, company at a glance, transaction scope |

A semantic template should define the slide's required meaning, not only its visual arrangement.

---

## 3. Diagnosis of the current system

### 3.1 The reference sample is too narrow

The current system was mainly reverse-engineered from a small number of Project Spark pages and expanded into a limited set of broad archetypes.

Categories such as "market analysis" are too broad. Market slides can include:

- Market-size chart with drivers
- Market segmentation tree
- Regulatory comparison
- Market trend cards
- Demand-driver framework
- Competitive matrix
- Barriers-to-entry framework
- Geographic market map
- Market-share development
- End-market exposure analysis
- Value-chain positioning
- Consolidation overview

These require distinct semantic templates and routing rules.

### 3.2 The component library is too small

The existing system lacks structured components for:

- Timelines
- Financial bridges
- Waterfalls
- Maps
- Organizational charts
- Product portfolio matrices
- Logo grids
- Market segmentation
- Competitive positioning
- Customer concentration
- Cohort and churn analysis
- Value chains
- Revenue models
- M&A target profiles
- Financial statements
- Business-plan assumptions
- Strategy roadmaps
- Installed-base models
- Transaction structures

### 3.3 Project Spark and Dynamate are hard-coded

The current system embeds assumptions such as:

- Project Spark as the default project
- Dynamate as the target company
- IT services as the implied industry
- Dynamate-specific colours and assets
- IT-specific business units and terminology
- Managed-services and recurring-revenue assumptions

All project-specific assumptions must be removed from the production design system.

### 3.4 The system does not tell the AI when not to use a template

Every semantic template needs:

- Use cases
- Exclusion cases
- Required inputs
- Optional inputs
- Minimum and maximum content
- Fallback templates
- Overflow behaviour

Example:

> Use this template when presenting three distinct business units with separate revenue, margins, headcount, and descriptions.

> Do not use this template for three strategic initiatives without independent financial metrics. Use a three-pillar strategy template instead.

---

## 4. How the source decks should be used

### 4.1 Presentation long template

This should be the **primary source for structural breadth**.

Use it for:

- Finding layout variants
- Identifying reusable block combinations
- Establishing the initial 16:9 geometry
- Building the first slide atlas
- Identifying structures absent from completed IMs

Do not treat every slide as a finished template. Many pages will be duplicates, experimental variants, or deal-specific constructions.

### 4.2 Project Bones

This should be the **primary source for modern execution quality**.

Use it for:

- Typography hierarchy
- Current spacing and density
- Modern chart presentation
- Evidence-backed investment highlights
- Product and market visualizations
- Current footer and navigation behaviour
- Preferred recent Kumulus styling

### 4.3 Project Torino

This should be the **primary source for dense and technical edge cases**.

Use it for:

- High-density layouts
- Technical product explanations
- Multi-step operating models
- Installed-base and recurring-revenue analysis
- Complex timelines
- Financial appendix structures
- Transaction and ownership diagrams
- Detailed business-plan pages

### 4.4 Existing Project Spark system

Retain it only as:

- Initial React scaffolding
- Initial token structure
- Basic footer and title components
- A first implementation of selected small building blocks

Do not preserve the existing archetype taxonomy as the final structure.

---

## 5. Required end-state deliverables

### 5.1 Complete slide atlas

Every source slide should have an entry, even when it is not promoted to a reusable template.

Each atlas entry should include:

| Field | Example |
|---|---|
| Atlas ID | `MKT-REG-03` |
| Source deck | Project Bones |
| Source slide | 18 |
| Slide title | European legislation is driven by MDR |
| Family | Market dynamics |
| Subfamily | Regulation |
| Structure | Three-jurisdiction comparison plus implication rail |
| Primary use | Compare regulatory frameworks across markets |
| Secondary uses | Tax regimes, labour rules, reimbursement systems |
| Do not use for | Generic market trends |
| Required inputs | Two to three jurisdictions and two comparison dimensions |
| Optional inputs | Company implications and source notes |
| Density | High |
| Charts | None |
| Images | Optional |
| Aspect ratio | 4:3 source |
| Canonical status | Canonical, supporting, or rejected |
| Related templates | `MKT-REG-01`, `MKT-REG-02` |
| Building blocks | Comparison columns, regulation cards, implication ribbon |
| Preview | Slide thumbnail |

Every slide belongs in the atlas. Not every slide belongs in the production template library.

### 5.2 Canonical semantic template library

Expected scale after the audit:

- Approximately 60 to 90 semantic templates
- Approximately 100 to 150 layout variants
- Approximately 50 to 70 reusable building blocks
- Approximately 20 to 30 chart and table constructions

These ranges are planning assumptions, not fixed targets.

### 5.3 Building-block catalogue

Each building block requires:

- Visual preview
- Name and identifier
- Use cases
- Configuration options
- Minimum and maximum content
- Responsive behaviour
- Compatible parent layouts
- Incompatible combinations
- Source examples
- Overflow behaviour
- Placeholder rules

### 5.4 AI routing manual

```text
User intent
    ↓
Slide family
    ↓
Semantic subfamily
    ↓
Evidence available
    ↓
Data shape
    ↓
Density
    ↓
Recommended template
    ↓
Fallback template
```

### 5.5 Searchable template browser

Required filters:

- Section
- Slide purpose
- Number of columns
- Number of items
- Chart type
- Data intensity
- Image intensity
- Financial, commercial, or operational
- 16:9 or 4:3
- Company overview, market, customers, strategy, or finance
- Canonical, alternative, or experimental
- Source deck

---

## 6. Initial slide-family map

| Family | Subfamilies |
|---|---|
| Document chrome | Cover, disclaimer, contents, section divider, subsection divider, end page |
| Company at a glance | KPI strip, business mix, geographic mix, revenue profile, short description |
| Company history | Linear timeline, multi-lane timeline, acquisition timeline, product-launch timeline |
| Investment highlights | Numbered highlights, two-page highlights, highlights with charts, highlights with proof points |
| Transaction overview | Scope, ownership tree, transaction financials, adviser contact, perimeter |
| Market sizing | Market size, segment growth, regional comparison, procedure volumes, penetration |
| Market structure | Value chain, distributor role, stakeholder map, ecosystem, channel structure |
| Market drivers | Trends, regulation, demographics, consolidation, technology, spending |
| Competitive positioning | 2x2 matrix, competitor spectrum, barriers to entry, differentiation table |
| Product and service offering | Product categories, service lines, technical specifications, offering wheel, product cards |
| Business model | Revenue model, recurring model, commercial model, installed base, unit economics |
| Value chain and operations | Procurement, warehouse, logistics, service delivery, process flow, IT systems |
| Geographic presence | Location map, service network, office footprint, regional responsibility |
| Customers | Concentration, churn, retention, segmentation, cohorts, customer journey, logos |
| Organization | Management, organization chart, department split, FTE development, tenure, culture |
| Strategy | Strategic pillars, initiatives, roadmap, business-plan drivers, implementation status |
| M&A | Acquisition strategy, target criteria, target universe, target profiles, integration roadmap |
| Financial overview | Revenue, EBITDA, margins, recurring revenue, cash generation, NWC, capex |
| Financial statements | P&L, balance sheet, cash flow, NFD, adjustments, business plan |
| Appendix | Sources, glossary, assumptions, detailed products, abbreviations |

---

## 7. Required building-block families

### 7.1 Document chrome

- Standard title row
- Takeaway title row
- Subtitle row
- Source and footnote line
- Footer
- Page navigator
- Section navigator
- Confidentiality line
- Kumulus logo
- Target-company logo placeholder
- Chapter divider
- Subchapter divider

### 7.2 Text and narrative blocks

- Standard bullet list
- Numbered argument
- Claim and evidence pair
- Short description card
- Long description card
- Key-message ribbon
- Callout capsule
- Pull quote
- Source note
- Definition box
- Implication box
- Page reference

### 7.3 KPI and metric blocks

- Single KPI
- KPI strip
- KPI with icon
- KPI with trend
- KPI with benchmark
- KPI with mini-chart
- Revenue and margin pair
- Actual and forecast comparison
- CAGR badge
- Percentage split
- Headcount indicator

### 7.4 Structural diagrams

- Horizontal process
- Vertical process
- Value chain
- Circular model
- Flywheel
- Funnel
- Pyramid
- Maturity ladder
- Timeline
- Multi-lane timeline
- Roadmap
- Product lifecycle
- Cause-and-effect chain
- Ownership tree
- Organization chart
- Transaction perimeter
- Geographic network

### 7.5 Commercial analysis blocks

- Customer concentration
- Customer segmentation
- Retention and churn
- Cohort chart
- Revenue by customer
- Customer logos
- Contract-tenure distribution
- Cross-sell matrix
- Customer journey
- Sales funnel
- Win/loss analysis
- Pipeline development
- Route-to-market diagram

### 7.6 Market and competition blocks

- Market-size chart
- Market-growth chart
- Market segmentation
- Market drivers
- Trend cards
- Regulation comparison
- 2x2 matrix
- Competitive spectrum
- Competitor profile
- Barriers-to-entry cards
- Market-share chart
- Ecosystem map
- Stakeholder map

### 7.7 Financial blocks

- Income statement
- Balance sheet
- Cash-flow statement
- Net debt table
- EBITDA adjustment table
- Revenue bridge
- EBITDA bridge
- Waterfall
- Margin development
- Actual versus budget
- Historical versus forecast
- Business-plan assumptions
- NWC development
- Capex development
- Cash conversion
- Sensitivity matrix

### 7.8 M&A blocks

- Target-selection criteria
- Target-universe map
- Target card
- Target comparison table
- M&A roadmap
- Acquisition funnel
- Buy-and-build rationale
- Integration plan
- Synergy framework
- Geographic white-space analysis

---

## 8. Target-company logo policy

The Kumulus logo remains the actual Kumulus logo.

Every target-company logo position should use a standardized yellow placeholder until a target logo is supplied.

### 8.1 Required placeholder component

```text
Component: TargetCompanyLogoPlaceholder
Fill: #FFD966
Border: #B38F00, 1 px dashed
Label: TARGET COMPANY LOGO
Text: dark grey, centred, uppercase
```

### 8.2 Required variants

| Variant | Use |
|---|---|
| `cover-large` | Main cover branding |
| `header-medium` | Slide-title or upper-corner branding |
| `footer-small` | Persistent footer logo |
| `diagram-node` | Ownership structure or transaction diagram |

### 8.3 Behaviour

- The placeholder must appear when no logo has been supplied.
- It may not collapse or disappear.
- Uploading a logo replaces the placeholder without changing dimensions.
- The logo uses contain-fit rather than crop-fit.
- The target logo must never be confused with the Kumulus logo.
- Client colours may not automatically overwrite Kumulus chrome.
- External supplier and customer logos should use a separate neutral placeholder type.

Replace ambiguous names such as `clientLogoSrc` and `brandLogoSrc` with:

```text
advisorLogo
targetCompanyLogo
thirdPartyLogo
```

---

## 9. Industry-neutral transaction model

The system should create a new `DealProfile` for every assignment.

```json
{
  "projectName": "Project [x]",
  "companyName": "[Target company]",
  "industry": null,
  "subsector": null,
  "businessDescription": null,
  "headquarters": null,
  "geographies": [],
  "businessUnits": [],
  "productsAndServices": [],
  "customerTypes": [],
  "revenueModels": [],
  "operatingAssets": [],
  "keyMetrics": {},
  "historicalFinancials": {},
  "businessPlan": {},
  "investmentHighlights": [],
  "risksAndQualifications": [],
  "sources": []
}
```

The model must work for:

- Industrial manufacturing
- Healthcare distribution
- Software
- Business services
- Logistics
- Consumer products
- Construction
- Food production
- Engineering
- Energy
- Professional services
- Infrastructure
- Other industries

The system should infer the relevant business model and terminology from uploaded material.

---

## 10. PDF ingestion as a first-class system

Users should be able to upload one or more PDFs containing information relevant to a slide, even when:

- The PDF concerns another industry.
- The PDF is not a Kumulus document.
- The PDF is a management presentation.
- The PDF is a commercial brochure.
- The PDF is an annual report.
- The PDF is a market report.
- The PDF contains more information than fits on one slide.
- The requested slide requires combining information from several pages.

The system must convert source documents into slide-ready content rather than requiring prewritten bullets.

### 10.1 Stage 1: Document understanding

Identify:

- Document type
- Company
- Industry and subsector
- Reporting period
- Relevant pages
- Tables
- Charts
- Images
- Financial values
- Operational KPIs
- Products and services
- Customers
- Markets
- Strategic initiatives
- Management statements
- Source reliability

### 10.2 Stage 2: Evidence extraction

```json
{
  "fact": "The company operates five distribution centres",
  "sourceDocument": "Management presentation.pdf",
  "page": 17,
  "sourceText": "...",
  "factType": "operational",
  "period": "FY2025",
  "confidence": "high",
  "directOrDerived": "direct"
}
```

### 10.3 Stage 3: Slide-intent interpretation

Examples:

- Make a company-at-a-glance slide.
- Explain the revenue model.
- Show why customer relationships are sticky.
- Build a market-trends slide.
- Present the operational footprint.
- Show historical financial performance.
- Turn these facts into an investment highlight.
- Explain the product offering.

### 10.4 Stage 4: Relevant-content selection

Classify extracted information as:

- Core evidence
- Supporting evidence
- Optional detail
- Irrelevant to the requested slide
- Potentially contradictory
- Insufficiently supported

### 10.5 Stage 5: Sell-side narrative construction

Generate:

- Slide title
- Subtitle or takeaway
- Section headings
- Main bullets
- Supporting bullets
- KPI labels
- Chart annotations
- Callouts
- Footnotes

### 10.6 Stage 6: Template selection

Select the semantic template only after understanding the available evidence and intended message.

### 10.7 Stage 7: Source traceability

```json
{
  "elementId": "investment-highlight-2",
  "generatedText": "Long-standing OEM relationships provide privileged access to innovative medical technologies",
  "supportedBy": [
    {
      "document": "Company presentation.pdf",
      "page": 24
    },
    {
      "document": "Supplier overview.pdf",
      "page": 8
    }
  ]
}
```

Citations do not need to appear visibly on every final slide, but page-level traceability must remain available for review.

---

## 11. Sell-side writing engine

The writing system must support evidence-based persuasive language and avoid repetitive formulaic bullets.

It should handle:

- Direct company description
- Claim followed by operating evidence
- Cause-and-effect statements
- Capability followed by strategic implication
- Metric followed by interpretation
- Historic achievement followed by future opportunity
- Market trend followed by company relevance
- Product characteristic followed by revenue implication
- Strategic initiative followed by business-plan impact
- Comparative positioning
- Qualified promotional language

The objective is not neutral corporate writing. It is **evidence-based persuasive sell-side writing**.

### 11.1 Persuasive, but controlled

Permitted terms include:

- Excellent
- Attractive
- Leading
- Strong
- Highly experienced
- Resilient
- Differentiated
- Premium
- Compelling
- Well-positioned
- Best-in-class
- Established
- Proven
- Scalable
- Agile
- Loyal
- Diversified
- Recurring
- High-margin
- Specialized

Adjectives should have a clear basis.

| Claim | Appropriate evidence |
|---|---|
| Leading | Ranking, market share, scale, recognized position |
| Experienced | Tenure, years in sector, track record |
| Loyal customers | Retention, tenure, repeat sales, churn |
| Diversified | Revenue distribution by customer, product, geography, or sector |
| High-margin | Reported margin data or relative product economics |
| Recurring | Contract structure, consumable usage, installed base, or repeat purchases |
| Best-in-class | Strong external or comparative evidence |
| Resilient | Historical stability, defensive market exposure, recurring demand |
| Scalable | Capacity, systems, operating leverage, or expansion model |
| Attractive | Several substantiated investment characteristics |

### 11.2 Sentence families

#### Direct declarative

> The company distributes specialized medical devices across Belgium and the Netherlands.

#### Attribute plus evidence

> A loyal customer base is reflected in low historical churn and relationships extending beyond 20 years.

#### Evidence plus implication

> Consumables account for 78% of revenue, creating a recurring and predictable sales base.

#### Cause and effect

> Growing regulatory complexity increases demand for specialized product knowledge and local compliance support.

#### Capability plus outcome

> Manufacturer-trained service engineers provide certified maintenance and reinforce long-term customer relationships.

#### Positioning statement

> The company combines specialist product knowledge with the flexibility of an independent distributor.

#### Comparative statement

> Unlike generalist distributors, the company focuses on high-margin niches requiring specialized commercial and technical expertise.

#### Historic development

> Successive expansion into adjacent specializations has transformed the business into a diversified platform.

#### Future opportunity

> Further geographic expansion offers a clear route to replicate the established model in adjacent markets.

#### Initiative-led construction

> Expand maintenance coverage by systematically mapping and activating the installed base.

#### Market trend plus company relevance

> Tighter product regulation favours distributors with established quality systems and local regulatory expertise.

#### Contrast and qualification

> While capital equipment generates less frequent purchases, maintenance and consumable usage create recurring revenue throughout the installed lifetime.

#### Metric-led statement

> More than 450 recurring customers provide a broad base for continued cross-selling.

#### Two-part sell-side bullet

> Long-standing and often exclusive supplier partnerships provide access to premium technologies, while the company's local market knowledge supports effective commercialisation.

#### Compact label-style statement

- High recurring consumables exposure
- Long-standing supplier relationships
- Scalable operating backbone
- Diversified specialist product portfolio
- Proven ability to enter adjacent niches

---

## 12. Bullet hierarchy

### Level 1: Slide takeaway

A complete, assertive sentence.

> A broad consumables portfolio, specialist market focus, and value-added services support an attractive and resilient financial profile.

### Level 2: Section heading

Short and argumentative.

> Long-standing customer relationships

### Level 3: Main bullet

One complete sentence conveying one argument.

> The company has established long-term partnerships with leading international suppliers across several specialist fields.

### Level 4: Supporting bullet

Adds evidence, explanation, or qualification.

> Several supplier relationships are exclusive and have been in place for more than ten years.

The system must not write every text element as a full paragraph.

---

## 13. Slide-title grammar

Slide titles may be:

| Mode | Example |
|---|---|
| Topic | Customer base |
| Descriptive | Diversified customer portfolio |
| Takeaway | Long-standing customer relationships translate into high retention |
| Strategic | Existing customer relationships provide a strong platform for cross-selling |
| Financial | Attractive margin development supported by favourable product mix |
| Market | Structural market trends continue to support demand |

The title mode should depend on the slide's role in the story.

---

## 14. Writing variation controls

The system should flag excessive repetition of:

- Driven by
- Supported by
- Underpinned by
- Benefits from
- Provides
- Enables
- Strong
- Attractive
- Leading
- Significant
- Clear
- Highly
- Platform

These words are not prohibited. The system should prevent mechanical repetition across adjacent slides.

### Example

Avoid:

> Revenue growth is driven by increased sales.

> Margin expansion is driven by improved product mix.

> Recurring revenue is driven by the installed base.

Prefer:

> Revenue growth reflects continued penetration of existing accounts and expansion into adjacent markets.

> A favourable shift toward proprietary products supports further margin expansion.

> The growing installed base generates recurring maintenance, upgrade, and replacement revenue.

---

## 15. Adjective governance

### Class A: Generally safe with basic factual support

- Established
- Experienced
- Diversified
- Recurring
- Specialized
- International
- Integrated
- Independent
- Flexible
- Loyal
- Scalable

### Class B: Requires stronger evidence

- Leading
- Premium
- Resilient
- Differentiated
- Attractive
- High-margin
- High-quality
- Best-in-class
- Excellent
- Proven

### Class C: Use rarely

- Unrivalled
- Unparalleled
- Exceptional
- Unique
- Dominant
- Superior
- World-class

Class C terms should require clear justification.

---

## 16. Writing corpus and analysis

A separate sell-side language corpus should be built from completed Kumulus IMs.

### 16.1 Classify text by

- Slide family
- Sentence function
- Claim type
- Evidence type
- Verb construction
- Adjective
- Bullet length
- Sentence length
- Voice
- Tense
- Level of certainty
- Heading style
- Title style
- Use of numbers
- Use of causality
- Use of qualification

### 16.2 Sentence-function labels

```text
company_definition
market_positioning
product_description
operating_capability
customer_evidence
financial_interpretation
growth_driver
market_driver
strategic_opportunity
competitive_advantage
risk_qualification
transaction_rationale
```

### 16.3 Outputs

- `writing-corpus.json`
- `sentence-patterns.json`
- `adjective-lexicon.json`
- `title-patterns.json`
- `bullet-length-rules.json`
- `repetition-rules.json`
- `sell-side-writing-guide.md`

The corpus should learn structures and tone, not copy deal-specific sentences into unrelated companies.

---

## 17. Fact, interpretation, and slide-language separation

The system should preserve three layers.

### Layer 1: Source fact

> The company has 42 employees and average tenure is nine years.

### Layer 2: Permitted interpretation

> The workforce is experienced and stable.

### Layer 3: Slide language

> An experienced and loyal workforce, with an average tenure of nine years, supports continuity and specialist knowledge retention.

This prevents both raw copying and unsupported claims.

---

## 18. Industry-specific terminology without hard-coding

The system should infer vocabulary from uploaded material.

### Medical distribution

- OEM
- Consumables
- Installed base
- Reimbursement
- Certified maintenance
- Medical specializations
- Hospital procurement

### Industrial manufacturing

- Production capacity
- Yield
- Utilisation
- Backlog
- Input costs
- Proprietary technology
- Maintenance cycle

### Software

- ARR
- Churn
- Net revenue retention
- SaaS
- Seat expansion
- Implementation
- Customer acquisition cost

### Logistics

- Throughput
- Warehousing capacity
- Asset utilisation
- Handling
- Modal connectivity
- Contract tenure

The visual system remains stable while terminology changes with the company.

---

## 19. Metadata required for every semantic template

```json
{
  "id": "CUS-CONC-02",
  "name": "Customer concentration with retention evidence",
  "family": "customers",
  "subfamily": "concentration",
  "purpose": [
    "show limited customer dependency",
    "combine concentration and retention"
  ],
  "useWhen": [
    "top customer data is available",
    "at least three historical periods are available"
  ],
  "avoidWhen": [
    "only aggregate customer count is known",
    "the slide primarily concerns customer segmentation"
  ],
  "requiredInputs": [
    "top10RevenueShare",
    "customerRevenueSeries"
  ],
  "optionalInputs": [
    "customerLogos",
    "retentionRate",
    "customerQuote"
  ],
  "constraints": {
    "minPeriods": 2,
    "maxPeriods": 5,
    "maxCustomerLogos": 12
  },
  "density": "high",
  "aspectRatios": ["16:9"],
  "sourceReferences": [
    {
      "deck": "Project Torino",
      "slides": [41, 42, 43]
    },
    {
      "deck": "Project Bones",
      "slides": [33, 34]
    }
  ],
  "fallbackTemplate": "CUS-CONC-01"
}
```

---

## 20. Revised system architecture

```text
Uploaded PDF(s)
      ↓
Document parser
      ↓
Evidence and fact store
      ↓
Deal and industry profile
      ↓
Slide intent classifier
      ↓
Relevant fact selector
      ↓
Sell-side writing engine
      ↓
Content-shape analysis
      ↓
Semantic template router
      ↓
Slide specification
      ↓
Visual renderer
      ↓
Content, source, and layout QA
```

Required directories:

```text
ingestion/
├── document-parser
├── page-indexer
├── table-extractor
├── image-extractor
├── fact-extractor
└── source-traceability

deal-model/
├── deal-profile
├── industry-profile
├── company-vocabulary
└── period-and-unit-normalization

writing/
├── sell-side-corpus
├── sentence-patterns
├── title-patterns
├── adjective-lexicon
├── claim-evidence-rules
├── repetition-checker
├── terminology-manager
└── writing-qa

content-routing/
├── slide-intent
├── evidence-selection
├── information-hierarchy
└── content-shape-analysis
```

---

## 21. Work packages

### Work package 1: Freeze and back up the current system

Activities:

- Preserve the existing ZIP unchanged.
- Create a version-controlled working copy.
- Record current tokens, components, assets, and assumptions.
- Mark Project Spark and Dynamate-specific code.
- Create a changelog.

Outputs:

- `legacy-v0/`
- Current-system audit
- List of hard-coded deal references
- List of reusable code

Completion condition:

No existing asset or rule can be lost accidentally.

### Work package 2: Remove Dynamate from defaults

Activities:

- Replace all default project names.
- Remove IT-specific terminology from schemas.
- Move Dynamate assets into an example directory.
- Replace company-specific quotes and colours.
- Add the mandatory target-company logo placeholder.

Completion condition:

A new project contains no Dynamate or Project Spark references unless explicitly selected as an example.

### Work package 3: Extract source-deck metadata

For all source slides:

- Extract slide number
- Extract text
- Count charts, tables, images, and shapes
- Record aspect ratio
- Extract slide title
- Generate thumbnail
- Record section and subsection
- Assign source-deck metadata

Outputs:

- `source-slides.json`
- Thumbnail directory
- Sortable spreadsheet or HTML index

Completion condition:

Every slide can be found by deck, number, title, and section.

### Work package 4: Manual slide annotation

Review every slide and label:

- Primary purpose
- Secondary purpose
- Story function
- Layout type
- Content density
- Visual complexity
- Chart types
- Reusable blocks
- Quality level
- Source relevance
- Current or legacy style
- Canonical potential

Completion condition:

No slide remains classified only as "standard content".

### Work package 5: Deduplication and clustering

Group slides sharing the same underlying construction.

Outputs:

- Pattern clusters
- Duplicate list
- Unique-layout list
- Variant relationships

Completion condition:

Each cluster has one proposed canonical layout and identified variants.

### Work package 6: Define the slide ontology

Create controlled vocabularies for:

- Section
- Family
- Subfamily
- Purpose
- Evidence type
- Data shape
- Density
- Layout geometry
- Visual device
- User intent

Outputs:

- `slide-taxonomy.json`
- `slide-taxonomy.md`
- Naming rules

Completion condition:

Two reviewers should classify the same slide similarly.

### Work package 7: Build the sell-side language corpus

Activities:

- Extract text from completed IMs.
- Classify sentence function and evidence type.
- Analyse titles, headings, bullets, adjectives, verbs, and sentence length.
- Identify recurring but overused constructions.
- Record variation patterns.

Outputs:

- Writing corpus
- Sentence-pattern library
- Adjective lexicon
- Title patterns
- Repetition rules
- Writing guide

Completion condition:

The system can produce varied Kumulus-style bullets without copying source language.

### Work package 8: Define evidence and fact models

Activities:

- Create fact schemas.
- Add confidence and source-page fields.
- Distinguish direct facts from derived interpretations.
- Define contradictory and insufficient evidence handling.
- Define financial period and unit normalization.

Completion condition:

Every generated factual claim can be traced to source evidence.

### Work package 9: Build PDF ingestion

Activities:

- Parse PDFs.
- Index pages.
- Extract text, tables, charts, and images.
- Identify relevant pages.
- Create the company and industry profile.
- Populate the evidence store.

Completion condition:

An unseen PDF from a different industry can be converted into a structured evidence base.

### Work package 10: Select canonical source slides

For each pattern cluster:

- Select the best source slide.
- Select supporting references.
- Record why the canonical source is preferred.
- Reject weak or obsolete versions.
- Decide what should be combined from multiple references.

Preference order:

1. Bones for modern execution
2. Long template for structural breadth
3. Torino for complex edge cases
4. Spark only where it adds something unavailable elsewhere

Completion condition:

Every planned template has documented source provenance.

### Work package 11: Rebuild foundations

Separate:

- Kumulus brand tokens
- Deal-theme tokens
- Data-visualization tokens
- Placeholder tokens
- Canvas tokens
- Density tokens

Create:

- 16:9 geometry
- Future 4:3 hooks
- Spacing grid
- Typography scale
- Line hierarchy
- Radius hierarchy
- Table rules
- Chart palette
- Status colours

Completion condition:

No component hard-codes a target company or industry.

### Work package 12: Rebuild slide chrome

Implement:

- Cover
- Standard content frame
- Section divider
- Subsection divider
- Appendix frame
- Footer
- Navigation
- Page number
- Notes and sources
- Required target-company logo placeholder

Completion condition:

Every template uses the same chrome system.

### Work package 13: Build atomic and compound components

Implement:

- KPI blocks
- Headings
- Cards
- Bullets
- Number markers
- Quote blocks
- Logo cells
- Status tags
- Legend items
- Fact capsules
- Comparison rows

Completion condition:

Components support real IM content density.

### Work package 14: Build the chart system

Create standard constructions for:

- Columns
- Stacked columns
- Lines
- Areas
- Horizontal bars
- Donuts
- Waterfalls
- Bridges
- Scatter plots
- Bubble charts
- Cohorts
- Concentration curves
- Actual versus forecast
- Variance charts

Every chart requires:

- Label rules
- Legend rules
- Axis rules
- Actual, budget, and forecast styling
- Highlight logic
- Minimum and maximum series
- Footnote behaviour

### Work package 15: Build the table system

Create separate table components for:

- Financial statements
- KPI tables
- Comparison matrices
- M&A target lists
- Transaction summaries
- Assumption tables
- Product matrices
- Source tables

Completion condition:

Tables are not assembled from arbitrary text boxes.

### Work package 16: Build narrative and process diagrams

Implement:

- Timelines
- Value chains
- Process flows
- Roadmaps
- Strategy pillars
- Funnels
- Pyramids
- Flywheels
- Ownership trees
- Organization charts

Each structure needs defined item-count ranges and overflow rules.

### Work package 17: Build executive-summary templates

Prioritize:

- Company at a glance
- Business-unit summary
- Investment highlights
- Company history
- Transaction scope
- Transaction financials
- Strategic overview

Target:

At least 10 to 15 materially different executive-summary templates.

### Work package 18: Build market and competition templates

Prioritize:

- Market size and growth
- Market drivers
- Regulatory comparison
- Value chain
- Barriers to entry
- Competitive 2x2
- Competitor spectrum
- Market segmentation
- Structural trends

Completion condition:

The AI can distinguish market sizing, market structure, trends, regulation, and competitive positioning.

### Work package 19: Build business-model and operations templates

Prioritize:

- Product portfolio
- Service portfolio
- Revenue model
- Recurring-revenue model
- Installed base
- Operating process
- Warehouse and logistics
- Technical product page
- IT systems
- Supplier value proposition

Completion condition:

Technical and operational material no longer defaults to generic columns.

### Work package 20: Build customer and organization templates

Prioritize:

- Customer concentration
- Customer retention
- Churn
- Segmentation
- Contract tenure
- Logo wall
- Route to market
- Customer journey
- Management team
- Organization chart
- FTE development
- Tenure
- IT organization

Completion condition:

Customer and organization slides have evidence-specific structures.

### Work package 21: Build strategy, M&A, and financial templates

Prioritize:

- Strategic pillars
- Initiative roadmap
- Business-plan bridge
- Growth drivers
- M&A criteria
- Target universe
- Target profiles
- Financial overview
- Historical statements
- Business plan
- EBITDA adjustments
- Cash generation
- NWC
- NFD

Completion condition:

The library covers the complete back half of a standard IM.

### Work package 22: Build the sell-side writing engine

Activities:

- Convert selected evidence into titles, headings, and bullets.
- Apply sentence-family selection.
- Vary verbs and structures across adjacent slides.
- Apply adjective governance.
- Preserve industry terminology.
- Separate facts, interpretation, and final slide language.
- Enforce evidence support.

Completion condition:

The output is persuasive, varied, and traceable.

### Work package 23: Build AI routing and content schemas

For each template:

- Define use conditions.
- Define exclusion conditions.
- Define required inputs.
- Define optional inputs.
- Define item limits.
- Define compatible blocks.
- Define fallbacks.
- Add example user prompts.
- Add examples of poor template selection.

Completion condition:

The AI selects templates based on meaning and data structure rather than keywords alone.

### Work package 24: Stress testing and visual regression

Test:

- Minimum-content case
- Maximum-content case
- Long-title case
- Missing-data case
- No-images case
- Many-logo case
- Negative-value case
- Ten-year financial case
- Three versus five business units
- Actual, budget, and forecast combinations
- Placeholder-logo compliance

Outputs:

- Automated screenshots
- Overflow report
- Visual-difference report
- Contrast checks

Completion condition:

No template depends on ideal sample content.

### Work package 25: Cross-industry and writing QA

Test with at least:

- Healthcare distributor
- Industrial manufacturer
- Software company
- Logistics operator
- Consumer-products company

The system fails if generated slides contain:

- Dynamate
- Project Spark
- Unsupported IT terminology
- Managed-services assumptions
- IT-specific KPIs without source support
- Dynamate colours or logos

Writing QA should assess:

- Repeated opening verbs
- Repeated causal constructions
- Repeated adjectives
- Repeated sentence lengths
- Repeated title constructions
- Repeated "company benefits from" phrasing
- Unsupported superlatives
- Excessively neutral wording

### Work package 26: Pilot IM and governance

Create a complete mini-IM using an unseen fictional company:

- Cover
- Contents
- At a glance
- Investment highlights
- Market
- Business model
- Customers
- Organization
- Strategy
- Financials
- Transaction scope

Governance requirements:

- Versioning
- Template status
- Deprecation rules
- Contribution rules
- Review checklist
- Naming conventions
- Source-provenance requirements
- Change log

Completion condition:

A new contributor can add a template without weakening consistency.

---

## 22. Recommended repository structure

```text
kumulus-design-system/
├── foundations/
│   ├── brand-tokens
│   ├── deal-theme-tokens
│   ├── typography
│   ├── spacing
│   ├── canvas
│   └── chart-tokens
├── ingestion/
│   ├── document-parser
│   ├── page-indexer
│   ├── table-extractor
│   ├── image-extractor
│   ├── fact-extractor
│   └── source-traceability
├── deal-model/
│   ├── deal-profile
│   ├── industry-profile
│   ├── company-vocabulary
│   └── period-and-unit-normalization
├── writing/
│   ├── sell-side-corpus
│   ├── sentence-patterns
│   ├── title-patterns
│   ├── adjective-lexicon
│   ├── claim-evidence-rules
│   ├── repetition-checker
│   ├── terminology-manager
│   └── writing-qa
├── chrome/
│   ├── cover
│   ├── content-frame
│   ├── section-divider
│   ├── footer
│   └── target-logo-placeholder
├── blocks/
│   ├── narrative
│   ├── metrics
│   ├── charts
│   ├── tables
│   ├── diagrams
│   ├── images
│   └── logos
├── templates/
│   ├── executive-summary
│   ├── market
│   ├── business-model
│   ├── customers
│   ├── organization
│   ├── strategy
│   ├── m-and-a
│   ├── financials
│   └── appendix
├── atlas/
│   ├── source-slides.json
│   ├── source-map.json
│   ├── thumbnails
│   └── rejected-patterns
├── routing/
│   ├── taxonomy.json
│   ├── template-registry.json
│   ├── selection-rules.md
│   └── examples
├── content-routing/
│   ├── slide-intent
│   ├── evidence-selection
│   ├── information-hierarchy
│   └── content-shape-analysis
├── schemas/
│   ├── slide-spec.schema.json
│   ├── chart-data.schema.json
│   ├── evidence.schema.json
│   ├── deal-profile.schema.json
│   └── deal-theme.schema.json
├── previews/
│   ├── template-browser
│   └── component-browser
├── examples/
│   └── project-spark-dynamate
└── qa/
    ├── test-content
    ├── screenshots
    └── regression-results
```

---

## 23. Rules governing the rebuild

1. Do not start by coding more templates.
2. Freeze and audit the current system first.
3. Remove Dynamate and Project Spark from all production defaults.
4. Index and classify all source slides before selecting canonicals.
5. Extract and analyse the writing corpus before finalizing the writing engine.
6. Build the evidence model before generating sell-side claims.
7. Do not convert every source slide into a component.
8. Preserve source references for every template.
9. Separate semantic purpose from visual geometry.
10. Use Bones as the main modern-quality reference.
11. Use the long template as the main structural source.
12. Use Torino for complex and technical formats.
13. Make the yellow target-company logo placeholder mandatory.
14. Give every template clear "use when" and "do not use when" rules.
15. Test templates with realistic investment-banking content volumes.
16. Reject templates that only work with ideal sample data.
17. Require an explicit fallback for every template.
18. Preserve justified positive adjectives and commercial conviction.
19. Prevent repetitive phrasing across adjacent slides.
20. Require source traceability for factual claims and superlatives.
21. Test with unseen PDFs from unrelated industries.
22. Complete a pilot IM before declaring the system production-ready.

---

## 24. Immediate starting phase

The first implementation phase should cover:

1. Freeze the existing system.
2. Remove Dynamate and Project Spark from production defaults.
3. Extract all source slides and generate thumbnails.
4. Manually classify every source slide.
5. Cluster duplicates and structural variants.
6. Extract and classify the writing from completed IMs.
7. Define the fact, evidence, and source-traceability model.
8. Define the industry-neutral `DealProfile`.

Large-scale component coding should start only after these foundations exist. Coding earlier would repeat the current system's main failure: formalizing a narrow set of assumptions before understanding the full variation of Kumulus IM slides and writing patterns.
