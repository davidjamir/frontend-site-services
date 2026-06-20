import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme.provider";
import { siteService } from "@/services/site.service";
import { Suspense } from "react";
import { THEMES_LAYOUT } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await siteService.getCurrentSite();

  return {
    metadataBase: new URL(site.baseUrl),
    description: site.seo.description,
    title: {
      template: `%s | ${site.seo.title}`,
      default: site.seo.title,
    },
    openGraph: {
      siteName: site.seo.title,
      locale: "en_US",
      type: "website",
      url: site.baseUrl,
      title: site.seo.title,
      description: site.seo.description,
      images: [{ url: "/images/default-banner.png", alt: site.seo.title }],
    },
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": "/feed",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    category: site.siteCategory,
    publisher: site.seo.title,
    verification: {
      google: site.verification?.google,
      yandex: site.verification?.yandex,
      yahoo: site.verification?.yahoo,
      other: {
        me: site.verification?.other.me,
        monetag: site.verification?.other.monetag,
        verification: site.verification?.other.adsconex
      },
    },
    pinterest: {
      richPin: true,
    },
  };
}

async function SiteBoundary({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const site = await siteService.getCurrentSite();
  const ThemeLayout = THEMES_LAYOUT[site.theme];

  return (
    <>
      {site.analytics?.gaId && (
        <GoogleAnalytics gaId={site.analytics.gaId} />
      )}
      {site.config.enabledAds && site.script.map((item) => {
        if (!item.enabled) return null;

        const attrs = Object.fromEntries(
          item.attributes?.map(attr => [attr.key, attr.value]) ?? []
        );

        return (
          <Script
            key={item.id}
            id={item.id}
            src={item.src}
            async={item.async}
            defer={item.defer}
            crossOrigin={item.crossOrigin}
            strategy={item.strategy}
            {...attrs}
          />
        );
      })}
      <ThemeProvider site={site}>
        <ThemeLayout>{children}</ThemeLayout>
      </ThemeProvider>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={<div />}>
          <SiteBoundary>{children}</SiteBoundary>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
