import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate9({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#E31837",
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
                backgroundColor: "#000000",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Background Image & Overlay */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: "-50px",
                        left: "-50px",
                        width: "1180px",
                        height: "1450px",
                        objectFit: "cover",
                        objectPosition: "center 15%",
                    }}
                />
            )}

            {/* Dark Gradient Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(135deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.05) 30%, transparent 45%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.85) 95%)",
                    display: "flex",
                }}
            />

            {/* Speed Slashes - Đường sọc chéo mảnh sát viền trái */}
            <div
                style={{
                    position: "absolute",
                    top: "-250px",
                    left: "-15px",
                    width: "10px",
                    height: "1900px",
                    backgroundColor: primaryColor,
                    transform: "rotate(-32deg)",
                    display: "flex",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "-250px",
                    left: "5px",
                    width: "5px",
                    height: "1900px",
                    backgroundColor: accentColor,
                    transform: "rotate(-32deg)",
                    display: "flex",
                }}
            />

            {/* Top Header Timestamp Pill */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: "42px 48px 0 48px",
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
                        backgroundColor: "rgba(10, 10, 10, 0.65)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        padding: "8px 16px",
                        borderRadius: "4px",
                    }}
                >
                    <span style={{ fontSize: "12px", display: "flex" }}>⏱️</span>
                    <span
                        style={{
                            fontSize: "12px",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            display: "flex",
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </span>
                </div>
            </div>

            {/* Floating Team Logo Box - Khung đen chứa Logo nghiêng nhẹ */}
            {logoUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: "140px",
                        right: "48px",
                        display: "flex",
                        transform: "rotate(-5deg) skewX(-3deg)",
                    }}
                >
                    <div
                        style={{
                            width: "210px",
                            height: "210px",
                            backgroundColor: "#000000",
                            border: `3px solid ${primaryColor}`,
                            borderRadius: "28px",
                            padding: "24px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 20px 50px rgba(0,0,0,0.9), 0 0 35px ${primaryColor}55`,
                            boxSizing: "border-box",
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
                </div>
            )}

            {/* Lower Content Payload */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 50px 48px 50px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Row Header: Team Name + Skewed Badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "14px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: accentColor,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            fontStyle: "italic",
                            display: "flex",
                            textShadow: `0 0 12px ${primaryColor}55`,
                        }}
                    >
                        {teamName}
                    </span>

                    {/* Skewed Red Badge */}
                    <div
                        style={{
                            backgroundColor: primaryColor,
                            padding: "5px 16px",
                            transform: "skewX(-15deg)",
                            display: "flex",
                        }}
                    >
                        <span
                            style={{
                                color: "#FFFFFF",
                                fontWeight: 900,
                                fontSize: "12px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                transform: "skewX(15deg)",
                                display: "flex",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>
                </div>

                {/* Title Headline */}
                <h1
                    style={{
                        fontSize: "56px",
                        lineHeight: 1.02,
                        fontWeight: 700,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 20px 0",
                        letterSpacing: "-0.5px",
                        textShadow: "0 8px 25px rgba(0,0,0,0.95)",
                        display: "flex",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Card */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(15, 15, 15, 0.94)",
                            borderLeft: `6px solid ${accentColor}`,
                            padding: "22px 26px",
                            borderRadius: "0 8px 8px 0",
                            marginBottom: "24px",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "20px",
                                lineHeight: 1.45,
                                fontWeight: 600,
                                color: "#F1F5F9",
                                margin: 0,
                                display: "flex",
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                )}

                {/* Footer Info Bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                        paddingTop: "16px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "15px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            display: "flex",
                        }}
                    >
                        {authorRole ? `${author} • ${authorRole}` : author}
                    </span>

                    <span
                        style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: primaryColor,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            display: "flex",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}