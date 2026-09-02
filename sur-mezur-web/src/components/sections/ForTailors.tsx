import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ForTailors({ dict }: { dict: Dictionary }) {
  const benefits = [
    { index: "01", title: dict.tailors.b1t, body: dict.tailors.b1b },
    { index: "02", title: dict.tailors.b2t, body: dict.tailors.b2b },
    { index: "03", title: dict.tailors.b3t, body: dict.tailors.b3b },
    { index: "04", title: dict.tailors.b4t, body: dict.tailors.b4b },
  ];

  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      id="for-tailors"
      aria-labelledby="tailors-title"
    >
      <div className="container-smz">
        <SectionHeader
          eyebrow={dict.tailors.eyebrow}
          title={<span id="tailors-title">{dict.tailors.title}</span>}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.index} delay={index * 100}>
              <article className="surface-card group flex h-full flex-col gap-3 p-7 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <p className="font-display text-3xl leading-none text-violet-500/50">{benefit.index}</p>
                <h3 className="mt-3 text-xl text-white">{benefit.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mist-400">{benefit.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}