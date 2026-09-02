import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Problem({ dict }: { dict: Dictionary }) {
  const steps = [
    { index: "01", title: dict.problem.s1t, body: dict.problem.s1b },
    { index: "02", title: dict.problem.s2t, body: dict.problem.s2b },
    { index: "03", title: dict.problem.s3t, body: dict.problem.s3b },
    { index: "04", title: dict.problem.s4t, body: dict.problem.s4b },
    { index: "05", title: dict.problem.s5t, body: dict.problem.s5b },
  ];

  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="problem-title"
    >
      <div className="container-smz">
        <SectionHeader title={<span id="problem-title">{dict.problem.title}</span>} />

        <div aria-hidden className="mt-10 flex flex-wrap items-center justify-center gap-4 font-display text-xl text-mist-300">
          {[dict.problem.chain1, dict.problem.chain2, dict.problem.chain3, dict.problem.chain4].map(
            (item, index) => (
              <span key={item} className="flex items-center gap-4">
                {index > 0 ? <span className="text-violet-500">→</span> : null}
                <span>{item}</span>
              </span>
            ),
          )}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.index} as="li" delay={index * 90} className="h-full">
              <article className="surface-card group relative h-full overflow-hidden p-7 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <p className="step-index transition-colors duration-500 group-hover:text-violet-500/40">
                  {step.index}
                </p>
                <h3 className="mt-5 text-lg text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-14 text-center font-display text-2xl text-mist-100 sm:text-3xl">
            {dict.problem.transition}
          </p>
        </Reveal>
      </div>
    </section>
  );
}