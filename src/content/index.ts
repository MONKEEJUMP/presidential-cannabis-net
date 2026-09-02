import { aboutPage } from "./about";
import { choosingArticles } from "./choosing";
import { flowerArticles } from "./flower";
import { geneticsArticles } from "./genetics";
import { hubPages } from "./hubs";
import { pillarPage } from "./pillar";
import { plantArticles } from "./plant";
import { contentExpansions } from "./expansions";
import { finalCoverageExpansions } from "./expansions-final";

import type { PageContent, PageLink, Silo } from "./types";

const articleGroups: Record<Silo, PageContent[]> = {
  plant: plantArticles,
  flower: flowerArticles,
  genetics: geneticsArticles,
  choosing: choosingArticles,
};

const basePages: PageContent[] = [
  pillarPage,
  hubPages[0],
  ...plantArticles,
  hubPages[1],
  ...flowerArticles,
  hubPages[2],
  ...geneticsArticles,
  hubPages[3],
  ...choosingArticles,
  aboutPage,
];

const rawPages: PageContent[] = basePages.map((page) => {
  const pageExpansions = [
    ...(contentExpansions[page.path] ?? []),
    ...(finalCoverageExpansions[page.path] ?? []),
  ];
  if (!pageExpansions?.length) return page;
  return {
    ...page,
    sections: page.sections.map((section) => {
      const additions = pageExpansions
        .filter((expansion) => expansion.sectionId === section.id)
        .flatMap((expansion) => expansion.paragraphs);
      return additions.length ? { ...section, paragraphs: [...section.paragraphs, ...additions] } : section;
    }),
  };
});

function asLink(page: PageContent): PageLink {
  return { href: page.path, label: page.h1, description: page.description };
}

function sidewaysLinks(page: PageContent): PageLink[] {
  if (!page.silo) return [];
  const siblings = articleGroups[page.silo];
  const index = siblings.findIndex((candidate) => candidate.path === page.path);
  const candidates = [
    siblings[(index + 1) % siblings.length],
    siblings[(index + 2) % siblings.length],
    siblings[(index + siblings.length - 1) % siblings.length],
  ];
  return candidates.map(asLink);
}

export const pages: PageContent[] = rawPages.map((page) => {
  if (page.kind === "pillar") {
    return { ...page, childLinks: hubPages.map(asLink) };
  }
  if (page.kind === "hub" && page.silo) {
    return {
      ...page,
      childLinks: articleGroups[page.silo].map(asLink),
      relatedLinks: [{ href: "/", label: "Presidential Cannabis", description: "Return to the complete plant guide." }],
    };
  }
  if (page.kind === "article" && page.silo) {
    const hub = hubPages.find((candidate) => candidate.silo === page.silo);
    if (!hub) throw new Error(`Missing hub for ${page.path}`);
    return {
      ...page,
      relatedLinks: [
        { href: hub.path, label: `${hub.h1} guide`, description: `Return to the ${hub.h1.toLowerCase()} contents.` },
        { href: "/", label: "Presidential Cannabis", description: "Read the complete reference to the plant and flower." },
        ...sidewaysLinks(page),
      ],
    };
  }
  return { ...page, relatedLinks: page.relatedLinks ?? [{ href: "/", label: "Read Presidential Cannabis" }] };
});

export const pagesByPath = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string): PageContent | undefined {
  return pagesByPath.get(path);
}
