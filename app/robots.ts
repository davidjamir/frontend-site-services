import type { MetadataRoute } from "next";
import { siteService } from "@/services/site.service";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteOrigin = await siteService.getRequestOrigin()

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
        ],
      },
    ],

    sitemap: `${siteOrigin.url}/sitemap.xml`,
    host: siteOrigin.url,
  };
}