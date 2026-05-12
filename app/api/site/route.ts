import type { Site, SiteTheme } from "@/core/domain/site"
import { NextResponse } from "next/server"

const DEFAULT_THEME: SiteTheme = "news"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const sitename = searchParams.get("sitename") ?? "localhost:3000"
    const site: Site = {
        id: sitename,
        name: sitename,
        host: sitename,
        icon: "/vercel.svg",
        logo: "/next.svg",
        theme: DEFAULT_THEME,
        seo: {
            title: sitename,
            description: `${sitename} news site`,
            canonicalUrl: `https://${sitename}`,
        },
        ads: {
            adsTxt: "google.com, pub-1234567890, DIRECT, f08c47fec0942fa0",
        },
    }

    return NextResponse.json(site)
}
