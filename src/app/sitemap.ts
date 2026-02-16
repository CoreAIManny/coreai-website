import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coreaisolutions.co.uk";
  const pages = [
    "",
    "/pricing",
    "/services/ai-receptionist",
    "/services/workflow-automation",
    "/services/implementation",
    "/industries/plumbers",
    "/industries/estate-agents",
    "/industries/home-services",
    "/case-studies",
    "/case-studies/luke-finney",
    "/blog",
    "/about",
    "/book-demo",
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" ? 0.9 : 0.8,
  }));
}
