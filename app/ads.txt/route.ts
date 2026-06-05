import { siteService } from "@/services/site.service";

const MAX_AGE = 60 * 60 * 24 * 1; // 1 day
const S_MAX_AGE = 60 * 60 * 24 * 7; // 7 day
const STALE_WHILE_REVALIDATE = 60 * 60; // 1 hour
const STALE_IF_ERROR = 60 * 60 * 24 * 7; // 7 days

export async function GET() {
  const site = await siteService.getCurrentSite();
  const ads = (site.ads?.adsTxt || "").trim();

  return new Response(ads, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": `public, max-age=${MAX_AGE}, s-maxage=${S_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}, stale-if-error=${STALE_IF_ERROR}`,
    },
  });
}
