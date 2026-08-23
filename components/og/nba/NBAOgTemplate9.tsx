import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate9({
    teamName = "MIAMI HEAT",
    title = "HEAT CULTURE PREVAILS: MIAMI SHUTS DOWN HIGH-OCTANE OFFENSE",
    snippet = "Tenacious physical play and fourth-quarter defensive stops earn Miami an essential road triumph in postseason preview.",
    imageUrl = "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
    titleItalic = true,
    primaryColor = "#98002E",
    accentColor = "#F9A01B",
    badgeTag = "BREAKING NEWS",
    author = "Tim Reynolds",
    authorRole = "AP Lead Basketball Writer",
    sourceDomain = "MIAMIHERALD.COM",
    statusLabel = "CONFIRMED",
    timeAgo = "15 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#070A0F",
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
                        "linear-gradient(180deg, rgba(7,10,15,0.5) 0%, rgba(7,10,15,0.1) 35%, transparent 60%, rgba(7,10,15,0.5) 75%, #070A0F 95%)",
                }}
            />

            {/* Top Header Section */}
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
                {/* Left Team Info Box */}
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
                            backgroundColor: "rgba(0,0,0, 0.15)",
                            border: `2px solid ${accentColor}`,
                            padding: "10px",
                            borderRadius: "12px",
                            marginRight: "16px",
                        }}
                    >
                        {logoUrl && (
                            <img
                                src={logoUrl}
                                alt={teamName}
                                style={{
                                    width: "38px",
                                    height: "38px",
                                    objectFit: "contain",
                                }}
                            />
                        )}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "18px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                            }}
                        >
                            {teamName}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: accentColor,
                                letterSpacing: "1.5px",
                                textTransform: "uppercase",
                                marginTop: "2px",
                            }}
                        >
                            OFFICIAL NBA ROSTER TRANSACTION
                        </div>
                    </div>
                </div>

                {/* Flexible Spacer */}
                <div style={{ display: "flex", flex: 1 }} />

                {/* Right Green Status Badge */}
                <div
                    style={{
                        display: "flex",
                        backgroundColor: "#059669",
                        padding: "4px 15px",
                        borderRadius: "6px",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "2px",
                    }}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ display: "flex" }}
                    >
                        <path
                            d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
                            fill="#FFFFFF"
                        />
                    </svg>

                    <span
                        style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </span>
                </div>
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* Bottom Main Content Area */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 50px 50px",
                    position: "relative",
                }}
            >
                {/* Badges Row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: "20px",
                    }}
                >
                    {/* Crimson Defensive Tag */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            backgroundColor: primaryColor,
                            padding: "8px 18px",
                            borderRadius: "6px",
                            border: `2px solid ${accentColor}`,
                            marginRight: "16px",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24">
                                <path
                                    fill="#FFFFFF"
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                />
                            </svg>
                        </div>
                        <span
                            style={{
                                fontSize: "13px",
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: "1px",
                                lineHeight: 1,
                            }}
                        >
                            {badgeTag.toUpperCase()}
                        </span>
                    </div>

                    {/* Log / Time Label */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        TRANSACTION LOG • {timeAgo}
                    </div>
                </div>

                {/* Main Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "52px",
                        fontWeight: 900,
                        fontStyle: titleItalic ? "italic" : "normal",
                        color: "#FFFFFF",
                        lineHeight: 1.08,
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
                            padding: "24px 30px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: "#E2E8F0",
                                lineHeight: 1.4,
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>
                </div>

                {/* Footer Meta Row */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        paddingTop: "20px",
                    }}
                >
                    {/* Author Info */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "14px",
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        LEAGUE TRANSACTION DESK • {author}{" "}
                        {authorRole ? `(${authorRole})` : ""}
                    </div>

                    {/* Flexible Spacer */}
                    <div style={{ display: "flex", flex: 1 }} />

                    {/* Source Domain */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontWeight: 800,
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
