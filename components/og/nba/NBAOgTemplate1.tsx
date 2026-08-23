import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate1({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#006BB6",
    accentColor = "#F58426",
    badgeTag = "BREAKING NEWS",
    author = "An Savage",
    authorRole = "SNY TV Lead NBA Insider",
    sourceDomain = "SNY.TV/KNICKS",
    statusLabel = "CONFIRMED",
    timeAgo = "17 MINS AGO",
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
            {/* Background Image */}
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
                }}
            />

            {/* Dark Overlay Gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(7,8,12,0.5) 0%, rgba(7,8,12,0.1) 30%, rgba(7,8,12,0.6) 75%, #07080C 95%)",
                }}
            />

            {/* Outer Layout Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "1080px",
                    height: "1350px",
                    padding: "48px 56px",
                    position: "relative",
                    boxSizing: "border-box",
                }}
            >
                {/* Header Section */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: `1px solid ${accentColor}`,
                        paddingBottom: "24px",
                        width: "100%",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "72px",
                                height: "72px",
                                borderRadius: "12px",
                                border: `1px solid ${accentColor}`,
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt={teamName}
                                style={{ width: "54px", height: "54px", objectFit: "contain" }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span
                                    style={{
                                        fontSize: "24px",
                                        fontWeight: 800,
                                        color: "#FFFFFF",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    THE REPORT NBA
                                </span>
                                <span
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: 600,
                                        color: "#000000",
                                        backgroundColor: accentColor,
                                        padding: "3px 8px",
                                        borderRadius: "4px",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    SPECIAL
                                </span>
                            </div>
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: accentColor,
                                    letterSpacing: "1.5px",
                                    marginTop: "2px",
                                }}
                            >
                                NBA PRIME REPORT • {teamName.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            border: "0.8px solid rgba(255, 255, 255, 0.7)",
                            padding: "8px 18px",
                            borderRadius: "9999px",
                        }}
                    >
                        <div
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: "#22C55E",
                            }}
                        />
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "1.5px",
                            }}
                        >
                            {statusLabel.toUpperCase()} • {timeAgo.toUpperCase()}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        marginTop: "auto",
                    }}
                >
                    {/* Tags */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        {/* Tag Badge Căn chuẩn SVG Ngôi sao */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                backgroundColor: primaryColor,
                                padding: "8px 18px",
                                borderRadius: "6px",
                                border: `2px solid ${accentColor}`,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <svg width="14" height="14" viewBox="0 0 24 24">
                                    <path
                                        fill="#FFFFFF"
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                    />
                                </svg>
                            </div>
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 900,
                                    color: "#FFFFFF",
                                    letterSpacing: "1px",
                                    lineHeight: 1,
                                }}
                            >
                                {badgeTag.toUpperCase()}
                            </span>
                        </div>

                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                color: "#E2E8F0",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                border: "2px solid rgba(255, 255, 255, 0.15)",
                                padding: "8px 18px",
                                borderRadius: "6px",
                                letterSpacing: "1px",
                                lineHeight: 1,
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {teamName.toUpperCase()}
                        </span>
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontSize: "54px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            lineHeight: 1.05,
                            margin: "0 0 24px 0",
                            letterSpacing: "-1px",
                            textTransform: "uppercase",
                        }}
                    >
                        “{title}”
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            marginBottom: "28px",
                        }}
                    >
                        {/* LAYER PHÍA SAU — render trước */}
                        <div
                            style={{
                                display: "flex",
                                position: "absolute",
                                top: "0",
                                left: "-6px",
                                right: "0",
                                bottom: "0",
                                backgroundColor: accentColor,
                                borderRadius: "12px",
                            }}
                        />

                        {/* CARD PHÍA TRƯỚC — render sau nên nằm trên */}
                        <div
                            style={{
                                display: "flex",
                                position: "relative",
                                flexDirection: "column",
                                backgroundColor: "rgb(0,0,0)",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                borderRadius: "12px",
                                padding: "24px 28px",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 400,
                                    color: "#E2E8F0",
                                    lineHeight: 1.4,
                                    margin: 0,
                                    fontFamily: "Georgia, serif",
                                }}
                            >
                                {snippet}
                            </p>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "20px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        {/* Author Info */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: primaryColor,
                                    color: "#FFFFFF",
                                    fontWeight: 800,
                                    fontSize: "16px",
                                    border: `2px solid ${accentColor}`,
                                }}
                            >
                                {author.charAt(0)}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                {/* Dòng chứa Tên + Tích xanh được căn chỉnh hoàn hảo */}
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px" }}>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: 800,
                                            color: "#FFFFFF",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {author}
                                    </span>

                                    {/* SVG Verified Badge - Bọc trong div flex riêng để chống lệch layout Satori */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "16px",
                                            height: "16px",
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                            <path
                                                fill="#1D9BF0"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                                            />
                                            <path
                                                fill="#FFFFFF"
                                                d="M9.86 15.6l-3.26-3.26 1.41-1.41 1.85 1.85 5.94-5.94 1.41 1.41z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: 600,
                                        color: "#94A3B8",
                                        marginTop: "4px",
                                    }}
                                >
                                    {authorRole}
                                </span>
                            </div>
                        </div>

                        {/* Source Domain */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "14px",
                                    fontWeight: 900,
                                    color: "#FFFFFF",
                                    letterSpacing: "1px",
                                }}
                            >
                                {sourceDomain.toUpperCase()}
                            </span>
                            <span
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    color: "#64748B",
                                    letterSpacing: "1px",
                                    marginTop: "2px",
                                }}
                            >
                                OFFICIAL NBA WIRE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}