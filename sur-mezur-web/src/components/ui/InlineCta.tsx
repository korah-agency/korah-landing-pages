import { siteConfig } from "@/data/site";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  text: string;
  cta: string;
};

/**
 * Lightweight inline call-to-action banner placed between sections.
 * Non-aggressive: subtle gradient background, one line of text, one button.
 */
export function InlineCta({ text, cta }: Props) {
  return (
    <Reveal>
      <div className="mx-auto my-8 max-w-xl rounded-2xl border border-violet-200/50 bg-violet-50/40 px-8 py-10 text-center backdrop-blur-sm sm:my-12">
        <p className="text-base font-medium text-mist-400 sm:text-lg">{text}</p>
        <a
          href={siteConfig.appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm mx-auto mt-5"
        >
          {cta}
          <ArrowRight className="btn-arrow" width={14} height={14} />
        </a>
      </div>
    </Reveal>
  );
}