import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { DefaultOgTemplate } from "@/components/og/DefaultOgTemplate";
import { RacingOgTemplate1 } from "@/components/og/racing/RacingOgTemplate1";
import { RacingOgTemplate2 } from "@/components/og/racing/RacingOgTemplate2";
import { RacingOgTemplate3 } from "@/components/og/racing/RacingOgTemplate3";
import { RacingOgTemplate4 } from "@/components/og/racing/RacingOgTemplate4";
import { RacingOgTemplate5 } from "@/components/og/racing/RacingOgTemplate5";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const RACING_OG_TEMPLATE = [
    RacingOgTemplate1,
    RacingOgTemplate2,
    RacingOgTemplate3,
    RacingOgTemplate4,
    RacingOgTemplate5,
];

export default function RacingOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent = site.config.customOpengraphImage ?
        RACING_OG_TEMPLATE[segmentNumber % RACING_OG_TEMPLATE.length] : DefaultOgTemplate;

    return (
        <TemplateComponent
            teamName={site.entity || "RACING"}
            siteName={site.name || "RACING"}
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