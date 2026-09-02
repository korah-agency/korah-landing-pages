import Link from "next/link";

import { ArrowRight, InfinityMark } from "@/components/ui/Icons";
import { getDictionary } from "@/i18n";
import { defaultLocale, localizedPath } from "@/i18n/config";

/**
 * Rendered for any unmatched path under a locale.
 * It cannot read params, so it falls back to the default locale copy.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <section className="grain relative flex min-h-[80svh] items-center overflow-hidden pt-[var(--nav-h)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_-20%,#150E25_0%,#07040D_70%)]" />
        <InfinityMark className="absolute left-1/2 top-1/2 h-auto w-[46rem] -translate-x-1/2 -translate-y-1/2 text-korah-purple opacity-[0.07]" />
      </div>

      <div className="container-korah relative text-center">
        <p className="text-gradient-korah font-display text-[clamp(4rem,14vw,10rem)] leading-none">
          404
        </p>
        <h1 className="text-gradient-mist mx-auto mt-6 max-w-2xl text-3xl leading-tight sm:text-4xl">
          {dict.notFound.title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-mist-400">
          {dict.notFound.body}
        </p>
        <div className="mt-10 flex justify-center">
          <Link href={localizedPath(defaultLocale, "/")} className="btn btn-primary">
            {dict.notFound.cta}
            <ArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
