import { cacheLife, cacheTag } from "next/cache";
import { INTERNAL_SECRET } from "@/lib/env";
import type { PostIndex } from "@/core/domain/post";

export const searchService = {
  async searchPosts(baseUrl: string, domain: string, q: string) {
    "use cache";
    cacheLife("days");
    cacheTag(`posts-search:${domain}:${q}`);

    try {
      const searchParams = new URLSearchParams({ domain, q });

      const response = await fetch(
        `${baseUrl}/api/search?${searchParams.toString()}`,
        { headers: { Authorization: `Bearer ${INTERNAL_SECRET}` } },
      );

      if (!response.ok) {
        throw new Error("Failed to search posts");
      }

      return response.json() as Promise<PostIndex[]>;
    } catch (error) {
      console.error("[fetchSearchPosts] ERROR:", error);
      throw error;
    }
  },
};
