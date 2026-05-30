import type { MetadataRoute } from "next";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://ciudadconecta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/explorar", "/mapa", "/promociones", "/perfil", "/login", "/registro"];
  return routes.map((route) => ({
    url: `${APP_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
