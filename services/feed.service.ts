import type { FeedItem } from "@/core/domain/feed";

export const feedService = {
  async getFeedItems(baseUrl: string, domain: string) {
    "use cache";

    const searchParams = new URLSearchParams({ domain });

    const response = await fetch(
      `${baseUrl}/api/feed?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );

    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<FeedItem[]>;
  },
};
