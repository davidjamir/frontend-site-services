import type { Post, PostIndex } from "@/core/domain/post";
import { cacheLife } from "next/cache";
import { NUMBER_POSTS_LATEST } from "@/constants";

export const postService = {
  async getPostData(
    baseUrl: string,
    domain: string,
    segment: string,
    slug: string,
  ) {
    "use cache";
    cacheLife("max");

    const searchParams = new URLSearchParams({ domain, segment, slug });

    const response = await fetch(
      `${baseUrl}/api/post?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );

    if (!response.ok) {
      throw new Error("Failed to get post data");
    }

    return response.json() as Promise<Post>;
  },
  async getPostIndexByCategory(
    baseUrl: string,
    domain: string,
    category: string,
  ) {
    "use cache";
    cacheLife("hours");

    const searchParams = new URLSearchParams({ domain, category });

    const response = await fetch(
      `${baseUrl}/api/category?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );
    if (!response.ok) {
      throw new Error("Failed to get post by category");
    }

    return response.json() as Promise<PostIndex[]>;
  },

  async getPostIndexByTag(baseUrl: string, domain: string, tag: string) {
    "use cache";
    cacheLife("hours");

    const searchParams = new URLSearchParams({ domain, tag });

    const response = await fetch(
      `${baseUrl}/api/tag?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );
    if (!response.ok) {
      throw new Error("Failed to get post by tag");
    }

    return response.json() as Promise<PostIndex[]>;
  },

  async getPostIndexLatest(baseUrl: string) {
    "use cache";
    cacheLife("hours");

    const response = await fetch(`${baseUrl}/api/latest`, {
      headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` },
    });
    if (!response.ok) {
      throw new Error("Failed to get post latest");
    }

    //Specific for R2 response structure
    const data = (await response.json()) as {
      ok: boolean;
      count: number;
      items: PostIndex[];
    };

    return data.items.slice(0, NUMBER_POSTS_LATEST);
  },

  async getPostIndexRelated(
    baseUrl: string,
    domain: string,
    slug: string,
    categories: string[],
  ) {
    "use cache";
    cacheLife("hours");

    const searchParams = new URLSearchParams({
      domain,
      slug,
      categories: categories.join(","),
    });

    const response = await fetch(
      `${baseUrl}/api/related?${searchParams.toString()}`,
      { headers: { Authorization: `Bearer ${process.env.INTERNAL_SECRET}` } },
    );
    if (!response.ok) {
      throw new Error("Failed to get post related");
    }

    return response.json() as Promise<PostIndex[]>;
  },
};
