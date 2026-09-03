import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

export function Privacy({ dict }: { dict: Dictionary }) {
  const points = [
    dict.privacy.i1,
    dict.privacy.i2,
    dict.privacy.i3,
    dict.privacy.i4,
    dict.privacy.i5,
    dict.privacy.i6,
  ];

  return (
    <section
      className="section-y relative border-t border-violet-950/[0.08] bg-ink-900"
      id="privacy"
      aria-labelledby="privacy-title"
    >
      <div className="container-smz grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow={dict.privacy.eyebrow}
            title={<span id="privacy-title">{dict.privacy.title}</span>}
            subtitle={dict.privacy.sub}
          />
          <Reveal delay={240}>
            <span className="mt-5 inline-block rounded-full border border-violet-600/35 bg-violet-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-violet-800">
              {dict.privacy.badge}
            </span>
          </Reveal>
        </div>

        <ul className="flex flex-col gap-4">
          {points.map((point, index) => (
            <Reveal as="li" key={point} delay={index * 60}>
              <span className="flex items-center gap-4 rounded-2xl border border-violet-950/12 bg-ink-800/60 px-5 py-4 text-[0.9375rem] text-mist-200">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-violet-100 text-violet-700">
                  <Check width={13} height={13} />
                </span>
                {point}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}