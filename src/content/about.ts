import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About This Site",
  title: "About Presidential Cannabis",
  description: "The purpose, publisher, and editorial boundary of the Presidential cannabis plant reference.",
  wordTarget: [350, 450],
  intro: [
    "Presidential publishes this site as the official cannabis plant reference for the original Presidential brand. Founded in Los Angeles in 2012, Presidential serves licensed retailers through a wholesale model. This publication gives flower quality, plant structure, genetics, cultivation, and choosing a dedicated editorial home.",
    "The site exists to make the plant easier to understand. Every guide begins with a direct answer and builds toward observable, practical detail. The focus remains on what cannabis is, how flower develops, why cultivars and batches differ, what careful harvest and cure preserve, and how a buyer can use those facts at a licensed dispensary.",
  ],
  sections: [
    {
      id: "editorial-purpose",
      heading: "A Reference Built Around the Plant",
      paragraphs: [
        "The publication follows four connected paths. The Plant begins with botany and moves through trichomes, flower anatomy, harvest, drying, and cure. The Flower turns appearance, aroma, structure, moisture, and storage into a complete quality view. Genetics explains breeding, phenotypes, lineage, naming, landrace foundations, and batch variation. Choosing brings that knowledge to menus, budtender conversations, first visits, and format decisions.",
        "Each path supports the others. Botany explains the structures visible on finished flower. Genetics explains the inherited range behind those structures. Cultivation and post-harvest care explain the batch in front of you. Menu literacy and clear questions turn the same knowledge into a useful purchase process.",
      ],
    },
    {
      id: "publisher",
      heading: "Published by Presidential",
      paragraphs: [
        "Presidential began in Los Angeles in 2012. The company operates wholesale and its products reach adults through licensed retailers. Flower quality forms the foundation of the catalog across Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. That foundation gives the plant a natural place at the center of this reference.",
        "Retail inventory changes by market, store, and batch. The main Presidential site carries the catalog and retailer locator, while this publication carries the enduring plant knowledge behind a thoughtful choice. Together they connect education with a clear licensed-retail path and keep each page useful on its own terms.",
      ],
    },
  ],
  externalLink: { href: "https://presidentialmoonrocks.com", label: "Visit the main Presidential site" },
};

