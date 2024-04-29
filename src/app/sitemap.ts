import { IPost } from "@/services/contentful/types";
import { constants } from "@/utils/constants";
import { MetadataRoute } from "next";

async function generatePages() {
  const defaultUrl = constants.defaultUrl;

  const pagesPaths = ["about", "contact", "projects"];

  const responseBlogPosts = await fetch(
    `${process.env.SITE_URL || defaultUrl}/api/blog`
  );
  const data = await responseBlogPosts.json();
  const blogPosts: IPost[] = data.posts;

  const pages = [
    {
      url: `${process.env.SITE_URL || defaultUrl}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'yearly'
    },
    ...pagesPaths.map((path) => ({
      url: `${process.env.SITE_URL || defaultUrl}/${path}`,
      lastModified: new Date(),
    })),
    {
      url: `${process.env.SITE_URL || defaultUrl}/blog`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly'
    },
    ...blogPosts.map((post) => ({
      url: `${process.env.SITE_URL || defaultUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      priority: 1,
    })),
  ];

  return pages;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await generatePages() as MetadataRoute.Sitemap;

  return [...pages];
}
