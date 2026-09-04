import { siteConfig } from "@/data/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  text: string;
  cta: string;
};

/**
 * Lightweight inline call-to-action placed between sections.
 * Uses the same container-smz + section-y spacing as every other section,
 * with body text and a primary button — no extra card, no border, no wrapper.
 */
export function InlineCta({ text, cta }: Props) {
  return (
    <Reveal>
      <div className="container-smz flex flex-col items-center py-12 text-center sm:py-16">
        <p className="max-w-xl text-[0.9375rem] leading-relaxed text-mist-400 sm:text-lg">
          {text}
        </p>
        <a
          href={siteConfig.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-6"
        >
          {cta}
          <ArrowRight className="btn-arrow" width={16} height={16} />
        </a>
      </div>
    </Reveal>
  );
}