import { feedService } from "@/services/feed.service";
import { siteService } from "@/services/site.service";

export async function GET() {
  const siteOrigin = await siteService.getRequestOrigin();
  const site = await siteService.getCurrentSite();
  const siteUrl = siteOrigin.url;
  const posts = await feedService.getFeedItems(siteUrl, siteOrigin.host);

  const rss = `
    <rss version="2.0"
        xmlns:atom="http://www.w3.org/2005/Atom"
        xmlns:media="http://search.yahoo.com/mrss/"
        xmlns:content="http://purl.org/rss/1.0/modules/content/"
        xmlns:mi="http://schemas.ingestion.microsoft.com/common/"
        xmlns:flatplan="https://www.wearemathematics.co.uk/flatplan-feedspec/">
      <channel>
        <atom:link
          href="${siteUrl}/feed"
          rel="self"
          type="application/rss+xml"
        />
        <description>${site.seo.description}</description>
        <title>${site.seo.title}</title>
        <link>${site.seo.canonicalUrl}</link>

        ${posts
          .map(
            (post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${siteUrl}/${post.segment}/${post.slug}</link>
            <description><![CDATA[${post.snippet}]]></description>
            <pubDate>${post.createdAt}</pubDate>
            <author>${post.author}</author>
            <guid isPermaLink="false">${post.id}</guid>
            <language>en</language>
            <media:thumbnail url="${post.featuredImage}" caption="${post.title}"/>
            <flatplan:sponsor/>
            <flatplan:author name="${post.author}"/>
          </item>
        `,
          )
          .join("")}

      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "public, max-age=300, s-maxage=600, stale-while-revalidate=1200",
    },
  });
}
