import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section 5 — the chain from problem to scale (spec §5).
 *
 * A single vertical rail with a node per stage; each stage steps further to the
 * right so the eye follows a diagonal — the same diagonal that cuts through the
 * KORAH mark.
 */
export function Approach({ dict }: { dict: Dictionary }) {
  const chain = dict.approach.chain;

  return (
    <section className="section-y relative overflow-hidden" aria-labelledby="approach-title">
      <div className="container-korah">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-24">
          {/* --- statement -------------------------------------------- */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal as="p" className="eyebrow">
              {dict.approach.eyebrow}
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="approach-title"
                className="text-gradient-mist mt-7 text-[clamp(2rem,4vw,3.5rem)] leading-[1.05]"
              >
                {dict.approach.title}
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist-400 sm:text-lg">
                {dict.approach.body}
              </p>
            </Reveal>
          </div>

          {/* --- chain ------------------------------------------------ */}
          <ol className="relative flex flex-col gap-0 pl-8 [--chain-step:0.35rem] sm:pl-10 sm:[--chain-step:1.1rem]">
            {/* rail */}
            <span
              aria-hidden
              className="absolute bottom-6 left-[3px] top-6 w-px bg-gradient-to-b from-korah-purple via-korah-pink to-transparent opacity-70 sm:left-[5px]"
            />

            {chain.map((step, index) => {
              const last = index === chain.length - 1;
              return (
                <Reveal key={step} as="li" delay={index * 70} from="left">
                  <div
                    className="group relative flex items-center py-4"
                    style={{ paddingLeft: `calc(var(--chain-step) * ${index})` }}
                  >
                    {/* node */}
                    <span
                      aria-hidden
                      className="absolute -left-8 top-1/2 grid h-2 w-2 -translate-y-1/2 place-items-center rounded-full sm:-left-10"
                    >
                      <span
                        className={
                          last
                            ? "h-2.5 w-2.5 rounded-full bg-korah-pink shadow-[0_0_0_5px_rgba(242,128,176,0.18)]"
                            : "h-2 w-2 rounded-full bg-korah-purple-bright/80 transition-all duration-500 group-hover:bg-korah-pink group-hover:shadow-[0_0_0_5px_rgba(242,128,176,0.15)]"
                        }
                      />
                    </span>

                    <span className="font-display text-xs tabular-nums text-mist-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={
                        last
                          ? "text-gradient-korah ml-5 font-display text-2xl uppercase tracking-[0.02em] sm:text-3xl"
                          : "ml-5 font-display text-2xl uppercase tracking-[0.02em] text-mist-200 transition-colors duration-400 group-hover:text-white sm:text-3xl"
                      }
                    >
                      {step}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
