# App shell and routing

- `src/App.tsx` connects the app shell. `src/page-config.ts` defines route compositions and section order; `PageSections` resolves them through `src/design-manifest.json`.
- `useSiteNavigation` owns history, first-visit loading, and transition commits. `usePageScroll` owns anchor positioning, focus, transition scroll locking, and section URL tracking. Their shared refs coordinate arrival behavior and deduplicate history events.
- `usePageLayout` subscribes to responsive breakpoint changes and measures the sticky header host. The breakpoint is 1200px, or 768px for the loading page. CSS handles resizing between breakpoints; avoid rerendering all sections for each resize event.
- `src/navigation.ts` owns hash URLs such as `/#loading` and `/#tracks`, plus legacy clean-path aliases. Update route resolution alongside section anchors. Standalone page anchors use `/#faq/plan-your-visit`.
- `SiteLink` handles internal navigation with real anchor elements and preserves modified-click behavior. Avoid competing click handlers.
- `SiteHeader` portals each composition's navigation into the shared sticky host. Keep the measured header offset when scrolling to anchors.
- On the first visit in a browser tab, `LoadingFlight` plays before the requested page. Completion is remembered in session storage, and the original destination is preserved. Reduced motion skips the intro. `/#loading` explicitly replays it and returns to the hero.
- Page changes use the solid shape fill in `PageTransition`. The viewport is fully covered before mounting and positioning the destination. `SiteLink` supplies the activation position for the shape stagger. Back/Forward uses the same effect; another history action cancels a pending navigation. Homepage section links keep smooth scrolling. Reduced motion skips the effect, and focus moves to the destination section after navigation.
- Scroll updates replace the hash URL without creating history entries. Learn, Build, Belong shares `/#experience`. The manifesto follows it, then `/#tracks`. Deduplicate popstate/hashchange events so a single Back/Forward action cannot cancel its own transition.
- Desktop and mobile are alternate compositions, not separate routes. Keep browser Back and direct section URLs working.
