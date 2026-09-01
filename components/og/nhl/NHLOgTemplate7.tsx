import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate7({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CF0A2C",
    accentColor = "#FFD100",
    badgeTag = "RISING STAR",
    author = "Mark Lazerus",
    authorRole = "The Athletic Senior Writer",
    sourceDomain = "THEATHLETIC.COM/CHI",
    statusLabel = "HIGHLIGHT REEL",
    timeAgo = "FINAL BUZZER",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#FFFFFF", // Light contrast background
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#111111",
                boxSizing: "border-box",
            }}
        >
            {/* The Slanted Image Container */}
            < div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "700px",
                    overflow: "hidden",
                }}
            >
                {/* ẢNH THẬT — giữ bên ngoài SVG */}
                < img
                    src={imageUrl}
                    alt={teamName}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "scale(1.1)",
                        transformOrigin: "center center",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        inset: "0px",
                        width: "100%",
                        height: "100%",
                        backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 100%)",
                    }}>

                </div >
            </div >
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "0px",
                    right: "0px",
                    width: "1080px",
                    height: "912px",
                    overflow: "hidden",
                }}>

                {/* SVG overlay */}
                <svg
                    width="1080"
                    height="912"
                    viewBox="0 0 1080 912"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >

                    {/* Overlay theo hình thang */}
                    <polygon
                        points="0,260 1080,28 1080,912 0,912"
                        fill="#F2F2F2"
                    />

                    {/* Viền trên */}
                    <line
                        x1="0"
                        y1="238"
                        x2="1080"
                        y2="6"
                        stroke={accentColor}
                        strokeWidth="12"
                    />

                    {/* Viền dưới */}
                    <line
                        x1="0"
                        y1="270"
                        x2="1080"
                        y2="38"
                        stroke={primaryColor}
                        strokeWidth="20"
                    />
                </svg>
            </div>

            {/* Gigantic Team Name Watermark on Light Area */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "200px",
                    right: "-100px",
                    fontSize: "200px",
                    fontWeight: 900,
                    color: "rgba(0,0,0,0.03)",
                    letterSpacing: "-5px",
                    lineHeight: 0.8,
                    textTransform: "uppercase",
                    transform: "rotate(-12deg)",
                    whiteSpace: "nowrap",
                }}
            >
                {teamName}
            </div>

            {/* Logo and Team Name in top left over image (placed after background & stripe so it renders on top) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "60px",
                    left: "60px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "120px",
                        height: "120px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "20px",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        flexShrink: 0,
                        marginRight: "24px",
                    }}
                >
                    <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <span
                    style={{
                        display: "flex",
                        fontSize: "36px",
                        fontWeight: 900,
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        textShadow: "0 4px 16px rgba(0,0,0,0.8)",
                        maxWidth: "750px",
                        lineHeight: 1.1,
                    }}
                >
                    {teamName}
                </span>
            </div>

            {/* Content Area - Bottom */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "50px",
                    left: "60px",
                    right: "60px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#111",
                        color: "#FFF",
                        padding: "10px 24px",
                        alignSelf: "flex-start",
                        marginBottom: "24px",
                        fontWeight: 900,
                        fontSize: "20px",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        borderLeft: `8px solid ${primaryColor}`,
                    }}
                >
                    {badgeTag} {"//"} {statusLabel}
                </div>

                <h1
                    style={{
                        display: "flex",
                        fontSize: "56px",
                        fontWeight: 900,
                        color: "#111",
                        textTransform: "uppercase",
                        lineHeight: 1.05,
                        fontStyle: titleItalic ? "italic" : "normal",
                        margin: "0 0 30px 0",
                        letterSpacing: "-1px",
                    }}
                >
                    {title}
                </h1>

                <p
                    style={{
                        display: "flex",
                        fontSize: "26px",
                        fontWeight: 600,
                        color: "#222",
                        lineHeight: 1.5,
                        maxWidth: "850px",
                        margin: "0 0 50px 0",
                        borderLeft: `4px solid ${accentColor}`,
                        paddingLeft: "24px",
                    }}
                >
                    {snippet}
                </p>

                {/* Footer details */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "30px",
                        borderTop: "2px solid rgba(0,0,0,0.1)",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ display: "flex", fontSize: "14px", fontWeight: 800, color: "#888", letterSpacing: "2px", textTransform: "uppercase" }}>
                                REPORT BY {authorRole}
                            </span>
                            <span style={{ display: "flex", fontSize: "22px", fontWeight: 900, color: "#111", marginTop: "4px" }}>
                                {author}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span style={{ display: "flex", fontSize: "14px", fontWeight: 800, color: primaryColor, letterSpacing: "3px", textTransform: "uppercase" }}>
                            {sourceDomain}
                        </span>
                        <span style={{ display: "flex", fontSize: "22px", fontWeight: 900, color: "#111", marginTop: "4px" }}>
                            {timeAgo}
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

