import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function WhySurMeZur({ dict }: { dict: Dictionary }) {
  const pillars = [
    { index: "01", title: dict.why.p1t, body: dict.why.p1b },
    { index: "02", title: dict.why.p2t, body: dict.why.p2b },
    { index: "03", title: dict.why.p3t, body: dict.why.p3b },
  ];

  return (
    <section className="section-y" id="why-surmezur" aria-labelledby="why-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.why.eyebrow}
          title={<span id="why-title">{dict.why.title}</span>}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.index} delay={index * 120}>
              <article className="surface-card group flex h-full flex-col gap-4 p-8 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <p className="font-display text-3xl leading-none text-violet-500/50">{pillar.index}</p>
                <h3 className="text-2xl text-white">{pillar.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mist-400">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}