import Link from "next/link";
import type { Graph, Thing } from "schema-dts";

import type { ContentImage, ContentSection, PageContent } from "@/content/types";
import { editorialLinks } from "@/content/editorial-links";
import { pageEntities } from "@/content/entity-schema";
import { paragraphParts } from "@/lib/editorial-links";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  escapeJsonLd,
  imageUrl,
  siloLabels,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

import { ContentFigure } from "./content-figure";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

function Breadcrumbs({ page }: { page: PageContent }) {
  const hubPath = page.silo ? `/${page.silo}` : undefined;
  const hubLabel = page.silo ? siloLabels[page.silo] : undefined;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {page.kind === "article" && hubPath && hubLabel ? (
        <><span aria-hidden="true">/</span><Link href={hubPath}>{hubLabel}</Link></>
      ) : null}
      <span aria-hidden="true">/</span>
      <span aria-current="page">{page.h1}</span>
    </nav>
  );
}

function TableOfContents({ page }: { page: PageContent }) {
  const entries = page.kind === "hub" && page.childLinks?.length
    ? page.childLinks.map((link) => ({ key: link.href, label: link.label, href: link.href }))
    : page.sections.map((section) => ({ key: section.id, label: section.heading, href: `#${section.id}` }));
  const rows = Math.max(1, Math.ceil(entries.length / 2));
  return (
    <nav className={`table-of-contents table-of-contents--rows-${rows}`} aria-labelledby="contents-heading">
      <p className="table-of-contents__label" id="contents-heading">CONTENTS</p>
      <ol>
        {entries.map((entry, index) => (
          <li className={index === rows - 1 ? "table-of-contents__column-end" : undefined} key={entry.key}>
            <Link href={entry.href}>{entry.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function DataTable({ section }: { section: ContentSection }) {
  if (!section.table) return null;
  return (
    <div className="table-scroll" role="region" aria-label={section.table.label} tabIndex={0}>
      <table>
        <caption>{section.table.label}</caption>
        <thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>
          {section.table.rows.map((row, rowIndex) => (
            <tr key={`${section.id}-${rowIndex}`}>
              {row.map((cell, cellIndex) => <td key={`${section.id}-${rowIndex}-${cellIndex}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EditorialParagraph({ text, pagePath, sectionId, paragraphIndex }: { text: string; pagePath: string; sectionId: string | null; paragraphIndex: number }) {
  const links = editorialLinks.filter(link => link.sourcePath === pagePath && link.sectionId === sectionId && link.paragraphIndex === paragraphIndex);
  return <p>{paragraphParts(text, links).map((part, index) => part.href
    ? <Link href={part.href} key={index}>{part.text}</Link>
    : part.text)}</p>;
}

function LeadBlocks({ page }: { page: PageContent }) {
  if (!page.leadBlocks?.length) return null;
  return page.leadBlocks.map((block) => (
    <div key={block.id}>
      <h2 id={block.id}>{block.heading}</h2>
      {block.paragraphs.map((paragraph, index) => (
        <EditorialParagraph key={`${block.id}-paragraph-${index}`} text={paragraph} pagePath={page.path} sectionId={block.id} paragraphIndex={index} />
      ))}
      {block.subsections?.map((subsection) => (
        <div key={subsection.id}>
          <h3 id={subsection.id}>{subsection.heading}</h3>
          {subsection.paragraphs.map((paragraph, index) => (
            <EditorialParagraph key={`${subsection.id}-paragraph-${index}`} text={paragraph} pagePath={page.path} sectionId={subsection.id} paragraphIndex={index} />
          ))}
        </div>
      ))}
    </div>
  ));
}

function ArticleSection({ section, image, pagePath }: { section: ContentSection; image: ContentImage; pagePath: string }) {
  const sectionLinks = section.links ?? [];
  return (
    <section className="article-section" id={section.id}>
      <div className="article-section__grid">
        <div className="article-section__copy">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => <EditorialParagraph key={`${section.id}-paragraph-${index}`} text={paragraph} pagePath={pagePath} sectionId={section.id} paragraphIndex={index} />)}
          {section.contextualLinks?.map((link, index) => (
            <p key={`${section.id}-contextual-link-${index}`}>
              {link.before}<Link href={link.href}>{link.label}</Link>{link.after}
            </p>
          ))}
          {section.bullets?.length ? <ul>{section.bullets.map((bullet, index) => <li key={`${section.id}-bullet-${index}`}>{bullet}</li>)}</ul> : null}
          <DataTable section={section} />
          {sectionLinks.length ? (
            <div className="article-section__links">
              {sectionLinks.map((link) => link.href.startsWith("/") ? (
                <Link href={link.href} key={link.href}>{link.label}</Link>
              ) : (
                <a href={link.href} key={link.href}>{link.label}</a>
              ))}
            </div>
          ) : null}
        </div>
        <ContentFigure image={image} />
      </div>
    </section>
  );
}

function OfficialBrandEntityBlock({ page }: { page: PageContent }) {
  if (page.kind !== "pillar") return null;
  return (
    <aside className="official-entity" aria-labelledby="official-entity-heading">
      <div>
        <p className="eyebrow">Official brand entity</p>
        <h2 id="official-entity-heading">The brand, the guide, and the licensed retail path</h2>
        <p>
          Presidential is the Los Angeles company and publisher. This site holds its company definition and plant education;
          current product and availability details stay with the package and the licensed retailer.
        </p>
      </div>
      <nav className="official-entity__links" aria-label="Official Presidential destinations">
        <Link href="/about">About the brand and publisher</Link>
      </nav>
    </aside>
  );
}

function FrequentlyAskedQuestions({ page }: { page: PageContent }) {
  if (!page.faq?.length) return null;
  return (
    <section className="brand-faq" aria-labelledby="brand-faq-heading">
      <p className="eyebrow">Direct answers</p>
      <h2 id="brand-faq-heading">Questions about the brand</h2>
      <dl>
        {page.faq.map((item) => (
          <div className="brand-faq__item" key={item.question}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function LinkDirectory({ page }: { page: PageContent }) {
  const childLinks = page.childLinks ?? [];
  const relatedLinks = page.relatedLinks ?? [];
  return (
    <aside className="link-directory" aria-label="Continue reading">
      {childLinks.length ? (
        <section>
          <p className="eyebrow">Explore this section</p>
          <div className="link-directory__list">
            {childLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>{link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
      {relatedLinks.length ? (
        <section>
          <p className="eyebrow">Read next</p>
          <div className="link-directory__list link-directory__list--compact">
            {relatedLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>{link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </aside>
  );
}

function StructuredData({ page, images }: { page: PageContent; images: ContentImage[] }) {
  const pageUrl = absoluteUrl(page.path);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${absoluteUrl("/")}#website`;
  const webpageId = `${pageUrl}#webpage`;
  const imageObjects: Thing[] = images.map((image) => ({
    "@type": "ImageObject",
    "@id": `${imageUrl(image)}#image`,
    contentUrl: imageUrl(image),
    width: image.width.toString(),
    height: image.height.toString(),
    description: image.alt,
  }));
  const graph: Thing[] = [...imageObjects];

  const webpage: Thing = {
    "@type": page.kind === "about" ? "AboutPage" : "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: page.title,
    description: page.description,
    isPartOf: { "@id": websiteId },
    publisher: { "@id": organizationId },
    primaryImageOfPage: images[0] ? { "@id": `${imageUrl(images[0])}#image` } : undefined,
    ...(page.kind === "pillar" || page.kind === "about" ? { about: { "@id": organizationId } } : {}),
    ...(pageEntities[page.path]?.about?.length ? { about: pageEntities[page.path].about } : {}),
    ...(pageEntities[page.path]?.mentions?.length ? { mentions: pageEntities[page.path].mentions } : {}),
  };
  graph.unshift(webpage);

  if (page.kind === "pillar") {
    const organization: Thing = {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: ["Presidential"],
      foundingDate: "2012",
      foundingLocation: { "@type": "Place", name: "Los Angeles, California" },
      founder: [
        { "@type": "Person", name: "Everett Smith" },
        { "@type": "Person", name: "John Zapp" },
      ],
      description: "The Los Angeles cannabis brand behind Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis sold through licensed retailers.",
      disambiguatingDescription: "Presidential Cannabis is the Los Angeles cannabis brand founded in 2012, not an individual cannabis strain such as Presidential Kush.",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(DEFAULT_OG_IMAGE),
        width: "512",
        height: "512",
      },
      sameAs: [
        "https://www.instagram.com/presidentialofficial_/",
        "https://www.instagram.com/presidential_medss/",
        "https://www.facebook.com/p/Presidential-RX-100069511874496/",
        "https://www.linkedin.com/in/everett-smith-presidential/",
      ],
      knowsAbout: ["Cannabis flower", "Cannabis genetics", "Cultivation", "Moon Rocks", "Infused pre-rolls"],
    };
    const website: Thing = {
      "@type": "WebSite",
      "@id": websiteId,
      url: absoluteUrl("/"),
      name: SITE_NAME,
      alternateName: "Official Presidential Cannabis",
      description: page.description,
      publisher: { "@id": organizationId },
    };
    graph.unshift(organization, website);

    if (page.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      });
    }
  }

  if (page.kind === "article") {
    graph.push({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: { "@id": webpageId },
      image: images.map((image) => imageUrl(image)),
      publisher: { "@id": organizationId },
    });
  }

  if (page.path !== "/") {
    const breadcrumbItems: Thing[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: absoluteUrl("/"),
      },
    ];
    if (page.kind === "article" && page.silo) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: siloLabels[page.silo],
        item: absoluteUrl(`/${page.silo}`),
      });
    }
    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: page.h1,
      item: pageUrl,
    });
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    });
  }

  const structuredData: Graph = { "@context": "https://schema.org", "@graph": graph };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJsonLd(structuredData) }} />;
}

