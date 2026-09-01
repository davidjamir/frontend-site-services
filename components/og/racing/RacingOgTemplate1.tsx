import { OgTemplate } from "@/types/og-template";

export function RacingOgTemplate1({
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
            {/* FULL-BLEED BACKGROUND IMAGE WITH GRADIENT OVERLAYS */}
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

                    {/* Top gradient for header legibility */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "180px",
                            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.2) 65%, transparent 100%)",
                        }}
                    />

                    {/* Bottom gradient behind text card */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "600px",
                            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 65%, transparent 100%)",
                        }}
                    />
                </div>
            )}

            {/* MAIN CONTENT CONTAINER */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    padding: "48px 56px 56px 56px",
                    boxSizing: "border-box",
                }}
            >
                {/* HEADER: F1 Logo + FORMULA 1 + Flag & Top-Right Tag */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingBottom: "24px",
                        borderBottom: "1.5px solid rgba(255, 255, 255, 0.25)",
                    }}
                >
                    {/* Left Brand Identity */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
                        {/* Transparent Frame for Logo */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "transparent",
                                width: "64px",
                                height: "64px",
                                minWidth: "64px",
                                minHeight: "64px",
                                boxSizing: "border-box",
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                width="64"
                                height="64"
                                style={{
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                    maxHeight: "56px",
                                    maxWidth: "64px",
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
                                border: `1px solid ${accentColor}`,
                                padding: "10px 22px",
                                borderRadius: "8px",
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
                                    fontWeight: 800,
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

                {/* BOTTOM TEXT CARD (Auto-expanding height according to content) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: (title || "").length > 90 || (snippet || "").length > 150 ? "16px" : "20px",
                        marginTop: "auto",
                        height: "auto",
                        maxHeight: "960px",
                        backgroundColor: "rgba(15, 23, 42, 0.5)",
                        border: `1.5px solid ${accentColor}`,
                        padding: (title || "").length > 90 ? "30px 38px" : "36px 42px",
                        borderRadius: "24px",
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                >
                    {/* Badge Tag */}
                    {badgeTag && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: primaryColor,
                                    color: "#FFFFFF",
                                    padding: "8px 20px",
                                    borderRadius: "6px",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                    letterSpacing: "2.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {badgeTag}
                            </div>
                        </div>
                    )}

                    {/* Headline Title */}
                    {title && (
                        <h1
                            style={{
                                display: "flex",
                                fontSize: (title || "").length > 110 ? "32px" : (title || "").length > 65 ? "38px" : (title || "").length > 40 ? "42px" : "48px",
                                fontWeight: 900,
                                lineHeight: (title || "").length > 65 ? 1.3 : 1.2,
                                letterSpacing: "-0.5px",
                                textTransform: "uppercase",
                                margin: 0,
                                fontStyle: titleItalic ? "italic" : "normal",
                                color: "#FFFFFF",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {title}
                        </h1>
                    )}

                    {/* Lead Snippet */}
                    {snippet && (
                        <p
                            style={{
                                display: "flex",
                                fontSize: (snippet || "").length > 180 ? "16px" : (snippet || "").length > 110 ? "18px" : "20px",
                                fontWeight: 700,
                                color: "#F1F5F9",
                                margin: 0,
                                lineHeight: (snippet || "").length > 180 ? 1.45 : 1.5,
                                borderLeft: `5px solid ${primaryColor}`,
                                paddingLeft: "20px",
                                wordBreak: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {snippet}
                        </p>
                    )}

                    {/* Source Domain Outlet (if provided) */}
                    {sourceDomain && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                paddingTop: "12px",
                                borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    color: "rgba(255, 255, 255, 0.7)",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}