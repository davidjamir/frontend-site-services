import type { Post, PostIndex } from "@/core/domain/post";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

export const postService = {
  async getPostData(
    baseUrl: string,
    domain: string,
    segment: string,
    slug: string,
  ) {
    const searchParams = new URLSearchParams({ domain, segment, slug });

    const response = await fetch(
      `${baseUrl}/api/post?${searchParams.toString()}`,
    );
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<Post>;
  },
  async getPostIndexByCategory(
    baseUrl: string,
    domain: string,
    category: string,
  ) {
    const searchParams = new URLSearchParams({ domain, category });

    const response = await fetch(
      `${baseUrl}/api/category?${searchParams.toString()}`,
    );
    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<PostIndex>;
  },
};
