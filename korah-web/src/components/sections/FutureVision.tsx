import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Section 19 — the ambition beyond a single product (spec §19). */
export function FutureVision({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="future-title"
    >
      <div className="container-korah">
        <SectionHeader
          eyebrow={dict.future.eyebrow}
          title={<span id="future-title">{dict.future.title}</span>}
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {dict.future.goals.map((goal, index) => (
            <Reveal key={goal.index} as="li" delay={index * 120}>
              <article className="surface-card group relative flex h-full flex-col justify-between overflow-hidden p-9 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-white/18">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-korah-pink/12 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <p className="font-display text-xs tabular-nums tracking-[0.2em] text-mist-500">
                  {goal.index}
                </p>
                <div className="mt-14">
                  <p className="text-gradient-korah font-display text-[clamp(2.5rem,5vw,3.5rem)] leading-none">
                    {goal.value}
                  </p>
                  <p className="mt-2 font-display text-xl text-white">{goal.title}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist-400">{goal.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* --- the line that carries the whole page ------------------- */}
        <Reveal delay={140}>
          <blockquote className="relative mt-20 overflow-hidden rounded-[var(--radius-card)] border border-white/[0.08] px-8 py-14 text-center sm:px-16 sm:py-20">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18]"
              style={{
                background:
                  "radial-gradient(80% 120% at 50% 120%, #72489D 0%, transparent 70%)",
              }}
            />
            <p className="relative mx-auto max-w-4xl font-display text-[clamp(1.5rem,3.4vw,2.75rem)] leading-[1.15]">
              <span className="text-mist-400">{dict.future.statement[0]}</span>{" "}
              <span className="text-gradient-mist">{dict.future.statement[1]}</span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
