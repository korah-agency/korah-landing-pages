/**
 * Body model with measurement labels — the signature Sur-MeZur visual.
 * Circumferences are drawn directly on the silhouette.
 */
export function BodyModel() {
  return (
    <svg viewBox="0 0 340 560" className="h-auto w-full max-w-[380px]" role="img" aria-hidden>
      <defs>
        <linearGradient id="bm-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5A18C8" />
          <stop offset="100%" stopColor="#B474FF" />
        </linearGradient>
      </defs>

      <g stroke="url(#bm-stroke)" strokeWidth="2" fill="none">
        <circle cx="170" cy="84" r="32" />
        <path d="M104 150c14-10 38-15 66-15s52 5 66 15c20 14 28 40 28 66v44h-24l-9 122h-122l-9-122h-24v-44c0-26 8-52 28-66Z" />
        <path d="M126 268h88" stroke="#B474FF" strokeWidth="1.4" strokeDasharray="4 5" />
        <path d="M122 330h96" stroke="#9A4DFF" strokeWidth="1.4" strokeDasharray="4 5" />
        <path d="M126 392h88" stroke="#6B20E8" strokeWidth="1.4" strokeDasharray="4 5" />
        <path d="M170 396v74" strokeDasharray="2 7" />
        <path d="M170 470c-24 0-40 9-48 24M170 470c24 0 40 9 48 24" strokeLinecap="round" />
      </g>

      <g fontFamily="Outfit, sans-serif" fontSize="12" letterSpacing="2">
        {/* neck */}
        <text x="228" y="184" fill="#B474FF">
          NECK
        </text>
        <text x="288" y="184" fill="#fff" textAnchor="end">
          39cm
        </text>
        <line x1="206" y1="180" x2="232" y2="180" stroke="rgba(255,255,255,0.35)" />

        {/* shoulders */}
        <text x="228" y="228" fill="#B474FF">
          SHOULDERS
        </text>
        <text x="288" y="228" fill="#fff" textAnchor="end">
          46cm
        </text>
        <line x1="206" y1="224" x2="232" y2="224" stroke="rgba(255,255,255,0.35)" />

        {/* chest */}
        <text x="20" y="272" fill="#9A4DFF">
          CHEST
        </text>
        <text x="20" y="290" fill="#fff">
          96cm
        </text>
        <line x1="86" y1="264" x2="126" y2="268" stroke="rgba(255,255,255,0.35)" />

        {/* waist */}
        <text x="228" y="334" fill="#9A4DFF">
          WAIST
        </text>
        <text x="288" y="334" fill="#fff" textAnchor="end">
          82cm
        </text>
        <line x1="206" y1="330" x2="232" y2="330" stroke="rgba(255,255,255,0.35)" />

        {/* hips */}
        <text x="20" y="396" fill="#6B20E8">
          HIPS
        </text>
        <text x="20" y="414" fill="#fff">
          98cm
        </text>
        <line x1="86" y1="388" x2="126" y2="392" stroke="rgba(255,255,255,0.35)" />

        {/* thigh */}
        <text x="228" y="442" fill="#6B20E8">
          THIGH
        </text>
        <text x="288" y="442" fill="#fff" textAnchor="end">
          55cm
        </text>
        <line x1="206" y1="438" x2="232" y2="438" stroke="rgba(255,255,255,0.35)" />

        {/* inseam */}
        <text x="20" y="478" fill="#B474FF">
          INSEAM
        </text>
        <text x="20" y="496" fill="#fff">
          79cm
        </text>
        <line x1="86" y1="470" x2="128" y2="470" stroke="rgba(255,255,255,0.35)" />
      </g>
    </svg>
  );
}