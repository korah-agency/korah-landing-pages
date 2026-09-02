import Image from "next/image";

const LOGO = { src: "/brand/Sur-MeZur.png", w: 1024, h: 1536 };

type LogoProps = {
  /** Rendered height in pixels; width scales from the source ratio. */
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function Logo({ size = 40, className, priority, alt = "Sur-MeZur" }: LogoProps) {
  const width = Math.round((size * LOGO.w) / LOGO.h);
  return (
    <Image
      src={LOGO.src}
      alt={alt}
      width={width}
      height={size}
      priority={priority}
      className={className}
      style={{ height: size, width }}
    />
  );
}