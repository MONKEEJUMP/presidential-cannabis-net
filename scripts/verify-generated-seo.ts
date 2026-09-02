import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

import { pages } from "../src/content/index";
import { absoluteUrl } from "../src/lib/site";

const outputRoot = path.join(process.cwd(), ".next", "server", "app");
const failures: string[] = [];

function assert(condition: unknown, message: string) {
  if (!condition) failures.push(message);
}

function decodeHtml(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function firstMatch(html: string, expression: RegExp): string {
  return decodeHtml(expression.exec(html)?.[1] ?? "");
}

function htmlPath(route: string): string {
  return route === "/"
    ? path.join(outputRoot, "index.html")
    : path.join(outputRoot, `${route.replace(/^\//, "")}.html`);
}

function parseGraph(html: string): Record<string, unknown>[] {
  const raw = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html)?.[1];
  if (!raw) return [];
  const payload = JSON.parse(raw) as { "@graph"?: Record<string, unknown>[] };
  return payload["@graph"] ?? [];
}

const titles = new Set<string>();
const descriptions = new Set<string>();
const canonicals = new Set<string>();

for (const page of pages) {
  const file = htmlPath(page.path);
  assert(existsSync(file), `${page.path} has no generated HTML file`);
  if (!existsSync(file)) continue;

  const html = readFileSync(file, "utf8");
  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/);
  const description = firstMatch(html, /<meta name="description" content="([^"]*)"\/>/);
  const canonical = firstMatch(html, /<link rel="canonical" href="([^"]*)"\/>/);
  const expectedTitle = page.path === "/" || page.path === "/about"
    ? page.title
    : `${page.title} | Presidential Cannabis`;

  assert(title === expectedTitle, `${page.path} generated title mismatch: ${title}`);
  assert(description === page.description, `${page.path} generated description mismatch`);
  assert(canonical === absoluteUrl(page.path), `${page.path} generated canonical mismatch: ${canonical}`);
  assert(/<meta name="robots" content="index, follow"\/>/.test(html), `${page.path} is missing index, follow`);
  assert(!/noindex/i.test(html), `${page.path} contains noindex`);
  assert((html.match(/<h1>/g) ?? []).length === 1, `${page.path} must render exactly one H1`);
  assert(html.includes('<meta property="og:site_name" content="Presidential Cannabis"/>'), `${page.path} OG site name mismatch`);
  assert(/<meta property="og:image" content="https:\/\/presidentialcannabis\.net\//.test(html), `${page.path} OG image is not absolute`);
  assert(html.includes('<meta name="twitter:card" content="summary_large_image"/>'), `${page.path} Twitter card mismatch`);
  assert(/<meta name="twitter:image" content="https:\/\/presidentialcannabis\.net\//.test(html), `${page.path} Twitter image is not absolute`);

  for (const anchor of html.matchAll(/<a\b[^>]*href="https:\/\/presidentialmoonrocks\.com[^"]*"[^>]*>/g)) {
    assert(!/rel="[^"]*nofollow/i.test(anchor[0]), `${page.path} has a nofollow Presidential link`);
  }

  titles.add(title);
  descriptions.add(description);
  canonicals.add(canonical);
}

assert(titles.size === pages.length, `Expected ${pages.length} unique generated titles, found ${titles.size}`);
assert(descriptions.size === pages.length, `Expected ${pages.length} unique generated descriptions, found ${descriptions.size}`);
assert(canonicals.size === pages.length, `Expected ${pages.length} unique generated canonicals, found ${canonicals.size}`);

