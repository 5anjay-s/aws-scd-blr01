# Project Guide

This is the AWS Student Community Day website, built with React 19, TypeScript, Vite, Tailwind CSS, and Bun. Figma is the source of truth for page design and interactions.

## Code Map

- `src/app/`: route selection, shared site layout, and first-visit loading screen.
- `src/components/`: shared navigation, footer, and loading-screen components.
- `src/pages/`: home, technical, non-technical, registration, and 404 pages; each has desktop and mobile compositions.
- `src/styles.css`: global styles, fonts, and responsive/design rules.
- `public/assets/`: artwork grouped by page and desktop/mobile variant.
- `public/fonts/`: local font files.
- `.agents/`: focused contributor notes. Read the relevant guide before changing an area.

Before making changes, read the applicable guide in `.agents/`. For project setup and commands, see `README.md`.

## Commands

- `bun run dev` starts the Vite development server.
- `bun run typecheck` checks TypeScript.
- `bun run build` typechecks and creates a production build.

Keep shared chrome in `src/components/`, page content in `src/pages/`, and route/button behavior in `src/app/App.tsx`. Preserve Figma node IDs and existing desktop/mobile behavior when editing imported page components.
