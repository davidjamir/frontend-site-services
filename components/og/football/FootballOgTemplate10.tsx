import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 10. CYBER BROADCAST 4K / BREAKING NEWS TICKER
// ============================================================================
export function FootballOgTemplate10({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "BREAKING",
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
                backgroundColor: "#040711",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
            }}
        >
            {/* Top 65% Broadcast Feed Image */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "850px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "850px", objectFit: "cover" }} />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(4,7,17,0.7) 0%, transparent 40%, rgba(4,7,17,0.95) 100%)",
                    }}
                />
            </div>

            {/* Giant Crest Watermark in Lower Studio Chassis */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "-40px",
                        right: "-50px",
                        opacity: 0.14,
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "580px", height: "580px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Live TV On-Air Badge & Channel Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "45px",
                    left: "45px",
                    right: "45px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#E11D48",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            gap: "8px",
                            boxShadow: "0 6px 20px rgba(225,29,72,0.6)",
                        }}
                    >
                        <div style={{ display: "flex", width: "10px", height: "10px", borderRadius: "5px", backgroundColor: "#FFFFFF" }} />
                        <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>LIVE</span>
                    </div>
                    <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{sourceDomain || siteName}</span>
                </div>

                <div
                    style={{
                        display: "flex",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <span style={{ fontSize: "16px", color: accentColor, fontWeight: 700 }}>{statusLabel}</span>
                </div>
            </div>

            {/* Breaking News Ribbon */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "750px",
                    left: "0",
                    width: "1080px",
                    height: "48px",
                    backgroundColor: "#E11D48",
                    alignItems: "center",
                    paddingLeft: "50px",
                    gap: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                }}
            >
                <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: "#FFFFFF" }}>
                    BREAKING NEWS // {badgeTag}
                </span>
            </div>

            {/* Lower Third Chassis */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: "798px",
                    left: 0,
                    width: "1080px",
                    height: "552px",
                    backgroundColor: "#040711",
                    padding: "40px 50px 35px",
                    boxSizing: "border-box",
                }}
            >
                {/* Headline & Snippet */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "56px",
                            fontWeight: 900,
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            lineHeight: 0.94,
                            color: "#FFFFFF",
                            marginBottom: "18px",
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
                                borderLeft: `5px solid ${primaryColor}`,
                                paddingLeft: "20px",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                padding: "12px 18px",
                                borderRadius: "0 10px 10px 0",
                            }}
                        >
                            {snippet}
                        </div>
                    ) : null}
                </div>

                {/* Footer Broadcast Anchor Block */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        paddingTop: "18px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {logoUrl ? (
                            <div
                                style={{
                                    display: "flex",
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "18px",
                                    backgroundColor: "#0C101C",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "18px",
                                    border: `2px solid ${accentColor}`,
                                }}
                            >
                                <img src={logoUrl} alt={teamName} style={{ width: "56px", height: "56px", objectFit: "contain" }} />
                            </div>
                        ) : null}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "28px", fontWeight: 800, textTransform: "uppercase", color: "#FFFFFF" }}>{teamName}</span>
                            <span style={{ fontSize: "16px", color: accentColor, fontWeight: 700 }}>{timeAgo}</span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            padding: "8px 18px",
                            borderRadius: "10px",
                        }}
                    >
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "15px", color: "#94A3B8" }}>{authorRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}