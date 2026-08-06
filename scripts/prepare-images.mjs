import { createHash } from "node:crypto";
import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = "J:\\presidential-official\\sources\\client\\google-drive-drop\\_EXTRACTED\\Product Graphics-20260703T032133Z-3-001\\Product Graphics";
const referencePublic = "J:\\presidential-blunts-net\\public";
const imageOutput = path.join(projectRoot, "public", "images");
const fontOutput = path.join(projectRoot, "public", "fonts");
const assetRegistry = path.join(projectRoot, "src", "content", "assets.ts");

const folderFormats = [
  ["Blunts", "blunt"],
  ["Mini Blunts", "mini-blunt"],
  ["Singles Mini Blunts", "single-mini-blunt"],
  ["Prerolls", "infused-pre-roll"],
  ["Moonrocks", "moon-rocks"],
  ["Mini Prerolls", "mini-pre-roll"],
];

const strainMatchers = [
  ["img2367", "Head Cheese"], ["img2368", "Head Cheese"],
  ["orangepushpop", "Orange Push Pop"], ["opp", "Orange Push Pop"],
  ["ghosthazetrain", "Ghost Train Haze"], ["ghosthaze", "Ghost Haze"],
  ["whoasiwhoa", "Whoa Si Whoa"], ["whosiwhoa", "Whoa Si Whoa"],
  ["daniellarrusso", "Daniel LaRusso"], ["daniellarusso", "Daniel LaRusso"],
  ["lauracharles", "Laura Charles"], ["ninobrown", "Nino Brown"],
  ["galacticgas", "Galactic Gas"], ["galriccookie", "Garlic Cookie"], ["garliccookie", "Garlic Cookie"],
  ["cherrygelato", "Cherry Gelato"], ["cherryminiblunt", "Cherry Gelato"],
  ["gorillagoo", "Gorilla Goo"], ["peachmango", "Peach Mango"], ["pinkcookie", "Pink Cookie"],
  ["papayapunch", "Papaya Punch"], ["rainbowbelts", "Rainbow Belts"], ["bluedream", "Blue Dream"],
  ["blueraz", "Blue Raspberry"], ["capjunky", "Cap Junky"], ["cresendo", "Crescendo"], ["crescendo", "Crescendo"],
  ["kinglouis", "King Louis"], ["kingl", "King Louis"], ["nycdiesel", "NYC Diesel"],
  ["skywalker", "Skywalker"], ["strawberry", "Strawberry"], ["watermelon", "Watermelon"],
  ["pineapple", "Pineapple"], ["tropical", "Tropical"], ["apricotti", "Apricotti"],
  ["sfvog", "SFV OG"], ["xj13", "XJ-13"], ["xxx", "XXX"], ["waui", "Waui"],
  ["grape", "Grape"], ["presidential", "Presidential"], ["presminisingle", "Presidential"],
  ["presminiblunt", "Presidential"], ["presmoonrock", "Presidential"], ["presblunt", "Presidential"],
  ["prespreroll", "Presidential"], ["prex", "Presidential"],
];

const productSlugs = {
  "Apricotti": "presidential-line-apricotti",
  "Blue Dream": "blue-dream",
  "Blue Raspberry": "blue-raspberry",
  "Cap Junky": "cap-junky",
  "Cherry Gelato": "cherry-gelato",
  "Crescendo": "crescendo",
  "Daniel LaRusso": "presidential-line-daniel-larusso",
  "Galactic Gas": "galactic-gas",
  "Garlic Cookie": "presidential-line-garlic-cookies",
  "Ghost Haze": "presidential-line-ghost-haze-train",
  "Ghost Train Haze": "presidential-line-ghost-haze-train",
  "Gorilla Goo": "gorilla-goo",
  "Grape": "grape",
  "King Louis": "king-louis",
  "Laura Charles": "presidential-line-laura-charles",
  "Nino Brown": "presidential-line-nino-brown",
  "NYC Diesel": "nyc-diesel",
  "Orange Push Pop": "orange-push-pop",
  "Papaya Punch": "papaya-punch",
  "Peach Mango": "peach-mango",
  "Pineapple": "pineapple",
  "Pink Cookie": "pink-cookies",
  "Rainbow Belts": "rainbow-belts",
  "SFV OG": "sfv-og",
  "Skywalker": "skywalker",
  "Strawberry": "strawberry",
  "Tropical": "tropical",
  "Watermelon": "watermelon",
  "Waui": "waui",
  "Whoa Si Whoa": "presidential-line-whoa-si-whoa",
  "XJ-13": "xj-13",
  "XXX": "xxx",
};

