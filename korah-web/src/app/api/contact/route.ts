import { NextResponse } from "next/server";

import { sendNotification } from "@/lib/mailer";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { append } from "@/lib/storage";
import { contactSchema, fieldErrors } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMIT = 5;
const WINDOW_MS = 10 * 60_000;

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limit = rateLimit(`contact:${ip}`, LIMIT, WINDOW_MS);

  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", fields: fieldErrors(parsed.error) },
      { status: 422 },
    );
  }

  const { website, ...data } = parsed.data;

  // Honeypot tripped: answer as if everything went fine, store nothing.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const record = await append("contact", {
    ...data,
    ip,
    userAgent: request.headers.get("user-agent") ?? undefined,
  });

  const notification = await sendNotification({
    subject: `New contact — ${data.topic} — ${data.name}`,
    replyTo: data.email,
    text: [
      `Name:     ${data.name}`,
      `Email:    ${data.email}`,
      `Company:  ${data.company || "—"}`,
      `Topic:    ${data.topic}`,
      `Subject:  ${data.subject || "—"}`,
      `Locale:   ${data.locale}`,
      `Source:   ${data.source || "—"}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (!notification.sent) {
    console.warn(`[korah] contact ${record.id} stored, notification skipped: ${notification.reason}`);
  }

  return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
}
