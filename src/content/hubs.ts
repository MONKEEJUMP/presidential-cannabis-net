import type { PageContent } from "./types";

export const hubPages: PageContent[] = [
  {
    path: "/plant",
    kind: "hub",
    silo: "plant",
    h1: "The Cannabis Plant Guide",
    title: "Cannabis Plant: Structure & Harvest",
    description: "A field guide to cannabis as a living plant, from flowering structure and resin glands through harvest timing, drying, and cure.",
    wordTarget: [450, 600],
    intro: [
      "Cannabis is an annual flowering plant, and its harvested flower carries the visible record of genetics, growth, maturity, and handling. Understanding the living plant makes every later quality signal easier to read. This section follows the biological structure from the whole plant to the resin gland, then through harvest, drying, and cure.",
    ],
    sections: [
      {
        id: "plant-and-types",
        heading: "The Living Plant",
        paragraphs: [
          "What Cannabis Is explains the annual flowering cycle, the role of the flower, and the reason resin develops across its surface. Indica, Sativa, Hybrid adds the historical language used for plant form and origin. Together, these guides establish the plant as a biological system and place familiar labels in their most dependable modern context: lineage, growth pattern, and breeding history.",
          "The overview begins at the broadest scale. Roots gather water and nutrition, stems support growth, leaves power the plant, and flowers complete the annual cycle. Environmental conditions guide how inherited traits appear. That relationship between genetics and environment remains active through every stage of cultivation and helps explain why a current batch carries more useful detail than a category name alone.",
        ],
        contextualLinks: [
          {
            before: "The route from raw ",
            href: "/choosing/flower-vs-infused",
            label: "flower",
            after: " to infused formats becomes clearer when composition, label details, and occasion are considered together.",
          },
          {
            before: "The full Presidential Cannabis ",
            href: "/",
            label: "guides",
            after: " connect that plant foundation to flower quality, genetics, and licensed-counter choosing.",
          },
        ],
      },
      {
        id: "resin-and-structure",
        heading: "Resin and Flower Anatomy",
        paragraphs: [
          "Trichomes focuses on the living gland: where it forms, the common bulbous and stalked shapes, study-dependent head-size ranges, and the asynchronous color changes that accompany maturity. Cannabinoids examines what the living plant predominantly produces in those glands and the acidic forms in which those compounds begin. Flower Structure maps the bract, calyx, stigmas, sugar leaf, and cola into one clear anatomy.",
          "These three subjects fit closely together. Structure supplies the surface, trichomes populate it, and the resin inside those glands carries most of the plant's cannabinoids and terpenes. Close observation turns the flower from a single object into an organized cluster of parts, each with a role in development and a recognizable place in the finished harvest.",
        ],
      },
      {
        id: "harvest-window",
        heading: "Reading the Harvest Window",
        paragraphs: [
          "Harvest Timing follows the flower toward maturity. Cultivators read trichome clarity and color beside pistil development, flower structure, aroma, and the condition of the whole plant. A chosen window captures a particular expression of the cultivar, so timing becomes both a cultivation decision and a quality decision.",
          "The harvest guide explains how earlier and later windows shape the finished flower in different ways. It also shows why maturity is read across many glands and many flower sites. This broad reading respects the natural variation across a living plant and produces a more reliable picture than a single isolated trichome.",
        ],
      },
      {
        id: "after-harvest",
        heading: "From Harvest to Finished Flower",
        paragraphs: [
          "Drying and Curing explains how fresh flower becomes stable finished flower through an industry process that often spans several weeks. Temperature, humidity, darkness, and air movement guide moisture from the plant. Curing then allows remaining moisture to settle more evenly while the aromatic profile continues to change and is evaluated.",
          "This final stage protects work completed across the entire growing cycle. Terpenes are volatile, and cool, dark, steady conditions preserve their aromatic character. A balanced cure gives flower a settled surface, gentle resilience, and a defined nose. The seven plant guides connect seamlessly: biology builds the flower, maturity selects the moment, and post-harvest care carries that moment to the package.",
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "See where current Presidential selections are available" },
  },
  {
    path: "/flower",
    kind: "hub",
    silo: "flower",
    h1: "The Presidential Flower Guide",
    title: "Presidential Flower Guide",
    description: "Use the Presidential flower guide to evaluate cannabis flower through appearance, aroma, structure, moisture, cure, trichomes, and storage.",
    wordTarget: [800, 1100],
    intro: [
      "The Presidential flower guide brings appearance, aroma, structure, moisture, cure, and trichome condition into one coherent view of cannabis flower. Each quality can be observed on its own, and the complete assessment comes from reading them together. This section builds that assessment from the first look and first aroma through storage at home.",
      "Presidential Cannabis publishes this flower hub as adult 21+ quality literacy for finished cannabis flower: how to read sight, aroma, density, cure, and storage without turning any single cue into a medical claim. The brand name here is the company and publisher. Product art and retailer paths stay on the official catalog; this page stays with observation, handling, and batch context at licensed retail.",
    ],
    sections: [
      {
        id: "complete-view",
        heading: "The Complete Quality View",
        paragraphs: [
          "What Makes Good Flower supplies the overview. It follows the same sequence a practised buyer can use at a counter: observe color and structure, look across the surface for trichome coverage, notice trim and pistil condition, assess aroma, and read the cure through texture. The result is a balanced view that respects cultivar differences while recognizing careful cultivation and handling.",
          "Quality appears as alignment. A flower's density fits its genetics, its surface remains intact, its aroma has definition, and its moisture supports a stable texture. Batch dates and storage add context. Each clue strengthens the others, turning a visual impression into a grounded description of how the flower grew and traveled.",
          "Publisher flower literacy starts with that sequence. A jar or bag offers only a sample of a larger harvest, so the useful skill is a repeatable checklist rather than a single score: surface, nose, structure, moisture, package dates, and a storage plan. Adults shopping through licensed retailers can apply the same frame across cultivars and formats without treating any label percentage as the whole story.",
        ],
        contextualLinks: [
          {
            before: "Begin with ",
            href: "/flower/what-makes-good-flower",
            label: "what makes good flower",
            after: " for the counter-ready overview of appearance, trichomes, trim, aroma, and cure in one pass.",
          },
        ],
      },
      {
        id: "sight-and-scent",
        heading: "Sight and Aroma",
        paragraphs: [
          "Appearance examines color, trichome frost, pistils, trim, and the visual signs of well-developed flower. Aroma explains how to smell flower at a counter and what a vivid nose reveals about freshness, cure, and handling. It introduces common aromatic characters-earthy myrcene, citrus limonene, peppery caryophyllene, pine-like pinene, floral linalool, and fruity terpinolene-as members of a larger blend.",
          "These senses answer different questions. Sight maps structure and surface condition. Aroma reveals the volatile profile that remains in the batch. Together they provide a fast, information-rich starting point before percentages or cultivar names enter the conversation.",
          "Sight literacy also includes what packaging and light allow you to see. Clear views of trichome coverage, intact bracts, and tidy trim support a calmer comparison between jars. Aroma literacy stays practical: a short, clean inhale from the container after it has been opened briefly, then a return to the seal so the batch does not dry out on the counter. Neither sense alone finishes the assessment, but both set the pace for density, cure, and storage decisions that follow.",
        ],
        contextualLinks: [
          {
            before: "Study ",
            href: "/flower/appearance",
            label: "appearance",
            after: " for color, frost, pistils, and trim cues you can read under retail lighting.",
          },
          {
            before: "Then use ",
            href: "/flower/aroma",
            label: "aroma",
            after: " to practice a careful nose check and place common aromatic families in context.",
          },
        ],
      },
      {
        id: "structure-and-cure",
        heading: "Structure, Moisture, and Cure",
        paragraphs: [
          "Density and Structure shows how compact and open flowers can each express sound cultivation. It separates structural information from a complete quality judgment and explains how bracts, spacing, and trimming shape the piece in hand. Moisture and Cure adds touch: a balanced flower feels settled outside and resilient within, with a texture that supports easy handling.",
          "The cure joins visible and aromatic observation. Remaining moisture moves toward balance while the flower's nose and texture continue changing. This is why structure and cure belong beside each other: one begins with genetics and growth, while the other stabilizes moisture and carries a changing agricultural product toward retail.",
          "Density literacy keeps genetics and handling in the same frame. A tight flower can still be well grown, and an open flower can still be carefully finished; structure describes form more than a ranking. Cure literacy is the touch and time layer: moisture that feels even, a surface that is not brittle or spongy, and an aromatic profile that remains defined after the container returns to its seal. Plant anatomy and breeding context sit beside this silo when you want the living plant or the inheritance story behind the batch.",
        ],
        contextualLinks: [
          {
            before: "Compare form in ",
            href: "/flower/density-and-structure",
            label: "density and structure",
            after: ", then continue into moisture and finish cues in the moisture-and-cure child guide. Living-plant anatomy continues on The Plant hub when you need that foundation.",
          },
        ],
      },
      {
        id: "keeping-character",
        heading: "Keeping Flower at Its Best",
        paragraphs: [
          "Storage focuses on raw flower in a well-sealed container, kept cool, dark, and stable. Heat, light, air exchange, and time shape aromatic preservation, so a simple storage routine protects the character established during cure. A clean glass container and a consistent environment give the flower a dependable home.",
          "The six guides form a practical loop. Observe the flower, smell the batch, understand its structure, feel the cure, and store it with the same care. That sequence turns quality from a vague impression into a repeatable set of observations that works across cultivars and formats.",
          "A small personal record can make this loop even more useful: note the package date, first aroma, structure, and texture, then compare the same flower after storage. The change teaches what the container and environment preserve. Use this hub as the map, then move into the child guides for depth. When you want inheritance and naming context, the Genetics hub explains lineage and batch variation. When you want company and publisher context, the About page defines Presidential Cannabis as brand and publisher. Keep shopping decisions inside licensed retail channels where packaging and batch details can be verified in person.",
        ],
        contextualLinks: [
          {
            before: "Finish with ",
            href: "/flower/storing-flower",
            label: "storing flower",
            after: " for container, light, and temperature habits that protect aroma after you leave the counter. Genetics and About sit beside this silo for inheritance and publisher context.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Browse licensed retailers carrying Presidential flower formats" },
  },
  {
    path: "/genetics",
    kind: "hub",
    silo: "genetics",
    h1: "Cannabis Genetics Guide",
    title: "Cannabis Genetics & Lineage",
    description: "A clear guide to cannabis breeding, phenotypes, lineage, cultivar naming, landraces, and the reasons batches vary.",
    wordTarget: [950, 1200],
    intro: [
      "Cannabis genetics define a range of possible traits, while selection and cultivation shape the plant that expresses them. Breeding, phenotypes, lineage, names, and batch variation describe connected parts of that process. This section follows a cultivar from its parents through selection and into repeated commercial harvests.",
      "Presidential Cannabis publishes this genetics hub as publisher literacy for adults 21+: how strains are made, why siblings differ, how lineage and names relate, and why two batches of the same cultivar can still look and smell different. The brand name here is the company and publisher, not a single cultivar nickname. Product art and retailer paths stay on the official catalog; this page stays with inheritance, selection, and batch context.",
    ],
    sections: [
      {
        id: "breeding-and-selection",
        heading: "Crossing and Selection",
        paragraphs: [
          "How Strains Are Made begins with parent plants and a breeding goal. Seeds from the cross carry new combinations, and breeders observe the resulting population for aroma, structure, resin, timing, color, vigor, and consistency. Phenotypes explains the variation inside that population and the careful search for an individual plant whose expression deserves preservation.",
          "A selected phenotype can continue through cuttings, giving future gardens the same genetic individual. A seed line can also move through repeated selection toward greater predictability. Both pathways depend on observation across time, because breeders choose living plants and confirm those choices through complete growth and flower cycles.",
          "Publisher genetics literacy starts there. A cross sets a family range; selection names which plant inside that range becomes the keeper. When adults read a menu, the cultivar name usually points to that kept identity, while the grower and post-harvest steps still shape the jar in front of them. Learning the breeding path makes later lineage and batch pages easier to use without treating any name as a guarantee of identical flower.",
        ],
        contextualLinks: [
          {
            before: "Start with ",
            href: "/genetics/how-strains-are-made",
            label: "how cannabis strains are made",
            after: " for the full parent-cross, population, and selection cycle in plain language.",
          },
          {
            before: "Then read ",
            href: "/genetics/phenotypes",
            label: "phenotypes",
            after: " to see why one seed family produces different plants and how clones preserve a chosen individual.",
          },
        ],
      },
      {
        id: "family-and-name",
        heading: "Lineage and Naming",
        paragraphs: [
          "Lineage records the parentage behind a cultivar and gives buyers a map of its genetic family. It can suggest structural tendencies, aromatic families, and breeding intent. Strain Naming explains how breeders turn a selection into a recognizable identity, often drawing from parent names, aroma, appearance, place, or a creative theme.",
          "The family tree and the name work best as context. A name makes the cultivar easy to discuss; lineage shows where it came from. The current batch supplies the living expression through aroma, structure, dates, and handling. Reading all three levels together creates a richer picture than any single label can carry.",
          "Lineage literacy also protects against common mix-ups. Shared words in cultivar names do not always mean shared parents, and a famous family can still produce selections that diverge in timing, structure, or aroma. Names help conversation at a licensed counter; lineage helps expectation; neither replaces checking the batch you are actually buying. Presidential Cannabis keeps that distinction clear so plant education stays separate from product catalog pages.",
        ],
        contextualLinks: [
          {
            before: "Use ",
            href: "/genetics/lineage",
            label: "lineage",
            after: " when you want parent maps and what family history can and cannot predict. Strain naming and identity language continue in the child guide beside it.",
          },
        ],
      },
      {
        id: "landrace-foundations",
        heading: "Landrace Foundations and Modern Cultivars",
        paragraphs: [
          "Landrace and Modern follows regionally adapted cannabis populations into contemporary breeding. Generations of reproduction in a place created populations suited to local seasons, climate, and human selection. Breeders carried that diversity into new crosses, combining inherited traits and widening the range of modern flower.",
          "Many modern commercial cultivars show extensive ancestry from repeated hybridization. Their documented family trees can gather material from several regions and many generations of selection. The landrace concept remains valuable because it points to genetic foundations, while modern breeding shows how those foundations continue to be developed for current cultivation and market goals.",
          "That history sits beside plant and flower literacy on this publication. Genetics explains inheritance and selection; the plant and flower hubs explain anatomy, harvest, cure, and quality signals you can observe in finished flower. Adults shopping through licensed retailers benefit from both layers: where a cultivar came from, and how to read the batch that arrived.",
        ],
        contextualLinks: [
          {
            before: "For living-plant context beside this silo, open ",
            href: "/plant",
            label: "The Plant",
            after: ". Landrace foundations and modern cultivar history continue in the landrace child guide.",
          },
        ],
      },
      {
        id: "batch-expression",
        heading: "Why the Batch Still Matters",
        paragraphs: [
          "Why Two Batches Differ brings genetics back into the grow room. Light, temperature, nutrition, root space, harvest timing, drying, cure, packaging, and storage influence how the same genetic plant appears in finished flower. A clone preserves identity, while each cultivation run supplies a fresh environment and a fresh expression.",
          "That is useful news for a buyer. The cultivar name opens the conversation, lineage adds expectation, and batch information makes the choice current. The six genetics guides turn names into a readable system of parents, variation, selection, and environment—precisely the context needed to understand why cannabis remains diverse from seed to shelf.",
          "Use this hub as the map, then move into the child guides for depth. When you want company and publisher context rather than cultivar inheritance, the About page defines Presidential Cannabis as brand and publisher. When you want finished-flower quality language after genetics, The Flower organizes appearance, aroma, structure, moisture, and storage. Keep shopping decisions inside licensed retail channels where packaging and batch details can be verified in person.",
        ],
        contextualLinks: [
          {
            before: "Read ",
            href: "/genetics/why-two-batches-differ",
            label: "why two batches differ",
            after: " for environment and post-harvest reasons the same genetics can still diverge. Flower quality language and About Presidential Cannabis sit beside this silo when you need publisher or finished-flower context.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Find current Presidential genetics in licensed stores" },
  },
  {
    path: "/choosing",
    kind: "hub",
    silo: "choosing",
    h1: "Choosing Cannabis at a Dispensary",
    title: "Choose Cannabis at a Dispensary",
    description: "A practical route through dispensary menus, counter conversations, first visits, formats, and occasion-based choices.",
    wordTarget: [450, 600],
    intro: [
      "Choosing cannabis becomes straightforward when the decision follows a useful order: occasion, format, freshness, aromatic profile, batch information, and conversation. A menu supplies one part of the picture, and a knowledgeable budtender supplies the current store context. This section turns both into a calm, repeatable process.",
    ],
    sections: [
      {
        id: "read-the-menu",
        heading: "Begin with the Menu",
        paragraphs: [
          "Reading a Menu explains the columns that appear most often: cultivar, format, package size, potency, terpene information, price, and dates. It provides a practical reading sequence that starts with the product you want and then places percentages beside aroma and freshness. The result is a batch-level view rather than a search for one headline number.",
          "Menus vary in detail, so the core skill is recognizing what each field contributes. Format establishes the purchase. Dates establish time. Potency measures a defined part of the sample. A terpene panel adds aromatic composition. Name and lineage supply family context. These details become especially useful when read together.",
        ],
      },
      {
        id: "have-the-conversation",
        heading: "Use the Counter Conversation",
        paragraphs: [
          "What to Ask moves from printed information to a person. Questions about harvest date, cure, dominant aroma, structure, batch consistency, and newly arrived inventory invite practical answers. A budtender can compare the choices available that day and connect menu language to the flower behind the package.",
          "Clear preferences make the exchange productive. Describe an aroma family, session size, sharing plan, preparation level, or format. This gives the budtender concrete criteria and gives you a simple way to compare the reply with the menu. The conversation then becomes a focused collaboration around the occasion.",
        ],
      },
      {
        id: "first-visit",
        heading: "Make the First Visit Easy",
        paragraphs: [
          "First Time walks through the visit from identification and entry to the menu, counter, payment, and exit. It explains the pace of the interaction and shows how a newcomer can begin with one clear preference. Familiarity with the sequence leaves more attention available for the flower and the conversation.",
          "A first purchase can stay simple: choose a familiar format, select a manageable package, ask about the current batch, and store the product well. Each later visit adds comparison. Over time, personal notes about aroma, structure, freshness, and occasion create a more useful guide than memory alone.",
        ],
      },
      {
        id: "fit-the-occasion",
        heading: "Match Format to the Moment",
        paragraphs: [
          "Flower vs Infused describes the shopper-level distinction between raw flower and flower with concentrate and kief added. Matching Format to the Occasion then weighs session length, sharing, preparation, portability, and package size. Together they place format inside a real plan rather than treating it as an abstract category.",
          "The five guides finish with a compact method: name the occasion, choose the format, read the current batch, ask one or two specific questions, and confirm the practical details. This method works for a first visit and remains useful for an experienced buyer because it stays grounded in the actual inventory and moment.",
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Plan a visit with the Presidential retailer locator" },
  },
];
