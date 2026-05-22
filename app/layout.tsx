import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/providers/theme.provider";
import { siteService } from "@/services/site.service";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteOrigin = await siteService.getRequestOrigin();
  const site = await siteService.getCurrentSite();

  return {
    metadataBase: new URL(siteOrigin.url),
    description: site.seo.description,
    title: {
      template: `%s | site.seo.title`,
      default:
        site.seo.title,
    },
    openGraph: {
      images: ["/default-banner.jpg"],
    },
    alternates: {
      canonical: "/",
      types: {
        "application/rss+xml": "/feed",
      },
    },
    category: site.siteCategory,
    verification: {
      google: site.verification?.google,
      yandex: site.verification?.yandex,
      yahoo: site.verification?.yahoo,
      other: {
        me: site.verification?.other.me,
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

  return <ThemeProvider site={site}>{children}</ThemeProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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
