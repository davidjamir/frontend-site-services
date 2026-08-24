import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate9({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#002868",
    accentColor = "#00A3E0",
    badgeTag = "TROPHY UPDATE",
    author = "Kevin Weekes",
    authorRole = "ESPN & NHL Network Analyst",
    sourceDomain = "NHL.COM/TBL",
    statusLabel = "SCORING CHAMPION",
    timeAgo = "SEASON FINALE",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#FAF9F6", // Off-white editorial paper
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#111111",
                boxSizing: "border-box",
            }}
        >
            {/* LEFT COLUMN: Image & Monogram (45%) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "486px", // 45% of 1080
                    height: "100%",
                    borderRight: "2px solid #E5E5E5",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "1030px",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={teamName}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "320px",
                        backgroundColor: "#FFFFFF",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "24px 20px",
                    }}
                >
                    <div style={{ width: "170px", height: "170px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
                        <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <span
                        style={{
                            display: "flex",
                            fontSize: "22px",
                            fontWeight: 800,
                            color: "#000000",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            textAlign: "center",
                            lineHeight: 1.2,
                        }}
                    >
                        {teamName}
                    </span>
                </div>
            </div>

            {/* RIGHT COLUMN: Editorial Content (55%) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "594px", // 55% of 1080
                    height: "100%",
                    padding: "80px",
                    justifyContent: "space-between",
                }}
            >
                {/* Header Tag */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}>
                        <div style={{ display: "flex", width: "16px", height: "16px", backgroundColor: primaryColor, marginRight: "16px" }} />
                        <span
                            style={{
                                display: "flex",
                                fontSize: "16px",
                                fontWeight: 800,
                                letterSpacing: "4px",
                                color: "#111",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag} // {statusLabel}
                        </span>
                    </div>

                    <h1
                        style={{
                            display: "flex",
                            fontSize: "56px",
                            fontWeight: 800,
                            color: "#111",
                            textTransform: "uppercase",
                            lineHeight: 1.05,
                            letterSpacing: "-2px",
                            margin: "0 0 40px 0",
                            fontStyle: titleItalic ? "italic" : "normal",
                        }}
                    >
                        {title}
                    </h1>

                    <div style={{ display: "flex", width: "80px", height: "4px", backgroundColor: accentColor, marginBottom: "40px" }} />

                    <p
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: 500,
                            color: "#444",
                            lineHeight: 1.5,
                            margin: 0,
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Footer Section */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", width: "100%", height: "2px", backgroundColor: "#E5E5E5", marginBottom: "30px" }} />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ display: "flex", fontSize: "14px", fontWeight: 700, color: "#888", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                                REPORT
                            </span>
                            <span style={{ display: "flex", fontSize: "24px", fontWeight: 800, color: "#111" }}>
                                {author}
                            </span>
                            <span style={{ display: "flex", fontSize: "16px", fontWeight: 500, color: "#666", marginTop: "4px" }}>
                                {authorRole}
                            </span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <span style={{ display: "flex", fontSize: "14px", fontWeight: 700, color: "#888", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                                {timeAgo}
                            </span>
                            <span style={{ display: "flex", fontSize: "20px", fontWeight: 800, color: primaryColor, letterSpacing: "2px", textTransform: "uppercase" }}>
                                {sourceDomain}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
