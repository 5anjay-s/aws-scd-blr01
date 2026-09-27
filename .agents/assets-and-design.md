# Assets and design

Artwork lives in `public/assets/`. Preserve the existing Figma export filenames and root-relative references. `src/asset-manifest.json` records asset ownership; `src/design-manifest.json` maps compositions to Figma frames. Update references and manifests together when removing an unused asset.

Fonts are installed locally through `@fontsource` packages and imported in `src/main.tsx`. Reuse the installed families and weights instead of adding remote font requests or duplicate font files.

Reuse the original local Figma export rather than approximating it or replacing it with stock artwork. Preserve imported `data-node-id` attributes. Inspect both responsive variants and the relevant source SVG before changing artwork layout or motion.

Shared dither borders reuse the original SVG path through `DitherDivider`. Choose section colors that join the adjacent backgrounds. Keep reduced-motion behavior and offscreen pause behavior when changing animations.
