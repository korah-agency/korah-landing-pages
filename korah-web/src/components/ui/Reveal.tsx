"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Direction of the entrance. `up` is the default. */
  from?: "up" | "left" | "right" | "scale";
  /** Stagger, in milliseconds. */
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Fraction of the element that must be visible before it animates in. */
  threshold?: number;
};

/**
 * Scroll-reveal wrapper.
 *
 * The animation itself lives in CSS (`[data-reveal]` in globals.css) — this
 * component only flips `data-shown`, so there is no per-frame JS and the whole
 * thing collapses to a no-op under `prefers-reduced-motion`.
 *
 * A single shared IntersectionObserver serves every instance on the page.
 */

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;

  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.shown = "true";
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  return observer;
}

export function Reveal({
  children,
  from = "up",
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const io = getObserver();
    if (!io) {
      node.dataset.shown = "true";
      return;
    }

    // Already in view on mount (above the fold): show without waiting.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      node.dataset.shown = "true";
      return;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={from}
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
