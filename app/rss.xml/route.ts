export async function GET() {
  const posts = [
    {
      title: "Hello World",
      slug: "hello-world",
      description: "My first post",
      date: "2026-05-09"
    }
  ];

  const siteUrl = "https://nflhub.store";

  const rss = `
    <rss version="2.0">
      <channel>
        <title>NFL Hub</title>
        <link>${siteUrl}</link>
        <description>NFL News</description>

        ${posts
          .map(
            (post) => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${siteUrl}/post/${post.slug}</link>
            <description><![CDATA[${post.description}]]></description>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          </item>
        `
          )
          .join("")}

      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}