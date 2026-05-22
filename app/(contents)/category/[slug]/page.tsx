import type { Metadata } from "next";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: slug,
        category: slug,
    };
}

export default async function Page({ params }: Props) {
    const { slug } = await params;

    if (!slug || slug.length < 3) {
        notFound();
    }

    const siteOrigin = await siteService.getRequestOrigin();
    const posts = await postService.getPostIndexByCategory(
        siteOrigin.url,
        siteOrigin.host,
        slug,
    );

    console.log(posts);
    return <div />;
}
