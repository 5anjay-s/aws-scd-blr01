# Page compositions

Desktop and mobile compositions live in `src/components/design/`. `src/design-manifest.json` records their source frames; `src/App.tsx` assembles them into the homepage, technical and non-technical tracks, registration, loading, and 404 routes.

Keep paired compositions aligned with the approved copy, artwork, and behavior. A new route needs both variants and an App route mapping. Shared controls and animations belong in `src/components/`.

Retain imported Figma node IDs. Navigation uses `SiteLink` with clean paths, while homepage section IDs are assigned by App. Update section paths and legacy aliases in `src/navigation.ts` when changing URLs.

Do not add a second route tree or duplicate the active navigation. `SiteHeader` moves each page's existing navigation into the shared sticky header host. Preserve empty logo placeholders until the user supplies replacement artwork.
