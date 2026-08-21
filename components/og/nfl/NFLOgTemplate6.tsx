import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate6({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#E31837",
    accentColor = "#FFB81C",
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
                backgroundColor: "#030509",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Dark Stadium Background Image & Overlay Gradients */}
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

            {/* Stadium Darkness Vignette / Bottom Fade Gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(3,5,9,0.3) 0%, rgba(3,5,9,0.05) 25%, transparent 45%, rgba(3,5,9,0.7) 65%, #030509 90%)",
                    display: "flex",
                }}
            />

            {/* Laser/Neon Ambient Glow Behind Logo Area */}
            <div
                style={{
                    position: "absolute",
                    top: "120px",
                    right: "20px",
                    width: "450px",
                    height: "450px",
                    background: `radial-gradient(circle, ${primaryColor}44 0%, transparent 70%)`,
                    display: "flex",
                }}
            />

            {/* 2. Top Bar (Right-aligned Timestamp Badge) */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "48px 52px 0 52px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(255,255,255,0.12)",
                        padding: "8px 20px",
                        borderRadius: "6px",
                        border: "1px solid rgba(255,255,255,0.18)",
                    }}
                >
                    <span style={{ fontSize: "14px" }}>⏱️</span>
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

            {/* 3. Floating Neon Logo Box (Top Right Area) */}
            {logoUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: "180px",
                        right: "52px",
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            width: "220px",
                            height: "220px",
                            backgroundColor: "#000000",
                            borderRadius: "32px",
                            border: `3px solid ${primaryColor}`,
                            boxShadow: `0 20px 50px rgba(0,0,0,0.9), 0 0 30px ${primaryColor}66`,
                            padding: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            transform: "rotate(-5deg)",
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

            {/* 4. Lower Content Section */}
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
                {/* Team Identity Dot Label & Breaking Badge Row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "16px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: primaryColor,
                                boxShadow: `0 0 5px ${primaryColor}`,
                            }}
                        />
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                textShadow: `0 0 10px ${primaryColor}`,
                            }}
                        >
                            {teamName}
                        </span>
                    </div>

                    <div
                        style={{
                            backgroundColor: "#FFFFFF",
                            padding: "4px 14px",
                            borderRadius: "4px",
                            display: "flex",
                            boxShadow: `0 0 5px ${primaryColor}`,
                        }}
                    >
                        <span
                            style={{
                                color: primaryColor,
                                fontWeight: 800,
                                fontSize: "13px",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>
                </div>

                {/* Main Headline Title */}
                <h1
                    style={{
                        fontSize: "56px",
                        lineHeight: 1.05,
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 22px 0",
                        letterSpacing: "-0.5px",
                        textShadow: "0 8px 24px rgba(0,0,0,0.95)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Card with Accent Border Left */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(8, 12, 22, 0.94)",
                            borderLeft: `6px solid ${primaryColor}`,
                            borderTop: "1px solid rgba(255,255,255,0.1)",
                            borderRight: "1px solid rgba(255,255,255,0.1)",
                            borderBottom: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "0 12px 12px 0",
                            padding: "24px 28px",
                            marginBottom: "26px",
                            boxShadow: `0 14px 36px rgba(0,0,0,0.7), 0 0 20px ${primaryColor}22`,
                        }}
                    >
                        <p
                            style={{
                                fontSize: "21px",
                                lineHeight: 1.45,
                                fontWeight: 600,
                                color: "#F1F5F9",
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                )}

                {/* Bottom Footer Bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.75)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        borderRadius: "8px",
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

                    <span
                        style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: accentColor,
                            textTransform: "uppercase",
                            letterSpacing: "1.5px",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}