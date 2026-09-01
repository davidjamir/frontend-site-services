import { OgTemplate } from "@/types/og-template";

export function SportOgTemplate3({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "EXCLUSIVE QUOTE",
    author = "Club Captain",
    authorRole = "Senior Writer",
    sourceDomain = "REALMADRID.COM",
    statusLabel = "CONFIRMED",
    timeAgo = "JUST NOW",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#04060B",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* 1. Full Screen Canvas Image */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "1350px" }}>
                <img
                    src={imageUrl}
                    referrerPolicy="no-referrer"
                    style={{ width: "1080px", height: "1350px", objectFit: "cover" }}
                />
                {/* Subtle Edge Vignette */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        background: "linear-gradient(180deg, rgba(4,6,11,0.7) 0%, rgba(4,6,11,0.15) 30%, rgba(4,6,11,0.2) 70%, rgba(4,6,11,0.85) 100%)",
                    }}
                />

            </div>

            {/* 3. Top Floating Navigation Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "45px",
                    left: "45px",
                    right: "45px",
                }}
            >
                {/* Live Breaking Badge */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: primaryColor,
                        padding: "10px 24px",
                        borderRadius: "8px",
                        transform: "skewX(-10deg)",
                        border: `2px solid ${accentColor}`,
                        boxShadow: `0 8px 24px ${primaryColor}66`,
                    }}
                >
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            letterSpacing: "2.5px",
                            transform: "skewX(10deg)",
                        }}
                    >
                        {badgeTag}
                    </span>
                </div>

                {/* Status & Time Pill */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(6,10,20,0.85)",
                        padding: "10px 22px",
                        borderRadius: "30px",
                        border: "1px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "10px",
                            height: "10px",
                            borderRadius: "5px",
                            backgroundColor: accentColor,
                            marginRight: "10px",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "17px",
                            color: accentColor,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        {statusLabel}
                    </span>
                    <span style={{ fontSize: "16px", color: "#CBD5E1", marginLeft: "10px", fontWeight: 600 }}>• {timeAgo}</span>
                </div>
            </div>

            {/* 4. Center Quote Card - Highly Translucent Glass Frame */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "960px",
                    backgroundColor: "rgba(6, 12, 26, 0.42)",
                    border: "1.5px solid rgba(255, 255, 255, 0.28)",
                    borderRadius: "32px",
                    padding: "50px 50px 42px",
                    alignItems: "center",
                    position: "relative",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.55)",
                }}
            >
                {/* Floating Crest Shield Top Emblem */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "-48px",
                            width: "96px",
                            height: "96px",
                            borderRadius: "26px",
                            backgroundColor: "#0B101E",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            border: `2.5px solid ${accentColor}`,
                            boxShadow: "0 16px 36px rgba(0,0,0,0.7)",
                        }}
                    >
                        <img src={logoUrl} alt={teamName} style={{ width: "94px", height: "94px", objectFit: "contain" }} />
                    </div>
                ) : null}

                {/* Big Stylized Neon Quotation Mark */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "120px",
                        color: accentColor,
                        opacity: 0.9,
                        fontFamily: "Georgia, serif",
                        lineHeight: 0.7,
                        marginTop: "15px",
                        marginBottom: "15px",
                    }}
                >
                    “
                </div>

                {/* Main Quote Text */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "56px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        lineHeight: 1.12,
                        textAlign: "center",
                        marginBottom: "26px",
                        color: "#FFFFFF",
                        width: "860px",
                    }}
                >
                    {title}
                </div>

                {/* Speaker Snippet / Context */}
                {snippet ? (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "#FFFFFF",
                            lineHeight: 1.45,
                            textAlign: "center",
                            marginBottom: "32px",
                            width: "800px",
                        }}
                    >
                        {snippet}
                    </div>
                ) : null}

                {/* Horizontal Divider Line */}
                <div style={{ display: "flex", width: "860px", height: "1px", backgroundColor: "rgba(255,255,255,0.15)", marginBottom: "26px" }} />

                {/* Speaker Identity & Verified Stamp */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "860px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "4px",
                                height: "42px",
                                backgroundColor: accentColor,
                                borderRadius: "2px",
                                marginRight: "16px",
                            }}
                        />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.5px" }}>{author}</span>
                                <div
                                    style={{
                                        display: "flex",
                                        width: "22px",
                                        height: "22px",
                                        borderRadius: "11px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#FFFFFF",
                                        fontSize: "13px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <svg
                                        width="22"
                                        height="22"
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
                            </div>
                            <span style={{ fontSize: "16px", color: accentColor, fontWeight: 700, marginTop: "2px" }}>
                                {authorRole} • {teamName}
                            </span>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span style={{ fontSize: "16px", color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                            {siteName}
                        </span>
                        <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 800, marginTop: "2px" }}>
                            {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}