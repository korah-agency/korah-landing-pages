import { z } from "zod";

/** Shared field rules so /contact and /partners validate identically. */
const name = z.string().trim().min(2, "name_too_short").max(120, "name_too_long");
const email = z.string().trim().toLowerCase().email("invalid_email").max(180);
const message = z.string().trim().min(20, "message_too_short").max(4000, "message_too_long");
const optionalText = z.string().trim().max(180).optional().or(z.literal(""));

/**
 * A hidden field no human ever fills in. It is accepted by the schema on
 * purpose: the route checks it after parsing and answers 200 without storing
 * anything, so a bot gets no signal that it was caught.
 */
const honeypot = z.string().max(400).optional();

export const contactTopics = ["general", "partnership", "investment", "product", "press"] as const;
export const partnerTypes = ["technology", "strategic", "institutional"] as const;

export const contactSchema = z.object({
  name,
  email,
  company: optionalText,
  topic: z.enum(contactTopics).default("general"),
  subject: optionalText,
  message,
  consent: z.literal(true, { message: "consent_required" }),
  locale: z.enum(["en", "fr"]).default("en"),
  /** Where the form was submitted from — useful for funnel analysis. */
  source: optionalText,
  website: honeypot,
});

export const partnerSchema = z.object({
  name,
  email,
  company: z.string().trim().min(2, "company_required").max(180),
  role: optionalText,
  partnerType: z.enum(partnerTypes).default("strategic"),
  message,
  consent: z.literal(true, { message: "consent_required" }),
  locale: z.enum(["en", "fr"]).default("en"),
  source: optionalText,
  website: honeypot,
});

export const analyticsSchema = z.object({
  event: z.string().trim().min(1).max(64),
  payload: z.record(z.string().max(64), z.union([z.string().max(400), z.number(), z.boolean()])).default({}),
  ts: z.number().int().positive().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type PartnerInput = z.infer<typeof partnerSchema>;
export type AnalyticsInput = z.infer<typeof analyticsSchema>;

/** Flattens a ZodError into `{ field: errorCode }` for the client. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
