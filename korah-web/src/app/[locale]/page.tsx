import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { AiSection } from "@/components/sections/AiSection";
import { Approach } from "@/components/sections/Approach";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { FinalCta } from "@/components/sections/FinalCta";
import { FutureVision } from "@/components/sections/FutureVision";
import { Hero } from "@/components/sections/Hero";
import { Investors } from "@/components/sections/Investors";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { Philosophy } from "@/components/sections/Philosophy";
import { Portfolio } from "@/components/sections/Portfolio";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Problem } from "@/components/sections/Problem";
import { Proof } from "@/components/sections/Proof";
import { Stats } from "@/components/sections/Stats";
import { VisionTimeline } from "@/components/sections/VisionTimeline";
import { WhyKorah } from "@/components/sections/WhyKorah";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: { absolute: dict.meta.home.title },
    description: dict.meta.home.description,
  };
}

/**
 * The homepage is one story, told in order (spec §36):
 * dream → problem → build → products → proof → vision → partnership → dream.
 */
export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is generated from our own data files — no user input.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd(active), websiteJsonLd(active)]),
        }}
      />

      <Hero locale={active} dict={dict} />
      <Philosophy dict={dict} />
      <Problem dict={dict} />
      <Approach dict={dict} />
      <ProcessTimeline dict={dict} />
      <Portfolio locale={active} dict={dict} />
      <Stats dict={dict} />
      <Proof locale={active} dict={dict} />
      <AiSection dict={dict} />
      <WhyKorah dict={dict} />
      <VisionTimeline dict={dict} />
      <FutureVision dict={dict} />
      <Investors locale={active} dict={dict} />
      <PartnersSection locale={active} dict={dict} />
      <AboutSection locale={active} dict={dict} />
      <BrandStatement dict={dict} />
      <FinalCta locale={active} dict={dict} />
    </>
  );
}
