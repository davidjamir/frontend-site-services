import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { DefaultOgTemplate } from "@/components/og/DefaultOgTemplate";
import { NewsOgTemplate1 } from "@/components/og/news/NewsOgTemplate1";
import { NewsOgTemplate2 } from "@/components/og/news/NewsOgTemplate2";
import { NewsOgTemplate3 } from "@/components/og/news/NewsOgTemplate3";
import { NewsOgTemplate4 } from "@/components/og/news/NewsOgTemplate4";
import { NewsOgTemplate5 } from "@/components/og/news/NewsOgTemplate5";
import { NewsOgTemplate6 } from "@/components/og/news/NewsOgTemplate6";
import { NewsOgTemplate7 } from "@/components/og/news/NewsOgTemplate7";
import { NewsOgTemplate8 } from "@/components/og/news/NewsOgTemplate8";
import { NewsOgTemplate9 } from "@/components/og/news/NewsOgTemplate9";
import { NewsOgTemplate10 } from "@/components/og/news/NewsOgTemplate10";

type Props = {
    site: Site;
    post: Post;
    logo: string;
}

const NEWS_OG_TEMPLATE = [
    NewsOgTemplate1,
    NewsOgTemplate2,
    NewsOgTemplate3,
    NewsOgTemplate4,
    NewsOgTemplate5,
    NewsOgTemplate6,
    NewsOgTemplate7,
    NewsOgTemplate8,
    NewsOgTemplate9,
    NewsOgTemplate10,
];

export default function NewsOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent = site.config.customOpengraphImage ?
        NEWS_OG_TEMPLATE[segmentNumber % NEWS_OG_TEMPLATE.length] : DefaultOgTemplate;

    return (
        <TemplateComponent
            teamName={site.entity || "NBA"}
            siteName={site.name || "NBA"}
            title={post.title}
            snippet={post.snippet}
            imageUrl={post.featuredImage}
            logoUrl={logo}
            primaryColor={site.config.primaryColor}
            accentColor={site.config.accentColor}
            badgeTag="BREAKING NEWS"
            author={post.author}
            authorRole="Senior Reporter"
            sourceDomain={site.host}
        />
    );
}