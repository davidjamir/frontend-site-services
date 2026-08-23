import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate8({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#01a355",
    accentColor = "#a8a398",
    badgeTag = "BREAKING NEWS",
    author = "Adam Schefter",
    authorRole = "ESPN Senior Insider",
    sourceDomain = "ESPN.COM/NFL",
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
                backgroundColor: "#090D16",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Background Photo & Gradients */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                    }}
                />
            )}

            {/* Clean Bottom Gradient Scrim */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        `linear-gradient(180deg, rgba(9,13,22,0.2) 0%, rgba(9,13,22,0.05) 25%, transparent 45%, rgba(9,13,22,0.6) 65%, #090D16 92%)`,
                    display: "flex",
                }}
            />

            {/* Architectural HUD Grid Lines Background */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                    display: "flex",
                }}
            />

            {/* Modern Outer Fine Border Framing */}
            <div
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    right: "20px",
                    bottom: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    display: "flex",
                }}
            />

            {/* 2. Top Header HUD Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "42px 48px 0 48px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <span
                    style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "rgba(255, 255, 255, 0.75)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                    }}
                >
                    NFL ANALYTICS
                </span>

                {/* Timestamp / Status Pill */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(9, 13, 22, 0.8)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        padding: "8px 16px",
                        borderRadius: "4px",
                    }}
                >
                    <span style={{ fontSize: "12px" }}>⏱️</span>
                    <span
                        style={{
                            fontSize: "12px",
                            color: "#E2E8F0",
                            fontWeight: 700,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </span>
                </div>
            </div>

            {/* 3. Floating Team Logo (Rounded Black Box with Neon Border) */}
            {logoUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: "140px",
                        right: "48px",
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            width: "210px",
                            height: "210px",
                            backgroundColor: "transparent",
                            border: `2px solid ${primaryColor}`,
                            borderRadius: "28px",
                            padding: "15px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: ` 0 0 40px ${primaryColor}99`,
                            boxSizing: "border-box",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}

            {/* 4. Lower Tech Data Payload Content */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 48px 48px 48px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Badges Row: Breaking News Tag + Team Name Pill */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginBottom: "16px",
                    }}
                >
                    {/* Red Breaking Badge */}
                    <div
                        style={{
                            backgroundColor: "#E31837",
                            padding: "6px 14px",
                            borderRadius: "2px",
                            display: "flex",
                        }}
                    >
                        <span
                            style={{
                                color: "#FFFFFF",
                                fontSize: "14px",
                                fontWeight: 800,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>

                    {/* Translucent Team Name Capsule */}
                    <div
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                            border: `0.5px solid ${primaryColor}`,
                            padding: "6px 16px",
                            borderRadius: "4px",
                            display: "flex",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "14px",
                                fontWeight: 800,
                                color: accentColor,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </span>
                    </div>
                </div>

                {/* Main Headline Title */}
                <h1
                    style={{
                        fontSize: "54px",
                        lineHeight: 1.04,
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 22px 0",
                        letterSpacing: "-0.5px",
                        textShadow: "0 4px 20px rgba(0,0,0,0.95)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Card with Left Red Line Accent */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(14, 20, 34, 0.94)",
                            borderLeft: `5px solid ${primaryColor}`,
                            borderTop: "1px solid rgba(255,255,255,0.08)",
                            borderRight: "1px solid rgba(255,255,255,0.08)",
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "0 8px 8px 0",
                            padding: "22px 28px",
                            marginBottom: "24px",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "21px",
                                lineHeight: 1.45,
                                fontWeight: 600,
                                color: "#F1F5F9",
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                )}

                {/* Footer Telemetry */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        paddingTop: "18px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span
                            style={{
                                fontSize: "13px",
                                color: "#94A3B8",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                fontWeight: 700,
                            }}
                        >
                            REPORTED BY
                        </span>
                        <span
                            style={{
                                fontSize: "14px",
                                color: "#FFFFFF",
                                fontWeight: 800,
                                letterSpacing: "0.5px",
                            }}
                        >
                            {authorRole ? `${author} • ${authorRole}` : author}
                        </span>
                    </div>

                    <span
                        style={{
                            fontSize: "13px",
                            color: accentColor,
                            fontWeight: 800,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}
