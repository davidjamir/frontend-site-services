import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate3({
    teamName,
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = true,
    primaryColor = "#DC2626",
    accentColor = "#F58426",
    badgeTag = "BREAKING NEWS",
    author = "Ian Begley",
    authorRole = "SNY TV Lead NBA Insider",
    sourceDomain = "SNY.TV/KNICKS",
    statusLabel = "JUST IN",
    timeAgo = "7 MINS AGO",
}: OgTemplate) {

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '1080px',
                height: '1350px',
                backgroundColor: '#07080C',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: 'sans-serif',
                color: '#FFFFFF',
                boxSizing: 'border-box',
            }}
        >
            {/* Background Image */}
            <img
                src={imageUrl}
                alt={title}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '1080px',
                    height: '1350px',
                    objectFit: 'cover',
                }}
            />

            {/* Dark Gradient Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '1080px',
                    height: '1350px',
                    backgroundImage:
                        `linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 40%, ${primaryColor}30 75%, ${primaryColor}60 100%)`,
                }}
            />

            {/* Header Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '1080px',
                    padding: '52px 52px 0 52px',
                    position: 'relative',
                }}
            >
                {/* Author Card */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#00000099',
                        border: '1px solid #FFFFFF',
                        padding: '10px 24px 10px 12px',
                        borderRadius: '9999px',
                        gap: '14px',
                    }}
                >
                    {/* Avatar Circle */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            backgroundColor: accentColor,
                            color: '#000000',
                            fontWeight: 800,
                            fontSize: '20px',
                        }}
                    >
                        {author ? author.charAt(0).toUpperCase() : 'I'}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF' }}>
                                {author}
                            </span>
                            {/* Verified Badge SVG */}
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ display: 'flex' }}
                            >
                                <path
                                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.35 1.273 2.72 2.148 4.3 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
                                    fill="#1D9BF0"
                                />
                                <path
                                    d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
                                    fill="#FFFFFF"
                                />
                            </svg>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>
                            {authorRole} • {sourceDomain}
                        </span>
                    </div>
                </div>

                {/* Team Badge Container */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#00000099',
                        border: `2px solid ${accentColor}`,
                        padding: '5px 20px',
                        borderRadius: '14px',
                        gap: '12px',
                    }}
                >
                    <img
                        src={logoUrl}
                        alt={teamName}
                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                    />
                    <span
                        style={{
                            fontSize: '14px',
                            fontWeight: 800,
                            color: '#FFFFFF',
                            letterSpacing: '0.5px',
                        }}
                    >
                        {teamName.toUpperCase()}
                    </span>
                </div>
            </div>

            {/* Flexible Space */}
            <div style={{ display: 'flex', flex: 1 }} />

            {/* Bottom Main Content */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '1080px',
                    padding: '0 52px 56px 52px',
                    position: 'relative',
                }}
            >
                {/* Status Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            fontWeight: 800,
                            color: '#FFFFFF',
                            backgroundColor: "#DC2626",
                            padding: '8px 20px',
                            borderRadius: '8px',
                            letterSpacing: '0.5px',
                        }}
                    >
                        <span>📢</span>
                        <span>{badgeTag.toUpperCase()}</span>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: '14px',
                            fontWeight: 700,
                            color: accentColor,
                            backgroundColor: '#00000033',
                            border: `1px solid ${accentColor}`,
                            padding: '8px 18px',
                            borderRadius: '8px',
                            letterSpacing: '0.5px',
                        }}
                    >
                        {statusLabel.toUpperCase()} • {timeAgo.toUpperCase()}
                    </div>
                </div>

                {/* Title Header */}
                <h1
                    style={{
                        fontSize: '54px',
                        fontWeight: 800,
                        fontStyle: titleItalic ? 'italic' : 'normal',
                        color: '#FFFFFF',
                        lineHeight: 1.05,
                        margin: '0 0 28px 0',
                        textTransform: 'uppercase',
                        letterSpacing: '-0.5px',
                    }}
                >
                    {title}
                </h1>

                {/* Snippet Footer Box */}
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: 'rgba(11, 16, 26, 0.92)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '14px',
                        padding: '24px 30px',
                        borderLeft: `6px solid ${accentColor}`
                    }}
                >
                    <p
                        style={{
                            fontSize: '22px',
                            fontWeight: 500,
                            color: '#E2E8F0',
                            lineHeight: 1.45,
                            margin: 0,
                        }}
                    >
                        {snippet}
                    </p>
                </div>
            </div>
        </div>
    );
}