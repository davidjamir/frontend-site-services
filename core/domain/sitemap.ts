export type SitemapStatus = "active" | "disabled";

export type Sitemap = {
    sitemapId: string,
    domain: string, 
    status: SitemapStatus, 
    createdAt: Date,
    updatedAt: Date
}

export type SitemapItem = {
    domain: string,
    sitemapId: string,
    url: string,
    createdAt: Date,
    updatedAt: Date
}