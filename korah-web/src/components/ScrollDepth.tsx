"use client";

import { useEffect } from "react";

import { AnalyticsEvent, trackOnce } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100] as const;

/**
 * Scroll-depth tracking (spec §35).
 * Passive listener, rAF-throttled, and it unbinds itself once 100% is reached.
 */
export function ScrollDepth() {
  useEffect(() => {
    let ticking = false;
    let reached = 0;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));

      for (const milestone of MILESTONES) {
        if (percent >= milestone && reached < milestone) {
          reached = milestone;
          trackOnce(`depth:${milestone}`, AnalyticsEvent.scrollDepth, { depth: milestone });
        }
      }

      if (reached >= 100) window.removeEventListener("scroll", onScroll);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
