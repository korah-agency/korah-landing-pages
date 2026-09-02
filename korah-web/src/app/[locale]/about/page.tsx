import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { FinalCta } from "@/components/sections/FinalCta";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhyKorah } from "@/components/sections/WhyKorah";
import { Reveal } from "@/components/ui/Reveal";
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
    title: { absolute: dict.meta.about.title },
    description: dict.meta.about.description,
    alternates: {
      canonical: `${siteConfig.url}/${active}/about`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/about`]),
      ),
    },
  };
}

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <PageHero
        eyebrow={dict.pages.about.eyebrow}
        title={dict.pages.about.title}
        subtitle={dict.pages.about.subtitle}
      />

      <section className="section-y pt-4" aria-label={dict.pages.about.storyTitle}>
        <div className="container-korah">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <Reveal>
              <h2 className="text-gradient-mist text-3xl leading-tight sm:text-4xl">
                {dict.pages.about.storyTitle}
              </h2>
            </Reveal>
            <div className="flex flex-col gap-6">
              {dict.pages.about.story.map((paragraph, index) => (
                <Reveal key={index} delay={100 + index * 90}>
                  <p className="text-base leading-relaxed text-mist-300 sm:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutSection locale={active} dict={dict} />
      <Philosophy dict={dict} />
      <WhyKorah dict={dict} />
      <BrandStatement dict={dict} />
      <FinalCta locale={active} dict={dict} />
    </>
  );
}
