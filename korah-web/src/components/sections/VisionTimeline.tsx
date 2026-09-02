import type { Dictionary } from "@/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section 18 — Cameroon → CEMAC → Sub-Saharan Africa → The world (spec §18).
 *
 * Horizontal on desktop so the expansion reads as movement outward; vertical on
 * mobile. Each stage grows slightly in weight, which does the storytelling
 * without a single extra word.
 */
export function VisionTimeline({ dict }: { dict: Dictionary }) {
  const steps = dict.vision.steps;

  return (
    <section
      id="vision"
      className="section-y relative scroll-mt-24 overflow-hidden"
      aria-labelledby="vision-title"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[28rem] -translate-y-1/2 opacity-[0.16] blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #72489D 30%, #F280B0 70%, transparent 100%)",
        }}
      />

      <div className="container-korah relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Reveal as="p" className="eyebrow">
              {dict.vision.eyebrow}
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="vision-title"
                className="text-gradient-mist mt-7 text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.04]"
              >
                {dict.vision.title}
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5 lg:pt-4">
            {dict.vision.body.map((paragraph, index) => (
              <Reveal key={index} delay={140 + index * 90}>
                <p
                  className={cn(
                    "text-base leading-relaxed sm:text-lg",
                    index === dict.vision.body.length - 1
                      ? "font-display text-xl text-white sm:text-2xl"
                      : "text-mist-400",
                  )}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* --- the ladder --------------------------------------------- */}
        <ol className="relative mt-20 grid gap-10 md:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-6">
          {/* connecting rail (desktop) */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-korah-purple via-korah-pink to-korah-pink/0 lg:block"
          />

          {steps.map((step, index) => (
            <Reveal key={step.name} as="li" delay={index * 130} className="relative">
              <span
                aria-hidden
                className={cn(
                  "block h-[15px] w-[15px] rounded-full border bg-ink-950",
                  index === steps.length - 1
                    ? "border-korah-pink shadow-[0_0_0_6px_rgba(242,128,176,0.12)]"
                    : "border-korah-purple-bright/70",
                )}
              >
                <span
                  className={cn(
                    "mx-auto mt-[3.5px] block h-1.5 w-1.5 rounded-full",
                    index === steps.length - 1 ? "bg-korah-pink" : "bg-korah-purple-bright",
                  )}
                />
              </span>

              <div className="mt-7 flex items-baseline gap-3">
                <h3
                  className={cn(
                    "font-display leading-tight text-white",
                    index === steps.length - 1
                      ? "text-gradient-korah text-2xl sm:text-3xl"
                      : "text-2xl sm:text-[1.75rem]",
                  )}
                >
                  {step.name}
                </h3>
                {step.year ? (
                  <span className="font-display text-sm tabular-nums text-mist-500">
                    {step.year}
                  </span>
                ) : null}
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist-400">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
