import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

type Group = { label: string; items: string[]; tone: string };

export function Measurements({ dict }: { dict: Dictionary }) {
  const groups: Group[] = [
    {
      label: dict.measures.g1,
      tone: "#B474FF",
      items: [dict.measures.u1, dict.measures.u2, dict.measures.u3, dict.measures.u4, dict.measures.u5],
    },
    {
      label: dict.measures.g2,
      tone: "#9A4DFF",
      items: [dict.measures.m1, dict.measures.m2, dict.measures.m3, dict.measures.m4],
    },
    {
      label: dict.measures.g3,
      tone: "#6B20E8",
      items: [dict.measures.l1, dict.measures.l2, dict.measures.l3, dict.measures.l4],
    },
  ];

  return (
    <section className="section-y" aria-labelledby="measures-title">
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.measures.eyebrow}
          title={<span id="measures-title">{dict.measures.title}</span>}
          subtitle={dict.measures.sub}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.label} delay={groupIndex * 120}>
              <article className="surface-card h-full p-8">
                <p className="font-display text-xl text-white">{group.label}</p>
                <ul className="mt-5 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.9375rem] text-mist-300">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full"
                        style={{ background: group.tone, boxShadow: `0 0 0 3px ${group.tone}22` }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-mist-500">
            {dict.measures.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}