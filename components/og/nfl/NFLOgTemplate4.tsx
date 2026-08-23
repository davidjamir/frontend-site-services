import { OgTemplate } from "@/types/og-template";

export function NFLOgTemplate4({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
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
                backgroundSize: "16px 16px",
                padding: "36px",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Background Image + Gradient Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                }}
            >
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 20%",
                    }}
                />

                {/* Dark Scrim Gradient */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(180deg, rgba(10,12,16,0.2) 0%, rgba(10,12,16,0.05) 30%, ${primaryColor}33 75%, ${primaryColor}66 95%)`,
                        display: "flex",
                    }}
                />
            </div>

            {/* 2. Top Header Navigation */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "32px 40px 0 80px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* Left Top Sticker */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "#000000",
                        color: "#FFFFFF",
                        padding: "8px 14px",
                        border: `2px solid ${accentColor}`,
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "2px",
                    }}
                >
                    OVERTIME DROP // 2026
                </div>

                {/* Right Top Barcode */}
                <div
                    style={{
                        backgroundColor: "#FFFFFF",
                        padding: "6px 12px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "2px",
                            height: "26px",
                            alignItems: "stretch",
                        }}
                    >
                        {[3, 1, 4, 1, 5, 2, 4, 1, 3, 2, 5, 1, 2, 4, 2, 3, 1, 4].map(
                            (w, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: `${w * 2}px`,
                                        backgroundColor: "#000000",
                                        display: "flex",
                                    }}
                                />
                            ),
                        )}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            fontSize: "8px",
                            color: "#000000",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            marginTop: "3px",
                        }}
                    >
                        NFL-OT-89412
                    </div>
                </div>
            </div>

            {/* 3. Vertical Rotated Team Name */}
            {teamName && (
                <div
                    style={{
                        position: "absolute",
                        left: "-100px",
                        top: "150px",
                        transform: "rotate(-90deg)",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "32px",
                            fontWeight: 800,
                            letterSpacing: "6px",
                            textTransform: "uppercase",
                            color: "#FFFFFF99",
                            whiteSpace: "nowrap",
                        }}
                    >
                        {teamName}
                    </div>
                </div>
            )}

            {/* 4. Bottom Content Block */}
            <div
                style={{
                    marginTop: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "0 48px 40px 80px",
                    position: "relative",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                {/* 2-LAYER SEPARATE BACKDROP TAG */}
                {badgeTag && (
                    <div
                        style={{
                            display: "flex",
                            position: "relative",
                            marginBottom: "20px",
                            alignSelf: "flex-start",
                        }}
                    >
                        {/* LỚP 1: LỚP BÓNG PHÍA SAU (Nổi bật tương tự Logo/Snippet) */}
                        <div
                            style={{
                                position: "absolute",
                                top: "6px",
                                left: "6px",
                                width: "100%",
                                height: "100%",
                                backgroundColor: "#FFFFFF", // Hoặc #000000 có border: "2px solid #FFFFFF"
                                transform: "rotate(-2deg)",
                                display: "flex",
                            }}
                        />

                        {/* LỚP 2: LỚP THẺ VÀNG NẰM TRÊN */}
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: primaryColor,
                                padding: "8px 16px",
                                transform: "rotate(-2deg)",
                                border: "1px solid #FFFFFF",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "#FFFFFF",
                                    textShadow: "0 0 4px rgba(0,0,0,0.7)",
                                }}
                            >
                                {badgeTag}
                            </div>
                        </div>
                    </div>
                )}

                {/* Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "54px",
                        lineHeight: 1.2,
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 24px 0",
                        letterSpacing: "0.5px",
                        wordBreak: "break-word",
                    }}
                >
                    {title}
                </div>

                {/* Snippet Frame (2-Layer Tách Biệt) */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            position: "relative",
                            width: "100%",
                            marginBottom: "24px",
                        }}
                    >
                        {/* Lớp màu vàng phía sau */}
                        <div
                            style={{
                                position: "absolute",
                                top: "6px",
                                left: "6px",
                                width: "100%",
                                height: "100%",
                                backgroundColor: accentColor,
                                display: "flex",
                            }}
                        />

                        {/* Lớp khung đen phía trên */}
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "#111319",
                                border: "2px solid #FFFFFF",
                                padding: "20px 24px",
                                boxSizing: "border-box",
                                width: "100%",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    fontSize: "20px",
                                    lineHeight: 1.4,
                                    fontWeight: 600,
                                    color: "#E2E8F0",
                                }}
                            >
                                {snippet}
                            </div>
                        </div>
                    </div>
                )}

                {/* Footer Meta Strip */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#000000",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        padding: "12px 20px",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "13px",
                                fontWeight: 900,
                                color: accentColor,
                            }}
                        >
                            SOURCE:
                        </div>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                            }}
                        >
                            {author} • {authorRole} • {sourceDomain}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: 800,
                            color: "#94A3B8",
                            letterSpacing: "1px",
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </div>
                </div>
            </div>

            {/* 5. Team Logo Crest Stamp (2-Layer Tách Biệt) */}
            {logoUrl && (
                <div
                    style={{
                        position: "absolute",
                        top: "160px",
                        right: "48px",
                        width: "180px",
                        height: "180px",
                        display: "flex",
                    }}
                >
                    {/* Lớp khung trắng chứa logo phía trên */}
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "transparent",
                            borderRadius: "16px",
                            border: `2px solid ${primaryColor}`,
                            padding: "15px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            transform: "rotate(4deg)",
                            boxShadow: `0 0 40px ${primaryColor}99`,
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt={teamName || "Logo"}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
