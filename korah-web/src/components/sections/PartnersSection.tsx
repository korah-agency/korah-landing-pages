import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { AnalyticsEvent } from "@/lib/analytics-events";
import { PartnerCard } from "@/components/PartnerCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Section 21 — partners (spec §21). */
export function PartnersSection({
  locale,
  dict,
  withCta = true,
}: {
  locale: Locale;
  dict: Dictionary;
  withCta?: boolean;
}) {
  return (
    <section
      id="partners"
      className="section-y relative scroll-mt-24 border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="partners-title"
    >
      <div className="container-korah">
        <SectionHeader
          eyebrow={dict.partners.eyebrow}
          title={<span id="partners-title">{dict.partners.title}</span>}
          subtitle={dict.partners.intro}
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {dict.partners.profiles.map((profile, index) => (
            <Reveal key={profile.title} as="li" delay={index * 110}>
              <PartnerCard
                title={profile.title}
                body={profile.body}
                tags={profile.tags}
                index={index}
              />
            </Reveal>
          ))}
        </ul>

        {withCta ? (
          <Reveal delay={180}>
            <div className="mt-12">
              <CtaLink
                href={localizedPath(locale, "/partners")}
                event={AnalyticsEvent.ctaPartner}
                eventData={{ from: "partners_section" }}
              >
                {dict.cta.becomePartner}
              </CtaLink>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
