import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";


import { FootballOgTemplate1 } from "@/components/og/football/FootballOgTemplate1";
import { FootballOgTemplate2 } from "@/components/og/football/FootballOgTemplate2";
import { FootballOgTemplate3 } from "@/components/og/football/FootballOgTemplate3";
import { FootballOgTemplate4 } from "@/components/og/football/FootballOgTemplate4";
import { FootballOgTemplate5 } from "@/components/og/football/FootballOgTemplate5";
import { FootballOgTemplate6 } from "@/components/og/football/FootballOgTemplate6";
import { FootballOgTemplate7 } from "@/components/og/football/FootballOgTemplate7";
import { FootballOgTemplate8 } from "@/components/og/football/FootballOgTemplate8";
import { FootballOgTemplate9 } from "@/components/og/football/FootballOgTemplate9";
import { FootballOgTemplate10 } from "@/components/og/football/FootballOgTemplate10";

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(
        (
            <FootballOgTemplate1
                teamName="TORONTO BLUE JAYS"
                title="BLUE JAYS SHUT OUT YANKEES IN MASTERCLASS PITCHING DUAL"
                snippet="Toronto's rotation dominates in front of a sold-out crowd at Rogers Centre."
                logoUrl="https://a.espncdn.com/i/teamlogos/mlb/500/tor.png"
                imageUrl="https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80"
                primaryColor="#bc1027"
                accentColor="#3fd41d"
                siteName="MLB"
            />
        ),
        {
            width: 1080,
            height: 1350,
            fonts,
        }
    );
}