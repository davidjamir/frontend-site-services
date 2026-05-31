import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  async redirects() {
    return [
      {
        source: "/rss",
        destination: "/feed",
        permanent: true,
      },

      {
        source: "/rss.xml",
        destination: "/feed",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/page/contact-us",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000, stale-if-error=2592000",
          },
        ],
      },
      {
        source: "/page/disclaimer",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000, stale-if-error=2592000",
          },
        ],
      },
      {
        source: "/page/privacy-policy",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000, stale-if-error=2592000",
          },
        ],
      },
      {
        source: "/page/term-and-conditions",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=86400, s-maxage=2592000, stale-while-revalidate=2592000, stale-if-error=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
