# Shared components

- `SiteHeader` renders composition-specific navigation into App's shared sticky header host.
- `SiteBrand` shares the Open Passage SVG and event wordmark across desktop/mobile headers and footers.
- `SiteLink` and `RegistrationButton` provide accessible internal links and button styling.
- `DitherDivider` and `ProgrammeDivider` reuse the original SVG borders.
- `LoadingFlight` handles the first-visit entry animation and explicit replays.
- `PageTransition` renders solid pixel-art circles, squares, diamonds, and crosses that grow to cover the viewport, then shrink away in reverse order. `transitionShapes.ts` owns the stepped block outlines and stagger; each shape covers its assigned viewport cell before the page swap. The canvas and geometry persist through the handoff, with block edges snapped to physical pixels during GSAP scaling. `LoadingTransition` keeps the intro's white cloud wipe.
- `SponsorLogo` renders the local sponsor artwork configured in `site-config.ts` in black.
- `CountUp` animates a number once on entry, reserves its final width, and exposes a stable value to screen readers. It pauses offscreen and in hidden tabs; reduced motion shows the final value.
- `SpeakerQuotation` gives the two original speaker quote marks a staggered lift, tilt, and settle in the opener and lineup. It preserves the SVG and pauses offscreen, in hidden tabs, and for reduced motion.
- `TrackArtwork` animates the original Tracks card SVGs in both compositions. Four quotation marks hop in staggered pairs; brackets spring open around a pulsing diamond that turns and returns. Clipped copies and per-glyph pivots preserve the source dither and colors. Loops pause offscreen or in hidden tabs, and reduced motion shows the original still composition.
- Standalone track heroes also use `TrackArtwork`: `quotes` for the non-technical page and `compile` for the wider technical artwork. Keep the compile variant's crop boundaries and diamond pivot aligned to its 832 × 336 source geometry.
- `DesignMotion` applies its initial frame before playback. Keep the cloud-panel plane hidden until the hero arrival plane finishes its exit, then reset the panel flight before revealing it.
- `HeroTitle`, `SignalStitch`, `ScrollSpark`, `WovenRibbon`, `BuildBrackets`, `ProgrammeSteps`, and the manifesto components own reusable animation behavior.

Keep animation logic out of duplicated desktop/mobile compositions. Preserve SVG geometry and colors unless the user requests changes. Respect reduced motion, keep stationary reading content still, and pause continuous effects offscreen where supported.

Shared styles live in `src/styles/`. Check keyboard navigation, sticky header offsets, button labels, and narrow viewport sizing when changing shared controls. The current navbar label is Register now.
