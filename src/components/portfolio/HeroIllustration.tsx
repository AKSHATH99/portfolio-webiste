/**
 * Decorative yellow + white abstract illustration for the hero.
 * Pure inline SVG so it scales crisply, themes via currentColor and tokens.
 */
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[460px] aspect-square mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <svg
        viewBox="0 0 460 460"
        className="relative w-full h-full anim-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract code window illustration"
      >
        <defs>
          <linearGradient id="gPrim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.18 65)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 60)" />
          </linearGradient>
          <linearGradient id="gSoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(1 0 0 / 0.10)" />
            <stop offset="100%" stopColor="oklch(1 0 0 / 0.02)" />
          </linearGradient>
        </defs>

        {/* Orbit rings */}
        <circle cx="230" cy="230" r="200" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />
        <circle cx="230" cy="230" r="150" stroke="oklch(1 0 0 / 0.10)" strokeWidth="1" strokeDasharray="3 6" />

        {/* Big amber blob */}
        <circle cx="340" cy="120" r="46" fill="url(#gPrim)" />
        <circle cx="100" cy="340" r="22" fill="oklch(0.85 0.18 65)" opacity="0.6" />
        <circle cx="380" cy="320" r="10" fill="oklch(0.85 0.18 65)" />

        {/* Browser-like window */}
        <g className="anim-float-slow">
          <rect x="80" y="130" width="280" height="200" rx="18" fill="url(#gSoft)" stroke="oklch(1 0 0 / 0.18)" />
          <circle cx="100" cy="150" r="4" fill="oklch(0.85 0.18 65)" />
          <circle cx="114" cy="150" r="4" fill="oklch(0.78 0.13 195)" />
          <circle cx="128" cy="150" r="4" fill="oklch(1 0 0 / 0.4)" />

          {/* Code lines */}
          <rect x="100" y="178" width="120" height="8" rx="4" fill="oklch(0.85 0.18 65)" />
          <rect x="100" y="196" width="190" height="6" rx="3" fill="oklch(1 0 0 / 0.65)" />
          <rect x="100" y="212" width="150" height="6" rx="3" fill="oklch(1 0 0 / 0.35)" />
          <rect x="120" y="228" width="170" height="6" rx="3" fill="oklch(1 0 0 / 0.55)" />
          <rect x="120" y="244" width="100" height="6" rx="3" fill="oklch(0.85 0.18 65)" />
          <rect x="100" y="260" width="80" height="6" rx="3" fill="oklch(1 0 0 / 0.35)" />

          {/* Run button */}
          <rect x="260" y="280" width="80" height="28" rx="14" fill="oklch(0.85 0.18 65)" />
          <path d="M283 288 L283 300 L295 294 Z" fill="oklch(0.18 0.03 60)" />
        </g>

        {/* Floating chip */}
        <g transform="translate(310 250)">
          <rect width="92" height="40" rx="12" fill="oklch(1 0 0 / 0.92)" />
          <circle cx="18" cy="20" r="6" fill="oklch(0.85 0.18 65)" />
          <rect x="32" y="12" width="46" height="6" rx="3" fill="oklch(0.18 0.03 60)" />
          <rect x="32" y="22" width="32" height="5" rx="2.5" fill="oklch(0.18 0.03 60 / 0.5)" />
        </g>

        {/* Spark */}
        <g transform="translate(60 90)" opacity="0.9">
          <path d="M20 0 L24 16 L40 20 L24 24 L20 40 L16 24 L0 20 L16 16 Z" fill="oklch(0.85 0.18 65)" />
        </g>
      </svg>
    </div>
  );
}
