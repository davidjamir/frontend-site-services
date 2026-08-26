import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 7. HIGH-FASHION SPORTS MAGAZINE / 433 EDITORIAL COVER
// ============================================================================
export function FootballOgTemplate7({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    accentColor = "#FEBE10",
    badgeTag = "MAGAZINE",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "FOOTBALL",
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
                backgroundColor: "#070A10",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                position: "relative",
                padding: "50px",
                boxSizing: "border-box",
            }}
        >
            {/* Hero Image Container */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "1350px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "1350px", objectFit: "cover" }} />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(7,10,16,0.9) 0%, rgba(7,10,16,0.15) 30%, rgba(7,10,16,0.85) 70%, rgba(7,10,16,0.98) 100%)",
                    }}
                />
            </div>

            {/* Giant Crest Watermark in Upper/Center Region */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "180px",
                        right: "-40px",
                        opacity: 0.14,
                        transform: "rotate(10deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "540px", height: "540px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Top Magazine Masthead */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    borderBottom: `2px solid ${accentColor}`,
                    paddingBottom: "16px",
                    width: "100%",
                }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        {logoUrl ? (
                            <div
                                style={{
                                    display: "flex",
                                    width: "55px",
                                    height: "55px",
                                    borderRadius: "14px",
                                    backgroundColor: "#0C101C",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: `2px solid ${accentColor}`,
                                }}
                            >
                                <img src={logoUrl} alt={teamName} style={{ width: "38px", height: "38px", objectFit: "contain" }} />
                            </div>
                        ) : null}
                        <span style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "8px", textTransform: "uppercase", color: "#FFFFFF" }}>
                            {sourceDomain || siteName}
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: accentColor,
                                color: "#000000",
                                padding: "8px 20px",
                                borderRadius: "4px",
                                fontSize: "16px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </div>
                        <span style={{ fontSize: "16px", color: "#94A3B8", fontWeight: 700 }}>EDITION 2026</span>
                    </div>
                </div>
            </div>

            {/* Floating Tag Pill on Image */}
            <div style={{ display: "flex", position: "absolute", top: "260px", left: "60px" }}>
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        padding: "10px 18px",
                        borderRadius: "20px",
                        color: accentColor,
                        fontSize: "16px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                    }}
                >
                    {statusLabel} • {teamName}
                </div>
            </div>

            {/* Bottom Editorial Content */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "50px",
                    left: "50px",
                    right: "50px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontSize: "64px",
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

                {snippet ? (
                    <div style={{ display: "flex", fontSize: "24px", color: "#FFFFFF", lineHeight: 1.45, marginBottom: "28px", width: "900px" }}>
                        {snippet}
                    </div>
                ) : null}

                {/* Footer Credits */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                        paddingTop: "18px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>{authorRole}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "16px", color: accentColor, fontWeight: 800 }}>{teamName}</span>
                        <span style={{ fontSize: "16px", color: "#64748B" }}>|</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>{timeAgo}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}