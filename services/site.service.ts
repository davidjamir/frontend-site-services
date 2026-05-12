import type { Site } from "@/core/domain/site"
import { cacheLife } from "next/cache"
import { headers } from "next/headers"

async function fetchSite(sitename: string, protocol: string) {
    // "use cache: private"

    // cacheLife("days")

    const searchParams = new URLSearchParams({ sitename })
    const response = await fetch(
        `${protocol}://${sitename}/api/site?${searchParams.toString()}`
    )

    if (!response.ok) {
        throw new Error("Failed to get current site")
    }

    return response.json() as Promise<Site>
}

export const siteService = {
    async getRequestOrigin() {
        const headersList = await headers()
        const host = headersList.get("x-forwarded-host") ?? headersList.get("host")
        const protocol = headersList.get("x-forwarded-proto") ?? "http"

        if (!host) {
            throw new Error("Missing host")
        }


        return {
            host,
            protocol,
            url: `${protocol}://${host}`,
        }
    },

    async getHost() {
        const { host } = await this.getRequestOrigin()

        return host
    },

    async getCurrentSite() {
        const { host: sitename, protocol } = await this.getRequestOrigin()

        return fetchSite(sitename, protocol)
    },
}
