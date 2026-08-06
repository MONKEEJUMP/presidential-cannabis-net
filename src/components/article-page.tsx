import Link from "next/link";

import type { ContentImage, ContentSection, PageContent } from "@/content/types";
import { absoluteUrl, escapeJsonLd, imageUrl, siloLabels, SITE_NAME, SITE_URL } from "@/lib/site";

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

function ArticleSection({ section, image }: { section: ContentSection; image: ContentImage }) {
  return (
    <section className="article-section" id={section.id}>
      <div className="article-section__grid">
        <div className="article-section__copy">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>)}
          {section.bullets?.length ? <ul>{section.bullets.map((bullet, index) => <li key={`${section.id}-bullet-${index}`}>{bullet}</li>)}</ul> : null}
          <DataTable section={section} />
        </div>
        <ContentFigure image={image} />
      </div>
    </section>
  );
}

function BrandCallToAction() {
  return (
    <aside className="brand-cta" aria-labelledby="brand-cta-heading">
      <h2 id="brand-cta-heading">Find Presidential Near You</h2>
      <p>Explore the Presidential catalog and locate licensed retailers through the main Presidential site.</p>
      <a className="brand-cta__button" href="https://presidentialmoonrocks.com/find-us" rel="nofollow">Find a licensed retailer</a>
    </aside>
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
      <a className="editorial-link contextual-reference" href={page.externalLink.href}><span>{page.externalLink.label}</span></a>
    </aside>
  );
}

function StructuredData({ page, images }: { page: PageContent; images: ContentImage[] }) {
  const pageUrl = absoluteUrl(page.path);
  const imageObjects = images.map((image) => ({
    "@type": "ImageObject",
    contentUrl: imageUrl(image),
    width: image.width,
    height: image.height,
    description: image.alt,
  }));
  const graph: Record<string, unknown>[] = [...imageObjects];

  if (page.kind === "pillar") {
    graph.unshift({
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Presidential",
      alternateName: SITE_NAME,
      foundingDate: "2012",
      foundingLocation: { "@type": "Place", name: "Los Angeles, California" },
      description: "Presidential publishes an authoritative reference to the cannabis plant, flower, genetics, and choosing.",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: imageUrl(), width: 512, height: 512 },
      // No verified social profile URLs were supplied; never invent sameAs values.
      sameAs: [],
    });
  }

  if (page.kind === "article") {
    graph.unshift({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: pageUrl,
      image: images.map((image) => imageUrl(image)),
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: imageUrl() },
      },
    });
  }

  if (!graph.length) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJsonLd({ "@context": "https://schema.org", "@graph": graph }) }} />;
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
            <div className="article-lead__copy">{page.intro.map((paragraph, index) => <p key={`intro-${index}`}>{paragraph}</p>)}</div>
            <ContentFigure image={leadImage} priority />
          </section>
          {page.kind === "pillar" || page.kind === "hub" ? <TableOfContents page={page} /> : null}
          <div className="article-body">
            {page.sections.map((section, index) => (
              <div key={section.id}>
                <ArticleSection image={images[index + 1]} section={section} />
                {index === 0 ? <BrandCallToAction /> : null}
              </div>
            ))}
          </div>
          <LinkDirectory page={page} />
        </article>
      </main>
      <StructuredData images={images} page={page} />
      <SiteFooter />
    </>
  );
}

