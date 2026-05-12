export type SiteTheme = "team" | "sport" | "music" | "news"

export type SiteSeo = {
  title: string
  description?: string
  canonicalUrl?: string
}

export type SiteAds = {
  adsTxt?: string
  publisherId?: string
}

export type Site = {
  id: string
  name: string
  host: string
  icon: string
  logo: string
  theme: SiteTheme
  seo: SiteSeo
  ads?: SiteAds
}
