import type { Metadata } from "next";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { notFound } from "next/navigation";
import { THEMES_POSTPAGE } from "@/constants";

type Props = {
    params: {
        segment: string;
        year: string;
        month: string;
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const { segment, year, month, slug } = await params;
    const siteOrigin = await siteService.getRequestOrigin();
    const post = await postService.getPostData(
        siteOrigin.url,
        siteOrigin.host,
        segment,
        `${year}/${month}/${slug}`,
    );

    return {
        title: {
            absolute: post.title,
        },
        description: post.snippet,
        alternates: {
            canonical: `post/${post.segment}/${post.slug}`,
        },
        authors: [{ name: post.author }],
        category: post.mainCategory,
        keywords: post.tags,
    };
}

export default async function Page({ params }: Props) {
    const { segment, year, month, slug } = await params;
    const yearNumber = Number(year);

    if (
        Number.isNaN(yearNumber) ||
        year.length !== 4 ||
        yearNumber < 2026 ||
        yearNumber > 2035
    ) {
        notFound();
    }

    const monthNumber = Number(month);

    if (
        Number.isNaN(monthNumber) ||
        month.length !== 2 ||
        monthNumber < 1 ||
        monthNumber > 12
    ) {
        notFound();
    }

    if (!slug || slug.length < 3) {
        notFound();
    }

    const site = await siteService.getCurrentSite();
    const post = await postService.getPostData(
        site.baseUrl,
        site.host,
        segment,
        `${year}/${month}/${slug}`,
    );
    const related = await postService.getPostIndexRelated(
        site.baseUrl,
        site.host,
        post.slug,
        post.categories,
    );

    const ThemePostPage =
        THEMES_POSTPAGE[site.theme as keyof typeof THEMES_POSTPAGE];
    return (
        <ThemePostPage post={post} related={related} />
    )
}
