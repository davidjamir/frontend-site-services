import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { getSegmentNumber } from "@/helpers/getSegmentNumber";
import { DefaultOgTemplate } from "@/components/og/DefaultOgTemplate";
import { FootballOgTemplate1 } from "@/components/og/football/FootballOgTemplate1";
import { FootballOgTemplate2 } from "@/components/og/football/FootballOgTemplate2";
import { FootballOgTemplate3 } from "@/components/og/football/FootballOgTemplate3";
import { FootballOgTemplate4 } from "@/components/og/football/FootballOgTemplate4";
import { FootballOgTemplate5 } from "@/components/og/football/FootballOgTemplate5";
import { FootballOgTemplate6 } from "@/components/og/football/FootballOgTemplate6";
import { FootballOgTemplate7 } from "@/components/og/football/FootballOgTemplate7";
import { FootballOgTemplate8 } from "@/components/og/football/FootballOgTemplate8";
import { FootballOgTemplate9 } from "@/components/og/football/FootballOgTemplate9";
import { FootballOgTemplate10 } from "@/components/og/football/FootballOgTemplate10";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

const FOOTBALL_OG_TEMPLATE = [
    FootballOgTemplate1,
    FootballOgTemplate2,
    FootballOgTemplate3,
    FootballOgTemplate4,
    FootballOgTemplate5,
    FootballOgTemplate6,
    FootballOgTemplate7,
    FootballOgTemplate8,
    FootballOgTemplate9,
    FootballOgTemplate10,
];

export default function FootballOg({ site, post, logo }: Props) {
    const segmentNumber = getSegmentNumber(post.segment);
    const TemplateComponent = site.config.customOpengraphImage ?
        FOOTBALL_OG_TEMPLATE[segmentNumber % FOOTBALL_OG_TEMPLATE.length] : DefaultOgTemplate;

    return (
        <TemplateComponent
            teamName={site.entity || "Football"}
            siteName={site.name || "Football"}
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