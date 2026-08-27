import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { SportOgTemplate1 } from "@/components/og/sport/SportOgTemplate1";
import { SportOgTemplate2 } from "@/components/og/sport/SportOgTemplate2";
import { SportOgTemplate3 } from "@/components/og/sport/SportOgTemplate3";
import { SportOgTemplate4 } from "@/components/og/sport/SportOgTemplate4";
import { SportOgTemplate5 } from "@/components/og/sport/SportOgTemplate5";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const SPORT_OG_TEMPLATE = [
    SportOgTemplate1,
    SportOgTemplate2,
    SportOgTemplate3,
    SportOgTemplate4,
    SportOgTemplate5,
];

export default function SportOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent =
        SPORT_OG_TEMPLATE[segmentNumber % SPORT_OG_TEMPLATE.length];

    return (
        <TemplateComponent
            teamName={site.entity || "NHL"}
            siteName={site.name || "NHL"}
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