import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/article-page";
import { pages } from "@/content";
import { pageImages } from "@/content/assets";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  findPage,
  imageUrl,
  imagesForPage,
  pathFromSegments,
  SITE_NAME,
} from "@/lib/site";

type PublicationPageProps = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string[] }> {
  return pages.map((page) => ({
    slug: page.path === "/" ? [] : page.path.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({ params }: PublicationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSegments(slug);
  const page = findPage(pages, path);
  if (!page) return { title: `Page Not Found — ${SITE_NAME}`, robots: { index: false, follow: false } };

  const images = imagesForPage(pageImages, path);
  const socialImage = images[0];
  const canonical = absoluteUrl(path);
  const socialImageMetadata = socialImage
    ? { url: imageUrl(socialImage), width: socialImage.width, height: socialImage.height, alt: socialImage.alt }
    : { url: absoluteUrl(DEFAULT_OG_IMAGE), width: 512, height: 512, alt: "Presidential crest" };

  return {
    ...(path === "/" ? { metadataBase: null } : {}),
    title: page.title,
    description: page.description,
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: page.kind === "article" ? "article" : "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: SITE_NAME,
      images: [socialImageMetadata],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialImageMetadata.url],
    },
  };
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const { slug } = await params;
  const path = pathFromSegments(slug);
  const page = findPage(pages, path);
  if (!page) notFound();
  return <ArticlePage images={imagesForPage(pageImages, path)} page={page} />;
}

