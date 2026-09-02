import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  /**
   * `horizontal` — mark + wordmark side by side (navbar).
   * `lockup`     — stacked mark over wordmark (footer, hero, OG).
   * `mark`       — the infinity mark alone (compact, favicon-like usage).
   */
  variant?: "horizontal" | "lockup" | "mark";
  /** Rendered height of the mark in pixels; everything else scales from it. */
  size?: number;
  className?: string;
  priority?: boolean;
};

const MARK = { src: "/brand/korah-mark.png", w: 715, h: 333 };
const WORD = { src: "/brand/korah-wordmark.png", w: 863, h: 296 };
const LOCKUP = { src: "/brand/korah-lockup.png", w: 863, h: 584 };

export function Logo({ variant = "horizontal", size = 26, className, priority }: LogoProps) {
  if (variant === "lockup") {
    const width = Math.round((size * LOCKUP.w) / LOCKUP.h);
    return (
      <Image
        src={LOCKUP.src}
        alt="KORAH"
        width={width}
        height={size}
        priority={priority}
        className={cn("h-auto w-auto select-none", className)}
        style={{ height: size, width }}
      />
    );
  }

  if (variant === "mark") {
    const width = Math.round((size * MARK.w) / MARK.h);
    return (
      <Image
        src={MARK.src}
        alt="KORAH"
        width={width}
        height={size}
        priority={priority}
        className={cn("select-none", className)}
        style={{ height: size, width }}
      />
    );
  }

  const markWidth = Math.round((size * MARK.w) / MARK.h);
  const wordHeight = Math.round(size * 0.82);
  const wordWidth = Math.round((wordHeight * WORD.w) / WORD.h);

  return (
    <span className={cn("inline-flex items-center gap-[0.5em]", className)}>
      <Image
        src={MARK.src}
        alt=""
        aria-hidden
        width={markWidth}
        height={size}
        priority={priority}
        className="select-none"
        style={{ height: size, width: markWidth }}
      />
      <Image
        src={WORD.src}
        alt="KORAH"
        width={wordWidth}
        height={wordHeight}
        priority={priority}
        className="select-none"
        style={{ height: wordHeight, width: wordWidth }}
      />
    </span>
  );
}
