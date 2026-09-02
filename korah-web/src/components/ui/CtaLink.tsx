"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { track } from "@/lib/analytics";
import type { AnalyticsEventName, AnalyticsPayload } from "@/lib/analytics-events";
import { cn } from "@/lib/utils";
import { ArrowRight } from "./Icons";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  /** Analytics event fired on click — see spec §35. */
  event?: AnalyticsEventName;
  eventData?: AnalyticsPayload;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
};

/**
 * The single CTA primitive used across the site (spec §26).
 * Every destination is a real route, and every click is measurable.
 */
export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "md",
  event,
  eventData,
  withArrow = true,
  className,
  external,
}: CtaLinkProps) {
  const classes = cn(
    "btn",
    variant === "primary" ? "btn-primary" : "btn-ghost",
    size === "sm" && "btn-sm",
    className,
  );

  const onClick = () => {
    if (event) track(event, { href, ...eventData });
  };

  const content = (
    <>
      {children}
      {withArrow ? <ArrowRight className="btn-arrow" /> : null}
    </>
  );

  if (external) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer noopener">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
