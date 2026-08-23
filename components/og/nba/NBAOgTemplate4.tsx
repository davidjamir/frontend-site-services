import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate4({
    teamName = "BOSTON CELTICS",
    title = "CELTICS CLINCH #1 SEED IN THE EAST WITH HISTORIC OFFENSIVE RATING",
    snippet = "Boston holds opponents under 95 points for the fourth consecutive game behind an impenetrable switch defense.",
    imageUrl = "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
    titleItalic = true,
    primaryColor = "#007A33",
    badgeTag = "BREAKING NEWS",
    author = "BRIAN WINDHORST",
    authorRole = "SENIOR NBA CORRESPONDENT",
    sourceDomain = "ESPN.COM/NBA",
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
                backgroundColor: "#050608",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Background Image */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                    }}
                />
            )}

            {/* Dark Overlay Gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(5,6,8,0.5) 0%, rgba(5,6,8,0.1) 25%, transparent 50%, rgba(5,6,8,0.5) 65%, #050608 95%)",
                }}
            />

            {/* Top Header Section */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    width: "1080px",
                    padding: "45px 50px 0 50px",
                    position: "relative",
                }}
            >
                {/* SLAM Logo Header Group */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "100px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "-2px",
                            lineHeight: 0.85,
                            textTransform: "uppercase",
                            textShadow: `0 8px 0 ${primaryColor}`,
                            transform: 'skewX(-4deg)',
                        }}
                    >
                        SLAM
                    </div>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#FFE500",
                            color: "#000000",
                            padding: "5px 20px",
                            marginTop: "6px",
                            transform: "rotate(-2deg)",
                            transformOrigin: "left center",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                fontSize: "16px",
                                fontWeight: 700,
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            THE BASKETBALL BIBLE • ISSUE #248
                        </span>
                    </div>
                </div>

                {/* Flexible Spacer */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* White Team Capsule (Top Right) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FFFFFF",
                        padding: "12px 24px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        transform: "rotate(3deg)",
                    }}
                >
                    {logoUrl && (
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "contain",
                                marginBottom: "6px",
                            }}
                        />
                    )}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#000000",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </div>
                </div>
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Bottom Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Status Tag */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                        marginBottom: "20px",
                        transform: "rotate(-2deg)",
                        transformOrigin: "left center",
                    }}
                >
                    {/* Tag Badge Căn chuẩn SVG Ngôi sao */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                            backgroundColor: "#FFE500",
                            padding: "10px 30px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <path
                                    fill="#000000"
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                />
                            </svg>
                        </div>
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#000000",
                                letterSpacing: "1px",
                                lineHeight: 1,
                            }}
                        >
                            {badgeTag.toUpperCase()} • {statusLabel.toUpperCase()}
                        </span>
                    </div>
                </div>
                {/* Title */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "58px",
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        color: "#FFFFFF",
                        lineHeight: 1.02,
                        marginBottom: "24px",
                        letterSpacing: "-1px",
                        textTransform: "uppercase",
                    }}
                >
                    {title}
                </div>

                {/* Snippet Container */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(0, 0, 0, 0.85)",
                            borderLeft: `6px solid ${primaryColor}`,
                            padding: "22px 26px",
                            marginBottom: "28px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                color: "#FFFFFF",
                                lineHeight: 1.45,
                                fontWeight: 500,
                            }}
                        >
                            {snippet}
                        </div>
                    </div>
                )}

                {/* Yellow Separator Line */}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#FFE500",
                        marginBottom: "16px",
                        opacity: 0.8,
                    }}
                />

                {/* Footer Meta Row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    {/* Author */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        WORDS: {author} {authorRole ? `• ${authorRole}` : ""}
                    </div>

                    {/* Flexible Spacer */}
                    <div style={{ display: "flex", flex: 1 }} />

                    {/* Source Domain & Time */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFE500",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain} • {timeAgo}
                    </div>
                </div>
            </div>
        </div >
    );
}