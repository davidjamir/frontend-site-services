import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate7({
    teamName = "NEW YORK KNICKS",
    title = "MADISON SQUARE GARDEN ROARS AS KNICKS COMPLETE THRILLING RALLY",
    snippet = "New York overcomes an 18-point deficit in the final frame to ignite the home crowd and grab key postseason positioning.",
    imageUrl = "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
    titleItalic = true,
    accentColor = "#F58426",
    badgeTag = "POSTGAME PRESS CONFERENCE WIRE",
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
                backgroundColor: "#05070B",
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

            {/* Dark Overlay Gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(5,7,11,0.4) 0%, rgba(5,7,11,0.05) 35%, rgba(5,7,11,0.4) 75%, #05070B 100%)",
                }}
            />

            {/* Top Bar Header */}
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
                {/* Left Team Info Box */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(0,0,0, 0.15)",
                            border: `2px solid ${accentColor}`,
                            padding: "10px",
                            borderRadius: "12px",
                            marginRight: "16px",
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
                                }}
                            />
                        )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "24px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: accentColor,
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                marginTop: "2px",
                            }}
                        >
                            {badgeTag}
                        </div>
                    </div>
                </div>

                {/* Spacer đẩy Status Capsule sang phải */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Right Status Capsule */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        padding: "10px 22px",
                        borderRadius: "9999px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
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

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Bottom Main Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Quote Mark Icon */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "72px",
                        fontWeight: 900,
                        color: accentColor,
                        lineHeight: 0.8,
                        marginBottom: "16px",
                    }}
                >
                    “
                </div>

                {/* Main Title Header */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "52px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        color: "#FFFFFF",
                        lineHeight: 1.1,
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
                                lineHeight: 1.5,
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                </div>

                {/* Footer Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        paddingTop: "20px",
                    }}
                >
                    {/* Left Transcription Info */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        <div style={{ display: "flex" }}>TRANSCRIPTION: {author}</div>
                        {authorRole && (
                            <div
                                style={{
                                    display: "flex",
                                    color: "#94A3B8",
                                    fontWeight: 600,
                                    marginLeft: "8px",
                                    textTransform: "none",
                                }}
                            >
                                ({authorRole})
                            </div>
                        )}
                    </div>

                    {/* Spacer */}
                    <div style={{ display: "flex", flex: 1 }} />

                    {/* Right Source Domain */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
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