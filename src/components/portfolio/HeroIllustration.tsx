/**
 * Subtle hero illustration: a stylized code/browser motif in the brand amber.
 * Works in both light and dark themes — uses the primary token + low-opacity
 * neutral strokes so it never competes with the headline.
 */
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto">
      {/* Soft ambient glow */}
      <div
        className="absolute inset-12 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <svg
        viewBox="0 0 440 440"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Stylized code editor window"
      >
        {/* Faint orbit rings — use currentColor on muted text for theme adaptability */}
        <g className="text-foreground/10">
          <circle cx="220" cy="220" r="190" stroke="currentColor" strokeWidth="1" />
          <circle cx="220" cy="220" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
        </g>

        {/* Browser / editor window */}
        <g transform="translate(70 110)">
          {/* Window frame */}
          <rect
            x="0"
            y="0"
            width="300"
            height="220"
            rx="14"
            className="fill-background"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: "hsl(var(--border))" }}
          />
          <rect
            x="0"
            y="0"
            width="300"
            height="220"
            rx="14"
            className="fill-foreground/[0.02]"
          />

          {/* Title bar */}
          <line x1="0" y1="34" x2="300" y2="34" className="text-foreground/10" stroke="currentColor" />
          <circle cx="18" cy="17" r="4" className="fill-primary/70" />
          <circle cx="34" cy="17" r="4" className="fill-primary/40" />
          <circle cx="50" cy="17" r="4" className="fill-primary/20" />

          {/* Big </> glyph centered */}
          <g transform="translate(150 130)" className="text-primary">
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontWeight="700"
              fontSize="76"
              fill="currentColor"
              opacity="0.85"
            >
              {"</>"}
            </text>
          </g>

          {/* Code lines suggestion */}
          <g className="text-primary/50">
            <rect x="22" y="58" width="48" height="6" rx="3" fill="currentColor" />
          </g>
          <g className="text-foreground/15">
            <rect x="22" y="190" width="120" height="5" rx="2.5" fill="currentColor" />
            <rect x="150" y="190" width="60" height="5" rx="2.5" fill="currentColor" />
          </g>
        </g>

        {/* Floating spark accents */}
        <g className="text-primary/70">
          <path
            d="M362 96 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 l10 -3 z"
            fill="currentColor"
            opacity="0.7"
          />
          <path
            d="M70 360 l2 7 l7 2 l-7 2 l-2 7 l-2 -7 l-7 -2 l7 -2 z"
            fill="currentColor"
            opacity="0.5"
          />
        </g>
      </svg>
    </div>
  );
}
