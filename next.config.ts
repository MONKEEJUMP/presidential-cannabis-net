import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
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

