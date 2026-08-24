import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate6({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#041E42",
    accentColor = "#B9975B",
    badgeTag = "STANLEY CUP PLAYOFFS",
    author = "Greg Wyshynski",
    sourceDomain = "ESPN.COM/NHL",
    timeAgo = "GAME 7 FINAL",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: primaryColor,
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Top Bright Image Area */}
            <div style={{ display: "flex", height: "700px", width: "100%", position: "relative" }}>
                <img
                    src={imageUrl}
                    alt={teamName}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                {/* Diagonal slash transition to color block */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: "100%",
                        height: "120px",
                        backgroundImage: `linear-gradient(to bottom right, transparent 49%, ${primaryColor} 50%)`,
                    }}
                />
            </div>

            {/* Bottom Color Block Content (High Contrast) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "80px 60px 60px 60px",
                    flex: 1,
                    backgroundColor: primaryColor,
                    justifyContent: "space-between",
                }}
            >
                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
                    <h1
                        style={{
                            display: "flex",
                            fontSize: "54px",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            margin: "0 0 24px 0",
                            textTransform: "uppercase",
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "rgba(255,255,255,0.95)",
                            lineHeight: 1.5,
                            margin: 0,
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Footer Bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "40px",
                        padding: "24px 30px",
                        backgroundColor: "rgba(0,0,0,0.25)",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                >
                    <span style={{ display: "flex", fontSize: "18px", fontWeight: 700, color: "#FFFFFF" }}>
                        {author} <span style={{ color: "rgba(255,255,255,0.5)", margin: "0 8px" }}>|</span> {timeAgo}
                    </span>
                    <span style={{ display: "flex", fontSize: "18px", fontWeight: 800, color: accentColor, letterSpacing: "2px" }}>
                        {sourceDomain}
                    </span>
                </div>
            </div>

            {/* Floating Logo and Team Name placed LAST in DOM tree to guarantee rendering ON TOP in Satori */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "620px",
                    left: "60px",
                    right: "60px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "140px",
                        height: "140px",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
                        border: `6px solid ${accentColor}`,
                    }}
                >
                    <img src={logoUrl} alt="Logo" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
                </div>
                <div style={{ marginLeft: "30px", display: "flex", flexDirection: "column" }}>
                    <span style={{ display: "flex", fontSize: "18px", fontWeight: 800, color: accentColor, letterSpacing: "4px", textTransform: "uppercase" }}>
                        {badgeTag}
                    </span>
                    <span style={{ display: "flex", fontSize: "36px", fontWeight: 900, color: "#FFFFFF", letterSpacing: "2px", textTransform: "uppercase", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                        {teamName}
                    </span>
                </div>
            </div>
        </div>
    );
}



