import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found" id="main-content">
        <p className="eyebrow">Presidential Cannabis</p>
        <h1>Page not found</h1>
        <p>The requested page is outside this publication. Return to the plant guide and continue from the complete contents.</p>
        <Link className="button-link" href="/">Read the guide</Link>
      </main>
      <SiteFooter />
    </>
  );
}

