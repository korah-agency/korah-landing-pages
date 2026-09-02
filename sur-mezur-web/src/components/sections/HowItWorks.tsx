import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

function CaptureIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-12 w-12">
      <rect x="14" y="8" width="36" height="48" rx="8" stroke="#B474FF" strokeWidth="2" />
      <circle cx="32" cy="26" r="6" stroke="#B474FF" strokeWidth="2" />
      <path d="M22 44c2-6 6-9 10-9s8 3 10 9" stroke="#B474FF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AnalyzeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-12 w-12">
      <circle cx="32" cy="32" r="18" stroke="#9A4DFF" strokeWidth="2" />
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="#9A4DFF"
        strokeWidth="2"
        strokeDasharray="3 8"
        className="animate-pulse-soft"
      />
      <path d="M22 22l8 8M40 40l8 8M22 42l8-8" stroke="#6B20E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MeasureIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden className="h-12 w-12">
      <rect x="10" y="14" width="44" height="36" rx="6" stroke="#B474FF" strokeWidth="2" />
      <path d="M18 30h10M18 38h22M36 30h10" stroke="#6B20E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const steps = [
    { index: "01", title: dict.how.s1t, body: dict.how.s1b, icon: <CaptureIcon /> },
    { index: "02", title: dict.how.s2t, body: dict.how.s2b, icon: <AnalyzeIcon /> },
    { index: "03", title: dict.how.s3t, body: dict.how.s3b, icon: <MeasureIcon /> },
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
              <article className="surface-card group relative flex h-full flex-col gap-4 overflow-hidden p-8 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                <span aria-hidden className="step-index absolute right-6 top-6 text-violet-500/25">
                  {step.index}
                </span>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-violet-600/30 bg-violet-900/20">
                  {step.icon}
                </div>
                <h3 className="text-2xl text-white">{step.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-mist-400">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}