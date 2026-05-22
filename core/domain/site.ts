import type { Category } from "@/core/domain/category";
import type { Page } from "@/core/domain/page";

export type SiteTheme = "team" | "sport" | "music" | "news";

export type SiteSeo = {
  title: string;
  description?: string;
  canonicalUrl?: string;
};

export type SiteAds = {
  adsTxt?: string;
  publisherId?: string;
};

export type SiteVerification = {
  google: string;
  yandex: string;
  yahoo: string;
  other: {
    me: string[];
  };
};

export type Site = {
  id: string;
  host: string;
  origin: string;
  name: string;
  icon: string;
  logo: string;
  siteCategory: string;
  theme: SiteTheme;
  seo: SiteSeo;
  ads?: SiteAds;
  categories?: Category[];
  pages?: Page[];
  verification: SiteVerification;
};
