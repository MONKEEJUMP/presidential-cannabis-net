import type { PageContent } from "./types";

export const pillarPage: PageContent = {
  path: "/",
  kind: "pillar",
  h1: "Presidential Cannabis",
  title: "Presidential Cannabis | The Official Brand Guide",
  description:
    "Presidential Cannabis is the official brand behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Explore the plant, products, and licensed-retailer path.",
  wordTarget: [554, 700],
  intro: [
    "Presidential Cannabis is the official company and plant guide behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. This publication explains the brand, cannabis flower, genetics, product formats, and how adults 21+ can find current availability through licensed retailers where legal.",
    "Flower quality is the foundation of the product conversation. The guides below connect the living plant, the finished flower, genetics, choosing, and the official product system without turning batch-specific facts into universal claims.",
  ],
  sections: [
    {
      id: "what-is-presidential-cannabis",
      heading: "What is Presidential Cannabis?",
      paragraphs: [
        "Presidential Cannabis identifies the brand and publisher of this guide. It is not an individual cannabis strain, a political reference, or a generic name for every cannabis product. Presidential Kush is a cultivar name and remains separate from the Presidential Cannabis brand.",
        "Founded in Los Angeles in 2012, the company established a California legacy through wholesale relationships in the cannabis industry. That legacy continues through licensed-retailer partnerships in a regulated industry. Its California history places the company within the cannabis industry and the broader infused product market.",
        "People sometimes search for “Presidential weed” when they mean the brand. That phrase is informal search shorthand for Presidential Cannabis products—not the name of a separate strain or product.",
      ],
    },
    {
      id: "the-plant",
      heading: "The Cannabis Plant",
      paragraphs: [
        "The Plant guide covers cannabinoids, trichomes, flower structure, harvest timing, drying, and curing. It provides botanical context without making medical or effects promises.",
      ],
      contextualLinks: [
        { before: "Start with the ", href: "/plant", label: "cannabis", after: " plant guide." },
      ],
      links: [{ href: "/plant", label: "Explore the Cannabis Plant guide" }],
    },
    {
      id: "presidential-flower",
      heading: "The Presidential Flower Guide",
      paragraphs: [
        "Presidential flower is evaluated through appearance, aroma, density, structure, moisture, cure, storage, and trichome condition. Current batch information belongs to the package and available test record.",
      ],
      contextualLinks: [
        { before: "Compare raw ", href: "/choosing/flower-vs-infused", label: "flower", after: " with infused formats." },
      ],
      links: [{ href: "/flower", label: "Explore the Presidential Flower guide" }],
    },
    {
      id: "genetics",
      heading: "Genetics and Batch Variation",
      paragraphs: [
        "Breeding, phenotypes, lineage, strain naming, and batch variation explain how related cannabis plants can still produce different visible and aromatic results. Environment and handling also shape the flower that reaches the shelf.",
      ],
      links: [{ href: "/genetics", label: "Understand cannabis genetics" }],
    },
    {
      id: "choosing",
      heading: "Choosing at Licensed Retail",
      paragraphs: [
        "Choosing begins with format and current product information. Compare flower with infused formats—pre rolls, Moon Rocks, blunts, and minis—then read the menu and package for the specific product and batch available that day.",
      ],
      links: [{ href: "/choosing", label: "Use the choosing guide" }],
    },
    {
      id: "the-catalog",
      heading: "The Presidential Product Line",
      paragraphs: [
        "Presidential Moon Rocks combine flower, concentrate, and kief in the flagship layered format. Infused pre-rolls use paper, and menus may list pre rolls beside Presidential Blunts in tobacco-free hemp wraps and smaller minis.",
        "The official catalog and package identify the exact product, collection, format, and visible composition language. The Silver Flavor Series, Gold Strain Series, and Rose Gold Connoisseur Series organize distinct collections, with flavors identified on the current catalog and package. Potency and other test values are batch-specific rather than fixed across an entire series.",
      ],
      links: [
        { href: "https://presidentialmoonrocks.com/moon-rocks", label: "Explore the official Presidential product catalog" },
        { href: "https://presidentialthc.net/", label: "Read the Presidential THC chemistry guide" },
        { href: "https://presidentialblunts.net/", label: "Explore the Presidential Blunts guide" },
      ],
    },
    {
      id: "where-it-is-sold",
      heading: "Where Presidential Is Sold",
      paragraphs: [
        "Presidential operates through licensed cannabis retailers rather than direct online cannabis sales. Participating locations and product availability can change by location, retailer, and date.",
        "Each licensed market reflects the product timing and local rules of the states in the current footprint. Across the multi-state market, the locator points to licensed retailers in active states, with availability confirmed within each local market. Retail availability across these states connects the brand's wholesale work to the infused product market, while other states enter the footprint only after licensed retailer availability is confirmed.",
      ],
      links: [{ href: "https://presidentialmoonrocks.com/find-us", label: "Use the official Presidential store locator" }],
    },
    {
      id: "authenticity",
      heading: "Knowing It Is Authentic",
      paragraphs: [
        "Authenticity begins with the licensed-retail path and consistent package identity. Check the Presidential name and crest, product and format label, required package information, and batch details.",
      ],
      links: [{ href: "https://presidentialmoonrocks.com/find-us", label: "Follow the licensed-retail path" }],
    },
    {
      id: "official-reference",
      heading: "One Brand, Distinct Official Guides",
      paragraphs: [
        "This site owns the company, plant, flower, genetics, and choosing context. The main Presidential site owns the canonical catalog and locator, while the dedicated THC and Blunts guides carry deeper chemistry and format explanations.",
      ],
      links: [
        { href: "/about", label: "About Presidential Cannabis" },
        { href: "https://presidentialmoonrocks.com", label: "Visit the official Presidential home" },
      ],
    },
  ],
  childLinks: [
    { href: "/plant", label: "Plant", description: "Cannabis structure, cannabinoids, trichomes, harvest, and cure." },
    { href: "/flower", label: "Presidential Flower", description: "Appearance, aroma, structure, moisture, and storage." },
    { href: "/genetics", label: "Genetics", description: "Breeding, phenotypes, lineage, names, and batch variation." },
    { href: "/choosing", label: "Choosing", description: "Compare flower and infused formats at licensed retail." },
  ],
  relatedLinks: [
    { href: "/about", label: "About Presidential Cannabis" },
    { href: "/flower/what-makes-good-flower", label: "What makes good flower" },
    { href: "/genetics/how-strains-are-made", label: "How cannabis strains are made" },
    { href: "/choosing/flower-vs-infused", label: "Flower versus infused cannabis" },
  ],
  faq: [
    {
      question: "What is Presidential Cannabis?",
      answer: "Presidential Cannabis is the official brand behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis available through licensed retailers.",
    },
    {
      question: "What products does Presidential make?",
      answer: "The official product system includes Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Current product details belong to the catalog and package.",
    },
    {
      question: "What does Presidential weed mean?",
      answer: "Presidential weed is informal search shorthand for Presidential Cannabis products. It is not a separate brand, strain, or product name.",
    },
    {
      question: "What is Presidential flower?",
      answer: "Presidential flower refers to cannabis flower in the official brand and plant-guide context. Evaluate the current product and batch from its label, condition, and available test information.",
    },
    {
      question: "Is Presidential Cannabis the same as Presidential Kush?",
      answer: "No. Presidential Cannabis is the brand and is not an individual cannabis strain. Presidential Kush is a cultivar name and remains separate from the company identity.",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "Locate Presidential through licensed retailers",
  },
};
