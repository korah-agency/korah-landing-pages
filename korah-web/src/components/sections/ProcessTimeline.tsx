"use client";

import { useState } from "react";

import type { Dictionary } from "@/i18n";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section 6 — the six-step process (spec §6).
 *
 * Desktop: an interactive horizontal timeline driving a detail panel.
 * Mobile: the same data as a plain vertical timeline, everything visible.
 */
export function ProcessTimeline({ dict }: { dict: Dictionary }) {
  const steps = dict.process.steps;
  const [active, setActive] = useState(0);
  const current = steps[active]!;
  const progress = ((active + 0.5) / steps.length) * 100;

  return (
    <section
      id="process"
      className="section-y relative scroll-mt-24 border-t border-white/[0.06]"
      aria-labelledby="process-title"
    >
      <div className="container-korah">
        <SectionHeader
          eyebrow={dict.process.eyebrow}
          title={<span id="process-title">{dict.process.title}</span>}
          subtitle={dict.process.subtitle}
        />

        {/* ================= desktop ================= */}
        <div className="mt-16 hidden lg:block">
          {/* --- rail --- */}
          <div
            className="relative"
            role="tablist"
            aria-label={dict.process.title}
            onMouseLeave={() => undefined}
          >
            <span aria-hidden className="absolute left-0 right-0 top-[13px] h-px bg-white/10" />
            <span
              aria-hidden
              className="absolute left-0 top-[13px] h-px bg-gradient-to-r from-korah-purple to-korah-pink transition-[width] duration-700 ease-[var(--ease-korah)]"
              style={{ width: `${progress}%` }}
            />

            <ol className="relative grid grid-cols-6">
              {steps.map((step, index) => {
                const isActive = index === active;
                const isPast = index < active;
                return (
                  <li key={step.index} className="flex flex-col items-start">
                    <button
                      type="button"
                      role="tab"
                      id={`process-tab-${index}`}
                      aria-selected={isActive}
                      aria-controls="process-panel"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      onClick={() => setActive(index)}
                      className="group flex w-full flex-col items-start gap-4 pr-6 text-left"
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "grid h-[27px] w-[27px] place-items-center rounded-full border transition-all duration-500 ease-[var(--ease-korah)]",
                          isActive
                            ? "border-korah-pink bg-korah-pink/15 shadow-[0_0_0_6px_rgba(242,128,176,0.10)]"
                            : isPast
                              ? "border-korah-purple-bright/70 bg-ink-950"
                              : "border-white/15 bg-ink-950 group-hover:border-white/35",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-colors duration-400",
                            isActive
                              ? "bg-korah-pink"
                              : isPast
                                ? "bg-korah-purple-bright"
                                : "bg-white/25",
                          )}
                        />
                      </span>

                      <span className="flex flex-col gap-1">
                        <span className="font-display text-xs tabular-nums text-mist-500">
                          {step.index}
                        </span>
                        <span
                          className={cn(
                            "font-display text-xl transition-colors duration-400",
                            isActive ? "text-white" : "text-mist-400 group-hover:text-mist-200",
                          )}
                        >
                          {step.name}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* --- panel --- */}
          <div
            id="process-panel"
            role="tabpanel"
            aria-labelledby={`process-tab-${active}`}
            className="surface-card relative mt-12 grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-12 overflow-hidden p-12"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-korah-purple/25 blur-3xl transition-opacity duration-700"
            />

            <div className="relative">
              <p
                key={`n-${active}`}
                className="text-gradient-korah font-display text-[7rem] leading-none"
              >
                {current.index}
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">{current.name}</h3>
            </div>

            <div key={`c-${active}`} className="relative flex flex-col justify-center gap-5">
              <p className="text-xl leading-snug text-white sm:text-2xl">{current.body}</p>
              <p className="max-w-xl text-base leading-relaxed text-mist-400">{current.detail}</p>
            </div>
          </div>
        </div>

        {/* ================= mobile ================= */}
        <ol className="relative mt-14 flex flex-col gap-10 pl-9 lg:hidden">
          <span
            aria-hidden
            className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-korah-purple via-korah-pink to-transparent"
          />
          {steps.map((step, index) => (
            <Reveal key={step.index} as="li" delay={index * 60} from="left">
              <span
                aria-hidden
                className="absolute -ml-9 mt-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-korah-pink/50 bg-ink-950"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-korah-pink" />
              </span>
              <p className="font-display text-xs tabular-nums text-mist-500">{step.index}</p>
              <h3 className="mt-1 font-display text-2xl text-white">{step.name}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-300">{step.body}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist-500">{step.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
