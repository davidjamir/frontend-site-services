import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";

import { MLBOgTemplate1 } from "@/components/og/mlb/MLBOgTemplate1";
import { MLBOgTemplate2 } from "@/components/og/mlb/MLBOgTemplate2";
import { MLBOgTemplate3 } from "@/components/og/mlb/MLBOgTemplate3";
import { MLBOgTemplate4 } from "@/components/og/mlb/MLBOgTemplate4";
import { MLBOgTemplate5 } from "@/components/og/mlb/MLBOgTemplate5";
import { MLBOgTemplate6 } from "@/components/og/mlb/MLBOgTemplate6";
import { MLBOgTemplate7 } from "@/components/og/mlb/MLBOgTemplate7";
import { MLBOgTemplate8 } from "@/components/og/mlb/MLBOgTemplate8";
import { MLBOgTemplate9 } from "@/components/og/mlb/MLBOgTemplate9";
import { MLBOgTemplate10 } from "@/components/og/mlb/MLBOgTemplate10";

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
            <MLBOgTemplate1
                teamName="DETROIT RED WINGS"
                title="TKACHUK BRINGS PHYSICALITY AND 2 GOALS IN CANADIAN CAPITAL WIN"
                snippet="New York overcomes an 18-point deficit in the final frame to ignite the home crowd and grab key postseason positioning."
                imageUrl="https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=1200&q=80"
                logoUrl="https://assets.nhle.com/logos/nhl/svg/DET_light.svg"
                primaryColor="#b10d75"
                accentColor="#131cba"
                siteName="NBA"

            />
        ),
        {
            width: 1080,
            height: 1350,
            fonts,
        }
    );
}