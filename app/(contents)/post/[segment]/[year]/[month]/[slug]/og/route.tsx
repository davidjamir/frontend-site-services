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
  const fonts = await getOgFonts();
  const site = await siteService.getCurrentSite();
  const post = await postService.getPostData(
    site.baseUrl,
    segment,
    `${year}/${month}/${slug}`,
  );
  const ThemeOg = THEMES_OG[site.theme as keyof typeof THEMES_OG];
  const cleanPath = site.logo.startsWith("/") ? site.logo.slice(1) : site.logo;
  
  return new ImageResponse(
    <ThemeOg post={post} site={site} logo={`${site.baseUrl}/${cleanPath}`} />,
    {
      ...size,
      fonts,
    },
  );
}
