import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/Reveal";

/**
 * The masthead used by every inner page: same rhythm, same backdrop treatment,
 * so /solutions, /about and /contact feel like one site rather than five.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden pb-16 pt-[calc(var(--nav-h)+5rem)] sm:pb-20 sm:pt-[calc(var(--nav-h)+7rem)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_-30%,#150E25_0%,#0B0714_50%,#07040D_100%)]" />
        <div
          className="animate-drift absolute -left-[12%] top-[-40%] h-[34rem] w-[34rem] rounded-full opacity-30 blur-[110px]"
          style={{ background: "radial-gradient(closest-side, #72489D, transparent)" }}
        />
        <div
          className="animate-drift absolute right-[-8%] top-[-20%] h-[28rem] w-[28rem] rounded-full opacity-25 blur-[110px]"
          style={{
            animationDelay: "-7s",
            background: "radial-gradient(closest-side, #F280B0, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(189,176,210,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(189,176,210,0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(70% 70% at 50% 20%, #000 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(70% 70% at 50% 20%, #000 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="container-korah relative">
        {eyebrow ? (
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
        ) : null}

        <Reveal delay={70}>
          <h1 className="text-gradient-mist mt-7 max-w-4xl font-display text-[clamp(2.5rem,6.4vw,5rem)] leading-[1.02] tracking-[-0.04em]">
            {title}
          </h1>
        </Reveal>

        {subtitle ? (
          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        ) : null}

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
