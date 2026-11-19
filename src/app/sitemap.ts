import { MetadataRoute } from "next";
import { apps } from "@/data/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xtremerpie.dev";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/apps`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/updates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const appRoutes: MetadataRoute.Sitemap = apps.map((app) => {
    let lastMod = new Date();
    try {
      const parsed = new Date(app.releaseDate);
      if (!isNaN(parsed.getTime())) {
        lastMod = parsed;
      }
    } catch {
      lastMod = new Date();
    }

    return {
      url: `${baseUrl}/apps/${app.id}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.85,
    };
  });

  return [...staticRoutes, ...appRoutes];
}
