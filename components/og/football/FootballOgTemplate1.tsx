import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 1. APEX TRANSFER / FROSTED OVERLAY & WATERMARK
// ============================================================================
export function FootballOgTemplate1({
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
                backgroundColor: "#04060A",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                position: "relative",
            }}
        >
            {/* Layer 1: Full Background Image */}
            <div style={{ display: "flex", width: "1080px", height: "1350px", position: "absolute", top: 0, left: 0 }}>
                <img
                    src={imageUrl}
                    referrerPolicy="no-referrer"
                    style={{ width: "1080px", height: "1350px", objectFit: "cover" }}
                />
            </div>

            {/* Layer 2: Vignette Overlays & Atmospheric Lighting */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background: "linear-gradient(180deg, rgba(4,6,10,0.85) 0%, rgba(4,6,10,0.2) 35%, rgba(4,6,10,0.85) 65%, rgba(4,6,10,0.98) 100%)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "650px",
                    height: "650px",
                    background: `radial-gradient(circle, ${primaryColor}55 0%, transparent 70%)`,
                }}
            />

            {/* Layer 3: Giant Watermark Logo */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "120px",
                        right: "-60px",
                        opacity: 0.12,
                        transform: "rotate(-8deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "520px", height: "520px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Layer 4: Top Navigation & Status Header */}
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
                {/* Angled Breaking Badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: primaryColor,
                        padding: "12px 28px",
                        borderRadius: "6px",
                        transform: "skewX(-10deg)",
                        boxShadow: `0 10px 30px ${primaryColor}66`,
                        border: `2px solid ${accentColor}`,
                    }}
                >
                    <span
                        style={{
                            fontSize: "24px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            transform: "skewX(10deg)",
                        }}
                    >
                        {badgeTag}
                    </span>
                </div>

                {/* Status & Live Pulse Pill */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(10,14,24,0.85)",
                        padding: "10px 24px",
                        borderRadius: "40px",
                        border: "1px solid rgba(255,255,255,0.3)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "12px",
                            height: "12px",
                            borderRadius: "6px",
                            backgroundColor: accentColor,
                            marginRight: "12px",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "20px",
                            color: accentColor,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            marginRight: "10px",
                            letterSpacing: "1.5px",
                        }}
                    >
                        {statusLabel}
                    </span>
                    <span style={{ fontSize: "18px", color: "#94A3B8", fontWeight: 600 }}>• {timeAgo}</span>
                </div>
            </div>

            {/* Layer 5: Lower-Third Content Panel */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "40px",
                    left: "40px",
                    right: "40px",
                    padding: "45px 50px 40px",
                    backgroundColor: "rgba(8,12,22,0.92)",
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.85)",
                }}
            >
                {/* Accent Top Border Glow Stripe */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: "40px",
                        right: "40px",
                        height: "4px",
                        background: `linear-gradient(90deg, ${primaryColor}, ${accentColor}, transparent)`,
                    }}
                />

                {/* Floating Crest Shield */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "-55px",
                            right: "45px",
                            width: "120px",
                            height: "120px",
                            backgroundColor: "#0B0F19",
                            borderRadius: "30px",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `3px solid ${accentColor}`,
                            boxShadow: "0 16px 40px rgba(0,0,0,0.9)",
                        }}
                    >
                        <img src={logoUrl} alt={teamName} style={{ width: "82px", height: "82px", objectFit: "contain" }} />
                    </div>
                ) : null}

                {/* Main Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "54px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        lineHeight: 0.96,
                        color: "#FFFFFF",
                        marginBottom: "22px",
                        width: "820px",
                    }}
                >
                    {title}
                </div>

                {/* Transfer Details Snippet */}
                {snippet ? (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            color: "#CBD5E1",
                            lineHeight: 1.45,
                            marginBottom: "30px",
                            width: "900px",
                        }}
                    >
                        {snippet}
                    </div>
                ) : null}

                {/* Footer: Team Identity & Author Badge */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "22px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "5px",
                                height: "38px",
                                backgroundColor: accentColor,
                                borderRadius: "2px",
                                marginRight: "16px",
                            }}
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    fontSize: "26px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                {teamName}
                            </span>
                            <span style={{ fontSize: "18px", color: accentColor, fontWeight: 700, marginTop: "2px" }}>
                                {sourceDomain || siteName}
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            padding: "10px 22px",
                            borderRadius: "14px",
                            border: "1px solid rgba(255,255,255,0.12)",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "14px" }}>
                            <span style={{ fontSize: "22px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                            <span style={{ fontSize: "16px", color: "#94A3B8" }}>{authorRole}</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "28px",
                                height: "28px",
                                borderRadius: "14px",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFFFFF",
                                fontSize: "16px",
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