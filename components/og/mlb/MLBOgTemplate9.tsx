import { OgTemplate } from "@/types/og-template";

export function MLBOgTemplate9({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    primaryColor = "#134A8E",
    accentColor = "#E31837",
    badgeTag = "BREAKING NEWS",
    author = "Sportsnet MLB Desk",
    authorRole = "Canada MLB Coverage",
    sourceDomain = "SPORTSNET.CA/JAYS",
    statusLabel = "JUST IN",
    timeAgo = "8 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#0F172A",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#FFFFFF",
                boxSizing: "border-box",
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

            {/* 2. Top Gradient Shroud */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "350px",
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                    display: "flex",
                }}
            />

            {/* 3. Bottom Gradient for Text Legibility (Satori Friendly Stack) */}
            <div
                style={{
                    position: "absolute",
                    bottom: "400px",
                    left: 0,
                    width: "1080px",
                    height: "500px",
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))",
                    display: "flex",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "1080px",
                    height: "400px",
                    backgroundColor: "rgba(0,0,0,0.9)",
                    display: "flex",
                }}
            />

            {/* 4. Elegant Side Accent Bar */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "8px",
                    height: "1350px",
                    backgroundColor: primaryColor,
                    display: "flex",
                }}
            />

            {/* Content Wrapper */}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    padding: "64px 64px 56px 72px", // Extra left padding for the side bar
                    boxSizing: "border-box",
                }}
            >
                {/* Top Header: Badge & Logo */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    {/* Left: Premium Tag */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            borderRadius: "100px",
                            padding: "10px 24px",
                        }}
                    >
                        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: accentColor, marginRight: "12px" }} />
                        <span
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "14px",
                                fontWeight: 700,
                                letterSpacing: "3px",
                                color: "#FFFFFF",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag}
                        </span>
                    </div>

                    {/* Right: Team Brand */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            backgroundColor: "rgba(255,255,255,0.95)",
                            padding: "12px 24px 12px 16px",
                            borderRadius: "100px",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt="Team Logo"
                            crossOrigin="anonymous"
                            style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "contain",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#0F172A",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                marginTop: "2px", // Optical alignment
                            }}
                        >
                            {teamName}
                        </span>
                    </div>
                </div>

                {/* Bottom Content Area */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {/* Status Label */}
                    <div style={{ display: "flex", marginBottom: "24px" }}>
                        <span
                            style={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: "18px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                backgroundColor: primaryColor,
                                padding: "8px 20px",
                                borderRadius: "4px",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                borderBottom: `3px solid ${accentColor}`,
                            }}
                        >
                            {statusLabel}
                        </span>
                    </div>

                    {/* Epic Headline */}
                    <h1
                        style={{
                            margin: "0 0 24px 0",
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "56",
                            lineHeight: 0.95,
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            textShadow: "0 10px 30px rgba(0,0,0,0.8)",
                        }}
                    >
                        {title}
                    </h1>

                    {/* High-end Snippet */}
                    <p
                        style={{
                            margin: "0 0 48px 0",
                            fontSize: "18px",
                            fontWeight: 500,
                            lineHeight: 1.6,
                            color: "#CBD5E1",
                            maxWidth: "920px",
                            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                            borderLeft: `4px solid ${accentColor}`,
                            paddingLeft: "24px",
                        }}
                    >
                        {snippet}
                    </p>

                    {/* Elegant Footer Plate */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "24px",
                            borderTop: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        {/* Reporter Info */}
                        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    color: "#FFFFFF",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {author}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#94A3B8",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                {authorRole}
                            </span>
                        </div>

                        {/* Source & Time */}
                        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                            <span
                                style={{
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#94A3B8",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    color: "#FFFFFF",
                                    backgroundColor: "rgba(255,255,255,0.1)",
                                    padding: "6px 16px",
                                    borderRadius: "100px",
                                    letterSpacing: "1px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                }}
                            >
                                {timeAgo}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
