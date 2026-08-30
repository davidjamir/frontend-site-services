import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";

import { SportOgTemplate1 } from "@/components/og/sport/SportOgTemplate1";
import { SportOgTemplate2 } from "@/components/og/sport/SportOgTemplate2";
import { SportOgTemplate3 } from "@/components/og/sport/SportOgTemplate3";
import { SportOgTemplate4 } from "@/components/og/sport/SportOgTemplate4";
import { SportOgTemplate5 } from "@/components/og/sport/SportOgTemplate5";

const data = {
    teamName: "AERO GLASS WIRE // WASHINGTON",
    siteName: "The Times",
    title: "PRESIDENTIAL SPECIAL ADDRESS ON CRITICAL NATIONAL SECURITY DIRECTIVES",
    snippet: "The Commander-in-Chief announces immediate executive measures regarding strategic naval corridors and federal defense readiness in a live broadcast.",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    logoUrl: "https://www.thetimenews.us/images/default.png",
    titleItalic: true,
    primaryColor: "#DC2626",
    accentColor: "#FFFFFF",
    badgeTag: "BREAKING NEWS",
    author: "Marcus Vance",
    authorRole: "Chief White House Correspondent",
    sourceDomain: "THE TIME NEWS",
    statusLabel: "SPECIAL BROADCAST",
    timeAgo: "WASHINGTON D.C. // LIVE SATELLITE",
};

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(<SportOgTemplate1 {...data} />, {
        width: 1080,
        height: 1350,
        fonts,
    });
}