const homeHtml = readFileSync(htmlPath("/"), "utf8");
const homeGraph = parseGraph(homeHtml);
const homeTypes = new Set(homeGraph.map((node) => node["@type"]));
assert(homeHtml.includes("Presidential Cannabis is the brand behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts and minis."), "Homepage entity lead is absent from initial HTML");
assert((homeHtml.match(/<h2>What is Presidential Cannabis\?<\/h2>/g) ?? []).length === 1, "Homepage needs exactly one approved entity H2");
assert(homeHtml.includes("<h2>The Presidential Product Line</h2>"), "Homepage product-line H2 is missing");
assert(homeHtml.includes('href="/about"'), "Homepage official entity block is missing the About link");
assert(homeHtml.includes('href="https://presidentialmoonrocks.com"'), "Homepage official entity block is missing the catalog link");
assert(homeHtml.includes('href="https://presidentialmoonrocks.com/find-us"'), "Homepage official entity block is missing the locator link");
assert(homeHtml.includes('href="https://presidentialthc.net/"'), "Homepage Presidential THC cross-link is missing");
assert(homeHtml.includes('href="https://presidentialblunts.net/"'), "Homepage Presidential Blunts cross-link is missing");
assert(homeTypes.has("Organization"), "Homepage initial HTML lacks Organization schema");
assert(homeTypes.has("WebSite"), "Homepage initial HTML lacks WebSite schema");
assert(homeTypes.has("WebPage"), "Homepage initial HTML lacks WebPage schema");
assert(homeTypes.has("FAQPage"), "Homepage initial HTML lacks FAQPage schema");

const organization = homeGraph.find((node) => node["@type"] === "Organization");
assert(organization?.["@id"] === "https://presidentialmoonrocks.com/#organization", "Homepage does not reuse the canonical organization ID");
assert(organization?.name === "Presidential Cannabis", "Homepage Organization name mismatch");
const expectedSameAs = [
  "https://www.instagram.com/presidentialofficial_/",
  "https://www.instagram.com/presidential_medss/",
  "https://www.facebook.com/p/Presidential-RX-100069511874496/",
  "https://www.linkedin.com/in/everett-smith-presidential/",
];
assert(JSON.stringify(organization?.sameAs) === JSON.stringify(expectedSameAs), "Homepage Organization sameAs whitelist mismatch");
const faq = homeGraph.find((node) => node["@type"] === "FAQPage");
assert(Array.isArray(faq?.mainEntity) && faq.mainEntity.length === 5, "Homepage FAQ schema must match five visible questions");

const aboutHtml = readFileSync(htmlPath("/about"), "utf8");
const aboutGraph = parseGraph(aboutHtml);
assert(aboutHtml.includes("<h1>About Presidential Cannabis</h1>"), "About H1 mismatch in generated HTML");
assert(aboutGraph.some((node) => node["@type"] === "AboutPage"), "About initial HTML lacks AboutPage schema");

const sitemapPath = path.join(outputRoot, "sitemap.xml.body");
const robotsPath = path.join(outputRoot, "robots.txt.body");
assert(existsSync(sitemapPath), "Generated sitemap.xml body is missing");
assert(existsSync(robotsPath), "Generated robots.txt body is missing");
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, "utf8");
  assert((sitemap.match(/<url>/g) ?? []).length === 30, "Sitemap must contain exactly 30 URLs");
  assert(sitemap.indexOf("https://presidentialcannabis.net/") < sitemap.indexOf("https://presidentialcannabis.net/plant"), "Homepage must appear first in the sitemap");
  assert(sitemap.includes("<priority>1</priority>"), "Homepage sitemap priority must be 1.0");
  assert(sitemap.includes("https://presidentialcannabis.net/about"), "Sitemap is missing About");
}
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, "utf8");
  assert(robots.includes("Allow: /"), "robots.txt must allow crawling");
  assert(robots.includes("Sitemap: https://presidentialcannabis.net/sitemap.xml"), "robots.txt is missing the page sitemap");
  assert(robots.includes("Sitemap: https://presidentialcannabis.net/image-sitemap.xml"), "robots.txt is missing the image sitemap");
}

const result = {
  pagesChecked: pages.length,
  uniqueTitles: titles.size,
  uniqueDescriptions: descriptions.size,
  uniqueCanonicals: canonicals.size,
  homepageSchemaTypes: [...homeTypes].filter(Boolean),
  homepageFaqCount: Array.isArray(faq?.mainEntity) ? faq.mainEntity.length : 0,
  aboutPageSchema: aboutGraph.some((node) => node["@type"] === "AboutPage"),
  failures,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exitCode = 1;
