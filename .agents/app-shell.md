# App Shell and Routing

## Ownership

- `src/app/App.tsx` maps URL paths to page components, selects desktop/mobile variants at a 1100px breakpoint, caps the responsive desktop content, and maps imported Figma node IDs to navigation destinations and section anchors.
- `src/app/SiteLayout.tsx` places the appropriate shared navbar and footer around the active route.
- `src/app/StartupGate.tsx` displays the entry loading screen, waits for local fonts and images, and reveals the site after readiness (with a minimum display time and fallback timeout). The Figma enter control can reveal it early.

## Working Rules

- Add or change site paths in `routeFromPath` and the route-to-page selection in `App.tsx` together.
- Button destinations and in-page jumps are keyed by Figma `data-node-id` in `clickDestinations`. Inspect the corresponding page component before changing a mapping; preserve node IDs used as anchors.
- The click handler supports keyboard activation for imported interactive nodes. Keep controls keyboard reachable and avoid adding competing handlers inside page components without checking propagation.
- Keep the startup gate separate from route content. Do not make the loading screen the home page or duplicate navbar/footer inside individual routes.
- Desktop and mobile are alternate compositions selected by a shared breakpoint, not separate routes.
