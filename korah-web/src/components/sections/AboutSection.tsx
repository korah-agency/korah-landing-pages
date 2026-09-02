import { founders, values } from "@/data/founders";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { FounderCard } from "@/components/FounderCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Section 22 — the team and the values (spec §22). */
export function AboutSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      id="about"
      className="section-y relative scroll-mt-24 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="container-korah">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <SectionHeader
            eyebrow={dict.about.eyebrow}
            title={<span id="about-title">{dict.about.title}</span>}
          />
          <Reveal delay={140}>
            <p className="max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg lg:pt-4">
              {dict.about.body}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} as="li" delay={index * 110}>
              <FounderCard founder={founder} locale={locale} index={index} />
            </Reveal>
          ))}
        </ul>

        {/* --- values ------------------------------------------------- */}
        <div className="mt-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-mist-500">
              {dict.about.valuesTitle}
            </p>
          </Reveal>
          <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-4">
            {values.map((value, index) => (
              <Reveal key={value.en} as="li" delay={index * 70}>
                <span className="font-display text-2xl text-mist-300 transition-colors duration-400 hover:text-white sm:text-3xl">
                  {value[locale]}
                </span>
                {index < values.length - 1 ? (
                  <span aria-hidden className="ml-3 text-korah-pink/50">
                    ·
                  </span>
                ) : null}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
