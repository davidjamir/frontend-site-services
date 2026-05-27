import type { PostIndex } from "@/core/domain/post";

export const searchService = {
  async searchPosts(baseUrl: string, domain: string, q: string) {
    const searchParams = new URLSearchParams({ domain, q });

    const response = await fetch(
      `${baseUrl}/api/search?${searchParams.toString()}`,
    );
    if (!response.ok) {
      throw new Error("Failed to search posts");
    }

    return response.json() as Promise<PostIndex[]>;
  },
};
