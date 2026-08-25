import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate4({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CE1141",
    accentColor = "#FFB81C",
    badgeTag = "BREAKING NEWS",
    author = "Bleacher Report",
    authorRole = "B/R MLB Insider",
    sourceDomain = "BLEACHERREPORT.COM",
    statusLabel = "BREAKING",
    timeAgo = "15 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0A0B10",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
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

            {/* Subtle gradient ONLY at the bottom 45% to keep top bright */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    height: "600px",
                    background:
                        "linear-gradient(180deg, transparent 0%, rgba(10,11,16,0.8) 50%, #0A0B10 100%)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "40px",
                    left: "48px",
                    right: "48px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "rgba(0,0,0,0.6)",
                        padding: "10px 16px",
                        borderRadius: "4px",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: accentColor,
                            borderRadius: "50%",
                            boxShadow: `0 0 10px ${accentColor}`,
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 800,
                            letterSpacing: "2px",
                            fontSize: "14px",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>
                <div
                    style={{
                        background: "rgba(0,0,0,0.6)",
                        padding: "10px 16px",
                        borderRadius: "4px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: "13px",
                        letterSpacing: "1px",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    {timeAgo}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "48px",
                    left: "48px",
                    right: "48px",
                    backgroundColor: primaryColor,
                    padding: "48px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
                    borderLeft: `12px solid ${accentColor}`,
                    borderRadius: "6px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "24px",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "20px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            color: accentColor,
                            textTransform: "uppercase",
                        }}
                    >
                        {badgeTag}
                    </span>
                    <img
                        src={logoUrl}
                        alt="Team"
                        crossOrigin="anonymous"
                        style={{ width: "64px", height: "64px", objectFit: "contain" }}
                    />
                </div>
                <h1
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: title.length > 50 ? "46px" : "54px",
                        fontWeight: 800,
                        lineHeight: 0.95,
                        margin: "0 0 20px 0",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textShadow: "0 4px 10px rgba(0,0,0,0.4)",
                    }}
                >
                    {title}
                </h1>
                <p
                    style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.95)",
                        margin: "0 0 32px 0",
                        lineHeight: 1.5,
                    }}
                >
                    {snippet}
                </p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "2px solid rgba(255,255,255,0.2)",
                        paddingTop: "24px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "16px",
                                fontWeight: 800,
                            }}
                        >
                            {author}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                                color: "#FFFFFF",
                            }}
                        >
                            • {authorRole}
                        </span>
                    </div>
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "2px",
                            color: "#FFFFFF",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}
