import type { Metadata, Viewport } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, htmlLang, isLocale, locales, type Locale } from "@/i18n/config";

import "../globals.css";

/*
 * The wordmark in the logo is a high-contrast Didone; Playfair Display is the
 * closest match available as a variable web font. Jost is the geometric
 * companion that echoes the tagline set in wide capitals underneath it.
 */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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
      default: dict.meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    applicationName: siteConfig.name,
    keywords: [
      "AI body measurement",
      "custom fashion technology",
      "tailoring software Cameroon",
      "photo-based measurement",
      "Sur-MeZur",
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
      title: dict.meta.title,
      description: dict.meta.description,
      images: [
        {
          url: "/brand/Sur-MeZur.png",
          width: 1024,
          height: 1536,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/brand/Sur-MeZur.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
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
    <html lang={htmlLang[active]} className={`${playfair.variable} ${jost.variable}`}>
      <head>
        {/*
          Scroll reveals start at opacity:0 and are switched on by JS. Without
          scripts that would hide the page, so no-JS gets them shown.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <Navbar locale={active} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={active} dict={dict} />
      </body>
    </html>
  );
}