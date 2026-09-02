import { NextResponse } from "next/server";

import { clientIp, rateLimit } from "@/lib/rate-limit";
import { append } from "@/lib/storage";
import { analyticsSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Generous: a normal session emits a handful of events per page. */
const LIMIT = 120;
const WINDOW_MS = 60_000;

/**
 * First-party event sink (spec §35). No cookie, no cross-site identifier —
 * we record the event, a coarse timestamp and the referring path only.
 */
export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(`analytics:${ip}`, LIMIT, WINDOW_MS).ok) {
    // Silently accept: analytics must never surface an error to a visitor.
    return new NextResponse(null, { status: 204 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const parsed = analyticsSchema.safeParse(payload);
  if (!parsed.success) {
    return new NextResponse(null, { status: 204 });
  }

  if (process.env.KORAH_ANALYTICS_DISABLED === "true") {
    return new NextResponse(null, { status: 204 });
  }

  try {
    await append("analytics", {
      event: parsed.data.event,
      payload: parsed.data.payload,
      referer: request.headers.get("referer") ?? undefined,
      country: request.headers.get("x-vercel-ip-country") ?? undefined,
    });
  } catch (error) {
    console.warn("[korah] analytics write failed", error);
  }

  return new NextResponse(null, { status: 204 });
}
