# 6133-SPUD Build Report

Status: final build and deployment report

## Outcome

The Presidential Cannabis authority site was built as a statically generated Next.js publication, verified, committed, pushed to its private GitHub repository, and deployed to Vercel.

- Production alias: https://presidential-cannabis-net.vercel.app
- Primary custom hostname configured in Vercel: https://presidentialcannabis.net
- `www` hostname configured with a permanent redirect to the apex.
- Publication routes: 30 of 30 built; 30 of 30 returned HTTP 200 from the stable Vercel alias.
- Content structure: 1 pillar, 4 topic hubs, 24 supporting articles, and 1 about page.
- Total editorial word count: 21,851.
- Packaging images: 111 unique files, with zero repeated source images.
- Image product links: 109 linked and 2 intentionally unlinked.
- Pillar-link compliance: 24 of 24 supporting articles use the exact anchor text `Presidential Cannabis`.
- Contextual outbound links: 30, one on every publication page, with unique anchor labels.

## Page inventory and editorial word counts

The audit counts page-owned editorial copy and excludes shared header/footer/interface text.

| Route | Role | Words | Live check |
| --- | --- | ---: | --- |
| `/` | Pillar | 2,233 | 200 |
| `/plant` | Hub | 499 | 200 |
| `/plant/what-cannabis-is` | Article | 783 | 200 |
| `/plant/indica-sativa-hybrid` | Article | 755 | 200 |
| `/plant/trichomes` | Article | 745 | 200 |
| `/plant/cannabinoids-in-the-plant` | Article | 711 | 200 |
| `/plant/the-flower-structure` | Article | 740 | 200 |
| `/plant/harvest-timing` | Article | 702 | 200 |
| `/plant/drying-and-curing` | Article | 701 | 200 |
| `/flower` | Hub | 488 | 200 |
| `/flower/what-makes-good-flower` | Article | 738 | 200 |
| `/flower/appearance` | Article | 703 | 200 |
| `/flower/aroma` | Article | 718 | 200 |
| `/flower/density-and-structure` | Article | 708 | 200 |
| `/flower/moisture-and-cure` | Article | 731 | 200 |
| `/flower/storing-flower` | Article | 732 | 200 |
| `/genetics` | Hub | 480 | 200 |
| `/genetics/how-strains-are-made` | Article | 720 | 200 |
| `/genetics/phenotypes` | Article | 725 | 200 |
| `/genetics/lineage` | Article | 721 | 200 |
| `/genetics/strain-naming` | Article | 706 | 200 |
| `/genetics/landrace-and-modern` | Article | 700 | 200 |
| `/genetics/why-two-batches-differ` | Article | 711 | 200 |
| `/choosing` | Hub | 475 | 200 |
| `/choosing/reading-a-menu` | Article | 732 | 200 |
| `/choosing/what-to-ask` | Article | 700 | 200 |
| `/choosing/first-time` | Article | 708 | 200 |
| `/choosing/flower-vs-infused` | Article | 725 | 200 |
| `/choosing/matching-format-to-occasion` | Article | 710 | 200 |
| `/about` | About | 351 | 200 |
| **Total** | **30 pages** | **21,851** | **30/30** |

## Packaging image inventory

The source graphics were normalized to production WebP assets and deduplicated by SHA-256 before assignment.

- Unique source/output assets: 111.
- Repeated assets across publication pages: 0.
- Product-linked images: 109.
- Intentionally unlinked images: 2.
- Unlinked asset 1: `/images/presidential-head-cheese-infused-pre-roll-packaging.webp` on `/choosing/flower-vs-infused`.
- Unlinked asset 2: `/images/presidential-head-cheese-blunt-packaging.webp` on `/about`.
- Output dimensions: 1200 x 1200 or 1080 x 1350, depending on source composition.
- Alt text: unique per image and between 5 and 15 words.
- Largest combined raw source-image allocation on one page: 1.412 MB on `/`; no page reaches 2 MB.
- Layout: editorial images appear on the right in desktop layouts; the custom SVG presentation frame keeps a 16 px internal inset and removes ornaments on compact screens.
- Captions: none.

## Internal and outbound linking

- Every supporting article links to its owning topic hub.
- Every supporting article contains exactly three contextual sideways links within its own silo.
- All 24 supporting articles link to the pillar with the exact anchor `Presidential Cannabis`.
- Every one of the 30 publication pages contains one contextual outbound link to an authoritative source.
- Outbound anchor labels are unique across the site.
- The footer explicitly links all four hubs and the about page.
- No named-strain pages, per-state pages, extract-chemistry pages, or instructional blunt pages were added.

## Technical SEO and implementation

- Framework: Next.js 16.3.0, React 19.2.8, TypeScript 7.0.2, and Tailwind CSS 4.3.3.
- Runtime used for verification: Node.js 24.13.0.
- All 30 publication routes are generated statically with `dynamicParams = false`.
- Every page has title, description, canonical URL, Open Graph metadata, and structured data.
- Technical endpoints include `/robots.txt`, `/sitemap.xml`, and `/image-sitemap.xml`; all returned HTTP 200 on the stable Vercel alias.
- Canonicals use the apex hostname.
- `www.presidentialcannabis.net` has an application-level permanent redirect to `presidentialcannabis.net`.
- The visual system uses black, teal `#58C3B6`, and a gold gradient, with a sticky header and no smooth-scrolling rule.
- The site has no CMS and no client-side content dependency.

## Verification

