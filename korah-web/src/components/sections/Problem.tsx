import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Problem({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-y relative border-t border-white/[0.06] bg-ink-900" aria-labelledby="problem-title">
      <div className="container-korah">
        <SectionHeader title={<span id="problem-title">{dict.problem.title}</span>} subtitle={dict.problem.intro} />

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {dict.problem.cards.map((card, index) => (
            <Reveal key={card.index} as="li" delay={index * 110} className="h-full">
              <article className="surface-card group relative h-full overflow-hidden p-8 transition-[transform,border-color] duration-500 ease-[var(--ease-korah)] hover:-translate-y-1 hover:border-white/18">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-korah-purple/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <p className="font-display text-5xl leading-none text-white/12 transition-colors duration-500 group-hover:text-korah-pink/40">
                  {card.index}
                </p>
                <h3 className="mt-8 text-xl text-white sm:text-2xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist-400">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
