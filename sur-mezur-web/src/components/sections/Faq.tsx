import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Faq({ dict }: { dict: Dictionary }) {
  const questions = Array.from({ length: 10 }, (_, index) => {
    const q = (dict.faq as Record<string, string>)[`q${index + 1}`];
    const a = (dict.faq as Record<string, string>)[`a${index + 1}`];
    return { q, a };
  });

  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="container-smz max-w-3xl">
        <SectionHeader
          align="center"
          eyebrow={dict.faq.eyebrow}
          title={<span id="faq-title">{dict.faq.title}</span>}
        />

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-3">
            {questions.map((item, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-800/55 transition-colors duration-400 hover:border-violet-600/40 open:border-violet-600/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-lg text-mist-100 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 flex-none place-items-center rounded-full border border-violet-600/40 text-violet-400 transition-transform duration-400 group-open:rotate-45 group-open:bg-violet-600 group-open:text-white"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-[46rem] px-6 pb-6 text-[0.9375rem] leading-relaxed text-mist-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}