import type { Sitemap, SitemapItem } from "@/core/domain/sitemap";
import { cacheLife } from "next/cache";

export const sitemapService = {
  async getSitemapIndexByDomain(baseUrl: string, domain: string) {
    "use cache";
    cacheLife("hours");

    const searchParams = new URLSearchParams({ domain });

    const response = await fetch(
      `${baseUrl}/api/sitemap?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<Sitemap[]>;
  },

  async getSitemapEntriesById(baseUrl: string, id: string) {
    "use cache";
    cacheLife("hours");

    const searchParams = new URLSearchParams({ id });

    const response = await fetch(
      `${baseUrl}/api/sitemap?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<SitemapItem[]>;
  },
};
