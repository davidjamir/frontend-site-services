import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate3({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#0022fb",
    accentColor = "#5d4718",
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
                backgroundColor: "#0A0C10",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. TOP HALF (50% - 660px): Cinematic Photography */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "660px",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                <img
                    src={imageUrl}
                    alt="Editorial Action"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                        filter: "contrast(1.15) brightness(0.92) saturate(1.05)",
                    }}
                />

                {/* Ambient Top Vignette */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.1) 40%, rgba(10,12,16,0.4) 80%, rgba(10,12,16,0.95) 100%)",
                        display: "flex",
                    }}
                />

                {/* Color Light Leak */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "400px",
                        height: "660px",
                        background: `radial-gradient(circle at 100% 0%, ${accentColor}44 0%, transparent 60%)`,
                        display: "flex",
                        mixBlendMode: "screen",
                    }}
                />
            </div>

            {/* 2. TOP MASTHEAD HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "38px 52px 0 52px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#FFFFFF",
                            color: "#000000",
                            padding: "6px 16px",
                            fontWeight: 800,
                            fontSize: "20px",
                            letterSpacing: "3px",
                        }}
                    >
                        NFL
                    </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#CBD5E1",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            padding: "10px 15px",
                            backgroundColor: "#000000",
                            borderLeft: `7px solid ${primaryColor}`
                        }}
                    >
                        {statusLabel}{timeAgo ? ` • ${timeAgo}` : ""}
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM HALF (50% - 690px): Charcoal Editorial Paper */}
            <div
                style={{
                    marginTop: "auto",
                    height: "690px",
                    backgroundColor: "#0E1117",
                    borderTop: `4px solid ${accentColor}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "48px 56px",
                    boxSizing: "border-box",
                    position: "relative",
                }}
            >
                {/* Upper Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                fontWeight: 800,
                                color: accentColor,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </div>

                        {/* Editorial Badge Tag */}
                        {badgeTag && (
                            <div
                                style={{
                                    display: "flex",
                                    backgroundColor: "#ff0000",
                                    padding: "5px 14px",
                                    color: "#FFFFFF",
                                    fontWeight: 800,
                                    fontSize: "18px",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    boxShadow: "4px 4px 0px rgba(0,0,0,1)",
                                    border: "1px solid #000000",
                                }}
                            >
                                {badgeTag}
                            </div>
                        )}
                    </div>

                    {/* Main Headline */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "48px",
                            lineHeight: 1.12,
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            color: "#FFFFFF",
                            margin: "0 0 20px 0",
                            maxWidth: "920px",
                            wordBreak: "break-word",
                        }}
                    >
                        {title}
                    </div>

                    {/* Editorial Snippet */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(20, 24, 33, 0.9)",
                                borderLeft: `4px solid ${accentColor}`,
                                padding: "20px 24px",
                                marginBottom: "10px",
                                borderRadius: "0 8px 8px 0",
                                maxWidth: "920px",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "20px",
                                    lineHeight: 1.5,
                                    fontWeight: 500,
                                    color: "#E2E8F0",
                                    fontStyle: "italic",
                                }}
                            >
                                &ldquo;{snippet}&rdquo;
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Byline */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                        paddingTop: "20px",
                        width: "100%",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                backgroundColor: "#1E293B",
                                border: "1px solid rgba(255,255,255,0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 900,
                                fontSize: "14px",
                                color: "#FFFFFF",
                            }}
                        >
                            ✍️
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "16px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                {author}{authorRole ? ` • ${authorRole}` : ""}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    color: "#94A3B8",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                EXCLUSIVE COVERAGE{sourceDomain ? ` • ${sourceDomain}` : ""}
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            padding: "6px 14px",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "4px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 800,
                                color: "#CBD5E1",
                                textTransform: "uppercase",
                                letterSpacing: "1.5px",
                            }}
                        >
                            VERIFIED REPORT
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. CREST LOGO - ĐẶT DƯỚI CÙNG TRONG DOM ĐỂ HIỂN THỊ ĐÈ LÊN MỌI THỨ */}
            {logoUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: "565px",
                        right: "64px",
                        width: "190px",
                        height: "190px",
                        backgroundColor: "rgba(10, 12, 16, 0.95)",
                        borderRadius: "50%",
                        border: `4px solid ${accentColor}`,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(212,175,55,0.3)",
                        padding: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={logoUrl}
                        alt={teamName || "Team Logo"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.8))",
                        }}
                    />
                </div>
            )}
        </div>
    );
}