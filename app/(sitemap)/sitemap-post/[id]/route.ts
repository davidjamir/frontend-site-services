import { NextResponse } from "next/server";
import { siteService } from "@/services/site.service";
import { sitemapService } from "@/services/sitemap.service";

/** `/sitemap-post/abc.xml` → params.id = `"abc.xml"` */
async function sitemapIdFromParam(raw: string) {
  const sitemapId = raw.endsWith(".xml") ? raw.slice(0, -4) : "";
  return sitemapId;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const sitemapId = await sitemapIdFromParam((await context.params).id);
  const siteOrigin = await siteService.getRequestOrigin();
  const items = await sitemapService.getSitemapEntriesById(
    siteOrigin.url,
    sitemapId,
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${items
    .map((item) => {
      return `  <url><loc>${item.url}</loc><lastmod>${item.updatedAt}</lastmod></url>`;
    })
    .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=7200, stale-while-revalidate=1200",
    },
  });
}
