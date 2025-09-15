import { HeaderData } from "@/data/data";
import blogs from "../../data/blogs.json";

const baseUrl = "https://stayindigital.com";

export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/about-us",
    "/services",
    "/courses",
    "/blogs",
    "./contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const servicesCategory = HeaderData.find((item) => item.name === "Services");
  const serviceRoutes = (servicesCategory?.items || []).map((s) => ({
    url: `${baseUrl}${s.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const coursesCategory = HeaderData.find((item) => item.name === "Courses");
  const courseRoutes = (coursesCategory?.items || []).map((c) => ({
    url: `${baseUrl}${c.link}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes = (blogs || []).map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}`,
    lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...courseRoutes, ...blogRoutes];
}
