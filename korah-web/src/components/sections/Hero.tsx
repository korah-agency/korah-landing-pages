import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown } from "@/components/ui/Icons";
import { HeroBackdrop } from "@/components/visuals/HeroBackdrop";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-[calc(var(--nav-h)+4rem)]"
      aria-labelledby="hero-title"
    >
      <HeroBackdrop />

      <div className="container-korah relative z-10">
        <div className="max-w-4xl">
          <Reveal as="p" className="eyebrow">
            {dict.hero.eyebrow}
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="mt-7 font-display text-[clamp(2.75rem,8.2vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.04em]"
            >
              <span className="block text-gradient-mist">{dict.hero.titleLine1}</span>
              <span className="block text-gradient-korah">{dict.hero.titleLine2}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
              {dict.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CtaLink
                href={localizedPath(locale, "/solutions")}
                event={AnalyticsEvent.ctaExploreSolutions}
                eventData={{ from: "hero" }}
              >
                {dict.cta.exploreSolutions}
              </CtaLink>
              <CtaLink
                href={localizedPath(locale, "/partners")}
                variant="ghost"
                event={AnalyticsEvent.ctaPartner}
                eventData={{ from: "hero" }}
              >
                {dict.cta.buildWithKorah}
              </CtaLink>
            </div>
          </Reveal>

          {/* --- micro-proof (spec §2) ---------------------------------- */}
          <Reveal delay={400}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
              {dict.hero.proof.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-mist-400"
                >
                  {index > 0 ? (
                    <span aria-hidden className="hidden h-3 w-px bg-white/12 sm:block" />
                  ) : null}
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-korah-pink/80 sm:hidden"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* --- scroll hint ---------------------------------------------- */}
      <div className="container-korah relative z-10 mt-16 hidden lg:block">
        <a
          href="#why-korah"
          className="link-korah group text-[0.7rem] uppercase tracking-[0.2em] text-mist-500"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 transition-colors duration-300 group-hover:border-korah-pink/60">
            <ArrowDown className="transition-transform duration-500 group-hover:translate-y-0.5" />
          </span>
          {dict.hero.scroll}
        </a>
      </div>

      <p className="container-korah relative z-10 mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-mist-500 lg:absolute lg:bottom-10 lg:right-0 lg:mt-0 lg:text-right">
        {dict.hero.locationLine}
      </p>
    </section>
  );
}
