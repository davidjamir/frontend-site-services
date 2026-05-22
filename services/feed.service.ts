import type { FeedItem } from "@/core/domain/feed";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

export const feedService = {

  async getFeedItems(baseUrl: string, domain: string) {
    const searchParams = new URLSearchParams({ domain });

    const response = await fetch(`${baseUrl}/api/feed?${searchParams.toString()}`);
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<FeedItem[]>;
  },
};
