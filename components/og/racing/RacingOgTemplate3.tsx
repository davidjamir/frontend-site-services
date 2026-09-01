import { OgTemplate } from "@/types/og-template";

export function RacingOgTemplate3({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CE1126",
    accentColor = "#A2AAAD",
    badgeTag = "GAME RECAP",
    sourceDomain = "SPORTSNET.CA",
    statusLabel = "OFFICIAL TRADE",
    timeAgo = "15 MINS AGO",
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
            {/* FULL-BLEED BACKGROUND IMAGE WITH CYAN/DARK GRADIENTS */}
            {imageUrl && (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Background"
                        width="1080"
                        height="1350"
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />

                    {/* Dark Vignette Overlay */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "radial-gradient(circle at center, rgba(2, 7, 18, 0.25) 0%, rgba(2, 7, 18, 0.75) 100%)",
                        }}
                    />

                    {/* Top gradient */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "200px",
                            background: "linear-gradient(180deg, rgba(2, 7, 18, 0.8) 0%, rgba(2, 7, 18, 0.2) 65%, transparent 100%)",
                        }}
                    />

                    {/* Bottom gradient */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "220px",
                            background: "linear-gradient(0deg, rgba(2, 7, 18, 0.8) 0%, transparent 100%)",
                        }}
                    />
                </div>
            )}

            {/* DYNAMIC DIAGONAL TRANSLUCENT STRIPES (FROM TOP-RIGHT TO BOTTOM-LEFT, BEHIND THE GLASS CARD) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1080 1350"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                >
                    {/* 1. Main Heavy Leader Diagonal Stripe (Primary Color) */}
                    <polygon
                        points="1020,-60 1140,-60 480,1410 360,1410"
                        fill={primaryColor}
                        opacity="0.95"
                        stroke={accentColor || "#FFB800"}
                        strokeWidth="1.2"
                        strokeOpacity="0.8"
                    />

                    {/* 2. Accent Contrast Stripe (Accent Color) */}
                    <polygon
                        points="1155,-60 1215,-60 555,1410 495,1410"
                        fill={accentColor || "#FFB800"}
                        opacity="0.92"
                        stroke={primaryColor}
                        strokeWidth="1.2"
                        strokeOpacity="0.8"
                    />

                    {/* 3. Secondary Companion Stripe (Primary Color) */}
                    <polygon
                        points="1228,-60 1260,-60 600,1410 568,1410"
                        fill={primaryColor}
                        opacity="0.9"
                    />

                    {/* 4. Sharp Accent Pinstripe */}
                    <polygon
                        points="1270,-60 1284,-60 624,1410 610,1410"
                        fill={accentColor || "#FFB800"}
                        opacity="0.85"
                    />
                </svg>
            </div>

            {/* MAIN CONTENT CONTAINER */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    padding: "48px 56px 48px 56px",
                    boxSizing: "border-box",
                }}
            >
                {/* HEADER: Cyan F1 Logo + FORMULA 1 + Flag & Top-Right Tag */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingBottom: "24px",
                        borderBottom: `1.5px solid ${primaryColor}50`,
                    }}
                >
                    {/* Left Brand Identity */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                        {/* Square Frame for Logo */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#FFFFFF",
                                width: "76px",
                                height: "76px",
                                minWidth: "76px",
                                minHeight: "76px",
                                borderRadius: "16px",
                                boxSizing: "border-box",
                                border: `2px solid ${primaryColor}`,
                                boxShadow: `0 8px 22px ${primaryColor}40`,
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                width="76"
                                height="76"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",

                                    objectFit: "contain",
                                }}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: "26px",
                                        fontWeight: 800,
                                        fontStyle: "italic",
                                        letterSpacing: "3px",
                                        color: "#FFFFFF",
                                        lineHeight: 1,
                                    }}
                                >
                                    ALL RACING
                                </span>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "26px",
                                        lineHeight: 1,
                                        userSelect: "none",
                                        fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Android Emoji", sans-serif',
                                    }}
                                >
                                    🏁
                                </div>
                            </div>

                            {statusLabel && (
                                <span
                                    style={{
                                        display: "flex",
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        letterSpacing: "3.5px",
                                        color: primaryColor,
                                        textTransform: "uppercase",
                                        marginTop: "6px",
                                        lineHeight: 1,
                                    }}
                                >
                                    {statusLabel}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Right Header Status Tag */}
                    {timeAgo && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                                backgroundColor: "rgba(15, 23, 42, 0.75)",
                                border: `1.5px solid ${primaryColor}70`,
                                padding: "10px 22px",
                                borderRadius: "10px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "9px",
                                    height: "9px",
                                    borderRadius: "50%",
                                    backgroundColor: primaryColor,
                                }}
                            />
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    letterSpacing: "2.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {timeAgo}
                            </span>
                        </div>
                    )}
                </div>

                {/* CENTERED ULTRA-LUXURY FROSTED GLASS MIRROR CARDTEXT (Auto-expanding height) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: (title || "").length > 90 || (snippet || "").length > 150 ? "18px" : "24px",
                        margin: "auto 0",
                        height: "auto",
                        maxHeight: "1050px",
                        backgroundColor: "rgba(8, 14, 28, 0.75)",
                        backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        borderTop: "1.5px solid rgba(255, 255, 255, 0.45)",
                        borderLeft: "1.5px solid rgba(255, 255, 255, 0.35)",
                        boxShadow: `0 25px 60px rgba(0, 0, 0, 0.45), 0 0 30px ${primaryColor}18, inset 0 1px 1px rgba(255, 255, 255, 0.35)`,
                        padding: (title || "").length > 90 ? "36px 42px" : "44px 48px",
                        borderRadius: "28px",
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Watermark Quote Icon in background of glass card */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-15px",
                            right: "20px",
                            opacity: 0.07,
                            pointerEvents: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg
                            width="180"
                            height="180"
                            viewBox="0 0 24 24"
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                        </svg>
                    </div>

                    {/* Top Row: Centered Dual-Tone Split Badge Tag + Glowing Quote Indicator at top right */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            position: "relative",
                            minHeight: "56px",
                        }}
                    >
                        {badgeTag && (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    borderRadius: "6px",
                                    overflow: "hidden",
                                    border: "2px solid rgba(255, 255, 255, 0.8)",
                                    transform: "skewX(-12deg)",
                                }}
                            >
                                {/* Left Segment: BREAKING (Red Background, White Text) */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#E10600",
                                        color: "#FFFFFF",
                                        padding: "12px 30px",
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        letterSpacing: "4px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    <span style={{ display: "flex" }}>
                                        {badgeTag.includes(" ") ? badgeTag.split(" ")[0] : badgeTag}
                                    </span>
                                </div>

                                {/* Right Segment: NEWS (White Background, Red Text) */}
                                {badgeTag.includes(" ") && (
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            backgroundColor: "#FFFFFF",
                                            color: "#E10600",
                                            padding: "12px 30px",
                                            fontSize: "20px",
                                            fontWeight: 800,
                                            letterSpacing: "4px",
                                            textTransform: "uppercase",
                                            borderLeft: "2px solid rgba(225, 6, 0, 0.3)",
                                        }}
                                    >
                                        <span style={{ display: "flex" }}>
                                            {badgeTag.split(" ").slice(1).join(" ")}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Styled Quote Icon Badge Indicator (kept at top-right) */}
                        <div
                            style={{
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                marginTop: "-22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "44px",
                                height: "44px",
                                borderRadius: "50%",
                                backgroundColor: "rgba(255, 255, 255, 0.12)",
                                border: `1.5px solid ${primaryColor}90`,
                                boxShadow: `0 0 20px ${primaryColor}40, inset 0 1px 2px rgba(255, 255, 255, 0.4)`,
                            }}
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill={primaryColor}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                        </div>
                    </div>

                    {/* Headline Title */}
                    {title && (
                        <h1
                            style={{
                                display: "flex",
                                fontSize: (title || "").length > 110 ? "30px" : (title || "").length > 65 ? "36px" : (title || "").length > 40 ? "40px" : "46px",
                                fontWeight: 900,
                                lineHeight: (title || "").length > 65 ? 1.16 : 1.15,
                                letterSpacing: "-0.5px",
                                textTransform: "uppercase",
                                margin: 0,
                                fontStyle: titleItalic ? "italic" : "normal",
                                color: "#FFFFFF",
                                textAlign: "center",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {title}
                        </h1>
                    )}

                    {/* Lead Snippet Quote */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: "18px 24px",
                                backgroundColor: "rgba(255, 255, 255, 0.06)",
                                border: `1px solid rgba(255, 255, 255, 0.15)`,
                                borderLeft: `6px solid ${primaryColor}`,
                                borderRadius: "12px",
                                boxSizing: "border-box",
                            }}
                        >
                            <p
                                style={{
                                    display: "flex",
                                    fontSize: (snippet || "").length > 180 ? "16px" : (snippet || "").length > 110 ? "18px" : "20px",
                                    fontWeight: 700,
                                    color: "#F1F5F9",
                                    margin: 0,
                                    lineHeight: (snippet || "").length > 180 ? 1.45 : 1.5,
                                    fontStyle: "italic",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                }}
                            >
                                {snippet}
                            </p>
                        </div>
                    )}

                    {/* Source Domain Outlet */}
                    {sourceDomain && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                paddingTop: "14px",
                                borderTop: `1px solid rgba(255, 255, 255, 0.15)`,
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: primaryColor,
                                    letterSpacing: "2.5px",
                                    textTransform: "uppercase",
                                    textShadow: `0 0 10px ${primaryColor}40`,
                                }}
                            >
                                {sourceDomain}
                            </span>
                        </div>
                    )}
                </div>

                {/* BOTTOM BRAND FOOTER BAR */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingTop: "16px",
                        borderTop: `1px solid rgba(255, 255, 255, 0.12)`,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "24px",
                                height: "3px",
                                backgroundColor: primaryColor,
                                borderRadius: "2px",
                            }}
                        />
                        <span
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "3px",
                                color: "rgba(255, 255, 255, 0.65)",
                                textTransform: "uppercase",
                            }}
                        >
                            OFFICIAL PADDOCK BULLETIN
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                color: accentColor || "#FFB800",
                            }}
                        >
                            FASTEST SECTOR
                        </span>
                        <div
                            style={{
                                display: "flex",
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: accentColor || "#FFB800",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}