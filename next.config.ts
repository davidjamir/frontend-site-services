import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 năm
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Các path chứa await header(), await cookies kể cả tầng sâu hơn bên trong nó, thì sẽ là dynamic, không được cache cdn cho trang tĩnh, nó tự viết lại là no-cache
  async headers() {
    return [
      {
        source: "/icon",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=864000, s-maxage=8640000, stale-while-revalidate=12000, stale-if-error=2592000",
          },
        ],
      },
      {
        source: "/sitemap-category/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=1200, stale-if-error=864000",
          },
        ],
      },
      {
        source: "/sitemap-page/sitemap.xml",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=36000, s-maxage=8640000, stale-while-revalidate=1200, stale-if-error=864000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
