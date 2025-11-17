import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gusrich-landingpage.vercel.app/sitemap.xml",
    host: "https://gusrich-landingpage.vercel.app",
  };
}
