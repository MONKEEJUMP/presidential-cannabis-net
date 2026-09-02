# Presidential Moon Rocks SEO Follow-Up

Provenance ID: `PW6133-1002`

Prepared: 2026-09-02

Target repository: `presidentialmoonrocks.com` (documentation only; no files in that repository were edited)

## Portfolio intent

- `https://presidentialcannabis.net/` owns the brand-entity and plant-education query `presidential cannabis`.
- `https://presidentialmoonrocks.com/` remains the product catalog, Moon Rocks platform, official brand experience, and licensed-retailer locator.
- State properties remain local retail guides and must not become duplicate brand-definition pages.

## Required moonrocks change

Add one prominent, crawlable, dofollow HTML link from an appropriate brand or learning section on presidentialmoonrocks.com to:

- URL: `https://presidentialcannabis.net/`
- Preferred anchor: `Presidential Cannabis`
- Acceptable alternate: `Presidential Cannabis official guide`

Do not add `rel="nofollow"`, use a scripted click handler without an `href`, or route the link through a tracking redirect. The public anchor should describe the destination as the official plant-and-brand guide.

## Cannibalization guardrails

- Do not make the moonrocks homepage title or H1 primarily target `Presidential Cannabis`.
- Keep the moonrocks homepage centered on Presidential products, Moon Rocks, platform discovery, and the store locator.
- Send broad company-definition and plant-education intent to presidentialcannabis.net.
- Keep product names, catalog details, and `find us` intent on presidentialmoonrocks.com.
- Do not create duplicate brand-history or plant-guide doorway pages on state properties.

## Search Console follow-up

1. Verify both domains in Google Search Console with the appropriate DNS property access.
2. Submit `https://presidentialcannabis.net/sitemap.xml` and confirm it is fetched without errors.
3. Submit or confirm the moonrocks sitemap separately under its own property.
4. Use URL Inspection to request indexing for `https://presidentialcannabis.net/` and `https://presidentialcannabis.net/about`.
5. Inspect the rendered HTML in URL Inspection and confirm the canonical, title, brand copy, Organization/WebSite/AboutPage markup, FAQ content, and dofollow cross-domain link are visible.
6. Monitor queries for `presidential cannabis`, `presidential cannabis brand`, `presidential cannabis company`, and `official presidential cannabis` without assuming or promising a ranking position.

## Verification after the moonrocks edit

- Anonymous HTTP request returns the public moonrocks page rather than a Vercel login or request-access screen.
- The link exists in server-rendered HTML as a normal `<a href="https://presidentialcannabis.net/">` element.
- The link has no `nofollow` attribute.
- Moonrocks retains its product-oriented title and H1.
- Both sites use their intended self-canonicals and do not canonicalize to one another.
- Both sitemap files contain only public, canonical, indexable URLs.

## Current evidence

The official moonrocks site and `/find-us` page were checked on 2026-09-02. They publicly support the 2012 Los Angeles founding, Everett Smith and John Zapp as founders, Presidential as the company, Moon Rocks as a flagship platform, a wholesale/licensed-retail path, and the `/find-us` locator. Florida expansion was supplied in the project brief but was not visible on the current official locator, so it was not added to public copy in this repository.
