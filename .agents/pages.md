# Route Pages

Page compositions live in `src/pages/`:

- `home/`: main event page
- `technical/`: technical track
- `nontechnical/`: non-technical track
- `registration/`: registration page
- `not-found/`: 404 page

Each route has a `*Desktop.tsx` and `*Mobile.tsx` component. Keep page-specific content and layout in these files; shared navigation, footer, and loading UI belong in `src/components/` and are assembled by `src/app/SiteLayout.tsx` / `StartupGate.tsx`.

These components preserve imported Figma composition and often use `data-node-id` as a contract for links and section jumps. Before editing an interactive element, trace its node ID into `clickDestinations` in `src/app/App.tsx`. Keep route content, visible text, and artwork aligned with Figma; do not remove node IDs or replace original assets without checking their use. Make responsive changes in the paired compositions while retaining their intended desktop/mobile designs.