const pages = [
  ["/", 10],
  ["/plant", 5],
  ["/plant/what-cannabis-is", 4],
  ["/plant/indica-sativa-hybrid", 3],
  ["/plant/trichomes", 4],
  ["/plant/cannabinoids-in-the-plant", 3],
  ["/plant/the-flower-structure", 3],
  ["/plant/harvest-timing", 3],
  ["/plant/drying-and-curing", 3],
  ["/flower", 5],
  ["/flower/what-makes-good-flower", 4],
  ["/flower/appearance", 3],
  ["/flower/aroma", 4],
  ["/flower/density-and-structure", 3],
  ["/flower/moisture-and-cure", 3],
  ["/flower/storing-flower", 3],
  ["/genetics", 5],
  ["/genetics/how-strains-are-made", 4],
  ["/genetics/phenotypes", 3],
  ["/genetics/lineage", 3],
  ["/genetics/strain-naming", 3],
  ["/genetics/landrace-and-modern", 3],
  ["/genetics/why-two-batches-differ", 3],
  ["/choosing", 5],
  ["/choosing/reading-a-menu", 4],
  ["/choosing/what-to-ask", 3],
  ["/choosing/first-time", 3],
  ["/choosing/flower-vs-infused", 3],
  ["/choosing/matching-format-to-occasion", 3],
  ["/about", 3],
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function identifyStrain(filename) {
  const normalized = filename.toLowerCase().replace(/copy of/g, "").replace(/[^a-z0-9]+/g, "");
  for (const [needle, label] of strainMatchers) {
    if (normalized.includes(needle)) return label;
  }
  throw new Error(`No product-name mapping for ${filename}`);
}

function formatLabel(format) {
  return {
    "blunt": "blunt",
    "mini-blunt": "mini blunt",
    "single-mini-blunt": "single mini blunt",
    "infused-pre-roll": "infused pre-roll",
    "moon-rocks": "Moon Rocks",
    "mini-pre-roll": "mini pre-roll",
  }[format];
}

function productHref(strain, format) {
  if (strain === "Presidential") {
    const slug = format.includes("blunt") ? "presidential-blunts" : format.includes("pre-roll") ? "presidential-prerolls" : "presidential-moon-rocks";
    return `https://presidentialmoonrocks.com/moon-rocks/${slug}`;
  }
  const slug = productSlugs[strain];
  return slug ? `https://presidentialmoonrocks.com/moon-rocks/${slug}` : undefined;
}

async function collectSources() {
  const seenHashes = new Set();
  const groups = new Map(folderFormats.map(([, format]) => [format, []]));
  for (const [folder, format] of folderFormats) {
    const filenames = (await readdir(path.join(sourceRoot, folder))).sort((a, b) => a.localeCompare(b));
    for (const filename of filenames) {
      const source = path.join(sourceRoot, folder, filename);
      const bytes = await readFile(source);
      const hash = createHash("sha256").update(bytes).digest("hex");
      if (seenHashes.has(hash)) continue;
      seenHashes.add(hash);
      groups.get(format).push({ source, filename, format, strain: identifyStrain(filename), hash });
    }
  }
  return { groups, uniqueCount: seenHashes.size };
}

function interleave(groups) {
  const queues = [...groups.entries()];
  const records = [];
  while (queues.some(([, queue]) => queue.length)) {
    queues
      .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
      .forEach(([, queue]) => {
        const record = queue.shift();
        if (record) records.push(record);
      });
  }
  return records;
}

async function main() {
  await mkdir(imageOutput, { recursive: true });
  await mkdir(fontOutput, { recursive: true });
  await copyFile(path.join(referencePublic, "images", "presidential-crest.webp"), path.join(imageOutput, "presidential-crest.webp"));
  for (const weight of [400, 500, 600, 700]) {
    await copyFile(path.join(referencePublic, "fonts", `clash-display-${weight}.woff2`), path.join(fontOutput, `clash-display-${weight}.woff2`));
  }

  const { groups, uniqueCount } = await collectSources();
  const records = interleave(groups);
  const required = pages.reduce((sum, [, count]) => sum + count, 0);
  if (uniqueCount !== required) throw new Error(`Expected ${required} unique images, found ${uniqueCount}`);

  const variantCounts = new Map();
  const pageImages = {};
  let cursor = 0;

  for (const [pagePath, count] of pages) {
    pageImages[pagePath] = [];
    for (let index = 0; index < count; index += 1) {
      const record = records[cursor++];
      const displayStrain = record.strain === "Presidential" ? "Classic" : record.strain;
      const baseKey = `${slugify(displayStrain)}-${record.format}`;
      const variant = (variantCounts.get(baseKey) ?? 0) + 1;
      variantCounts.set(baseKey, variant);
      const variantSuffix = variant > 1 ? `-alternate-${variant}` : "";
      const outputName = `presidential-${slugify(displayStrain)}-${record.format}${variantSuffix}-packaging.webp`;
      const outputPath = path.join(imageOutput, outputName);
      const metadata = await sharp(record.source).rotate().metadata();
      const portrait = Boolean(metadata.width && metadata.height && metadata.height / metadata.width > 1.12);
      const width = portrait ? 1080 : 1200;
      const height = portrait ? 1350 : 1200;
      await sharp(record.source)
        .rotate()
        .resize({ width, height, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .webp({ quality: 80, effort: 5 })
        .toFile(outputPath);

      const alternate = variant > 1 ? ` alternate artwork ${variant}` : "";
      const href = productHref(record.strain, record.format);
      pageImages[pagePath].push({
        src: `/images/${outputName}`,
        width,
        height,
        alt: `Presidential ${displayStrain} ${formatLabel(record.format)} package artwork${alternate}`,
        ...(href ? { productHref: href } : {}),
      });
    }
  }

  const registry = `import type { ContentImage } from "./types";\n\nexport const pageImages: Record<string, ContentImage[]> = ${JSON.stringify(pageImages, null, 2)};\n`;
  await writeFile(assetRegistry, registry, "utf8");
  const all = Object.values(pageImages).flat();
  console.log(JSON.stringify({
    sourceUnique: uniqueCount,
    assigned: all.length,
    pages: Object.keys(pageImages).length,
    linked: all.filter((image) => image.productHref).length,
    unlinked: all.filter((image) => !image.productHref).length,
  }, null, 2));
}

await main();