| Check | Result |
| --- | --- |
| `npm run typecheck` | Passed |
| `npm run audit` | Passed with no failures |
| `npm run build` | Passed; 35 static outputs including the 30 publication pages and technical routes |
| `npm audit --omit=dev --json` | 0 production vulnerabilities |
| Vercel production build | Passed; deployment Ready |
| Stable-alias route probe | 30/30 publication routes returned HTTP 200 |
| Technical endpoint probe | `robots.txt`, `sitemap.xml`, and `image-sitemap.xml` returned HTTP 200 |
| Browser QA/screenshots/baselines | Intentionally not run, per 6133-SPUD brief |

The content audit also confirmed zero prohibited external site domains, prohibited chemistry terms, captions, smooth-scrolling declarations, reversed editorial image layouts, or image reuse.

## Deployment and DNS

- Vercel project: `paulie-pauliewoods-projects/presidential-cannabis-net`.
- Vercel project ID: `prj_KViDQ6A4nfBLq13Yj79NFfjS54kr`.
- Deployment ID: `dpl_BE7TWm8udocw1BZYqMdRkXw78dQs`.
- Stable Vercel URL: https://presidential-cannabis-net.vercel.app
- Immutable deployment URL: https://presidential-cannabis-3omdnthik-paulie-pauliewoods-projects.vercel.app
- Configured aliases: `presidentialcannabis.net`, `www.presidentialcannabis.net`, `presidential-cannabis-net.vercel.app`, and `presidential-cannabis-net-paulie-pauliewoods-projects.vercel.app`.
- DNS remains intentionally pending at the third-party registrar, as directed in the brief.
- Vercel's current recommended records are `A presidentialcannabis.net 76.76.21.21` and `A www.presidentialcannabis.net 76.76.21.21`.
- Once DNS points to Vercel, the apex is primary and the application returns a permanent redirect from `www` to the apex.

## Source control and rollback

- Private repository: https://github.com/MONKEEJUMP/presidential-cannabis-net
- Deployed build commit: `6ecc76572f2177b0d8ec021e8463abbf4d114c7a`.
- Short SHA: `6ecc765`.
- Build commit message: `Build Presidential Cannabis authority site`.
- Rollback command: `git revert 6ecc76572f2177b0d8ec021e8463abbf4d114c7a`.
- A Vercel rollback can also target deployment `dpl_BE7TWm8udocw1BZYqMdRkXw78dQs`.

## Research source log

Primary and authoritative sources used to verify and qualify the educational content:

1. Female cannabis architecture and flowering: https://doi.org/10.3389/fpls.2019.00350
2. Photoperiod and adult flower initiation: https://pmc.ncbi.nlm.nih.gov/articles/PMC11560369/
3. Trichome morphology and metabolites: https://doi.org/10.1111/tpj.14516
4. Trichome development, dimensions, and asynchronous maturation: https://doi.org/10.1186/s42238-023-00178-9
5. Cannabinoid synthesis in trichomes: https://doi.org/10.1093/pcp/pci166
6. Acidic cannabinoid biosynthesis: https://pmc.ncbi.nlm.nih.gov/articles/PMC3411943/
7. Cannabis systematics and category terminology: https://doi.org/10.1089/can.2018.0039
8. Commercial labels and genomics: https://doi.org/10.1038/s41477-021-01003-y
9. Phenotypic plasticity in clones: https://doi.org/10.1371/journal.pone.0213434
10. The landrace concept: https://pmc.ncbi.nlm.nih.gov/articles/PMC5296298/
11. Genotype and harvest timing: https://doi.org/10.1021/acs.jnatprod.5b00949
12. Drying temperature and terpene retention: https://doi.org/10.1016/j.indcrop.2021.114051
13. One-year storage study: https://doi.org/10.3389/fpls.2020.583605
14. Drying, storage, and volatile profiles: https://doi.org/10.1007/s00216-024-05321-w
15. ASTM water activity standard: https://store.astm.org/d8197-22.html

Research checks led to explicit editorial caveats around indica/sativa label limits, trichome-size variation, asynchronous maturity, genotype-dependent harvest timing, the predominance of acidic cannabinoids in fresh plant material, genotype-versus-phenotype distinctions in clones, and the lack of one universal curing standard.

## Full defect log

The following is the complete contents of `DEFECTS.md` at closeout.

### 6133-SPUD Defect Log

### Technical foundation — audit runner path

- Problem: The first `npm run audit` invocation resolved `import.meta.dirname` as undefined because `tsx` loaded the audit script through its CommonJS register path.
- Action: Switched the audit root to the verified npm working directory (`process.cwd()`), then reran the audit.
- Fallback: None required; the site typecheck was already green and the audit resumed immediately.

### Editorial audit — coverage ranges and short alt text

- Problem: The first full registry audit found structurally complete drafts below the specified coverage ranges and twelve otherwise unique image alts with four words instead of the required five-word minimum.
- Action: Added page-specific editorial depth without adding routes or sections, updated the generated alt pattern to include `package artwork`, regenerated all images and the asset registry, and reran the full audit.
- Fallback: None required; route, image-uniqueness, silo-linking, and outbound-link checks were already green.

### Deployment — Vercel domain command syntax

- Problem: Vercel CLI 50.10.0 displayed `domains add domain project` in help, but rejected the two-argument form in this already linked workspace with `expects one argument`.
- Action: Retried with the linked-project one-argument form for the apex and `www` hostnames, then inspected the assignments.
- Fallback: The application also carries a permanent host-based redirect from `www.presidentialcannabis.net` to the apex.
