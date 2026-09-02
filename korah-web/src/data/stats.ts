/**
 * Numeric configuration for the "We don't just dream. We build." section.
 * Labels live in the dictionaries (`stats.labels`) and are matched by index.
 *
 * Only verified numbers belong here (spec §14).
 */
export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Zero-pad the integer part to this width — "05+", "01". */
  pad?: number;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 5, suffix: "+", pad: 2 },
  { value: 100, suffix: "%" },
  { value: 1, prefix: "~", pad: 2 },
  { value: 1.5, suffix: "M", decimals: 1 },
  { value: 1, pad: 2 },
];
