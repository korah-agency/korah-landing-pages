import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { localizePath, type Locale } from "@/i18n/config";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/visuals/HeroVisual";

function Glow({ className, delay }: { className: string; delay?: string }) {
  return (
    <div
      aria-hidden
      className={`animate-drift absolute rounded-full blur-[110px] ${className}`}
      style={{
        // The helper never carried a fill, so the hero rendered flat.
        background: "radial-gradient(closest-side, #7014E8, rgba(112,20,232,0))",
        ...(delay ? { animationDelay: delay } : {}),
      }}
    />
  );
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-[calc(var(--nav-h)+3rem)]" aria-labelledby="hero-title">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#F4EEFF_0%,#FBF9FF_45%,#FFFFFF_100%)]" />
        <Glow className="-left-[12%] -top-[18%] h-[44rem] w-[44rem] opacity-[0.17]" />
        <Glow className="-right-[10%] top-[14%] h-[40rem] w-[40rem] opacity-[0.14]" delay="-9s" />
        <Glow className="bottom-[-26%] left-[36%] h-[34rem] w-[34rem] opacity-[0.10]" delay="-4s" />
        <div className="absolute top-1/2 left-[-14%] h-[40rem] w-[40rem] -translate-y-1/2 rounded-full border border-violet-600/20 opacity-70">
          <div className="absolute inset-[20%] rounded-full border border-dashed border-violet-600/25" />
        </div>
        <div
          className="absolute inset-0 opacity-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(8,4,77,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(8,4,77,0.07) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(78% 62% at 50% 40%, #000 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(78% 62% at 50% 40%, #000 0%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-smz relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
        <div className="max-w-[46rem]">
          <Reveal as="p" className="eyebrow">
            {dict.hero.eyebrow}
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="hero-title"
              className="mt-7 font-display text-[clamp(2.75rem,8.2vw,6.25rem)] font-medium leading-[0.96] tracking-[-0.04em]"
            >
              <span className="block text-gradient-mist">{dict.hero.h1a}</span>
              <span className="block text-gradient">{dict.hero.h1b}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
              {dict.hero.sub}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href={siteConfig.appUrl} className="btn btn-primary">
                {dict.hero.ctaPrimary}
                <ArrowRight className="btn-arrow" width={16} height={16} />
              </a>
              <a href={localizePath(locale, "#how-it-works")} className="btn btn-ghost">
                {dict.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
              {[dict.hero.proof1, dict.hero.proof2, dict.hero.proof3, dict.hero.proof4].map(
                (item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-mist-400"
                  >
                    {index > 0 ? (
                      <span aria-hidden className="hidden h-3 w-px bg-violet-950/15 sm:block" />
                    ) : null}
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-violet-500/80 sm:hidden"
                    />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
        </div>

        <Reveal from="scale" delay={220} className="mx-auto w-full max-w-[560px] justify-self-center">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}