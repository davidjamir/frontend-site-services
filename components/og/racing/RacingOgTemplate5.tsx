import { OgTemplate } from "@/types/og-template";

export function RacingOgTemplate5({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#CE1126",
    badgeTag = "GAME RECAP",
    sourceDomain = "SPORTSNET.CA",
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
                padding: "0",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
            }}
        >
            {/* TOP HEADER: WHITE MAGAZINE RIBBON */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#FFFFFF",
                    padding: "0 48px",
                    boxSizing: "border-box",
                    borderBottom: `2.5px solid ${primaryColor}`,
                    position: "relative",
                }}
            >
                {/* Brand Identity */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "18px" }}>
                    {/* Transparent Container for Logo */}
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
                            src={logoUrl || "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg"}
                            alt="Logo"
                            width="64"
                            height="64"
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                maxHeight: "54px",
                                maxWidth: "64px",
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
                                letterSpacing: "2.5px",
                                color: "#0F172A",
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
                </div>

                {/* Header Right: Timestamp */}
                {timeAgo && (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                backgroundColor: primaryColor,
                            }}
                        />
                        <span
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "#475569",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {timeAgo}
                        </span>
                    </div>
                )}
            </div>

            {/* MIDDLE: FULL PHOTO FRAME */}
            <div
                style={{
                    display: "flex",
                    flex: 1,
                    minHeight: 0,
                    position: "relative",
                    width: "100%",
                    backgroundColor: "#000000",
                    overflow: "hidden",
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Photo"
                        width="1080"
                        height="850"
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                )}

                {/* Subtle bottom shadow overlay */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(180deg, rgba(8,12,20,0.15) 0%, rgba(8,12,20,0.7) 100%)",
                    }}
                />

                {/* Top-Left Badge (Breaking News) */}
                {badgeTag && (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "28px",
                            left: "48px",
                            backgroundColor: primaryColor,
                            color: "#FFFFFF",
                            padding: "10px 24px",
                            borderRadius: "6px",
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                        }}
                    >
                        {badgeTag}
                    </div>
                )}
            </div>

            {/* BOTTOM: CRISP WHITE NEWS CARD (AUTO HEIGHT ACCORDING TO CONTENT) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    height: "auto",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF",
                    padding: (title || "").length > 90 ? "30px 48px" : "40px 48px",
                    boxSizing: "border-box",
                    borderTop: `6px solid ${primaryColor}`,
                    color: "#0F172A",
                    position: "relative",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: (title || "").length > 90 || (snippet || "").length > 150 ? "12px" : "16px" }}>
                    {title && (
                        <h1
                            style={{
                                display: "flex",
                                fontSize: (title || "").length > 110 ? "30px" : (title || "").length > 65 ? "36px" : (title || "").length > 40 ? "40px" : "46px",
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
                        <p
                            style={{
                                display: "flex",
                                fontSize: (snippet || "").length > 180 ? "16px" : (snippet || "").length > 110 ? "17px" : "19px",
                                fontWeight: 600,
                                color: "#475569",
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
                </div>

                {/* Bottom Press Strip */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "24px",
                        paddingTop: "18px",
                        borderTop: "2px dashed #E2E8F0",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: primaryColor,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        ALL RACING MEDIA WIRE
                    </span>

                    {sourceDomain && (
                        <div
                            style={{
                                display: "flex",
                                backgroundColor: "#0F172A",
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                borderRadius: "6px",
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}