import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { NBAOgTemplate1 } from "@/components/og/nba/NBAOgTemplate1";
import { NBAOgTemplate2 } from "@/components/og/nba/NBAOgTemplate2";
import { NBAOgTemplate3 } from "@/components/og/nba/NBAOgTemplate3";
import { NBAOgTemplate4 } from "@/components/og/nba/NBAOgTemplate4";
import { NBAOgTemplate5 } from "@/components/og/nba/NBAOgTemplate5";
import { NBAOgTemplate6 } from "@/components/og/nba/NBAOgTemplate6";
import { NBAOgTemplate7 } from "@/components/og/nba/NBAOgTemplate7";
import { NBAOgTemplate8 } from "@/components/og/nba/NBAOgTemplate8";
import { NBAOgTemplate9 } from "@/components/og/nba/NBAOgTemplate9";
import { NBAOgTemplate10 } from "@/components/og/nba/NBAOgTemplate10";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const NBA_OG_TEMPLATE = [
    NBAOgTemplate1,
    NBAOgTemplate2,
    NBAOgTemplate3,
    // NBAOgTemplate4,
    NBAOgTemplate5,
    // NBAOgTemplate6,
    // NBAOgTemplate7,
    // NBAOgTemplate8,
    // NBAOgTemplate9,
    // NBAOgTemplate10,
];

export default function NBAOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent =
        NBA_OG_TEMPLATE[segmentNumber % NBA_OG_TEMPLATE.length];

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