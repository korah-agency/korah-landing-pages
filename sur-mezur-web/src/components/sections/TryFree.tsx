import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { localizePath, type Locale } from "@/i18n/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

/**
 * Replaces the pricing table: the landing page no longer quotes a price, it
 * sends people straight into the app to try it.
 */
export function TryFree({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  /*
   * The hyphen in "Sur-MeZur" is a legal break point, so the brand name splits
   * across two lines in the largest heading on the page. Keep it whole.
   */
  const [beforeBrand, afterBrand] = dict.trial.title.split("Sur-MeZur");
  const title =
    afterBrand === undefined ? (
      dict.trial.title
    ) : (
      <>
        {beforeBrand}
        <span className="whitespace-nowrap">Sur-MeZur</span>
        {afterBrand}
      </>
    );

  const points = [
    { index: "01", title: dict.trial.b1t, body: dict.trial.b1b },
    { index: "02", title: dict.trial.b2t, body: dict.trial.b2b },
    { index: "03", title: dict.trial.b3t, body: dict.trial.b3b },
  ];

  return (
    <section className="section-y" id="try-free" aria-labelledby="trial-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.trial.eyebrow}
          title={<span id="trial-title">{title}</span>}
          subtitle={dict.trial.sub}
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {points.map((point, index) => (
            <Reveal key={point.index} as="li" delay={index * 120}>
              <article className="surface-card group flex h-full flex-col gap-3 p-8 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <p className="font-display text-3xl leading-none text-violet-500/50">
                  {point.index}
                </p>
                <h3 className="mt-3 text-xl text-mist-50">{point.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mist-400">{point.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a href={siteConfig.appUrl} className="btn btn-primary">
              {dict.trial.cta}
              <ArrowRight className="btn-arrow" width={16} height={16} />
            </a>
            <a href={localizePath(locale, "#how-it-works")} className="btn btn-ghost">
              {dict.trial.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 text-center text-[0.8125rem] text-mist-500">{dict.trial.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
