import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate1({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00338D",
    accentColor = "#C60C30",
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
                backgroundColor: "#07080C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* BACKGROUND IMAGE */}
            <img
                src={imageUrl}
                width="1080"
                height="1350"
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

            {/* LOGO WATERMARK KHỔ LỚN TRÊN NỀN */}
            {logoUrl && (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "320px",
                        right: "-40px",
                        width: "600px",
                        height: "600px",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0.16,
                        transform: "rotate(-3deg)",
                    }}
                >
                    <img
                        src={logoUrl}
                        width="600"
                        height="600"
                        style={{ width: "600px", height: "600px", objectFit: "contain" }}
                    />
                </div>
            )}

            {/* GRADIENT NỀN DƯỚI TỐI ĐEN SẮC NÉT */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    left: "0px",
                    bottom: "0px",
                    width: "1080px",
                    height: "880px",
                    background:
                        `linear-gradient(180deg, transparent 0%, ${accentColor}30 40%, ${accentColor}60 75%, ${accentColor}99 100%)`,
                }}
            />

            {/* TOP HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "44px 52px 0px 52px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                {/* TÊN ĐỘI BÓNG */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: accentColor,
                        padding: "11px 22px",
                        borderLeft: `7px solid ${primaryColor}`,
                    }}
                >
                    <span
                        style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </span>
                </div>

                {/* LOGO KHUNG BÊN PHẢI (XOAY NGHIÊNG 1 TÝ) */}
                {logoUrl && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "160px",
                            height: "160px",
                            backgroundColor: "transparent",
                            borderRadius: "24px",
                            border: `2px solid ${primaryColor}`,
                            padding: "16px",
                            boxSizing: "border-box",
                            transform: "rotate(-3deg)",
                            boxShadow: `0px 0 40px ${primaryColor}99`,
                        }}
                    >
                        <img
                            src={logoUrl}
                            width="128"
                            height="128"
                            style={{ width: "128px", height: "128px", objectFit: "contain" }}
                        />
                    </div>
                )}
            </div>

            {/* BOTTOM CONTENT */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px 52px 52px 52px",
                    position: "relative",
                    width: "1080px",
                    boxSizing: "border-box",
                }}
            >
                {/* BADGE BÁO ĐỘNG */}
                {badgeTag && (
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "18px" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: primaryColor,
                                padding: "10px 24px",
                                transform: "skewX(-12deg)",
                                boxShadow: "0px 6px 16px rgba(0,0,0,0.5)",
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    fontWeight: 800,
                                    fontSize: "18px",
                                    color: "#FFFFFF",
                                    textTransform: "uppercase",
                                    letterSpacing: "2px",
                                    transform: "skewX(12deg)",
                                }}
                            >
                                {badgeTag}
                            </span>
                        </div>
                    </div>
                )}

                {/* TITLE */}
                <div
                    style={{
                        display: "flex",
                        width: "976px",
                        fontSize: "56px",
                        lineHeight: 1.05,
                        fontWeight: 700,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        marginBottom: "22px",
                        letterSpacing: "-1px",
                        wordBreak: "break-word",
                        textShadow: "0px 4px 20px rgba(0,0,0,0.95)",
                    }}
                >
                    {title}
                </div>

                {/* SUBTITLE SNIPPET */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: `#FFFFFF20`,
                            borderLeft: `6px solid ${accentColor}`,
                            borderRight: "1px solid rgba(255,255,255,0.12)",
                            borderTop: "1px solid rgba(255,255,255,0.12)",
                            borderBottom: "1px solid rgba(255,255,255,0.12)",
                            padding: "20px 26px",
                            marginBottom: "28px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "20px",
                                lineHeight: 1.45,
                                fontWeight: 600,
                                color: "#FFFFFF",
                            }}
                        >
                            {snippet}
                        </span>
                    </div>
                )}

                {/* FOOTER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.22)",
                        paddingTop: "20px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "10px",
                                height: "10px",
                                backgroundColor: primaryColor,
                                transform: "rotate(45deg)",
                                marginRight: "14px",
                            }}
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "17px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                }}
                            >
                                {author}{authorRole ? `  •  ${authorRole}` : ""}
                            </span>
                            {sourceDomain && (
                                <span
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: "#A0AEC0",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        marginTop: "2px",
                                    }}
                                >
                                    {sourceDomain}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* STATUS BADGE VỚI SVG ICON ĐỒNG HỒ */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(255,255,255,0.12)",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            border: "1px solid rgba(255,255,255,0.20)",
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ marginRight: "8px" }}
                        >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "13px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                            }}
                        >
                            {statusLabel}{timeAgo ? ` • ${timeAgo}` : ""}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}