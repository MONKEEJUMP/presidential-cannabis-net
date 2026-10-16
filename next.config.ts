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
  experimental: {
    inlineCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Report-Only first (Sitebulb 1016): GA4 + InLinks hosts; Next inline scripts need 'unsafe-inline' without a nonce proxy.
          { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' https://jscloud.net https://www.googletagmanager.com https://*.google-analytics.com; style-src 'self' 'unsafe-inline' https://jscloud.net; connect-src 'self' https://jscloud.net https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com; font-src 'self'; img-src 'self' data: https://jscloud.net https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com; object-src 'none'; frame-ancestors 'self'; form-action 'self'" },
        ],
      },
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

