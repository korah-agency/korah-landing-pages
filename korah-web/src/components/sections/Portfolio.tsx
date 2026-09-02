import { products, productSpanClass } from "@/data/products";
import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { ProductCard } from "@/components/ProductCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Section 7 — the portfolio (spec §7–§13).
 *
 * The grid is driven entirely by `data/products.ts`: each product declares its
 * own `span`, so adding one is a data change, never a layout change.
 */
export function Portfolio({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      id="solutions"
      className="section-y relative scroll-mt-24 border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="portfolio-title"
    >
      <div className="container-korah">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow={dict.portfolio.eyebrow}
            title={<span id="portfolio-title">{dict.portfolio.title}</span>}
            subtitle={dict.portfolio.subtitle}
          />
          <Reveal delay={200} className="shrink-0">
            <CtaLink
              href={localizedPath(locale, "/solutions")}
              variant="ghost"
              size="sm"
              event={AnalyticsEvent.ctaExploreSolutions}
              eventData={{ from: "portfolio_header" }}
            >
              {dict.cta.seeAll}
            </CtaLink>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {products.map((product, index) => (
            <Reveal
              key={product.slug}
              from="scale"
              delay={Math.min(index, 3) * 90}
              className={productSpanClass[product.span]}
            >
              <ProductCard
                product={product}
                locale={locale}
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
  );
}
