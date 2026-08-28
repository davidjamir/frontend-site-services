import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 6. BRUTALIST VELOCITY / ANGULAR SPEED TAPE
// ============================================================================
export function FootballOgTemplate6({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "MATCHDAY",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "SKY SPORTS",
    statusLabel = "CONFIRMED",
    timeAgo = "JUST NOW",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#080B12",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
            }}
        >
            {/* Top Half Action Image */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "700px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "700px", objectFit: "cover" }} />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "1080px",
                        height: "300px",
                        background: "linear-gradient(180deg, transparent 0%, #080B12 100%)",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "700px",
                        background: `radial-gradient(circle at 80% 30%, ${primaryColor}55 0%, transparent 60%)`,
                    }}
                />
            </div>

            {/* Giant Watermark Crest in Bottom Region */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "-30px",
                        right: "-40px",
                        opacity: 0.14,
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "620px", height: "620px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Diagonal Speed Tape Bar */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    position: "absolute",
                    top: "540px",
                    left: "-60px",
                    width: "1200px",
                    height: "64px",
                    backgroundColor: accentColor,
                    transform: "rotate(-3deg)",
                    color: primaryColor,
                    fontWeight: 600,
                    fontSize: "22px",
                    letterSpacing: "3px",
                    boxShadow: `0 10px 30px ${primaryColor}99`,
                    border: `1px solid ${primaryColor}`
                }}
            >
                <span>{"// "}{badgeTag}{" //"}</span>
                <span>{teamName}</span>
                <span>{"// "}{statusLabel}{" //"}</span>
                <span>{siteName}</span>
            </div>

            {/* Bottom Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "620px",
                    left: 0,
                    width: "1080px",
                    height: "730px",
                    padding: "45px 55px",
                    color: "#FFFFFF",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                }}
            >
                {/* Crest + Team Name */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {logoUrl ? (
                            <div
                                style={{
                                    display: "flex",
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "24px",
                                    backgroundColor: "#0E1422",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "20px",
                                    border: `2px solid ${accentColor}`,
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                                }}
                            >
                                <img src={logoUrl} alt={teamName} style={{ width: "68px", height: "68px", objectFit: "contain" }} />
                            </div>
                        ) : null}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "34px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "#FFFFFF" }}>
                                {teamName}
                            </span>
                            <span style={{ fontSize: "20px", color: accentColor, fontWeight: 700 }}>
                                {sourceDomain || siteName} • {timeAgo}
                            </span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            backgroundColor: primaryColor,
                            color: "#FFFFFF",
                            padding: "10px 22px",
                            borderRadius: "8px",
                            fontSize: "20px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>

                {/* Massive Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "54px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        lineHeight: 0.92,
                        color: "#FFFFFF",
                    }}
                >
                    {title}
                </div>

                {/* Snippet Card */}
                {snippet ? (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "#FFFFFF",
                            fontWeight: 600,
                            backgroundColor: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            padding: "20px 26px",
                            borderLeft: `6px solid ${accentColor}`,
                            borderRadius: "0 16px 16px 0",
                        }}
                    >
                        {snippet}
                    </div>
                ) : null}

                {/* Footer Signature */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "18px",
                    }}
                >
                    <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                    <span style={{ fontSize: "16px", color: "#94A3B8" }}>{authorRole}</span>
                </div>
            </div>
        </div>
    );
}