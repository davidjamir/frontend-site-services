import { ImageResponse } from "next/og";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";

type Props = {
    params: {
        segment: string;
        year: string;
        month: string;
        slug: string;
    };
};

export const size = {
    width: 1080,
    height: 1350,
};
export const contentType = "image/png";

export default async function Image({ params }: Props) {
    const { segment, year, month, slug } = await params;
    const siteOrigin = await siteService.getRequestOrigin();
    const site = await siteService.getCurrentSite();
    const post = await postService.getPostData(
        siteOrigin.url,
        siteOrigin.host,
        segment,
        `${year}/${month}/${slug}`,
    );
    const title =
        post.title.length > 150
            ? post.title.slice(0, 150).trim() + "..."
            : post.title;

    return new ImageResponse(
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

            <div
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.2), transparent 60%)",
                }}
            />

            {/* BOTTOM PANEL (40% height) */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "40%",
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
                    src={`${siteOrigin.url}/${site.logo}`}
                    alt="logo"
                    style={{
                        width: 72,
                        height: 72,
                        objectFit: "contain",
                        marginBottom: 16,
                        opacity: 0.95,
                    }}
                />

                {/* Title */}
                <div
                    style={{
                        color: "white",
                        fontSize: title.length > 120 ? 30 : title.length > 80 ? 34 : 40,
                        fontWeight: 800,
                        textAlign: "center",
                        lineHeight: 1.2,
                        maxWidth: 900,
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
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: 0.8,
                        textAlign: "center",
                    }}
                >
                    {siteOrigin.host}
                </div>
            </div>
        </div>,

        {
            ...size,
            // fonts: [
            //     {
            //         name: 'Inter',
            //         data: interSemiBold,
            //         style: 'normal',
            //         weight: 400,
            //     },
            // ],
        },
    );
}
