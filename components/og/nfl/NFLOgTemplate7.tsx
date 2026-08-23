import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate7({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#ea0023",
    accentColor = "#f0a000",
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
                backgroundColor: "#070707",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full Bleed Background Photo & Scrim */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                    }}
                />
            )}


            {/* Clean Soft Contrast Scrim Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        `linear-gradient(180deg, rgba(7,7,7,0.3) 0%, transparent 30%, ${primaryColor}20 70%, ${primaryColor}40 92%)`,
                    display: "flex",
                }}
            />

            {/* Gold Fine Accent Border Frame */}
            <div
                style={{
                    position: "absolute",
                    top: "24px",
                    left: "24px",
                    right: "24px",
                    bottom: "24px",
                    border: "1px solid rgba(45, 44, 44, 0.1)",
                    display: "flex",
                }}
            />

            {/* 2. Top Header Metadata Capsule */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "38px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        backgroundColor: "rgba(255, 255, 255, 0.14)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "6px 20px",
                        borderRadius: "16px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "11px",
                            color: "#FFFFFF",
                            letterSpacing: "1.8px",
                            textTransform: "uppercase",
                            fontWeight: 800,
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </span>
                    <span
                        style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            backgroundColor: "#D4AF37",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "11px",
                            color: "#FDE047",
                            letterSpacing: "1.8px",
                            textTransform: "uppercase",
                            fontWeight: 800,
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>

            {/* 3. Editorial Content Container */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "0 64px 56px 64px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Team Logo (Centered above badge) */}
                {logoUrl && (
                    <div
                        style={{
                            width: "136px",
                            height: "136px",
                            display: "flex",
                            padding: "4px",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            marginBottom: "16px",
                            borderRadius: "20%",
                            backgroundColor: "transparent",
                            boxShadow: `0 0 40px ${primaryColor}66`,
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                )}

                {/* Badge & Team Name Row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "16px",
                        marginBottom: "16px",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#E31837",
                            padding: "4px 12px",
                            borderRadius: "2px",
                            display: "flex",
                        }}
                    >
                        <span
                            style={{
                                color: "#FFFFFF",
                                fontWeight: 800,
                                fontSize: "18px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>

                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            textShadow: `0 0px 8px ${primaryColor}`,
                        }}
                    >
                        {teamName}
                    </span>
                </div>

                {/* Headline Title */}
                <h1
                    style={{
                        fontSize: "50px",
                        lineHeight: 1.08,
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 22px 0",
                        letterSpacing: "0.5px",
                        textShadow: "0 6px 20px rgba(0,0,0,0.9)",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Paragraph */}
                {snippet && (
                    <p
                        style={{
                            fontSize: "20px",
                            lineHeight: 1.5,
                            fontWeight: 400,
                            color: "#FFFFFF",
                            maxWidth: "860px",
                            margin: "0 0 28px 0",
                        }}
                    >
                        &quot;{snippet}&quot;
                    </p>
                )}

                {/* Footer Author Byline */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                        width: "100%",
                    }}
                >
                    <span
                        style={{
                            fontSize: "13px",
                            color: accentColor,
                            fontWeight: 800,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Reported by {authorRole ? `${author} • ${authorRole}` : author}
                    </span>
                </div>
            </div>
        </div>
    );
}