import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate5({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CE1126",
    accentColor = "#A2AAAD",
    badgeTag = "GAME RECAP",
    author = "Elliotte Friedman",
    authorRole = "NHL Network Insider",
    sourceDomain = "SPORTSNET.CA",
    statusLabel = "OFFICIAL TRADE",
    timeAgo = "15 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#07080C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
        </div>
    );
}

