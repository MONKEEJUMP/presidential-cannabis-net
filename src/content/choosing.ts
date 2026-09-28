import type { PageContent } from "./types";

export const choosingArticles: PageContent[] = [
  {
    path: "/choosing/reading-a-menu",
    kind: "article",
    silo: "choosing",
    h1: "Reading a Menu",
    title: "How to Read a Dispensary Menu",
    description: "How to read dispensary menu fields including format, package size, cultivar, potency, terpene panel, harvest date, and price.",
    wordTarget: [1100, 1250],
    intro: [
      "Read a dispensary menu by starting with format and package size, then adding cultivar, batch date, aromatic information, potency, and price. Each column answers a different question. The best choice comes from the full row rather than the largest number, because freshness, aroma, structure, and the planned occasion give measurements their practical context.",
      "Menus range from concise printed lists to detailed digital catalogs. Some include harvest and package dates, terpene panels, lineage, cultivation source, or staff notes. The reading method stays consistent across formats: decide what kind of product fits the moment, identify the current batch, and use the available measurements to compare like with like.",
      "Presidential Cannabis publishes this menu-reading guide as adult 21+ retail literacy: how to read format, package size, cultivar name, THC and other percentage columns, batch dates, and price without treating any single field as a quality grade—and without medical claims. The habit ties to what-to-ask, first-time visits, matching format to occasion, strain naming, and why two batches differ at a licensed counter.",
    ],
    sections: [
      {
        id: "first-columns",
        heading: "Read Format, Size, and Batch First",
        paragraphs: [
          "Format tells you what the item is. Raw flower presents the cured flower itself. Infused flower formats add concentrate and kief. Pre-made formats package the flower for a particular kind of session. Beginning here keeps every later comparison relevant to the purchase you actually plan to make.",
          "Package size sets the quantity. Pair it with session plans, sharing, storage, and the pace at which the flower will stay fresh for you. Price then becomes easy to compare within the same format and size. A value judgment can include freshness, cultivation, flower quality, and presentation rather than quantity alone.",
          "Harvest and package dates place the row in time. The interval between them offers context for drying and curing, while the current date shows how long the product has been packaged. Dates become especially useful beside aroma and texture, because they help explain the flower's present condition.",
          "THC and other percentage columns measure a defined portion of a tested sample for that batch. Read them as one row detail beside format, size, and dates—not as a ranking of flower quality. Two packages with similar percentages can still differ in aroma, structure, cure, and freshness. Adults 21+ keep the number in context with the rest of the row and with what the licensed shelf shows that day.",
        ],
        contextualLinks: [
          {
            before: "Match package form to the plan with ",
            href: "/choosing/matching-format-to-occasion",
            label: "matching format to occasion",
            after: " when session length should narrow format before percentages.",
          },
          {
            before: "Walk a calm first visit in ",
            href: "/choosing/first-time",
            label: "first time",
            after: " if entry, pacing, and a simple plan still need sequence.",
          },
          {
            before: "Ground flower quality language in ",
            href: "/flower",
            label: "The Flower",
            after: " so aroma, density, and storage stay tied to observation beside the row.",
          },
        ],
      },
      {
        id: "name-and-measurements",
        heading: "Add Cultivar and Measurements",
        paragraphs: [
          "The cultivar name identifies the genetic selection or family claimed for the batch. Documented lineage names the parents and can suggest broad aromatic or structural tendencies. Traditional indica, sativa, and hybrid categories add commercial shorthand, while many modern cultivars show extensive admixture and the current batch carries the most immediate information.",
          "A potency percentage measures a defined portion of the tested sample. Read it as one batch characteristic rather than a quality grade. Flower with a moderate figure can present beautiful structure, vivid aroma, intact trichomes, and an excellent cure. A complete menu reading keeps cultivation and preservation beside the measurement.",
          "A terpene panel names aromatic compounds and often lists their proportions. Myrcene may contribute earth and musk, limonene bright citrus, caryophyllene pepper, pinene pine and rosemary, linalool flowers, and terpinolene fruit. The blend matters more than any isolated name, and direct aroma shows how the measured profile reaches the flower today.",
          "Strain names on a menu are commercial and genetic labels, not guarantees that every jar will smell or feel identical. Compare the printed name with batch identifiers and dates so you know which run is on the shelf. When two rows share a familiar title but show different harvest dates or producers, treat them as separate inventory—not interchangeable copies.",
          "At a licensed counter, ask which columns are live for the SKU in front of you: current THC or cannabinoid percentage on the label, harvest or package date, batch identifier, and whether a terpene panel belongs to this delivery. Request the numbers as printed—never as medical claims.",
        ],
        contextualLinks: [
          {
            before: "See how commercial titles map to genetics in ",
            href: "/genetics/strain-naming",
            label: "strain naming",
            after: " when a familiar name needs lineage context.",
          },
          {
            before: "Separate title from run with ",
            href: "/genetics/why-two-batches-differ",
            label: "why two batches differ",
            after: " when the same cultivar label arrives with new dates.",
          },
          {
            before: "Bring ready counter prompts from ",
            href: "/choosing/what-to-ask",
            label: "what to ask",
            after: " when freshness, aroma, and dates need shelf wording.",
          },
        ],
      },
      {
        id: "compare-rows",
        heading: "Turn the Menu into a Shortlist",
        paragraphs: [
          "Create a shortlist of two or three rows that fit the format, size, and price range. Compare dates next, then aroma or terpene character, cultivar family, and available flower notes. This sequence turns a large menu into a small set of meaningful choices without asking one field to carry the entire decision.",
          "Staff notes can add texture when they describe observable qualities such as citrus aroma, open flower structure, a recent delivery, or a balanced cure. A budtender can confirm which notes apply to the current batch and describe how the options differ on the shelf that day.",
          "Finish by asking to see or smell flower when store practice allows it. Match the direct observation with the printed row: dates, aroma, structure, trichomes, and moisture should tell one coherent story. Menu literacy is simply the ability to assign each field its proper role and bring the fields together around a real occasion.",
          "Bring the shortlist to the counter and ask which batch arrived most recently, which aroma is clearest today, and whether the package size still matches the occasion. Those questions turn columns into shelf reality without ranking products by a single percentage. Adults 21+ finish with a coherent story across format, batch, name, and plan—never a medical claim tied to a menu number.",
        ],
        contextualLinks: [
          {
            before: "Turn the shortlist into counter questions with ",
            href: "/choosing/what-to-ask",
            label: "what to ask",
            after: " when dates, aroma, and format need spoken confirmation.",
          },
          {
            before: "Keep the first purchase paced with ",
            href: "/choosing/first-time",
            label: "first time",
            after: " if the visit still needs identification and one clear ask.",
          },
          {
            before: "Return to ",
            href: "/choosing",
            label: "Choosing Cannabis at a Dispensary",
            after: " for the decision order that places preferences ahead of one menu number.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Open retailer menus through the Presidential locator" },
  },
  {
    path: "/choosing/what-to-ask",
    kind: "article",
    silo: "choosing",
    h1: "What to Ask",
    title: "What to Ask at a Dispensary Counter",
    description: "Practical questions for a dispensary budtender about the current flower, harvest date, cure, aroma, batch, storage, and format.",
    wordTarget: [1100, 1250],
    intro: [
      "Ask a dispensary budtender about the current batch: when it was harvested, how the cure feels, which aromas stand out, how the flower is structured, and which option best fits your occasion. These questions invite specific, observable answers. A good conversation connects the printed menu to the actual inventory on the shelf that day.",
      "Begin with one clear preference and one practical need. You might describe citrus or earthy aroma, a personal or shared session, raw flower or an infused format, a package size, or a freshness priority. Concrete preferences give the budtender a useful frame and make the comparison easier to follow.",
      "Presidential Cannabis publishes this counter-questions guide as adult 21+ retail literacy: what to ask about flower freshness, harvest and package dates, cure, storage, format, and factual label details at a licensed dispensary. The brand name here is the company and publisher. Product art and retailer paths stay on the official catalog; this page stays with practical questions, observable answers, and licensed-counter decisions.",
    ],
    sections: [
      {
        id: "batch-questions",
        heading: "Ask About the Current Batch",
        paragraphs: [
          "Start with timing: Which flower arrived most recently? What are the harvest and package dates? How long was the cure? These questions place the batch on a timeline and help explain its present aroma and texture. A recent delivery can also point you toward products the staff has handled and discussed often.",
          "Move to the senses: Which aromatic notes are strongest? Does the flower have a compact or open structure? How would you describe its moisture and cure? A knowledgeable budtender can translate staff observations into plain language and may identify a sample jar that lets you confirm the aroma directly.",
          "Add consistency: Is this a familiar batch from the same cultivator? How does it compare with the previous delivery? Has the store seen a stable aromatic profile across packages? These questions recognize that identical genetics can express differently from run to run and that current inventory deserves current description.",
          "Lab and label details belong in the same factual frame. Ask where the package lists harvest date, package date, batch identifier, and any printed cannabinoid percentages the store displays for that SKU. Request the information as it appears on the label or menu rather than as an interpretation of how the flower will feel. Clear, checkable numbers and dates keep the conversation useful without turning the counter into a promise about personal outcomes.",
          "Freshness questions can stay concrete when the shelf shows several options. Ask which jar or package was opened for staff aroma checks most recently, whether the batch has sat under bright light, and how the store stores opened sample containers. Those details help you weigh a defined nose against a quieter package that still carries a recent harvest date. Adults shopping through licensed retailers can then compare current inventory on timing, cure feel, and aroma rather than on a single number alone.",
        ],
        contextualLinks: [
          {
            before: "Return to ",
            href: "/choosing",
            label: "Choosing Cannabis at a Dispensary",
            after: " for the decision order that places clear preferences and current inventory ahead of chasing a single menu number.",
          },
          {
            before: "Read appearance and structure cues in ",
            href: "/flower",
            label: "The Flower",
            after: " when you want a shared vocabulary for aroma, density, moisture, and storage before you ask at the counter.",
          },
          {
            before: "Connect resin and label literacy with ",
            href: "/plant/cannabinoids-in-the-plant",
            label: "cannabinoids in the plant",
            after: " so printed percentages stay framed as plant-production context rather than as a substitute for batch dates and nose.",
          },
        ],
      },
      {
        id: "occasion-questions",
        heading: "Connect the Answer to the Occasion",
        paragraphs: [
          "Describe session length, sharing, preparation, and portability. Ask which package size or format fits those details. A personal, brief occasion points toward one kind of purchase; a planned shared occasion points toward another. The budtender can narrow the shelf by practical fit before comparing genetics or percentages.",
          "Share an aroma preference rather than asking for a promised experience. Earth, citrus, pepper, pine, floral, and fruit are useful starting families. Ask which current flower expresses that character most clearly and which has the freshest defined nose. This keeps the answer grounded in the product's observable qualities.",
          "Close with storage and use-by planning. Ask how the package seals, whether the flower benefits from transfer to a glass container, and what size matches your timeline. The complete counter conversation then covers current batch, sensory quality, occasion, and care—exactly the information that turns a menu selection into a confident purchase.",
          "Format questions sit beside freshness without replacing it. Ask whether raw flower, a prepared format, or a smaller unit better matches the occasion you already named, then confirm which current packages carry the harvest or package dates you prefer. The useful answer names both the form and a batch detail you can verify on the label. That pairing keeps convenience and agricultural evidence in one decision instead of treating them as competing goals.",
          "After checkout, the same checklist closes the loop. Confirm the seal, store according to label guidance, and jot one line about the date, aroma description, and format that matched the plan. Inheritance and phenotype context can sit beside this silo when you later want to understand why two runs of a named cultivar differ. Keep shopping decisions inside licensed retail channels where packaging and batch details can be verified in person.",
        ],
        contextualLinks: [
          {
            before: "Walk a calm first visit in ",
            href: "/choosing/first-time",
            label: "first time",
            after: " if entry, pacing, and a simple purchase plan still need a clear sequence before the counter questions begin.",
          },
          {
            before: "For parentage and batch variation beside this silo, open ",
            href: "/genetics",
            label: "Genetics",
            after: " when lineage and phenotype help explain why two deliveries of a familiar name can still smell and feel different.",
          },
          {
            before: "Study structure vocabulary in ",
            href: "/flower/density-and-structure",
            label: "density and structure",
            after: " so compact versus open flower descriptions at the counter map to what you can observe in the jar.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Choose a licensed counter with the store finder" },
  },
  {
    path: "/choosing/first-time",
    kind: "article",
    silo: "choosing",
    h1: "First Time",
    title: "A First Visit to a Dispensary",
    description: "What to bring to a licensed dispensary, how entry and the counter work, how to read the visit, and how to make a simple first choice.",
    wordTarget: [1100, 1250],
    intro: [
      "For a first dispensary visit, bring valid government-issued identification, know the store's accepted payment methods, and arrive with one simple idea of the occasion or format you want. Staff will verify entry, offer a menu, answer questions at the counter, complete the purchase, and provide the sealed product. The process is structured, calm, and designed to support informed adult customers.",
      "Checking the licensed retailer's website before the visit makes the experience even smoother. Confirm hours, identification requirements, payment options, parking or pickup details, and the current menu. Inventory moves, so treat the online list as a preview and let the in-store menu supply the final choices.",
      "Presidential Cannabis publishes this first-visit guide as adult 21+ retail literacy: identification check, menu reading, asking for help, a paced purchase, and the habit of reading labels and batch notes. No medical claims appear here. The job is a calm sequence first-time adults can follow without rushing the counter.",
    ],
    sections: [
      {
        id: "arrival-to-counter",
        heading: "From Arrival to the Counter",
        paragraphs: [
          "Entry usually begins at a reception point where staff check identification and guide customers into the sales area. Some stores invite browsing, while others organize the visit around a dedicated budtender. The menu may appear on screens, paper, tablets, or display cases. Take a moment to identify the main sections before comparing individual products.",
          "Tell the budtender that this is your first visit and describe the purchase in practical terms. Name the preferred format, package size, aromatic direction, and occasion. You can ask to compare two or three current options. Staff can explain which flower arrived recently, how batches differ, and what each package contains.",
          "When sample jars are available, observe structure, trichomes, color, and aroma. A simple description is enough: citrus and pine, compact and frosted, or earthy with an open structure. Pair that observation with dates and package information. This gives the first purchase a clear basis that you can remember later.",
          "Menu reading on a first visit works best as orientation, not as a race through every SKU. Locate major categories—raw flower, prepared formats, package sizes—then shortlist two or three items that match the occasion you named. Ask staff to translate a dense column or abbreviation. A paced pass keeps attention on freshness, aroma, and fit.",
          "Asking for help is expected and useful. Reception and budtenders verify entry, explain the floor, and narrow inventory to a manageable comparison. A clear sentence—first visit, preferred format, aromatic direction, package size, and budget—gives them a frame. From there, request a side-by-side of two batches, a recent arrival, or a format that matches the occasion.",
        ],
        contextualLinks: [
          {
            before: "Practice menu columns and category language in ",
            href: "/choosing/reading-a-menu",
            label: "reading a menu",
            after: " so screens and case labels feel familiar before jar comparisons.",
          },
          {
            before: "Bring ready counter prompts from ",
            href: "/choosing/what-to-ask",
            label: "what to ask",
            after: " when freshness, cure, aroma, and dates need specific counter wording.",
          },
          {
            before: "Build a shared look-and-smell vocabulary with ",
            href: "/flower/appearance",
            label: "appearance",
            after: " so structure and color cues map to the sample jar.",
          },
        ],
      },
      {
        id: "purchase-and-after",
        heading: "Complete the Purchase and Build Experience",
        paragraphs: [
          "At checkout, the store confirms the selected items, price, and required packaging. Use the payment method the retailer accepts and keep the sealed product stored according to local rules during travel. At home, raw flower belongs in a clean, sealed container kept cool, dark, and stable.",
          "Begin your own reference with the package label. Record the cultivar, producer, harvest or package date, format, and the aroma you notice when opening it. A brief note about structure and moisture gives the next visit a useful comparison. Personal records turn unfamiliar menu language into direct knowledge over time.",
          "A strong first visit stays intentionally simple: one licensed store, one manageable purchase, one or two good questions, and one clear storage routine. The next visit can build from what you observed. Familiarity grows naturally as menus, batch details, and flower quality become recognizable parts of the same process.",
          "Pacing protects the first purchase without turning the visit into a lecture. Choose one format and size that fit the occasion, confirm the label fields you care about, and ask one clarifying question rather than stacking every comparison. Adults 21+ can treat the store as licensed retail—ID, menu, counter help, sealed product—without medical framing. Leave with a clear bag, a readable label, and notes for the next trip.",
          "Label and batch literacy become a habit after the seal is checked. Before leaving, confirm product name, format, producer, harvest or package date, and batch identifier against what the budtender described. At home, copy those fields beside a short aroma or structure note. That record makes the next visit faster—ask for a fresher date, related aroma family, or different size without a blank restart.",
        ],
        contextualLinks: [
          {
            before: "Match package form to the occasion with ",
            href: "/choosing/matching-format-to-occasion",
            label: "matching format to occasion",
            after: " when session length and portability should narrow the shelf.",
          },
          {
            before: "Ground flower quality language in ",
            href: "/flower",
            label: "The Flower",
            after: " so aroma, density, and storage stay tied to observation.",
          },
          {
            before: "Return to ",
            href: "/choosing",
            label: "Choosing Cannabis at a Dispensary",
            after: " for the decision order that places preferences and inventory ahead of one menu number.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/find-us", label: "Plan your first licensed visit with Presidential" },
  },  {
    path: "/choosing/flower-vs-infused",
    kind: "article",
    silo: "choosing",
    h1: "Flower vs Infused",
    title: "Flower or Infused — How to Choose",
    description: "A shopper-level comparison of raw cannabis flower and infused flower formats by product character, label, occasion, portability, and purchase planning.",
    wordTarget: [1100, 1250],
    intro: [
      "Choose raw flower when you want the cured plant material itself to define the purchase, and choose an infused format when you want flower with concentrate and kief added. The two categories differ in product composition, potency range, presentation, price, and session planning. A clear occasion and careful label reading make the choice straightforward.",
      "Flower quality remains the foundation in both categories. Raw flower gives aroma, structure, trichomes, moisture, and cure direct visibility. An infused product combines flower with added cannabis components in a prepared format. In either case, freshness, batch information, licensed production, sound packaging, and appropriate storage support the purchase.",
      "Presidential Cannabis publishes this flower-versus-infused comparison as adult 21+ retail literacy: when raw flower and infused formats fit occasion and pace, how the choice ties to matching format to occasion, reading a menu, what to ask, and The Flower hub, and the habit of reading labels on both categories—never medical claims. The brand name here is the company and publisher.",
    ],
    sections: [
      {
        id: "purchase-differences",
        heading: "How the Purchases Differ",
        paragraphs: [
          "Raw flower is sold by weight and cultivar, usually with potency, producer, and date information. Its physical qualities can often be seen clearly through the package or sample jar. Buyers can compare bract structure, trichome coverage, trim, aroma, moisture, and cure, then choose how the flower fits their preferred preparation.",
          "Infused formats arrive as a more prepared product. The label identifies the format, package count or size, potency, batch, and ingredients or components required by the market. The purchase places greater weight on package information and producer consistency, while flower quality remains the agricultural base under the added elements.",
          "Price reflects different materials and preparation. Compare products within the same category and size, then consider the planned session. A raw-flower purchase offers flexibility and a direct relationship with the flower. An infused purchase offers a prepared composition with a different potency range and handling expectation.",
          "Composition is the practical split. Raw flower keeps selection and preparation flexible; an infused format organizes flower with added concentrate and kief into a defined unit. Neither category is a universal default. Adults 21+ choose by what the occasion needs—direct observation and personal prep, or clear portions and less setup—then compare within that category on the licensed shelf.",
          "Menu columns reinforce the same distinction. Format and package size come first, then cultivar or product description, dates, producer, and percentage fields. Read those numbers as batch details beside composition, not as a quality grade or a medical claim. Two rows with similar percentages can still differ sharply in aroma, structure, package count, and how ready the product is for the session you planned.",
        ],
        contextualLinks: [
          {
            before: "Narrow format by session plan with ",
            href: "/choosing/matching-format-to-occasion",
            label: "matching format to occasion",
            after: " when time, sharing, and preparation should decide category before percentages.",
          },
          {
            before: "Read format, size, dates, and percentages with ",
            href: "/choosing/reading-a-menu",
            label: "reading a menu",
            after: " so each column keeps its proper role beside composition.",
          },
          {
            before: "Ground flower quality language in ",
            href: "/flower",
            label: "The Flower",
            after: " when aroma, density, moisture, and cure need observation beside either package.",
          },
        ],
      },
      {
        id: "occasion-and-label",
        heading: "Match the Category to the Occasion",
        paragraphs: [
          "Start with session length, sharing, portability, and preparation. Raw flower fits occasions where the flower itself and personal preparation are central. A prepared infused format fits occasions where packaging, portability, and a ready composition are central. Package size helps align either choice with the number of people and the time available.",
          "Read the label in the same order for both: format, size, potency, cultivar or flower description, dates, producer, and storage guidance. On raw flower, add aroma, structure, and moisture. On infused products, add the package count and the clear product description supplied by the licensed producer.",
          "A budtender can compare current inventory at the shopper's level. Ask which raw flower has the freshest defined aroma, which infused format matches the intended session size, and how the package information differs. The answer should make the purchase easier to picture. Choose the category whose composition and practical fit match the moment you already have in mind.",
          "Pace belongs beside occasion. A short personal moment often favors a compact amount and simple handling; a longer shared plan can support raw-flower flexibility or a prepared format with clear portions. Write one line that names who is present, how long the moment lasts, and whether preparation is part of the experience. That line filters category and package size before the menu feels crowded.",
          "Build a habit of reading labels on every visit. Confirm format, size, dates, producer, and storage guidance on the unit in hand—not only on the board. When label and shelf agree, the category decision is easier to trust. When they diverge, ask which batch is current and how this package differs from the last of the same name. Keep the conversation agricultural for adults 21+, never medical.",
        ],
        contextualLinks: [
          {
            before: "The Presidential Cannabis ",
            href: "/",
            label: "guide",
            after: " connects this category decision to the plant, flower quality, genetics, and licensed-retail context.",
          },
          {
            before: "Carry the plan into counter wording with ",
            href: "/choosing/what-to-ask",
            label: "what to ask",
            after: " when freshness, package size, and category need spoken confirmation.",
          },
          {
            before: "Return to ",
            href: "/choosing",
            label: "Choosing Cannabis at a Dispensary",
            after: " for the decision order that places occasion and format ahead of chasing a single menu number.",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/moon-rocks/presidential-prerolls", label: "Explore the Presidential prepared flower collection" },
  },
  {
    path: "/choosing/matching-format-to-occasion",
    kind: "article",
    silo: "choosing",
    h1: "Matching Format",
    title: "Matching Format to the Occasion",
    description: "How to choose a cannabis format by session length, group size, preparation, portability, storage, package size, and setting.",
    wordTarget: [1100, 1250],
    intro: [
      "Match cannabis format to the occasion by considering session length, sharing, preparation, portability, and package size before comparing cultivars or percentages. A short personal moment, a planned shared session, and a portable outing each create different practical needs. Choosing the fit first turns a broad menu into a focused list.",
      "Format is the physical form in which the product reaches you. Raw flower offers flexibility and keeps the cured flower at the center. Prepared formats organize a specific amount and composition for convenience. Minis create another package and session scale. The useful choice is the one that aligns with the people, place, time, and storage plan.",
      "Presidential Cannabis publishes this matching-format guide as adult 21+ retail literacy: how session length, sharing, preparation, portability, and package size turn a broad menu into a focused list. The brand name here is the company and publisher. Product art and retailer paths stay on the official catalog; this page stays with occasion planning, format fit, and licensed-counter decisions.",
    ],
    sections: [
      {
        id: "time-and-sharing",
        heading: "Begin with Time and Group Size",
        paragraphs: [
          "Estimate the time available and the number of adults participating. A brief personal session calls for a compact amount and simple setup. A longer or shared occasion can support a larger format or multiple smaller pieces that let the group pace the moment. Package count and unit size make these comparisons visible on the menu.",
          "Sharing also changes the value of preparation. Raw flower gives the group flexibility in how much to prepare. A ready format reduces setup and creates a clearly defined unit. Minis offer smaller units that can suit shorter occasions or individual portions within a group plan.",
          "A good menu comparison stays within the chosen scale. Compare like sizes, note the total package count, and ask how current options differ in freshness and aromatic profile. This keeps price and potency in a practical frame rather than comparing products meant for different kinds of occasions.",
          "Occasion literacy starts before the menu feels overwhelming. Write one line that names who is present, how long the moment lasts, and whether preparation is part of the experience or simply a step before it. That line immediately filters package counts and unit sizes. Adults shopping through licensed retailers can then compare like with like—same scale, same sharing plan—rather than weighing a compact personal option against a large shared format as if they answered the same question.",
          "A paced first visit uses the same discipline. Arrive with the occasion written simply, skim format and size before chasing cultivar names, and ask one practical question about which current options fit that plan. Menu columns and counter conversation then support the choice instead of replacing it. Over a few visits, notes about what matched the time and group become a personal reference that makes the next decision faster.",
        ],
        contextualLinks: [
          {
            before: "Return to ",
            href: "/choosing",
            label: "Choosing Cannabis at a Dispensary",
            after: " for the decision order that places occasion and format ahead of chasing a single menu number.",
          },
          {
            before: "Use ",
            href: "/choosing/reading-a-menu",
            label: "reading a menu",
            after: " when package size, format, and dates need a column-by-column pass inside the scale you already chose.",
          },
          {
            before: "Walk the visit in ",
            href: "/choosing/first-time",
            label: "first time",
            after: " if entry, pacing, and a simple first purchase plan still need a calm sequence.",
          },
        ],
      },
      {
        id: "preparation-portability-storage",
        heading: "Add Preparation, Portability, and Storage",
        paragraphs: [
          "Preparation can be part of the occasion or simply a step before it. Choose raw flower when selecting and preparing the flower is welcome. Choose a prepared format when compact packaging and a ready composition suit the plan. The decision is about fit and attention, with flower quality remaining the base.",
          "Portability favors secure, clearly labeled packaging and a size suited to the outing. Keep every product sealed and stored according to local rules during travel. At the destination, protect it from heat and direct light. These practical details preserve aroma, moisture, and package condition.",
          "Finally, plan for what remains. Raw flower holds best in a clean, sealed container in a cool, dark place. Prepared products stay in their original protective packaging according to label guidance. Choose an amount that matches the near-term occasion and storage timeline. The complete method is concise: people, time, preparation, portability, package, and care.",
          "Composition belongs in the same frame as convenience. Raw flower keeps selection and preparation flexible; an infused prepared format organizes amount and composition for a ready session. Neither is a universal default. When the occasion asks for personal preparation and direct observation of the flower, raw flower usually fits. When the occasion asks for clear portions, compact packaging, and less setup, a prepared format usually fits. Package size then aligns either choice with the near-term timeline and storage plan.",
          "After the purchase, the same practical checklist closes the loop. Confirm the seal, store according to label guidance, and note whether preparation, size, and portability matched the plan. Plant anatomy and genetics sit beside this silo when you want living-plant or inheritance context after the retail decision. Company and publisher context lives on About Presidential Cannabis when you need brand definition rather than an occasion checklist. Keep shopping decisions inside licensed retail channels where packaging and batch details can be verified in person.",
        ],
        contextualLinks: [
          {
            before: "Compare composition in ",
            href: "/choosing/flower-vs-infused",
            label: "flower vs infused",
            after: " when the choice is raw flower versus a prepared infused format for the same occasion.",
          },
          {
            before: "Ask current-inventory questions with ",
            href: "/choosing/what-to-ask",
            label: "what to ask",
            after: " so the budtender can match freshness and package details to the plan you already named.",
          },
          {
            before: "For publisher and brand definition beside this silo, open ",
            href: "/about",
            label: "About Presidential Cannabis",
            after: ".",
          },
        ],
      },
    ],
    externalLink: { href: "https://presidentialmoonrocks.com/moon-rocks/presidential-blunts", label: "See Presidential formats sized for different occasions" },
  },
];
