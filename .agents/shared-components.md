# Shared components

- `SiteHeader` renders composition-specific navigation into App's shared sticky header host.
- `SiteBrand` shares the Open Passage SVG and event wordmark across desktop/mobile headers and footers.
- `SiteLink` and `RegistrationButton` provide accessible internal links and button styling.
- `DitherDivider` and `ProgrammeDivider` reuse the original SVG borders.
- `LoadingFlight` handles the first-visit entry animation and explicit replays.
- `PageTransition` renders solid pixel-art circles, squares, diamonds, and crosses that grow to cover the viewport, then shrink away in reverse order. `transitionShapes.ts` owns the stepped block outlines and stagger; each shape covers its assigned viewport cell before the page swap. The canvas and geometry persist through the handoff, with block edges snapped to physical pixels during GSAP scaling. `LoadingTransition` keeps the intro's white cloud wipe.
- `SponsorLogo` renders the local sponsor artwork configured in `site-config.ts` in black.
- `TrackArtwork` animates the original Tracks card SVGs in both compositions. Quote pairs alternate small pixel steps; brackets open and close around a pulsing diamond. Clipped copies preserve the source dither and colors. Loops pause offscreen or in hidden tabs, and reduced motion shows the original still composition.
- `HeroTitle`, `SignalStitch`, `ScrollSpark`, `WovenRibbon`, `BuildBrackets`, `ProgrammeSteps`, and the manifesto components own reusable animation behavior.

Keep animation logic out of duplicated desktop/mobile compositions. Preserve SVG geometry and colors unless the user requests changes. Respect reduced motion, keep stationary reading content still, and pause continuous effects offscreen where supported.

Shared styles live in `src/styles/`. Check keyboard navigation, sticky header offsets, button labels, and narrow viewport sizing when changing shared controls. The current navbar label is Register now.
