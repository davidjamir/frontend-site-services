import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 9. OBSIDIAN GALA / BALLON D'OR GOLD ROYALE
// ============================================================================
export function FootballOgTemplate9({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    badgeTag = "BALLON D'OR",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "FRANCE FOOTBALL",
    statusLabel = "OFFICIAL",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#040508",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
            }}
        >
            {/* Full Luxury Background Image */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "1350px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "1350px", objectFit: "cover" }} />

                {/* Over Lay */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "1080px",
                        height: "1350px",
                        backgroundImage:
                            "linear-gradient(to bottom, rgba(4,5,8,0.85) 0%, rgba(4,5,8,0.2) 35%, rgba(4,5,8,0.88) 70%, rgba(4,5,8,0.98) 100%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "-100px",
                        right: "-100px",
                        width: "650px",
                        height: "650px",
                        background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
                    }}
                />
            </div>

            {/* Giant Gold Crest Watermark */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "140px",
                        right: "-50px",
                        opacity: 0.14,
                        transform: "rotate(-6deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "540px", height: "540px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Top Gala Header */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "55px",
                    left: "55px",
                    right: "55px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#D4AF37",
                            color: "#000000",
                            padding: "10px 24px",
                            borderRadius: "4px",
                            fontSize: "20px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            boxShadow: "0 8px 25px rgba(212,175,55,0.4)",
                        }}
                    >
                        {badgeTag}
                    </div>
                    <span style={{ fontSize: "20px", color: "#D4AF37", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
                        {siteName}
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        border: "1px solid rgba(212,175,55,0.4)",
                        padding: "10px 22px",
                        borderRadius: "30px",
                    }}
                >
                    <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 700 }}>{statusLabel}</span>
                </div>
            </div>

            {/* Bottom Luxury Panel */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "55px",
                    left: "55px",
                    right: "55px",
                }}
            >
                {/* Gold Crest Medallion */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            width: "95px",
                            height: "95px",
                            borderRadius: "47px",
                            backgroundColor: "#0C0F17",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "3px solid #D4AF37",
                            boxShadow: "0 12px 35px rgba(0,0,0,0.9)",
                            marginBottom: "22px",
                        }}
                    >
                        <img src={logoUrl} alt={teamName} style={{ width: "62px", height: "62px", objectFit: "contain" }} />
                    </div>
                ) : null}

                {/* Main Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "62px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        textTransform: "uppercase",
                        lineHeight: 0.94,
                        color: "#FFFFFF",
                        marginBottom: "22px",
                    }}
                >
                    {title}
                </div>

                {/* Details */}
                {snippet ? (
                    <div style={{ display: "flex", fontSize: "26px", color: "#FFFFFF", lineHeight: 1.45, marginBottom: "30px", width: "900px" }}>
                        {snippet}
                    </div>
                ) : null}

                {/* Footer Club Stamp */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(212,175,55,0.3)",
                        paddingTop: "20px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "24px", fontWeight: 800, color: "#D4AF37", textTransform: "uppercase" }}>{teamName}</span>
                        <span style={{ fontSize: "18px", color: "#64748B" }}>•</span>
                        <span style={{ fontSize: "18px", color: "#94A3B8" }}>{sourceDomain || siteName}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>{authorRole}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}