# Design QA

## Evidence

- Source visual truth: `C:\Users\garyn\AppData\Local\Temp\codex-clipboard-9c98d279-4a3b-47c0-b83d-ddb86fc7a689.png`
- User-reported pre-fix render: `C:\Users\garyn\AppData\Local\Temp\codex-clipboard-0f4361ba-04f5-4685-ac7b-b18a755840d4.png`
- User-reported studio-detail render: `C:\Users\garyn\AppData\Local\Temp\codex-clipboard-72e6af87-251f-4bcc-af56-7c749612d5a4.png`
- Final browser-rendered implementation:
  - Hero and studio at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-final-1078.png`
  - Wide hero at 1662 × 1000: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-1662.png`
  - Tablet hero at 768 × 1024: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-tablet-768.png`
  - Mobile hero at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-mobile-390.png`
  - Restored journey styling at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-rounded-1078.png`
  - Expanded journey bullets at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-expanded-1078.png`
  - Mobile journey at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-rounded-mobile.png`
  - Corrected studio details at 943 × 658: `C:\Users\garyn\AppData\Local\Temp\garynye-studio-tweaks-943.png`
  - Corrected hero rule at 943 × 658: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-rule-943.png`
  - Five-product Studio at 1440 × 1000: `C:\Users\garyn\AppData\Local\Temp\five-product-studio-desktop.png`
  - Three-project visual row at 1440 × 1000: `C:\Users\garyn\AppData\Local\Temp\selected-work-desktop.png`
  - Two-project text row at 1440 × 1000: `C:\Users\garyn\AppData\Local\Temp\selected-work-text-row-desktop.png`
  - Five-product Studio at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\five-product-studio-mobile.png`
  - Studio product rows at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\five-product-rows-mobile.png`
  - Selected-work text row at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\selected-work-text-mobile.png`
  - Curious Ventures journey entry at 1440 × 1000: `C:\Users\garyn\AppData\Local\Temp\curious-ventures-journey-desktop.png`
  - Expanded five-product journey bullets at 1440 × 1000: `C:\Users\garyn\AppData\Local\Temp\curious-ventures-journey-expanded-desktop.png`
  - Curious Ventures journey entry at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\curious-ventures-journey-mobile.png`
  - Remaining journey bullets at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\curious-ventures-journey-bullets-mobile.png`
- Local implementation URL: `http://127.0.0.1:4173/`
- Source pixels: 916 × 1717
- Primary implementation viewport and pixels: 1078 × 1409 CSS and image pixels, device scale factor 1
- Additional validated viewports: 1662 × 1000, 1440 × 1000, 768 × 1024, and 390 × 844 CSS pixels
- State: public portfolio at the hero, Studio, Work, and Journey anchors; five-product Studio and three-plus-two selected-work layouts verified.

## Combined Comparison Evidence

