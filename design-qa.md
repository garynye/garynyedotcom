# Design QA

## Evidence

- Source visual truth: `C:\Users\garyn\AppData\Local\Temp\codex-clipboard-9c98d279-4a3b-47c0-b83d-ddb86fc7a689.png`
- User-reported pre-fix render: `C:\Users\garyn\AppData\Local\Temp\codex-clipboard-0f4361ba-04f5-4685-ac7b-b18a755840d4.png`
- Final browser-rendered implementation:
  - Hero and studio at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-final-1078.png`
  - Wide hero at 1662 × 1000: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-1662.png`
  - Tablet hero at 768 × 1024: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-tablet-768.png`
  - Mobile hero at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\garynye-hero-fade-mobile-390.png`
  - Restored journey styling at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-rounded-1078.png`
  - Expanded journey bullets at 1078 × 1409: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-expanded-1078.png`
  - Mobile journey at 390 × 844: `C:\Users\garyn\AppData\Local\Temp\garynye-journey-rounded-mobile.png`
- Local implementation URL: `http://127.0.0.1:4173/`
- Source pixels: 916 × 1717
- Primary implementation viewport and pixels: 1078 × 1409 CSS and image pixels, device scale factor 1
- Additional validated viewports: 1662 × 1000, 768 × 1024, and 390 × 844 CSS pixels
- State: public portfolio at the hero and journey anchors; mobile navigation and journey accordion states verified.

## Combined Comparison Evidence

- Final hero/studio comparison: `C:\Users\garyn\.codex\visualizations\2026\07\29\019facbd-14ce-77a0-b460-0a7bb6917acb\design-comparison-hero-fade-final-1078.png`
- Density normalization: the 916-pixel source was proportionally scaled to 1078 pixels wide and cropped at 1409 pixels high; the implementation was captured at the same 1078 × 1409 pixel size.
- A focused hero comparison is not separate because the normalized full-width comparison keeps the hero typography, image crop, fade, and studio transition large enough to judge directly.

## Findings

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: the enlarged name and Curious Ventures display type now match the reference hierarchy more closely. Editorial serif headings, restrained sans-serif copy, brass metadata, and cyan links remain consistent across sections.
- Spacing and layout rhythm: the hero begins at the top edge behind the header. The standalone About band has been removed, and the studio now follows the hero directly at its border, matching the reference sequence.
- Colors and visual tokens: the ink-dark surface, brass rules, cyan links, off-white type, and restrained hairlines remain faithful to the selected editorial direction.
- Image quality and asset fidelity: the portrait uses the authentic hero asset with `object-fit: cover`, a stable 36% horizontal focal point, and a top-aligned crop. The longer lower fade preserves the face and torso while blending the photograph naturally into the page.
- Copy and content: the approved portfolio copy and private-link exclusions remain unchanged. The About navigation destination now anchors to the hero introduction instead of a separate content band.
- Journey continuity: the company-logo cards again use the previous rounded treatment and soft depth, accordion surfaces have rounded corners, and the expanded highlight list restores the earlier green glowing bullets and row treatment.
- Responsiveness: measured horizontal overflow is zero at 390, 768, 1078, and 1662 CSS pixels. At 1078 pixels the hero begins at y=0, is 690 pixels high, and the studio begins immediately at y=690. At 1662 pixels the hero and studio transition at y=900.

Acceptable intentional differences:

- Product descriptions follow the approved current specification rather than concept-copy visible in the inspiration image.
- Authentic product assets replace conceptual placeholder imagery from the visual reference.
- The portfolio remains content-complete below the compared crop, including additional projects, career history, and contact information.

## Interaction and Accessibility Checks

- The mobile menu retains Work, Studio, Journey, About, and Contact.
- The About destination remains valid and lands on the hero introduction.
- The Curious Ventures journey accordion changes from collapsed to expanded and reveals all three restored bullet rows.
- Company logos remain linked only where public destinations exist.
- Heading order, landmarks, image alt text, and responsive navigation semantics remain intact.
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

## Implementation Checklist

- [x] Make the hero image reach the top edge at every desktop width.
- [x] Restore the lower photographic fade.
- [x] Remove the standalone About section while preserving its navigation destination.
- [x] Match reference-scale display typography more closely.
- [x] Restore rounded journey logos, accordions, and bullet styling.
- [x] Validate desktop, wide, tablet, and mobile layouts.
- [x] Confirm zero horizontal overflow and clean browser diagnostics.

final result: passed
