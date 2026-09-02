import { getProduct } from "@/data/products";
import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { Spark } from "@/components/ui/Icons";
import { ProductVisual } from "@/components/visuals/ProductVisual";

/**
 * Section 15 — proof of execution (spec §15).
 *
 * The APME badge is rendered as a typographic mark. Drop the official
 * programme logo into /public/brand and swap the badge block once KORAH has
 * written authorisation to display it.
 */
export function Proof({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const siren = getProduct("siren");

  return (
    <section
      className="section-y relative overflow-hidden border-y border-white/[0.06] bg-ink-900"
      aria-labelledby="proof-title"
    >
      <div className="container-korah">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          {/* --- narrative ------------------------------------------- */}
          <div>
            <Reveal as="p" className="eyebrow">
              {dict.proof.eyebrow}
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="proof-title"
                className="text-gradient-mist mt-7 text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]"
              >
                {dict.proof.title}
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
                {dict.proof.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <blockquote className="mt-10 border-l-2 border-korah-pink pl-6">
                <p className="font-display text-2xl leading-snug text-white sm:text-3xl">
                  {dict.proof.statement}
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10">
                <CtaLink
                  href={localizedPath(locale, "/solutions/siren")}
                  variant="ghost"
                  size="sm"
                  event={AnalyticsEvent.productView}
                  eventData={{ product: "siren", from: "proof" }}
                >
                  {dict.portfolio.exploreLabel} SIREN
                </CtaLink>
              </div>
            </Reveal>
          </div>

          {/* --- award card ------------------------------------------ */}
          <Reveal from="scale" delay={140}>
            <article className="surface-card relative overflow-hidden p-8 sm:p-10">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-korah-pink/20 blur-3xl"
              />

              <div className="relative flex items-start justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-korah-pink/40 bg-korah-pink/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-korah-pink">
                    <Spark width={11} height={11} />
                    {dict.proof.programme}
                  </span>
                  <p className="font-display text-4xl text-white sm:text-5xl">
                    {dict.proof.productName}
                  </p>
                </div>
                <p className="font-display text-3xl tabular-nums text-white/12">
                  {dict.proof.year}
                </p>
              </div>

              {siren ? (
                <div className="relative my-8 h-40 sm:h-48">
                  <ProductVisual visual={siren.visual} accent={siren.accent} uid="proof-siren" />
                </div>
              ) : null}

              <dl className="relative grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/[0.08] pt-8">
                {dict.proof.facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-1.5">
                    <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-mist-500">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-mist-100">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
