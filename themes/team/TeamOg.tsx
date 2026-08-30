import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";
import { DefaultOgTemplate } from "@/components/og/DefaultOgTemplate";

type Props = {
    site: Site;
    post: Post;
    logo: string;
};

export default function SportOg({ site, post, logo }: Props) {
    const TemplateComponent = DefaultOgTemplate;

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