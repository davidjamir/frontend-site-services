import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate2({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#a21313",
    accentColor = "#FFB81C",
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
                backgroundColor: "#05070B",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. BACKGROUND IMAGE & OVERLAYS */}
            <img
                src={imageUrl}
                alt="Background"
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                }}
            />

            {/* Subtle Brightness & Contrast Soft Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                    background: "rgba(255, 255, 255, 0.03)",
                }}
            />

            {/* Top Dark Gradient */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "340px",
                    background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
                }}
            />

            {/* Bottom Dark Gradient Vignette */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "880px",
                    background: "linear-gradient(180deg, rgba(5,7,11,0) 0%, rgba(5,7,11,0.5) 30%, rgba(5,7,11,0.92) 85%, #05070B 100%)",
                }}
            />

            {/* Tech Grid Pattern */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1.2px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            />

            {/* 2. TOP HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "48px 52px 0px 52px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        fontWeight: 800,
                        fontSize: "15px",
                        color: "rgba(255, 255, 255, 0.9)",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                    }}
                >
                    {teamName || "NFL WIRE"}
                </div>

                {/* Status & Time Badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        padding: "8px 18px",
                        borderRadius: "6px",
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginRight: "6px" }}
                    >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}{timeAgo ? ` • ${timeAgo}` : ""}
                    </div>
                </div>
            </div>

            {/* 3. LOWER CONTENT CONTAINER */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0px 52px 56px 52px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                {/* TAG BREAKING NEWS */}
                {badgeTag && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            alignSelf: "flex-start",
                            backgroundColor: "#ff0000",
                            borderRadius: "3px",
                            padding: "8px 18px",
                            width: "auto",
                            marginBottom: "16px",
                            boxShadow: `0 0 10px #ff000050`,
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "6px",
                                height: "6px",
                                borderRadius: "3px",
                                backgroundColor: "#FFFFFF",
                                marginRight: "8px",
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                color: "#FFFFFF",
                                fontWeight: 800,
                                fontSize: "18px",
                                letterSpacing: "1.8px",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </div>
                    </div>
                )}

                {/* KHUNG TEXT CHÍNH */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(5, 9, 17, 0.82)",
                        border: `1px solid ${primaryColor}`,
                        borderRadius: "24px",
                        padding: "38px 48px 32px 48px",
                        position: "relative",
                        width: "976px",
                        boxSizing: "border-box",
                        backdropFilter: "blur(20px)",
                        boxShadow: `0 0 40px ${primaryColor}66`,
                    }}
                >
                    {/* Headline */}
                    <div
                        style={{
                            display: "flex",
                            width: "800px",
                            fontSize: "50px",
                            lineHeight: 1.1,
                            fontWeight: 900,
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                            color: "#FFFFFF",
                            marginBottom: "20px",
                            letterSpacing: "-0.5px",
                            wordBreak: "break-word",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet Box */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(12, 18, 30, 0.85)",
                                borderLeft: `5px solid ${accentColor}`,
                                borderRadius: "4px",
                                padding: "20px 24px",
                                marginBottom: "28px",
                                width: "880px",
                                boxSizing: "border-box",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "19px",
                                    lineHeight: 1.45,
                                    fontWeight: 500,
                                    color: "#D1D5DB",
                                }}
                            >
                                {snippet}
                            </div>
                        </div>
                    )}

                    {/* Card Footer Ticker */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                            paddingTop: "20px",
                            width: "880px",
                        }}
                    >
                        {/* Author Info */}
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div
                                style={{
                                    display: "flex",
                                    width: "8px",
                                    height: "8px",
                                    backgroundColor: accentColor,
                                    marginRight: "10px",
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "15px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                }}
                            >
                                {author}{authorRole ? ` • ${authorRole}` : ""}
                            </div>
                        </div>

                        {/* Source Domain */}
                        {sourceDomain && (
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    color: accentColor,
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </div>
                        )}
                    </div>
                </div>

                {/* CIRCLE LOGO BADGE - ĐƯỢC CHUYỂN XUỐNG DƯỚI CÙNG ĐỂ CHẮC CHẮN NẰM TRÊN KHUNG TEXT */}
                {logoUrl && (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: " -30px", /* Điều chỉnh tọa độ theo vị trí container lớn */
                            right: "88px",
                            width: "180px",
                            height: "180px",
                            borderRadius: "90px",
                            backgroundColor: "rgb(0,0,0,0.85)",
                            border: `4px solid ${accentColor}`,
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 0 30px ${accentColor}66`,
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt={teamName || "Logo"}
                            width="135"
                            height="135"
                            style={{
                                width: "135px",
                                height: "135px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}