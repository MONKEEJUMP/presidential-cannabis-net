import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential Cannabis",
  title: "About Presidential Cannabis | Brand & Publisher",
  description: "About Presidential Cannabis: the Los Angeles brand behind Moon Rocks and the official publisher of this plant guide to flower, genetics, and choosing at licensed retailers.",
  wordTarget: [350, 450],
  intro: [
    "Presidential Cannabis is the Los Angeles cannabis brand founded in 2012 by Everett Smith and John Zapp. Presidential is the company behind its flagship Moon Rocks platform as well as infused pre-rolls, tobacco-free blunts and minis. The company operates wholesale, and its products reach adults 21+ where legal through licensed retailers in active markets.",
    "Presidential publishes presidentialcannabis.net as its official plant-and-brand reference. The publication explains the living plant behind the catalog: how flower develops, what cultivation and harvest contribute, why genetics and batches differ, how drying and curing preserve character, and which practical signals help someone choose confidently at a licensed counter.",
    "Here, Presidential Cannabis identifies the brand and publisher, not a named strain. Cultivars with Presidential in their names are separate plant identities.",
  ],
  sections: [
    {
      id: "company-and-products",
      heading: "The Company Behind the Products",
      paragraphs: [
        "Moon Rocks is Presidential's flagship infused-flower platform: flower carried through with concentrate and finished with kief. It sits within the larger Presidential brand rather than defining the entire company. The broader catalog also includes infused pre-rolls, tobacco-free blunts, and minis across Silver, Gold, Rose Gold, and signature Presidential lines. Current product names, artwork, and format details belong on the main Presidential catalog at presidentialmoonrocks.com.",
        "Authentic Presidential products move through licensed retail channels. Store inventory, package sizes, dates and availability vary by market and retailer, so the official store locator connects brand interest to participating licensed doors. Adults can follow that official path and match current packaging and required batch information at the licensed store. This website publishes the brand and plant knowledge that supports a confident licensed-retail choice.",
      ],
      links: [
        { href: "https://presidentialmoonrocks.com", label: "Browse the official product catalog" },
        { href: "https://presidentialmoonrocks.com/find-us", label: "Find licensed retailers" },
        { href: "https://presidentialthc.net/", label: "Learn about Presidential infusion chemistry" },
        { href: "https://presidentialblunts.net/", label: "Explore Presidential blunt formats in depth" },
      ],
    },
    {
      id: "publisher-and-purpose",
      heading: "The Brand as Publisher",
      paragraphs: [
        "This publication gives the durable education a separate, focused home. The Plant covers botany, flower anatomy, trichomes, harvest, drying, and cure. The Flower organizes appearance, aroma, structure, moisture, storage, and freshness into a practical quality view. Genetics explains breeding, phenotypes, lineage, naming, landrace foundations, and batch variation. Choosing turns those ideas into useful menu reading and licensed-counter questions.",
        "The relationship between the portfolio sites is deliberate. presidentialcannabis.net owns the company definition and plant education for the Presidential Cannabis brand. presidentialmoonrocks.com carries the product catalog and retailer-finding hub. presidentialthc.net explains infusion chemistry, and presidentialblunts.net covers blunt formats. Together they connect brand context, plant knowledge, product depth and licensed retail.",
      ],
      contextualLinks: [
        {
          before: "The choosing section compares raw ",
          href: "/choosing/flower-vs-infused",
          label: "flower",
          after: " with infused formats using composition, label information, and occasion.",
        },
        {
          before: "This official brand-and-plant ",
          href: "/",
          label: "guide",
          after: " connects Presidential's 2012 Los Angeles origin to practical education for adults 21+ shopping through licensed retailers.",
        },
      ],
    },
  ],
  relatedLinks: [
    { href: "/", label: "About the Presidential Cannabis official guide", description: "Return to the official brand and plant guide." },
    { href: "/plant", label: "The Plant", description: "Understand the living source behind every flower." },
    { href: "/flower", label: "The Flower", description: "Read the visible and aromatic signs of flower quality." },
    { href: "/genetics", label: "Genetics", description: "Learn how lineage, selection, and batches differ." },
    { href: "/choosing", label: "Choosing", description: "Bring plant knowledge to a licensed retail counter." },
  ],
  externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Use the official Presidential store locator" },
};
