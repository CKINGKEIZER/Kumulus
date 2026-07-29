# TargetCompanyLogoPlaceholder / TargetLogo / ThirdPartyLogoPlaceholder
Target-company logo handling. `TargetLogo` renders the real logo or falls back to the **mandatory yellow placeholder** (never collapses). Yellow = target; grey (`ThirdPartyLogoPlaceholder`) = supplier/customer. Never confuse with the Kumulus mark.

```jsx
<TargetLogo src={deal.targetCompanyLogo} variant="footer-small" />
<TargetCompanyLogoPlaceholder variant="cover-large" />
<ThirdPartyLogoPlaceholder label="OEM" />
```
Variants: cover-large · header-medium · footer-small · diagram-node.