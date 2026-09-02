import en from "./dictionaries/en";
import fr from "./dictionaries/fr";
import { defaultLocale, isLocale, type Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, Dictionary> = {
  en: en as unknown as Dictionary,
  fr,
};

/**
 * Dictionaries are plain modules — no async loading, no runtime fetch.
 * Next statically inlines whichever locale a route renders.
 */
export function getDictionary(locale: string | undefined): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

export type { Dictionary };
export * from "./config";
