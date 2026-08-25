import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate6({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#0C2340",
    accentColor = "#FFB81C",
    badgeTag = "EXCLUSIVE REPORT",
    author = "Ken Rosenthal",
    authorRole = "Senior MLB Insider",
    sourceDomain = "THEATHLETIC.COM",
    statusLabel = "SPECIAL COVERAGE",
    timeAgo = "10 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0F172A",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Montserrat', sans-serif",
                color: "#0F172A",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full Bleed Background Image covering the entire 1080x1350 */}
            <img
                src={imageUrl}
                alt={title}
                crossOrigin="anonymous"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                }}
            />

            {/* 2. Top Scrim Gradient for Masthead Legibility */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "220px",
                    backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                    display: "flex",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "160px",
                    left: "-20px",
                    width: "1120px",
                    overflow: "hidden",
                    opacity: 0.1,
                }}
            >
                <span
                    style={{
                        fontSize: "120px",
                        fontWeight: 900,
                        letterSpacing: "-4px",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                        fontStyle: "italic",
                    }}
                >
                    {teamName}
                </span>
            </div>

            {/* Watermark Logo (Hình mờ thương hiệu / đội bóng) */}
            <div
                style={{
                    position: "absolute",
                    top: "260px",
                    width: "1080px",
                    height: "580px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.1,
                    filter: "drop-shadow(0 0 50px rgba(0,0,0,0.9))",
                    pointerEvents: "none",
                }}
            >
                <img
                    src={logoUrl}
                    alt="Team Watermark Logo"
                    crossOrigin="anonymous"
                    style={{
                        width: "520px",
                        height: "520px",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* 3. TOP FLOATING MASTHEAD (From Template 2) */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "48px 56px 0 56px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(12px)",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(12px)",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                        }}
                    >
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* 4. FIXED TRANSLUCENT WHITE GLASS TEXT FRAME WITH BACKDROP FILTER */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    margin: "0 44px 44px 44px",
                    backgroundColor: "rgba(255, 255, 255, 0.76)",
                    backdropFilter: "blur(28px) saturate(180%)",
                    WebkitBackdropFilter: "blur(28px) saturate(180%)",
                    borderRadius: "24px",
                    padding: "44px 48px",
                    boxShadow: "0 30px 70px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.9)",
                    border: "2px solid rgba(255, 255, 255, 0.85)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                {/* Main Editorial Text Block */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* Badge & Status Label */}
                    <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "18px" }}>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: primaryColor !== "#0C2340" ? primaryColor : "#B45309",
                                textTransform: "uppercase",
                                borderBottom: `3px solid ${primaryColor !== "#0C2340" ? primaryColor : accentColor}`,
                                paddingBottom: "4px",
                            }}
                        >
                            {badgeTag}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                color: "#475569",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            margin: "0 0 18px 0",
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: title.length > 55 ? "46px" : "54px",
                            fontWeight: 700,
                            lineHeight: 1.12,
                            color: "#0F172A",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Snippet */}
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "22px",
                            fontWeight: 500,
                            lineHeight: 1.55,
                            color: "#1E293B",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* AUTHOR SIGNATURE & SEAL (From Template 2 adapted for frosted glass) */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1.5px solid rgba(15, 23, 42, 0.15)",
                        paddingTop: "24px",
                        marginTop: "4px",
                    }}
                >
                    {/* Left: Author Profile & Team Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                        <div
                            style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                border: `2px solid ${accentColor}`,
                                backgroundColor: "#FFFFFF",
                                padding: "2px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                crossOrigin="anonymous"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "20px",
                                    fontWeight: 800,
                                    color: "#0F172A",
                                }}
                            >
                                {author}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#475569",
                                    letterSpacing: "1px",
                                }}
                            >
                                {authorRole}
                            </span>
                        </div>
                    </div>

                    {/* Right: Published by Team */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                letterSpacing: "3px",
                                color: "#64748B",
                            }}
                        >
                            PUBLISHED BY
                        </span>
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "22px",
                                fontWeight: 700,
                                color: primaryColor !== "#0C2340" ? primaryColor : "#0F172A",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}