import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate2({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#7801e7",
    accentColor = "#689880",
    badgeTag = "BREAKING NEWS",
    author = "Shams Charania",
    authorRole = "Senior NBA Insider",
    sourceDomain = "THEATHLETIC.COM/NBA",
    statusLabel = "JUST IN",
    timeAgo = "4 MINS AGO",
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
            {/* 1. Background Image */}
            {imageUrl ? (
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
            ) : null}

            {/* 2. Gradient Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 32%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.8) 90%)`,
                }}
            />

            {/* 3. Top Header / Scorebug */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "1080px",
                    padding: "44px 50px 0 50px",
                    boxSizing: "border-box",
                }}
            >
                {/* Live Badge + Domain */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "14px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#DC2626",
                            padding: "8px 20px",
                            borderRadius: "6px",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "10px",
                                height: "10px",
                                borderRadius: "9999px",
                                backgroundColor: "#FFFFFF",
                            }}
                        />
                        <span
                            style={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            LIVE • NBA COUNTDOWN
                        </span>
                    </div>

                    {sourceDomain ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "#000000",
                                padding: "8px 18px",
                                borderRadius: "6px",
                                border: "0.7px solid rgba(255, 255, 255)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: "#E2E8F0",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </span>
                        </div>
                    ) : null}
                </div>

                {/* Team Logo Container */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "58px",
                            height: "58px",
                            backgroundColor: "#00000099",
                            borderRadius: "12px",
                            border: `2px solid ${accentColor}`,
                            padding: "6px",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt="Team Logo"
                            style={{ width: "44px", height: "44px", objectFit: "contain" }}
                        />
                    </div>
                ) : null}
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* 4. Lower-Third Graphic Plate */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 48px 50px",
                    boxSizing: "border-box",
                }}
            >
                {/* Top Tags Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: "auto",
                        position: "relative",
                    }}
                >
                    {/* Badge Tag */}
                    <div
                        style={{
                            display: "flex",
                            width: "auto",
                            height: "auto",
                            position: "relative",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "8px 24px", // đủ chỗ cho phần đầu chéo (slant=18) + lề chữ
                            whiteSpace: "nowrap",
                            backgroundColor: "#DC2626",
                            transform: "skewX(-18deg)",
                            borderRadius: " 8px 0 0 0",
                        }}
                    >
                        <span
                            style={{
                                display: "flex",
                                position: "relative",
                                fontSize: "14px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            {`⚡ ${badgeTag}`}
                        </span>
                    </div>

                    {/* Team Name Tag */}
                    {teamName ? (
                        <div
                            style={{
                                display: "flex",
                                width: "auto",
                                height: "auto",
                                position: "relative",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "8px 24px",
                                backgroundColor: primaryColor,
                                transform: "skewX(-18deg)",
                                borderRadius: "0 8px 0 0",
                                borderTop: `1px solid ${accentColor}`,
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    position: "relative",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {teamName}
                            </span>
                        </div>
                    ) : null}
                </div>

                {/* Main Content Box */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(9, 13, 22, 0.96)",
                        borderRadius: "0 12px 12px 12px",
                        border: `1px solid ${primaryColor}`,
                        borderLeft: `6px solid ${accentColor}`,
                        padding: "30px 36px",
                    }}
                >
                    {/* Title */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "48px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            letterSpacing: "-0.5px",
                            marginBottom: "16px",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet */}
                    {snippet ? (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#FFFFFF",
                                lineHeight: 1.45,
                                marginBottom: "24px",
                            }}
                        >
                            {snippet}
                        </div>
                    ) : null}

                    {/* Footer Info / Insider Details */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "16px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        }}
                    >
                        {/* Author Info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "38px",
                                    height: "38px",
                                    borderRadius: "8px",
                                    backgroundColor: accentColor,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    color: "#030509",
                                    fontSize: "14px",
                                    padding: "0 2px",
                                }}
                            >
                                NBA
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: "6px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: 800,
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {author}
                                    </span>
                                    {/* Inline SVG Verified Badge - Tránh dùng ký tự ✓ gây lỗi Font 400 */}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style={{ display: "flex" }}
                                    >
                                        <path
                                            d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.35 1.273 2.72 2.148 4.3 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                                            fill="#1D9BF0"
                                        />
                                        <path
                                            d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
                                            fill="#FFFFFF"
                                        />
                                    </svg>
                                </div>
                                {authorRole ? (
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: 600,
                                            color: "#94A3B8",
                                        }}
                                    >
                                        {authorRole}
                                    </span>
                                ) : null}
                            </div>
                        </div>

                        {/* Status Label & Time */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "9999px",
                                    backgroundColor: "#EF4444",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#F87171",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {`${statusLabel} • ${timeAgo}`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
