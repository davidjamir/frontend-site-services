import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { DefaultOgTemplate } from "@/components/og/DefaultOgTemplate";
import { MLBOgTemplate1 } from "@/components/og/mlb/MLBOgTemplate1";
import { MLBOgTemplate2 } from "@/components/og/mlb/MLBOgTemplate2";
import { MLBOgTemplate3 } from "@/components/og/mlb/MLBOgTemplate3";
import { MLBOgTemplate4 } from "@/components/og/mlb/MLBOgTemplate4";
import { MLBOgTemplate5 } from "@/components/og/mlb/MLBOgTemplate5";
import { MLBOgTemplate6 } from "@/components/og/mlb/MLBOgTemplate6";
import { MLBOgTemplate7 } from "@/components/og/mlb/MLBOgTemplate7";
import { MLBOgTemplate8 } from "@/components/og/mlb/MLBOgTemplate8";
import { MLBOgTemplate9 } from "@/components/og/mlb/MLBOgTemplate9";
import { MLBOgTemplate10 } from "@/components/og/mlb/MLBOgTemplate10";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const MLB_OG_TEMPLATE = [
    MLBOgTemplate1,
    MLBOgTemplate2,
    MLBOgTemplate3,
    MLBOgTemplate4,
    MLBOgTemplate5,
    MLBOgTemplate6,
    MLBOgTemplate7,
    MLBOgTemplate8,
    MLBOgTemplate9,
    MLBOgTemplate10,
];

export default function MLBOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent = site.config.customOpengraphImage ?
        MLB_OG_TEMPLATE[segmentNumber % MLB_OG_TEMPLATE.length] : DefaultOgTemplate;

    return (
        <TemplateComponent
            teamName={site.entity || "MLB"}
            siteName={site.name || "MLB"}
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