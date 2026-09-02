"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { AnalyticsEvent, track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  label: string;
  className?: string;
  /** Called after a language link is activated — used to close the drawer. */
  onNavigate?: () => void;
};

export function LanguageSwitcher({ locale, label, className, onNavigate }: Props) {
  const pathname = usePathname() || "/";

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-0.5",
        className,
      )}
      role="group"
      aria-label={label}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code)}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              if (!active) track(AnalyticsEvent.languageSwitch, { from: locale, to: code });
              onNavigate?.();
            }}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
              active
                ? "bg-white/10 text-white"
                : "text-mist-400 hover:text-white",
            )}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
