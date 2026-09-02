import type { Locale } from "@/i18n/config";

/** A string that exists in every supported locale. */
export type I18nText = Record<Locale, string>;

export const siteConfig = {
  name: "KORAH",
  legalName: "KORAH",
  tagline: "Dream Without Limits.",
  /** Override in production via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://korah.tech",
  email: "contact@korah.tech",
  location: {
    city: "Douala",
    country: { en: "Cameroon", fr: "Cameroun" } as I18nText,
  },
  foundedYear: 2026,
  brand: {
    purple: "#72489D",
    pink: "#F280B0",
    ink: "#07040D",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/korah-tech", icon: "linkedin" },
    { label: "X", href: "https://x.com/korah_tech", icon: "x" },
    { label: "Instagram", href: "https://www.instagram.com/korah.tech", icon: "instagram" },
    { label: "GitHub", href: "https://github.com/korah-tech", icon: "github" },
  ],
} as const;

/** Primary navigation — spec §1. `hash` targets the homepage narrative. */
export const primaryNav = [
  { key: "solutions", href: "/solutions", hash: "#solutions" },
  { key: "howWeBuild", href: "/#process", hash: "#process" },
  { key: "about", href: "/about", hash: "#about" },
  { key: "vision", href: "/vision", hash: "#vision" },
] as const;

/** Footer column: company. */
export const footerNav = [
  { key: "solutions", href: "/solutions" },
  { key: "howWeBuild", href: "/#process" },
  { key: "about", href: "/about" },
  { key: "vision", href: "/vision" },
  { key: "partners", href: "/partners" },
  { key: "contact", href: "/contact" },
] as const;

export const legalNav = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "cookies", href: "/cookies" },
] as const;

/** Routes rendered for every locale — consumed by sitemap.ts (spec §30). */
export const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/solutions", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/vision", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/partners", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
];
