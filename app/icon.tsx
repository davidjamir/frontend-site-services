import { ImageResponse } from "next/og";
import { siteService } from "@/services/site.service";


export const size = {
    width: 72,
    height: 72,
};

export const contentType = "image/png";

export default async function Icon() {
    const siteOrigin = await siteService.getRequestOrigin()
    const site = await siteService.getCurrentSite()

    return new ImageResponse(
        (
            <img
                src={`${siteOrigin.url}/${site.icon}`}
                alt={site.name}
                width={size.width}
                height={size.height}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        ),
    );
}