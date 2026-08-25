import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate10({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#134A8E",
    accentColor = "#E31837",
    badgeTag = "BREAKING NEWS",
    author = "Sportsnet MLB Desk",
    authorRole = "Canada MLB Coverage",
    sourceDomain = "SPORTSNET.CA/JAYS",
    statusLabel = "JUST IN",
    timeAgo = "8 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#1C212B",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Montserrat', sans-serif",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full Bleed Background Cinema Image */}
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

            {/* Watermark Logo (Hình mờ thương hiệu / đội bóng) */}
            <div
                style={{
                    position: "absolute",
                    top: "160px",
                    right: "-40px",
                    width: "580px",
                    height: "580px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.18,
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

            {/* Top Gold Light Flare */}
            <div
                style={{
                    position: "absolute",
                    top: "-150px",
                    left: "290px",
                    width: "500px",
                    height: "500px",
                    backgroundImage: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                    opacity: 0.35,
                    display: "flex",
                }}
            />

            {/* Top Gradient Shroud - Satori friendly stack */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "300px",
                    backgroundImage: "linear-gradient(to bottom, rgba(4,5,8,0.8), rgba(4,5,8,0))",
                    display: "flex",
                }}
            />

            {/* Heavy Bottom Gradient for Crisp Text Legibility - Satori friendly stack */}
            <div
                style={{
                    position: "absolute",
                    bottom: "350px",
                    left: 0,
                    width: "1080px",
                    height: "450px",
                    backgroundImage: "linear-gradient(to bottom, rgba(4,5,8,0), rgba(4,5,8,0.95))",
                    display: "flex",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    height: "350px",
                    backgroundColor: "rgba(4,5,8,0.95)",
                    display: "flex",
                }}
            />

            {/* 2. Top Edge-to-Edge Championship Marquee Header */}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "36px 48px 0 48px",
                    boxSizing: "border-box",
                }}
            >
                {/* Championship Ribbon Pill */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            background: "#FFFFFF",
                            padding: "8px 20px",
                            borderRadius: "4px",
                            border: "1px solid rgba(0,0,0,0.1)",
                        }}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 5 L61 36 L94 36 L67 55 L78 88 L50 68 L22 88 L33 55 L6 36 L39 36 Z"
                                fill={primaryColor}
                            />
                        </svg>
                        <span
                            style={{
                                fontFamily: "'Cinzel', 'Montserrat', serif",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "3px",
                                color: "#000000",
                                textTransform: "uppercase",
                            }}
                        >
                            WORLD SERIES
                        </span>
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 5 L61 36 L94 36 L67 55 L78 88 L50 68 L22 88 L33 55 L6 36 L39 36 Z"
                                fill={primaryColor}
                            />
                        </svg>
                    </div>

                    <span
                        style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            color: "rgba(255,255,255,0.75)",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>

                {/* Official MLB Emblem */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "rgba(0,0,0,0.65)",
                        padding: "8px 18px",
                        borderRadius: "40px",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                >
                    <img
                        src={logoUrl}
                        alt="MLB Logo"
                        crossOrigin="anonymous"
                        style={{ width: "48px", height: "48px", objectFit: "contain" }}
                    />
                    <span
                        style={{
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "2px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </span>
                </div>
            </div>

            {/* 3. Bottom Championship Content Section (Full Bleed to Base) */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    padding: "0 48px 44px 48px",
                    boxSizing: "border-box",
                }}
            >
                {/* Gold Accent Tag */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "18px" }}>
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "16px",
                            fontWeight: 800,
                            letterSpacing: "4px",
                            color: accentColor,
                            textTransform: "uppercase",
                            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                        }}
                    >
                        {badgeTag}
                    </span>
                    <div
                        style={{
                            height: "2px",
                            flex: 1,
                            backgroundColor: accentColor,
                            opacity: 0.5,
                            display: "flex",
                        }}
                    />
                </div>

                {/* Title */}
                <h1
                    style={{
                        margin: 0,
                        fontFamily: "'Cinzel', 'Playfair Display', serif",
                        fontSize: title && title.length > 50 ? "46px" : "56px",
                        fontWeight: 900,
                        lineHeight: 1.12,
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        marginBottom: "18px",
                        textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet */}
                <p
                    style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: "rgba(255, 255, 255, 0.85)",
                        marginBottom: "30px",
                        maxWidth: "960px",
                    }}
                >
                    {snippet}
                </p>

                {/* Bottom Championship Gold Broadcast Plate */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        border: `1px solid ${accentColor}`,
                        borderLeft: `6px solid ${accentColor}`,
                        padding: "18px 24px",
                        borderRadius: "6px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "18px",
                                fontWeight: 800,
                                color: accentColor,
                            }}
                        >
                            OCTOBER BASEBALL
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: 800, color: "#FFFFFF" }}>
                            {author}
                        </span>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255, 255, 255, 0.85)" }}>
                            • {authorRole}
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: accentColor,
                                textTransform: "uppercase",
                            }}
                        >
                            {sourceDomain}
                        </span>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "1px",
                                color: "#FFFFFF",
                                backgroundColor: "rgba(255,255,255,0.15)",
                                padding: "4px 10px",
                                borderRadius: "3px",
                            }}
                        >
                            {timeAgo}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
