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
      throw new Error("Failed to get post by category");
    }

    return response.json() as Promise<PostIndex[]>;
  },

  async getPostIndexByTag(baseUrl: string, domain: string, tag: string) {
    const searchParams = new URLSearchParams({ domain, tag });

    const response = await fetch(
      `${baseUrl}/api/tag?${searchParams.toString()}`,
    );
    if (!response.ok) {
      throw new Error("Failed to get post by tag");
    }

    return response.json() as Promise<PostIndex[]>;
  },

  async getPostIndexLatest(baseUrl: string, domain: string) {
    const searchParams = new URLSearchParams({ domain });

    const response = await fetch(
      `${baseUrl}/api/latest?${searchParams.toString()}`,
    );
    if (!response.ok) {
      throw new Error("Failed to get post latest");
    }

    return response.json() as Promise<PostIndex[]>;
  },
};
