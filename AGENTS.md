# Project Guide

This is the AWS Student Community Day website, built with React 19, TypeScript, Vite, and GSAP. The project uses Bun and `bun.lock`. Figma provides the original artwork and compositions; apply the user's approved design changes to both responsive variants.

## Package manager

Use Bun for every install, script, and test. Do not use npm, yarn, or pnpm, and do not create or commit a `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml`.

Before running any project command, check `bun --version`. If Bun is not installed, stop and tell the user to install it from <https://bun.sh> before continuing. Never fall back to npm.

## Code map

- `src/App.tsx`: connects navigation, layout, scroll behavior, and page rendering.
- `src/page-config.ts`: route compositions and section order for desktop and mobile.
- `src/navigation.ts`: hash routes, section URLs, and legacy URL aliases.
- `src/components/`: shared controls and animation components.
- `src/components/design/`: desktop and mobile Figma compositions.
- `src/styles/`: original design styles, generated responsive rules, layout fixes, and motion.
- `public/assets/`: local artwork, mapped in `src/asset-manifest.json`.
- `.agents/`: focused contributor notes. Read the relevant guide before changing an area.

## Commands

- `bun install` installs the dependencies locked in `bun.lock`.
- `bun run dev` starts Vite.
- `bun run typecheck` checks TypeScript, including unused locals and parameters.
- `bun test` checks routing and artwork animation helpers.
- `bun run build` typechecks and creates the production build.
- `bun install --frozen-lockfile` installs exact locked versions in CI.

Keep shared behavior in `src/components/`, compositions in `src/components/design/`, and route definitions in `src/page-config.ts` and `src/navigation.ts`. Preserve Figma node IDs, original artwork, and desktop/mobile behavior. See `README.md` for setup and animation details.
