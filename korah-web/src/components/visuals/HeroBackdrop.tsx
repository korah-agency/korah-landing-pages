/**
 * Hero backdrop — spec §2.
 *
 * Pure CSS + one inline SVG: no canvas, no WebGL, no animation library.
 * Everything animates on `transform` / `opacity` only, so it stays on the
 * compositor and costs nothing on the main thread. It is decorative and fully
 * hidden from assistive technology.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#150E25_0%,#0B0714_45%,#07040D_100%)]" />

      {/* drifting brand glows */}
      <div
        className="animate-drift absolute -left-[18%] top-[-22%] h-[46rem] w-[46rem] rounded-full opacity-[0.42] blur-[110px]"
        style={{
          background: "radial-gradient(closest-side, #72489D 0%, rgba(114,72,157,0) 100%)",
        }}
      />
      <div
        className="animate-drift absolute -right-[14%] top-[18%] h-[40rem] w-[40rem] rounded-full opacity-[0.34] blur-[120px]"
        style={{
          animationDelay: "-9s",
          background: "radial-gradient(closest-side, #F280B0 0%, rgba(242,128,176,0) 100%)",
        }}
      />
      <div
        className="animate-drift absolute bottom-[-30%] left-[38%] h-[34rem] w-[34rem] rounded-full opacity-[0.22] blur-[120px]"
        style={{
          animationDelay: "-4s",
          background: "radial-gradient(closest-side, #8F5CC4 0%, rgba(143,92,196,0) 100%)",
        }}
      />

      {/* orbital line-work — the logo's lemniscate, abstracted */}
      <div className="absolute left-1/2 top-1/2 h-[62rem] w-[62rem] -translate-x-1/2 -translate-y-[54%] opacity-[0.55] sm:h-[74rem] sm:w-[74rem]">
        <svg viewBox="0 0 800 800" className="animate-orbit h-full w-full">
          <defs>
            <linearGradient id="korah-orbit-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#72489D" stopOpacity="0" />
              <stop offset="45%" stopColor="#8F5CC4" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F280B0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="korah-orbit-b" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F280B0" stopOpacity="0" />
              <stop offset="50%" stopColor="#F280B0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#72489D" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle cx="400" cy="400" r="316" fill="none" stroke="url(#korah-orbit-a)" strokeWidth="1" />
          <circle cx="400" cy="400" r="248" fill="none" stroke="url(#korah-orbit-b)" strokeWidth="1" />
          <circle
            cx="400"
            cy="400"
            r="182"
            fill="none"
            stroke="url(#korah-orbit-a)"
            strokeWidth="1"
            strokeDasharray="2 14"
          />
        </svg>
      </div>

      {/* the mark itself, traced very faintly behind the headline */}
      <svg
        viewBox="0 0 120 60"
        className="absolute right-[-6%] top-[16%] hidden h-auto w-[46rem] opacity-[0.07] lg:block"
        fill="none"
      >
        <path
          d="M45 30c0 9.94-8.06 18-18 18S9 39.94 9 30s8.06-18 18-18c7.5 0 13.93 4.59 16.63 11.11"
          stroke="#8F5CC4"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M76.37 36.89C79.07 43.41 85.5 48 93 48c9.94 0 18-8.06 18-18s-8.06-18-18-18-18 8.06-18 18"
          stroke="#F280B0"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path d="M78 10 46 50" stroke="#F280B0" strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {/* fine engineering grid, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(189,176,210,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(189,176,210,0.10) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(78% 62% at 50% 40%, #000 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(78% 62% at 50% 40%, #000 0%, transparent 100%)",
        }}
      />

      {/* bottom fade into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
