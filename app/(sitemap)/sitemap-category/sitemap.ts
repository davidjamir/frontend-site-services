import type { MetadataRoute } from "next";
import { siteService } from "@/services/site.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const siteOrigin = await siteService.getRequestOrigin()
    const site = await siteService.getCurrentSite()

    const siteUrl = siteOrigin.url
    const categories = site.categories || []

    const categoryUrls = categories.map((category) => ({
        url: `${siteUrl}/category/${category.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        ...categoryUrls,
    ];
}