import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate4({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#B4975A",
    accentColor = "#C8102E",
    badgeTag = "CONTRACT EXTENSION",
    sourceDomain = "DAILYFACEOFF.COM",
    statusLabel = "OFFICIAL DEAL",
    timeAgo = "JUST SIGNED",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#F8FAFC",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#0F172A",
                boxSizing: "border-box",
            }}
        >
            {/* Top Image Section (65%) */}
            <div
                style={{
                    display: "flex",
                    height: "850px",
                    width: "100%",
                    position: "relative",
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

                {/* Elegant Overlay Badge */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "40px",
                        left: "40px",
                        alignItems: "center",
                        backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
                        padding: "16px 32px",
                        borderRadius: "16px",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div style={{ display: "flex", width: "12px", height: "12px", borderRadius: "50%", backgroundColor: accentColor, marginRight: "16px" }} />
                    <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "3px", color: "#000000", textTransform: "uppercase" }}>
                        {statusLabel}
                    </span>
                </div>
            </div>

            {/* Bottom Content Section (35%) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "500px",
                    width: "100%",
                    padding: "50px 60px",
                    backgroundColor: "#FFFFFF",
                    position: "relative",
                    justifyContent: "space-between",
                }}
            >
                {/* Accent Top Border */}
                <div style={{ display: "flex", position: "absolute", top: 0, left: 0, right: 0, height: "8px", backgroundColor: primaryColor }} />

                {/* Team & Meta row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "90px",
                                height: "90px",
                                backgroundImage: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                                borderRadius: "20px",
                                border: "1px solid #E2E8F0",
                                marginRight: "24px",
                            }}
                        >
                            <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "24px", fontWeight: 800, color: primaryColor, letterSpacing: "2px", textTransform: "uppercase" }}>
                                {teamName}
                            </span>
                            <span style={{ fontSize: "16px", fontWeight: 600, color: "#64748B", letterSpacing: "3px", textTransform: "uppercase", marginTop: "4px" }}>
                                {badgeTag} {"//"} {timeAgo}
                            </span>
                        </div>
                    </div>

                    {/* Source Domain */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#F8FAFC",
                            border: "1.5px solid #E2E8F0",
                            padding: "12px 24px",
                            borderRadius: "12px",
                        }}
                    >
                        <span style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", letterSpacing: "2px", textTransform: "uppercase" }}>
                            {sourceDomain}
                        </span>
                    </div>
                </div>

                {/* Headline & Snippet */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1
                        style={{
                            display: "flex",
                            fontSize: "40px",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: "-1px",
                            color: "#000000",
                            textTransform: "uppercase",
                            fontStyle: titleItalic ? "italic" : "normal",
                            margin: "0 0 20px 0",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: "#000000",
                            margin: 0,
                        }}
                    >
                        {snippet}
                    </p>
                </div>
            </div>
        </div>
    );
}

