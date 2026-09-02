import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function NewWay({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="section-y relative overflow-hidden bg-[radial-gradient(90%_120%_at_20%_0%,#211240_0%,#0E0720_100%)]"
      aria-labelledby="newway-title"
    >
      <div className="container-smz flex flex-col items-center text-center">
        <Reveal as="p" className="eyebrow">
          {dict.newway.eyebrow}
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="newway-title"
            className="text-gradient-mist mt-6 max-w-3xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl"
          >
            {dict.newway.title}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {dict.newway.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}