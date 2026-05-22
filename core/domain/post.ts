export type Post = {
    id: string,
    title: string,
    slug: string
    domain: string,
    featuredImage: string,
    snippet: string,
    mainCategory: string
    categories: string[],
    segment: string,
    author: string,
    createdAt: string,
    content: string

}

export type PostIndex = {
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
