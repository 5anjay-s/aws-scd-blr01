# Development Workflow

## Adding a Page

1. Create a route folder in `src/pages/<route>/` with one `<Name>Desktop.tsx` and one `<Name>Mobile.tsx` component.
2. Add the URL to `RouteName`, `routeFromPath`, and the desktop/mobile page selection in `src/app/App.tsx`.
3. Add page artwork under `public/assets/<route>/desktop/` and `public/assets/<route>/mobile/`. Put all font files in `public/fonts/`; register any new family or weight in `src/styles.css`.
4. Add Figma `data-node-id` destination mappings in `clickDestinations` for interactive nodes. Keep node IDs used as in-page anchors in the page markup.
5. Confirm both variants at desktop and mobile widths, then run `bun run typecheck` and `bun run build`.

Use the established React, TypeScript, Tailwind utility, and CSS-variable patterns. Shared UI belongs in `src/components/`; shared tokens, font faces, global behavior, and keyframes belong in `src/styles.css`. Consult `.agents/app-shell.md`, `.agents/pages.md`, `.agents/shared-components.md`, and `.agents/assets-and-design.md` for the area being changed. Keep Figma as the source of truth for copy, artwork, layout, and motion.

## Commits

Use the repository's short `type: summary` format. Keep the summary specific and concise, for example:

- `add: Add speakers page`
- `fix: Restore desktop sky metadata`
- `docs: Explain local development setup`
- `refactor: Share track page content`
- `test: Cover route selection`

Choose the type that best describes the change (`add`, `fix`, `docs`, `refactor`, `test`, or `chore`) and write the summary in imperative form.
