import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential Cannabis",
  title: "About Presidential Cannabis | Brand & Publisher",
  description: "About Presidential Cannabis: the Los Angeles brand behind Moon Rocks and the official publisher of this plant guide to flower, genetics, and choosing at licensed retailers.",
  wordTarget: [750, 950],
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
        "The company's Los Angeles founding in 2012 is the starting point of its story. Its wholesale role means Presidential works through licensed retail channels rather than using this publication as a direct checkout. That distinction matters when a reader sees a product name here: the name explains where an item fits in the brand, while a licensed retailer can confirm what is actually on its shelf. A founding date describes the company's history; it does not date every product line, package, or market where the brand may appear.",
        "For an adult checking whether a product is Presidential, the practical evidence is close to the item. Compare the brand name and current artwork with the official catalog, then read the package for its producer, format, batch details, dates, and required local labeling. Packaging and available formats can differ by market. An online photograph is a reference, not proof that a particular store has the same item today. The official locator can point toward licensed retailers; the retailer can answer questions about its current stock and the package in hand.",
      ],
      links: [
        { href: "https://presidentialmoonrocks.com", label: "Browse the official product catalog" },
        { href: "https://presidentialmoonrocks.com/find-us", label: "Find licensed retailers" },
      ],
    },
    {
      id: "publisher-and-purpose",
      heading: "The Brand as Publisher",
      paragraphs: [
        "This publication gives the durable education a separate, focused home. The Plant covers botany, flower anatomy, trichomes, harvest, drying, and cure. The Flower organizes appearance, aroma, structure, moisture, storage, and freshness into a practical quality view. Genetics explains breeding, phenotypes, lineage, naming, landrace foundations, and batch variation. Choosing turns those ideas into useful menu reading and licensed-counter questions.",
        "This guide and the product catalog answer different questions. Presidentialcannabis.net explains the company and the plant vocabulary behind its products. The official catalog at presidentialmoonrocks.com carries current product presentation and the path to the retailer locator. Neither a plant article nor a product photograph replaces the label on the current package. Read them together when comparing formats, then ask a licensed store about the item it actually carries.",
        "The publication is organized for readers who want to understand a term before they use it at a counter. A plant part, a flower quality cue, and a cultivar name answer different questions. Keeping those subjects in their own sections makes it easier to move from a broad definition to an observable detail. The same care applies to the brand name: Presidential Cannabis names the company and this publisher. Presidential Kush, if encountered as a cultivar name, is a separate plant identity, not another name for the publisher.",
      ],
      contextualLinks: [
        {
          before: "Start with the ",
          href: "/plant",
          label: "plant guide",
          after: " for the parts and life stages behind retail terms such as bract, trichome, harvest, drying, and cure. These definitions help a reader describe what a package or menu names without treating one term as a promise about the finished item.",
        },
        {
          before: "The ",
          href: "/flower",
          label: "flower guide",
          after: " turns that vocabulary toward the material adults may compare at a licensed counter: structure, aroma, moisture, cure, and freshness. Those observations belong to the current batch, so the guide explains what to inspect rather than assigning a permanent quality grade to a name.",
        },
        {
          before: "The ",
          href: "/genetics",
          label: "genetics guide",
          after: " separates lineage, selected phenotype, and the conditions of a particular harvest. It is useful when two batches share a cultivar name yet differ in appearance or aroma. A name begins the inquiry; the current producer and batch information make it specific.",
        },
        {
          before: "Return to the Presidential Cannabis ",
          href: "/",
          label: "guide",
          after: " for the full map of the publication. The route from company background to plant knowledge is educational. For current Presidential products, adults 21+ where legal should use the official catalog and confirm availability through a licensed retailer.",
        },
      ],
    },
  ],
  relatedLinks: [
    { href: "/", label: "About the Presidential Cannabis official guide", description: "Return to the official brand and plant guide." },
    { href: "/plant", label: "The Plant", description: "Understand the living source behind every flower." },
    { href: "/flower", label: "The Flower", description: "Read the visible and aromatic signs of flower quality." },
    { href: "/genetics", label: "Genetics", description: "Learn how lineage, selection, and batches differ." },
  ],
  externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Use the official Presidential store locator" },
};
