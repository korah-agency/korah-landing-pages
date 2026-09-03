import heroAtelier from "../../public/photos/hero-atelier.webp";
import problemTape from "../../public/photos/problem-tape.webp";
import stepFront from "../../public/photos/step-front.webp";
import stepProfile from "../../public/photos/step-profile.webp";
import stepResult from "../../public/photos/step-result.webp";
import forTailors from "../../public/photos/for-tailors.webp";
import forClients from "../../public/photos/for-clients.webp";
import fabricStrip from "../../public/photos/fabric-strip.webp";
import avatar3d from "../../public/photos/avatar-3d.webp";

/**
 * Photography, imported statically so Next knows each file's intrinsic size
 * (no layout shift) and can generate a blur placeholder for the large ones.
 *
 * Sources live in `photos-src/` and are processed by
 * `node scripts/optimize-photos.mjs`.
 */
export const photos = {
  heroAtelier,
  problemTape,
  stepFront,
  stepProfile,
  stepResult,
  forTailors,
  forClients,
  fabricStrip,
  avatar3d,
} as const;
