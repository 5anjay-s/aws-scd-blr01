# AWS Student Community Day

React, TypeScript, and Vite implementation of the website designs in the Figma page `00/ Final`.

```sh
npm install
npm run dev
```

Run `npm run build` to type-check and build the production site. TypeScript also checks for unused locals and parameters. Run `npm run preview` to preview that build.

The site opens directly on the Student Community Day hero. Visit `/loading` to play the intro, which automatically opens the hero when the plane finishes its exit. **Enter the day** skips the animation.

The loading screen uses `LoadingFlight` on desktop and mobile. The hero's pixel plane delivers a paper AWS banner from the left with stitched ropes. After the banner settles, the plane releases it and exits right. The banner's folded lower panel opens to reveal the original orange smile; its paper backing then fades, leaving the complete AWS mark. Delivery, opening, and the final logo hold take 2.8 seconds. `LoadingTransition` then sweeps a white dithered cloud from left to right over 900 ms, changing pages while the viewport is covered and clearing to reveal the hero. The Enter the day link uses the same transition. Automatic navigation replaces the loading page's history entry so Back does not replay the intro. The flight pauses while the tab is hidden and adapts its entrance and exit to the viewport. Reduced motion skips both animations and opens the hero immediately.

The implemented pages are `/`, `/technical`, `/non-technical`, `/registration`, and `/404`. Unknown paths use the 404 design. Internal links and section navigation work without a page reload.

Homepage scrolling updates clean section paths such as `/experience`, `/tracks`, and `/partners` without adding browser history entries. Learn, Build, Belong stays under `/experience`, followed by the manifesto and Tracks. The manifesto remains accessible at `/manifesto` but has no header link. Old section hash links, `/program`, and `/partner-lineup` still open the corresponding section using its clean URL. Run `npm test` to check route resolution.

Page navigation renders in a shared sticky header. Section links account for its measured height on desktop and mobile. The navbar uses tighter link spacing and a “Register now” label. The hero highlights November 6th in orange and Bengaluru in cyan. Existing Figma dither geometry separates the manifesto from Tracks in cyan and the programme preview from Speakers in navy.

The desktop and mobile components come from their respective Figma frames. Content is capped at 1440px on desktop and 640px on smaller screens, while section backgrounds and pixel dividers span the browser width. Typography uses responsive sizes with upper limits. Ordinary sections grow around their content; illustrated artwork keeps its own composition dimensions. The page does not use CSS zoom or a scaling transform.

Mobile layouts are used below 1200px; the loading screen uses its desktop composition from 768px. Artwork and fonts are local, and screenshots are reference material only. The responsive style overrides can be regenerated with `python scripts/generate-responsive-css.py`; the layout-specific rules are in `src/styles/responsive.css`.

Official Meetup, LinkedIn, and Instagram destinations can be added in `src/site-config.ts`. Their controls keep the designed appearance and remain inactive while those URLs are empty. The RSVP checkbox records a local confirmation only.

Canvas animations use the exported Figma keyframes and respect reduced-motion preferences. Components retain Figma node IDs to make design comparisons easier. `src/design-manifest.json` maps the components to their source frames, and `src/asset-manifest.json` records the local artwork. Components share byte-identical assets through the same file path.

The hero title uses `HeroTitle` and `HeroTitleWord` to assemble colored square particles into the actual letter shapes, then fade into the original solid text. STUDENT COMMUNITY finishes white and DAY finishes orange, without a pixel grid or checkerboard texture. Each word uses one Motion timeline and a canvas overlay, with no React updates per frame. The sequence lasts about 2.1 seconds and plays once when the title enters the viewport after fonts load. Letter dimensions and spacing stay unchanged. The finished title uses native text, and reduced-motion preferences show it immediately. The text remains accessible and provides a fallback if canvas is unavailable.

Signal stitch accents use `SignalStitch` to reveal the original image from left to right over 800 ms when they enter the viewport. Each instance plays once per mount and keeps its existing dimensions and original colors on every background. Reduced-motion preferences show the complete artwork immediately.

Woven ribbon accents use `WovenRibbon` to move the original white square markings around both strips in opposite directions, including the middle woven crossings. Four parallel tracks carry evenly spaced copies of the original squares around each ten-second circuit without rotation or resizing. The pattern continues behind the crossing and wraps without a spacing gap. Clip paths taken from the original artwork hold the ribbon outline and openings fixed. The dots above blink on and off over 3.2 seconds while visible, independently of hover-controlled strip movement. Native SVG animations pause offscreen and resume from the same point, with no canvas redraw or per-frame JavaScript. Reduced-motion preferences show the original image. Belong’s strips run only while its entire chapter block is hovered, pausing and resuming at the current position like Learn. Community, Partners, and every page footer loop while visible on desktop and mobile.

Curiosity spark artwork rotates as one image, including its center. The cyan Learn block spins its spark only while the block is hovered, pausing and resuming at the current angle. The white introduction uses `ScrollSpark` to rotate one turn as that section passes through the viewport. A damped spring smooths wheel steps without bounce; scrolling up reverses the turn, and scrolling outside the section leaves it stationary. Community sparks retain their continuous rotation. Timed spins take 8 seconds per turn and accept `--spark-spin-duration` overrides. Reduced-motion preferences disable rotation.

Pixel border SVGs use crisp edges, with matching edge colors covering scaling seams above and below each border.

Deployment should serve `index.html` for application routes so direct links to the track and registration pages work.

The mobile speaker directory uses two adjoining columns with square portrait areas and captions below. It keeps the approved placeholder portraits, palette, and copy; the desktop directory is unchanged.

The Build chapter gently opens the two halves of the original bracket artwork on hover or press, keeping its checker center fixed. Programme steps drop into place once as they enter view, staggered 01 → 02 → 03. Each number moves with its artwork and is centered in the solid colored band on desktop and mobile. Reduced-motion preferences leave both elements still.

The manifesto’s background behaves like a live typing field: existing lines stay still while new characters appear beside a square cursor, then completed lines advance. Columns type at slightly different speeds. The original quote silhouettes stay fixed while a stepped flicker travels through their existing cyan or lime dither pixels. The clearing, central copy, and button stay fixed. Typing and pixel flicker pause outside the section and respect reduced-motion preferences on desktop and mobile.
