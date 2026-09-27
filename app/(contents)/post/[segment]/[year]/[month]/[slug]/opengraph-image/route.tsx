import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";
import { postService } from "@/services/post.service";
import { siteService } from "@/services/site.service";
import { THEMES_OG } from "@/constants";

type Props = {
  params: Promise<{
    segment: string;
    year: string;
    month: string;
    slug: string;
  }>;
};

export const size = {
  width: 1080,
  height: 1350,
};

export async function GET(_: Request, { params }: Props) {
  const { segment, year, month, slug } = await params;
  const site = await siteService.getCurrentSite();
  const post = await postService.getPostData(
    site.baseUrl,
    segment,
    `${year}/${month}/${slug}`,
  );

  if (post?.socialPoster) {
    try {
      const data = await fetch(post?.socialPoster);
      const contentType = data.headers.get("content-type");

      if (!data.ok) {
        throw new Error(`Fetch failed: ${data.status} ${data.statusText}`);
      }
      if (!data.body) {
        throw new Error("Fetch failed: response body is empty");
      }

      if (!contentType?.startsWith("image/")) {
        throw new Error(`Invalid content-type: ${contentType}`);
      }

      const image = await data.arrayBuffer();
      if (image.byteLength === 0) {
        throw new Error("Response body is empty");
      }

      return new Response(image, {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.log("Message Error: ", message);
    }
  }

  const fonts = await getOgFonts();
  const ThemeOg = THEMES_OG[site.theme as keyof typeof THEMES_OG];

  // Hiện tại vẫn đang dùng cách tự render, khi đã xử lý tốt rồi thì phải tìm cách mà xử lý kiểu dùng cdn cloud
  return new ImageResponse(
    <ThemeOg post={post} site={site} logo={site.config.symbolOg} />,
    {
      ...size,
      fonts,
    },
  );
}
