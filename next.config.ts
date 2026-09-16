import type { NextConfig } from "next";

const immutableAssetHeaders = [
  { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
];

const revalidatingImageHeaders = [
  { key: "Cache-Control", value: "public, max-age=2592000, must-revalidate" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      { source: "/fonts/:path*", headers: immutableAssetHeaders },
      { source: "/images/:path*", headers: revalidatingImageHeaders },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.presidentialcannabis.net" }],
        destination: "https://presidentialcannabis.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

