import { siteService } from "@/services/site.service";

export async function GET() {
  const site = await siteService.getCurrentSite();
  const ads = (site.ads?.adsTxt || "").trim();

  return new Response(ads, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control":
        "public, max-age=86400, s-maxage=432000, stale-while-revalidate=86400",
    },
  });
}
