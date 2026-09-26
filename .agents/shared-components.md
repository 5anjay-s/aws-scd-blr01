# Shared Components

Shared site chrome is grouped by responsibility:

- `src/components/navigation/`: desktop and mobile navbars.
- `src/components/footer/`: desktop and mobile footers.
- `src/components/loading/`: desktop and mobile entry/loading screens.

`SiteLayout` chooses the navbar and footer variants. `StartupGate` chooses the loading-screen variant. Edit the relevant pair when a shared feature should appear consistently across screen sizes; avoid copying these elements into route pages.

Keep existing Figma node IDs on interactive elements. `src/app/App.tsx` uses those IDs to connect controls to routes and anchors. Check keyboard behavior, focusability, and narrow viewport layout when changing controls. Shared component styles and global design rules are in `src/styles.css`.
