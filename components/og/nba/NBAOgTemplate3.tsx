import { OgTemplate } from "@/types/og-template";

export function NBAOgTemplate3({
    teamName = "New York Knicks",
    title = "MADISON SQUARE GARDEN ROARS AS KNICKS COMPLETE THRILLING RALLY",
    snippet = "New York overcomes an 18-point deficit in the final frame to ignite the home crowd and grab key postseason positioning.",
    imageUrl = "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=1200&auto=format&fit=crop",
    logoUrl = "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
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
    const initial = author ? author.charAt(0).toUpperCase() : "I";

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
                        'linear-gradient(180deg, rgba(7,8,12,0.85) 0%, rgba(7,8,12,0.3) 30%, rgba(7,8,12,0.85) 65%, #07080C 100%)',
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
                    zIndex: 10,
                }}
            >
                {/* Author Card */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgba(11, 16, 26, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
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
                            <span style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>
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
                        backgroundColor: 'rgba(11, 16, 26, 0.85)',
                        border: `1px solid ${accentColor}`,
                        padding: '10px 22px',
                        borderRadius: '16px',
                        gap: '12px',
                    }}
                >
                    <img
                        src={logoUrl}
                        alt={teamName}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                    <span
                        style={{
                            fontSize: '16px',
                            fontWeight: 900,
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
                    zIndex: 10,
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
                            fontWeight: 900,
                            color: '#FFFFFF',
                            backgroundColor: primaryColor,
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
                            fontSize: '13px',
                            fontWeight: 800,
                            color: accentColor,
                            backgroundColor: 'rgba(15, 23, 42, 0.85)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
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
                        fontSize: '58px',
                        fontWeight: 900,
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