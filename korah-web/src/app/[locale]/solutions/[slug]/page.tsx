import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/layout/PageHero";
import { CtaLink } from "@/components/ui/CtaLink";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/visuals/ProductVisual";
import { getProduct, products, statusLabels } from "@/data/products";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/i18n";
import { defaultLocale, isLocale, localizedPath, locales, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/structured-data";

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const active = isLocale(locale) ? locale : defaultLocale;

  return {
    title: `${product.name} — ${product.badge[active]}`,
    description: product.description[active],
    alternates: {
      canonical: `${siteConfig.url}/${active}/solutions/${slug}`,
      languages: Object.fromEntries(
        locales.map((code) => [code, `${siteConfig.url}/${code}/solutions/${slug}`]),
      ),
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description[active],
      url: `${siteConfig.url}/${active}/solutions/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const active: Locale = isLocale(locale) ? locale : defaultLocale;
  const dict = getDictionary(active);
  const others = products.filter((item) => item.slug !== slug);

  const jsonLd = [
    productJsonLd(active, slug),
    breadcrumbJsonLd(active, [
      { name: dict.nav.home, path: "/" },
      { name: dict.nav.solutions, path: "/solutions" },
      { name: product.name, path: `/solutions/${slug}` },
    ]),
  ].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero eyebrow={product.badge[active]} title={product.name}>
        <Link
          href={localizedPath(active, "/solutions")}
          className="link-korah text-sm text-mist-400"
        >
          <ArrowRight className="rotate-180" width={15} height={15} />
          {dict.cta.back}
        </Link>
      </PageHero>

      {/* --- overview -------------------------------------------------- */}
      <section className="section-y pt-4" aria-label={dict.pages.product.overview}>
        <div className="container-korah">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                {dict.pages.product.overview}
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-7 text-lg leading-relaxed text-mist-200 sm:text-xl">
                  {product.overview[active]}
                </p>
              </Reveal>

              <Reveal delay={160}>
                <dl className="mt-10 grid max-w-md grid-cols-2 gap-8 border-t border-white/[0.08] pt-8">
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-mist-500">
                      {dict.pages.product.status}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-mist-100">
                      {statusLabels[product.status][active]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-mist-500">
                      {dict.pages.product.category}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-mist-100">
                      {product.badge[active]}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            <Reveal from="scale" delay={120}>
              <div className="surface-card relative overflow-hidden p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{
                    background: `radial-gradient(110% 90% at 80% 10%, ${product.accent.from}26 0%, transparent 65%)`,
                  }}
                />
                <div className="relative h-56 sm:h-72">
                  <ProductVisual
                    visual={product.visual}
                    accent={product.accent}
                    uid={`page-${product.slug}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- highlights ------------------------------------------------ */}
      {product.highlights.length > 0 ? (
        <section
          className="section-y border-t border-white/[0.06] bg-ink-900"
          aria-label={dict.pages.product.highlights}
        >
          <div className="container-korah">
            <Reveal>
              <h2 className="text-gradient-mist text-3xl sm:text-4xl">
                {dict.pages.product.highlights}
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {product.highlights.map((highlight, index) => (
                <Reveal key={highlight.title.en} as="li" delay={index * 110}>
                  <article className="surface-card h-full p-8">
                    <p className="font-display text-xs tabular-nums tracking-[0.2em] text-korah-pink">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-6 font-display text-xl text-white">
                      {highlight.title[active]}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-400">
                      {highlight.body[active]}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* --- talk to us ------------------------------------------------ */}
      <section className="section-y" aria-label={dict.pages.product.interested}>
        <div className="container-korah">
          <Reveal>
            <div className="surface-card flex flex-col items-start gap-8 overflow-hidden p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-3xl text-white sm:text-4xl">
                  {dict.pages.product.interested}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mist-400">
                  {dict.pages.product.interestedBody}
                </p>
              </div>
              <CtaLink
                href={localizedPath(active, `/contact?topic=product`)}
                event={AnalyticsEvent.ctaContact}
                eventData={{ from: "product_page", product: product.slug }}
                className="shrink-0"
              >
                {dict.cta.talkToKorah}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- other products -------------------------------------------- */}
      <section
        className="section-y border-t border-white/[0.06] bg-ink-900"
        aria-label={dict.pages.product.other}
      >
        <div className="container-korah">
          <Reveal>
            <h2 className="text-gradient-mist text-3xl sm:text-4xl">
              {dict.pages.product.other}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item, index) => (
              <Reveal
                key={item.slug}
                from="scale"
                delay={index * 80}
              >
                <ProductCard
                  product={item}
                  locale={active}
                  index={products.indexOf(item)}
                  exploreLabel={dict.portfolio.exploreLabel}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
