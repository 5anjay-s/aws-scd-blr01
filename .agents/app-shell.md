# App shell and routing

- `src/App.tsx` selects desktop/mobile compositions from `src/design-manifest.json`. The breakpoint is 1200px, or 768px for the loading page.
- `src/navigation.ts` owns clean section paths and legacy aliases. Update route resolution alongside section anchors.
- `SiteLink` handles internal navigation with real anchor elements and preserves modified-click behavior. Avoid competing click handlers.
- `SiteHeader` portals each composition's navigation into the shared sticky host. Keep the measured header offset when scrolling to anchors.
- On the first visit in a browser tab, `LoadingFlight` plays before the requested page. Completion is remembered in session storage, and the original path is preserved. Reduced motion skips the intro. `/loading` explicitly replays it and returns to the hero.
- Page changes use the solid shape fill in `PageTransition`. The viewport is fully covered before mounting and positioning the destination. `SiteLink` supplies the activation position for the shape stagger. Back/Forward uses the same effect; another history action cancels a pending navigation. Homepage section links keep smooth scrolling. Reduced motion skips the effect, and focus moves to the destination section after navigation.
- Scroll updates replace the URL without creating history entries. Learn, Build, Belong shares `/experience`. The manifesto follows it, then `/tracks`.
- Desktop and mobile are alternate compositions, not separate routes. Keep browser Back and direct section URLs working.
