import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate7({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "SPECIAL FEATURE",
    timeAgo = "TOKYO // URBAN AFFAIRS DESK",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#0B0F19",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed Background Photo */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt=""
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

            {/* Atmospheric Dark Overlay Gradient */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(11,15,25,0.7) 0%, rgba(11,15,25,0.2) 35%, rgba(11,15,25,0.7) 65%, rgba(11,15,25,0.96) 100%)",
                }}
            />

            {/* 2. Signature Left Vertical Pillar in Dynamic Primary Color */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "14px",
                    height: "1350px",
                    backgroundColor: primaryColor,
                }}
            />

            {/* 3. Top Header Bar: Logo Left + Status Tag Right (Absolute) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "54px",
                    left: "80px",
                    width: "940px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo with explicit pixel dimensions for Satori */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "50px" }}>
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            style={{
                                width: "220px",
                                height: "50px",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "26px",
                                fontWeight: 900,
                                color: accentColor,
                                letterSpacing: "3px",
                                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "8px 22px",
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        borderRadius: "4px",
                        fontSize: "13px",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                    }}
                >
                    {badgeTag}
                </div>
            </div>

            {/* 4. Center-Lower Geometric Card (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "105px",
                    left: "80px",
                    width: "940px",
                    gap: "22px",
                    padding: "50px 54px",
                    backgroundColor: "rgba(11, 15, 25, 0.88)",
                    borderRadius: "16px",
                    border: `1.5px solid ${primaryColor}`,
                    boxShadow: `0 30px 60px rgba(0, 0, 0, 0.85), 0 0 24px ${primaryColor}50`,
                    boxSizing: "border-box",
                }}
            >
                {/* Category Pill Tag */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 700,
                            color: accentColor,
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            border: `1px solid ${primaryColor}`,
                            padding: "6px 18px",
                            borderRadius: "4px",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>

                {/* Massive Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "44px",
                        lineHeight: 1.15,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.5px",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textShadow: "0 2px 12px rgba(0,0,0,0.9)",
                    }}
                >
                    {title}
                </div>

                {/* Excerpt */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "21px",
                            lineHeight: 1.5,
                            color: "#F1F5F9",
                            maxWidth: "830px",
                            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                        }}
                    >
                        {snippet}
                    </div>
                )}

                {/* Footer Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "20px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.14)",
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#94A3B8",
                    }}
                >
                    <span style={{ color: "#E2E8F0", fontWeight: 700 }}>{timeAgo}</span>
                    <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>{sourceDomain}</span>
                </div>
            </div>

        </div>
    );
}
