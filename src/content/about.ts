import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential Cannabis",
  title: "About Presidential Cannabis | Brand & Publisher",
  description:
    "About Presidential Cannabis: the Los Angeles brand behind Moon Rocks and the official publisher of this plant guide to flower, genetics, and choosing at licensed retailers.",
  wordTarget: [950, 1150],
  intro: [
    "Presidential Cannabis is the Los Angeles cannabis brand founded in 2012 by Everett Smith and John Zapp. Presidential is the company behind its flagship Moon Rocks platform as well as infused pre-rolls, tobacco-free blunts and minis. The company operates wholesale, and its products reach adults 21+ where legal through licensed retailers in active markets.",
    "Presidential publishes presidentialcannabis.net as its official plant-and-brand reference. The publication explains the living plant behind the catalog: how flower develops, what cultivation and harvest contribute, why genetics and batches differ, how drying and curing preserve character, and which practical signals help someone choose confidently at a licensed counter.",
    "Here, Presidential Cannabis identifies the brand and publisher, not a named strain. Cultivars with Presidential in their names are separate plant identities. This page is the durable company definition for the brand that ships product through licensed channels and the publisher that keeps plant literacy in one place adults can read before they shop.",
  ],
  sections: [
    {
      id: "company-and-products",
      heading: "The Company Behind the Products",
      paragraphs: [
        "Moon Rocks is Presidential's flagship infused-flower platform: flower carried through with concentrate and finished with kief. It sits within the larger Presidential brand rather than defining the entire company. The broader catalog also includes infused pre-rolls, tobacco-free blunts, and minis across Silver, Gold, Rose Gold, and signature Presidential lines. Current product names, artwork, and format details belong on the main Presidential catalog at presidentialmoonrocks.com.",
        "Authentic Presidential products move through licensed retail channels. Store inventory, package sizes, dates and availability vary by market and retailer, so the official store locator connects brand interest to participating licensed doors. Adults can follow that official path and match current packaging and required batch information at the licensed store. This website publishes the brand and plant knowledge that supports a confident licensed-retail choice.",
        "Wholesale is the operating spine of that story. Presidential builds product for licensed partners rather than treating this educational site as a storefront. When packaging, batch labels, or menu names change in a market, the catalog and locator remain the source of truth for what is currently on shelves. The role of presidentialcannabis.net is steadier: explain who the brand is, what the publisher covers, and how plant, flower, and genetics literacy support a better conversation at a licensed counter.",
      ],
      links: [
        { href: "https://presidentialmoonrocks.com", label: "Browse the official product catalog" },
        { href: "https://presidentialmoonrocks.com/find-us", label: "Find licensed retailers" },
        { href: "https://presidentialthc.net/", label: "Learn about Presidential infusion chemistry" },
        { href: "https://presidentialblunts.net/", label: "Explore Presidential blunt formats in depth" },
      ],
    },
    {
      id: "la-wholesale-legacy",
      heading: "Los Angeles Roots and Wholesale Literacy",
      paragraphs: [
        "Presidential Cannabis grew out of Los Angeles in 2012, when Everett Smith and John Zapp started building a brand that could travel through wholesale into licensed retail. That origin still shapes how the company talks about itself: as a producer and publisher with a long market memory, not as a single SKU and not as a cultivar nickname.",
        "Wholesale literacy means understanding that product reaches adults 21+ where it is legal only after licensed partners receive, store, and sell it under local rules. Batch information, packaging, and shelf sets can differ by state and by door. Brand storytelling that ignores those gates confuses shoppers. This site keeps the company story plain so readers can separate publisher education from the live catalog they will see in a store.",
        "The same clarity protects authenticity cues. Adults looking for Presidential should expect brand-consistent naming, packaging, and batch details at participating licensed retailers, then verify those details in person. Educational copy here does not invent awards, celebrity endorsements, or retail claims. It names the company, the founders' LA start, the wholesale path, and the plant guide that supports informed licensed shopping.",
      ],
      contextualLinks: [
        {
          before: "Start from the official ",
          href: "/",
          label: "Presidential Cannabis plant guide home",
          after: " when you want the brand definition and the map of plant, flower, and genetics hubs in one place.",
        },
      ],
    },
    {
      id: "publisher-and-purpose",
      heading: "The Brand as Publisher",
      paragraphs: [
        "This publication gives the durable education a separate, focused home. The Plant covers botany, flower anatomy, trichomes, harvest, drying, and cure. The Flower organizes appearance, aroma, structure, moisture, storage, and freshness into a practical quality view. Genetics explains breeding, phenotypes, lineage, naming, landrace foundations, and batch variation. Choosing turns those ideas into useful menu reading and licensed-counter questions.",
        "The relationship between the portfolio sites is deliberate. presidentialcannabis.net owns the company definition and plant education for the Presidential Cannabis brand. presidentialmoonrocks.com carries the product catalog and retailer-finding hub. presidentialthc.net explains infusion chemistry, and presidentialblunts.net covers blunt formats. Together they connect brand context, plant knowledge, product depth and licensed retail.",
        "Publisher literacy is the habit of reading those lanes in the right order. Company identity lives here. Product depth lives on the catalog and format sites. Plant literacy lives in the silos linked from this page. Keeping those lanes separate stops brand names from being mistaken for strain names and stops educational pages from pretending to be a live menu.",
      ],
      contextualLinks: [
        {
          before: "Read ",
          href: "/plant",
          label: "The Plant",
          after: " for how the living crop becomes harvestable flower, including anatomy, trichomes, harvest timing, drying, and cure.",
        },
        {
          before: "Use ",
          href: "/flower",
          label: "The Flower",
          after: " when you want a practical quality lens: appearance, aroma, structure, moisture, storage, and freshness signals.",
        },
        {
          before: "Open ",
          href: "/genetics",
          label: "Genetics",
          after: " to understand lineage, phenotypes, naming, and why batches from the same family can still differ on a licensed shelf.",
        },
      ],
    },
    {
      id: "how-to-read-this-guide",
      heading: "How Adults Use This Guide",
      paragraphs: [
        "Treat this site as prep for a licensed retail visit, not as a substitute for one. Read the brand definition here, then move into plant, flower, or genetics pages when you need language for what you see and smell. Bring those questions to a licensed counter where packaging and batch information are available to check.",
        "Presidential Cannabis on this page always means the company and publisher. It does not rename a cultivar, and it does not claim medical outcomes or exaggerated potency language. The educational job is narrower and more useful: give adults 21+ a clear company story and plant vocabulary they can carry into legal markets that already regulate what can be sold.",
        "If you arrived looking for product art, SKUs, or a store near you, follow the official catalog and locator links on this page. If you arrived looking for who publishes this guide and why plant literacy sits beside the brand, you are already on the right URL. Stay on presidentialcannabis.net for company and plant education; use the portfolio sites for catalog, chemistry, and format depth.",
      ],
      contextualLinks: [
        {
          before: "Return to the ",
          href: "/",
          label: "official guide home",
          after: " anytime you need the full map of Presidential Cannabis plant education from one starting point.",
        },
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/",
      label: "About the Presidential Cannabis official guide",
      description: "Return to the official brand and plant guide.",
    },
    {
      href: "/plant",
      label: "The Plant",
      description: "Understand the living source behind every flower.",
    },
    {
      href: "/flower",
      label: "The Flower",
      description: "Read the visible and aromatic signs of flower quality.",
    },
    {
      href: "/genetics",
      label: "Genetics",
      description: "Learn how lineage, selection, and batches differ.",
    },
    {
      href: "/choosing",
      label: "Choosing",
      description: "Bring plant knowledge to a licensed retail counter.",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "Use the official Presidential store locator",
  },
};
