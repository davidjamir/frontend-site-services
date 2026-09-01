import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate8({
    teamName = "LOS ANGELES LAKERS",
    title = "LAKERS SECURE DRAMATIC OVERTIME VICTORY IN GAME 7 SHOWDOWN",
    snippet = "LeBron James orchestrates a masterclass performance in the 4th quarter to seal the victory at Crypto.com Arena.",
    imageUrl = "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    titleItalic = true,
    accentColor = "#FDB927",
    badgeTag = "BREAKING NEWS",
    author = "Shams Charania",
    authorRole = "Senior NBA Insider",
    sourceDomain = "THEATHLETIC.COM/NBA",
    statusLabel = "JUST IN",
    timeAgo = "4 MINS AGO",
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
            {/* Background Image */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                    }}
                />
            )}

            {/* Dark Gradient Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(7,8,12,0.6) 0%, rgba(7,8,12,0.1) 35%, rgba(7,8,12,0.5) 70%, #07080C 95%)",
                }}
            />

            {/* Top Header Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "1080px",
                    padding: "50px 50px 0 50px",
                    position: "relative",
                }}
            >
                {/* Top Left Branding */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#000000",
                            border: `2px solid ${accentColor}`,
                            padding: "10px 20px",
                            borderRadius: "6px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            NBA PRIMETIME
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: accentColor,
                            marginLeft: "16px",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        MATCHDAY WIRE
                    </div>
                </div>

                {/* Spacer */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Top Right Team Capsule */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0)",
                        border: `1px solid rgba(255, 255, 255, 0.5)`,
                        padding: "5px 12px",
                        borderRadius: "8px",
                    }}
                >
                    {logoUrl && (
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "contain",
                                marginRight: "10px",
                            }}
                        />
                    )}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </div>
                </div>
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Bottom Main Content Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Badges Row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    {/* Yellow Primary Tag */}
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: accentColor,
                            color: "#FFFFFF",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            marginRight: "12px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            ⚡ {badgeTag}
                        </div>
                    </div>

                    {/* Time & Status Capsule */}
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            padding: "8px 18px",
                            borderRadius: "4px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel} • {timeAgo}
                        </div>
                    </div>
                </div>

                {/* Main Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "56px",
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        color: "#FFFFFF",
                        lineHeight: 1.05,
                        marginBottom: "28px",
                        letterSpacing: "-0.5px",
                        textTransform: "uppercase",
                    }}
                >
                    {title}
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        marginBottom: "28px",
                    }}
                >
                    {/* LAYER PHÍA SAU — render trước */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "0",
                            left: "-6px",
                            right: "0",
                            bottom: "0",
                            backgroundColor: accentColor,
                            borderRadius: "12px",
                        }}
                    />

                    {/* CARD PHÍA TRƯỚC — render sau nên nằm trên */}
                    <div
                        style={{
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                            backgroundColor: "rgb(0,0,0)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            padding: "24px 28px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#E2E8F0",
                                lineHeight: 1.4,
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                </div>

                {/* Footer Meta Row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        paddingTop: "20px",
                    }}
                >
                    {/* Author Info */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        REPORT: {author} {authorRole ? `• ${authorRole}` : ""}
                    </div>

                    {/* Spacer */}
                    <div style={{ display: "flex", flex: 1 }} />

                    {/* Source Domain */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: accentColor,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain}
                    </div>
                </div>
            </div>
        </div>
    );
}