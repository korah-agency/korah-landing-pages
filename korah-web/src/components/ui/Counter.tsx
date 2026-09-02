"use client";

import { useEffect, useRef } from "react";

import type { Stat } from "@/data/stats";
import { pad as padNumber } from "@/lib/utils";

const DURATION = 1500;

function format(value: number, stat: Stat): string {
  const decimals = stat.decimals ?? 0;
  const body =
    decimals > 0
      ? value.toFixed(decimals)
      : stat.pad
        ? padNumber(value, stat.pad)
        : String(Math.round(value));
  return `${stat.prefix ?? ""}${body}${stat.suffix ?? ""}`;
}

/**
 * Counts up once, when the number scrolls into view (spec §14).
 *
 * The final value is what React renders, so the real number is in the HTML for
 * search engines, for screen readers and when JavaScript never arrives. The
 * animation then drives `textContent` directly — no state, no re-render per
 * frame — and is skipped entirely under `prefers-reduced-motion`.
 */
export function Counter({ stat, className }: { stat: Stat; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const final = format(stat.value, stat);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    /*
     * Counting from zero only reads as motion when there is a distance to
     * cover. For "01" or "~01" every intermediate frame shows "00", which looks
     * like a bug rather than an animation.
     */
    const worthCounting = stat.value >= 3 || (stat.decimals ?? 0) > 0;

    if (reduced || !worthCounting || !("IntersectionObserver" in window)) return;

    let frame = 0;
    const target = format(stat.value, stat);

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          // easeOutExpo — fast, then settles
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          node.textContent = t === 1 ? target : format(stat.value * eased, stat);
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        node.textContent = format(0, stat);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = target;
    };
  }, [stat]);

  return (
    <span ref={ref} className={className}>
      {final}
    </span>
  );
}
