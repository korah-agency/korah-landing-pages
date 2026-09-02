"use client";

import type { AnalyticsEventName, AnalyticsPayload } from "./analytics-events";

/**
 * Analytics contract — spec §35.
 *
 * Events are pushed to any vendor present on the page (dataLayer / gtag /
 * Plausible / Umami) AND mirrored to the KORAH backend so the funnel can be
 * measured without depending on a third-party script being installed.
 * Everything is fire-and-forget and never blocks the UI.
 */

export {
  AnalyticsEvent,
  type AnalyticsEventName,
  type AnalyticsPayload,
} from "./analytics-events";

type WindowWithVendors = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  plausible?: (event: string, options?: { props?: AnalyticsPayload }) => void;
  umami?: { track: (event: string, data?: AnalyticsPayload) => void };
};

const ENDPOINT = "/api/analytics";

/** Session-scoped de-duplication for one-shot events like scroll depth. */
const fired = new Set<string>();

export function track(event: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  const w = window as WindowWithVendors;
  const data: AnalyticsPayload = { ...payload, path: window.location.pathname };

  try {
    w.dataLayer?.push({ event, ...data });
    w.gtag?.("event", event, data);
    w.plausible?.(event, { props: data });
    w.umami?.track(event, data);
  } catch {
    /* a broken vendor script must never break the page */
  }

  const body = JSON.stringify({ event, payload: data, ts: Date.now() });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }));
      return;
    }
  } catch {
    /* fall through to fetch */
  }

  void fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

/** Emits an event at most once per page session. */
export function trackOnce(
  key: string,
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (fired.has(key)) return;
  fired.add(key);
  track(event, payload);
}
