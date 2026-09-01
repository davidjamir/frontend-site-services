import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate3({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    accentColor = "#CE1126",
    badgeTag = "LEAGUE STANDINGS",
    author = "Dan Rosen",
    authorRole = "NHL.com Senior Writer",
    sourceDomain = "NHL.COM",
    statusLabel = "CLINCHED",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Full Screen Image */}
            <img
                src={imageUrl}
                alt="bg"
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {/* Bottom-heavy gradient overlay for text readability */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 40%, transparent 100%)",
                }}
            />

            {/* Top Bar with Logo */}
            <div
                style={{
                    position: "absolute",
                    top: "60px",
                    left: "60px",
                    right: "60px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Logo Badge */}
                <div
                    style={{
                        width: "110px",
                        height: "110px",
                        backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "2px solid rgba(255,255,255,0.4)",
                    }}
                >
                    <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>

                {/* Team Name and Tags */}
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "24px" }}>
                    {/* Tags Row */}
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
                        <span
                            style={{
                                display: "flex",
                                backgroundColor: accentColor,
                                color: "#000000",
                                padding: "8px 16px",
                                borderRadius: "6px",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                        <span style={{ color: "#94A3B8", margin: "0 12px", fontSize: "16px", fontWeight: 700 }}>•</span>
                        <span
                            style={{
                                color: "#F8FAFC",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel}
                        </span>
                    </div>
                    {/* Team Name */}
                    <span
                        style={{
                            fontSize: "38px",
                            fontWeight: 900,
                            color: "#FFFFFF",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            lineHeight: 1,
                        }}
                    >
                        {teamName}
                    </span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div
                style={{
                    position: "absolute",
                    bottom: "50px",
                    left: "50px",
                    right: "50px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h1
                    style={{
                        display: "flex",
                        fontSize: "58px",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        margin: "0 0 30px 0",
                        textTransform: "uppercase",
                        fontStyle: titleItalic ? "italic" : "normal",
                        maxWidth: "1000px",
                    }}
                >
                    {title}
                </h1>

                <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
                    <div style={{ display: "flex", width: "6px", height: "80px", backgroundColor: accentColor, marginRight: "24px" }} />
                    <p
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            color: "#F1F5F9",
                            lineHeight: 1.4,
                            margin: 0,
                            maxWidth: "900px",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        paddingTop: "30px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>
                        {author} <span style={{ color: "#94A3B8", marginLeft: "12px", fontWeight: 600 }}>| {authorRole}</span>
                    </div>
                    <div style={{ display: "flex", fontSize: "20px", fontWeight: 800, color: accentColor, letterSpacing: "3px" }}>
                        {sourceDomain}
                    </div>
                </div>
            </div>
        </div>
    );
}

