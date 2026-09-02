import { founders } from "@/data/founders";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

/** schema.org Organization — the entity behind every page. */
export function organizationJsonLd(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    slogan: siteConfig.tagline,
    url: `${siteConfig.url}/${locale}`,
    logo: `${siteConfig.url}/brand/icon-512.png`,
    image: `${siteConfig.url}/brand/og.png`,
    description: dict.meta.home.description,
    email: siteConfig.email,
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: "CM",
    },
    founder: founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role[locale],
    })),
    sameAs: siteConfig.socials.map((social) => social.href),
    knowsAbout: [
      "Artificial intelligence",
      "Connected devices",
      "Product engineering",
      "African technology",
    ],
  };
}

export function websiteJsonLd(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/${locale}`,
    name: siteConfig.name,
    description: dict.meta.home.description,
    inLanguage: locale,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

/** The portfolio as an ItemList, so each product can surface on its own. */
export function portfolioJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: getDictionary(locale).portfolio.title,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description[locale],
        category: product.badge[locale],
        url: `${siteConfig.url}/${locale}/solutions/${product.slug}`,
        brand: { "@id": `${siteConfig.url}/#organization` },
      },
    })),
  };
}

export function productJsonLd(locale: Locale, slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview[locale],
    category: product.badge[locale],
    url: `${siteConfig.url}/${locale}/solutions/${product.slug}`,
    image: `${siteConfig.url}/brand/og.png`,
    brand: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbJsonLd(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}/${locale}${crumb.path === "/" ? "" : crumb.path}`,
    })),
  };
}
