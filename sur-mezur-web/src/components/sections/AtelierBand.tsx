import Image from "next/image";

import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n";

/**
 * The atelier, full width, immediately under the hero.
 *
 * The hero explains the product with a diagram; this puts it somewhere real
 * before the visitor has to take anything on trust. It is the only photograph
 * loaded eagerly.
 */
export function AtelierBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative" aria-label={dict.hero.eyebrow}>
      <div className="relative h-[18rem] w-full overflow-hidden sm:h-[24rem] lg:h-[30rem]">
        <Image
          src={photos.heroAtelier}
          alt="A tailor's cutting table: folded violet and navy fabric, a paper pattern, and a smartphone lying face down."
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          // The subject — table, fabric, pattern, phone — sits low in the frame.
          className="object-cover object-[center_72%]"
        />
        {/* Blend the top edge into the hero and the bottom into the next section. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
        />
      </div>
    </section>
  );
}
