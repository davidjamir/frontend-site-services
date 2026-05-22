import type { Site } from "@/core/domain/site";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

/** Bỏ label đầu của host (vd. `www.a.com` → `a.com`). Giữ nguyên nếu không còn dấu chấm (vd. `example.com`). */
function hostWithoutFirstLabel(host: string): string {
  const i = host.indexOf(".");
  if (i === -1) return host;
  const rest = host.slice(i + 1);
  if (!rest.includes(".")) return host;
  return rest;
}

async function fetchSite(baseUrl: string, domain: string) {
  // "use cache: private"

  // cacheLife("days")

  const searchParams = new URLSearchParams({ domain });
  const response = await fetch(
    `${baseUrl}/api/site?${searchParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error("Failed to get current site");
  }

  return response.json() as Promise<Site>;
}

export const siteService = {
  async getRequestOrigin() {
    const headersList = await headers();
    const host = headersList.get("x-forwarded-host") ?? headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") ?? "http";

    if (!host) {
      throw new Error("Missing host");
    }

    const origin = hostWithoutFirstLabel(host);

    return {
      host,
      protocol,
      url: `${protocol}://${host}`,
      origin,
      originUrl: `${protocol}://${origin}`,
    };
  },

  async getHost() {
    const { host } = await this.getRequestOrigin();

    return host;
  },

  async getCurrentSite() {
    const { host: domain, url } = await this.getRequestOrigin();

    return fetchSite(url, domain);
  },
};
