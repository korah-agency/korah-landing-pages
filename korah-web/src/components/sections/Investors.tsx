import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Section 20 — investors (spec §20).
 *
 * Wording is descriptive only. The closing disclaimer is part of the section by
 * design: nothing here should read as an offer or a promise of return.
 */
export function Investors({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="investors-title">
      <div className="container-korah">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              eyebrow={dict.investors.eyebrow}
              title={<span id="investors-title">{dict.investors.title}</span>}
              subtitle={dict.investors.body}
            />
            <Reveal delay={240}>
              <div className="mt-10">
                <CtaLink
                  href={localizedPath(locale, "/contact?topic=investment")}
                  event={AnalyticsEvent.ctaContact}
                  eventData={{ from: "investors", topic: "investment" }}
                >
                  {dict.cta.talkToKorah}
                </CtaLink>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            {dict.investors.blocks.map((block, index) => (
              <Reveal key={block.title} from="right" delay={index * 110}>
                <article className="surface-card group flex items-start gap-6 p-8 transition-[transform,border-color] duration-500 hover:translate-x-1 hover:border-white/18">
                  <span
                    aria-hidden
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-korah-pink shadow-[0_0_0_5px_rgba(242,128,176,0.12)]"
                  />
                  <div>
                    <h3 className="font-display text-2xl text-white">{block.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist-400">{block.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={340}>
              <p className="mt-4 border-l border-white/10 pl-5 text-xs leading-relaxed text-mist-500">
                {dict.investors.disclaimer}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
