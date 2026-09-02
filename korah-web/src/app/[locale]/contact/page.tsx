import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/Icons";
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
    title: { absolute: dict.meta.contact.title },
    description: dict.meta.contact.description,
    alternates: {
      canonical: `${siteConfig.url}/${active}/contact`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/contact`]),
      ),
    },
  };
}

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <PageHero
        eyebrow={dict.pages.contact.eyebrow}
        title={dict.pages.contact.title}
        subtitle={dict.pages.contact.subtitle}
      />

      <section className="section-y pt-4" aria-label={dict.pages.contact.title}>
        <div className="container-korah">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            {/* --- direct details ---------------------------------- */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.18em] text-mist-500">
                  {dict.pages.contact.directTitle}
                </p>
              </Reveal>

              <Reveal delay={80}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 block font-display text-2xl text-white transition-colors duration-300 hover:text-korah-pink sm:text-3xl"
                >
                  {siteConfig.email}
                </a>
              </Reveal>

              <Reveal delay={140}>
                <p className="mt-5 text-sm text-mist-400">
                  {siteConfig.location.city} · {siteConfig.location.country[active]}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 border-l border-white/10 pl-5 text-sm leading-relaxed text-mist-400">
                  {dict.pages.contact.responseTime}
                </p>
              </Reveal>

              <Reveal delay={260}>
                <ul className="mt-9 flex flex-wrap gap-2">
                  {siteConfig.socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={social.label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-korah-pink/50 hover:text-white"
                      >
                        <SocialIcon name={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* --- form --------------------------------------------- */}
            <Reveal delay={140}>
              <div className="surface-card p-8 sm:p-10">
                <Suspense fallback={<div className="h-96" aria-hidden />}>
                  <ContactForm locale={active} dict={dict} />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
