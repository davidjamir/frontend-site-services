import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate10({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#0284C7",
    accentColor = "#EAB308",
    badgeTag = "BREAKING NEWS",
    author = "Brian Windhorst",
    authorRole = "Senior NBA Correspondent",
    sourceDomain = "ESPN.COM/NBA",
    statusLabel = "CONFIRMED",
    timeAgo = "5 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#030712",
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
                        `linear-gradient(180deg, rgba(3,7,18,0.15) 0%, rgba(3,7,18,0.05) 20%, transparent 50%, ${primaryColor}30 75%, ${primaryColor}60 100%)`,
                }}
            />

            {/* Top Bar Header */}
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
                {/* Category Tag */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "rgba(15, 23, 42, 0.6)",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        padding: "10px 22px",
                        borderRadius: "6px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#38BDF8",
                            letterSpacing: "1.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        NBA MIDNIGHT HARDWOOD
                    </div>
                </div>

                {/* Spacer đẩy Logo sang phải */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Team Logo */}
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

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Main Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Status Line: Badge & Time */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#0284C7",
                            color: "#FFFFFF",
                            padding: "10px 20px",
                            borderRadius: "6px",
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
                            {badgeTag}
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            marginLeft: "16px",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel} • {timeAgo}
                    </div>
                </div>

                {/* Main Title */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "58px",
                        fontWeight: 800,
                        fontStyle: titleItalic ? "italic" : "normal",
                        color: "#FFFFFF",
                        lineHeight: 1.05,
                        marginBottom: "28px",
                        letterSpacing: "-0.5px",
                        textTransform: "uppercase",
                    }}
                >
                    {title}
                </div>

                {/* Snippet Card */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        marginBottom: "28px",
                    }}
                >
                    {/* LAYER PHÍA SAU — render trước */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            top: "0",
                            left: "-6px",
                            right: "0",
                            bottom: "0",
                            backgroundColor: accentColor,
                            borderRadius: "12px",
                        }}
                    />

                    {/* CARD PHÍA TRƯỚC — render sau nên nằm trên */}
                    <div
                        style={{
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                            backgroundColor: "rgb(0,0,0)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            padding: "24px 28px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#E2E8F0",
                                lineHeight: 1.4,
                                margin: 0,
                                fontFamily: "Georgia, serif",
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                </div>

                {/* Footer Info Line */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    {/* Author Info */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        BEAT WIRE: {author} {authorRole ? `• ${authorRole}` : ""}
                    </div>

                    {/* Spacer */}
                    <div style={{ display: "flex", flex: 1 }} />

                    {/* Source Domain */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: accentColor,
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {sourceDomain}
                    </div>
                </div>
            </div>
        </div>
    );
}