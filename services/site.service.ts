import { cacheLife, cacheTag } from "next/cache";
import { headers } from "next/headers";
import { isProduction, INTERNAL_SECRET } from "@/lib/env";
import type { Site } from "@/core/domain/site";
import { ORIGIN_CONFIG_DEVELOPMENT_DEFAULT } from "@/constants";

async function fetchSite(baseUrl: string) {
  "use cache";
  cacheLife("days");
  cacheTag(`site-config:${baseUrl}`);
  try {
    const response = await fetch(`${baseUrl}/api/site`, {
      headers: { Authorization: `Bearer ${INTERNAL_SECRET}` },
    });

    if (!response.ok) {
      throw new Error("Failed to get current site");
    }

    return response.json() as Promise<Site>;
  } catch (error) {
    console.error("[fetchSite] ERROR:", error);
    throw error;
  }
}

export const siteService = {
  async getRequestOrigin() {
    const headersList = await headers();
    const host = headersList.get("x-forwarded-host") ?? headersList.get("host");

    if (!host) {
      throw new Error("Missing host");
    }

    // Checking environment app
    if (!isProduction || host.startsWith("localhost")) {
      return ORIGIN_CONFIG_DEVELOPMENT_DEFAULT();
    }

    return ORIGIN_CONFIG_DEVELOPMENT_DEFAULT(host);
  },

  async getHost() {
    const { host } = await this.getRequestOrigin();

    return host;
  },

  async getCurrentSite() {
    const { url } = await this.getRequestOrigin();

    return fetchSite(url);
  },
};
