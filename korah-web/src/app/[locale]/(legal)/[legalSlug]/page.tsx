import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getLegalDocument, legalDocuments, legalUpdatedLabel } from "@/data/legal";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";

type Params = { params: Promise<{ locale: string; legalSlug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    legalDocuments.map((doc) => ({ locale, legalSlug: doc.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, legalSlug } = await params;
  const doc = getLegalDocument(legalSlug);
  if (!doc) return {};

  const active = isLocale(locale) ? locale : defaultLocale;

  return {
    title: doc.title[active],
    description: doc.intro[active],
    alternates: {
      canonical: `${siteConfig.url}/${active}/${doc.slug}`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/${doc.slug}`]),
      ),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({ params }: Params) {
  const { locale, legalSlug } = await params;
  const doc = getLegalDocument(legalSlug);
  if (!doc) notFound();

  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <PageHero
        eyebrow={dict.footer.legal}
        title={doc.title[active]}
        subtitle={doc.intro[active]}
      />

      <article className="section-y pt-4">
        <div className="container-korah">
          <p className="text-xs uppercase tracking-[0.16em] text-mist-500">
            {legalUpdatedLabel(active)}
          </p>

          <div className="mt-12 flex max-w-3xl flex-col gap-14">
            {doc.sections.map((section, index) => (
              <Reveal key={section.heading.en} delay={index * 80}>
                <section>
                  <h2 className="font-display text-2xl text-white sm:text-3xl">
                    {section.heading[active]}
                  </h2>
                  <div className="mt-5 flex flex-col gap-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="text-base leading-relaxed text-mist-400">
                        {paragraph[active]}
                      </p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
