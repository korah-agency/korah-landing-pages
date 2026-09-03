import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n";
import { Photo } from "@/components/ui/Photo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

export function ForClients({ dict }: { dict: Dictionary }) {
  const flow = [dict.clients.f1, dict.clients.f2, dict.clients.f3, dict.clients.f4, dict.clients.f5, dict.clients.f6];
  const benefits = [dict.clients.b1, dict.clients.b2, dict.clients.b3, dict.clients.b4];

  return (
    <section className="section-y" id="for-clients" aria-labelledby="clients-title">
      <div className="container-smz grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] lg:gap-16">
        <div>
          <SectionHeader
            eyebrow={dict.clients.eyebrow}
            title={<span id="clients-title">{dict.clients.title}</span>}
          />

          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap items-center gap-3 font-display text-lg">
              {flow.map((step, index) => (
                <span key={step} className="flex items-center gap-3">
                  {index > 0 ? <span className="text-violet-500">→</span> : null}
                  <span className="rounded-full border border-violet-600/25 bg-violet-100/60 px-4 py-2.5 text-mist-100">
                    {step}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal as="li" key={benefit} delay={index * 80}>
                <span className="flex items-center gap-3 text-[0.9375rem] text-mist-300">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-violet-100 text-violet-700">
                    <Check width={14} height={14} />
                  </span>
                  {benefit}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal from="right" delay={140} className="group">
          <Photo
            src={photos.forClients}
            alt="A woman at home propping her phone against a stack of books to photograph herself against a plain wall."
            ratio="4/5"
            sizes="(min-width: 1024px) 34vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
