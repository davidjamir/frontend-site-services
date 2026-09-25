import { cacheLife, cacheTag } from "next/cache";
import { INTERNAL_SECRET } from "@/lib/env";
import { NUMBER_POSTS_LATEST } from "@/constants";
import type { Post, PostIndex } from "@/core/domain/post";

export const postService = {
  async getPostData(baseUrl: string, segment: string, slug: string) {
    "use cache";
    cacheLife("max");
    cacheTag(`post-data:${baseUrl}/${segment}/${slug}`);

    try {
      const searchParams = new URLSearchParams({ segment, slug });

      const response = await fetch(
        `${baseUrl}/api/post?${searchParams.toString()}`,
        { headers: { Authorization: `Bearer ${INTERNAL_SECRET}` } },
      );

      if (!response.ok) {
        throw new Error("Failed to get post data");
      }

      return response.json() as Promise<Post>;
    } catch (error) {
      console.error("[fetchPostData] ERROR:", error);
      throw error;
    }
  },
  async getPostIndexByCategory(
    baseUrl: string,
    domain: string,
    category: string,
  ) {
    "use cache";
    cacheLife("hours");
    cacheTag(`posts-index-category:${domain}:${category}`);

    try {
      const searchParams = new URLSearchParams({ domain, category });

      const response = await fetch(
        `${baseUrl}/api/category?${searchParams.toString()}`,
        { headers: { Authorization: `Bearer ${INTERNAL_SECRET}` } },
      );
      if (!response.ok) {
        throw new Error("Failed to get post by category");
      }

      return response.json() as Promise<PostIndex[]>;
    } catch (error) {
      console.error("[fetchPostIndexByCategory] ERROR:", error);
      throw error;
    }
  },

  async getPostIndexByTag(baseUrl: string, domain: string, tag: string) {
    "use cache";
    cacheLife("hours");
    cacheTag(`posts-index-tag:${domain}:${tag}`);

    try {
      const searchParams = new URLSearchParams({ domain, tag });

      const response = await fetch(
        `${baseUrl}/api/tag?${searchParams.toString()}`,
        { headers: { Authorization: `Bearer ${INTERNAL_SECRET}` } },
      );
      if (!response.ok) {
        throw new Error("Failed to get post by tag");
      }

      return response.json() as Promise<PostIndex[]>;
    } catch (error) {
      console.error("[fetchPostIndexByTag] ERROR:", error);
      throw error;
    }
  },

  async getPostIndexLatest(baseUrl: string) {
    "use cache";
    cacheLife("hours");
    cacheTag(`posts-index-latest:${baseUrl}`);

    try {
      const response = await fetch(`${baseUrl}/api/latest`, {
        headers: { Authorization: `Bearer ${INTERNAL_SECRET}` },
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

      return data.items.slice(0, NUMBER_POSTS_LATEST) as PostIndex[];
    } catch (error) {
      console.error("[fetchPostIndexLatest] ERROR:", error);
      throw error;
    }
  },

  async getPostIndexRelated(
    baseUrl: string,
    domain: string,
    slug: string,
    categories: string[],
  ) {
    "use cache";
    cacheLife("days");
    cacheTag(`posts-index-related:${domain}/${slug}`);

    try {
      const searchParams = new URLSearchParams({
        domain,
        slug,
        categories: categories.join(","),
      });

      const response = await fetch(
        `${baseUrl}/api/related?${searchParams.toString()}`,
        { headers: { Authorization: `Bearer ${INTERNAL_SECRET}` } },
      );
      if (!response.ok) {
        throw new Error("Failed to get post related");
      }

      return response.json() as Promise<PostIndex[]>;
    } catch (error) {
      console.error("[fetchPostIndexRelated] ERROR:", error);
      throw error;
    }
  },
};
