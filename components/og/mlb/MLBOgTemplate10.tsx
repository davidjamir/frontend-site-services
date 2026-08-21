import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate10({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#E31837",
    accentColor = "#FFB81C",
    badgeTag = "BREAKING NEWS",
    author = "Adam Schefter",
    authorRole = "ESPN Senior Insider",
    sourceDomain = "ESPN.COM/NBA",
    statusLabel = "JUST IN",
    timeAgo = "5 MINS AGO",
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