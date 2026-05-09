import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://nflhub.store";

  // TODO:
  // lấy posts từ DB
  const posts = [
    {
      slug: "hello-world",
      updatedAt: "2026-05-09",
    },
    {
      slug: "nfl-news",
      updatedAt: "2026-05-08",
    },
  ];

  const postUrls = posts.map((post) => ({
    url: `${siteUrl}/post/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    ...postUrls,
  ];
}