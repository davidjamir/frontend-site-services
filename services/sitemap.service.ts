import type { Sitemap, SitemapItem } from "@/core/domain/sitemap";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

export const sitemapService = {
  async getSitemapIndexByDomain(baseUrl: string, domain: string) {
    const searchParams = new URLSearchParams({ domain });

    const response = await fetch(`${baseUrl}/api/sitemap?${searchParams.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<Sitemap[]>;
  },

  async getSitemapEntriesById(baseUrl: string, id: string) {
    const searchParams = new URLSearchParams({ id });

    const response = await fetch(`${baseUrl}/api/sitemap?${searchParams.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<SitemapItem[]>;
  },
};
