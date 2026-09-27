# App shell and routing

- `src/App.tsx` selects desktop/mobile compositions from `src/design-manifest.json`. The breakpoint is 1200px, or 768px for the loading page.
- `src/navigation.ts` owns clean section paths and legacy aliases. Update route resolution alongside section anchors.
- `SiteLink` handles internal navigation with real anchor elements and preserves modified-click behavior. Avoid competing click handlers.
- `SiteHeader` portals each composition's navigation into the shared sticky host. Keep the measured header offset when scrolling to anchors.
- The hero is the default entry point. `/loading` explicitly plays `LoadingFlight`, which returns to the hero after completion or reduced-motion handling.
- Scroll updates replace the URL without creating history entries. Learn, Build, Belong shares `/experience`. The manifesto follows it, then `/tracks`.
- Desktop and mobile are alternate compositions, not separate routes. Keep browser Back and direct section URLs working.
