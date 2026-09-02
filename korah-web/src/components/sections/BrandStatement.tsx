import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section 23 — the emotional beat (spec §23).
 * Full-bleed, near-black, and typographically enormous. Nothing competes.
 */
export function BrandStatement({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="grain relative overflow-hidden border-y border-white/[0.06] bg-ink-950 py-28 sm:py-36 lg:py-48"
      aria-labelledby="brand-title"
    >
      {/* two drifting glows echoing the two loops of the mark */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -left-[10%] top-[-20%] h-[38rem] w-[38rem] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #72489D, transparent)" }}
      />
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-[8%] bottom-[-25%] h-[34rem] w-[34rem] rounded-full opacity-25 blur-[120px]"
        style={{
          animationDelay: "-8s",
          background: "radial-gradient(closest-side, #F280B0, transparent)",
        }}
      />

      <div className="container-korah relative text-center">
        <Reveal from="scale">
          <h2
            id="brand-title"
            className="text-gradient-korah mx-auto max-w-6xl font-display text-[clamp(2.5rem,10vw,8rem)] font-medium uppercase leading-[0.92] tracking-[-0.045em]"
          >
            {dict.brand.statement}
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-12 max-w-2xl text-base leading-relaxed text-mist-300 sm:text-lg">
            {dict.brand.body}
          </p>
        </Reveal>

        <Reveal delay={280}>
          <ul className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-10">
            {dict.brand.lines.map((line, index) => (
              <li key={line} className="flex items-center gap-10">
                {index > 0 ? (
                  <span aria-hidden className="hidden h-8 w-px bg-white/10 sm:block" />
                ) : null}
                <span className="font-display text-xl text-white sm:text-2xl">{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
