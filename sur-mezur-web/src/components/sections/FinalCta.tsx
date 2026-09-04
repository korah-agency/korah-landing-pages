import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { localizePath, type Locale } from "@/i18n/config";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      className="grain section-y relative overflow-hidden bg-[radial-gradient(90%_120%_at_50%_100%,#F4EEFF_0%,#FBF9FF_55%,#FFFFFF_100%)]"
      id="final-cta"
      aria-labelledby="final-title"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -top-[30%] left-[8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,#4502AD,rgba(93,6,204,0))] opacity-[0.16] blur-[110px]" />
        <div
          className="animate-drift absolute -bottom-[34%] right-[4%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,#5D06CC,rgba(93,6,204,0))] opacity-[0.13] blur-[110px]"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="container-smz relative flex flex-col items-center text-center">
        <Reveal>
          <h2
            id="final-title"
            className="text-gradient-mist max-w-3xl text-[clamp(2.25rem,5.4vw,4.25rem)] leading-[1.03]"
          >
            {dict.final.title}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {dict.final.body}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={siteConfig.appUrl} className="btn btn-primary">
              {dict.final.ctaPrimary}
              <ArrowRight className="btn-arrow" width={16} height={16} />
            </a>
            <a href={localizePath(locale, "#how-it-works")} className="btn btn-ghost">
              {dict.final.ctaSecondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}