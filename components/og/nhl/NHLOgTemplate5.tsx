import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate5({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#006847",
    accentColor = "#8F8F8C",
    badgeTag = "SHUTOUT PERFORMANCE",
    author = "Mike Heika",
    authorRole = "DallasStars.com Senior Writer",
    sourceDomain = "NHL.COM/STARS",
    statusLabel = "VICTORY",
    timeAgo = "FINAL SCORE",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0B0F19",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Full Bleed Image */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                }}
            >
                <img
                    src={imageUrl}
                    alt={teamName}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* Gradient Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                    backgroundImage: "linear-gradient(180deg, rgba(11,15,25,0.4) 0%, rgba(11,15,25,0) 30%, rgba(11,15,25,0.3) 60%, rgba(11,15,25,0.9) 90%, #0B0F19 100%)",
                }}
            />

            {/* Monumental Watermark Text */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "320px",
                    right: "-20px",
                    fontSize: "120px",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.04)",
                    letterSpacing: "4px",
                    lineHeight: 0.8,
                    textTransform: "uppercase",
                }}
            >
                GAMEDAY
            </div>

            {/* Top Bar */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "50px",
                    left: "50px",
                    right: "50px",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100px",
                            height: "100px",
                            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,0.3)",
                            marginRight: "20px",
                        }}
                    >
                        <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "30px", fontWeight: 900, letterSpacing: "2px", color: "#FFFFFF" }}>
                            {teamName}
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "3px", color: accentColor, textTransform: "uppercase" }}>
                            SPOTLIGHT GAME REPORT
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        borderRadius: "24px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                    }}
                >
                    <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "1.5px", color: "#FFFFFF" }}>
                        {statusLabel} • {timeAgo}
                    </span>
                </div>
            </div>

            {/* Lower Half: Full Bleed Headline Card */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "1080px",
                    paddingLeft: "60px",
                    paddingRight: "60px",
                    paddingBottom: "50px",
                    justifyContent: "flex-end",
                }}
            >
                {/* Badge Tag and Glowing Accent */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: accentColor,
                            color: "#0B0F19",
                            padding: "10px 22px",
                            borderRadius: "4px",
                            marginRight: "16px",
                        }}
                    >
                        <span style={{ fontSize: "15px", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase" }}>
                            {badgeTag}
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            height: "2px",
                            flex: 1,
                            backgroundColor: "rgba(255,255,255,0.15)",
                        }}
                    />
                </div>

                {/* Monumental Main Headline */}
                <h1
                    style={{
                        display: "flex",
                        fontSize: "48px",
                        fontWeight: 900,
                        lineHeight: 1.08,
                        letterSpacing: "-1px",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 20px 0",
                        fontStyle: titleItalic ? "italic" : "normal",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet */}
                <p
                    style={{
                        display: "flex",
                        fontSize: "22px",
                        fontWeight: 500,
                        lineHeight: 1.45,
                        color: "#FFFFFF",
                        margin: "0 0 36px 0",
                    }}
                >
                    {snippet}
                </p>

                {/* Footer Bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "48px",
                                height: "48px",
                                borderRadius: "24px",
                                backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                                border: `1px solid ${accentColor}`,
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 900,
                                fontSize: "19px",
                                color: accentColor,
                                marginRight: "16px",
                            }}
                        >
                            {author.charAt(0)}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                            <span style={{ fontSize: "13px", fontWeight: 600, color: "#94A3B8", letterSpacing: "1px", textTransform: "uppercase" }}>
                                {authorRole}
                            </span>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                            border: `1px solid ${accentColor}44`,
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            borderRadius: "6px",
                        }}
                    >
                        <span style={{ fontSize: "14px", fontWeight: 800, color: accentColor, letterSpacing: "1.5px" }}>
                            {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Glow Strip */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "5px",
                    backgroundImage: `linear-gradient(90deg, ${accentColor} 0%, ${primaryColor} 100%)`,
                }}
            />
        </div>
    );
}

