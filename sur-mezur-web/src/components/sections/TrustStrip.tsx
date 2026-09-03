import type { Dictionary } from "@/i18n";

export function TrustStrip({ dict }: { dict: Dictionary }) {
  const items = [dict.trust.t1, dict.trust.t2, dict.trust.t3, dict.trust.t4, dict.trust.t5];
  const doubled = [...items, ...items];

  return (
    <section
      aria-label="Sur-MeZur highlights"
      className="overflow-hidden border-y border-violet-950/[0.10] bg-ink-900 py-5"
    >
      <div className="flex w-max animate-[smz-marquee_42s_linear_infinite] items-center gap-10">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-sm uppercase tracking-[0.16em] text-mist-400">
              {item}
            </span>
            <span aria-hidden className="text-violet-500">
              ·
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}