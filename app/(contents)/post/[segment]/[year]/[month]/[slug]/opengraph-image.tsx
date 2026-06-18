import { ImageResponse } from "next/og";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { promises as fs } from "fs";
import path from "path";

type Props = {
    params: {
        segment: string;
        year: string;
        month: string;
        slug: string;
    };
};

export const size = {
    width: 1600,
    height: 1200,
};

export const contentType = "image/png";

export default async function Image({ params }: Props) {
    const { segment, year, month, slug } = await params;
    const site = await siteService.getCurrentSite();
    const post = await postService.getPostData(
        site.baseUrl,
        segment,
        `${year}/${month}/${slug}`,
    );
    const title =
        post.title.length > 150
            ? post.title.slice(0, 150).trim() + "..."
            : post.title;

    const cleanPath = site.logo.startsWith("/") ? site.logo.slice(1) : site.logo;
    const filePath = path.join(process.cwd(), "public", cleanPath);
    const buffer = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: Record<string, string> = {
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
        ".gif": "image/gif",
    };
    const mimeType = mimeTypes[ext] || "application/octet-stream";
    const imageDataUri = `data:${mimeType};base64,${buffer.toString("base64")}`;

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

            {/* BOTTOM PANEL (50% height) */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
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
                    src={imageDataUri}
                    alt={title}
                    style={{
                        width: 130,
                        height: 130,
                        objectFit: "contain",
                        marginBottom: 20,
                        opacity: 0.9,
                        filter: "drop-shadow(0 0 1px rgba(255,255,255))",
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
