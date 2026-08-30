import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate9({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "SPECIAL SPOTLIGHT",
    timeAgo = "SAN FRANCISCO // 20 MIN AGO",
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
                backgroundColor: "#030712",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed Atmospheric Background Photo */}
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

            {/* Atmospheric Vignette */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(3,7,18,0.4) 0%, rgba(3,7,18,0.1) 30%, rgba(3,7,18,0.4) 60%, rgba(3,7,18,0.92) 100%)",
                }}
            />

            {/* 2. Top Header (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "48px",
                    left: "50px",
                    width: "980px",
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
                                fontWeight: 700,
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
                        gap: "8px",
                        color: accentColor,
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    }}
                >
                    <span>PRISM SPOTLIGHT</span>
                </div>
            </div>

            {/* 3. Main Translucent Prism Glass Card (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "105px",
                    left: "50px",
                    width: "980px",
                    gap: "24px",
                    padding: "48px 52px",
                    backgroundColor: "rgba(15, 23, 42, 0.78)",
                    borderRadius: "16px",
                    border: `1.5px solid rgba(255, 255, 255, 0.25)`,
                    boxShadow:
                        "0 32px 64px -10px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
                    boxSizing: "border-box",
                }}
            >
                {/* Top Card Row: BREAKING NEWS Pill + Status */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                    }}
                >
                    {/* Breaking News Badge */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 20px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "4px",
                            color: primaryColor,
                            fontSize: "13px",
                            fontWeight: 800,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: primaryColor,
                                boxShadow: `0 0 8px ${primaryColor}`,
                            }}
                        />
                        <span>{badgeTag || "BREAKING NEWS"}</span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "12px",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 700,
                            color: accentColor,
                            backgroundColor: "rgba(255, 255, 255, 0.16)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            padding: "6px 16px",
                            borderRadius: "8px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>

                {/* Clean Modern Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "44px",
                        lineHeight: 1.15,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.5px",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textShadow: "0 3px 18px rgba(0,0,0,0.9)",
                    }}
                >
                    {title}
                </div>

                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "21px",
                            lineHeight: 1.5,
                            color: "#F1F5F9",
                            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                        }}
                    >
                        {snippet}
                    </div>
                )}
            </div>

            {/* 4. Bottom Footer (Absolute) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: "44px",
                    left: "50px",
                    width: "980px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#94A3B8",
                    textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                }}
            >
                <span style={{ color: "#E2E8F0", fontWeight: 700 }}>{timeAgo}</span>
                <span style={{ color: primaryColor, fontWeight: 700 }}>{sourceDomain}</span>
            </div>
        </div>
    );
}
