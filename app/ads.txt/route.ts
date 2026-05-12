import { siteService } from "@/services/site.service";

export async function GET() {
  const site = await siteService.getCurrentSite()
  const ads = (site.ads?.adsTxt || "").trim()

  return new Response(ads, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
