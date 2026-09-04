/** Sur-MeZur — site-wide configuration (spec §27). */
export const siteConfig = {
  name: "Sur-MeZur",
  tagline: "Measure smarter. Tailor better.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://sur-mezur.korah.tech",
  /** The web app itself — every "start free" call to action lands here. */
  appUrl: process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "https://smz-sable.vercel.app",
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
  /** Sampled from the logo composited over white (public/brand/Sur-MeZur.png). */
  brand: {
    indigo: "#08044D",
    deep: "#4502AD",
    base: "#5D06CC",
    bright: "#8C29FB",
    paper: "#FFFFFF",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/korah.tech" },
    { label: "Facebook", href: "https://www.facebook.com/techkorah" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/korah-tech" },
  ],
} as const;