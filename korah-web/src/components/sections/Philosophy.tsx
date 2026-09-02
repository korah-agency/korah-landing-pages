import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { InfinityMark } from "@/components/ui/Icons";

/**
 * Section 3 — the narrative pivot straight after the hero.
 * Deliberately typographic: one very large statement, then the reasoning.
 */
export function Philosophy({ dict }: { dict: Dictionary }) {
  return (
    <section id="why-korah" className="section-y relative overflow-hidden" aria-labelledby="philosophy-title">
      <InfinityMark
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 hidden h-auto w-[34rem] text-korah-purple opacity-[0.05] lg:block"
      />

      <div className="container-korah relative">
        <Reveal as="p" className="eyebrow">
          {dict.philosophy.eyebrow}
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal delay={80}>
            <h2
              id="philosophy-title"
              className="text-gradient-mist text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.04]"
            >
              {dict.philosophy.title}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6 lg:pt-3">
            {dict.philosophy.body.map((paragraph, index) => (
              <Reveal key={index} delay={140 + index * 90}>
                <p
                  className={
                    index === dict.philosophy.body.length - 1
                      ? "border-l-2 border-korah-pink/60 pl-5 text-base leading-relaxed text-mist-200 sm:text-lg"
                      : "text-base leading-relaxed text-mist-400"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
