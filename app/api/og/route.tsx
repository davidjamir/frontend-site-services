import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";
import { NHLOgTemplate10 } from "@/components/og/nhl/NHLOgTemplate10";

const data = {
    siteName: "The Times",
    statusLabel: "OFFICIAL CONFIRMATION",
    logoUrl: "https://www.thetimenews.us/images/default.png",
    teamName: "SCUDERIA FERRARI",
    title: "HAMILTON OFFICIALLY SIGNS MULTI-YEAR CONTRACT WITH FERRARI",
    snippet: "In the biggest transfer move in Formula 1 history, seven-time world champion Lewis Hamilton leaves Mercedes to join Ferrari.",
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    titleItalic: true,
    primaryColor: "#E10600",
    accentColor: "#f6f4f2",
    badgeTag: "BREAKING NEWS",
    sourceDomain: "FORMULA1.COM",
    timeAgo: "JUST IN",
};

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(<NHLOgTemplate10 {...data} />, {
        width: 1080,
        height: 1350,
        fonts,
    });
}
