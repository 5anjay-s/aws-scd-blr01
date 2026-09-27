# Shared components

- `SiteHeader` renders composition-specific navigation into App's shared sticky header host.
- `SiteBrand` shares the Open Passage SVG and event wordmark across desktop/mobile headers and footers.
- `SiteLink` and `RegistrationButton` provide accessible internal links and button styling.
- `DitherDivider` and `ProgrammeDivider` reuse the original SVG borders.
- `LoadingFlight` handles the first-visit entry animation and explicit replays.
- `SponsorLogo` renders the local sponsor artwork configured in `site-config.ts` in black.
- `HeroTitle`, `SignalStitch`, `ScrollSpark`, `WovenRibbon`, `BuildBrackets`, `ProgrammeSteps`, and the manifesto components own reusable animation behavior.

Keep animation logic out of duplicated desktop/mobile compositions. Preserve SVG geometry and colors unless the user requests changes. Respect reduced motion, keep stationary reading content still, and pause continuous effects offscreen where supported.

Shared styles live in `src/styles/`. Check keyboard navigation, sticky header offsets, button labels, and narrow viewport sizing when changing shared controls. The current navbar label is Register now.
