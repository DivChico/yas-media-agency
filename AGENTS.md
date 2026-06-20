# AGENTS.md — Zone Marketing (Landing Starter)

## Project identity

- **`@DivChico/zone-marketing`** — landing page starter template. Extracted from the `@DivChico/zone-mui-template` monolith.
- Private repo; not published to npm.

## Origin

Extracted from the [zone-mui-template](https://github.com/DivChico/zone-mui-template) monolith. Marketing pages are at top-level routes (not nested under `/marketing/`). All shared infrastructure (theme, components, layouts, hooks, utils, auth, payment, pricing, support, etc.) is preserved.

## Pages included

| Route | Content |
|---|---|
| `/` | Landing page (home) |
| `/services/` | Services |
| `/case-studies/` | Case studies list |
| `/case-study/` | Case study detail |
| `/posts/` | Blog posts list |
| `/post/` | Blog post detail |
| `/about/` | About page |
| `/contact/` | Contact page |

Plus shared pages: auth (login/register/reset-password/verify-code), pricing, payment, support, components showcase, 404, 500, coming-soon, maintenance.

## Framework & routing

- **Next.js 13 Pages Router** — uses `pages/`, NOT App Router.
- **Port 8002** — `npm run dev` starts on `http://localhost:8002`.
- **`trailingSlash: true`** — all URLs end with `/`.
- **`baseUrl: "."`** — absolute imports: `import Foo from 'src/components/Foo'`.

## CSS-in-JS

- **Emotion** (MUI v5). Import: `import { styled } from '@emotion/styled'`.
- SSR via `getInitialProps` in `_document.tsx`.
- `"jsxImportSource": "@emotion/react"` in tsconfig.

## Architecture

```
src/
  pages/         — Next.js Pages Router entrypoints (flat, no /marketing/ prefix)
  sections/
    _marketing/  — Marketing-specific views & components
    _home/       — Home page components
    auth/        — Auth pages (login, register, etc.)
    payment/     — Payment UI
    pricing/     — Pricing pages
    support/     — Support page
    blog/        — Blog components
    contact/     — Contact form
    testimonial/ — Testimonials
    team/        — Team showcase
    our-clients/ — Client logos
    newsletter/  — Newsletter signup
  components/    — Reusable UI components (21)
  layouts/       — Main, compact, simple layouts
  theme/         — MUI theme config
  hooks/         — Custom React hooks
  routes/        — Route path constants
  types/         — TypeScript definitions
  utils/         — Helper utilities
  _mock/         — Static demo data
```

## Key commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server on port 8002 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with auto-fix |
| `npm run prettier` | Prettier format |
| `npm run clear-all` | Remove `.next`, `node_modules` |

## Verification

```bash
npm run lint  &&  npm run build
```

No tests exist. No typecheck script.

## Customizing

- **Colors** — edit `src/theme/palette.ts`
- **Fonts** — edit `src/theme/typography.ts`
- **Sections** — add/remove sections in `src/sections/_marketing/`
- **Theme mode / direction** — uses `SettingsProvider` context

## Dependencies

Next.js ^13.2.4, React ^18.2.0, MUI ^5.11.15, Emotion ^11.10, Framer Motion ^10.9.2, TypeScript ^5.0.2, react-hook-form + yup.

## Package manager

- **npm only.**
