import type { MetadataRoute } from "next";
import { siteService } from "@/services/site.service";
import { sitemapService } from "@/services/sitemap.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await siteService.getRequestOrigin()
  const siteUrl = siteOrigin.url
  const postSitemaps = await sitemapService.getSitemapIndexByDomain(siteUrl, siteOrigin.host)

  const postUrls = postSitemaps.map((item) => ({
    url: `${siteUrl}/sitemap-post/${item.sitemapId}.xml`,
    lastModified: new Date(item.updatedAt),
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
      url: `${siteUrl}/sitemap-page/sitemap.xml`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${siteUrl}/sitemap-category/sitemap.xml`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    ...postUrls,
  ];
}