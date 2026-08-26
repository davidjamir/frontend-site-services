import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 8. OPTA STATS MATRIX / FULL-BLEED ANALYTICS
// ============================================================================
export function FootballOgTemplate8({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "OPTA INDEX",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "OPTA ANALYTICS",
    statusLabel = "CONFIRMED",
    timeAgo = "JUST NOW",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#050811",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
            }}
        >
            {/* Top 62% Full-Bleed Action Photography */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "820px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "820px", objectFit: "cover" }} />
                {/* Advanced Data-Grid Darkening Gradient */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "820px",
                        background: "linear-gradient(180deg, rgba(5,8,17,0.05) 0%, rgba(5,8,17,0.05) 50%, rgba(5,8,17,0.7) 85%, #050811 100%)",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "820px",
                        background: `radial-gradient(circle at 85% 25%, ${primaryColor}55 0%, transparent 65%)`,
                    }}
                />
            </div>

            {/* Giant Crest Watermark Across Analytics Chassis */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "20px",
                        right: "-50px",
                        opacity: 0.14,
                        transform: "rotate(-5deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "620px", height: "620px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Full-Width Precision Data Scanline */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "770px",
                    left: 0,
                    width: "1080px",
                    height: "4px",
                    background: `linear-gradient(90deg, ${accentColor}, ${primaryColor}, transparent)`,
                    boxShadow: `0 0 20px ${accentColor}`,
                }}
            />

            {/* Top Precision Header Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "45px",
                    left: "55px",
                    right: "55px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    {logoUrl ? (
                        <div
                            style={{
                                display: "flex",
                                width: "65px",
                                height: "65px",
                                borderRadius: "16px",
                                backgroundColor: "#0B101C",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `2px solid ${accentColor}`,
                                boxShadow: "0 8px 25px rgba(0,0,0,0.7)",
                            }}
                        >
                            <img src={logoUrl} alt={teamName} style={{ width: "46px", height: "46px", objectFit: "contain" }} />
                        </div>
                    ) : null}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "28px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FFFFFF" }}>
                            {teamName}
                        </span>
                        <span style={{ fontSize: "15px", color: accentColor, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px" }}>
                            {siteName}
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        padding: "10px 24px",
                        borderRadius: "6px",
                        fontSize: "18px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        border: `1.5px solid ${accentColor}`,
                        boxShadow: `0 6px 20px ${primaryColor}66`,
                    }}
                >
                    {badgeTag}
                </div>
            </div>

            {/* Live Competition Tag Pill */}
            <div style={{ display: "flex", position: "absolute", top: "135px", left: "55px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        padding: "8px 20px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <span style={{ color: accentColor, fontSize: "16px", fontWeight: 800, textTransform: "uppercase" }}>{statusLabel}</span>
                    <span style={{ color: "#64748B" }}>|</span>
                    <span style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 700 }}>{timeAgo}</span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "50px",
                    left: "55px",
                    right: "55px",
                }}
            >
                {/* Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "56px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        lineHeight: 0.94,
                        color: "#FFFFFF",
                        marginBottom: "22px",
                    }}
                >
                    {title}
                </div>

                {/* Details Snippet */}
                {snippet ? (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "#CBD5E1",
                            lineHeight: 1.45,
                            backgroundColor: "rgba(255,255,255,0.04)",
                            padding: "20px 26px",
                            borderRadius: "16px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            marginBottom: "30px",
                        }}
                    >
                        {snippet}
                    </div>
                ) : null}

                {/* Footer Precision Matrix */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        paddingTop: "20px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "20px", color: "#94A3B8" }}>{sourceDomain || siteName}</span>
                        <span style={{ fontSize: "18px", color: "#64748B" }}>•</span>
                        <span style={{ fontSize: "18px", color: accentColor, fontWeight: 800 }}>{timeAgo}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>{authorRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}