import type { PageContent } from "./types";

export const pillarPage: PageContent = {
  path: "/",
  kind: "pillar",
  h1: "Presidential Cannabis: The Official Brand Guide",
  title: "Presidential Cannabis | The Official Brand Guide",
  description:
    "Presidential Cannabis is the official brand behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Explore the plant, products, and licensed-retailer path.",
  wordTarget: [1250, 1350],
  intro: [
    "Presidential Cannabis is the official company and plant guide behind Presidential Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. This publication explains the brand, cannabis flower, genetics, product formats, and how adults 21+ can find current availability through licensed retailers where legal.",
    "Flower quality is the foundation of the product conversation. The guides connect plant and flower fundamentals, genetics, and guidance for choosing pre rolls to the official product system without turning batch-specific facts into universal claims.",
    "Presidential Cannabis publishes this homepage as adult 21+ brand and plant literacy: who the company is, how the plant and flower guides connect, how genetics and batch variation shape what reaches a jar, and how choosing at licensed retail stays observational. No medical or dosing claims. The job is a durable brand hub that points readers into the plant, flower, genetics, choosing, and about guides without replacing the package or the licensed counter.",
  ],
  sections: [
    {
      id: "what-is-presidential-cannabis",
      heading: "What is Presidential Cannabis?",
      paragraphs: [
        "Presidential Cannabis identifies the brand and publisher of this guide. It is not an individual cannabis strain, a political reference, or a generic name for every cannabis product. Presidential Kush is a cultivar name and remains separate from the Presidential Cannabis brand.",
        "Founded in Los Angeles in 2012, the company established a California legacy through wholesale relationships in the cannabis industry. That legacy continues through licensed-retailer partnerships in a regulated industry. Its California history places the company within the cannabis industry and the broader infused product market.",
        "People sometimes search for “Presidential weed” when they mean the brand. That phrase is informal search shorthand for Presidential Cannabis products—not the name of a separate strain or product.",
        "Reading the brand this way keeps company identity, cultivar names, and product formats in separate columns. Presidential Cannabis is the publisher and product company; Presidential Kush remains a cultivar label; Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis are formats you confirm on the current catalog and package. When a search phrase collapses those ideas, return to the licensed label and this guide rather than treating informal shorthand as a strain or product name.",
        "A useful reading order starts here for brand identity, then The Plant or The Flower, Genetics for batch variation, and Choosing for the licensed counter. Catalog and locator stay on presidentialmoonrocks.com; chemistry on presidentialthc.net; blunt formats on presidentialblunts.net—so this hub stays stable when packaging updates.",
      ],
    },
    {
      id: "the-plant",
      heading: "The Cannabis Plant",
      paragraphs: [
        "The Plant guide covers cannabinoids, trichomes, flower structure, harvest timing, drying, and curing. It provides botanical context without making medical or effects promises.",
        "Start with the annual plant itself before product language takes over. Roots, stems, fan leaves, flower sites, and resin glands each play a biological role; genetics sets a range, and garden conditions shape how that range appears in finished flower. Adults 21+ can treat that botanical map as literacy for reading menus and packages later—not as a medical claim.",
      ],
      contextualLinks: [
        { before: "Start with the ", href: "/plant", label: "cannabis", after: " plant guide." },
        { before: "Continue into ", href: "/plant", label: "The Cannabis Plant Guide", after: " when anatomy, trichomes, harvest timing, drying, and cure need a full map." },
      ],
      links: [{ href: "/plant", label: "Explore the Cannabis Plant guide" }],
    },
    {
      id: "presidential-flower",
      heading: "The Presidential Flower Guide",
      paragraphs: [
        "Presidential flower is evaluated through appearance, aroma, density, structure, moisture, cure, storage, and trichome condition. Current batch information belongs to the package and available test record.",
        "A practical flower read stacks those observations instead of relying on one cue. Color and trichome coverage, nose, feel after cure, and package dates together describe the jar in front of you. Batch values stay with that unit; they do not become universal brand promises.",
      ],
      contextualLinks: [
        { before: "Compare raw ", href: "/choosing/flower-vs-infused", label: "flower", after: " with infused formats." },
        { before: "Open ", href: "/flower", label: "The Flower", after: " guide for appearance, aroma, density, moisture, cure, and storage in one place." },
      ],
      links: [{ href: "/flower", label: "Explore the Presidential Flower guide" }],
    },
    {
      id: "genetics",
      heading: "Genetics and Batch Variation",
      paragraphs: [
        "Breeding, phenotypes, lineage, strain naming, and batch variation explain how related cannabis plants can still produce different visible and aromatic results. Environment and handling also shape the flower that reaches the shelf.",
        "Two jars that share a familiar name can still differ because selection, phenotype, garden method, harvest window, and post-harvest care all leave a mark. Genetics explains the inherited range; the package and your senses describe the present batch. Keep those layers distinct when you compare options at licensed retail.",
      ],
      contextualLinks: [
        { before: "Follow inheritance, phenotypes, and naming through ", href: "/genetics", label: "Genetics", after: " when batch differences need a breeding frame." },
      ],
      links: [{ href: "/genetics", label: "Understand cannabis genetics" }],
    },
    {
      id: "choosing",
      heading: "Choosing at Licensed Retail",
      paragraphs: [
        "Choosing begins with format and current product information. Compare flower with infused formats—pre rolls, Moon Rocks, blunts, and minis—then read the menu and package for the specific product and batch available that day.",
        "A clear choosing habit stays observational: name the format you want, ask what is in stock today, read the label for producer, dates, and batch identifiers, and compare aroma or appearance only where the retailer allows. That routine connects the plant and flower guides to a real counter without inventing effects or dosing advice.",
        "When format choice follows brand identity, flower-versus-infused literacy explains prep and sharing differences. Keep that comparison educational; confirm current SKUs, dates, and packaging at a licensed retailer or on the official catalog.",
      ],
      contextualLinks: [
        { before: "Use ", href: "/choosing", label: "Choosing", after: " when format comparison and licensed-counter questions need a full walkthrough." },
      ],
      links: [{ href: "/choosing", label: "Use the choosing guide" }],
    },
    {
      id: "the-catalog",
      heading: "The Presidential Product Line",
      paragraphs: [
        "Presidential Moon Rocks combine flower, concentrate, and kief in the layered format. Infused pre-rolls use paper; menus distinguish rolls by paper or tobacco-free hemp wrap, with pre rolls beside Presidential Blunts and minis.",
        "The official catalog and package identify the exact product, collection, format, and visible composition language. The Silver Flavor Series, Gold Strain Series, and Rose Gold Connoisseur Series organize distinct collections, with flavors identified on the current catalog and package. Potency and other test values are batch-specific rather than fixed across an entire series.",
        "Series names organize browsing; they do not freeze every SKU. When a package or menu line updates, treat the current catalog and the unit in hand as the source of truth so format lanes can change without rewriting company identity.",
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
        "Authenticity begins with the licensed-retail path and consistent package identity across every format, including pre rolls. Check the Presidential name and crest, product and format label, required package information, and batch details.",
        "Buy through licensed retailers, then match the unit in hand to the official catalog language for that format. Packaging, required disclosures, and batch identifiers are the practical checks; informal marketplace listings and look-alike names are not substitutes for the licensed path.",
      ],
      links: [{ href: "https://presidentialmoonrocks.com/find-us", label: "Follow the licensed-retail path" }],
    },
    {
      id: "official-reference",
      heading: "One Brand, Distinct Official Guides",
      paragraphs: [
        "This site owns the company, plant, flower, genetics, and choosing context. The main Presidential site owns the canonical catalog and locator, while the dedicated THC and Blunts guides carry deeper chemistry and format explanations.",
        "Use this hub to orient, then move into the topic guides for depth. The about page records company context; the plant, flower, genetics, and choosing hubs carry the educational silos. Catalog detail and store location stay on the main Presidential site so availability stays current.",
        "Publisher literacy means reading those lanes in order: company and plant education on presidentialcannabis.net; product depth on the catalog and format sites. Keeping lanes separate stops brand names from being mistaken for strain names.",
      ],
      contextualLinks: [
        { before: "Read ", href: "/about", label: "About Presidential Cannabis", after: " for company context beside this brand hub." },
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
      answer: "Products include Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Current catalog and package details cover every format, including pre rolls.",
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
