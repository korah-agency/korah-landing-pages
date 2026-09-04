import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { BodyModel } from "@/components/visuals/BodyModel";

export function Dashboard({ dict }: { dict: Dictionary }) {
  const fields = [
    { k: dict.dash.name, v: "A. Kemegni" },
    { k: dict.dash.gender, v: "—" },
    { k: dict.dash.height, v: "178 cm" },
    { k: dict.dash.weight, v: "—" },
  ];

  const measurements = [
    { k: dict.dash.chest, v: "96 cm" },
    { k: dict.dash.waist, v: "82 cm" },
    { k: dict.dash.hip, v: "98 cm" },
    { k: dict.dash.shoulder, v: "46 cm" },
    { k: dict.dash.inseam, v: "79 cm" },
  ];

  return (
    <section
      className="section-y relative border-t border-violet-950/[0.08] bg-ink-900"
      aria-labelledby="dash-title"
    >
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.dash.eyebrow}
          title={<span id="dash-title">{dict.dash.title}</span>}
          subtitle={dict.dash.sub}
        />

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Reveal from="left" delay={80}>
            <div className="surface-card grid place-items-center p-6">
              <BodyModel />
            </div>
          </Reveal>

          <Reveal from="right" delay={160}>
            <div className="surface-card p-8">
              <p className="eyebrow">{dict.dash.cardLabel}</p>

              <div className="mt-5">
                {fields.map((field) => (
                  <div
                    key={field.k}
                    className="flex items-baseline justify-between border-b border-violet-950/[0.09] py-2.5"
                  >
                    <span className="text-sm text-mist-400">{field.k}</span>
                    <span className="font-display text-base text-mist-100">{field.v}</span>
                  </div>
                ))}
              </div>

              <div className="rule-smz my-3 opacity-50" />

              <div>
                {measurements.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-baseline justify-between border-b border-violet-950/[0.09] py-2.5"
                  >
                    <span className="text-sm text-mist-400">{m.k}</span>
                    <span className="font-display text-base text-mist-100">{m.v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-mist-500">
                <span>{dict.dash.updated}</span>
                <span>June 2026</span>
              </div>

              <a href={siteConfig.appUrl} className="btn btn-primary btn-sm mt-6 w-full">
                {dict.dash.cta}
                <ArrowRight className="btn-arrow" width={14} height={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}