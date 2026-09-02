import type { Founder } from "@/data/founders";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/**
 * Founder card — monogram rather than a photograph.
 *
 * V1 deliberately ships without portraits (spec §22): three inconsistent
 * snapshots would undo the rest of the page. Drop a square image into
 * /public/team and render it in place of the monogram when the portraits exist.
 */
export function FounderCard({
  founder,
  locale,
  index,
  className,
}: {
  founder: Founder;
  locale: Locale;
  index: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "surface-card group relative flex h-full flex-col overflow-hidden p-8 transition-[transform,border-color] duration-500 ease-[var(--ease-korah)] hover:-translate-y-1 hover:border-white/18",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-korah-purple/25 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div
        aria-hidden
        className="relative grid h-20 w-20 place-items-center rounded-full border border-white/10"
        style={{
          background: `conic-gradient(from ${index * 120}deg, rgba(114,72,157,0.35), rgba(242,128,176,0.35), rgba(114,72,157,0.35))`,
        }}
      >
        <span className="font-display text-2xl tracking-tight text-white">{founder.initials}</span>
      </div>

      <h3 className="mt-8 font-display text-2xl leading-tight text-white">{founder.name}</h3>
      <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-korah-pink">
        {founder.role[locale]}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-mist-400">{founder.focus[locale]}</p>
    </article>
  );
}
