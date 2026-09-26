# AWS Student Community Day

The AWS Student Community Day event website. It is a React 19 and TypeScript single-page app, built with Vite, Tailwind CSS, and Bun. Figma is the source of truth for page content, layout, artwork, and motion.

## Getting Started

Install [Bun](https://bun.sh), install dependencies, and start Vite:

```sh
bun install
bun run dev
```

Vite prints the local URL after startup. The project does not require environment variables for local development.

## Project Structure

```text
src/
  app/                  Routing, shared layout, and startup loading gate
  components/           Shared navigation, footer, and loading screens
  pages/                Route-specific page compositions
    home/
    technical/
    nontechnical/
    registration/
    not-found/
  main.tsx               React entry point
  styles.css             Font faces, design tokens, global styles, keyframes
public/
  assets/                Figma artwork grouped by page and device size
  fonts/                 Local font files
.agents/                 Detailed contributor guides by area
```

## How the App Fits Together

- `src/main.tsx` mounts the React app; `src/app/App.tsx` maps the current path to a page and handles navigation.
- Supported paths are `/`, `/technical`, `/non-technical`, and `/registration`. Other paths render the 404 page.
- Each route has a desktop and mobile component. At widths up to 900px, the mobile composition is rendered; otherwise the 1440px desktop composition scales to the available screen width. Mobile artwork is designed on a 390px canvas.
- `src/app/SiteLayout.tsx` wraps each route with the responsive navbar and footer. `src/app/StartupGate.tsx` shows the initial loading screen while page fonts and images load.
- `src/app/App.tsx` maps imported Figma `data-node-id` values to route destinations and section anchors. Preserve those IDs when editing interactive elements and keep their desktop/mobile anchor targets in sync.
- Page files contain the detailed Figma layouts. Shared components, global font declarations, color/spacing variables, and global motion styles live in their respective shared folders/files.

## Design Assets

Use the existing local Figma exports. Home assets are in `public/assets/desktop/` and `public/assets/mobile/`; other routes are grouped under `technical/`, `nontechnical/`, `registration/`, and `404/`, each with `desktop/` and `mobile/` folders. Keep font files in `public/fonts/` and register any new family or weight in `src/styles.css`. Use root-relative asset paths such as `/assets/technical/desktop/example.svg`.

## Common Commands

```sh
bun run dev        # Start the local Vite server
bun run typecheck
bun run build      # Typecheck and produce the production bundle in dist/
```

Before changing code, read [AGENTS.md](AGENTS.md) and the relevant guide in `.agents/`. In particular, [development workflow](.agents/development-workflow.md) covers adding a route/page pair and commit messages; [assets and design](.agents/assets-and-design.md) covers asset and font conventions.