export function ArticlePage({ page, images }: { page: PageContent; images: ContentImage[] }) {
  const leadImage = images[0];
  if (!leadImage || images.length !== page.sections.length + 1) {
    throw new Error(`Image assignment mismatch for ${page.path}`);
  }
  return (
    <>
      <SiteHeader currentPath={page.path} />
      <main id="main-content">
        <article className={`publication publication--${page.kind}`}>
          <header className="article-hero">
            <Breadcrumbs page={page} />
            {page.kind === "pillar" ? <p className="article-hero__eyebrow">THE OFFICIAL</p> : null}
            <h1>{page.h1}</h1>
            <p className="article-hero__dek">{page.description}</p>
          </header>
          <div className="gold-seam" aria-hidden="true" />
          <section className="article-lead">
            <div className="article-lead__copy">{page.intro.map((paragraph, index) => <EditorialParagraph key={`intro-${index}`} text={paragraph} pagePath={page.path} sectionId={null} paragraphIndex={index} />)}<LeadBlocks page={page} /></div>
            <ContentFigure image={leadImage} priority />
          </section>
          {page.kind === "pillar" || page.kind === "hub" ? <TableOfContents page={page} /> : null}
          <OfficialBrandEntityBlock page={page} />
          <div className="article-body">
            {page.sections.map((section, index) => (
              <div key={section.id}>
                <ArticleSection image={images[index + 1]} section={section} pagePath={page.path} />
              </div>
            ))}
          </div>
          <FrequentlyAskedQuestions page={page} />
          <LinkDirectory page={page} />
        </article>
      </main>
      <StructuredData images={images} page={page} />
      <SiteFooter />
    </>
  );
}
