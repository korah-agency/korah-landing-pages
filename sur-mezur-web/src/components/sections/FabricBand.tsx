import Image from "next/image";

import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n";

/**
 * A band of material between the comparison table and the proof section.
 *
 * The page runs a long way on white cards; this is the one place it stops
 * arguing and just shows the thing the whole product is about.
 */
export function FabricBand({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative" aria-label={dict.diff.title}>
      <div className="relative h-[14rem] w-full overflow-hidden sm:h-[18rem] lg:h-[22rem]">
        <Image
          src={photos.fabricStrip}
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
        />
      </div>
    </section>
  );
}
