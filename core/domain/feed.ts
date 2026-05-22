export type FeedItem = {
  id: string;
  title: string;
  slug: string;
  domain: string;
  featuredImage: string;
  snippet: string;
  mainCategory: string;
  categories: string[];
  segment: string;
  author: string,
  createdAt: Date;
};
