import Link from "next/link";

import { products } from "@/data/products";
import { footerNav, legalNav, siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n";
import { localizedPath, type Locale } from "@/i18n/config";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/Icons";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink-950">
      {/* brand glow anchored bottom-centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-64 left-1/2 h-[32rem] w-[64rem] -translate-x-1/2 rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, #72489D 0%, rgba(242,128,176,0.5) 45%, transparent 100%)",
        }}
      />

      <div className="container-korah relative pb-12 pt-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
          {/* --- Brand ------------------------------------------------- */}
          <div className="flex flex-col gap-6">
            <Link href={localizedPath(locale, "/")} aria-label="KORAH" className="w-fit">
              <Logo variant="lockup" size={62} />
            </Link>
            <p className="font-display text-xl text-white">{dict.footer.tagline}</p>
            <p className="max-w-sm text-sm leading-relaxed text-mist-400">{dict.footer.blurb}</p>
            <p className="text-xs uppercase tracking-[0.16em] text-mist-500">
              {dict.footer.builtIn}
            </p>
          </div>

          {/* --- Company ----------------------------------------------- */}
          <nav aria-labelledby="footer-company" className="flex flex-col gap-4">
            <h2
              id="footer-company"
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500"
            >
              {dict.footer.company}
            </h2>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.key}>
                  <Link
                    href={localizedPath(locale, item.href)}
                    className="text-sm text-mist-300 transition-colors duration-300 hover:text-korah-pink"
                  >
                    {dict.nav[item.key as keyof typeof dict.nav] as string}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Products ---------------------------------------------- */}
          <nav aria-labelledby="footer-products" className="flex flex-col gap-4">
            <h2
              id="footer-products"
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500"
            >
              {dict.footer.products}
            </h2>
            <ul className="flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={localizedPath(locale, `/solutions/${product.slug}`)}
                    className="text-sm text-mist-300 transition-colors duration-300 hover:text-korah-pink"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* --- Connect ----------------------------------------------- */}
          <div className="flex flex-col gap-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-mist-500">
              {dict.footer.connect}
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-mist-300 transition-colors duration-300 hover:text-korah-pink"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-mist-400">
              {siteConfig.location.city} · {siteConfig.location.country[locale]}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-korah-pink/50 hover:text-white"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-korah my-10 opacity-60" />

        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-mist-500">
            © {year} {siteConfig.legalName}. {dict.footer.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizedPath(locale, item.href)}
                  className="text-xs text-mist-500 transition-colors duration-300 hover:text-mist-200"
                >
                  {dict.footer[item.key as keyof typeof dict.footer] as string}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
