import type { ProductVisual as VisualKey } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Product visuals — spec §8–§12.
 *
 * Hand-drawn inline SVG rather than stock imagery: it stays on-brand, weighs
 * almost nothing, scales to any card size and animates on hover without a
 * single kilobyte of JavaScript. Swap any of these for a real product
 * photograph later by returning an <Image> from the matching branch.
 */

type Props = {
  visual: VisualKey;
  accent: { from: string; to: string };
  className?: string;
  /** Gradient ids must stay unique when several cards render at once. */
  uid: string;
};

function Defs({ uid, accent }: { uid: string; accent: Props["accent"] }) {
  return (
    <defs>
      <linearGradient id={`${uid}-stroke`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={accent.from} />
        <stop offset="100%" stopColor={accent.to} />
      </linearGradient>
      <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={accent.from} stopOpacity="0.45" />
        <stop offset="100%" stopColor={accent.from} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

export function ProductVisual({ visual, accent, className, uid }: Props) {
  const common = cn("h-full w-full", className);
  const stroke = `url(#${uid}-stroke)`;
  const glow = `url(#${uid}-glow)`;

  switch (visual) {
    /* ---------------------------------------------------------------- SIREN */
    case "siren":
      return (
        <svg viewBox="0 0 320 220" fill="none" className={common} aria-hidden>
          <Defs uid={uid} accent={accent} />
          <circle cx="160" cy="112" r="105" fill={glow} />

          {/* alert waves */}
          {[58, 78, 98].map((r, i) => (
            <circle
              key={r}
              cx="160"
              cy="112"
              r={r}
              stroke={stroke}
              strokeWidth="1"
              strokeOpacity={0.5 - i * 0.13}
              className="animate-pulse-soft origin-center"
              style={{ animationDelay: `${i * 0.55}s` }}
            />
          ))}

          {/* device body */}
          <rect
            x="128"
            y="72"
            width="64"
            height="80"
            rx="18"
            stroke={stroke}
            strokeWidth="1.6"
            fill="rgba(255,255,255,0.03)"
          />
          <rect
            x="140"
            y="86"
            width="40"
            height="40"
            rx="12"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.7"
          />
          <circle cx="160" cy="106" r="8" fill={accent.from} className="animate-pulse-soft" />
          <rect x="146" y="136" width="28" height="4" rx="2" fill={accent.to} fillOpacity="0.5" />

          {/* companion app card */}
          <rect
            x="220"
            y="60"
            width="62"
            height="104"
            rx="12"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.55"
            fill="rgba(255,255,255,0.02)"
          />
          <rect x="232" y="76" width="38" height="4" rx="2" fill="#fff" fillOpacity="0.35" />
          <rect x="232" y="88" width="26" height="4" rx="2" fill="#fff" fillOpacity="0.18" />
          <rect x="232" y="108" width="38" height="24" rx="6" fill={accent.from} fillOpacity="0.22" />

          {/* link between device and app */}
          <path
            d="M196 112h20"
            stroke={stroke}
            strokeWidth="1.2"
            strokeDasharray="3 5"
            className="animate-dash"
          />

          {/* protective arc */}
          <path
            d="M46 150c0-46 33-84 74-84"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.4"
            strokeLinecap="round"
          />
        </svg>
      );

    /* ----------------------------------------------------------- SUR-MEZUR */
    case "surmezur":
      return (
        <svg viewBox="0 0 320 220" fill="none" className={common} aria-hidden>
          <Defs uid={uid} accent={accent} />
          <circle cx="150" cy="110" r="100" fill={glow} />

          {/* silhouette, built from measurement geometry */}
          <path
            d="M150 40c9 0 16 7 16 16s-7 16-16 16-16-7-16-16 7-16 16-16Z"
            stroke={stroke}
            strokeWidth="1.5"
          />
          <path
            d="M124 82c8-6 16-9 26-9s18 3 26 9c8 6 11 16 11 27v22h-14l-4 55h-38l-4-55h-14v-22c0-11 3-21 11-27Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.02)"
          />

          {/* measurement bands */}
          {[
            { y: 96, w: 108 },
            { y: 128, w: 92 },
            { y: 162, w: 78 },
          ].map((band, i) => (
            <g key={band.y} className="animate-pulse-soft" style={{ animationDelay: `${i * 0.5}s` }}>
              <path
                d={`M${150 - band.w / 2} ${band.y}h${band.w}`}
                stroke={accent.to}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle cx={150 - band.w / 2} cy={band.y} r="2.5" fill={accent.to} />
              <circle cx={150 + band.w / 2} cy={band.y} r="2.5" fill={accent.to} />
            </g>
          ))}

          {/* readout panel */}
          <rect
            x="236"
            y="70"
            width="66"
            height="82"
            rx="10"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.55"
            fill="rgba(255,255,255,0.02)"
          />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect
                x="248"
                y={86 + i * 16}
                width="22"
                height="3"
                rx="1.5"
                fill="#fff"
                fillOpacity="0.28"
              />
              <rect
                x="276"
                y={86 + i * 16}
                width="14"
                height="3"
                rx="1.5"
                fill={accent.from}
                fillOpacity="0.75"
              />
            </g>
          ))}
        </svg>
      );

    /* -------------------------------------------------------------- KOZAPP */
    case "kozapp":
      return (
        <svg viewBox="0 0 320 220" fill="none" className={common} aria-hidden>
          <Defs uid={uid} accent={accent} />
          <circle cx="160" cy="110" r="96" fill={glow} />

          {/* modular blocks — a concept still assembling itself */}
          {[
            { x: 92, y: 62, o: 1 },
            { x: 152, y: 62, o: 0.55 },
            { x: 92, y: 122, o: 0.55 },
            { x: 152, y: 122, o: 0.25 },
          ].map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={b.y}
              width="52"
              height="52"
              rx="14"
              stroke={stroke}
              strokeWidth="1.4"
              strokeOpacity={b.o}
              strokeDasharray={i === 3 ? "5 6" : undefined}
              fill="rgba(255,255,255,0.02)"
            />
          ))}

          <circle cx="118" cy="88" r="7" fill={accent.from} fillOpacity="0.85" />
          <path d="M170 80h26M170 96h16" stroke={accent.to} strokeWidth="2" strokeLinecap="round" />
          <path d="M110 140h26M110 156h16" stroke={accent.to} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />

          <path
            d="M144 88h8M144 148h8M118 114v8M178 114v8"
            stroke={stroke}
            strokeWidth="1.2"
            strokeDasharray="2 4"
            className="animate-dash"
          />

          <text
            x="228"
            y="116"
            fill={accent.from}
            fillOpacity="0.7"
            fontSize="13"
            fontFamily="var(--font-display, sans-serif)"
            letterSpacing="0.16em"
          >
            SOON
          </text>
        </svg>
      );

    /* ------------------------------------------------------------ AGEVOICE */
    case "agevoice":
      return (
        <svg viewBox="0 0 320 220" fill="none" className={common} aria-hidden>
          <Defs uid={uid} accent={accent} />
          <circle cx="160" cy="110" r="98" fill={glow} />

          {/* waveform */}
          {Array.from({ length: 26 }).map((_, i) => {
            const t = i / 25;
            const h = 12 + Math.sin(t * Math.PI * 3.2) ** 2 * 78 * (1 - Math.abs(t - 0.5) * 0.7);
            return (
              <rect
                key={i}
                x={44 + i * 9}
                y={110 - h / 2}
                width="3.5"
                height={h}
                rx="1.75"
                fill={i % 3 === 0 ? accent.from : accent.to}
                fillOpacity={0.28 + (1 - Math.abs(t - 0.5) * 2) * 0.55}
                className="animate-pulse-soft"
                style={{ animationDelay: `${(i % 7) * 0.22}s` }}
              />
            );
          })}

          {/* analysis arc */}
          <path
            d="M40 178c34 16 72 24 120 24s86-8 120-24"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.45"
            strokeLinecap="round"
          />
          <path
            d="M40 42c34-16 72-24 120-24s86 8 120 24"
            stroke={stroke}
            strokeWidth="1.2"
            strokeOpacity="0.25"
            strokeLinecap="round"
            strokeDasharray="4 6"
            className="animate-dash"
          />
        </svg>
      );

    /* --------------------------------------------------------------- GREEN */
    case "green":
    default:
      return (
        <svg viewBox="0 0 320 220" fill="none" className={common} aria-hidden>
          <Defs uid={uid} accent={accent} />
          <circle cx="160" cy="112" r="96" fill={glow} />

          {/* growth curve */}
          <path
            d="M52 176c26 0 44-14 60-38s34-52 68-52"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* branching nodes */}
          {[
            { x: 112, y: 138 },
            { x: 148, y: 108 },
            { x: 180, y: 86 },
          ].map((n, i) => (
            <g key={i}>
              <circle
                cx={n.x}
                cy={n.y}
                r="4"
                fill={accent.to}
                className="animate-pulse-soft"
                style={{ animationDelay: `${i * 0.4}s` }}
              />
              <path
                d={`M${n.x} ${n.y}l${18 + i * 6} ${-14 - i * 4}`}
                stroke={stroke}
                strokeWidth="1"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </g>
          ))}

          {/* abstract leaf-form, kept geometric rather than literal */}
          <path
            d="M212 60c30 4 48 24 48 52 0 10-3 19-8 27-24-4-40-20-44-44-2-12 0-24 4-35Z"
            stroke={stroke}
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.02)"
          />
          <path
            d="M216 66c14 20 24 42 32 68"
            stroke={accent.to}
            strokeWidth="1"
            strokeOpacity="0.5"
            strokeLinecap="round"
          />

          <path
            d="M52 176h216"
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.28"
            strokeDasharray="3 6"
          />

          <text
            x="240"
            y="176"
            fill={accent.to}
            fillOpacity="0.6"
            fontSize="12"
            fontFamily="var(--font-display, sans-serif)"
            letterSpacing="0.16em"
          >
            SOON
          </text>
        </svg>
      );
  }
}
