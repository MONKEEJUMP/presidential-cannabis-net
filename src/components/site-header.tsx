import Image from "next/image";
import Link from "next/link";

import { primaryNavigation } from "@/lib/site";

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to the article</a>
      <div className="site-header__inner">
        <div className="brand-lockup">
          <Link className="brand-lockup__home" href="/" aria-label="Presidential Cannabis home">
            <span className="brand-lockup__real" aria-hidden="true">
              THE REAL
            </span>
            <Image
              className="brand-crest"
              src="/images/presidential-crest.webp"
              width={512}
              height={512}
              sizes="(max-width: 640px) 60px, 82px"
              priority
              alt="Presidential crest"
            />
          </Link>
          <span className="brand-lockup__text">
            <span className="brand-lockup__name">Presidential Cannabis</span>
            <a aria-label="The official Presidential site" className="brand-lockup__tagline" href="https://presidentialmoonrocks.com">The Official Presidential Site</a>
          </span>
        </div>
        <a className="header-official-link" href="https://presidentialmoonrocks.com" rel="nofollow">
          <span className="header-official-link__label header-official-link__label--full">Official Presidential</span>
          <span className="header-official-link__label header-official-link__label--short">Presidential</span>
          <svg aria-hidden="true" viewBox="0 0 14 14">
            <path d="M5 3h6v6M11 3 3 11" />
          </svg>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => {
            const isCurrent = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
            return (
              <Link href={item.href} key={item.href} aria-current={isCurrent ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
