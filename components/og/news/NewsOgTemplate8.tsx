import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate8({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "CAPITOL HILL LIVE",
    timeAgo = "WASHINGTON D.C. // JUST NOW",
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
            {/* 1. Upper Photo Section (Full height background image so no gaps exist) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    overflow: "hidden",
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
                            height: "1350px",
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
                        height: "240px",
                        background: "linear-gradient(180deg, rgba(3,7,18,0.85) 0%, rgba(3,7,18,0) 100%)",
                    }}
                />

                {/* Bottom Transition Gradient */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "1080px",
                        height: "600px",
                        background: "linear-gradient(180deg, rgba(3,7,18,0) 0%, rgba(3,7,18,0.9) 100%)",
                    }}
                />
            </div>

            {/* 2. Top Clean Brand Header (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "44px",
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
                        gap: "8px",
                        color: accentColor,
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: primaryColor,
                            boxShadow: `0 0 10px ${primaryColor}`,
                        }}
                    />
                    <span>PRIME BROADCAST</span>
                </div>
            </div>

            {/* 3. The Broadcast Slate Deck (Absolute Positioning at Bottom) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    backgroundColor: "#0A0E1A",
                    padding: "54px 54px 50px 54px",
                    gap: "24px",
                    boxSizing: "border-box",
                    boxShadow: "0 -24px 48px rgba(0,0,0,0.9)",
                    borderTop: `4px solid ${primaryColor}`,
                }}
            >
                {/* Breaking News Tag + Status */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "14px" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 20px",
                            backgroundColor: primaryColor,
                            borderRadius: "4px",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            fontWeight: 800,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            boxShadow: `0 0 18px ${primaryColor}80`,
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#FFFFFF",
                            }}
                        />
                        <span>{badgeTag}</span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "12px",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            backgroundColor: "rgba(15, 23, 42, 0.85)",
                            border: "1px solid rgba(255, 255, 255, 0.35)",
                            padding: "7px 18px",
                            borderRadius: "4px",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>

                {/* Big Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "44px",
                        lineHeight: 1.15,
                        fontWeight: 900,
                        color: "#FFFFFF",
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
                            fontSize: "21px",
                            lineHeight: 1.5,
                            color: "#CBD5E1",
                            maxWidth: "970px",
                        }}
                    >
                        {snippet}
                    </div>
                )}

                {/* Broadcast Deck Footer */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "20px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "#94A3B8",
                    }}
                >
                    <span style={{ color: "#F1F5F9", fontWeight: 700 }}>{timeAgo}</span>
                    <span style={{ color: primaryColor, fontWeight: 700 }}>PRIME BROADCAST SPLIT</span>
                </div>
            </div>
        </div>
    );
}
