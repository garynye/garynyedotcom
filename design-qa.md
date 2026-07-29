# Design QA

## Evidence

- Source visual truth: `C:\Users\garyn\.codex\generated_images\019facbd-14ce-77a0-b460-0a7bb6917acb\call_Tqds7qGfZjXFBIlN12yNglBf.png`
- Browser-rendered implementation: `C:\Users\garyn\AppData\Local\Temp\garynye-portfolio-final-1440.png`
- Local implementation URL: `http://127.0.0.1:4173/`
- Viewport: 1439 × 1000 CSS pixels, desktop dark theme, page top
- Source pixels: 916 × 1717
- Implementation pixels: 1439 × 1000
- Density normalization: implementation screenshot is 1 CSS pixel per image pixel. For the focused hero comparison, the source was cropped to the same 1.439 aspect ratio and both sides were normalized to 1439 × 1000.
- State: signed-out public portfolio, hero at page top; studio section at its anchor; mobile navigation tested at the responsive breakpoint; first journey accordion tested collapsed and expanded.

## Comparison Evidence

- Focused hero comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-hero.png`
- Focused studio comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-studio.png`
- Broader composition comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-final.png`
- Responsive captures:
  - `C:\Users\garyn\AppData\Local\Temp\garynye-portfolio-mobile-top-390.png`
  - `C:\Users\garyn\AppData\Local\Temp\garynye-portfolio-mobile-studio-390.png`
  - `C:\Users\garyn\AppData\Local\Temp\garynye-portfolio-tablet-css-768.png`

The focused comparisons were required because the full-page mock compresses the hero typography, product artwork, hairlines, and small maturity labels too much for a reliable fidelity judgment.

## Findings

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: the implementation preserves the mock's editorial serif display hierarchy, restrained sans-serif metadata, light body weights, uppercase navigation, and compact tracking. Gary's name is again the primary hero heading, with the positioning statement subordinate to it.
- Spacing and layout rhythm: the desktop split hero, two-column studio, brass rule, hairline product rows, narrative work layout, and generous section spacing are balanced and consistent. Tablet and phone widths now stack in narrative order without horizontal overflow.
- Colors and visual tokens: the ink-dark background, off-white type, muted cyan links, brass metadata, and low-contrast hairlines map closely to the source palette without cards, glows, gradients, or invented UI.
- Image quality and asset fidelity: the existing portrait, authentic family-history photograph, real Rosie icon, existing HearClara logo, and generated AppSpec Studio artwork render sharply with appropriate crops and no placeholder or code-drawn substitutes.
- Copy and content: the implementation follows the approved specification where it intentionally supersedes wording visible in the mock, including the Rosie description, AppSpec description, House Chase child-designer language, and private-link exclusions.

Acceptable intentional differences:

- The implementation uses the specification's explicit split hero rather than allowing the portrait to sit behind the entire content area.
- Selected work uses editorial feature and text treatments rather than the mock's equal project-card row.
- The studio artwork sizes are slightly smaller than the concept mock so the real icons remain sharp and the longer approved descriptions retain comfortable line lengths.

## Interaction and Accessibility Checks

- Mobile menu exposes Work, Studio, Journey, About, and Contact.
- `aria-expanded` changes from `false` to `true`, and selecting Studio closes the mobile menu.
- The Curious Ventures accordion changes from collapsed to expanded and exposes its highlights.
- All seven external links use `target="_blank"` with `rel="noopener noreferrer"`.
- Heading order, landmarks, image alt text, focus treatment, and skip link were inspected.
- Browser console contained no application warnings or errors. Browser-extension warnings were excluded because they do not originate from the portfolio.

## Comparison History

1. Earlier P2: at an approximately 768px CSS viewport, the hero and navigation still used the desktop split layout.
   - Fix: raised the portfolio and journey stacking breakpoints to 820px.
   - Post-fix evidence: the responsive tablet capture shows the portrait, hero copy, mobile menu, and journey content stacked; measured `innerWidth` was 767px, the 820px media query matched, desktop navigation was hidden, and the hero had one grid column.
2. Earlier P1: the initial implementation made the positioning sentence the oversized hero heading and reduced Gary's name to a small kicker, reversing the selected mock's personal-brand hierarchy.
   - Fix: restored `Gary Nye` as the H1 and moved the positioning sentence to a smaller supporting line.
   - Post-fix evidence: `design-comparison-hero.png` shows matching name-first hierarchy, serif scale, understated supporting copy, and cyan-underlined text links.

## Implementation Checklist

- [x] Match the selected dark editorial direction.
- [x] Use authentic and approved product artwork.
- [x] Preserve the five navigation destinations across breakpoints.
- [x] Keep private services and private repositories unlinked.
- [x] Preserve working journey accordions.
- [x] Validate desktop, tablet, and mobile layouts.
- [x] Confirm external-link safety and a clean application console.

## Follow-up Polish

No blocking polish remains. A future content pass could add exact Curious Ventures founding dates once they are supplied.

final result: passed
