/**
 * 3D avatar stage — orbiting rings around a floating body mesh.
 * Decorative; the body glows with the brand violet.
 */
export function AvatarStage() {
  return (
    <div className="relative grid h-[24rem] place-items-center sm:h-[28rem]" aria-hidden>
      <div className="pointer-events-none absolute h-[24rem] w-[24rem] animate-orbit rounded-full border border-violet-600/30 sm:h-[30rem] sm:w-[30rem]" />
      <div
        className="pointer-events-none absolute h-[34rem] w-[34rem] animate-orbit rounded-full border border-violet-600/25"
        style={{ animationDirection: "reverse", animationDuration: "66s" }}
      />

      <svg
        viewBox="0 0 220 440"
        className="animate-bob relative z-10 h-full max-h-[26rem]"
        style={{ filter: "drop-shadow(0 0 30px rgba(122,40,240,0.45))" }}
      >
        <defs>
          <linearGradient id="av-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5A18C8" />
            <stop offset="100%" stopColor="#B474FF" />
          </linearGradient>
        </defs>
        <circle cx="110" cy="64" r="26" fill="url(#av-body)" opacity="0.85" />
        <path
          d="M70 118c12-9 26-13 40-13s28 4 40 13c16 11 23 30 23 50v32h-17l-7 96H84l-7-96H60v-32c0-20 7-41 23-50Z"
          fill="url(#av-body)"
          opacity="0.6"
        />
        <path d="M63 172h94M59 214h102M63 258h94" stroke="#fff" strokeWidth="1.4" strokeDasharray="4 5" opacity="0.85" />
        <circle cx="110" cy="172" r="3.5" fill="#fff" className="animate-pulse-soft" />
        <circle cx="110" cy="214" r="3.5" fill="#fff" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        <circle cx="110" cy="258" r="3.5" fill="#fff" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <ellipse cx="110" cy="330" rx="30" ry="16" fill="url(#av-body)" opacity="0.5" />
      </svg>
    </div>
  );
}