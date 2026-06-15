import type { Category } from "@/core/domain/category";
import type { Page } from "@/core/domain/page";

export type SiteTheme =
  | "team"
  | "sport"
  | "music"
  | "news"
  | "nba"
  | "nfl"
  | "nhl"
  | "mlb";

export type SiteSeo = {
  title: string;
  description?: string;
  canonicalUrl?: string;
};

export type AdsItem = {
  id: string;
  source: string;
  content: string;
};

export type SiteAds = {
  adsTxt?: string;
  adsScript: {
    adsHeader: AdsItem[];
    adsBody: { afterPost: AdsItem; beforePost: AdsItem; inPost: AdsItem[] };
    adsFooter: AdsItem[];
    adsLeftSidebar: AdsItem[];
    adsRightSidebar: AdsItem[];
    adsVideoHeader: AdsItem;
  };
};

export type SiteVerification = {
  google: string;
  yandex: string;
  yahoo: string;
  other: {
    me: string[];
    monetag: string;
    adsconex: string;
  };
};
export type ScriptAttributeItem = {
  key: string;
  value: string;
};

export type SiteScriptItem = {
  id: string;
  src: string;
  async: boolean;
  defer: boolean;
  crossOrigin?: "anonymous" | "use-credentials";
  strategy?:
    | "afterInteractive"
    | "lazyOnload"
    | "beforeInteractive"
    | "worker"
    | undefined;
  attributes?: ScriptAttributeItem[];
  enabled: boolean;
};

export type Site = {
  id: string;
  host: string;
  baseUrl: string;
  origin: string;
  name: string;
  icon: string;
  logo: string;
  siteCategory: string;
  theme: SiteTheme;
  seo: SiteSeo;
  ads: SiteAds;
  script: SiteScriptItem[];
  categories?: Category[];
  pages?: Page[];
  verification: SiteVerification;
  configView: {
    category: "list" | "grid";
    search: "list" | "grid";
    tag: "list" | "grid";
  };
  config: {
    colorHeader: string;
    visibledBreadcrumb: boolean;
    customOpengraphImage: boolean;
    enabledAds: boolean;
  };
};
