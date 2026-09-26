# Assets and Design

## Asset Locations

- `public/assets/desktop/` and `public/assets/mobile/`: home-page artwork.
- `public/assets/technical/{desktop,mobile}/`: technical track artwork.
- `public/assets/nontechnical/{desktop,mobile}/`: non-technical track artwork.
- `public/assets/registration/{desktop,mobile}/`: registration artwork.
- `public/assets/404/{desktop,mobile}/`: not-found artwork.
- `public/fonts/`: local font files registered in `src/styles.css`.

Store new images and SVGs under the matching page and device folder. Home-page art belongs in `public/assets/desktop/` or `public/assets/mobile/`; route-specific art belongs in that route's `desktop/` or `mobile/` folder. Reference files with root-relative URLs (for example, `/assets/technical/desktop/session-art.svg`) and use descriptive, stable filenames.

Store font files only in `public/fonts/`. Before adding one, check whether the family and weight already exist. For a new font or weight, add an `@font-face` declaration to `src/styles.css` with the exact family, weight, style, and a `/fonts/...` source; use that family in page styles rather than remote font URLs.

Reuse the original local Figma export when one exists rather than approximating it with CSS or substituting stock artwork. Avoid renaming or moving an asset without updating every reference to it.

## Fidelity and Motion

Figma is the design authority. Inspect the relevant desktop/mobile composition and existing asset before changing typography, dimensions, spacing, color, or responsive behavior. Preserve imported `data-node-id` attributes because routing and anchor navigation depend on them. Motion is implemented in the React components/styles; inspect the existing `motion` usage and CSS keyframes before changing timing or behavior. Respect reduced-motion preferences if adding or revising animation.
