import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 3. EDITORIAL HORIZON / FULL-WIDTH EDGE-TO-EDGE
// ============================================================================
export function FootballOgTemplate3({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "HERE WE GO!",
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
                backgroundColor: "#06080F",
                overflow: "hidden",
                fontFamily: "sans-serif",
                color: "#FFFFFF",
                position: "relative",
            }}
        >
            {/* Top 62% Full-Bleed Horizontal Image */}
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
                        background: "linear-gradient(180deg, rgba(6,8,15,0.75) 0%, rgba(6,8,15,0.1) 35%, rgba(6,8,15,0.85) 80%, #06080F 100%)",
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
                        background: `radial-gradient(circle at 85% 20%, ${primaryColor}55 0%, transparent 60%)`,
                    }}
                />
            </div>

            {/* Giant Crest Watermark Across Horizon Boundary */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "540px",
                        right: "-60px",
                        opacity: 0.14,
                        transform: "rotate(-8deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "620px", height: "620px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Top Header Floating Navigation Bar */}
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
                {/* Team Tag & Crest */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        backgroundColor: "rgba(6,8,15,0.85)",
                        padding: "8px 20px 8px 10px",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    {logoUrl ? (
                        <div
                            style={{
                                display: "flex",
                                width: "50px",
                                height: "50px",
                                borderRadius: "12px",
                                backgroundColor: "#0E1422",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `2px solid ${accentColor}`,
                            }}
                        >
                            <img src={logoUrl} alt={teamName} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
                        </div>
                    ) : null}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "20px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px", color: "#FFFFFF" }}>
                            {teamName}
                        </span>
                        <span style={{ fontSize: "14px", color: accentColor, fontWeight: 800 }}>{siteName}</span>
                    </div>
                </div>

                {/* Badge Tag */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        padding: "10px 24px",
                        borderRadius: "8px",
                        fontSize: "20px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        border: `1.5px solid ${accentColor}`,
                        boxShadow: `0 8px 24px ${primaryColor}66`,
                    }}
                >
                    {badgeTag}
                </div>
            </div>

            {/* Floating Live Indicator on Top Image */}
            <div style={{ display: "flex", position: "absolute", top: "135px", left: "45px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        padding: "6px 16px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "4px", backgroundColor: accentColor }} />
                    <span style={{ fontSize: "15px", color: "#FFFFFF", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>
                        {statusLabel}
                    </span>
                </div>
            </div>

            {/* Glowing Accent Horizon Divider Bar */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "790px",
                    left: 0,
                    width: "1080px",
                    height: "4px",
                    background: `linear-gradient(90deg, ${accentColor}, ${primaryColor}, transparent)`,
                }}
            />

            {/* Bottom Content Chassis */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: "794px",
                    left: 0,
                    width: "1080px",
                    height: "556px",
                    backgroundColor: "#06080F66",
                    padding: "45px 55px 40px",
                    boxSizing: "border-box",
                }}
            >
                {/* Headline Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "54px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            lineHeight: 0.94,
                            color: "#FFFFFF",
                            marginBottom: "20px",
                        }}
                    >
                        {title}
                    </div>

                    {/* Styled Snippet Box */}
                    {snippet ? (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "24px",
                                color: "#CBD5E1",
                                lineHeight: 1.45,
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderLeft: `6px solid ${accentColor}`,
                                padding: "16px 22px",
                                backgroundColor: "rgba(255,255,255,0.04)",
                                borderRadius: "0 14px 14px 0",
                            }}
                        >
                            {snippet}
                        </div>
                    ) : null}
                </div>

                {/* Footer Brand & Author Stamp */}
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
                        <span style={{ fontSize: "22px", fontWeight: 800, color: accentColor, textTransform: "uppercase", letterSpacing: "1px" }}>
                            {sourceDomain || siteName}
                        </span>
                        <span style={{ fontSize: "18px", color: "#64748B" }}>•</span>
                        <span style={{ fontSize: "18px", color: "#94A3B8", fontWeight: 600 }}>{timeAgo}</span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(255,255,255,0.05)",
                            padding: "8px 20px",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "12px" }}>
                            <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                            <span style={{ fontSize: "15px", color: "#94A3B8" }}>{authorRole}</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "24px",
                                height: "24px",
                                borderRadius: "12px",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFFFFF",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ display: "flex" }}
                            >
                                <path
                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.35 1.273 2.72 2.148 4.3 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                                    fill="#1D9BF0"
                                />
                                <path
                                    d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}