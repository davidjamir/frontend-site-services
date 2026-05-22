import type { MetadataRoute } from "next";
import { siteService } from "@/services/site.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await siteService.getRequestOrigin();
  const site = await siteService.getCurrentSite();
  const pages = site.pages || [];

  return pages.map((page) => ({
    url: `${siteOrigin.url}/page/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}
