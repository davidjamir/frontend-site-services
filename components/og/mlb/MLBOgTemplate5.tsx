import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate5({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#0E3386",
    accentColor = "#CC3433",
    badgeTag = "BREAKING NEWS",
    author = "MLB Network",
    authorRole = "Feature Story",
    sourceDomain = "MLB.COM/CUBS",
    statusLabel = "JUST RELEASED",
    timeAgo = "7 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#050505",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Montserrat', sans-serif",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
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

            {/* Gradient only affects the bottom section where text lives */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    height: "750px",
                    background:
                        "linear-gradient(180deg, transparent 0%, rgba(5,5,5,0.85) 40%, #050505 100%)",
                }}
            />

            {/* Epic Aura limited to bottom left behind text */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-100px",
                    width: "800px",
                    height: "800px",
                    backgroundImage: `radial-gradient(circle, ${primaryColor} 0%, transparent 60%)`,
                    opacity: 0.5,
                    mixBlendMode: "screen",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "500px",
                    height: "500px",
                    backgroundImage: `radial-gradient(circle, ${accentColor} 0%, transparent 60%)`,
                    opacity: 0.4,
                    mixBlendMode: "screen",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    right: "50px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "8px",
                    background: "rgba(0,0,0,0.2)",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                }}
            >
                <span
                    style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        letterSpacing: "4px",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                    }}
                >
                    {statusLabel}
                </span>
                <span
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "14px",
                        fontWeight: 800,
                        letterSpacing: "2px",
                        color: accentColor,
                        textTransform: "uppercase",
                    }}
                >
                    {timeAgo}
                </span>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "60px",
                    left: "50px",
                    right: "50px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    style={{
                        borderLeft: `8px solid ${accentColor}`,
                        paddingLeft: "40px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "24px",
                            marginBottom: "24px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: accentColor,
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                fontWeight: 800,
                                fontSize: "15px",
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                                boxShadow: `0 8px 25px ${accentColor}80`,
                                borderRadius: "4px",
                            }}
                        >
                            {badgeTag}
                        </div>
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "24px",
                                fontWeight: 700,
                                letterSpacing: "4px",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                            }}
                        >
                            {teamName}
                        </span>
                    </div>
                    <h1
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: title.length > 50 ? "46px" : "54px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            fontStyle: titleItalic ? "italic" : "normal",
                            marginBottom: "24px",
                            textShadow: "0 4px 20px rgba(0,0,0,0.9)",
                            margin: "0 0 24px 0",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "22px",
                            fontWeight: 500,
                            color: "rgba(255, 255, 255, 0.95)",
                            lineHeight: 1.6,
                            maxWidth: "850px",
                            margin: "0 0 40px 0",
                            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                        }}
                    >
                        {snippet}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                            paddingTop: "24px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <img
                                src={logoUrl}
                                alt="Team Logo"
                                crossOrigin="anonymous"
                                style={{ width: "54px", height: "54px", objectFit: "contain" }}
                            />
                            <div
                                style={{ display: "flex", flexDirection: "column", gap: "2px" }}
                            >
                                <span
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: 800,
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {author}
                                </span>
                                <span
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "rgba(255, 255, 255, 0.7)",
                                    }}
                                >
                                    {authorRole}
                                </span>
                            </div>
                        </div>
                        <span
                            style={{
                                fontSize: "15px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: "#FFFFFF",
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
