import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate5({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    badgeTag = "BREAKING NEWS • BREAKING NEWS",
    author = "Shams Charania",
    authorRole = "Senior NBA Insider",
    sourceDomain = "SKY SPORTS NBA",
    statusLabel = "OFFICIAL",
    timeAgo = "4 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#050B14",
                position: "relative",
                overflow: "hidden",
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
                        "linear-gradient(180deg, rgba(5, 11, 20, 0.2) 0%, rgba(5, 11, 20, 0.05) 20%, transparent 50%, rgba(5, 11, 20, 0.6) 80%, #050B14 100%)",
                }}
            />

            {/* Header Bar */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "1080px",
                    padding: "60px 60px 0 60px",
                    position: "relative",
                }}
            >
                {/* Left Tag Group */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "#FFE600",
                            color: "#000000",
                            padding: "10px 22px",
                            borderRadius: "4px",
                            fontWeight: 700,
                            fontSize: "14px",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                            boxShadow: "0 0 20px #FFE60099",
                        }}
                    >
                        {sourceDomain}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            color: "#FFFFFF",
                            padding: "10px 22px",
                            borderRadius: "4px",
                            fontWeight: 700,
                            fontSize: "14px",
                            marginLeft: "14px",
                            border: "1px solid rgba(255, 255, 255, 0.4)",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        GLOBAL WIRE
                    </div>
                </div>

                {/* Spacer đẩy phần Logo Team sang phải */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Right Team Tag */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        padding: "8px 20px",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                >
                    {logoUrl && (
                        <img
                            src={logoUrl}
                            alt={teamName}
                            style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "contain",
                                marginRight: "12px",
                            }}
                        />
                    )}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {teamName}
                    </div>
                </div>
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Main Content Card Container */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 60px 60px 60px",
                    position: "relative",
                }}
            >
                {/* Top Tab Badge */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "#FFE600",
                        color: "#000000",
                        padding: "10px 30px",
                        borderRadius: "6px 6px 0 0",
                        alignSelf: "flex-start",
                        fontWeight: 700,
                        fontSize: "16px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                    }}
                >
                    {badgeTag}
                </div>

                {/* Content Box */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#08101E",
                        borderRadius: "0 16px 16px 16px",
                        border: `2px solid #FFFFFF50`,
                        borderTop: `2px solid #FFE600`,
                        padding: "40px 44px",
                        boxShadow: `
                        -10px 12px 40px -8px #FFFFFF15,
                        10px 12px 40px -8px #FFFFFF15,
                        0 16px 30px -8px #FFFFFF15
                        `,
                    }}
                >
                    {/* Title */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "48px",
                            fontWeight: 900,
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            margin: "0 0 20px 0",
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
                                color: "#94A3B8",
                                lineHeight: 1.45,
                                margin: "0 0 28px 0",
                                fontWeight: 500,
                            }}
                        >
                            {snippet}
                        </div>
                    )}

                    {/* Footer Bar */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                            paddingTop: "20px",
                        }}
                    >
                        {/* Reporter Info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                fontSize: "15px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            <div style={{ display: "flex", color: "#FFFFFF" }}>
                                REPORTED BY: {author}
                            </div>
                            {authorRole && (
                                <div
                                    style={{
                                        display: "flex",
                                        color: "#64748B",
                                        fontWeight: 600,
                                        marginLeft: "8px",
                                        textTransform: "none",
                                    }}
                                >
                                    ({authorRole})
                                </div>
                            )}
                        </div>

                        {/* Spacer */}
                        <div style={{ display: "flex", flex: 1 }} />

                        {/* Time / Status Tag */}
                        <div
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "#FFE600",
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
