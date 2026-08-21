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

import { NBAOgTemplate1 } from "@/components/og/nba/NBAOgTemplate1";
import { NBAOgTemplate2 } from "@/components/og/nba/NBAOgTemplate2";
import { NBAOgTemplate3 } from "@/components/og/nba/NBAOgTemplate3";
import { NBAOgTemplate4 } from "@/components/og/nba/NBAOgTemplate4";
import { NBAOgTemplate5 } from "@/components/og/nba/NBAOgTemplate5";
import { NBAOgTemplate6 } from "@/components/og/nba/NBAOgTemplate6";
import { NBAOgTemplate7 } from "@/components/og/nba/NBAOgTemplate7";
import { NBAOgTemplate8 } from "@/components/og/nba/NBAOgTemplate8";
import { NBAOgTemplate9 } from "@/components/og/nba/NBAOgTemplate9";
import { NBAOgTemplate10 } from "@/components/og/nba/NBAOgTemplate10";

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

import { NHLOgTemplate1 } from "@/components/og/nhl/NHLOgTemplate1";
import { NHLOgTemplate2 } from "@/components/og/nhl/NHLOgTemplate2";
import { NHLOgTemplate3 } from "@/components/og/nhl/NHLOgTemplate3";
import { NHLOgTemplate4 } from "@/components/og/nhl/NHLOgTemplate4";
import { NHLOgTemplate5 } from "@/components/og/nhl/NHLOgTemplate5";
import { NHLOgTemplate6 } from "@/components/og/nhl/NHLOgTemplate6";
import { NHLOgTemplate7 } from "@/components/og/nhl/NHLOgTemplate7";
import { NHLOgTemplate8 } from "@/components/og/nhl/NHLOgTemplate8";
import { NHLOgTemplate9 } from "@/components/og/nhl/NHLOgTemplate9";
import { NHLOgTemplate10 } from "@/components/og/nhl/NHLOgTemplate10";

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(
        (
            <NBAOgTemplate1
                teamName="Kansas City Chiefs"
                title="Patrick Mahomes agrees to restructured historic contract"
                snippet="The 3-time Super Bowl MVP secures an unprecedented financial guarantee package keeping him in Kansas City through 2030."
                imageUrl="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=1200&q=90"
                logoUrl={"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"}
            />
        ),
        {
            width: 1080,
            height: 1350,
            fonts,
        }
    );
}