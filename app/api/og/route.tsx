import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";

import { SportOgTemplate1 } from "@/components/og/sport/SportOgTemplate1";
import { SportOgTemplate2 } from "@/components/og/sport/SportOgTemplate2";
import { SportOgTemplate3 } from "@/components/og/sport/SportOgTemplate3";
import { SportOgTemplate4 } from "@/components/og/sport/SportOgTemplate4";
import { SportOgTemplate5 } from "@/components/og/sport/SportOgTemplate5";

import { NewsOgTemplate1 } from "@/components/og/news/NewsOgTemplate1";
import { NewsOgTemplate2 } from "@/components/og/news/NewsOgTemplate2";
import { NewsOgTemplate3 } from "@/components/og/news/NewsOgTemplate3";
import { NewsOgTemplate4 } from "@/components/og/news/NewsOgTemplate4";
import { NewsOgTemplate5 } from "@/components/og/news/NewsOgTemplate5";

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
    primaryColor: "#0F172A",
    accentColor: "#F43F5E",
    badgeTag: "HERE WE GO!",
    statusLabel: "CONFIRMED",
    timeAgo: "JUST NOW",
    author: "Fabrizio Romano",
    authorRole: "Senior Writer",
    sourceDomain: "SKY SPORTS",
};

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(<SportOgTemplate1 {...data} />, {
        width: 1080,
        height: 1350,
        fonts,
    });
}
