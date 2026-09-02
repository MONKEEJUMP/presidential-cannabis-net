import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">Presidential Cannabis</p>
          <p className="site-footer__statement">The official Presidential Cannabis plant guide to flower, genetics, cultivation, and choosing well.</p>
          <div className="site-footer__official-links">
            <a href="https://presidentialmoonrocks.com">Official product catalog</a>
            <a href="https://presidentialmoonrocks.com/find-us">Find licensed retailers</a>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/plant">The plant</Link>
          <Link href="/flower">The flower</Link>
          <Link href="/genetics">Genetics</Link>
          <Link href="/choosing">Choosing</Link>
          <Link href="/about">About Presidential Cannabis</Link>
        </nav>
        <p className="site-footer__legal">For adults of legal age. Follow local laws and purchase only through licensed retailers.</p>
      </div>
    </footer>
  );
}
