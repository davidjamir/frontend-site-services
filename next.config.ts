import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/rss",
        destination: "/rss.xml",
        permanent: true,
      },

      {
        source: "/feed",
        destination: "/rss.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
