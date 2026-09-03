import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const PIPELINE = ["stage1", "stage2", "stage3"] as const;

export function Technology({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="section-y relative border-t border-violet-950/[0.08] bg-ink-900"
      id="technology"
      aria-labelledby="tech-title"
    >
      <div className="container-smz grid items-center gap-12 lg:grid-cols-2">
        <header>
          <SectionHeader
            eyebrow={dict.tech.eyebrow}
            title={<span id="tech-title">{dict.tech.title}</span>}
            subtitle={dict.tech.sub}
          />

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {[dict.tech.p1, dict.tech.p2, dict.tech.p3, dict.tech.p4, dict.tech.p5].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-violet-600/30 bg-violet-100/70 px-3.5 py-1.5 text-xs font-medium text-violet-800"
                >
                  {pill}
                </li>
              ))}
            </ul>
          </Reveal>
        </header>

        <div>
          <Reveal from="right" delay={120}>
            <div className="surface-card flex flex-col items-center gap-2.5 p-8 font-display text-[0.9375rem]">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-violet-950/16 px-6 py-3 text-mist-100">
                  {dict.tech.pipe1}
                </span>
                <span className="text-violet-500">+</span>
                <span className="rounded-full border border-violet-950/16 px-6 py-3 text-mist-100">
                  {dict.tech.pipe2}
                </span>
              </div>

              <div className="py-2 text-mist-500">↓</div>

              {PIPELINE.map((stage, index) => (
                <span key={stage} className="flex flex-col items-center gap-2.5">
                  <span className="rounded-full border border-violet-950/16 px-6 py-3 text-violet-700">
                    {dict.tech[stage]}
                  </span>
                  {index === PIPELINE.length - 1 ? (
                    <div className="py-1 text-mist-500">↓</div>
                  ) : (
                    <span className="text-violet-500">+</span>
                  )}
                </span>
              ))}

              <span className="rounded-full border border-violet-950/16 px-6 py-3 text-mist-100">
                {dict.tech.result1}
              </span>

              <div className="py-1 text-mist-500">↓</div>

              <span className="rounded-full bg-gradient-to-r from-violet-800 to-violet-600 px-6 py-3 text-white">
                {dict.tech.result2}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={160}>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-lg text-mist-400">
          {dict.tech.close}
        </p>
      </Reveal>
    </section>
  );
}