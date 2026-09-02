import type { Dictionary } from "@/i18n";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

const YES = "✓";
const NO = "—";

export function Differentiation({ dict }: { dict: Dictionary }) {
  const rows = [
    { label: dict.diff.r1, trad: YES, app: NO, smz: NO, strong: false },
    { label: dict.diff.r2, trad: NO, app: YES, smz: YES, strong: false },
    { label: dict.diff.r3, trad: NO, app: dict.diff.sometimes, smz: YES, strong: false },
    { label: dict.diff.r4, trad: NO, app: dict.diff.varies, smz: YES, strong: false },
    { label: dict.diff.r5, trad: NO, app: dict.diff.varies, smz: YES, strong: false },
    { label: dict.diff.r6, trad: NO, app: dict.diff.varies, smz: YES, strong: true },
    { label: dict.diff.r7, trad: NO, app: dict.diff.varies, smz: YES, strong: true },
  ];

  return (
    <section
      className="section-y relative border-t border-white/[0.06] bg-ink-900"
      aria-labelledby="diff-title"
    >
      <div className="container-smz">
        <SectionHeader
          align="center"
          eyebrow={dict.diff.eyebrow}
          title={<span id="diff-title">{dict.diff.title}</span>}
        />

        <Reveal delay={120}>
          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-ink-800/60">
            <table className="w-full min-w-[42rem] border-collapse">
              <thead>
                <tr className="border-b border-white/12">
                  <th scope="col" className="px-6 py-5 text-left font-display text-sm font-medium text-mist-200" />
                  <th scope="col" className="px-6 py-5 text-left font-display text-sm font-medium text-mist-300">
                    {dict.diff.c1}
                  </th>
                  <th scope="col" className="px-6 py-5 text-left font-display text-sm font-medium text-mist-300">
                    {dict.diff.c2}
                  </th>
                  <th scope="col" className="px-6 py-5 text-left font-display text-base font-medium text-violet-400">
                    {dict.diff.c3}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-white/[0.06] last:border-none hover:bg-violet-900/10">
                    <td className="px-6 py-4 text-[0.9375rem] text-mist-200">{row.label}</td>
                    <td className={`px-6 py-4 text-[0.9375rem] ${row.trad === YES ? "text-violet-400" : "text-mist-500"}`}>
                      {row.trad}
                    </td>
                    <td className={`px-6 py-4 text-[0.9375rem] ${row.app === "—" ? "text-mist-500" : row.app === "✓" ? "text-violet-400" : "text-mist-400 text-xs"}`}>
                      {row.app}
                    </td>
                    <td className={`px-6 py-4 text-[0.9375rem] font-semibold ${row.strong ? "text-violet-300" : "text-violet-400"}`}>
                      {row.smz}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}