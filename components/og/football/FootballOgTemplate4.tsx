import { OgTemplate } from "@/types/og-template";

// ============================================================================
// 4. PRISM DYNAMIC / FULL-BLEED KINETIC SLICE
// ============================================================================
export function FootballOgTemplate4({
    teamName,
    siteName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#00529F",
    accentColor = "#FEBE10",
    badgeTag = "HERE WE GO!",
    author = "Fabrizio Romano",
    authorRole = "Senior Writer",
    sourceDomain = "SKY SPORTS",
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
                backgroundColor: "#060913",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                position: "relative",
            }}
        >
            {/* Top 68% Full-Bleed Action Image */}
            <div style={{ display: "flex", position: "absolute", top: 0, left: 0, width: "1080px", height: "880px" }}>
                <img src={imageUrl} referrerPolicy="no-referrer" style={{ width: "1080px", height: "880px", objectFit: "cover" }} />
                {/* Multi-stage Cinematic Shadow */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "880px",
                        background: "linear-gradient(180deg, rgba(6,9,19,0.7) 0%, rgba(6,9,19,0.1) 35%, rgba(6,9,19,0.85) 80%, #060913 100%)",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "880px",
                        background: `radial-gradient(circle at 80% 20%, ${primaryColor}55 0%, transparent 60%)`,
                    }}
                />
            </div>

            {/* Giant Watermark Crest Floating Across Background */}
            {logoUrl ? (
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "40px",
                        right: "-60px",
                        opacity: 0.14,
                        transform: "rotate(-8deg)",
                    }}
                >
                    <img src={logoUrl} alt={teamName} style={{ width: "640px", height: "640px", objectFit: "contain" }} />
                </div>
            ) : null}

            {/* Kinetic Diagonal Speed Light Bar */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "760px",
                    left: "-50px",
                    width: "1200px",
                    height: "8px",
                    background: `linear-gradient(90deg, ${accentColor}, ${primaryColor}, transparent)`,
                    transform: "rotate(-2deg)",
                    boxShadow: `0 0 25px ${accentColor}`,
                }}
            />

            {/* Top Header Floating Identity Bar */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "absolute",
                    top: "50px",
                    left: "55px",
                    right: "55px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                    {logoUrl ? (
                        <div
                            style={{
                                display: "flex",
                                width: "65px",
                                height: "65px",
                                borderRadius: "18px",
                                backgroundColor: "#0C1120",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `2px solid ${accentColor}`,
                                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                            }}
                        >
                            <img src={logoUrl} alt={teamName} style={{ width: "48px", height: "48px", objectFit: "contain" }} />
                        </div>
                    ) : null}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "28px", fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "1px" }}>
                            {teamName}
                        </span>
                        <span style={{ fontSize: "16px", color: accentColor, fontWeight: 800, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                            {siteName}
                        </span>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        padding: "10px 24px",
                        borderRadius: "8px",
                        fontSize: "20px",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        border: `1.5px solid ${accentColor}`,
                        boxShadow: `0 8px 24px ${primaryColor}66`,
                    }}
                >
                    {badgeTag}
                </div>
            </div>

            {/* Floating Live Status Pill */}
            <div style={{ display: "flex", position: "absolute", top: "145px", left: "55px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        backgroundColor: "rgba(6,9,19,0.85)",
                        border: "1px solid rgba(255,255,255,0.3)",
                        padding: "8px 20px",
                        borderRadius: "20px",
                    }}
                >
                    <div style={{ display: "flex", width: "10px", height: "10px", borderRadius: "5px", backgroundColor: accentColor }} />
                    <span style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                        {statusLabel} • {timeAgo}
                    </span>
                </div>
            </div>

            {/* Bottom Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "50px",
                    left: "55px",
                    right: "55px",
                }}
            >
                {/* Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "56px",
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

                {/* Details Snippet */}
                {snippet ? (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "#CBD5E1",
                            lineHeight: 1.45,
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderLeft: `6px solid ${accentColor}`,
                            padding: "16px 24px",
                            backgroundColor: "rgba(255,255,255,0.04)",
                            borderRadius: "0 16px 16px 0",
                            marginBottom: "30px",
                        }}
                    >
                        {snippet}
                    </div>
                ) : null}

                {/* Footer Brand & Verified Stamp */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255,255,255,0.14)",
                        paddingTop: "20px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ fontSize: "22px", fontWeight: 800, color: accentColor, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                            {sourceDomain || siteName}
                        </span>
                        <span style={{ fontSize: "18px", color: "#64748B" }}>•</span>
                        <span style={{ fontSize: "18px", color: "#94A3B8", fontWeight: 600 }}>{timeAgo}</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: "#FFFFFF" }}>{author}</span>
                        <span style={{ fontSize: "16px", color: "#94A3B8" }}>({authorRole})</span>
                    </div>
                </div>
            </div>
        </div>
    );
}