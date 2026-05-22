import type { Metadata } from "next";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { notFound } from "next/navigation";

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
            canonical: `post/${post.slug}`,
        },
        authors: [{ name: post.author }],
        category: post.mainCategory
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

    const siteOrigin = await siteService.getRequestOrigin();
    const post = await postService.getPostData(
        siteOrigin.url,
        siteOrigin.host,
        segment,
        `${year}/${month}/${slug}`,
    );

    return (
        <article
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
                __html: post.content,
            }}
        />
    );
}
