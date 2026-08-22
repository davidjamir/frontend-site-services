import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate5({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#b6b5b5",
    accentColor = "#14b887",
    badgeTag = "BREAKING NEWS",
    author = "Adam Schefter",
    authorRole = "ESPN Senior Insider",
    sourceDomain = "ESPN.COM/NFL",
    statusLabel = "JUST IN",
    timeAgo = "5 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#040711",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full Bleed Background Image & Gradients */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                    }}
                />
            )}

            {/* Stadium Center Floodlight Beam */}
            <div
                style={{
                    position: "absolute",
                    top: "-100px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "800px",
                    height: "800px",
                    background: `radial-gradient(circle, ${accentColor}33 0%, transparent 65%)`,
                    display: "flex",
                }}
            />

            {/* Team Color Side Vignette - ĐÃ CHỈNH NHẠT HƠN (Độ đục 15 ≈ 8%) */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "500px",
                    height: "1350px",
                    background: `linear-gradient(270deg, ${primaryColor}10 0%, transparent 100%)`,
                    display: "flex",
                }}
            />

            {/* Deep Bottom Shadow Fade */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        `linear-gradient(180deg, rgba(4,7,17,0.3) 0%, rgba(4,7,17,0.05) 25%, transparent 45%, ${primaryColor}20 65%, ${primaryColor}40 92%)`,
                    display: "flex",
                }}
            />

            {/* 2. Top Masthead Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "40px 52px 0 52px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Top Left Brand Box */}
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            backgroundColor: "#FFFFFF33",
                            padding: "8px 24px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                fontWeight: 900,
                                fontSize: "18px",
                                color: "#FFFFFF",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            THE GRIDIRON
                        </span>
                    </div>
                </div>

                {/* Top Right Status Badge */}
                <div
                    style={{
                        backgroundColor: "#00000033",
                        padding: "8px 20px",
                        display: "flex",
                    }}
                >
                    <span
                        style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#E2E8F0",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </span>
                </div>
            </div>

            {/* 3. CENTER LOGO */}
            {logoUrl && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: "20px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: "180px",
                            height: "180px",
                            backgroundColor: "transparent",
                            borderRadius: "28px",
                            border: `1px solid ${accentColor}`,
                            boxShadow: `0 0 40px ${accentColor}50`,
                            padding: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}

            {/* 4. Lower Content Container */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 52px 52px 52px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Team Name & Tag Byline */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginBottom: "16px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                        }}
                    >
                        {teamName}
                    </span>
                    <div
                        style={{
                            backgroundColor: primaryColor,
                            padding: "6px 16px",
                            borderRadius: "2px",
                            display: "flex",
                        }}
                    >
                        <span
                            style={{
                                color: "#FFFFFF",
                                fontWeight: 900,
                                fontSize: "18px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>
                </div>

                {/* Headline Title */}
                <h1
                    style={{
                        fontSize: "52px",
                        lineHeight: 1.05,
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 22px 0",
                        letterSpacing: "-0.5px",
                        textShadow: "0 6px 20px rgba(0,0,0,0.95)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Card */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(8, 14, 28, 0.92)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderLeft: `5px solid ${accentColor}`,
                            borderRadius: "8px",
                            padding: "22px 26px",
                            marginBottom: "26px",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "21px",
                                lineHeight: 1.45,
                                fontWeight: 500,
                                color: "#E2E8F0",
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                )}

                {/* Footer Broadcast Row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "rgba(10, 18, 36, 0.85)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "6px",
                        padding: "14px 24px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span
                            style={{
                                fontSize: "16px",
                                fontWeight: 900,
                                color: "#FFFFFF",
                            }}
                        >
                            {authorRole ? `${author} • ${authorRole}` : author}
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                color: accentColor,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
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