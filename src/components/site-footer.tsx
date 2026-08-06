import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">Presidential Cannabis</p>
          <p className="site-footer__statement">A focused reference to the plant, the flower, its genetics, and how to choose it.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/plant">The plant</Link>
          <Link href="/flower">The flower</Link>
          <Link href="/genetics">Genetics</Link>
          <Link href="/choosing">Choosing</Link>
          <Link href="/about">About this site</Link>
        </nav>
        <p className="site-footer__legal">For adults of legal age. Follow local laws and purchase only through licensed retailers.</p>
      </div>
    </footer>
  );
}

