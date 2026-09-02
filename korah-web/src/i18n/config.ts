export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Maps a locale to the `lang` / `hreflang` value used in markup. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  fr: "fr",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Prefixes an app-relative path with the active locale. `/` → `/fr`. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/**
 * Swaps the locale segment of a pathname, preserving the rest.
 * `/en/solutions/siren` + `fr` → `/fr/solutions/siren`
 */
export function switchLocalePath(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  return `/${segments.join("/")}`;
}
