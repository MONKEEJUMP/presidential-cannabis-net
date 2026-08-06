import Image from "next/image";

import type { ContentImage } from "@/content/types";

function Ornament({ gradientId, edge }: { gradientId: string; edge: "top" | "bottom" }) {
  return (
    <svg
      aria-hidden="true"
      className={`content-frame__ornament content-frame__ornament--${edge}`}
      focusable="false"
      viewBox="0 0 200 20"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F4E3A1" />
          <stop offset="0.52" stopColor="#D4B96A" />
          <stop offset="1" stopColor="#8F6B24" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <path d="M100 4 106 10 100 16 94 10Z" />
        <path d="M58 6 62 10 58 14 54 10Z" />
        <path d="M142 6 146 10 142 14 138 10Z" />
        <path d="M17 7 20 10 17 13 14 10Z" />
        <path d="M7 7 10 10 7 13 4 10Z" />
        <path d="M183 7 186 10 183 13 180 10Z" />
        <path d="M193 7 196 10 193 13 190 10Z" />
      </g>
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.5" vectorEffect="non-scaling-stroke">
        <path d="M91 10 76 6.5 63 10 76 13.5Z" />
        <path d="M109 10 124 6.5 137 10 124 13.5Z" />
        <path d="M51 10 36 7 21 10 36 13Z" />
        <path d="M149 10 164 7 179 10 164 13Z" />
      </g>
    </svg>
  );
}

export function ContentFigure({ image, priority = false }: { image: ContentImage; priority?: boolean }) {
  const idBase = image.src.replace(/[^a-zA-Z0-9]/g, "-");
  const artwork = (
    <Image
      className="content-figure__image"
      src={image.src}
      width={image.width}
      height={image.height}
      sizes="(max-width: 767px) 92vw, (max-width: 1199px) 42vw, 480px"
      alt={image.alt}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );

  return (
    <figure className="content-figure">
      <div className="content-figure__media">
        {image.productHref ? <a className="content-figure__link" href={image.productHref}>{artwork}</a> : artwork}
        <svg
          aria-hidden="true"
          className="content-frame__rule"
          focusable="false"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id={`${idBase}-rule`} x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#F4E3A1" />
              <stop offset="0.52" stopColor="#D4B96A" />
              <stop offset="1" stopColor="#8F6B24" />
            </linearGradient>
          </defs>
          <g
            fill="none"
            stroke={`url(#${idBase}-rule)`}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1.5"
          >
            <path
              className="content-frame__desktop"
              d="M32 0H0V100H32M68 0H100V100H68"
              vectorEffect="non-scaling-stroke"
            />
            <path
              className="content-frame__mobile"
              d="M0 0H100V100H0Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
        <Ornament edge="top" gradientId={`${idBase}-top`} />
        <Ornament edge="bottom" gradientId={`${idBase}-bottom`} />
      </div>
    </figure>
  );
}
