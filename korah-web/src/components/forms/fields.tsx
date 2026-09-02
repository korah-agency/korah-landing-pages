"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type FieldErrors = Record<string, string>;

/** Maps the server's error codes onto the localized strings. */
export function errorText(
  code: string | undefined,
  messages: { required: string; invalidEmail: string; tooShort: string },
): string | undefined {
  if (!code) return undefined;
  if (code === "invalid_email") return messages.invalidEmail;
  if (code.endsWith("_too_short") || code === "message_too_short") return messages.tooShort;
  return messages.required;
}

export function Field({
  id,
  label,
  optional,
  optionalLabel,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  optionalLabel?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="field-label">
        {label}
        {optional ? (
          <span className="ml-2 font-normal normal-case tracking-normal text-mist-500">
            ({optionalLabel})
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-[#f4737a]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Hidden anti-spam input. Positioned off-screen, never announced. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
      <label htmlFor="website">Website</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function FormStatus({
  state,
  success,
  error,
}: {
  state: "success" | "error";
  success: { title: string; body: string };
  error: { title: string; body: string };
}) {
  const content = state === "success" ? success : error;
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-[var(--radius-card)] border p-6",
        state === "success"
          ? "border-korah-pink/35 bg-korah-pink/[0.07]"
          : "border-[#f4737a]/35 bg-[#f4737a]/[0.07]",
      )}
    >
      <p className="font-display text-xl text-white">{content.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-mist-300">{content.body}</p>
    </div>
  );
}
