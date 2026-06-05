import { NextResponse } from "next/server";
import { siteService } from "@/services/site.service";
import { sitemapService } from "@/services/sitemap.service";

const MAX_AGE = 60 * 60 * 12; // 12h
const S_MAX_AGE = 60 * 60 * 24 * 1; // 1 day
const STALE_WHILE_REVALIDATE = 60 * 60; // 1 hour
const STALE_IF_ERROR = 60 * 60 * 24 * 7; // 7 days

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
      "Cache-Control": `public, max-age=${MAX_AGE}, s-maxage=${S_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}, stale-if-error=${STALE_IF_ERROR}`,
    },
  });
}
