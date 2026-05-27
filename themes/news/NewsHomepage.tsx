'use server'

import { postService } from "@/services/post.service";
import { NewsPostList } from "./NewsContent";
import { Site } from "@/core/domain/site";

export async function NewsHomePage({ site }: { site: Site }) {
    const latest = await postService.getPostIndexLatest(site.baseUrl, site.host);

    return <NewsPostList posts={latest} />
}