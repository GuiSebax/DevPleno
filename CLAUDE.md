# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`meu-portfolio` — a personal developer portfolio built as a single-page React application. All source code lives under `meu-portfolio/`.

## Commands

All commands must be run from `meu-portfolio/`.

```bash
npm run dev        # start Vite dev server
npm run build      # production build
npm run lint       # ESLint
npm run test       # run tests once (vitest)
npm run test:watch # vitest in watch mode
npm run preview    # preview the production build locally
```

Run a single test file:
```bash
npx vitest run src/test/example.test.ts
```

## Architecture

Single-page app — one route (`/`) renders `Index.tsx`, which stacks all portfolio sections in order: `Navbar → Hero → About → Skills → Projects → Experience → Contact → Footer`. A catch-all route shows `NotFound.tsx`.

**`src/components/`** — one file per portfolio section (flat, no sub-folders except `ui/`). Section components are self-contained: data (projects list, skills, etc.) is defined as constants inside the component file, not in a separate data layer.

**`src/components/ui/`** — shadcn/ui primitives (do not edit directly; regenerate via `npx shadcn-ui add <component>`). Path alias `@/components/ui`.

**`src/lib/utils.ts`** — `cn()` helper (clsx + tailwind-merge). Import with `@/lib/utils`.

**`src/hooks/`** — `use-mobile.tsx` and `use-toast.ts`.

**`src/pages/`** — only `Index.tsx` and `NotFound.tsx`.

**Styling** — Tailwind CSS with CSS variables defined in `src/index.css`. The palette is a dark terminal/code theme: `--primary` is terminal green (`hsl(160 100% 48%)`), fonts are JetBrains Mono (mono) and Inter (sans). Class names like `font-mono`, `text-primary`, `bg-card`, `section-line`, and `card-hover` appear throughout — the last two are custom utility classes defined in `index.css`.

**Animations** — Framer Motion (`motion.*`, `AnimatePresence`) used on all section entrances and on the `Projects` modal.

**To add a new project** — edit the `projects` array constant at the top of `src/components/Projects.tsx`. Project images go in `public/` and are referenced by filename (e.g. `"/photo.png"`).

## Testing

Test setup uses `vitest` + `@testing-library/react` + `jsdom`. Setup file is `src/test/setup.ts`. Currently only a placeholder test exists; the test suite does not cover UI components.
