# INBS Real Estate

Independent bilingual real estate website for INBS, built with Next.js App Router, React, TypeScript, Tailwind CSS and next-intl.

## Development

Requires a supported Node.js version compatible with the project's Next.js release.

```bash
npm ci
npm run dev
```

Open http://localhost:3000/en for English or http://localhost:3000/ar for Arabic. The root path redirects to English.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Branches

- `main`: approved main branch
- `redesign`: integration branch
- `feature/*`: development and local review

Only merge reviewed features after the required checks.

## Current scope

The foundation contains the two-language routing, initial brand tokens and contact data. Page design and content are not yet approved. Property listings are intentionally excluded until real listings are available.

Do not add third-party packages or introduce forms, content-management systems or listing infrastructure without an actual project requirement.

The default create-next-app graphics and favicon were removed. An official brand favicon can be added when the approved asset is available.
