import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate6({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "TECH EXPLAINER",
    timeAgo = "SAN FRANCISCO // SILICON VALLEY",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0F172A",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Top Photo Section (Absolute Positioning 720px Height) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "720px",
                    overflow: "hidden",
                    backgroundColor: "#020617",
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt=""
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "1080px",
                            height: "720px",
                            objectFit: "cover",
                        }}
                    />
                )}

                {/* Top Vignette Gradient */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "180px",
                        background: "linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0) 100%)",
                    }}
                />

                {/* Top Header Overlay: Logo Left + Category Pill Right (Absolute) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        top: "44px",
                        left: "54px",
                        width: "972px",
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
                                    fontWeight: 800,
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
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            border: `1.5px solid ${accentColor}80`,
                            color: accentColor,
                            fontSize: "13px",
                            fontWeight: 700,
                            fontFamily: "'JetBrains Mono', monospace",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            borderRadius: "4px",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>
            </div>

            {/* 2. Bottom Light Editorial News Deck (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "720px",
                    left: 0,
                    width: "1080px",
                    height: "630px",
                    backgroundColor: "#F8FAFC",
                    padding: "78px 56px 44px 56px",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "52px",
                            lineHeight: 1.15,
                            fontWeight: 800,
                            color: "#0F172A",
                            letterSpacing: "-0.5px",
                            fontStyle: titleItalic ? "italic" : "normal",
                        }}
                    >
                        {title}
                    </div>

                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                lineHeight: 1.5,
                                color: "#475569",
                                maxWidth: "960px",
                            }}
                        >
                            {snippet}
                        </div>
                    )}
                </div>

                {/* Clean Light Footer (Absolute at bottom of canvas) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: "44px",
                        left: "56px",
                        width: "968px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1.5px solid #E2E8F0",
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#64748B",
                    }}
                >
                    <span style={{ fontWeight: 700, color: "#0F172A" }}>{timeAgo}</span>
                    <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>{sourceDomain}</span>
                </div>
            </div>

            {/* 3. Diagonal Ticker Marquee Ribbon Banner (Overlaying on top, tilted diagonally over photo bottom & text top) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "685px",
                    left: "-50px",
                    width: "1180px",
                    height: "68px",
                    backgroundColor: "#FFFFFF",
                    color: primaryColor,
                    alignItems: "center",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    boxShadow: `0 0 30px ${primaryColor}66`,
                    transform: "rotate(-3.5deg)",
                    transformOrigin: "center center",
                    borderTop: `2px solid ${primaryColor}`,
                    borderBottom: `2px solid ${primaryColor}`,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "20px",
                        paddingLeft: "30px",
                    }}
                >
                    <span> {badgeTag}</span>
                    <span style={{ color: primaryColor }}>•</span>
                    <span>LIVE BROADCAST WIRE</span>
                    <span style={{ color: primaryColor }}>•</span>
                    <span>SPECIAL DISPATCH</span>
                    <span style={{ color: primaryColor }}>•</span>
                    <span> {badgeTag}</span>
                    <span style={{ color: primaryColor }}>•</span>
                    <span>GLOBAL BULLETIN</span>
                    <span style={{ color: primaryColor }}>•</span>
                    <span>{sourceDomain}</span>
                </div>
            </div>
        </div>
    );
}
