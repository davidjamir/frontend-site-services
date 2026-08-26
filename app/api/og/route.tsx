import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";

import { NHLOgTemplate8 } from "@/components/og/nhl/NHLOgTemplate8";

const data = {
    teamName: "REAL MADRID CF",
    siteName: "FOOTBALL INSIDER",
    title: "HERE WE GO: 5-YEAR DEAL AGREED",
    snippet:
        "Full agreement reached between all parties on €130M package plus add-ons. Medical tests booked for Monday in Madrid.",
    imageUrl:
        "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_3499,h_1968/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/ReutersImages/mmsport/111/01kzk7d4cgte6wn5jq5x.jpg",
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

    return new ImageResponse(<NHLOgTemplate8 {...data} />, {
        width: 1080,
        height: 1350,
        fonts,
    });
}
