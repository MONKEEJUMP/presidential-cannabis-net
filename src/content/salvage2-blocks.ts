import type { LeadBlock } from "./types";

// Salvage-2 1006: Surfer term and question gaps, answered only from facts already published on this site.
export const salvage2Blocks: Record<string, LeadBlock[]> = {
  "/genetics/why-two-batches-differ": [
    {
      id: "does-small-batch-mean-consistency",
      heading: "Does small batch production guarantee consistency?",
      paragraphs: [
        "No. Small batch has no universal definition in the cannabis industry. In ordinary use it means fewer plants in a run, a lot identifier, and closer daily attention while those plants grow. It describes a production approach, not a legal grade, so two small-batch gardens can still turn out different flower from the same strain.",
        "Consistency depends on how tightly the processes and variables are held from run to run: light, temperature, humidity, nutrition, root space, plant care, harvest timing, drying, cure, packaging, and storage. A small batch makes each lot easier to track by its identifier and dates. It does not freeze those variables, which is why the lot line on the jar matters more than the size of the run.",
      ],
    },
  ],
  "/about": [
    {
      id: "where-pre-rolls-and-flavors-sit",
      heading: "Where do pre-rolls and flavor names sit in the Presidential catalog?",
      paragraphs: [
        "Alongside the flagship Moon Rocks, the catalog includes infused pre-rolls rolled in paper, tobacco-free blunts, and minis. Those rolls are organized across the Silver Flavor Series, Gold Strain Series, Rose Gold Connoisseur Series, and signature Presidential lines, and each package carries its collection and product name.",
        "Flavor and cultivar names travel across formats. Package artwork shows names such as Grape, Peach Mango, Strawberry, and Watermelon on infused pre-rolls and mini pre-rolls as well as on Moon Rocks. Live SKUs, artwork, and inventory change by market, so the current package and catalog decide which pre-roll or flavor is actually available.",
      ],
    },
  ],
  "/plant/the-flower-structure": [
    {
      id: "fan-leaves-versus-flower",
      heading: "Where do fan leaves end and the flower begin?",
      paragraphs: [
        "Fan leaves are the large palmate leaves of the cannabis plant, and they belong mainly to its energy-making system. Guides describe sativa-type plants with thinner fan leaves carrying more leaflets and indica-type plants with broader blades. The flower sits above them at the flower sites: bracts, pistils, and small sugar leaves that often carry resin.",
        "Only female cannabis plants build that resinous flower cluster, and at harvest the large fan leaves are trimmed away from it. Some growers remove them at the cut, while others leave them on so the outer layers dry more slowly. Either way, the finished bud keeps the resin-bearing bracts and sugar leaves, not the fan leaves.",
      ],
    },
  ],
  "/genetics/landrace-and-modern": [
    {
      id: "landrace-into-modern-hybrids",
      heading: "How did landrace strains feed modern hybrids?",
      paragraphs: [
        "Landrace strains are regional populations: seed saved and replanted for generations in places such as the Hindu Kush mountains, Thailand, Mexico, and coastal South Africa until the plants fit the local climate. Breeders carried that material into crosses, and many modern commercial cultivars now show extensive admixture from repeated hybridization.",
        "That history is why indica and sativa work better as growth-form words than as a full description of a modern hybrid. Landrace genetics survive through preservation: seed populations kept in their native environment, collected seed lots, and selected plants carried as cuttings, each with records of where it came from. A terpene profile on a menu still describes the batch in the jar, not the landrace behind it.",
      ],
    },
  ],
  "/plant/what-cannabis-is": [
    {
      id: "marijuana-hemp-and-cannabis-oil",
      heading: "Are marijuana, hemp, and cannabis oil different plants?",
      paragraphs: [
        "No. All three point back to one species, Cannabis sativa, a flowering annual. Marijuana is the everyday name for the drug form, industrial hemp is the same species grown for fiber and seed under a different rule set, and cannabis oil, where a market allows it, is a prepared extract of the same plant material.",
        "The part used for smoking cannabis is the dried and cured female flower, commonly used in a pipe, a joint, or a vaporizer. Its resin glands hold THC and the other cannabinoids along with the terpenes behind aroma, and cannabis is the only plant known to produce delta-9-THC.",
      ],
    },
  ],
  "/choosing/flower-vs-infused": [
    {
      id: "moon-rocks-sun-rocks-caviar",
      heading: "Are moon rocks, sun rocks, and caviar the same thing?",
      paragraphs: [
        "Not exactly. Presidential Moon Rocks are flower carried through with concentrate and finished with kief, so the outer kief coat is part of the build. Cannabis caviar is the related term for flower coated in oil without that separate kief layer. Sun rocks is another retail nickname for infused flower, and it is not a quality grade.",
        "Menus sometimes use these names loosely, so read the construction instead of the nickname. Ask whether the unit has a discrete outer kief coat or only an oil finish, and check the package for the concentrate it lists, such as live resin, live rosin, or hash oil. Each infused unit is its own batch.",
      ],
    },
  ],
  "/choosing": [
    {
      id: "strain-labels-and-terpene-profile",
      heading: "Where do strain names, indica and sativa tags, and terpene profiles fit in a choice?",
      paragraphs: [
        "Later than most shoppers expect. A strain name is the public handle on a menu and can point to one selected cut or a whole seed family. An indica, sativa, or hybrid tag is label shorthand for genetics: indica and sativa are useful growth-form words and weak forecasts of how a session will feel, and most modern catalogs mix the two.",
        "A terpene profile is a batch description of the aromatic compounds that shape smell and flavor, so it belongs to the jar in hand rather than the strain name. Whether you call it weed, marijuana, or cannabis, start with the format and the occasion, then use strain, tag, and terpene profile to compare a short list of products for smoking or any other use.",
      ],
    },
  ],
  "/plant/trichomes": [
    {
      id: "trichomes-at-harvest",
      heading: "What do trichomes show growers before harvest?",
      paragraphs: [
        "Growers read trichome heads through a lens: they start clear, turn cloudy or milky, and some go amber. A field that is mostly cloudy is commonly described as the visual peak, and a rising share of amber marks a later point. That read is one maturity cue among several, alongside vigor, aroma intensity, bracts, and pistils.",
        "Those glandular heads hold THC and the other cannabinoids along with terpenes, but they do not turn into a number on sight. Strains set an inherited range, and the grow shapes how that range appears. Flower kept away from pollen stays unfertilized, the form called sinsemilla, while pollinated flowers turn toward seeds.",
      ],
    },
  ],
  "/genetics/how-strains-are-made": [
    {
      id: "pollen-between-parent-strains",
      heading: "How does pollen move from one parent strain to another?",
      paragraphs: [
        "Cannabis plants are usually male or female. Male plants form pollen sacs about 5 millimeters across that open and release pollen, and female flowers catch it on the two hair-like stigmas of each pistil. A breeding project to create new strains begins with chosen parent strains and a breeding goal.",
        "Once pollen lands, the flower turns toward seed, which takes about 30 to 45 days to mature. Growing out that seed shows the first cross, the F1, and its range. Selection picks a keeper, and stabilizing a seed line repeats that selection across multiple generations before a name is released.",
      ],
    },
  ],
  "/genetics/strain-naming": [
    {
      id: "where-old-names-came-from",
      heading: "Where did indica, sativa, and older strain names come from?",
      paragraphs: [
        "Indica and sativa began as botanical names. In 1753 Carl Linnaeus classified cannabis as Cannabis sativa, and in 1785 Jean-Baptiste Lamarck classified Cannabis indica. Both words later moved from botany onto menus, where they now work as label shorthand rather than a formal classification.",
        "Many older cannabis strains were named for places. Seed kept for generations in the Hindu Kush mountains, Thailand, Mexico, and coastal South Africa gave names such as Hindu Kush, Thai, Acapulco Gold from Mexico, and Durban Poison. Strains named after a place point to a regional population, not to documented parents, so the name is still a reason to ask the breeder or producer what stands behind it.",
      ],
    },
  ],
  "/choosing/matching-format-to-occasion": [
    {
      id: "same-strain-different-formats",
      heading: "Can the same strain come in different formats?",
      paragraphs: [
        "Yes. A strain name can appear on more than one format, and Presidential package artwork shows Cherry Gelato on Moon Rocks, an infused pre-roll, and a mini pre-roll. The strain name identifies the cannabis strains in the genetics, while the format decides size, preparation, and how the product fits the occasion.",
        "That is why the same strain still belongs late in the choice. A strain name, including an indica or sativa tag, does not set session length or portion, and different terpene profiles can appear on one format. Pick the format for the plan first, then compare strain names inside that format.",
      ],
    },
  ],
  "/plant/cannabinoids-in-the-plant": [
    {
      id: "only-plant-with-thc",
      heading: "Is cannabis the only plant that makes cannabinoids?",
      paragraphs: [
        "Cannabis is the only plant known to produce delta-9-THC. Molecules from other plants that get called cannabinoids are better described as cannabimimetic: they only resemble cannabinoids because a binding assay shows some activity at the same receptors.",
        "Inside Cannabis sativa, raw cannabis, including the leaves as well as the flower, holds these compounds mainly as acids. The glandular resin on the flower is where the living plant produces them.",
      ],
    },
  ],
  "/plant/harvest-timing": [
    {
      id: "how-growers-call-harvest-time",
      heading: "How do growers decide when to harvest cannabis?",
      paragraphs: [
        "Growers read harvest time as a window across several flower sites, not from one patch or one calendar date. Trichome heads move from clear to cloudy to amber, bracts and pistils keep developing, and aroma builds. When structure, trichome maturity, aroma, and the whole plant line up, it is time to harvest.",
        "A canopy never matures in perfect unison, so buds on different flower sites can sit at different points in the window. After the cut, the cannabis harvest moves straight into controlled drying and curing, which carries the flower from fresh cut to stable buds.",
      ],
    },
  ],
  "/choosing/first-time": [
    {
      id: "pre-roll-or-loose-flower",
      heading: "Pre-roll or loose flower on a first visit?",
      paragraphs: [
        "Both are flower, packaged differently. Loose flower lets you see the cured buds and portion them as you go, and intact buds hold moisture and flavor longer than pre-ground flower. A pre-roll packages the same kind of flower ready rolled for a session, so there is nothing to grind or roll.",
        "An infused pre-roll is a different unit: flower plus concentrate, read from its own label and batch. If a pre-roll is on your list, ask the dispensary whether it is plain flower or infused, and which dates belong to the package in hand.",
      ],
    },
  ],
  "/genetics/lineage": [
    {
      id: "what-hybrid-means-in-lineage",
      heading: "What does hybrid mean in a lineage?",
      paragraphs: [
        "The word hybrid describes a cross between distinct parents or populations. Most modern hybrid strains carry indica and sativa genetics mixed together, and terms such as sativa-dominant hybrid describe a lean rather than a pure type. Indica strains and sativa strains in a lineage chart are growth-form labels for the parents, not a full account of their characteristics.",
        "A lineage records which plants were crossed to create the cultivar. Shared words in two names do not mean shared parents, so a hybrid's family is read from documented parentage, and the batch in the jar from its own dates and panel.",
      ],
    },
  ],
  "/plant/drying-and-curing": [
    {
      id: "inside-the-drying-room",
      heading: "What conditions does a drying room hold?",
      paragraphs: [
        "Drying cannabis is commonly done by hanging it for about 5 to 14 days in a dark, cool drying room, with temperature, humidity, darkness, and air movement guiding moisture loss from the plant. Dry trimming waits until the hang is finished, and some growers leave fan leaves on so the outer layers dry more slowly.",
        "Curing cannabis follows in jars. Guides say buds should be jarred at 55 to 62 percent humidity, and that ideal relative humidity during curing is 58 to 62 percent. Where mold shows up, relative humidity and a crowded canopy are the practical questions, and humidity control is about preventing mold rather than chasing a calendar.",
      ],
    },
  ],
  "/plant/indica-sativa-hybrid": [
    {
      id: "are-indica-and-sativa-chemically-different",
      heading: "Are indica and sativa really different chemically?",
      paragraphs: [
        "Not in a way the label can promise. Indica and sativa describe historical growth forms: compact, bushy plants with broad leaf blades versus taller plants with narrower leaflets. Modern catalogs mix the two, so most indica strains, sativa strains, and hybrid strains on a menu share mixed genetics.",
        "Chemistry is read from the batch, not from the tag. A cannabinoid panel and a terpene profile describe the tested sample, and breeders use separate chemotype labels, such as type 4 for CBG-dominant plants, when they mean chemistry. An indica, sativa, or hybrid tag identifies genetics shorthand rather than the condition of this batch.",
      ],
    },
  ],
  "/choosing/what-to-ask": [
    {
      id: "which-label-lines-to-ask-about",
      heading: "Which package labels should you ask about?",
      paragraphs: [
        "Start with the lot line on the label: the batch identifier, the harvest date, and the package date. Those labels tie the jar to one completed run. The strain name above them is the public handle, and the cultivar title, producer, and any listed parents sit in separate fields for a reason.",
        "Ask staff to point to each label on the unit in hand rather than the menu listing. If a certificate of analysis or terpene panel is available, ask which lot it belongs to, because it describes the sample tested from that lot, not every jar that has carried the strain name.",
      ],
    },
  ],
  "/choosing/reading-a-menu": [
    {
      id: "how-dispensaries-group-products",
      heading: "How do dispensaries group pre-rolls and other products on a menu?",
      paragraphs: [
        "Cannabis products on a dispensary menu include flower, pre-rolls, edibles, vapes, and concentrates. The infused category sits beside raw flower because the materials differ, and menus often split rolls by paper or tobacco-free hemp wrap, which puts pre-rolls in a separate line from blunts and minis.",
        "What a dispensary lists changes by state, store, and date, so treat any online menu as a snapshot. Before a visit, ask what is in stock today, and at the counter, match the product name, format, and batch details on the package to the menu line.",
      ],
    },
  ],
};
