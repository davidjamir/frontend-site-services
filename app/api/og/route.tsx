import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";

import { NHLOgTemplate8 } from "@/components/og/nhl/NHLOgTemplate8";

import { FootballOgTemplate5 } from "@/components/og/football/FootballOgTemplate5";

const data = {
    teamName: "REAL MADRID CF",
    siteName: "FOOTBALL INSIDER",
    title: "HERE WE GO: 5-YEAR DEAL AGREED",
    snippet:
        "Full agreement reached between all parties on €130M package plus add-ons. Medical tests booked for Monday in Madrid.",
    imageUrl:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1080&h=1350&fit=crop",
    logoUrl: "https://crests.football-data.org/86.png",
    titleItalic: true,
    primaryColor: "#d40f3d",
    accentColor: "#FEBE10",
    badgeTag: "HERE WE GO!",
    statusLabel: "CONFIRMED",
    timeAgo: "JUST NOW",
    author: "Fabrizio Romano",
    authorRole: "Senior Writer",
    sourceDomain: "SKY SPORTS",
};

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(<FootballOgTemplate5 {...data} />, {
        width: 1080,
        height: 1350,
        fonts,
    });
}
