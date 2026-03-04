import { MetadataRoute } from "next"
import { services, siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = [
    "",
    "/services",
    "/work",
    "/about",
    "/contact",
  ]

  const service_routes:MetadataRoute.Sitemap = services.map(s=>({
    url: `${baseUrl}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.8
  }))

  const main_routes:MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const all_routes = main_routes.concat(service_routes)


  return all_routes
}
