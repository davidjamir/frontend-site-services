import { OgTemplate } from "@/types/og-template";

export function NHLOgTemplate8({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    accentColor = "#99D9D9",
    badgeTag = "SYSTEM OVERRIDE",
    author = "Geoff Baker",
    sourceDomain = "SEATTLEKRAKEN.COM",
    statusLabel = "MILESTONE ACHIEVED",
    timeAgo = "DATA LOGGED",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Montserrat",
                color: "#FFFFFF",
                boxSizing: "border-box",
            }}
        >
            {/* Bright Full Screen Background Image */}
            <img
                src={imageUrl}
                alt="bg"
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 766,
                    height: 1350,
                }}
            >
                <svg
                    width="766"
                    height="1350"
                    viewBox="0 0 766 1350"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                    }}
                >
                    <defs>
                        {/* Vùng hình thang */}
                        <clipPath id="trapezoidClip">
                            <polygon points="0,0 750,0 600,1350 0,1350" />
                        </clipPath>

                        <filter
                            id="blur"
                            x="-10%"
                            y="-10%"
                            width="120%"
                            height="120%"
                        >
                            <feGaussianBlur stdDeviation="8" />
                        </filter>

                        {/* Grid chấm */}
                        <pattern
                            id="dotGrid"
                            width="28"
                            height="28"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="14" cy="14" r="2" fill="#FFFFFF" fillOpacity="0.05" />
                        </pattern>
                    </defs>

                    {/* ================================= */}
                    {/* TẤT CẢ NỘI DUNG TRONG HÌNH THANG */}
                    {/* ================================= */}

                    <g clipPath="url(#trapezoidClip)">
                        {/* ẢNH BLUR */}
                        <image
                            href={imageUrl}
                            x="0"
                            y="0"
                            width="1080"
                            height="1350"
                            filter="url(#blur)"
                            clipPath="url(#trapezoidClip)"
                            preserveAspectRatio="xMidYMid slice"
                        />

                        {/* LỚP TỐI */}
                        <rect
                            x="0"
                            y="0"
                            width="750"
                            height="1350"
                            fill="#000000)"
                            fillOpacity="0.3"
                        />

                        {/* GRID CHẤM */}
                        <g clipPath="url(#trapezoidClip)">
                            <g transform="rotate(6.34 375 675)">
                                <rect
                                    x="-300"
                                    y="-300"
                                    width="1400"
                                    height="2000"
                                    fill="url(#dotGrid)"
                                />
                            </g>
                        </g>
                    </g>

                    {/* ====================== */}
                    {/* VIỀN CHÉO */}
                    {/* ====================== */}

                    <line
                        x1="750"
                        y1="0"
                        x2="600"
                        y2="1350"
                        stroke={accentColor}
                        strokeWidth="16"
                    />
                </svg>
            </div>

            {/* Content Container (Unrotated, sits inside the dark area) */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: "60px",
                    left: "60px",
                    bottom: "60px",
                    width: "600px",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {/* Top Section: Logo & Identity */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "20px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "16px",
                                backgroundImage:
                                    "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                                borderRadius: "24px",
                                border: "1px solid rgba(255,255,255,0.2)",
                                flexShrink: 0,
                                marginRight: "20px",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                            }}
                        >
                            <img
                                src={logoUrl}
                                alt="Logo"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "26px",
                                fontWeight: 900,
                                color: accentColor,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                lineHeight: 1.1,
                                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                            }}
                        >
                            {teamName}
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                            style={{
                                display: "flex",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                border: "1px solid rgba(255,255,255,0.25)",
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                borderRadius: "30px",
                                fontSize: "14px",
                                fontWeight: 800,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                marginRight: "12px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            }}
                        >
                            {badgeTag}
                        </span>
                        <span
                            style={{
                                display: "flex",
                                backgroundColor: accentColor,
                                color: "#000000",
                                padding: "8px 20px",
                                borderRadius: "30px",
                                fontSize: "14px",
                                fontWeight: 800,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            }}
                        >
                            {statusLabel}
                        </span>
                    </div>
                </div>

                {/* Middle Section: Typography Focus */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1
                        style={{
                            display: "flex",
                            fontSize: "60px",
                            fontWeight: 900,
                            lineHeight: 1.05,
                            textTransform: "uppercase",
                            margin: "0 0 30px 0",
                            color: "#FFFFFF",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textShadow: "0 4px 15px rgba(0,0,0,0.6)",
                        }}
                    >
                        {title}
                    </h1>
                    <p
                        style={{
                            display: "flex",
                            fontSize: "24px",
                            color: "#FFFFFF",
                            lineHeight: 1.5,
                            margin: 0,
                            paddingLeft: "24px",
                            borderLeft: `4px solid ${accentColor}`,
                            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                        }}
                    >
                        {snippet}
                    </p>
                </div>

                {/* Bottom Section: Meta Data */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "40px",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#FFFFFF99",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                        }}
                    >
                        Log Entry // {timeAgo}
                    </span>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "24px",
                                fontWeight: 700,
                                color: "#FFFFFF",
                                marginRight: "16px",
                            }}
                        >
                            {author}
                        </span>
                        <span
                            style={{
                                display: "flex",
                                fontSize: "20px",
                                fontWeight: 700,
                                color: accentColor,
                            }}
                        >
                            | {sourceDomain}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
