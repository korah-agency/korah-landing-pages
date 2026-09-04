import Link from "next/link";

import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { localizePath, localizedPath, type Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";

type FooterProps = { locale: Locale; dict: Dictionary };

const productLinks: Array<{ key: keyof Dictionary["footer"]; hash: string }> = [
  { key: "l1", hash: "#how-it-works" },
  { key: "l2", hash: "#for-tailors" },
  { key: "l3", hash: "#for-clients" },
  { key: "l4", hash: "#technology" },
  { key: "l5", hash: "#try-free" },
  { key: "l6", hash: "#faq" },
];

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-violet-950/[0.09] bg-ink-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full opacity-[0.2] blur-[80px]"
        style={{
          background:
            "radial-gradient(closest-side, #4502AD 0%, rgba(93,6,204,0.45) 45%, transparent 100%)",
        }}
      />

      <div className="container-smz relative pb-12 pt-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div className="flex flex-col gap-6">
            <Link href={localizedPath(locale, "/")} aria-label="Sur-MeZur" className="w-fit">
              <Logo size={64} />
            </Link>
            <p className="font-display text-xl text-mist-50">{dict.footer.tagline}</p>
            <p className="max-w-sm text-sm leading-relaxed text-mist-400">{dict.footer.blurb}</p>
          </div>

          <nav aria-labelledby="footer-product" className="flex flex-col gap-4">
            <h2
              id="footer-product"
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500"
            >
              {dict.footer.product}
            </h2>
            <ul className="flex flex-col gap-3">
              {productLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href={localizePath(locale, item.hash)}
                    className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                  >
                    {dict.footer[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company" className="flex flex-col gap-4">
            <h2
              id="footer-company"
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500"
            >
              {dict.footer.company}
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={localizePath(locale, "#why-surmezur")}
                  className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                >
                  {dict.footer.c1}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.parent.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                >
                  {dict.footer.c2}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-support" className="flex flex-col gap-4">
            <h2
              id="footer-support"
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500"
            >
              {dict.footer.support}
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                >
                  {dict.footer.s1}
                </a>
              </li>
              <li>
                <a
                  href={localizePath(locale, "#privacy")}
                  className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                >
                  {dict.footer.s2}
                </a>
              </li>
              <li>
                <a
                  href={localizePath(locale, "#privacy")}
                  className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                >
                  {dict.footer.s3}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">
              {dict.footer.social}
            </h2>
            <ul className="flex flex-col gap-3">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-mist-300 transition-colors duration-300 hover:text-violet-600"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-smz my-10 opacity-60" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-mist-500">
            © {year} Sur-MeZur. {dict.footer.rights}
          </p>
          <p className="text-xs text-mist-500">
            {dict.footer.built1} {dict.footer.built2} ·{" "}
            {siteConfig.location.city}, {siteConfig.location.country[locale]}
          </p>
        </div>
      </div>
    </footer>
  );
}