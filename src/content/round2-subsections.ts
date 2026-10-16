import type { LeadSubsection } from "./types";

// Surfer ROUND2 1016: question and term gaps, answered only from facts already published on this site.
export const round2Subsections: Record<string, LeadSubsection[]> = {
  "/": [
    {
      id: "what-is-a-presidential-joint",
      heading: "What is a Presidential joint?",
      paragraphs: [
        "A Presidential joint is the brand's infused pre-roll, rolled in paper. Presidential blunts use a tobacco-free hemp wrap instead, and both sit beside Moon Rocks and minis in the four-format catalog.",
      ],
      contextualLinks: [
        { before: "See ", href: "#the-catalog", label: "The Presidential Product Line", after: " for how the four formats are organized." },
      ],
    },
  ],
  "/about": [
    {
      id: "what-is-a-presidential-joint",
      heading: "What is a Presidential joint?",
      paragraphs: [
        "Joint is everyday shorthand for a pre-roll, and at Presidential it means the infused pre-roll rolled in paper. It is one catalog format alongside the flagship Moon Rocks, tobacco-free blunts, and minis, and each package carries its collection and product name.",
      ],
      contextualLinks: [
        { before: "Read ", href: "#where-pre-rolls-and-flavors-sit", label: "where pre-rolls and flavor names sit", after: " for how those rolls are organized across the series." },
      ],
    },
  ],
  "/choosing/matching-format-to-occasion": [
    {
      id: "indica-vs-sativa-and-the-occasion",
      heading: "Does indica vs. sativa decide the occasion?",
      paragraphs: [
        "No. Indica, sativa, and hybrid are commercial label categories for cannabis strains, not an occasion plan. Many modern cultivars show extensive admixture, so the indica sativa line on a menu is shorthand rather than a full description of the batch. Settle format, package size, and timing first, then read the strain category as one more label field.",
      ],
      contextualLinks: [
        { before: "Read ", href: "/plant/indica-sativa-hybrid", label: "indica, sativa, and hybrid", after: " for what those categories describe on the plant." },
      ],
    },
    {
      id: "thc-percentage-and-format",
      heading: "Should THC percentage pick the format?",
      paragraphs: [
        "No. A THC percentage measures a defined portion of the tested sample, so the label number is one input rather than a quality grade or a format decision. Once the format fits the occasion, read the THC level beside the terpene profile, dates, aroma, and package size. Two rows with similar percentages can still differ in aroma, structure, and package count.",
      ],
      contextualLinks: [
        { before: "Use ", href: "/choosing/reading-a-menu", label: "how to read a dispensary menu", after: " to place the percentage column beside the other fields." },
      ],
    },
  ],
};
