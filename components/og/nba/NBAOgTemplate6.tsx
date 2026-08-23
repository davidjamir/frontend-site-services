import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate6({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#B91C1C",
    accentColor = "#FDB927",
    badgeTag = "BREAKING NEWS",
    author = "Shams Charania",
    authorRole = "Senior NBA Insider",
    sourceDomain = "NBA ON TNT",
    statusLabel = "JUST IN",
    timeAgo = "4 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#040711",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Background Image */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
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

            {/* Dark Overlay Gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(4,7,17,0.3) 0%, rgba(4,7,17,0.1) 40%, rgba(4,7,17,0.4) 75%, #040711 100%)",
                }}
            />

            {/* Top Header Bar */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "1080px",
                    padding: "50px 50px 0 50px",
                    position: "relative",
                }}
            >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    {/* Main Network Tag */}
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#002244",
                            border: `2px solid ${accentColor}`,
                            padding: "10px 22px",
                            borderRadius: "8px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    </div>

                    {/* Sub Network Tag */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            marginLeft: "16px",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        SPECIAL PRIMETIME DESK
                    </div>
                </div>

                {/* Flexible Spacer đẩy Logo sang góc phải */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Logo Team */}
                {logoUrl && (
                    <img
                        src={logoUrl}
                        alt={teamName}
                        style={{
                            width: "72px",
                            height: "72px",
                            objectFit: "contain",
                        }}
                    />
                )}
            </div>

            {/* Flexible Spacer đẩy nội dung xuống dưới */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Bottom Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Double Top Badges */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "flex-start",
                    }}
                >
                    {/* Red Breaking Badge */}
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#B91C1C",
                            color: "#FFFFFF",
                            padding: "10px 25px",
                            borderRadius: "6px 0 0 0",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            🚨 {badgeTag}
                        </div>
                    </div>

                    {/* Purple Team Name Badge */}
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: primaryColor,
                            color: "#FFFFFF",
                            padding: "10px 25px",
                            borderRadius: "0 6px 0 0",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </div>
                    </div>
                </div>

                {/* Main Content Box */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(5, 10, 20, 0.92)",
                        borderRadius: "0 12px 12px 12px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        borderLeft: `6px solid ${accentColor}`,
                        padding: "36px 40px",
                    }}
                >
                    {/* Title */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "56px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            lineHeight: 1.06,
                            marginBottom: "20px",
                            letterSpacing: "-0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet Description */}
                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                color: "#CBD5E1",
                                lineHeight: 1.45,
                                marginBottom: "28px",
                                fontWeight: 500,
                            }}
                        >
                            {snippet}
                        </div>
                    )}

                    {/* Footer Metadata */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                            paddingTop: "18px",
                        }}
                    >
                        {/* Author / Insider Info */}
                        <div
                            style={{
                                display: "flex",
                                fontSize: "15px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            INSIDER: {author} {authorRole ? `• ${authorRole}` : ""}
                        </div>

                        {/* Flexible Spacer */}
                        <div style={{ display: "flex", flex: 1 }} />

                        {/* Status & Time */}
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: accentColor,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {statusLabel} • {timeAgo}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}