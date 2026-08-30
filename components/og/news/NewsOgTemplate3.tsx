import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate3({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "EMERGENCY LOCKDOWN",
    timeAgo = "10 MAY 2026",
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
                backgroundColor: "#080A10",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed Background Image */}
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

            {/* Atmospheric Vignette & Darkness Gradient */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(8,10,16,0.65) 0%, rgba(8,10,16,0.2) 30%, rgba(8,10,16,0.7) 65%, rgba(8,10,16,0.98) 100%)",
                }}
            />

            {/* 2. Top Bar (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "60px",
                    left: "64px",
                    width: "952px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Left: LIVE Tag or Logo */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            style={{
                                width: "200px",
                                height: "48px",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                                backgroundColor: primaryColor,
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                borderRadius: "999px",
                                fontSize: "14px",
                                fontWeight: 900,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                boxShadow: `0 0 16px ${primaryColor}99`,
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFFFFF",
                                }}
                            />
                            <span>LIVE</span>
                        </div>
                    )}
                </div>

                {/* Right: Date Stamped Display */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        lineHeight: 1.15,
                        textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                    }}
                >
                    <span
                        style={{
                            color: primaryColor,
                            fontSize: "22px",
                            fontWeight: 800,
                            letterSpacing: "1px",
                        }}
                    >
                        {timeAgo.split(" ")[0] || "10"} {timeAgo.split(" ")[1] || "MAY"}
                    </span>
                    <span
                        style={{
                            color: accentColor,
                            fontSize: "18px",
                            fontWeight: 800,
                            letterSpacing: "1px",
                        }}
                    >
                        {timeAgo.split(" ")[2] || "2026"}
                    </span>
                </div>
            </div>

            {/* 3. Center/Lower Kinetic Typography Block & Card (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "90px",
                    left: "64px",
                    width: "952px",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "24px",
                }}
            >
                {/* Giant Kinetic BREAKING + NEWS Composite Typography */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        textShadow: "0 4px 24px rgba(0,0,0,0.9)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "72px",
                            lineHeight: 1,
                            fontWeight: 900,
                            fontStyle: "italic",
                            letterSpacing: "-1px",
                            color: accentColor,
                            textTransform: "uppercase",
                        }}
                    >
                        BREAKING
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "72px",
                            lineHeight: 1,
                            fontWeight: 900,
                            letterSpacing: "-1px",
                            color: accentColor,
                            textTransform: "uppercase",
                            backgroundColor: primaryColor,
                            padding: "8px 22px",
                            borderRadius: "4px",
                            transform: "skewX(-14deg)",
                        }}
                    >
                        NEWS
                    </div>
                </div>

                {/* Framed Glass Card Box around Title and Snippet */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "952px",
                        backgroundColor: "rgba(10, 15, 26, 0.88)",
                        borderRadius: "16px",
                        border: `2px solid ${primaryColor}`,
                        padding: "36px 44px",
                        boxShadow: `0 20px 40px rgba(0,0,0,0.8), 0 0 20px ${primaryColor}40`,
                        alignItems: "center",
                        gap: "16px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Status/Category Tag */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "6px 20px",
                                backgroundColor: accentColor,
                                color: "#000000",
                                borderRadius: "4px",
                                fontSize: "13px",
                                fontWeight: 800,
                                fontFamily: "'JetBrains Mono', monospace",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
                            }}
                        >
                            {statusLabel}
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "28px",
                            lineHeight: 1.4,
                            fontWeight: 800,
                            color: "#FFFFFF",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "19px",
                                lineHeight: 1.5,
                                color: "#CBD5E1",
                                fontStyle: "italic",
                                textAlign: "center",
                            }}
                        >
                            {snippet}
                        </div>
                    )}
                </div>
            </div>

            {/* 4. Footer Bar (Absolute Positioning at Bottom) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: "36px",
                    left: "64px",
                    width: "952px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#94A3B8",
                    textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                }}
            >
                <span style={{ color: primaryColor, fontWeight: 800 }}>LIVE BROADCAST</span>
                <span style={{ color: accentColor, fontWeight: 800 }}>{sourceDomain}</span>
            </div>
        </div>
    );
}
