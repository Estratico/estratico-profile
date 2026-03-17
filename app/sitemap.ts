import { MetadataRoute } from "next"
import { services, siteConfig } from "@/config/site"
import { getBlogPostSlugs } from "@/lib/basehub-blog"


export const revalidate = 86400;

const lastMod = new Date().toISOString();

export default async  function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  const routes = [
    "",
    "/services",
    "/work",
    "/blog",
    "/about",
    "/contact",
  ]

  const service_routes:MetadataRoute.Sitemap = services.map(s=>({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: lastMod,
    changeFrequency: "yearly",
    priority: 0.8
  }))

  const blogSlugs = await getBlogPostSlugs()
  const dynamic_blog_routes:MetadataRoute.Sitemap = blogSlugs.map(s=>({
    url: `${baseUrl}/blog/${s}`,
    lastModified: lastMod,
    changeFrequency: "weekly",
    priority: 0.8
  }))


  const main_routes:MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastMod,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const all_routes = main_routes.concat(service_routes).concat(dynamic_blog_routes)


  return all_routes
}
