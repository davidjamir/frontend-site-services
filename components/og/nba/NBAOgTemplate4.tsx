import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate4({
    teamName = "New York Knicks",
    title = "MADISON SQUARE GARDEN ROARS AS KNICKS COMPLETE THRILLING RALLY",
    snippet = "New York overcomes an 18-point deficit in the final frame to ignite the home crowd and grab key postseason positioning.",
    imageUrl = "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
    titleItalic = true,
    primaryColor = "#006BB6",
    accentColor = "#FFE500",
    badgeTag = "BREAKING NEWS",
    author = "Ian Begley",
    authorRole = "SNY TV Lead NBA Insider",
    sourceDomain = "SNY.TV/KNICKS",
    statusLabel = "JUST IN",
    timeAgo = "7 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0A0A0A",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                // fontFamily: '"Impact", sans-serif',
            }}
        >
            <img
                src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200&auto=format&fit=crop"
                alt="MADISON SQUARE GARDEN ROARS AS KNICKS COMPLETE THRILLING RALLY"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.8) 55%, #0A0A0A 92%)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "1080px",
                    padding: "38px 48px 0 48px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <span
                    style={{
                        fontSize: "110px",
                        lineHeight: "90px",
                        fontWeight: 900,
                        color: "#FFFFFF",
                        letterSpacing: "-2px",
                    }}
                >
                    SLAM
                </span>
                <img
                    src="https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg"
                    alt="New York Knicks"
                    style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
            </div>
            <div style={{ display: "flex", flex: 1 }} />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 48px 48px 48px",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        backgroundColor: "#FFE500",
                        color: "#000000",
                        padding: "8px 24px",
                        alignSelf: "flex-start",
                        marginBottom: "16px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "15px",
                            fontWeight: 900,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        ★ BREAKING NEWS • JUST IN
                    </span>
                </div>
                <h1
                    style={{
                        fontSize: "66px",
                        lineHeight: 0.98,
                        fontWeight: 900,
                        fontStyle: "italic",
                        color: "#FFFFFF",
                        margin: "0 0 18px 0",
                        textTransform: "uppercase",
                    }}
                >
                    MADISON SQUARE GARDEN ROARS AS KNICKS COMPLETE THRILLING RALLY
                </h1>
                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,0.92)",
                        borderLeft: "6px solid #006BB6",
                        padding: "18px 24px",
                        marginBottom: "18px",
                    }}
                >
                    <p
                        style={{
                            fontSize: "20px",
                            color: "#E2E8F0",
                            lineHeight: 1.4,
                            margin: 0,
                            // fontFamily: "system-ui, sans-serif",
                        }}
                    >
                        New York overcomes an 18-point deficit in the final frame to ignite
                        the home crowd and grab key postseason positioning.
                    </p>
                </div>
            </div>
        </div>
    );
}
