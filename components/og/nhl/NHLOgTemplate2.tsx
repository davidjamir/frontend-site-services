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
                backgroundColor: "#F1F5F9",
                position: "relative",
                fontFamily: "Montserrat",
                color: "#0F172A",
                boxSizing: "border-box",
                padding: "24px",
            }}
        >
            {/* Outer Frame (Satori 100% compatible - no filter, no z-index) */}
            <div
                style={{
                    display: "flex",
                    width: "1032px",
                    height: "1302px",
                    position: "relative",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "36px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                }}
            >
                {/* Layer 1 (DOM Bottom): Full Photo Image */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1032px",
                        height: "1302px",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={teamName}
                        style={{
                            width: "1032px",
                            height: "1302px",
                            objectFit: "cover",
                            borderRadius: "36px",
                        }}
                    />
                </div>

                {/* Layer 2: Soft Ambient Vignette on Image */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1032px",
                        height: "1302px",
                        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 40%)",
                    }}
                />

                {/* Layer 3: Status Pill Badge (Bottom Left) */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        bottom: "36px",
                        left: "36px",
                        backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.90) 100%)",
                        padding: "14px 22px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.9)",
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
                    <span style={{ fontSize: "15px", fontWeight: 800, color: "#0F172A", letterSpacing: "2px" }}>
                        {statusLabel}
                    </span>
                </div>

                {/* Layer 4: Shadow Feather Strip to the left of the glass panel */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        right: "440px",
                        width: "60px",
                        height: "1302px",
                        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.16) 100%)",
                    }}
                />

                {/* Layer 5 (DOM Top): Translucent Glass Content Panel (440px width ~ 42%) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "440px",
                        height: "1302px",
                        padding: "48px 38px",
                        justifyContent: "space-between",
                        backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.84) 0%, rgba(248, 250, 252, 0.74) 40%, rgba(255, 255, 255, 0.90) 100%)",
                        borderLeft: "1.5px solid rgba(255, 255, 255, 0.95)",
                    }}
                >
                    {/* Top: Team Identity Block */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", width: "100%" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "92px",
                                height: "92px",
                                backgroundImage: "linear-gradient(135deg, #FFFFFF 0%, #F1F5F9 100%)",
                                borderRadius: "22px",
                                border: "1.5px solid rgba(255, 255, 255, 0.9)",
                                padding: "10px",
                                marginBottom: "16px",
                            }}
                        >
                            <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                        <span style={{ fontSize: "22px", fontWeight: 800, color: primaryColor, letterSpacing: "3px", textAlign: "right" }}>
                            {teamName}
                        </span>
                        <div
                            style={{
                                display: "flex",
                                width: "92px",
                                height: "4px",
                                backgroundColor: accentColor,
                                marginTop: "14px",
                                borderRadius: "2px",
                            }}
                        />
                    </div>

                    {/* Middle: Headline & Snippet Content */}
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "14px",
                                fontWeight: 800,
                                color: "rgba(15, 23, 42, 0.7)",
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                                marginBottom: "18px",
                            }}
                        >
                            {badgeTag} {"//"} {timeAgo}
                        </span>
                        <h1
                            style={{
                                display: "flex",
                                fontSize: "42px",
                                fontWeight: 900,
                                color: "#0F172A",
                                lineHeight: 1.15,
                                fontStyle: titleItalic ? "italic" : "normal",
                                margin: "0 0 20px 0",
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                fontWeight: 600,
                                color: "#000000",
                                lineHeight: 1.55,
                                margin: 0,
                            }}
                        >
                            {snippet}
                        </p>
                    </div>

                    {/* Bottom: Author & Source Credits */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            paddingTop: "24px",
                            borderTop: "1px solid rgba(226, 232, 240, 0.9)",
                        }}
                    >
                        <span style={{ display: "flex", fontSize: "16px", fontWeight: 800, color: "#0F172A", marginBottom: "4px" }}>
                            {author}
                        </span>
                        <span style={{ display: "flex", fontSize: "12px", fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "1.5px" }}>
                            {authorRole} • {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
