import type { Metadata } from "next";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { notFound } from "next/navigation";
import { THEMES_CONTENT } from "@/constants";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        keywords: [slug],
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;

    if (!slug || slug.length < 3) {
        notFound();
    }

    const site = await siteService.getCurrentSite();
    const posts = await postService.getPostIndexByTag(
        site.baseUrl,
        site.host,
        slug,
    );

    const ThemeContent =
        THEMES_CONTENT[site.theme as keyof typeof THEMES_CONTENT];

    return posts.length > 0 ? (
        <ThemeContent mode={site.configView.tag} posts={posts} />
    ) : (
        <></>
    );
}
