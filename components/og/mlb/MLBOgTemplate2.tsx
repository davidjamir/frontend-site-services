import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate2({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    accentColor = "#FFB81C",
    badgeTag = "EXCLUSIVE REPORT",
    author = "Ken Rosenthal",
    authorRole = "Senior Writer",
    sourceDomain = "THEATHLETIC.COM",
    statusLabel = "SPECIAL COVERAGE",
    timeAgo = "10 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#050505",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Image framed completely full-bleed without padding */}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    width: "1080px",
                    height: "700px",
                    borderBottom: `4px solid ${accentColor}`,
                    overflow: "hidden",
                }}
            >
                <img
                    src={imageUrl}
                    alt={title}
                    crossOrigin="anonymous"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                {/* Soft scrim just for top text legibility if needed, but keeping it clean */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "150px",
                        background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
                    }}
                />

                {/* Floating Masthead */}
                <div
                    style={{
                        position: "absolute",
                        top: "40px",
                        left: "48px",
                        right: "48px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "4px",
                            color: "#FFFFFF",
                            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                        }}
                    >
                        {sourceDomain}
                    </span>
                    <span
                        style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "2px",
                            color: "#FFFFFF",
                            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                        }}
                    >
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* Content strictly separated, no gradients */}
            <div
                style={{
                    flex: 1,
                    padding: "56px 64px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: accentColor,
                                textTransform: "uppercase",
                                borderBottom: `2px solid ${accentColor}`,
                                paddingBottom: "4px",
                            }}
                        >
                            {badgeTag}
                        </span>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "2px",
                                color: "#9CA3AF",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel}
                        </span>
                    </div>
                    <h1
                        style={{
                            margin: "0 0 24px 0",
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: title.length > 55 ? "48px" : "54px",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            color: "#FFFFFF",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "22px",
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: "#D1D5DB",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Author Signature & Seal */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                        paddingTop: "32px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                border: `2px solid ${accentColor}`,
                                padding: "4px",
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                crossOrigin="anonymous"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "50%",
                                }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "20px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                }}
                            >
                                {author}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#9CA3AF",
                                    letterSpacing: "1px",
                                }}
                            >
                                {authorRole}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "3px",
                                color: "#6B7280",
                            }}
                        >
                            PUBLISHED BY
                        </span>
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "20px",
                                fontWeight: 700,
                                color: accentColor,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
