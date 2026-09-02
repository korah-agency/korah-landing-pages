import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Section 17 — the three pillars (spec §17). */
export function WhyKorah({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="why-title"
    >
      <div className="container-korah">
        <SectionHeader
          eyebrow={dict.why.eyebrow}
          title={<span id="why-title">{dict.why.title}</span>}
          align="center"
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-white/[0.08] bg-white/[0.06] md:grid-cols-3">
          {dict.why.pillars.map((pillar, index) => (
            <Reveal key={pillar.index} as="li" delay={index * 110} className="bg-ink-900">
              <article className="group relative h-full overflow-hidden p-9 transition-colors duration-500 hover:bg-ink-850">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-korah-purple to-korah-pink transition-transform duration-700 group-hover:scale-x-100"
                />
                <p className="font-display text-xs tabular-nums tracking-[0.2em] text-korah-pink">
                  {pillar.index}
                </p>
                <h3 className="mt-6 font-display text-2xl leading-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-400">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
