import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * Section 16 — AI as leverage (spec §16).
 * The closing note is deliberately prominent: AI is the leverage, not the
 * identity, and the layout should say that before anyone reads the words.
 */
export function AiSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="ai-title">
      <div className="container-korah">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <SectionHeader
            eyebrow={dict.ai.eyebrow}
            title={<span id="ai-title">{dict.ai.title}</span>}
          />
          <Reveal delay={140}>
            <p className="max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg lg:pt-4">
              {dict.ai.body}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {dict.ai.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} as="li" delay={index * 110}>
              <article className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-white/[0.08] p-8 transition-colors duration-500 hover:border-white/20">
                {/* speed lines — three, then two, then one: iteration tightening */}
                <div aria-hidden className="flex flex-col gap-2">
                  {[0, 1, 2].map((line) => (
                    <span
                      key={line}
                      className="h-px rounded-full bg-gradient-to-r from-korah-purple to-korah-pink transition-all duration-700 ease-[var(--ease-korah)]"
                      style={{
                        width: `${100 - line * 22 - index * 8}%`,
                        opacity: 0.85 - line * 0.25,
                        transitionDelay: `${line * 80}ms`,
                      }}
                    />
                  ))}
                </div>

                <h3 className="mt-10 font-display text-2xl text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-400">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={160}>
          <p className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg text-mist-300 sm:text-xl">
            <span aria-hidden className="h-px w-10 bg-korah-pink" />
            <span className="font-display text-white">{dict.ai.note}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
