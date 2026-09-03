import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

function PrototypeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className="h-9 w-9">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="#7014E8" strokeWidth="2" />
      <path d="M12 16h8M16 12v8" stroke="#7014E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PipelineIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className="h-9 w-9">
      <circle cx="16" cy="16" r="11" stroke="#5D06CC" strokeWidth="2" />
      <circle cx="16" cy="16" r="11" stroke="#5D06CC" strokeWidth="2" strokeDasharray="2 6" />
      <path d="M16 10v6l4 3" stroke="#5D06CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BodyIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className="h-9 w-9">
      <circle cx="16" cy="16" r="12" stroke="#5D06CC" strokeWidth="2" />
      <circle cx="16" cy="16" r="6" fill="#5D06CC" opacity="0.4" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className="h-9 w-9">
      <path d="M6 22c6 0 8-8 14-8s8 6 12 6" stroke="#7014E8" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    </svg>
  );
}

export function Proof({ dict }: { dict: Dictionary }) {
  const items = [
    { title: dict.proof.i1t, body: dict.proof.i1b, icon: <PrototypeIcon /> },
    { title: dict.proof.i2t, body: dict.proof.i2b, icon: <PipelineIcon /> },
    { title: dict.proof.i3t, body: dict.proof.i3b, icon: <BodyIcon /> },
    { title: dict.proof.i4t, body: dict.proof.i4b, icon: <VisionIcon /> },
  ];

  return (
    <section className="section-y" aria-labelledby="proof-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.proof.eyebrow}
          title={<span id="proof-title">{dict.proof.title}</span>}
          subtitle={dict.proof.sub}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="surface-card group flex h-full flex-col gap-3 p-7 transition-[transform,border-color] duration-500 ease-[var(--ease-smz)] hover:-translate-y-1 hover:border-violet-500/35">
                {item.icon}
                <h3 className="mt-2 text-lg text-mist-50">{item.title}</h3>
                <p className="text-sm leading-relaxed text-mist-400">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-mist-500">
            {dict.proof.statement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}