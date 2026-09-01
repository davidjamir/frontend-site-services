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
    badgeTag = "BREAKING NEWS",
    author = "Kevin Weekes",
    authorRole = "ESPN & NHL Network Analyst",
    sourceDomain = "NHL.COM/TBL",
    statusLabel = "SCORING CHAMPION",
    timeAgo = "5 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#FAF9F6",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#111111",
                boxSizing: "border-box",
            }}
        >
            {/* Layer 1 (DOM Bottom): Full Width Image (width 1080px, height 1030px) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1030px",
                    overflow: "hidden",
                }}
            >
                <img
                    src={imageUrl}
                    alt={teamName}
                    style={{
                        width: "1080px",
                        height: "1030px",
                        objectFit: "cover",
                    }}
                />
            </div>

            {/* Layer 2: Subtle Ambient Vignette on Image */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1030px",
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%)",
                }}
            />

            {/* Layer 3: Bottom Left Monogram Box (486px width, 320px height) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "1030px",
                    left: 0,
                    width: "486px",
                    height: "320px",
                    backgroundColor: "#FFFFFF",
                    borderTop: "1px solid #E2E8F0",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px 20px",
                }}
            >
                <div
                    style={{
                        width: "170px",
                        height: "170px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "12px",
                    }}
                >
                    <img src={logoUrl} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <span
                    style={{
                        display: "flex",
                        fontSize: "22px",
                        fontWeight: 800,
                        color: "#111111",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        textAlign: "center",
                        lineHeight: 1.2,
                    }}
                >
                    {teamName}
                </span>
            </div>

            {/* Layer 4: Shadow Feather Strip to the left of the upper right glass panel */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    right: "594px",
                    width: "36px",
                    height: "1030px",
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.10) 100%)",
                }}
            />

            {/* Layer 5: Upper Right Editorial Glass Background (over the image: top 0 -> 1030px) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "594px",
                    height: "1030px",
                    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 250, 252, 0.78) 45%, rgba(255, 255, 255, 0.92) 100%)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.85)",
                }}
            />

            {/* Layer 6: Lower Right Warm Off-White Background (below the image: top 1030px -> 1350px, height 320px) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "1030px",
                    right: 0,
                    width: "594px",
                    height: "320px",
                    backgroundColor: "#FAF9F6",
                    borderTop: "1px solid #E2E8F0",
                    borderLeft: "1px solid #E2E8F0",
                }}
            />

            {/* Layer 7 (DOM Top): Right Editorial Content Panel (594px width, 1350px height) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "594px",
                    height: "1350px",
                    padding: "80px 70px",
                    justifyContent: "space-between",
                }}
            >
                {/* Header Tag & Title */}
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "36px" }}>
                        <div
                            style={{
                                display: "flex",
                                width: "16px",
                                height: "16px",
                                backgroundColor: primaryColor,
                                marginRight: "16px",
                                borderRadius: "3px",
                            }}
                        />
                        <span
                            style={{
                                display: "flex",
                                fontSize: "15px",
                                fontWeight: 800,
                                letterSpacing: "4px",
                                color: "rgba(15, 23, 42, 0.70)",
                                textTransform: "uppercase",
                            }}
                        >
                            {badgeTag} {"//"} {statusLabel}
                        </span>
                    </div>

                    <h1
                        style={{
                            display: "flex",
                            fontSize: "56px",
                            fontWeight: 900,
                            color: "#0F172A",
                            textTransform: "uppercase",
                            lineHeight: 1.06,
                            letterSpacing: "-1.5px",
                            margin: "0 0 36px 0",
                            fontStyle: titleItalic ? "italic" : "normal",
                        }}
                    >
                        {title}
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            width: "80px",
                            height: "4px",
                            backgroundColor: accentColor,
                            borderRadius: "2px",
                            marginBottom: "36px",
                        }}
                    />

                    <p
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            fontWeight: 500,
                            color: "#000000",
                            lineHeight: 1.55,
                            margin: 0,
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Footer Section */}
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "1px",
                            backgroundColor: "rgba(226, 232, 240, 0.95)",
                            marginBottom: "28px",
                        }}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#64748B",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    marginBottom: "8px",
                                }}
                            >
                                REPORT
                            </span>
                            <span style={{ display: "flex", fontSize: "22px", fontWeight: 800, color: "#0F172A" }}>
                                {author}
                            </span>
                            <span style={{ display: "flex", fontSize: "14px", fontWeight: 600, color: "#64748B", marginTop: "4px" }}>
                                {authorRole}
                            </span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    color: "#64748B",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    marginBottom: "8px",
                                }}
                            >
                                {timeAgo}
                            </span>
                            <span
                                style={{
                                    display: "flex",
                                    fontSize: "18px",
                                    fontWeight: 800,
                                    color: primaryColor,
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
