import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { InfinityMark } from "@/components/ui/Icons";

/** Section 24 — the closing CTA (spec §24). */
export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="final-cta-title">
      <InfinityMark
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[52rem] -translate-x-1/2 -translate-y-1/2 text-korah-purple opacity-[0.06]"
      />

      <div className="container-korah relative flex flex-col items-center text-center">
        <Reveal>
          <h2
            id="final-cta-title"
            className="text-gradient-mist max-w-3xl text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[1.03]"
          >
            {dict.finalCta.title}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {dict.finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CtaLink
              href={localizedPath(locale, "/solutions")}
              event={AnalyticsEvent.ctaExploreSolutions}
              eventData={{ from: "final_cta" }}
            >
              {dict.cta.exploreSolutions}
            </CtaLink>
            <CtaLink
              href={localizedPath(locale, "/partners")}
              variant="ghost"
              event={AnalyticsEvent.ctaPartner}
              eventData={{ from: "final_cta" }}
            >
              {dict.cta.partnerWithKorah}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
