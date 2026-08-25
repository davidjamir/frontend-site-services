import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate3({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#005A9C",
    accentColor = "#30CED8",
    badgeTag = "BREAKING NEWS",
    author = "MLB Network",
    authorRole = "Live Broadcast Desk",
    statusLabel = "WALK-OFF ALERT",
    timeAgo = "JUST NOW",
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
            {/* Background Full Bleed Image */}
            <img
                src={imageUrl}
                alt="Stadium Glow"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                }}
            />

            {/* Dark Neon Overlay Gradient */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage: `linear-gradient(to bottom, rgba(5,7,11,0.5) 0%, rgba(5,7,11,0.1) 30%, rgba(5,7,11,0.6) 75%, #05070B 100%)`,
                }}
            />

            {/* Neon Color Glow Mesh Pill (Top-Right) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "500px",
                    height: "500px",
                    backgroundImage: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`,
                    opacity: 0.2,
                }}
            />

            {/* Neon Color Glow Mesh Pill (Bottom-Left) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "100px",
                    left: "-100px",
                    width: "600px",
                    height: "600px",
                    backgroundImage: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`,
                    opacity: 0.2,
                }}
            />

            {/* Giant Background Cutout Typography */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "160px",
                    left: "-20px",
                    width: "1120px",
                    overflow: "hidden",
                    opacity: 0.12,
                }}
            >
                <span
                    style={{
                        fontSize: "140px",
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

            {/* Top Bar Navigation */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "50px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(5, 7, 11, 0.8)",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        paddingTop: "12px",
                        paddingBottom: "12px",
                        borderRadius: "30px",
                        border: `2px solid ${accentColor}`,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: accentColor,
                            marginRight: "12px",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            letterSpacing: "2px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>

                {/* Team Logo Badge Top Right */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(5, 7, 11, 0.85)",
                        border: `2px solid ${primaryColor}`,
                        padding: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={logoUrl}
                        alt="Logo"
                        style={{
                            width: "56px",
                            height: "56px",
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>

            {/* Main Content Box at Bottom */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "auto",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    paddingBottom: "60px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                {/* Slanted Badge Banner */}
                <div
                    style={{
                        display: "flex",
                        alignSelf: "flex-start",
                        backgroundColor: primaryColor,
                        paddingLeft: "28px",
                        paddingRight: "28px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        borderRadius: "4px",
                        borderLeft: `6px solid ${accentColor}`,
                        marginBottom: "20px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "22px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                        }}
                    >
                        {badgeTag}
                    </span>
                </div>

                {/* Headline Box */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(11, 15, 25, 0.9)",
                        paddingTop: "36px",
                        paddingBottom: "36px",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        borderRadius: "16px",
                        border: `1px solid ${primaryColor}99`,
                        boxShadow: `0 0 20px ${primaryColor}15`,
                        marginBottom: "24px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            color: accentColor,
                            marginBottom: "12px",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </span>

                    <h1
                        style={{
                            fontSize: "46px",
                            fontWeight: 900,
                            lineHeight: 1.15,
                            margin: 0,
                            color: "#FFFFFF",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </h1>

                    {snippet && (
                        <p
                            style={{
                                fontSize: "22px",
                                fontWeight: 500,
                                lineHeight: 1.4,
                                color: "#9CA3AF",
                                marginTop: "18px",
                                marginBottom: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    )}
                </div>

                {/* Bottom Source Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(5, 7, 11, 0.85)",
                        paddingTop: "16px",
                        paddingBottom: "16px",
                        paddingLeft: "28px",
                        paddingRight: "28px",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                            }}
                        >
                            {author}
                        </span>
                        <span
                            style={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                marginLeft: "12px",
                            }}
                        >
                            • {authorRole}
                        </span>
                    </div>

                    <span
                        style={{
                            fontSize: "16px",
                            fontWeight: 800,
                            color: accentColor,
                            letterSpacing: "1px",
                        }}
                    >
                        {timeAgo}
                    </span>
                </div>
            </div>
        </div>
    );
}
