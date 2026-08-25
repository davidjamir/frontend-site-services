import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate7({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#E31837",
    accentColor = "#FFB81C",
    badgeTag = "BREAKING NEWS",
    author = "Adam Schefter",
    authorRole = "Beat Analyst",
    sourceDomain = "NESN.COM/REDSOX",
    statusLabel = "POSTSEASON BOUND",
    timeAgo = "12 MINS AGO",
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
            {/* 1. Full-Bleed Action Photography Showcase */}
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

            {/* Watermark Logo Over Background */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    opacity: 0.15,
                }}
            >
                <img
                    src={logoUrl}
                    crossOrigin="anonymous"
                    style={{ width: "900px", height: "900px", objectFit: "contain" }}
                />
            </div>

            {/* Top Foil Gradient Fade */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "260px",
                    background: "linear-gradient(180deg, rgba(7,9,14,0.70) 0%, rgba(7,9,14,0.5) 60%, transparent 100%)",

                }}
            />

            {/* Bottom Heavy Gradient Shroud for Maximum Text Legibility */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    height: "750px",
                    background: "linear-gradient(180deg, transparent 0%, rgba(7,9,14,0.3) 20%, rgba(7,9,14,0.67) 65%, #07090E 100%)",

                }}
            />

            {/* 2. Top Edge-to-Edge Chrome / Foil Card Header */}
            <div
                style={{
                    display: "flex",
                    position: "relative",
                    width: "1080px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "36px 48px 20px 48px",
                    boxSizing: "border-box",
                }}
            >
                {/* Card Brand Header */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "8px 20px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "4px",
                            boxShadow: `0 4px 20px ${accentColor}66`,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: "#1C212B",
                                textTransform: "uppercase",
                            }}
                        >
                            TOPPS NOW
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: accentColor,
                                textTransform: "uppercase",
                            }}
                        >
                            OFFICIAL COMMEMORATIVE CARD
                        </span>
                        <span
                            style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                letterSpacing: "1px",
                                color: "#FFFFFF",
                            }}
                        >
                            {statusLabel} • {timeAgo}
                        </span>
                    </div>
                </div>

                {/* Team Emblem with Metallic Border */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "rgba(0,0,0,0.45)",
                        padding: "8px 16px 8px 10px",
                        borderRadius: "40px",
                        border: `1.5px solid ${accentColor}`,

                    }}
                >
                    <img
                        src={logoUrl}
                        alt="Team Crest"
                        crossOrigin="anonymous"
                        style={{
                            width: "36px",
                            height: "36px",
                            objectFit: "contain",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "12px",
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

            {/* 3. Bottom Content & Signature Plate Section */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",

                    padding: "0 48px 40px 48px",
                    boxSizing: "border-box",
                }}
            >
                {/* Dynamic Card Badge Tag */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: primaryColor,
                            border: `1.5px solid ${accentColor}`,
                            padding: "6px 18px",
                            borderRadius: "4px",
                            boxShadow: `0 0 20px ${primaryColor}66`,
                        }}
                    >
                        <span
                            style={{
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>
                    <div
                        style={{
                            height: "2px",
                            flex: 1,
                            background: `linear-gradient(90deg, ${accentColor} 0%, rgba(255,255,255,0.1) 100%)`,
                        }}
                    />
                </div>

                {/* Card Headline Title */}
                <h1
                    style={{
                        margin: 0,
                        fontFamily: "'Oswald', 'Montserrat', sans-serif",
                        fontSize: title && title.length > 55 ? "46px" : "54px",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        color: "#FFFFFF",
                        letterSpacing: "0.5px",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        marginBottom: "16px",
                        textShadow: "0 4px 20px rgba(0,0,0,0.65)",
                    }}
                >
                    {title}
                </h1>

                {/* Card Snippet */}
                <p
                    style={{
                        margin: 0,
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: "rgba(255, 255, 255, 0.85)",
                        marginBottom: "24px",
                        maxWidth: "960px",
                    }}
                >
                    {snippet}
                </p>

                {/* Card Authenticity / Reporter Lower Third Bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderLeft: `5px solid ${accentColor}`,
                        padding: "16px 24px",
                        borderRadius: "6px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "20px",
                                fontWeight: 900,
                                color: accentColor,
                                lineHeight: 1,
                            }}
                        >
                            MLB
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "14px", fontWeight: 800, color: "#FFFFFF" }}>
                                {author}
                            </span>
                            <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.85)" }}>
                                {authorRole}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 900,
                                letterSpacing: "2px",
                                color: accentColor,
                                textTransform: "uppercase",
                            }}
                        >
                            {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
