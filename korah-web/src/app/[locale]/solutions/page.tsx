import type { Metadata } from "next";

import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/layout/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { products, productSpanClass } from "@/data/products";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { portfolioJsonLd } from "@/lib/structured-data";
import { Reveal } from "@/components/ui/Reveal";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const active = isLocale(locale) ? locale : defaultLocale;

  return {
    title: { absolute: dict.meta.solutions.title },
    description: dict.meta.solutions.description,
    alternates: {
      canonical: `${siteConfig.url}/${active}/solutions`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/solutions`]),
      ),
    },
  };
}

export default async function SolutionsPage({ params }: Params) {
  const { locale } = await params;
  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd(active)) }}
      />

      <PageHero
        eyebrow={dict.pages.solutions.eyebrow}
        title={dict.pages.solutions.title}
        subtitle={dict.pages.solutions.subtitle}
      />

      <section className="section-y pt-4" aria-label={dict.portfolio.title}>
        <div className="container-korah">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {products.map((product, index) => (
              <Reveal
                key={product.slug}
                from="scale"
                delay={Math.min(index, 3) * 90}
                className={productSpanClass[product.span]}
              >
                <ProductCard
                  product={product}
                  locale={active}
                  index={index}
                  exploreLabel={dict.portfolio.exploreLabel}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-mist-500">
              <span aria-hidden className="h-px w-8 bg-korah-pink/60" />
              {dict.portfolio.moreSoon}
            </p>
          </Reveal>
        </div>
      </section>

      <ProcessTimeline dict={dict} />
      <FinalCta locale={active} dict={dict} />
    </>
  );
}
