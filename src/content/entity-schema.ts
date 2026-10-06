import type { Thing } from "schema-dts";

// InLinks FIX-10 entity markup (schema-50402), hand-curated: only entities that match the page,
// Wikipedia references only, no facts. Merged into the existing WebPage node, never a second node.
const wiki = (name: string, slug: string): Thing => ({
  "@type": "Thing",
  name,
  sameAs: `https://en.wikipedia.org/wiki/${slug}`,
});

export const pageEntities: Record<string, { about?: Thing[]; mentions?: Thing[] }> = {
  "/plant": {
    about: [wiki("Cannabis sativa", "Cannabis_sativa"), wiki("Plant", "Plant"), wiki("Harvest", "Harvest")],
    mentions: [wiki("Flower", "Flower"), wiki("Resin", "Resin")],
  },
  "/flower": {
    about: [wiki("Flower", "Flower")],
    mentions: [wiki("Trichome", "Trichome"), wiki("Odor", "Odor")],
  },
  "/plant/what-cannabis-is": {
    about: [wiki("Flowering plant", "Flowering_plant"), wiki("Plant", "Plant")],
    mentions: [wiki("Flower", "Flower"), wiki("Leaf", "Leaf"), wiki("Resin", "Resin"), wiki("Harvest", "Harvest")],
  },
  "/plant/the-flower-structure": {
    about: [wiki("Flower", "Flower")],
    mentions: [wiki("Leaf", "Leaf"), wiki("Plant stem", "Plant_stem"), wiki("Resin", "Resin"), wiki("Morphology (biology)", "Morphology_(biology)")],
  },
  "/genetics/phenotypes": {
    about: [wiki("Cannabis strain", "Cannabis_strain")],
    mentions: [wiki("Seed", "Seed"), wiki("Agriculture", "Agriculture"), wiki("Natural environment", "Natural_environment")],
  },
};
