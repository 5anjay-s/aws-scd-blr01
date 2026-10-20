# Development workflow

## Changes

1. Inspect the relevant desktop/mobile compositions in `src/components/design/` and shared behavior in `src/components/`.
2. Add new composition mappings to `src/design-manifest.json` and update route/section selection in `src/page-config.ts` and `src/navigation.ts` together.
3. Reuse artwork from `public/assets/`. Keep asset references and `src/asset-manifest.json` current.
4. Keep layout fixes in `src/styles/responsive.css` and animation styles in `src/styles/interactions.css`. Original Figma styles live in `design.css`; `scripts/generate-responsive-css.py` generates the companion responsive sheet.
5. Verify affected desktop/mobile layouts, then run `bun test` and `bun run build`. The build includes TypeScript checking; use `bun run typecheck` for a quick standalone check during development.

Use Bun with the committed `bun.lock`; never use npm, yarn, or pnpm or create another lockfile. If `bun --version` fails, ask the user to install Bun from <https://bun.sh> and wait for them to do it before continuing. Do not fall back to npm. Do not retain obsolete route trees, generated build output, duplicate artwork, or unused dependencies. TypeScript checks unused locals and parameters.

## Commits

Use the repository's short `type: summary` format. Choose `add`, `fix`, `docs`, `refactor`, `test`, or `chore`, and write a specific imperative summary.
