import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { NFLOgTemplate1 } from "@/components/og/nfl/NFLOgTemplate1";
import { NFLOgTemplate2 } from "@/components/og/nfl/NFLOgTemplate2";
import { NFLOgTemplate3 } from "@/components/og/nfl/NFLOgTemplate3";
import { NFLOgTemplate4 } from "@/components/og/nfl/NFLOgTemplate4";
import { NFLOgTemplate5 } from "@/components/og/nfl/NFLOgTemplate5";
import { NFLOgTemplate6 } from "@/components/og/nfl/NFLOgTemplate6";
import { NFLOgTemplate7 } from "@/components/og/nfl/NFLOgTemplate7";
import { NFLOgTemplate8 } from "@/components/og/nfl/NFLOgTemplate8";
import { NFLOgTemplate9 } from "@/components/og/nfl/NFLOgTemplate9";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const NFL_OG_TEMPLATE = [
    NFLOgTemplate1,
    NFLOgTemplate2,
    NFLOgTemplate3,
    NFLOgTemplate4,
    NFLOgTemplate5,
    NFLOgTemplate6,
    NFLOgTemplate7,
    NFLOgTemplate8,
    NFLOgTemplate9,
];

export default function NFLOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent =
        NFL_OG_TEMPLATE[segmentNumber % NFL_OG_TEMPLATE.length];

    return (
        <TemplateComponent
            teamName={site.entity || "NFL"}
            siteName={site.name || "NFL"}
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