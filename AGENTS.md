# Project Guide

This is the AWS Student Community Day website, built with React 19, TypeScript, Vite, and Motion. The current website uses npm and package-lock.json. Figma provides the original artwork and compositions; apply the user's approved design changes to both responsive variants.

## Code map

- `src/App.tsx`: route selection, section order, responsive compositions, sticky header host, and scroll navigation.
- `src/navigation.ts`: clean section paths and legacy URL aliases.
- `src/components/`: shared controls and animation components.
- `src/components/design/`: desktop and mobile Figma compositions.
- `src/styles/`: original design styles, generated responsive rules, layout fixes, and motion.
- `public/assets/`: local artwork, mapped in `src/asset-manifest.json`.
- `.agents/`: focused contributor notes. Read the relevant guide before changing an area.

## Commands

- `npm ci` installs the locked dependencies.
- `npm run dev` starts Vite.
- `npm run typecheck` checks TypeScript, including unused locals and parameters.
- `npm test` checks routing and artwork animation helpers.
- `npm run build` typechecks and creates the production build.

Keep shared behavior in `src/components/`, compositions in `src/components/design/`, and routing in `src/App.tsx` and `src/navigation.ts`. Preserve Figma node IDs, original artwork, and desktop/mobile behavior. See `README.md` for setup and animation details.
