import { OgTemplate } from "@/types/og-template";

export function RacingOgTemplate4({
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
                color: "#0F172A",
                boxSizing: "border-box",
            }}
        >
            {/* LAYER 1: BASE STRUCTURAL LAYOUT (Photo + Divider + White Card Background) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                {/* TOP ZONE: FEATURED PHOTO (Flexible height, with 114px top offset for Header Ribbon) */}
                <div
                    style={{
                        display: "flex",
                        position: "relative",
                        width: "100%",
                        flex: 1,
                        minHeight: "380px",
                        marginTop: "114px",
                        backgroundColor: "#05080E",
                        overflow: "hidden",
                    }}
                >
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt="Photo"
                            width="1080"
                            height="800"
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    )}

                    {/* Team Tag pill on top of image */}
                    {statusLabel && (
                        <div
                            style={{
                                display: "flex",
                                position: "absolute",
                                top: "28px",
                                left: "56px",
                                backgroundColor: "rgba(11, 15, 23, 0.75)",
                                border: "1.5px solid rgba(255, 255, 255, 0.25)",
                                padding: "10px 24px",
                                borderRadius: "30px",
                                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    letterSpacing: "3px",
                                    color: "#FFFFFF",
                                    textTransform: "uppercase",
                                }}
                            >
                                {statusLabel}
                            </span>
                        </div>
                    )}
                </div>

                {/* HIGH-END 3-COLOR HARMONIOUS GRADIENT RACING DIVIDER */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        height: "10px",
                        background: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor}B3 24%, ${accentColor || "#1E293B"} 50%, ${accentColor || "#1E293B"}99 76%, ${primaryColor}CC 100%)`,
                        position: "relative",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.12)",
                    }}
                />

                {/* BOTTOM ZONE: SOLID WHITE CARD BACKGROUND (Provides sizing and white card backdrop) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flexShrink: 0,
                        height: "auto",
                        backgroundColor: "#FFFFFF",
                        padding: (title || "").length > 90 ? "34px 56px 40px 56px" : "44px 56px 48px 56px",
                        boxSizing: "border-box",
                        position: "relative",
                    }}
                >
                    {/* Content spacer to guarantee exact matching dynamic height */}
                    <div style={{ display: "flex", flexDirection: "column", gap: (title || "").length > 90 || (snippet || "").length > 150 ? "16px" : "20px", opacity: 0 }}>
                        {title && (
                            <h1
                                style={{
                                    display: "flex",
                                    fontSize: (title || "").length > 110 ? "32px" : (title || "").length > 65 ? "38px" : (title || "").length > 40 ? "42px" : "48px",
                                    fontWeight: 900,
                                    lineHeight: (title || "").length > 65 ? 1.15 : 1.1,
                                    letterSpacing: "-0.5px",
                                    textTransform: "uppercase",
                                    margin: 0,
                                    fontStyle: titleItalic ? "italic" : "normal",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                }}
                            >
                                {title}
                            </h1>
                        )}

                        {snippet && (
                            <div
                                style={{
                                    display: "flex",
                                    padding: (title || "").length > 90 ? "16px 20px" : "20px 24px",
                                }}
                            >
                                <p
                                    style={{
                                        display: "flex",
                                        fontSize: (snippet || "").length > 180 ? "16px" : (snippet || "").length > 110 ? "18px" : "20px",
                                        fontWeight: 600,
                                        margin: 0,
                                        lineHeight: (snippet || "").length > 180 ? 1.45 : 1.5,
                                        wordBreak: "break-word",
                                        overflowWrap: "break-word",
                                    }}
                                >
                                    {snippet}
                                </p>
                            </div>
                        )}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            padding: "13px 22px",
                            marginTop: "20px",
                            opacity: 0,
                        }}
                    >
                        <span style={{ display: "flex", fontSize: "13px" }}>SPACER</span>
                    </div>
                </div>
            </div>

            {/* LAYER 2: DYNAMIC RACING LIVERY STRIPES (ABOVE PHOTO & CARD BACKGROUND, BELOW TEXT & HEADING) */}
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
                    {/* 1. Main Heavy Leader Diagonal Stripe (Primary Color - Rich & Bold) */}
                    <polygon
                        points="1130,-60 1250,-60 590,1410 470,1410"
                        fill={primaryColor}
                        opacity="0.96"
                        stroke={accentColor || "#0F172A"}
                        strokeWidth="1.5"
                        strokeOpacity="0.75"
                    />

                    {/* 2. Accent Contrast Stripe (Accent Color - Rich & Bold) */}
                    <polygon
                        points="1265,-60 1325,-60 665,1410 605,1410"
                        fill={accentColor || "#0F172A"}
                        opacity="0.95"
                        stroke={primaryColor}
                        strokeWidth="1.5"
                        strokeOpacity="0.75"
                    />

                    {/* 3. Secondary Companion Stripe (Primary Color - Rich & Bold) */}
                    <polygon
                        points="1338,-60 1370,-60 710,1410 678,1410"
                        fill={primaryColor}
                        opacity="0.92"
                    />

                    {/* 4. Sharp Accent Pinstripe */}
                    <polygon
                        points="1380,-60 1394,-60 734,1410 720,1410"
                        fill={accentColor || "#0F172A"}
                        opacity="0.88"
                    />
                </svg>
            </div>

            {/* LAYER 3: TOP HEADER RIBBON (RENDERED ON TOP OF STRIPES) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "114px",
                    backgroundColor: primaryColor,
                    padding: "0 56px",
                    boxSizing: "border-box",
                }}
            >
                {/* Brand Identity */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                    {/* White Square Frame for Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#FFFFFF",
                            width: "74px",
                            height: "74px",
                            minWidth: "74px",
                            minHeight: "74px",
                            borderRadius: "16px",
                            boxSizing: "border-box",
                            border: `1px solid ${accentColor}`,
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt="Logo"
                            width="74"
                            height="74"
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
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
                                fontSize: "28px",
                                lineHeight: 1,
                                fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Android Emoji", sans-serif',
                            }}
                        >
                            🏁
                        </div>
                    </div>
                </div>

                {/* Right Badge Tag */}
                {badgeTag && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#FFFFFF",
                            fontSize: "20px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                        }}
                    >
                        {badgeTag}
                    </div>
                )}
            </div>

            {/* LAYER 4: BOTTOM CARD FOREGROUND (TITLE, SNIPPET, AND FOOTER DIV ON TOP OF STRIPES) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: (title || "").length > 90 ? "34px 56px 40px 56px" : "44px 56px 48px 56px",
                    boxSizing: "border-box",
                }}
            >
                {/* Content Stack */}
                <div style={{ display: "flex", flexDirection: "column", gap: (title || "").length > 90 || (snippet || "").length > 150 ? "16px" : "20px", position: "relative" }}>
                    {title && (
                        <h1
                            style={{
                                display: "flex",
                                fontSize: (title || "").length > 110 ? "32px" : (title || "").length > 65 ? "38px" : (title || "").length > 40 ? "42px" : "48px",
                                fontWeight: 900,
                                lineHeight: (title || "").length > 65 ? 1.15 : 1.1,
                                letterSpacing: "-0.5px",
                                textTransform: "uppercase",
                                margin: 0,
                                fontStyle: titleItalic ? "italic" : "normal",
                                color: "#0F172A",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {title}
                        </h1>
                    )}

                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "#F8FAFC",
                                border: `1.5px solid ${primaryColor}55`,
                                borderLeft: `6px solid ${primaryColor}`,
                                padding: (title || "").length > 90 ? "16px 20px" : "20px 24px",
                                borderRadius: "12px",
                            }}
                        >
                            <p
                                style={{
                                    display: "flex",
                                    fontSize: (snippet || "").length > 180 ? "16px" : (snippet || "").length > 110 ? "18px" : "20px",
                                    fontWeight: 600,
                                    color: "#334155",
                                    margin: 0,
                                    lineHeight: (snippet || "").length > 180 ? 1.45 : 1.5,
                                    border: "none",
                                    wordBreak: "break-word",
                                    overflowWrap: "break-word",
                                }}
                            >
                                {snippet}
                            </p>
                        </div>
                    )}
                </div>

                {/* Bottom Source & Status Bar (Soft Muted Tinted Red Footer) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: `${primaryColor}14`,
                        border: `1.5px solid ${primaryColor}33`,
                        padding: "13px 22px",
                        borderRadius: "10px",
                        marginTop: "20px",
                        position: "relative",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            letterSpacing: "2.5px",
                            color: primaryColor,
                            textTransform: "uppercase",
                        }}
                    >
                        {timeAgo || "MOTORSPORT NEWS WIRE"}
                    </span>

                    {sourceDomain && (
                        <span
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 900,
                                letterSpacing: "1.5px",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                                backgroundColor: primaryColor,
                                padding: "6px 14px",
                                borderRadius: "6px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            {sourceDomain}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}