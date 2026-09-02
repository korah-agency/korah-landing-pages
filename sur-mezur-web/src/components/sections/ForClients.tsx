import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

export function ForClients({ dict }: { dict: Dictionary }) {
  const flow = [dict.clients.f1, dict.clients.f2, dict.clients.f3, dict.clients.f4, dict.clients.f5, dict.clients.f6];
  const benefits = [dict.clients.b1, dict.clients.b2, dict.clients.b3, dict.clients.b4];

  return (
    <section className="section-y" id="for-clients" aria-labelledby="clients-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.clients.eyebrow}
          title={<span id="clients-title">{dict.clients.title}</span>}
        />

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4 font-display text-lg">
            {flow.map((step, index) => (
              <span key={step} className="flex items-center gap-4">
                {index > 0 ? <span className="text-violet-500">→</span> : null}
                <span className="rounded-full border border-violet-600/30 bg-violet-900/20 px-5 py-3 text-mist-100">
                  {step}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit} delay={index * 80}>
              <span className="flex items-center gap-3 text-[0.9375rem] text-mist-300">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-violet-700/30 text-violet-400">
                  <Check width={14} height={14} />
                </span>
                {benefit}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}