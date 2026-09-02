import "server-only";

/**
 * Outbound notification for new submissions.
 *
 * Uses the Resend HTTP API when RESEND_API_KEY is set — no SMTP dependency, no
 * extra package. When it is not configured the submission is still stored and
 * we simply log that no notification was sent, so a missing key can never make
 * the site lose a lead.
 */

const API_URL = "https://api.resend.com/emails";

export type MailResult = { sent: boolean; reason?: string };

export type MailInput = {
  subject: string;
  /** Pre-escaped plain text. Rendered inside a <pre> block. */
  text: string;
  replyTo?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendNotification({ subject, text, replyTo }: MailInput): Promise<MailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.KORAH_NOTIFY_EMAIL;
  const from = process.env.KORAH_FROM_EMAIL ?? "KORAH <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return { sent: false, reason: "not_configured" };
  }

  const html = `<div style="font-family:ui-sans-serif,system-ui,sans-serif;background:#07040d;color:#ddd4ea;padding:32px">
  <div style="max-width:640px;margin:0 auto;background:#0b0714;border:1px solid #2a1e45;border-radius:16px;padding:28px">
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#f280b0">KORAH</p>
    <h1 style="margin:0 0 20px;font-size:20px;color:#fff">${escapeHtml(subject)}</h1>
    <pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;line-height:1.7;margin:0;color:#bdb0d2">${escapeHtml(text)}</pre>
  </div>
</div>`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((address) => address.trim()),
        subject,
        html,
        text,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
      // Never let a slow provider hold the request handler open.
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return { sent: false, reason: `provider_${response.status}` };
    }
    return { sent: true };
  } catch (error) {
    return { sent: false, reason: error instanceof Error ? error.name : "unknown" };
  }
}
