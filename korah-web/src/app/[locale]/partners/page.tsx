import type { Metadata } from "next";

import { PartnerForm } from "@/components/forms/PartnerForm";
import { PageHero } from "@/components/layout/PageHero";
import { Investors } from "@/components/sections/Investors";
import { PartnersSection } from "@/components/sections/PartnersSection";
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
    title: { absolute: dict.meta.partners.title },
    description: dict.meta.partners.description,
    alternates: {
      canonical: `${siteConfig.url}/${active}/partners`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/partners`]),
      ),
    },
  };
}

export default async function PartnersPage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <PageHero
        eyebrow={dict.pages.partners.eyebrow}
        title={dict.pages.partners.title}
        subtitle={dict.pages.partners.subtitle}
      />

      <PartnersSection locale={active} dict={dict} withCta={false} />

      <section id="partner-form" className="section-y scroll-mt-24" aria-label={dict.pages.partners.formTitle}>
        <div className="container-korah">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <h2 className="text-gradient-mist text-3xl leading-tight sm:text-4xl">
                  {dict.pages.partners.formTitle}
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 max-w-md text-base leading-relaxed text-mist-400">
                  {dict.pages.partners.formBody}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-korah mt-8 inline-flex text-sm"
                >
                  {siteConfig.email}
                </a>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="surface-card p-8 sm:p-10">
                <PartnerForm locale={active} dict={dict} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Investors locale={active} dict={dict} />
    </>
  );
}
