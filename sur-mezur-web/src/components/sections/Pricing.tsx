import type { Dictionary } from "@/i18n";
import { localizePath, type Locale } from "@/i18n/config";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function Pricing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const plans = [
    {
      label: dict.pricing.plan1.label,
      name: dict.pricing.plan1.name,
      amount: dict.pricing.plan1.amount,
      unit: dict.pricing.plan1.unit,
      features: [dict.pricing.plan1.f1, dict.pricing.plan1.f2, dict.pricing.plan1.f3, dict.pricing.plan1.f4],
      cta: dict.pricing.plan1.cta,
      highlight: false,
    },
    {
      label: dict.pricing.plan2.label,
      name: dict.pricing.plan2.name,
      amount: dict.pricing.plan2.amount,
      unit: dict.pricing.plan2.unit,
      features: [dict.pricing.plan2.f1, dict.pricing.plan2.f2, dict.pricing.plan2.f3, dict.pricing.plan2.f4],
      cta: dict.pricing.plan2.cta,
      highlight: true,
    },
    {
      label: dict.pricing.plan3.label,
      name: dict.pricing.plan3.name,
      amount: dict.pricing.plan3.amount,
      unit: dict.pricing.plan3.unit,
      features: [dict.pricing.plan3.f1, dict.pricing.plan3.f2, dict.pricing.plan3.f3, dict.pricing.plan3.f4],
      cta: dict.pricing.plan3.cta,
      highlight: false,
    },
  ];

  return (
    <section className="section-y" id="early-access" aria-labelledby="pricing-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.pricing.eyebrow}
          title={<span id="pricing-title">{dict.pricing.title}</span>}
          subtitle={dict.pricing.sub}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 120}>
              <article
                className={
                  plan.highlight
                    ? "relative flex h-full flex-col gap-3 rounded-[1.25rem] border border-violet-500/45 bg-gradient-to-br from-violet-900/45 via-ink-850 to-ink-900 p-8"
                    : "surface-card flex h-full flex-col gap-3 p-8"
                }
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-500">
                  {plan.label}
                </span>
                <h3 className="text-3xl text-mist-50">{plan.name}</h3>
                <p className="font-display text-2xl text-mist-50">
                  {plan.amount} <small className="font-sans text-xs font-medium text-mist-500">{plan.unit}</small>
                </p>
                <ul className="mt-2 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[0.9375rem] text-mist-300">
                      <span className="mt-1 flex-none text-violet-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={localizePath(locale, "#final-cta")}
                  className={plan.highlight ? "btn btn-primary mt-6 w-full" : "btn btn-ghost mt-6 w-full"}
                >
                  {plan.cta}
                  <ArrowRight className="btn-arrow" width={14} height={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-[0.8125rem] text-mist-500">{dict.pricing.note}</p>
        </Reveal>
      </div>
    </section>
  );
}