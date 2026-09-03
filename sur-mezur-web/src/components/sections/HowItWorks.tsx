import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const steps = [
    {
      index: "01",
      title: dict.how.s1t,
      body: dict.how.s1b,
      photo: photos.stepFront,
      alt: "A tailor photographs a client standing straight against a plain white wall.",
    },
    {
      index: "02",
      title: dict.how.s2t,
      body: dict.how.s2b,
      photo: photos.stepProfile,
      alt: "The same client, turned in profile against the same wall, being photographed again.",
    },
    {
      index: "03",
      title: dict.how.s3t,
      body: dict.how.s3b,
      photo: photos.stepResult,
      alt: "A hand holding a phone showing the resulting list of body measurements.",
    },
  ];

  return (
    <section className="section-y" id="how-it-works" aria-labelledby="how-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.how.eyebrow}
          title={<span id="how-title">{dict.how.title}</span>}
          subtitle={dict.how.sub}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.index} delay={index * 120}>
              <article className="surface-card group flex h-full flex-col overflow-hidden transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <Photo
                  src={step.photo}
                  alt={step.alt}
                  ratio="4/5"
                  rounded={false}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  overlay={
                    <span
                      aria-hidden
                      className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 font-display text-lg text-violet-700 backdrop-blur-sm"
                    >
                      {step.index}
                    </span>
                  }
                />
                <div className="flex flex-col gap-3 p-7">
                  <h3 className="text-2xl text-mist-50">{step.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-mist-400">{step.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}