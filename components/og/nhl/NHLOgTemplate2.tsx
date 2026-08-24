import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate2({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#000000",
    accentColor = "#FFB81C",
    badgeTag = "BREAKING NEWS",
    author = "Pierre LeBrun",
    authorRole = "The Athletic Senior Columnist",
    sourceDomain = "THEATHLETIC.COM/BOS",
    statusLabel = "OVERTIME THRILLER",
    timeAgo = "5 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#F8FAFC",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#0F172A",
                boxSizing: "border-box",
            }}
        >
            {/* Split Screen Layout: Left 60% Image, Right 40% Content */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    right: "20px",
                    bottom: "20px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "40px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                }}
            >
                {/* Left Side: Photography */}
                <div
                    style={{
                        display: "flex",
                        width: "600px",
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={teamName}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "40px 0 0 40px",
                        }}
                    />
                    {/* Badge */}
                    <div
                        style={{
                            display: "flex",
                            position: "absolute",
                            bottom: "40px",
                            left: "40px",
                            backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
                            padding: "16px 24px",
                            borderRadius: "20px",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: primaryColor,
                                marginRight: "12px",
                            }}
                        />
                        <span style={{ fontSize: "16px", fontWeight: 800, color: "#000000", letterSpacing: "2px" }}>
                            {statusLabel}
                        </span>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "400px",
                        height: "100%",
                        padding: "50px 40px",
                        justifyContent: "space-between",
                        backgroundColor: "#FFFFFF",
                    }}
                >
                    {/* Top Right: Team Info */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100px",
                                height: "100px",
                                backgroundImage: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
                                borderRadius: "24px",
                                border: "1px solid #E2E8F0",
                                marginBottom: "20px",
                            }}
                        >
                            <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <span style={{ fontSize: "16px", fontWeight: 800, color: primaryColor, letterSpacing: "3px", textAlign: "right" }}>
                            {teamName}
                        </span>
                        <div
                            style={{
                                display: "flex",
                                width: "40px",
                                height: "4px",
                                backgroundColor: accentColor,
                                marginTop: "16px",
                            }}
                        />
                    </div>

                    {/* Middle Right: Title & Snippet */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                color: "#00000099",
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                marginBottom: "20px",
                            }}
                        >
                            {badgeTag} // {timeAgo}
                        </span>
                        <h1
                            style={{
                                display: "flex",
                                fontSize: "40px",
                                fontWeight: 900,
                                color: "#0F172A",
                                lineHeight: 1.1,
                                fontStyle: titleItalic ? "italic" : "normal",
                                margin: "0 0 24px 0",
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                display: "flex",
                                fontSize: "18px",
                                fontWeight: 500,
                                color: "#475569",
                                lineHeight: 1.6,
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>

                    {/* Bottom Right: Author Info */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "30px",
                            borderTop: "1px solid #E2E8F0",
                        }}
                    >
                        <span style={{ fontSize: "16px", fontWeight: 900, color: "#0F172A", marginBottom: "4px" }}>
                            {author}
                        </span>
                        <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "1px" }}>
                            {authorRole} • {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

