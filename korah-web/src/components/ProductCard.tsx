"use client";

import Link from "next/link";

import { statusLabels, type Product } from "@/data/products";
import type { Locale } from "@/i18n/config";
import { localizedPath } from "@/i18n/config";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/components/ui/Icons";
import { ProductVisual } from "@/components/visuals/ProductVisual";

type ProductCardProps = {
  product: Product;
  locale: Locale;
  exploreLabel: string;
  /** Index is used only for the visual number in the corner. */
  index: number;
  className?: string;
};

const minHeightClass: Record<Product["span"], string> = {
  hero: "lg:min-h-[30rem]",
  wide: "lg:min-h-[30rem]",
  standard: "lg:min-h-[22rem]",
};

export function ProductCard({
  product,
  locale,
  exploreLabel,
  index,
  className,
}: ProductCardProps) {
  const href = localizedPath(locale, `/solutions/${product.slug}`);
  const isHero = product.span === "hero";
  const uid = `pv-${product.slug}`;

  return (
    <Link
      href={href}
      onClick={() =>
        track(AnalyticsEvent.productView, { product: product.slug, from: "portfolio_card" })
      }
      className={cn(
        "group surface-card relative isolate flex min-h-[20rem] flex-col justify-between overflow-hidden p-7 transition-[transform,border-color,box-shadow] duration-500 ease-[var(--ease-korah)]",
        "hover:-translate-y-1.5 hover:border-white/20 focus-visible:-translate-y-1.5",
        "hover:shadow-[0_30px_80px_-40px_rgba(114,72,157,0.9)]",
        minHeightClass[product.span],
        className,
      )}
      aria-label={`${product.name} — ${product.badge[locale]}`}
    >
      {/* accent wash that warms up on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 90% at 85% 10%, ${product.accent.from}26 0%, transparent 62%)`,
        }}
      />

      {/* hairline that traces the top edge on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-7 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-korah-pink to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />

      {/* --- top row -------------------------------------------------- */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
            product.copyPending
              ? "border-white/10 text-mist-500"
              : "border-white/12 text-mist-300",
          )}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: product.accent.from }}
            aria-hidden
          />
          {product.badge[locale]}
        </span>

        <span className="font-display text-xs tabular-nums text-mist-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* --- visual --------------------------------------------------- */}
      <div
        className={cn(
          "relative z-0 mx-auto my-6 w-full max-w-md transition-transform duration-700 ease-[var(--ease-korah)] group-hover:scale-[1.04]",
          isHero ? "h-40 sm:h-52 lg:h-60" : "h-32 sm:h-40",
        )}
      >
        <ProductVisual visual={product.visual} accent={product.accent} uid={uid} />
      </div>

      {/* --- bottom --------------------------------------------------- */}
      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3
            className={cn(
              "font-display leading-none text-white",
              isHero ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl",
            )}
          >
            {product.name}
          </h3>
          <span className="shrink-0 text-[0.7rem] uppercase tracking-[0.14em] text-mist-500">
            {statusLabels[product.status][locale]}
          </span>
        </div>

        {/*
          Compact by default on large screens; the description and CTA slide in
          on hover or keyboard focus (spec §13). Always visible on touch.
        */}
        <div className="grid grid-rows-[1fr] transition-all duration-500 ease-[var(--ease-korah)] lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 lg:group-focus-visible:grid-rows-[1fr] lg:group-focus-visible:opacity-100">
          <div className="overflow-hidden">
            <p
              className={cn(
                "max-w-lg text-sm leading-relaxed text-mist-400",
                isHero && "sm:text-base",
              )}
            >
              {product.description[locale]}
            </p>
          </div>
        </div>

        <span className="link-korah mt-1 text-sm font-semibold text-korah-pink">
          {exploreLabel} {product.name}
          <ArrowRight
            className="transition-transform duration-500 group-hover:translate-x-1"
            width={15}
            height={15}
          />
        </span>
      </div>
    </Link>
  );
}
