import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { NHLOgTemplate1 } from "@/components/og/nhl/NHLOgTemplate1";
import { NHLOgTemplate2 } from "@/components/og/nhl/NHLOgTemplate2";
import { NHLOgTemplate3 } from "@/components/og/nhl/NHLOgTemplate3";
import { NHLOgTemplate4 } from "@/components/og/nhl/NHLOgTemplate4";
import { NHLOgTemplate5 } from "@/components/og/nhl/NHLOgTemplate5";
import { NHLOgTemplate6 } from "@/components/og/nhl/NHLOgTemplate6";
import { NHLOgTemplate7 } from "@/components/og/nhl/NHLOgTemplate7";
import { NHLOgTemplate8 } from "@/components/og/nhl/NHLOgTemplate8";
import { NHLOgTemplate9 } from "@/components/og/nhl/NHLOgTemplate9";
import { NHLOgTemplate10 } from "@/components/og/nhl/NHLOgTemplate10";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const NHL_OG_TEMPLATE = [
    NHLOgTemplate1,
    NHLOgTemplate2,
    NHLOgTemplate3,
    NHLOgTemplate4,
    NHLOgTemplate5,
    NHLOgTemplate6,
    NHLOgTemplate7,
    NHLOgTemplate8,
    NHLOgTemplate9,
    NHLOgTemplate10,
];

export default function NHLOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent =
        NHL_OG_TEMPLATE[segmentNumber % NHL_OG_TEMPLATE.length];

    return (
        <TemplateComponent
            teamName={site.entity || "NHL"}
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