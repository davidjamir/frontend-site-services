import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate1({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "ACCIDENT",
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
                backgroundColor: "#0A0D14",
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

            {/* Atmospheric Top & Bottom Vignette Gradients */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.9) 100%)",
                }}
            />

            {/* 2. Top Header Bar (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "54px",
                    left: "56px",
                    width: "968px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Left: Logo with Explicit Width & Height for Satori */}
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
                                fontSize: "24px",
                                fontWeight: 800,
                                color: accentColor,
                                letterSpacing: "2.5px",
                                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>

                {/* Right: Framed Category Pill Tag */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px 22px",
                        backgroundColor: accentColor || "#FFFFFF",
                        color: "#000000",
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
                    }}
                >
                    {statusLabel}
                </div>
            </div>

            {/* 3. Floating Card Container (Absolute Positioning at Bottom) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "105px",
                    left: "56px",
                    width: "968px",
                    borderRadius: "12px",
                }}
            >
                {/* Main Crisp Card */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "12px",
                        border: `3px solid ${primaryColor}`,
                        padding: "44px 48px 38px 48px",
                        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.65), 0 10px 20px rgba(0, 0, 0, 0.4)",
                        gap: "18px",
                        position: "relative",
                        width: "968px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Badge Tag */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: primaryColor,
                                color: "#FFFFFF",
                                padding: "8px 22px",
                                borderRadius: "2px",
                                fontSize: "20px",
                                fontWeight: 800,
                                fontStyle: "italic",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                boxShadow: `0 4px 14px ${primaryColor}66`,
                            }}
                        >
                            {badgeTag}
                        </div>
                    </div>

                    {/* Headline Title */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "44px",
                            lineHeight: 1.12,
                            fontWeight: 800,
                            color: "#0A0D14",
                            letterSpacing: "-0.5px",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                lineHeight: 1.48,
                                color: "#334155",
                                fontWeight: 500,
                            }}
                        >
                            {snippet}
                        </div>
                    )}

                    {/* Pin Tail - SVG for Satori Compatibility */}
                    <svg
                        width="72"
                        height="34"
                        viewBox="0 0 72 34"
                        style={{
                            display: "flex",
                            position: "absolute",
                            bottom: "-34px",
                            right: "80px",
                        }}
                    >
                        {/* White filled triangle */}
                        <polygon points="0,0 72,0 36,34" fill="#FFFFFF" />
                        {/* Primary color border matching card border */}
                        <polyline points="0,0 36,34 72,0" stroke={primaryColor} strokeWidth="3" fill="none" />
                    </svg>
                </div>
            </div>

            {/* 4. Bottom Footer Bar (Absolute Positioning at Bottom) */}
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
                    color: accentColor,
                    fontSize: "18px",
                    fontWeight: 600,
                    textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                    <span>Read More</span>
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            backgroundColor: accentColor,
                            color: "#0A0D14",
                            fontSize: "12px",
                            fontWeight: 700,
                        }}
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                display: "flex",
                                width: "18px",
                                height: "18px",
                                flexShrink: 0,
                            }}
                        >
                            <path
                                d="M3 10.75H16.5V6L22 12L16.5 18V13.25H3V10.75Z"
                                fill="#0A0D14"
                            />
                        </svg>
                    </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", fontSize: "16px", color: "rgba(255, 255, 255, 0.95)" }}>
                    Source : <span style={{ fontWeight: 700, marginLeft: "4px" }}>{sourceDomain}</span>
                </div>
            </div>
        </div>
    );
}
