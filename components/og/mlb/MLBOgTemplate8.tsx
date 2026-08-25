import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate8({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#002D62",
    accentColor = "#EB6E1F",
    badgeTag = "BREAKING NEWS",
    author = "Astros Press",
    authorRole = "Houston MLB Desk",
    sourceDomain = "ASTROS.COM/NEWS",
    statusLabel = "LIVE HIGHLIGHT",
    timeAgo = "3 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#FFFFFF",
                fontFamily: "'Montserrat', sans-serif",
                color: "#0F172A",
                boxSizing: "border-box",
                position: "relative",
            }}
        >
            {/* HEADER */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "140px",
                    padding: "0 64px",
                    backgroundColor: "#FFFFFF",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <img
                        src={logoUrl}
                        alt="Logo"
                        crossOrigin="anonymous"
                        style={{ width: "72px", height: "72px", objectFit: "contain" }}
                    />
                    <span
                        style={{
                            fontFamily: "'Oswald', sans-serif",
                            fontSize: "42px",
                            fontWeight: 700,
                            color: primaryColor,
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            marginTop: "4px", // optical alignment for Oswald
                        }}
                    >
                        {teamName}
                    </span>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        backgroundColor: "#F8FAFC",
                        border: `2px solid ${accentColor}`,
                        padding: "10px 24px",
                        borderRadius: "50px",
                    }}
                >
                    <div
                        style={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: accentColor,
                            borderRadius: "50%",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#0F172A",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>
            </div>

            {/* DYNAMIC IMAGE SECTION (Satori friendly) */}
            <div style={{ position: "relative", width: "1080px", height: "660px", display: "flex" }}>
                {/* We use standard nested divs to create a bottom colored border effect instead of clip-path */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "660px",
                        backgroundColor: accentColor,
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "640px",
                        backgroundColor: primaryColor,
                        display: "flex",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "620px",
                        display: "flex",
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
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)",
                        }}
                    />
                </div>

                {/* BREAKING NEWS TAG MOVED TO THE TOP OF THE IMAGE */}
                <div style={{ position: "absolute", top: "32px", left: "64px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <span
                        style={{
                            display: "flex",
                            backgroundColor: primaryColor,
                            color: "#FFFFFF",
                            padding: "10px 24px",
                            fontSize: "18px",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            border: `2px solid ${accentColor}`,
                        }}
                    >
                        {badgeTag}
                    </span>
                    <span
                        style={{
                            fontSize: "16px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                        }}
                    >
                        {timeAgo}
                    </span>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "48px 64px 64px 64px",
                    position: "relative",
                }}
            >
                <h1
                    style={{
                        margin: "0 0 32px 0",
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: title.length > 55 ? "46px" : "54px",
                        fontWeight: 700,
                        lineHeight: 1.05,
                        color: "#0F172A",
                        textTransform: "uppercase",
                        fontStyle: titleItalic ? "italic" : "normal",
                    }}
                >
                    {title}
                </h1>

                <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", marginBottom: "32px" }}>
                    <p
                        style={{
                            margin: 0,
                            fontSize: "24px",
                            fontWeight: 500,
                            lineHeight: 1.5,
                            color: "#334155",
                            borderLeft: `6px solid ${accentColor}`,
                            paddingLeft: "32px",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* FOOTER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "auto",
                        paddingTop: "24px",
                        borderTop: "2px solid #E2E8F0",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#94A3B8",
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                            }}
                        >
                            REPORTED BY
                        </span>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ fontSize: "24px", fontWeight: 800, color: "#0F172A" }}>{author}</span>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: primaryColor }} />
                            <span style={{ fontSize: "18px", fontWeight: 600, color: "#64748B" }}>
                                {authorRole}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#94A3B8",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            SOURCE
                        </span>
                        <span style={{ fontSize: "20px", fontWeight: 800, color: primaryColor, letterSpacing: "1px" }}>
                            {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
