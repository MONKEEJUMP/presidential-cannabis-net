import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { pages } from "../src/content/index";
import { pageImages } from "../src/content/assets";

const root = process.cwd();
const failures: string[] = [];
const warnings: string[] = [];

function assert(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

function words(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function pageWords(page: (typeof pages)[number]): number {
  return [
    ...page.intro,
    ...(page.faq?.flatMap((item) => [item.question, item.answer]) ?? []),
    ...page.sections.flatMap((section) => [
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.table?.rows.flat() ?? []),
    ]),
  ].reduce((total, value) => total + words(value), 0);
}

const expectedPaths = [
  "/",
  "/plant",
  "/plant/what-cannabis-is",
  "/plant/indica-sativa-hybrid",
  "/plant/trichomes",
  "/plant/cannabinoids-in-the-plant",
  "/plant/the-flower-structure",
  "/plant/harvest-timing",
  "/plant/drying-and-curing",
  "/flower",
  "/flower/what-makes-good-flower",
  "/flower/appearance",
  "/flower/aroma",
  "/flower/density-and-structure",
  "/flower/moisture-and-cure",
  "/flower/storing-flower",
  "/genetics",
  "/genetics/how-strains-are-made",
  "/genetics/phenotypes",
  "/genetics/lineage",
  "/genetics/strain-naming",
  "/genetics/landrace-and-modern",
  "/genetics/why-two-batches-differ",
  "/choosing",
  "/choosing/reading-a-menu",
  "/choosing/what-to-ask",
  "/choosing/first-time",
  "/choosing/flower-vs-infused",
  "/choosing/matching-format-to-occasion",
  "/about",
];

assert(pages.length === 30, `Expected 30 pages, found ${pages.length}`);
assert(new Set(pages.map((page) => page.path)).size === pages.length, "Page paths must be unique");
assert(expectedPaths.every((expected) => pages.some((page) => page.path === expected)), "The registered route set differs from the 6133 specification");
assert(pages.filter((page) => page.kind === "pillar").length === 1, "Expected one pillar");
assert(pages.filter((page) => page.kind === "hub").length === 4, "Expected four hubs");
assert(pages.filter((page) => page.kind === "article").length === 24, "Expected 24 articles");
assert(pages.filter((page) => page.kind === "about").length === 1, "Expected one about page");
assert(new Set(pages.map((page) => page.title)).size === pages.length, "Every page title must be unique");
assert(new Set(pages.map((page) => page.description)).size === pages.length, "Every meta description must be unique");

const homepage = pages.find((page) => page.path === "/");
const aboutPage = pages.find((page) => page.path === "/about");
assert(homepage?.title === "Presidential Cannabis | Official Brand & Plant Guide", "Homepage title does not match the approved brand title");
assert(homepage?.description === "Presidential Cannabis is the official Los Angeles brand behind Moon Rocks and infused pre-rolls — plus the definitive plant guide to flower, genetics, and choosing well at licensed retailers.", "Homepage meta description does not match the approved copy");
assert(homepage?.h1 === "Presidential Cannabis", "Homepage H1 must remain Presidential Cannabis");
assert(homepage?.intro[0] === "Presidential Cannabis is the original Los Angeles cannabis brand founded in 2012 — the house behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis sold through licensed retailers. This site is the official Presidential Cannabis home for understanding the plant behind every product: flower quality, genetics, cultivation, harvest and cure, and how to choose with confidence at a licensed counter.", "Homepage opening paragraph does not match the approved entity copy");
assert(homepage?.sections.some((section) => section.heading === "What is Presidential Cannabis?"), "Homepage needs the approved What is Presidential Cannabis? H2");
assert(homepage?.faq?.length === 5, "Homepage must expose all five approved brand FAQs");
for (const sectionId of ["the-catalog", "where-it-is-sold", "authenticity"]) {
  const section = homepage?.sections.find((candidate) => candidate.id === sectionId);
  assert(section?.links?.some((link) => link.href.startsWith("https://presidentialmoonrocks.com")), `Homepage ${sectionId} section needs a dofollow Presidential handoff`);
}
assert(aboutPage?.title === "About Presidential Cannabis | Brand & Publisher", "About title does not match the approved brand title");
assert(aboutPage?.description === "About Presidential Cannabis: the Los Angeles brand behind Moon Rocks and the official publisher of this plant guide to flower, genetics, and choosing at licensed retailers.", "About meta description does not match the approved copy");
assert(aboutPage?.h1 === "About Presidential Cannabis", "About H1 must identify the brand");
assert(aboutPage?.relatedLinks?.length === 5, "About must link to the homepage and all four topic hubs");
assert(aboutPage?.sections.some((section) => section.links?.some((link) => link.href === "https://presidentialmoonrocks.com/find-us")), "About needs a direct licensed-retailer handoff");
assert(pages.filter((page) => !["/", "/about"].includes(page.path)).every((page) => !page.h1.includes("Presidential Cannabis")), "Interior topical H1s must not compete for the brand query");

const wordCounts: Record<string, number> = {};
for (const page of pages) {
  const count = pageWords(page);
  wordCounts[page.path] = count;
  assert(count >= page.wordTarget[0], `${page.path} has ${count} words; minimum is ${page.wordTarget[0]}`);
  assert(count <= page.wordTarget[1], `${page.path} has ${count} words; maximum is ${page.wordTarget[1]}`);
  assert(Boolean(page.externalLink), `${page.path} needs one contextual external link`);
  assert(page.externalLink.href.startsWith("https://presidentialmoonrocks.com"), `${page.path} has an invalid external domain`);

  const images = pageImages[page.path] ?? [];
  assert(images.length === page.sections.length + 1, `${page.path} image count must equal lead plus section count`);

  if (page.kind === "pillar") {
    assert(page.h1 === "Presidential Cannabis", "Pillar H1 must be Presidential Cannabis");
    assert(page.sections.length === 9, "Pillar must have nine indexed sections");
    assert(page.childLinks?.length === 4, "Pillar must link to all four hubs");
  }

  if (page.kind === "hub") {
    const expectedChildren = pages.filter((candidate) => candidate.kind === "article" && candidate.silo === page.silo);
    assert(page.childLinks?.length === expectedChildren.length, `${page.path} must link to every article in its silo`);
    assert(page.relatedLinks?.some((link) => link.href === "/" && link.label === "Presidential Cannabis"), `${page.path} needs the pillar up-link`);
  }

  if (page.kind === "article" && page.silo) {
    const hubPath = `/${page.silo}`;
    const related = page.relatedLinks ?? [];
    assert(related.some((link) => link.href === hubPath), `${page.path} needs its silo hub link`);
    assert(related.some((link) => link.href === "/" && link.label === "Presidential Cannabis"), `${page.path} needs exact Presidential Cannabis pillar anchor`);
    const sideways = related.filter((link) => link.href !== "/" && link.href !== hubPath);
    assert(sideways.length >= 2 && sideways.length <= 3, `${page.path} needs two or three sideways links`);
    assert(sideways.every((link) => link.href.startsWith(`${hubPath}/`)), `${page.path} has a cross-silo sideways link`);
  }
}

assert(new Set(pages.map((page) => page.externalLink.label)).size === pages.length, "Contextual outbound anchor text must vary on every page");

const allImages = Object.entries(pageImages).flatMap(([pagePath, images]) => images.map((image) => ({ pagePath, ...image })));
assert(Object.keys(pageImages).length === 30, `Expected image assignments for 30 pages, found ${Object.keys(pageImages).length}`);
assert(allImages.length >= 100 && allImages.length <= 130, `Expected 100-130 images, found ${allImages.length}`);
assert(new Set(allImages.map((image) => image.src)).size === allImages.length, "An image is assigned to more than one page");
assert(new Set(allImages.map((image) => image.alt)).size === allImages.length, "Image alt text must be unique sitewide");

let totalImageBytes = 0;
for (const image of allImages) {
  const altWords = words(image.alt);
  assert(altWords >= 5 && altWords <= 15, `${image.src} alt has ${altWords} words`);
  assert(/^\/images\/[a-z0-9-]+\.webp$/.test(image.src), `${image.src} filename must be lowercase hyphenated WebP`);
  assert(
    (image.width === 1200 && image.height === 1200) || (image.width === 1080 && image.height === 1350),
    `${image.src} must be 1200x1200 or 1080x1350`,
  );
  const filePath = path.join(root, "public", image.src.replace(/^\//, ""));
  assert(existsSync(filePath), `${image.src} is missing on disk`);
  if (existsSync(filePath)) totalImageBytes += statSync(filePath).size;
}

const linkedImages = allImages.filter((image) => image.productHref).length;
const unlinkedImages = allImages.length - linkedImages;

const sourceFiles = [
  "src/components/article-page.tsx",
  "src/components/content-figure.tsx",
  "src/components/site-header.tsx",
  "src/components/site-footer.tsx",
  "src/app/globals.css",
  "src/app/layout.tsx",
  "src/app/[[...slug]]/page.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/content/pillar.ts",
  "src/content/hubs.ts",
  "src/content/plant.ts",
  "src/content/flower.ts",
  "src/content/genetics.ts",
  "src/content/choosing.ts",
  "src/content/about.ts",
].map((file) => readFileSync(path.join(root, file), "utf8")).join("\n");

for (const prohibited of [
  "click here",
  "scroll-behavior: smooth",
  "figcaption",
  "0.877",
  "decarboxylation",
  "boiling point",
  "live resin",
  "live rosin",
  "liquid diamonds",
  "distillate",
  "presidentialthc.net",
  "presidentialblunts.net",
]) {
  assert(!sourceFiles.toLowerCase().includes(prohibited), `Prohibited text or implementation found: ${prohibited}`);
}

assert(!sourceFiles.includes('rel="nofollow"'), "Official Presidential and locator links must remain dofollow");
assert(!sourceFiles.includes("article-section__grid--reverse"), "Alternating image layout found");
assert(!sourceFiles.includes("target=\"_blank\""), "Product links must stay in the same tab");
assert(sourceFiles.includes('"@type": "Organization"'), "Homepage Organization schema is missing");
assert(sourceFiles.includes('"@type": "WebSite"'), "Homepage WebSite schema is missing");
assert(sourceFiles.includes('"@type": page.kind === "about" ? "AboutPage" : "WebPage"'), "WebPage and AboutPage schema mapping is missing");
assert(sourceFiles.includes('"@type": "FAQPage"'), "Homepage FAQPage schema is missing");
assert(sourceFiles.includes("BRAND_ORGANIZATION_ID"), "Schema graph must reuse the canonical Presidential organization ID");
assert(sourceFiles.includes("title: path === \"/\" || path === \"/about\" ? { absolute: page.title } : page.title"), "Homepage and About need absolute metadata titles");
assert(sourceFiles.includes("metadataBase: new URL(SITE_URL)"), "Root metadataBase must use the canonical apex");
assert(sourceFiles.includes('card: "summary_large_image"'), "Twitter summary_large_image metadata is missing");
assert(sourceFiles.includes('sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/image-sitemap.xml`]'), "robots.txt must advertise both sitemaps");
assert(!sourceFiles.toLowerCase().includes("buy online"), "Public copy contains prohibited buy-online language");
assert(!sourceFiles.toLowerCase().includes("ship-to-door"), "Public copy contains prohibited ship-to-door language");

const figureSource = readFileSync(path.join(root, "src/components/content-figure.tsx"), "utf8");
const desktopFrameHasContinuousCorners = figureSource.includes('d="M32 0H0V100H32M68 0H100V100H68"');
const mobileFrameHasClosedPerimeter = figureSource.includes('d="M0 0H100V100H0Z"');
assert(desktopFrameHasContinuousCorners, "Desktop figure frame corners must use continuous joined paths");
assert(mobileFrameHasClosedPerimeter, "Mobile figure frame must use one closed perimeter");
assert(figureSource.includes('strokeLinejoin="miter"'), "Figure frame must explicitly use mitered corner joins");
assert(!figureSource.includes("M0 0V100M100 0V100"), "Disconnected legacy frame sides found");

const totalWords = Object.values(wordCounts).reduce((sum, count) => sum + count, 0);
const result = {
  pages: pages.length,
  kinds: {
    pillar: pages.filter((page) => page.kind === "pillar").length,
    hubs: pages.filter((page) => page.kind === "hub").length,
    articles: pages.filter((page) => page.kind === "article").length,
    about: pages.filter((page) => page.kind === "about").length,
  },
  totalWords,
  wordCounts,
  images: allImages.length,
  repeatedImages: allImages.length - new Set(allImages.map((image) => image.src)).size,
  linkedImages,
  unlinkedImages,
  totalSourceImageMB: Number((totalImageBytes / 1024 / 1024).toFixed(2)),
  articlesWithExactPillarAnchor: pages.filter((page) => page.kind === "article" && page.relatedLinks?.some((link) => link.href === "/" && link.label === "Presidential Cannabis")).length,
  contextualOutboundLinks: pages.filter((page) => page.externalLink).length,
  seoEntity: {
    homepageTitle: homepage?.title,
    homepageH1: homepage?.h1,
    aboutTitle: aboutPage?.title,
    aboutH1: aboutPage?.h1,
    visibleFaqs: homepage?.faq?.length ?? 0,
    uniqueTitles: new Set(pages.map((page) => page.title)).size,
    uniqueDescriptions: new Set(pages.map((page) => page.description)).size,
  },
  frameGeometry: {
    desktopContinuousCorners: desktopFrameHasContinuousCorners,
    mobileClosedPerimeter: mobileFrameHasClosedPerimeter,
  },
  warnings,
  failures,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
