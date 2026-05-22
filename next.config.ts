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
};

export default nextConfig;
