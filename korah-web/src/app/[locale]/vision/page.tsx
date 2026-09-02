import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { FinalCta } from "@/components/sections/FinalCta";
import { FutureVision } from "@/components/sections/FutureVision";
import { Investors } from "@/components/sections/Investors";
import { VisionTimeline } from "@/components/sections/VisionTimeline";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const active = isLocale(locale) ? locale : defaultLocale;

  return {
    title: { absolute: dict.meta.vision.title },
    description: dict.meta.vision.description,
    alternates: {
      canonical: `${siteConfig.url}/${active}/vision`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/vision`]),
      ),
    },
  };
}

export default async function VisionPage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <PageHero
        eyebrow={dict.pages.vision.eyebrow}
        title={dict.pages.vision.title}
        subtitle={dict.pages.vision.subtitle}
      />

      <VisionTimeline dict={dict} />
      <FutureVision dict={dict} />
      <Investors locale={active} dict={dict} />
      <BrandStatement dict={dict} />
      <FinalCta locale={active} dict={dict} />
    </>
  );
}
