import type { LeadBlock } from "./types";

// Salvage 1006: question-led blocks built only from facts already published on this site.
export const questionBlocks: Record<string, LeadBlock[]> = {
  "/genetics/why-two-batches-differ": [
    {
      id: "where-batch-and-lot-details-are-listed",
      heading: "Where are batch and lot details listed on packaging?",
      paragraphs: [
        "Look on the package label for the lot line: the batch identifier, the harvest date, and the package date. Those fields tie the jar to one completed run, while the cultivar name above them only identifies the genetic family. Where a certificate of analysis or terpene panel is available, it describes the sample tested from that lot, not every jar that has carried the name.",
        "At a licensed dispensary, ask which dates belong to the jar in hand and whether this lot is the same cut as the last delivery. An indica, sativa, or hybrid tag on the menu line is commercial shorthand, and THC on a panel is a snapshot of the tested sample. Neither replaces the lot line when two batches of one strain are being compared.",
      ],
    },
  ],
  "/plant/the-flower-structure": [
    {
      id: "which-parts-are-smokable",
      heading: "Which parts of the cannabis plant are smokable?",
      paragraphs: [
        "The part sold as cannabis flower is the dried and cured female flower cluster: the inflorescence of overlapping bracts, pistils, close sugar leaves, and resin glands. Roots stay below ground and never become trimmed flower, the main stalk is support rather than a resin-rich surface, and trimming removes the larger leaves and selected sugar-leaf tips before packaging.",
        "That finished flower is what goes into a pipe, a joint, or a vaporizer, and pre-made formats package the same flower for a session. Its aroma and taste come from terpenes held in the same glandular resin that carries THC and the other cannabinoids, which is why the resin-dense bracts and sugar leaves matter more than the stem. Glands separated from the flower by dry sifting or ice water are collected as hash, a different product from the bud itself.",
      ],
    },
    {
      id: "male-and-female-flowers",
      heading: "What's the difference between male and female cannabis flowers?",
      paragraphs: [
        "Cannabis is dioecious, so male and female flowers usually grow on separate plants. Male plants form pollen sacs about 5 millimeters across that open and release pollen. Female flowers form inside bracts and send out pistils, each bearing two hair-like stigmas that catch that pollen.",
        "Only female plants build the resinous cluster sold as flower. Kept away from pollen, they stay unfertilized, the form called sinsemilla. Once pollen lands on a pistil, the flower turns toward seed, which takes about 30 to 45 days to mature. That is why gardens grown for flower keep male plants apart.",
      ],
    },
  ],
  "/": [
    {
      id: "buying-at-a-dispensary",
      heading: "Can you buy Presidential Cannabis at a dispensary?",
      paragraphs: [
        "Yes, through licensed dispensaries and other licensed cannabis retailers. Presidential works wholesale and does not sell cannabis directly online, so its products reach adults 21+ only where legal, after a licensed retailer receives and stocks them.",
        "Which dispensary carries which format changes by state, store, and date. Before a visit, ask the store what is in stock today. At the counter, match the packaging, collection name, and batch details on the unit in hand to the current catalog.",
      ],
    },
  ],
  "/plant/trichomes": [
    {
      id: "when-trichomes-are-ready",
      heading: "When are trichomes ready to harvest?",
      paragraphs: [
        "Growers read readiness as a window across several flower sites, not from one patch. Heads start clear, turn cloudy or milky, and some go amber. A field that is mostly cloudy is commonly described as the visual peak, and a rising share of amber marks a later point. Top, middle, and lower sites can turn on different days, and different strains can cloud on different schedules.",
      ],
      subsections: [
        {
          id: "should-all-pistils-be-orange",
          heading: "Should all hairs be orange before harvest?",
          paragraphs: [
            "No. Pistils moving from white toward orange, red, or brown are a companion cue, and they do not all have to darken. Guides often put the approach of the window at about 70 to 90 percent darkened pistils, and they read trichome color on the bracts, bract swell, aroma, and plant health beside that share.",
          ],
        },
        {
          id: "harvesting-while-clear",
          heading: "What happens if you harvest when buds are still clear?",
          paragraphs: [
            "Cutting while most heads are still clear takes the glands before the opaque stage. An early cut tends to show lighter stigma tones and bracts that are still filling out, and guides associate harvesting too early with lower yield. Those notes describe maturity, not a promise about any finished jar.",
          ],
        },
      ],
    },
  ],
  "/genetics/how-strains-are-made": [
    {
      id: "how-long-breeding-takes",
      heading: "How long does it take to breed cannabis strains?",
      paragraphs: [
        "Usually several generations, which can mean several years. Cannabis is an annual, so each generation has to grow all the way through reproduction, and evaluating cured flower adds weeks after every harvest. The first cross, the F1, shows the range; selection picks a keeper; stabilizing a seed line repeats that selection across multiple generations, often confirmed across rooms, seasons, or partner gardens.",
      ],
    },
    {
      id: "traits-breeders-look-for",
      heading: "What traits do breeders look for?",
      paragraphs: [
        "Breeders write the list before the hunt: plant architecture and vigor, a manageable size, a known flowering window, mold and pest resistance, bract development, trichome coverage, a clear aroma, and how well the flower holds up through cure. A plant that performs across the whole list becomes a candidate for preservation.",
      ],
      subsections: [
        {
          id: "what-is-pheno-hunting",
          heading: "What is pheno-hunting?",
          paragraphs: [
            "Pheno-hunting is growing out a seed population from one cross and comparing the siblings against those written criteria. Every plant carries an identifier, and cuttings are taken before flowering. After harvest, drying, and cure, the breeder evaluates the finished flower and returns to the matching cutting, which continues as a clone. A single female plant can produce dozens of phenotypes, so a hunt often runs more than one cycle.",
          ],
        },
      ],
    },
    {
      id: "is-any-strain-pure-sativa",
      heading: "Is any strain 100% sativa?",
      paragraphs: [
        "A pure sativa label is trade shorthand, not proof of an unmixed line. Many modern commercial cultivars show extensive admixture from repeated hybridization, and even landrace populations, the regional seed pools behind many modern crosses, carry living variation rather than one fixed cut. Documented parents say more than the label does.",
      ],
    },
  ],
  "/plant/harvest-timing": [
    {
      id: "wet-trimming-versus-dry-trimming",
      heading: "What distinguishes wet trimming from dry trimming?",
      paragraphs: [
        "The timing of the trim. Wet trimming clips leaf before the hang, and many gardens find it easier and faster. Dry trimming waits until the hang is finished, commonly about 5 to 14 days in a dark, cool drying room. The choice follows cultivar density, room capacity, and labor, and it does not change the maturity already called at harvest.",
      ],
    },
  ],
  "/genetics/lineage": [
    {
      id: "what-is-a-lineage-chart",
      heading: "What is a cannabis lineage chart?",
      paragraphs: [
        "It is a family tree for a cultivar. A simple chart names the two parents; a deeper one follows each parent back through earlier crosses, selections, and regional or landrace foundations. Read from the present backward, it shows where genetic material traveled, while the current phenotype and batch show how that inheritance grew this cycle.",
      ],
    },
    {
      id: "how-hybridization-started",
      heading: "How did cannabis hybridization start?",
      paragraphs: [
        "With regional landrace populations. Seed kept for generations in places such as the Hindu Kush mountains, Thailand, Mexico, and coastal South Africa adapted to local seasons. Modern breeders then brought those populations and their descendants into planned crosses, widening aromatic range, flower density, timing, and indoor adaptability before selection narrowed the results into named cultivars.",
      ],
    },
  ],
  "/plant/drying-and-curing": [
    {
      id: "how-long-drying-and-curing-take",
      heading: "How long does drying and curing cannabis take?",
      paragraphs: [
        "Guides commonly give drying as about 7 to 14 days, with a whole-plant or branch hang of about 5 to 14 days in a dark, cool room. A basic cure in sealed jars takes about 2 to 4 weeks, and some guides extend it to 2 to 6 months. The real pace follows flower size and density, starting moisture, room conditions, and the grower's method, so dense colas and open flowers do not share one clock.",
      ],
    },
  ],
  "/about": [
    {
      id: "what-strain-is-presidential",
      heading: "What strain is Presidential?",
      paragraphs: [
        "None. Presidential Cannabis is a company and publisher, not a cannabis strain. Cultivar names that include Presidential, such as Presidential Kush, are separate plant identities with their own genetics. The brand's own products carry their collection and cultivar names on the package, across the Silver Flavor Series, Gold Strain Series, Rose Gold Connoisseur Series, and signature Presidential lines.",
        "The plant, flower, genetics, and choosing chapters this guide keeps together explain those names without turning a brand into a cultivar.",
      ],
    },
    {
      id: "where-to-buy-presidential",
      heading: "Where can you buy Presidential products?",
      paragraphs: [
        "At licensed dispensaries in the markets the brand serves. Presidential sells wholesale to licensed partners and does not sell cannabis online. Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis reach adults 21+ only where legal, and the formats on a given shelf vary by market and retailer. Check the packaging and batch information in person at the store.",
      ],
    },
  ],
  "/genetics/landrace-and-modern": [
    {
      id: "where-landrace-cannabis-comes-from",
      heading: "Where does landrace cannabis come from?",
      paragraphs: [
        "From regions where seed was saved and replanted for generations until the population fit the local climate. Classic landrace regions include the Hindu Kush mountains of Afghanistan, Thailand and Southeast Asia, Mexico, and the coast around Durban, South Africa, with South America and Central Asia carrying their own histories. The best-known names follow those places: Hindu Kush, Thai, Acapulco Gold from Mexico, and Durban Poison.",
      ],
    },
    {
      id: "are-landrace-strains-left",
      heading: "Are there any landrace strains left?",
      paragraphs: [
        "Landrace material survives through preservation: seed populations kept in their native environment, collected seed lots, and selected plants carried as cuttings, each with records of where it came from. A regional name on a menu is a different matter. It can describe an adapted population, a collected lot, or a modern selection that only borrows the place, so provenance has to be asked for.",
      ],
    },
  ],
  "/plant/what-cannabis-is": [
    {
      id: "what-are-cannabinoids",
      heading: "What are cannabinoids, and how many are there?",
      paragraphs: [
        "Cannabinoids are compounds the cannabis plant makes in the resin heads on its flowers; the plant-made ones are called phytocannabinoids. THC and CBD are the names most labels print. Public summaries, including National Institutes of Health pages, put the total at more than 100. In the living plant they sit mainly in acidic form, before any heat is applied.",
      ],
    },
    {
      id: "what-cannabis-looks-like",
      heading: "What does cannabis look like?",
      paragraphs: [
        "A flowering annual with an upright main stalk, branches at nodes, and large palmate fan leaves. Female plants build dense flower clusters of overlapping bracts threaded with pistils that start pale and turn orange, rust, or brown, and the bracts and small sugar leaves are frosted with resin glands. Dried and cured, those clusters are the buds in a jar.",
      ],
    },
  ],
  "/choosing/flower-vs-infused": [
    {
      id: "infused-flower-versus-infused-pre-rolls",
      heading: "What's the difference between infused flower and infused pre-rolls?",
      paragraphs: [
        "Infused flower is the loose prepared unit: cured flower with a concentrate added, sometimes finished with kief, as in Moon Rocks. An infused pre-roll is a paper roll prepared in advance with infused material inside, so rolling is removed from the occasion and the portion is fixed. Both should name the added concentrate on the package, and the pre-roll adds paper and portion size to the comparison.",
      ],
    },
  ],
  "/choosing": [
    {
      id: "checking-the-harvest-date",
      heading: "How do you check the harvest date on cannabis?",
      paragraphs: [
        "Read it on the package label or the menu row, beside the package date and batch identifier. The gap between harvest and package dates gives context for drying and curing, and the current date shows how long the flower has been packaged. If the jar shows no harvest date, ask the dispensary staff which dates belong to the batch in hand.",
      ],
    },
    {
      id: "flower-versus-pre-rolls",
      heading: "Flower vs pre-rolls: which to choose?",
      paragraphs: [
        "Raw flower keeps selection and preparation flexible: you see the cured buds themselves and portion them as you go, and intact buds hold moisture and flavor longer than pre-ground flower. A pre-roll packages flower for a particular kind of session and removes rolling from the occasion, which suits a fixed time, sharing, or travel. Choose the format first, then compare size, dates, and batch within it.",
      ],
    },
  ],
  "/genetics/phenotypes": [
    {
      id: "genotype-versus-phenotype",
      heading: "What is the difference between genotypes and phenotypes?",
      paragraphs: [
        "Genotype is the inherited script inside a seed or cutting. Phenotype is the plant that script produces in a given environment: the height, branching, leaf shape, bud density, color, and aroma you can see, smell, and compare. A strain name is a third layer, the public handle on a menu, and it can point to one selected cut or to a whole seed family.",
      ],
    },
    {
      id: "can-cloning-preserve-a-phenotype",
      heading: "Can cloning preserve a cannabis phenotype?",
      paragraphs: [
        "Cloning preserves the genotype of the selected plant: a cutting is a new plant with the same genetic identity. The expression is not frozen. A clone still responds to light, root space, nutrition, harvest window, and cure, so clones of one cut can finish with different density, frost, or aromatic balance in two rooms.",
      ],
      subsections: [
        {
          id: "same-strain-different-growers",
          heading: "Why does the same strain look different from different growers?",
          paragraphs: [
            "A shared title can hide two kinds of difference. A seed run of the same family can segregate into several phenotypes, and even one preserved cut meets a different garden, harvest day, and cure at each producer. Ask whether the jar is a named cut or a seed line, and who produced it.",
          ],
        },
      ],
    },
  ],
  "/genetics/strain-naming": [
    {
      id: "strain-versus-cultivar",
      heading: "What's the difference between a strain and a cultivar?",
      paragraphs: [
        "Strain is the everyday word, and it has no precise scientific definition or central registrar, so anyone can coin one. Cultivar is the more precise term for a released selection or seed line traded under a name, the identity that parentage, phenotype notes, and producer records are supposed to point to. Two plants can share a strain spelling and still differ in genes, which is why the cultivar's documentation matters more than the title.",
      ],
    },
  ],
  "/choosing/matching-format-to-occasion": [
    {
      id: "why-start-with-the-occasion",
      heading: "Why start with the occasion instead of the strain?",
      paragraphs: [
        "Because the occasion sets the practical limits first: how much time there is, how many people are sharing, how much preparation the setting allows, and what has to travel or be stored. Format answers those limits directly. A strain name, including an indica or sativa tag, is label shorthand for genetics and does not set session length or portion, so it belongs later, inside a shortlist of the right format.",
      ],
    },
    {
      id: "how-budtenders-match-format",
      heading: "How do budtenders help match a product to an occasion?",
      paragraphs: [
        "Describe the occasion in plain terms, then ask which formats and package sizes the store has today that fit it. A budtender can narrow the shelf by practical fit before anyone compares genetics or percentages, and can confirm which notes apply to the current batch. The label then confirms the portion, dates, and batch.",
      ],
    },
  ],
  "/plant/cannabinoids-in-the-plant": [
    {
      id: "three-examples-of-cannabinoids",
      heading: "What are three examples of cannabinoids?",
      paragraphs: [
        "THC (delta-9-tetrahydrocannabinol), CBD (cannabidiol), and CBG (cannabigerol). All three trace back to cannabigerolic acid, the acid the plant forms first, and in raw flower they are present mainly in acidic form. Primary sources also name CBC, CBN, and THCV among the minor cannabinoids that occur in trace quantities.",
      ],
    },
  ],
  "/choosing/first-time": [
    {
      id: "shop-the-menu-without-overwhelm",
      heading: "How do I shop the menu without getting overwhelmed?",
      paragraphs: [
        "Narrow it in order. Pick a format first, then a package size, and only then compare two or three rows on cultivar, harvest and package dates, and batch. Tell the budtender it is your first visit and describe the purchase in practical terms, and the dispensary staff can narrow the shelf before percentages come up.",
      ],
    },
    {
      id: "first-visit-questions",
      heading: "What questions should I ask during my first visit?",
      paragraphs: [
        "Ask when the current batch was harvested and packaged, how the cure feels, which aromas stand out, and which format fits the occasion you described. Before leaving, confirm the product name, format, producer, dates, and batch identifier against what you were told.",
      ],
    },
  ],
  "/plant/indica-sativa-hybrid": [
    {
      id: "telling-indica-and-sativa-plants-apart",
      heading: "How can you tell indica and sativa plants apart?",
      paragraphs: [
        "By the living plant, not the label. Guides describe sativa-type plants with thinner fan leaves carrying more leaflets and indica-type plants with broader blades, and compact growth is linked to the cool, high-altitude Hindu Kush. On a dispensary shelf, though, the indica, sativa, or hybrid tag is commercial shorthand, and many modern cultivars show extensive admixture, so documented parents say more than the category.",
      ],
    },
    {
      id: "crossing-indica-and-sativa",
      heading: "What happens when indica and sativa are crossed?",
      paragraphs: [
        "The seeds form a hybrid population. Each seed reshuffles the two parents' inheritance, so siblings can vary in height, branching, leaf shape, flowering time, and aroma, and breeders select a keeper from that range. Generations of such crosses are why most modern cultivars are mixed, and why a hybrid label names a cross rather than a fixed portrait.",
      ],
    },
  ],
  "/choosing/what-to-ask": [
    {
      id: "what-to-tell-a-budtender-first",
      heading: "What should you tell a budtender first?",
      paragraphs: [
        "The occasion and the format: whether it is a first visit, how long the session is, how many people are sharing, and whether you want raw flower or a prepared unit such as a pre-roll. Concrete preferences give the budtender a frame for narrowing the shelf before genetics or percentages come up.",
      ],
    },
    {
      id: "asking-about-the-terpene-profile",
      heading: "What can you tell me about the terpene profile?",
      paragraphs: [
        "Ask which aromas stand out in the current batch, whether a terpene panel is available for that lot, and whether there is a sample jar to smell. Terpenes shape aroma and flavor, and common characters include earthy myrcene, citrus limonene, peppery caryophyllene, and pine-like pinene. A panel describes the tested sample from this batch, not every jar sold under the cultivar name.",
      ],
    },
  ],
  "/choosing/reading-a-menu": [
    {
      id: "is-a-pre-roll-indica-or-sativa",
      heading: "How do you know if a pre-roll is indica or sativa?",
      paragraphs: [
        "Check the strain-type tag and the cultivar name on the menu row and the package. The tag is commercial shorthand, and many modern cultivars are heavily mixed, so the cultivar name, its documented parents, and the batch dates say more about what is inside the roll. For an infused pre-roll, also read which concentrate was added.",
      ],
    },
  ],
  "/flower": [
    {
      id: "what-is-cannabis-flower",
      heading: "What is cannabis flower?",
      paragraphs: [
        "Cannabis flower is the dried and cured bud of the female plant, the flowering top of Cannabis sativa, the same species grown as industrial hemp for fiber and seed. A bud is a cluster of resin-coated bracts with pistils and small sugar leaves; the large fan leaves are trimmed away. The resin glands hold THC and the other cannabinoids along with the terpenes behind aroma and taste, and the strain name, including any indica, sativa, or hybrid tag, identifies the genetics rather than the condition of this batch.",
      ],
    },
    {
      id: "curing-storage-and-taste",
      heading: "How do curing and storage affect taste?",
      paragraphs: [
        "Curing in sealed containers evens out the remaining moisture so the surface feels settled and the aroma presents clearly. Guides say a dry finished too fast or too hot leaves a hay-like smell and harsh smoke that the cure cannot repair. After purchase, keep buds whole in a sealed, cool, dark container until use, because pre-ground flower loses moisture and flavor faster than intact buds.",
      ],
    },
    {
      id: "how-flower-is-used",
      heading: "How is cannabis flower used?",
      paragraphs: [
        "Flower is commonly used in a pipe or bowl, a joint, or a vaporizer, and guides note that a bong adds water filtration. Prepared formats remove the rolling: pre-rolls in paper, and blunts in a tobacco-free hemp wrap on menus that list them separately. Each format still starts with the same flower, so the checks in this guide apply before any grinder, paper, or wrap.",
      ],
    },
  ],
};
