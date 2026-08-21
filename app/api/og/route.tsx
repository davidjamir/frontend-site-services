import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";
import { NFLOgTemplate9 } from "@/components/og/nfl/NFLOgTemplate9";

export async function GET() {
    const fonts = await getOgFonts();

    return new ImageResponse(
        (
            <NFLOgTemplate9
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