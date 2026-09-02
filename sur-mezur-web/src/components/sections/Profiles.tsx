import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Profiles({ dict }: { dict: Dictionary }) {
  const benefits = [
    { num: dict.profiles.b1n, title: dict.profiles.b1t, body: dict.profiles.b1b },
    { num: dict.profiles.b2n, title: dict.profiles.b2t, body: dict.profiles.b2b },
    { num: dict.profiles.b3n, title: dict.profiles.b3t, body: dict.profiles.b3b },
    { num: dict.profiles.b4n, title: dict.profiles.b4t, body: dict.profiles.b4b },
  ];

  return (
    <section className="section-y" aria-labelledby="profiles-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.profiles.eyebrow}
          title={<span id="profiles-title">{dict.profiles.title}</span>}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.num} delay={index * 100}>
              <article className="surface-card group flex h-full flex-col gap-3 p-7 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-500">
                  {benefit.num}
                </span>
                <h3 className="text-xl text-white">{benefit.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mist-400">{benefit.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}