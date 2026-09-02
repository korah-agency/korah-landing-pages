import { cn } from "@/lib/utils";

type PartnerCardProps = {
  title: string;
  body: string;
  tags: string[];
  index: number;
  className?: string;
};

export function PartnerCard({ title, body, tags, index, className }: PartnerCardProps) {
  return (
    <article
      className={cn(
        "surface-card group relative flex h-full flex-col overflow-hidden p-9 transition-[transform,border-color] duration-500 ease-[var(--ease-korah)] hover:-translate-y-1 hover:border-white/18",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-9 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-korah-purple to-korah-pink transition-transform duration-700 group-hover:scale-x-100"
      />

      <p className="font-display text-xs tabular-nums tracking-[0.2em] text-mist-500">
        {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="mt-8 font-display text-2xl leading-tight text-white">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-400">{body}</p>

      <ul className="mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] text-mist-300 transition-colors duration-400 group-hover:border-korah-pink/30"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
