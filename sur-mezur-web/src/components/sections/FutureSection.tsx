import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function RightArrow() {
  return <span className="text-violet-500">→</span>;
}

export function FutureSection({ dict }: { dict: Dictionary }) {
  const flow = [
    dict.future.s1n,
    dict.future.s2n,
    dict.future.s3n,
    dict.future.s4n,
    dict.future.s5n,
    dict.future.s6n,
  ];
  const ecosystem = [dict.eco.s1, dict.eco.s2, dict.eco.s3, dict.eco.s4, dict.eco.s5, dict.eco.s6];

  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="future-title"
    >
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.future.eyebrow}
          title={<span id="future-title">{dict.future.title}</span>}
          subtitle={dict.future.sub}
        />

        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            {flow.map((step, index) => (
              <span key={step} className="flex items-center gap-4">
                {index > 0 ? <RightArrow /> : null}
                <span
                  className={
                    index === flow.length - 1
                      ? "rounded-2xl bg-gradient-to-r from-violet-800 to-violet-600 px-6 py-4 font-display text-mist-50"
                      : "rounded-2xl border border-white/14 bg-violet-900/15 px-6 py-4 font-display text-mist-200"
                  }
                >
                  {step}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/95 to-ink-900 p-10 text-center">
            <h3 className="text-2xl text-white">{dict.eco.title}</h3>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {ecosystem.map((item, index) => (
                <li
                  key={item}
                  className="rounded-full border border-violet-600/30 bg-violet-800/25 px-4.5 py-2.5 text-sm text-violet-100"
                  style={{ opacity: 0.6 + Math.min(index, 4) * 0.1 }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.9375rem] text-mist-400">{dict.eco.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}