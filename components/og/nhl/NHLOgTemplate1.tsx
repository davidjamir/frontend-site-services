import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate1({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CE1126",
    accentColor = "#A2AAAD",
    badgeTag = "GAME RECAP",
    author = "Elliotte Friedman",
    authorRole = "NHL Network Insider",
    sourceDomain = "SPORTSNET.CA",
    statusLabel = "OFFICIAL TRADE",
    timeAgo = "15 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#07080C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Fine Grid Texture */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Upper Action Photography (70% Height) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "900px",
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
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        backgroundImage: "linear-gradient(180deg, rgba(7,8,12,0.1) 0%, rgba(7,8,12,0) 40%, rgba(7,8,12,0.7) 75%, #07080C 100%)",
                    }}
                />
            </div>

            {/* Giant Background Stencil Watermark */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "220px",
                    right: "-50px",
                    opacity: 0.04,
                }}
            >
                <img
                    src={logoUrl}
                    alt="Watermark"
                    style={{
                        width: "700px",
                        height: "700px",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* Top Bar: Team & Status */}
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
                            width: "110px",
                            height: "110px",
                            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)",
                            borderRadius: "24px",
                            border: "1px solid rgba(255,255,255,0.35)",
                            marginRight: "24px",
                        }}
                    >
                        <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "2px", color: "#FFFFFF" }}>
                            {teamName}
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "4px", color: accentColor, textTransform: "uppercase" }}>
                            {statusLabel}
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundImage: "linear-gradient(135deg, rgba(20,22,30,0.85) 0%, rgba(7,8,12,0.85) 100%)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "100px",
                        padding: "12px 24px",
                    }}
                >
                    <div style={{ display: "flex", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: primaryColor, marginRight: "12px" }} />
                    <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "2px", color: "#FFFFFF" }}>
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* Lower Content Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "1080px",
                    padding: "60px",
                    paddingBottom: "50px",
                    justifyContent: "flex-end",
                }}
            >
                {/* Breaking Tag & Accent Line */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}DD 100%)`,
                            padding: "10px 24px",
                            transform: "skewX(-12deg)",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: 900,
                                letterSpacing: "3px",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                                transform: "skewX(12deg)",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            height: "2px",
                            width: "120px",
                            backgroundColor: "rgba(255,255,255,0.3)",
                            marginLeft: "24px",
                        }}
                    />
                </div>

                {/* Main Headline */}
                <h1
                    style={{
                        fontSize: "56px",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: "-1px",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        fontStyle: titleItalic ? "italic" : "normal",
                        margin: 0,
                        marginBottom: "24px",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet / Description */}
                <p
                    style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        lineHeight: 1.5,
                        color: "#CBD5E1",
                        margin: 0,
                        marginBottom: "48px",
                        maxWidth: "900px",
                    }}
                >
                    {snippet}
                </p>

                {/* Insider Author Chyron Bottom Bar */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "32px",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "56px",
                                height: "56px",
                                borderRadius: "28px",
                                backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                                border: `2px solid ${primaryColor}`,
                                color: "#FFFFFF",
                                fontWeight: 900,
                                fontSize: "24px",
                                marginRight: "20px",
                            }}
                        >
                            {author.charAt(0)}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>
                                {authorRole}
                            </span>
                            <span style={{ fontSize: "24px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "1px" }}>
                                {author}
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                            padding: "12px 24px",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.1)",
                        }}
                    >
                        <span style={{ fontSize: "16px", fontWeight: 800, color: accentColor, letterSpacing: "2px", textTransform: "uppercase" }}>
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
                    height: "8px",
                    backgroundImage: `linear-gradient(90deg, ${primaryColor} 0%, ${accentColor} 50%, ${primaryColor} 100%)`,
                }}
            />
        </div>
    );
}

