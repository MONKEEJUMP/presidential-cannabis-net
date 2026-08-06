# Presidential Cannabis Project Law

## Project identity

- Name: presidentialcannabis.net
- Canonical root: `J:\presidential-cannabis-net`
- Mission: a 30-page reference publication about the cannabis plant, flower, genetics, cultivation, and choosing.
- Current phase: initial production build under brief `6133-SPUD`.

## Subject boundary

- This site owns the plant, flower, genetics, cultivation, and choosing.
- Never add an individual named-strain page, extract-chemistry explainer, blunt-format article, or per-state page.
- Never link to presidentialthc.net or presidentialblunts.net.
- Do not copy text or the figure component from another Presidential repository.
- Do not touch `J:\presidential-official`, `J:\presidential-thc-net`, or `J:\presidential-blunts-net`.

## Commands

- Install: `npm install`
- Develop: `npm run dev`
- Prepare images: `npm run images`
- Typecheck: `npm run typecheck`
- Content and architecture audit: `npm run audit`
- Production build: `npm run build`

## Verification gates

- Exactly 30 registered routes and `dynamicParams = false`.
- Every page has one H1, self-canonical, index/follow, OG image, and `summary_large_image`.
- Every article links to its hub and to the pillar with anchor text `Presidential Cannabis`.
- Every article has two or three same-silo sideways links.
- Every assigned image is unique, WebP, dimensioned, alt-tagged, and placed on the right at desktop.
- No visible image captions, alternating media, smooth scrolling, dropdowns, video, or age gate.
- Production build must pass before deployment.

## Git and deployment

- Preserve unrelated work and never rewrite history destructively.
- New Vercel project name: `presidential-cannabis-net`.
- Apex domain is primary; `www` redirects permanently to apex.
- Required report: `docs/6133-SPUD-BUILD-REPORT.md`.
- Log recoverable problems and fallbacks in `DEFECTS.md`, then continue.

