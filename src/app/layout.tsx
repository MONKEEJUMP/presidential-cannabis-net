import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Source_Serif_4 } from "next/font/google";

import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/clash-display-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/clash-display-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/clash-display-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/clash-display-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-clash-display",
  fallback: ["Arial", "sans-serif"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
  variable: "--font-source-serif",
  fallback: ["Georgia", "serif"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070908",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: "The official guide to the cannabis plant, flower, genetics, cultivation, and choosing.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 512, height: 512, alt: "Presidential crest" }],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}

