import { Post } from "@/core/domain/post";
import { Site } from "@/core/domain/site";

type Props = {
    site: Site;
    post: Post;
    logo: string;
}

export default function NewsOg({ site, post, logo }: Props) {
    const title =
        post.title.length > 150
            ? post.title.slice(0, 150).trim() + "..."
            : post.title;
            
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                position: "relative",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "sans-serif",
            }}
        >
            <img
                src={post.featuredImage}
                alt={post.title}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />

            {site.config.customOpengraphImage && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.2), transparent 60%)",
                        }}
                    />

                    {/* BOTTOM PANEL (50% height) */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: "100%",
                            height: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "40px 80px",
                            boxSizing: "border-box",
                            // riêng gradient cho panel
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.5), transparent)",
                        }}
                    >
                        {/* Logo */}
                        <img
                            src={logo}
                            alt={title}
                            style={{
                                width: 130,
                                height: 130,
                                objectFit: "contain",
                                marginBottom: 20,
                                opacity: 0.9,
                                // filter:
                                //     "drop-shadow(0 0 4px rgba(255,255,255,0.9)) " +
                                //     "drop-shadow(0 0 12px rgba(255,255,255,0.5)) " +
                                //     "drop-shadow(0 0 24px rgba(0,0,0,0.5))"
                            }}
                        />

                        {/* Title */}
                        <div
                            style={{
                                color: "white",
                                fontSize: title.length > 120 ? 46 : title.length > 80 ? 48 : 50,
                                fontWeight: 800,
                                textAlign: "center",
                                lineHeight: 1.2,
                                maxWidth: 1000,
                                textShadow: "0 10px 30px rgba(0,0,0,0.7)",
                            }}
                        >
                            {title}
                        </div>

                        {/* Source / Domain */}
                        <div
                            style={{
                                marginTop: 24,
                                padding: "6px 14px",
                                color: "rgba(255,255,255,0.8)",
                                fontSize: 30,
                                fontWeight: 500,
                                letterSpacing: 0.8,
                                textAlign: "center",
                            }}
                        >
                            {site.host}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}