# INBS Real Estate

Standalone bilingual (English / Arabic) real estate website. Uses the INBS brand and shared public contact details; it does **not** import the other site's pages or advertise non-existent property listings.

## Stack
Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, next-intl, Motion, Lenis and Lucide React. No forms, CMS, database or property-listings library has been introduced.

## Local development
Use a supported Node.js LTS compatible with Next.js 16.

```bash
npm ci
npm run dev
```

- English: http://localhost:3000/en
- Arabic: http://localhost:3000/ar
- Root `/` redirects to `/en`

## Checks
```bash
npm run lint
npm run build
npx tsc --noEmit
```

With the production server running in another terminal (`npm run start`), execute:
```bash
npm run test:smoke
```

The smoke test assumes **prelaunch mode** (`SITE_INDEXABLE` unset or false). GitHub Actions runs it on PRs targeting `redesign` or `main`, with no Vercel integration required.

If Next.js route files are moved and `tsc` reports deleted paths inside `.next/types`, stop the dev server and delete the generated `.next` directory before rebuilding. Do not change source files to work around stale generated declarations.

## Publishing & SEO
- `SITE_INDEXABLE` defaults to false, so previews and unfinished pages are `noindex`; `robots.txt` disallows crawling and the sitemap is empty.
- `SITE_URL` is intentionally not set until the final domain is approved.
- Only set `SITE_URL=https://your-approved-domain` and `SITE_INDEXABLE=true` on an approved **production** environment, after the site's public pages are complete.
- Canonical and language alternate metadata are added when `SITE_URL` is configured.
- The sitemap currently includes only the two real homepage routes once indexing is enabled. Update it as pages go live; never add unbuilt routes.
- No placeholder production domain or fabricated property offers.

See `.env.example` for the available variables. Do not commit actual credentials.

## Shared design
The approved parent-company logo is stored at `public/brand/inbs-logo.png`. Fonts, typography scales, colors, dark/light surfaces and spacing primitives live in `src/app/globals.css`. Locale-specific document `lang` and `dir` are set by `src/app/[locale]/layout.tsx`.

Reusable but optional helpers:
- `ThemeToggle` uses the same storage key as the parent site (`inbs-theme`).
- `SmoothScroll` lazy-loads Lenis only for fine-pointer devices when reduced motion is not requested.
- `Reveal` uses Motion and respects reduced-motion preferences.

The temporary setup page is not the approved website design. Header, footer, Home Hero, content pages, property features, and final 404 presentation belong to the design phase.

## Git workflow
- `feature/*`: local feature work without Vercel deployment
- `redesign`: approved integration work
- `main`: production-ready branch

The current PR targets `redesign`. Merge only after reviewing the code, local visual behavior, and GitHub Actions quality checks. Connecting Vercel requires separately configuring branch deploy restrictions.

## Known open items
- The npm dependency audit previously reported seven moderate advisories in development lint tooling. Recheck and resolve safely before production deployment.
- Final Lighthouse, browser-based accessibility, deployment, and domain/hosting validation require real pages and a target environment.
