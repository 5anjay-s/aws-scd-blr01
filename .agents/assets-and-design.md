# Assets and Design

## Asset Locations

- `public/assets/desktop/` and `public/assets/mobile/`: home-page artwork.
- `public/assets/technical/{desktop,mobile}/`: technical track artwork.
- `public/assets/nontechnical/{desktop,mobile}/`: non-technical track artwork.
- `public/assets/registration/{desktop,mobile}/`: registration artwork.
- `public/assets/404/{desktop,mobile}/`: not-found artwork.
- `public/fonts/`: local font files registered in `src/styles.css`.

Reference public assets with root-relative URLs (for example, `/assets/technical/desktop/...`). Keep new files in the matching page and device folder, and use descriptive, stable filenames. Reuse the original local Figma export when one exists rather than approximating it with CSS or substituting stock artwork.

## Fidelity and Motion

Figma is the design authority. Inspect the relevant desktop/mobile composition and existing asset before changing typography, dimensions, spacing, color, or responsive behavior. Preserve imported `data-node-id` attributes because routing and anchor navigation depend on them. Motion is implemented in the React components/styles; inspect the existing `motion` usage and CSS keyframes before changing timing or behavior. Respect reduced-motion preferences if adding or revising animation.
