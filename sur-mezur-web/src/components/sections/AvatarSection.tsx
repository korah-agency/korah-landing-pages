import Image from "next/image";

import { photos } from "@/data/photos";
import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";

export function AvatarSection({ dict }: { dict: Dictionary }) {
  const chips = [dict.avatar.c1, dict.avatar.c2, dict.avatar.c3, dict.avatar.c4, dict.avatar.c5];

  return (
    <section
      className="section-y relative overflow-hidden bg-[radial-gradient(80%_100%_at_50%_0%,#F4EEFF_0%,#FFFFFF_100%)]"
      aria-labelledby="avatar-title"
    >
      <div className="container-smz flex flex-col items-center text-center">
        <Reveal as="p" className="eyebrow">
          {dict.avatar.eyebrow}
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="avatar-title"
            className="text-gradient-mist mt-6 max-w-3xl text-4xl leading-[1.06] sm:text-5xl lg:text-6xl"
          >
            {dict.avatar.title}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist-400 sm:text-lg">
            {dict.avatar.body}
          </p>
        </Reveal>

        {/*
          The section promises "see yourself in 3D"; it now shows the render
          rather than a diagram of one. Cut out, so it sits straight on the page.
        */}
        <Reveal delay={240} className="w-full">
          <div className="animate-bob relative mx-auto mt-10 h-[26rem] w-full max-w-[22rem] sm:h-[32rem] sm:max-w-[26rem]">
            <Image
              src={photos.avatar3d}
              alt="A 3D body model covered in a fine violet wireframe, with measurement rings at chest, waist and hips."
              fill
              sizes="(min-width: 640px) 26rem, 90vw"
              className="object-contain"
            />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-violet-950/16 px-4 py-2 text-[0.8125rem] font-medium text-mist-200"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}