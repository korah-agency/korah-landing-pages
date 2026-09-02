/** Sur-MeZur — site-wide configuration (spec §27). */
export const siteConfig = {
  name: "Sur-MeZur",
  tagline: "Measure smarter. Tailor better.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://sur-mezur.korah.tech",
  email: "contact@korah.tech",
  location: {
    city: "Douala",
    country: { en: "Cameroon", fr: "Cameroun" } as const,
  },
  /** The parent venture from which Sur-MeZur comes (first page where it is mentioned). */
  parent: {
    name: "KORAH",
    url: "https://korah.tech",
  },
  brand: {
    deep: "#41109B",
    base: "#6B20E8",
    bright: "#9A4DFF",
    accent: "#B474FF",
    ink: "#0B0513",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/korah.tech" },
    { label: "Facebook", href: "https://www.facebook.com/techkorah" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/korah-tech" },
  ],
} as const;