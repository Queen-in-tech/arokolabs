import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arokolabs.com";
  const routes = [
    "", "/solutions", "/industries", "/case-studies",
    "/in-house-services", "/about", "/insights", "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
