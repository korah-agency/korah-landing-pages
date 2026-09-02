import type { MetadataRoute } from "next";

import { legalDocuments } from "@/data/legal";
import { products } from "@/data/products";
import { siteConfig, staticRoutes } from "@/data/site";
import { defaultLocale, locales } from "@/i18n/config";

/**
 * One entry per route per locale, each carrying the full hreflang set
 * (spec §28 / §30). Adding a product or a legal page updates this for free.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    ...staticRoutes,
    ...products.map((product) => ({
      path: `/solutions/${product.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...legalDocuments.map((doc) => ({
      path: `/${doc.slug}`,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    })),
  ];

  return paths.flatMap((route) => {
    const suffix = route.path === "/" ? "" : route.path;

    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = `${siteConfig.url}/${locale}${suffix}`;
    }
    languages["x-default"] = `${siteConfig.url}/${defaultLocale}${suffix}`;

    return locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${suffix}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: { languages },
    }));
  });
}
