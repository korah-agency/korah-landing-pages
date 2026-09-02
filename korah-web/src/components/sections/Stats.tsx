import { stats } from "@/data/stats";
import type { Dictionary } from "@/i18n";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="stats-title">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[72rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #72489D 0%, rgba(242,128,176,0.4) 55%, transparent 100%)",
        }}
      />

      <div className="container-korah relative">
        <SectionHeader
          title={<span id="stats-title">{dict.stats.title}</span>}
          subtitle={dict.stats.subtitle}
          align="center"
          width="narrow"
        />

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-4">
          {stats.map((stat, index) => (
            <Reveal
              key={dict.stats.labels[index]}
              delay={index * 90}
              className="flex flex-col items-center gap-3 text-center"
            >
              <dt className="sr-only">{dict.stats.labels[index]}</dt>
              <dd className="flex flex-col items-center gap-3">
                <Counter
                  stat={stat}
                  className="text-gradient-korah font-display text-[clamp(2.75rem,6vw,4.25rem)] leading-none tabular-nums"
                />
                <span aria-hidden className="h-px w-8 bg-white/12" />
                <span className="max-w-[11rem] text-xs uppercase leading-relaxed tracking-[0.14em] text-mist-400">
                  {dict.stats.labels[index]}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
