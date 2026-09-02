import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollDepth } from "@/components/ScrollDepth";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, htmlLang, isLocale, locales, type Locale } from "@/i18n/config";

import "../globals.css";

/**
 * Two families only, both variable, both subset and preloaded by next/font:
 * Outfit carries the geometric feel of the KORAH wordmark for display type,
 * Inter handles everything that has to stay readable at small sizes.
 */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07040D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** hreflang alternates for every locale plus x-default (spec §28). */
function alternateLanguages(path = "") {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[htmlLang[locale]] = `${siteConfig.url}/${locale}${path}`;
  }
  languages["x-default"] = `${siteConfig.url}/${defaultLocale}${path}`;
  return languages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const active = isLocale(locale) ? locale : defaultLocale;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.home.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.home.description,
    applicationName: siteConfig.name,
    keywords: [
      "African technology company",
      "technology company in Cameroon",
      "African innovation",
      "technology solutions Africa",
      "AI innovation Africa",
      "KORAH",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: {
      canonical: `${siteConfig.url}/${active}`,
      languages: alternateLanguages(),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: active === "fr" ? "fr_CM" : "en_US",
      url: `${siteConfig.url}/${active}`,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: [
        {
          url: "/brand/og.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/brand/og.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const active = locale as Locale;
  const dict = getDictionary(active);

  return (
    <html lang={htmlLang[active]} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/*
          Scroll reveals start at opacity:0 and are switched on by JS. Without
          scripts that would hide the whole page, so no-JS gets them shown.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <Navbar locale={active} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={active} dict={dict} />
        <ScrollDepth />
      </body>
    </html>
  );
}
