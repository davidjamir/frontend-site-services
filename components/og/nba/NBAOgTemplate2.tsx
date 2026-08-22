import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate2({
    teamName = "LOS ANGELES LAKERS",
    title = "LAKERS SECURE DRAMATIC OVERTIME VICTORY IN GAME 7 SHOWDOWN",
    snippet = "LeBron James orchestrates a masterclass performance in the 4th quarter to seal the victory at Crypto.com Arena.",
    imageUrl = "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    titleItalic = true,
    primaryColor = "#552583",
    accentColor = "#FFB81C",
    badgeTag = "BREAKING NEWS",
    author = "Shams Charania",
    authorRole = "Senior NBA Insider",
    sourceDomain = "THEATHLETIC.COM/NBA",
    statusLabel = "JUST IN",
    timeAgo = "4 MINS AGO",
}: OgTemplate) {

    const badgeTagWidth = Math.max(280, badgeTag.length * 13 + 120)
    const teamNameWidth = Math.max(280, teamName.length * 11 + 90);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#07080C",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Background Image */}
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                    }}
                />
            ) : null}

            {/* 2. Gradient Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    backgroundImage:
                        "linear-gradient(180deg, rgba(3,5,10,0.5) 0%, rgba(3,5,10,0.05) 32%, rgba(3,5,10,0.5) 75%, #030509 90%)",
                }}
            />

            {/* 3. Top Header / Scorebug */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "1080px",
                    padding: "44px 50px 0 50px",
                    boxSizing: "border-box",
                }}
            >
                {/* Live Badge + Domain */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "14px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#DC2626",
                            padding: "8px 20px",
                            borderRadius: "6px",
                            gap: "10px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                width: "10px",
                                height: "10px",
                                borderRadius: "9999px",
                                backgroundColor: "#FFFFFF",
                            }}
                        />
                        <span
                            style={{
                                fontSize: "14px",
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            LIVE • NBA COUNTDOWN
                        </span>
                    </div>

                    {sourceDomain ? (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                backgroundColor: "rgba(15, 23, 42, 0.85)",
                                padding: "8px 18px",
                                borderRadius: "6px",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    color: "#E2E8F0",
                                    letterSpacing: "1.5px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {sourceDomain}
                            </span>
                        </div>
                    ) : null}
                </div>

                {/* Team Logo Container */}
                {logoUrl ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "58px",
                            height: "58px",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            borderRadius: "12px",
                            border: `1.5px solid ${accentColor}`,
                            padding: "6px",
                        }}
                    >
                        <img
                            src={logoUrl}
                            alt="Team Logo"
                            style={{ width: "44px", height: "44px", objectFit: "contain" }}
                        />
                    </div>
                ) : null}
            </div>

            {/* Flexible Spacer */}
            <div style={{ display: "flex", flex: 1 }} />

            {/* 4. Lower-Third Graphic Plate */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "1080px",
                    padding: "0 50px 48px 50px",
                    boxSizing: "border-box",
                }}
            >

                {/* Top Tags Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        height: "48px",
                        position: "relative",
                    }}
                >
                    {/* Badge Tag */}
                    <div
                        style={{
                            display: "flex",
                            width: `${badgeTagWidth}px`,
                            height: "48px",
                            position: "relative",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 44px 0 34px", // đủ chỗ cho phần đầu chéo (slant=18) + lề chữ
                            whiteSpace: "nowrap",
                        }}
                    >
                        {/* Lớp viền (nằm dưới, lệch xuống) */}
                        <img
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="48" viewBox="0 0 330 48">
            <path d="${roundedParallelogramPath(330, 48, 18, 8, 0, 0, 0)}" fill="#DC2626" />
        </svg>
    `)}`}
                            width="330"
                            height="48"
                            style={{
                                position: "absolute",
                                top: "-3px",
                                left: 0,
                                width: `${badgeTagWidth}px`,
                                height: "48px",
                            }}
                        />

                        {/* Lớp fill chính (nằm trên) */}
                        <img
                            src={`data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="48" viewBox="0 0 330 48">
            <path d="${roundedParallelogramPath(330, 48, 18, 8, 0, 0, 0)}" fill="#DC2626" />
        </svg>
    `)}`}
                            width="330"
                            height="48"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: `${badgeTagWidth}px`,
                                height: "48px",
                            }}
                        />

                        <span
                            style={{
                                display: "flex",
                                position: "relative",
                                fontSize: "16px",
                                fontWeight: 900,
                                color: "#FFFFFF",
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                            }}
                        >
                            {`⚡ ${badgeTag}`}
                        </span>
                    </div>

                    {/* Team Name Tag */}
                    {teamName ? (
                        <div
                            style={{
                                display: "flex",
                                width: `${teamNameWidth}px`,
                                height: "48px",
                                position: "relative",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "-24px",
                            }}
                        >
                            {/* Lớp viền (nằm dưới, lệch xuống) */}
                            <img
                                src={`data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="48" viewBox="0 0 320 48">
            <path d="${roundedParallelogramPath(320, 48, 18, 0, 8, 0, 0)}" fill="${accentColor}" />
        </svg>
    `)}`}
                                width="320"
                                height="48"
                                style={{
                                    position: "absolute",
                                    top: "-3px",
                                    left: 0,
                                    width: `${teamNameWidth}px`,
                                    height: "48px",
                                }}
                            />

                            {/* Lớp fill chính (nằm trên) */}
                            <img
                                src={`data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="48" viewBox="0 0 320 48">
            <path d="${roundedParallelogramPath(320, 48, 18, 0, 8, 0, 0)}" fill="${primaryColor}" />
        </svg>
    `)}`}
                                width="320"
                                height="48"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: `${teamNameWidth}px`,
                                    height: "48px",
                                }}
                            />

                            <span
                                style={{
                                    display: "flex",
                                    position: "relative",
                                    fontSize: "14px",
                                    fontWeight: 800,
                                    color: "#FFFFFF",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {teamName}
                            </span>
                        </div>
                    ) : null}
                </div>


                {/* Main Content Box */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "rgba(9, 13, 22, 0.96)",
                        borderRadius: "0 12px 12px 12px",
                        border: "1.5px solid rgba(255, 255, 255, 0.16)",
                        borderLeft: `6px solid ${accentColor}`,
                        padding: "30px 36px",
                    }}
                >
                    {/* Title */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "48px",
                            fontWeight: 800,
                            fontStyle: titleItalic ? "italic" : "normal",
                            color: "#FFFFFF",
                            lineHeight: 1.08,
                            letterSpacing: "-0.5px",
                            marginBottom: "16px",
                            textTransform: "uppercase",
                        }}
                    >
                        {title}
                    </div>

                    {/* Snippet */}
                    {snippet ? (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#CBD5E1",
                                lineHeight: 1.45,
                                marginBottom: "24px",
                            }}
                        >
                            {snippet}
                        </div>
                    ) : null}

                    {/* Footer Info / Insider Details */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: "16px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                        }}
                    >
                        {/* Author Info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "38px",
                                    height: "38px",
                                    borderRadius: "8px",
                                    backgroundColor: accentColor,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 900,
                                    color: "#030509",
                                    fontSize: "15px",
                                }}
                            >
                                NBA
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: "6px",
                                    }}
                                >
                                    <span style={{ fontSize: "15px", fontWeight: 800, color: "#FFFFFF" }}>
                                        {author}
                                    </span>
                                    {/* Inline SVG Verified Badge - Tránh dùng ký tự ✓ gây lỗi Font 400 */}
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#38BDF8"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                {authorRole ? (
                                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#94A3B8" }}>
                                        {authorRole}
                                    </span>
                                ) : null}
                            </div>
                        </div>

                        {/* Status Label & Time */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "9999px",
                                    backgroundColor: "#EF4444",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#F87171",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {`${statusLabel} • ${timeAgo}`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function roundedParallelogramPath(
    w: number,
    h: number,
    slant: number,
    rA: number, // góc trên-trái (chéo)
    rB: number, // góc trên-phải
    rC: number, // góc dưới-phải (chéo)
    rD: number  // góc dưới-trái
) {
    const L = Math.sqrt(slant * slant + h * h);
    const ux = slant / L, uy = h / L;

    const A = { x: slant, y: 0 };
    const B = { x: w, y: 0 };
    const C = { x: w - slant, y: h };
    const D = { x: 0, y: h };

    // Cạnh AB (trên): dùng ux/uy cho phía A (chéo), trục x thường cho phía B
    const A2 = { x: A.x + rA, y: A.y };
    const B1 = { x: B.x - rB, y: B.y };

    // Cạnh BC (phải, chéo)
    const B2 = { x: B.x - rB * ux, y: B.y + rB * uy };
    const C1 = { x: C.x + rC * ux, y: C.y - rC * uy };

    // Cạnh CD (dưới)
    const C2 = { x: C.x - rC, y: C.y };
    const D1 = { x: D.x + rD, y: D.y };

    // Cạnh DA (trái, chéo)
    const D2 = { x: D.x + rD * ux, y: D.y - rD * uy };
    const A1 = { x: A.x - rA * ux, y: A.y + rA * uy };

    return `
        M ${A2.x} ${A2.y}
        L ${B1.x} ${B1.y}
        ${rB > 0 ? `Q ${B.x} ${B.y} ${B2.x} ${B2.y}` : `L ${B.x} ${B.y}`}
        L ${C1.x} ${C1.y}
        ${rC > 0 ? `Q ${C.x} ${C.y} ${C2.x} ${C2.y}` : `L ${C.x} ${C.y}`}
        L ${D1.x} ${D1.y}
        ${rD > 0 ? `Q ${D.x} ${D.y} ${D2.x} ${D2.y}` : `L ${D.x} ${D.y}`}
        L ${A1.x} ${A1.y}
        ${rA > 0 ? `Q ${A.x} ${A.y} ${A2.x} ${A2.y}` : `L ${A.x} ${A.y}`}
        Z
    `;
}