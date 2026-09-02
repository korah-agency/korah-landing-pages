import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — African Technology & Innovation`,
    short_name: siteConfig.name,
    description:
      "An African technology company building innovative products that solve real-world problems.",
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.brand.ink,
    theme_color: siteConfig.brand.ink,
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
