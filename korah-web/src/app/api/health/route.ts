import { NextResponse } from "next/server";

import { products } from "@/data/products";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Liveness probe + a quick view of what the backend has configured. */
export function GET() {
  return NextResponse.json({
    ok: true,
    service: "korah-web",
    time: new Date().toISOString(),
    products: products.length,
    notifications: Boolean(process.env.RESEND_API_KEY && process.env.KORAH_NOTIFY_EMAIL),
  });
}
