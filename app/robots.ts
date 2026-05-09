import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = "https://nflhub.store";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // Ví dụ block admin
      {
        userAgent: "*",
        disallow: [
          "/admin",
          "/api",
          "/private",
        ],
      },
    ],

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}