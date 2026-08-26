import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 2. DIAGONAL KINETIC / DERBY CLASH
// ============================================================================
export function FootballOgTemplate2({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "MATCHDAY LIVE",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "SKY SPORTS",
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
                backgroundColor: "#05070C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
            }}
        >
            {/* Top 62% Hero Photo Area */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "820px", overflow: "hidden" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "820px", objectFit: "cover" }} />
                {/* Cinematic Vignette */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "820px",
                        background: "linear-gradient(180deg, rgba(5,7,12,0.7) 0%, transparent 40%, rgba(5,7,12,0.95) 100%)",
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
                        background: `radial-gradient(circle at 10% 20%, ${primaryColor}55 0%, transparent 60%)`,
                    }}
                />
            </div>

            {/* Top Navigation Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "45px",
                    left: "50px",
                    right: "50px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: accentColor,
                            color: "#000000",
                            padding: "10px 24px",
                            fontSize: "22px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "2.5px",
                            transform: "skewX(-12deg)",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.6)",
                        }}
                    >
                        <span style={{ transform: "skewX(12deg)" }}>{badgeTag}</span>
                    </div>
                    <span
                        style={{
                            display: "flex",
                            fontSize: "22px",
                            color: "rgba(255,255,255,0.85)",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                        }}
                    >
                        {siteName}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        padding: "12px 22px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <span style={{ fontSize: "18px", color: accentColor, fontWeight: 800, letterSpacing: "1px" }}>{statusLabel}</span>
                </div>
            </div>

            {/* Speed Diagonal Neon Laser Bars Across Horizon */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "720px",
                    left: "-60px",
                    width: "1200px",
                    height: "8px",
                    backgroundColor: accentColor,
                    transform: "rotate(-3.5deg)",
                    boxShadow: `0 0 24px ${accentColor}`,
                }}
            />
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "736px",
                    left: "-60px",
                    width: "1200px",
                    height: "4px",
                    backgroundColor: primaryColor,
                    transform: "rotate(-3.5deg)",
                }}
            />

            {/* Bottom Dark Chassis with Content */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: "740px",
                    left: 0,
                    width: "1080px",
                    height: "610px",
                    backgroundColor: "transparent",
                    padding: "50px 60px 45px",
                }}
            >
                {/* Giant Crest Watermark inside chassis */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            bottom: "-40px",
                            right: "-50px",
                            opacity: 0.12,
                        }}
                    >
                        <img src={logoUrl} alt={teamName} style={{ width: "580px", height: "580px", objectFit: "contain" }} />
                    </div>
                ) : null}

                {/* Main Headline */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "54px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            lineHeight: 0.94,
                            marginBottom: "22px",
                            color: "#FFFFFF",
                        }}
                    >
                        {title}
                    </div>

                    {snippet ? (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "24px",
                                color: "#CBD5E1",
                                lineHeight: 1.45,
                                borderLeft: `5px solid ${accentColor}`,
                                paddingLeft: "20px",
                                backgroundColor: "rgba(255,255,255,0.03)",
                                padding: "14px 20px",
                                borderRadius: "0 12px 12px 0",
                            }}
                        >
                            {snippet}
                        </div>
                    ) : null}
                </div>

                {/* Footer Club Identity Block */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        paddingTop: "24px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {logoUrl ? (
                            <div
                                style={{
                                    display: "flex",
                                    width: "95px",
                                    height: "95px",
                                    borderRadius: "22px",
                                    backgroundColor: "#0D111A",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "22px",
                                    border: `2px solid ${primaryColor}`,
                                    boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
                                }}
                            >
                                <img src={logoUrl} alt={teamName} style={{ width: "68px", height: "68px", objectFit: "contain" }} />
                            </div>
                        ) : null}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "32px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#FFFFFF" }}>
                                {teamName}
                            </span>
                            <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                                <span style={{ fontSize: "20px", color: accentColor, fontWeight: 800 }}>{timeAgo}</span>
                                <span style={{ fontSize: "20px", color: "#64748B", margin: "0 10px" }}>•</span>
                                <span style={{ fontSize: "20px", color: "#94A3B8", fontWeight: 600 }}>{sourceDomain || siteName}</span>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            padding: "10px 20px",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        <span style={{ fontSize: "22px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8", marginTop: "2px" }}>{authorRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}