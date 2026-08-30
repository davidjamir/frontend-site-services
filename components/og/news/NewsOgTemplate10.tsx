import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate10({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "ENERGY BREAKTHROUGH",
    timeAgo = "ICELAND // DISPATCH",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#080C14",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed High-Definition Background Photo */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt=""
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                    }}
                />
            )}

            {/* Atmospheric Dark Gradient Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(8,12,20,0.65) 0%, rgba(8,12,20,0.2) 35%, rgba(8,12,20,0.6) 65%, rgba(8,12,20,0.95) 100%)",
                }}
            />

            {/* 2. Top Header Brand Bar (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "54px",
                    left: "56px",
                    width: "968px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo with explicit pixel dimensions for Satori */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "50px" }}>
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            style={{
                                width: "62px",
                                height: "62px",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "26px",
                                fontWeight: 900,
                                color: accentColor,
                                letterSpacing: "3px",
                                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>

                {/* Dynamic Primary Color Badge */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "8px 22px",
                        backgroundColor: primaryColor,
                        color: "#FFFFFF",
                        fontSize: "13px",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        borderRadius: "4px",
                    }}
                >
                    {badgeTag}
                </div>
            </div>

            {/* 3. Floating Architectural Monolith News Card (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "105px",
                    left: "56px",
                    width: "968px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    boxShadow: `0 0px 40px ${primaryColor}66`,
                    boxSizing: "border-box",
                }}
            >
                {/* LAYER PHÍA SAU — render trước */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: "-6px",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        backgroundColor: primaryColor,
                        borderRadius: "12px",
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        flexDirection: "column",
                        padding: "48px 52px",
                        backgroundColor: "#FFFFFF",
                        gap: "20px",
                        borderRadius: "12px",
                        border: `1.5px solid ${primaryColor}`,


                    }}
                >
                    {/* Status Label Pill */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontFamily: "'JetBrains Mono', monospace",
                                fontWeight: 700,
                                color: primaryColor,
                                backgroundColor: `${primaryColor}15`,
                                border: `1.5px solid ${primaryColor}`,
                                padding: "6px 16px",
                                borderRadius: "4px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel}
                        </div>
                    </div>

                    {/* Headline */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "44px",
                            lineHeight: 1.15,
                            fontWeight: 800,
                            color: "#0F172A",
                            letterSpacing: "-0.5px",
                            fontStyle: titleItalic ? "italic" : "normal",
                        }}
                    >
                        {title}
                    </div>

                    {/* Excerpt Snippet */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "21px",
                                lineHeight: 1.5,
                                color: "#475569",
                                maxWidth: "860px",
                            }}
                        >
                            {snippet}
                        </div>
                    )}

                    {/* Clean Card Footer */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "18px",
                            borderTop: "1.5px solid #E2E8F0",
                            fontSize: "13px",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "#64748B",
                        }}
                    >
                        <span style={{ fontWeight: 700, color: "#0F172A" }}>{timeAgo}</span>
                        <span style={{ color: primaryColor, fontWeight: 700, letterSpacing: "1px" }}>{sourceDomain}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
