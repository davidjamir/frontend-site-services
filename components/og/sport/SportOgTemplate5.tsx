import { OgTemplate } from "@/types/og-template";

export function SportOgTemplate5({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#005A9C",
    badgeTag = "DIVISION CHAMPS",
    author = "ESPN MLB Insider",
    authorRole = "Senior Writer",
    sourceDomain = "ESPN.COM",
    statusLabel = "SPECIAL COVERAGE",
    timeAgo = "2 HOURS AGO",

}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Montserrat', sans-serif",
                boxSizing: "border-box",
                backgroundColor: "#FFFFFF",
            }}
        >
            {/* 1. Full Bleed Background Image */}
            <img
                src={imageUrl}
                alt={title}
                crossOrigin="anonymous"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    objectFit: "cover",
                }}
            />

            {/* 2. Soft Light Scrim Overlay on Top for Contrast */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "280px",
                    backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                    display: "flex",
                    pointerEvents: "none",
                }}
            />

            {/* 3. Top Floating Masthead / Status Pills */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "48px 56px 0 56px",
                }}
            >
                {/* Status Pill with Blur */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(16px)",
                        padding: "12px 22px",
                        borderRadius: "50px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <div
                        style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: primaryColor,
                            borderRadius: "50%",
                        }}
                    />
                    <span
                        style={{
                            color: "#0F172A",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>

                {/* Time Ago Tag with Blur */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(16px)",
                        padding: "12px 20px",
                        borderRadius: "50px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    <span
                        style={{
                            color: "#334155",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* 4. Bottom White Frosted Glass Card (Nền trắng mờ blur) */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    margin: "0 40px 40px 40px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(24px)",
                    borderRadius: "28px",
                    padding: "40px 52px",
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.9)",
                    border: "2px solid rgba(255, 255, 255, 0.9)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                }}
            >
                {/* Top Badges & Team Info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <span
                            style={{
                                backgroundColor: primaryColor,
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: 800,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                boxShadow: `0 6px 16px ${primaryColor}40`,
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "52px",
                            height: "52px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "14px",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                            border: "1px solid rgba(0,0,0,0.05)",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt="Logo"
                            crossOrigin="anonymous"
                            style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>

                {/* Title */}
                <h1
                    style={{
                        margin: 0,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: title.length > 50 ? "44px" : "54px",
                        fontWeight: 900,
                        lineHeight: 1.12,
                        color: "#0F172A",
                        textTransform: "uppercase",
                        letterSpacing: "-0.5px",
                        fontStyle: titleItalic ? "italic" : "normal",
                    }}
                >
                    {title}
                </h1>

                {/* Snippet with left accent bar */}
                <div style={{ display: "flex", gap: "18px" }}>
                    <div
                        style={{
                            width: "5px",
                            backgroundColor: primaryColor,
                            borderRadius: "4px",
                            display: "flex",
                        }}
                    />
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "22px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: "#334155",
                            maxWidth: "880px",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Footer Bar inside the card */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "24px",
                        borderTop: "1px solid rgba(15, 23, 42, 0.08)",
                        marginTop: "8px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "17px", fontWeight: 800, color: "#0F172A" }}>
                            {author}
                        </span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>•</span>
                        <span style={{ fontSize: "15px", fontWeight: 600, color: "#64748B" }}>
                            {authorRole}
                        </span>
                    </div>

                    <span
                        style={{
                            fontSize: "15px",
                            fontWeight: 800,
                            letterSpacing: "2px",
                            color: primaryColor,
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain}
                    </span>
                </div>
            </div>
        </div>
    );
}
