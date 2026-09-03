/**
 * Hero visual — the Sur-MeZur composition:
 * two photos → AI analysis → measurements, inside a smartphone,
 * with a measured body silhouette behind it.
 * Pure inline SVG, decorative.
 */
export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 560 640"
      className="h-auto w-full"
      role="img"
      aria-label="Two photos are analyzed by AI and turned into a set of body measurements"
    >
      <defs>
        <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4502AD" />
          <stop offset="100%" stopColor="#7014E8" />
        </linearGradient>
        <radialGradient id="hv-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#5D06CC" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#5D06CC" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="280" cy="300" r="270" fill="url(#hv-glow)" />

      {/* body silhouette */}
      <g stroke="url(#hv-stroke)" strokeWidth="1.6" fill="none" opacity="0.85">
        <circle cx="280" cy="120" r="34" />
        <path d="M236 176c10-8 24-12 44-12s34 4 44 12c14 10 19 27 19 46v34h-20l-7 92h-72l-7-92h-20v-34c0-19 5-36 19-46Z" />
        <path d="M280 154v108" strokeDasharray="2 8" strokeWidth="1" />
      </g>

      {/* measurement bands */}
      <g opacity="0.9">
        <path d="M230 208h100" stroke="#7014E8" strokeWidth="1.4" strokeDasharray="4 5" className="animate-pulse-soft" />
        <path d="M230 252h100" stroke="#5D06CC" strokeWidth="1.4" strokeDasharray="4 5" className="animate-pulse-soft" style={{ animationDelay: "0.5s" }} />
        <path d="M230 296h100" stroke="#5D06CC" strokeWidth="1.4" strokeDasharray="4 5" className="animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </g>

      {/* connecting line photo → phone */}
      <path d="M120 470h86" stroke="url(#hv-stroke)" strokeWidth="1.2" strokeDasharray="3 6" opacity="0.75" />

      {/* two input photos */}
      <g stroke="url(#hv-stroke)" strokeWidth="1.2">
        <rect x="52" y="452" width="64" height="88" rx="10" fill="rgba(8,4,77,0.035)" />
        <circle cx="84" cy="484" r="9" />
        <path d="M62 532l16-20 14 16 12-12 16 20" strokeOpacity="0.6" />
        <rect x="66" y="468" width="36" height="5" rx="2.5" opacity="0.5" />
      </g>

      {/* phone frame */}
      <g>
        <rect x="300" y="210" width="196" height="400" rx="30" stroke="url(#hv-stroke)" strokeWidth="1.6" fill="rgba(8,4,77,0.03)" />
        <rect x="312" y="224" width="172" height="372" rx="18" fill="url(#hv-glow)" opacity="0.25" />
        <rect x="362" y="228" width="72" height="6" rx="3" opacity="0.55" />

        {/* AI landmark overlay */}
        <g stroke="#7014E8" strokeWidth="1" opacity="0.9">
          <circle cx="398" cy="222" r="4" />
          <circle cx="352" cy="300" r="3" />
          <circle cx="444" cy="300" r="3" />
          <circle cx="398" cy="366" r="3" />
          <circle cx="398" cy="420" r="3" />
          <path d="M352 300h92M347 300l-12 6M447 300l12 6M352 300l-16 22M444 300l16 22" strokeDasharray="2 4" opacity="0.7" />
        </g>

        {/* measurement readout */}
        <g fontFamily="Jost, sans-serif">
          <text x="360" y="330" fill="#7014E8" fontSize="11" letterSpacing="3">
            CHEST
          </text>
          <text x="360" y="384" fill="#7014E8" fontSize="11" letterSpacing="3">
            WAIST
          </text>
          <text x="360" y="438" fill="#7014E8" fontSize="11" letterSpacing="3">
            HIPS
          </text>
          <text x="452" y="330" fill="#08044D" fontSize="14" textAnchor="end">
            96
          </text>
          <text x="452" y="384" fill="#08044D" fontSize="14" textAnchor="end">
            82
          </text>
          <text x="452" y="438" fill="#08044D" fontSize="14" textAnchor="end">
            98
          </text>
          <path d="M352 344h100M352 398h100M352 452h100" stroke="rgba(8,4,77,0.16)" strokeWidth="1" />
        </g>
      </g>

      {/* measurement chips */}
      <g fontFamily="Jost, sans-serif">
        <rect x="120" y="268" width="120" height="30" rx="15" fill="rgba(93,6,204,0.09)" stroke="#5D06CC" strokeWidth="1" />
        <text x="148" y="288" fill="#08044D" fontSize="11">
          SHOULDER 46cm
        </text>
        <rect x="120" y="318" width="120" height="30" rx="15" fill="rgba(93,6,204,0.07)" stroke="#5D06CC" strokeWidth="1" />
        <text x="150" y="338" fill="#08044D" fontSize="11">
          INSEAM 79cm
        </text>
      </g>
    </svg>
  );
}