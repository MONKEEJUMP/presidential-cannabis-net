export type PageKind = "pillar" | "hub" | "article" | "about";

export type Silo = "plant" | "flower" | "genetics" | "choosing";

export type DataTable = {
  label: string;
  headers: string[];
  rows: string[][];
};

export type ContextualLink = {
  before: string;
  href: string;
  label: string;
  after: string;
};

export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  contextualLinks?: ContextualLink[];
  bullets?: string[];
  table?: DataTable;
  links?: PageLink[];
};

export type PageLink = {
  href: string;
  label: string;
  description?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type LeadSubsection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type LeadBlock = {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: LeadSubsection[];
};

export type PageContent = {
  path: string;
  kind: PageKind;
  silo?: Silo;
  h1: string;
  title: string;
  description: string;
  wordTarget: [number, number];
  intro: string[];
  leadBlocks?: LeadBlock[];
  sections: ContentSection[];
  childLinks?: PageLink[];
  relatedLinks?: PageLink[];
  faq?: FAQItem[];
  externalLink: PageLink;
};

export type ContentImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  productHref?: string;
};
