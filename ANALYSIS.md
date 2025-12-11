# Repository Analysis

This project is a Next.js 16 portfolio site built with Once UI. Key behavior and configuration are centralized in the app shell and reusable resource files.

## Application Shell
- `src/app/layout.tsx` composes the HTML scaffold with Once UI primitives, injects a theme initialization script that applies default data attributes from the config, and restores user overrides from `localStorage` before hydration to avoid flashes of incorrect theme. It also wires up global background effects, the header/footer, and a `RouteGuard` wrapper for page content.
- `src/app/page.tsx` implements a fixed hero overlay that locks page scrolling while active and restores the prior `overflow` values on unmount. The overlay uses `pointerEvents: "none"` globally so underlying UI stays interactive while keeping the headline and subtitle selectable.

## Content and Configuration
- `src/resources/index.ts` re-exports the data-driven site configuration, keeping consumption consistent across components.
- `src/resources/content.tsx` defines the portfolio owner profile, social links, newsletter settings, and home page metadata that feed into the UI and SEO helpers.

These files together show how presentation, theming, and content are organized, making it easier to adapt the template for new deployments.
