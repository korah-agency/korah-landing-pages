/**
 * Event names, kept in a module with no `"use client"` directive.
 *
 * Server components need to read these to configure their CTAs. Anything
 * exported from a client module becomes a client *reference* on the server, so
 * the constants have to live outside `analytics.ts` to stay real values on both
 * sides of the boundary.
 */
export const AnalyticsEvent = {
  ctaExploreSolutions: "cta_explore_solutions",
  ctaPartner: "cta_partner",
  ctaContact: "cta_contact",
  productView: "product_view",
  languageSwitch: "language_switch",
  scrollDepth: "scroll_depth",
  formSubmit: "form_submit",
} as const;

export type AnalyticsEventName = (typeof AnalyticsEvent)[keyof typeof AnalyticsEvent];

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;
