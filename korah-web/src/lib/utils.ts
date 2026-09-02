export type ClassValue = string | number | false | null | undefined;

/** Tiny class-name joiner — no dependency needed for what we do here. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

/** "05", "01" — zero-padded display numbers used across the design. */
export function pad(value: number, width = 2): string {
  return String(Math.trunc(value)).padStart(width, "0");
}
