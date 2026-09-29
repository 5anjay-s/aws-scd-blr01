# Page compositions

Desktop and mobile compositions live in `src/components/design/`. `src/design-manifest.json` records their source frames; `src/page-config.ts` selects them for the homepage, organizers, FAQ, technical and non-technical tracks, registration, loading, and 404 routes. `PageSections` renders the selected compositions inside the App shell.

Keep paired compositions aligned with the approved copy, artwork, and behavior. A new route needs both variants and a page configuration mapping. Shared controls and animations belong in `src/components/`.

Retain imported Figma node IDs. `SiteLink` converts composition destinations into hash URLs, while homepage section IDs are assigned by App. Update routes and legacy aliases in `src/navigation.ts` when changing URLs.

Do not add a second route tree or duplicate the active navigation. `SiteHeader` moves each page's existing navigation into the shared sticky header host. `SiteBrand` uses the original Open Passage logo with small aws lettering underneath and a single-line event name to its right. BLR is cyan.