- Final hero/studio comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-hero-fade-final-1078.png`
- Studio-detail before/after comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-studio-details-943.png`
- Hero-rule comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-hero-rule-943.png`
- Density normalization: the 916-pixel source was proportionally scaled to 1078 pixels wide and cropped at 1409 pixels high; the implementation was captured at the same 1078 × 1409 pixel size.
- A focused hero comparison is not separate because the normalized full-width comparison keeps the hero typography, image crop, fade, and studio transition large enough to judge directly.

## Findings

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: the enlarged name and Curious Ventures display type now match the reference hierarchy more closely. Editorial serif headings, restrained sans-serif copy, brass metadata, and cyan links remain consistent across sections.
- Spacing and layout rhythm: the hero begins at the top edge behind the header. The standalone About band has been removed, and the studio now follows the hero directly at its border, matching the reference sequence.
- Colors and visual tokens: the ink-dark surface, brass rules, cyan links, off-white type, and restrained hairlines remain faithful to the selected editorial direction.
- Image quality and asset fidelity: the portrait uses the authentic hero asset with `object-fit: cover`, a stable 36% horizontal focal point, and a top-aligned crop. The longer lower fade preserves the face and torso while blending the photograph naturally into the page.
- Copy and content: MacSweeper and Windows Whisper Client now use maturity-appropriate Studio copy and status labels. Private repositories remain unlinked, and the About navigation destination still anchors to the hero introduction.
- Journey continuity: the company-logo cards again use the previous rounded treatment and soft depth, accordion surfaces have rounded corners, and the expanded highlight list restores the earlier green glowing bullets and row treatment.
- Journey portfolio alignment: Curious Ventures now has a dedicated navy, brass, and cyan company icon, a five-product studio summary, and one work-history bullet for every current Studio product.
- Studio-detail fidelity: the public name reads Curious Ventures LLC. All five product assets are clipped to 12-pixel rounded corners with transparent CSS backgrounds, zero surrounding border, and no additional square backing surface.
- Portfolio hierarchy: HearClara, MacSweeper, Windows Whisper Client, Rosie, and AppSpec Studio appear as five equal Studio rows in maturity order. Family History, IcelandWalk, and House Chase form a three-column illustrated row; DotHider and Customized RustDesk form an equal two-column text row without a secondary category heading.
- Rule geometry: the product-column container no longer has a top border. The first product row owns the hairline and begins 41 pixels to the right of the vertical divider at the 943-pixel viewport, creating the detached corner visible in the reference.
- Hero-rule fidelity: the divider below the positioning sentence is now a 56-pixel brass accent matching the short Curious Ventures rule instead of spanning the full hero-copy measure.
- Responsiveness: measured horizontal overflow is zero at 390, 768, 1078, 1440, and 1662 CSS pixels. At 1440 pixels the five Studio rows measure 170–177 pixels high with 112-pixel artwork; at 390 pixels artwork resolves to 64 pixels and both project groups stack to one column.

Acceptable intentional differences:

- Product descriptions follow the approved current specification rather than concept-copy visible in the inspiration image.
- Purpose-built product artwork replaces conceptual placeholder imagery from the visual reference.
- The portfolio remains content-complete below the compared crop, including five selected projects, career history, and contact information.

## Interaction and Accessibility Checks

- The mobile menu retains Work, Studio, Journey, About, and Contact.
- The About destination remains valid and lands on the hero introduction.
- The Curious Ventures journey accordion changes from collapsed to expanded and reveals all five current product rows.
- Company logos remain linked only where public destinations exist.
- Heading order, landmarks, image alt text, and responsive navigation semantics remain intact.
- All five Studio images load successfully with descriptive alt text; all public external links retain `_blank` and `noopener noreferrer`.
- Browser diagnostics showed no application errors or warnings.

## Comparison History

1. P1: at tall or narrower desktop dimensions, `object-fit: contain` introduced empty space above and below the portrait, even though some wider dimensions looked correct.
   - Fix: changed the desktop hero asset to `object-fit: cover`, top-aligned it, and retained a 36% focal point.
   - Post-fix evidence: `garynye-hero-fade-final-1078.png`, `garynye-hero-fade-1662.png`, and the combined comparison.
2. P1: the lower portrait edge ended abruptly and lost the cinematic fade from the reference.
   - Fix: replaced the short fade with a multi-stop transition extending through 60% of the hero.
   - Post-fix evidence: the implementation side of `design-comparison-hero-fade-final-1078.png`.
3. P1: the standalone About band added an entire section absent from the inspiration and delayed Curious Ventures.
   - Fix: removed the band, moved the About anchor to the hero introduction, and tightened the studio's top spacing.
   - Post-fix evidence: the studio begins immediately below the hero in the combined comparison.
4. P2: the hero and studio display headings were smaller than the normalized reference.
   - Fix: increased the responsive serif display ranges for Gary Nye and Curious Ventures.
   - Post-fix evidence: `design-comparison-hero-fade-final-1078.png`.
5. P2: career company images, accordions, and highlight bullets had lost the rounded and softly illuminated treatment from the pre-redesign site.
   - Fix: restored the previous 148/92/42/36-pixel responsive logo sizing, 8-pixel logo-card corners, 6-pixel accordion and bullet-row corners, and the green/cyan bullet treatment.
   - Post-fix evidence: `garynye-journey-rounded-1078.png`, `garynye-journey-expanded-1078.png`, and `garynye-journey-rounded-mobile.png`.
6. P2: studio artwork had acquired a second square background and sharp surrounding frame that were absent from the inspiration.
   - Fix: removed artwork padding, border, and CSS background; applied a consistent 12-pixel clip directly to each authentic product asset.
   - Post-fix evidence: `design-comparison-studio-details-943.png`.
7. P2: the studio product container's top border connected directly to its vertical divider.
   - Fix: moved the top hairline from the product container to the first product row so it begins after the container's left padding.
   - Post-fix evidence: the revised side of `design-comparison-studio-details-943.png`.
8. P2: the brass rule below the hero positioning sentence spanned the full text column instead of acting as a short editorial accent.
   - Fix: replaced the full-width border with a 56-pixel accent matching the studio title rule.
   - Post-fix evidence: `design-comparison-hero-rule-943.png`.
9. P2: MacSweeper and Windows Whisper Client were visually demoted into project tiers that understated their product maturity, while DotHider and Customized RustDesk sat beneath a diminishing small-tools heading.
   - Fix: expanded Curious Ventures LLC to five equal maturity-ordered rows, removed the small-tools tier, and rebuilt selected work as one three-plus-two portfolio section.
   - Post-fix evidence: `five-product-studio-desktop.png`, `selected-work-desktop.png`, `selected-work-text-row-desktop.png`, and the 390-pixel mobile captures.
10. P2: the Journey entry still summarized only the earlier Studio portfolio and had no dedicated Curious Ventures identity.
   - Fix: added a purpose-built company icon, expanded the role summary, and aligned the accordion with all five Studio products.
   - Post-fix evidence: `curious-ventures-journey-desktop.png`, `curious-ventures-journey-expanded-desktop.png`, and the 390-pixel mobile captures.

## Implementation Checklist

- [x] Make the hero image reach the top edge at every desktop width.
- [x] Restore the lower photographic fade.
- [x] Remove the standalone About section while preserving its navigation destination.
- [x] Match reference-scale display typography more closely.
- [x] Restore rounded journey logos, accordions, and bullet styling.
- [x] Use the full Curious Ventures LLC name.
- [x] Remove extra product-icon frames and round the authentic assets.
- [x] Detach the studio product hairline from its vertical divider.
- [x] Shorten the hero brass rule to match the studio accent.
- [x] Expand Curious Ventures LLC to five equal maturity-ordered products.
- [x] Align the Curious Ventures Journey entry with all five Studio products.
- [x] Add and validate a dedicated Curious Ventures company icon at desktop and mobile sizes.
- [x] Replace the additional-projects tier with a three-plus-two selected-work layout.
- [x] Add and validate dedicated MacSweeper artwork at desktop and mobile sizes.
- [x] Validate desktop, wide, tablet, and mobile layouts.
- [x] Confirm zero horizontal overflow and clean browser diagnostics.

final result: passed
