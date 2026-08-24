import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate10({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    accentColor = "#CFC493",
    badgeTag = "LEGACY MILESTONE",
    author = "Josh Yohe",
    authorRole = "The Athletic Senior Writer",
    sourceDomain = "THEATHLETIC.COM/PIT",
    statusLabel = "HALL OF FAME TRAJECTORY",
    timeAgo = "HISTORIC NIGHT",
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
            {/* Bright Full-Bleed Image */}
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

            {/* Top/Bottom Soft Gradients to protect text without muddying the center */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "350px",
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "550px",
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)",
                }}
            />

            {/* Bottom Content Area */}
            <div
                style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "100%",
                    padding: "60px 50px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Badges */}
                <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
                    <span
                        style={{
                            display: "flex",
                            fontSize: "16px",
                            fontWeight: 900,
                            color: "#000000",
                            backgroundColor: accentColor,
                            padding: "8px 16px",
                            borderRadius: "4px",
                            textTransform: "uppercase",
                            marginRight: "16px",
                            letterSpacing: "1px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                    >
                        {badgeTag}
                    </span>
                    <span style={{ display: "flex", fontSize: "16px", fontWeight: 700, color: "#E2E8F0", letterSpacing: "2px", textTransform: "uppercase", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                        {statusLabel}
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    style={{
                        display: "flex",
                        fontSize: "58px",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        margin: "0 0 24px 0",
                        textTransform: "uppercase",
                        fontStyle: titleItalic ? "italic" : "normal",
                        textShadow: "0 4px 15px rgba(0,0,0,0.8)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet */}
                <p
                    style={{
                        display: "flex",
                        fontSize: "24px",
                        color: "#CBD5E1",
                        lineHeight: 1.5,
                        margin: "0 0 40px 0",
                        maxWidth: "920px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                    }}
                >
                    {snippet}
                </p>

                {/* Footer Section */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        paddingTop: "30px",
                    }}
                >
                    <div
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "25px",
                            backgroundColor: accentColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#000000",
                            fontSize: "20px",
                            fontWeight: 900,
                            marginRight: "16px",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        {author.charAt(0)}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ display: "flex", fontSize: "20px", fontWeight: 800, color: "#FFFFFF", textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>{author}</span>
                        <span style={{ display: "flex", fontSize: "14px", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "4px" }}>
                            {authorRole} <span style={{ margin: "0 6px" }}>•</span> {timeAgo}
                        </span>
                    </div>
                </div>
            </div>

            {/* Top Header placed LAST in DOM tree to guarantee rendering ON TOP in Satori */}
            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "50px",
                    right: "50px",
                    display: "flex",
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
                            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)",
                            border: "1px solid rgba(255,255,255,0.4)",
                            borderRadius: "24px",
                            padding: "14px",
                            marginRight: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                        }}
                    >
                        <img src={logoUrl} alt="Logo" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
                    </div>
                    <span style={{ display: "flex", fontSize: "24px", fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
                        {teamName}
                    </span>
                </div>
                <div style={{ display: "flex", border: `1px solid ${accentColor}`, padding: "10px 16px", borderRadius: "20px", backgroundColor: "rgba(0,0,0,0.6)", boxShadow: "0 4px 15px rgba(0,0,0,0.4)" }}>
                    <span style={{ display: "flex", fontSize: "16px", fontWeight: 800, color: accentColor, letterSpacing: "2px", textTransform: "uppercase" }}>
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}
