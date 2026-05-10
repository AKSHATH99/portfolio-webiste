/**
 * Subtle, low-contrast illustration of a developer at a desk.
 * Uses muted tones so it supports the headline without competing with it.
 */
export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[440px] aspect-square mx-auto opacity-90">
      {/* Soft ambient glow, very low opacity so it doesn't pull focus */}
      <div
        className="absolute inset-10 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-primary)" }}
        aria-hidden
      />

      <svg
        viewBox="0 0 440 440"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Developer working at a laptop"
      >
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(1 0 0 / 0.08)" />
            <stop offset="100%" stopColor="oklch(1 0 0 / 0.02)" />
          </linearGradient>
          <linearGradient id="amberSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 60 / 0.55)" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 60 / 0.25)" />
          </linearGradient>
        </defs>

        {/* Faint orbit ring */}
        <circle cx="220" cy="220" r="180" stroke="oklch(1 0 0 / 0.06)" strokeWidth="1" />
        <circle cx="220" cy="220" r="130" stroke="oklch(1 0 0 / 0.05)" strokeWidth="1" strokeDasharray="2 6" />

        {/* Desk line */}
        <line x1="60" y1="340" x2="380" y2="340" stroke="oklch(1 0 0 / 0.18)" strokeWidth="1.5" strokeLinecap="round" />

        {/* Plant on desk — tiny accent */}
        <g transform="translate(78 300)" opacity="0.7">
          <rect x="0" y="22" width="20" height="16" rx="2" fill="oklch(1 0 0 / 0.12)" stroke="oklch(1 0 0 / 0.25)" />
          <path d="M10 22 C 6 14, 2 10, 4 2" stroke="oklch(0.78 0.16 60 / 0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M10 22 C 14 14, 18 10, 16 2" stroke="oklch(0.78 0.16 60 / 0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M10 22 L 10 6" stroke="oklch(0.78 0.16 60 / 0.7)" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Coffee cup */}
        <g transform="translate(330 308)" opacity="0.7">
          <path d="M0 0 H 22 V 22 Q 22 30 14 30 H 8 Q 0 30 0 22 Z" fill="oklch(1 0 0 / 0.10)" stroke="oklch(1 0 0 / 0.28)" />
          <path d="M22 6 Q 30 6 30 14 Q 30 22 22 22" stroke="oklch(1 0 0 / 0.28)" fill="none" />
          <path d="M6 -6 Q 8 -10 6 -14" stroke="oklch(0.78 0.16 60 / 0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M14 -6 Q 16 -10 14 -14" stroke="oklch(0.78 0.16 60 / 0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* Person — simple silhouette, back view at laptop */}
        <g transform="translate(170 170)">
          {/* Head */}
          <circle cx="50" cy="20" r="22" fill="oklch(1 0 0 / 0.18)" stroke="oklch(1 0 0 / 0.3)" />
          {/* Headphones hint */}
          <path d="M28 22 Q 28 0 50 0 Q 72 0 72 22" stroke="oklch(0.78 0.16 60 / 0.7)" strokeWidth="2" fill="none" />
          <rect x="24" y="18" width="8" height="12" rx="2" fill="oklch(0.78 0.16 60 / 0.7)" />
          <rect x="68" y="18" width="8" height="12" rx="2" fill="oklch(0.78 0.16 60 / 0.7)" />
          {/* Shoulders / hoodie */}
          <path
            d="M 0 130 Q 0 70 50 60 Q 100 70 100 130 Z"
            fill="oklch(1 0 0 / 0.08)"
            stroke="oklch(1 0 0 / 0.22)"
          />
        </g>

        {/* Laptop in front of person */}
        <g transform="translate(140 280)">
          {/* Base */}
          <path d="M-6 50 H 166 L 156 60 H 4 Z" fill="oklch(1 0 0 / 0.14)" stroke="oklch(1 0 0 / 0.3)" />
          {/* Screen */}
          <rect x="6" y="-6" width="148" height="58" rx="4" fill="url(#screenGrad)" stroke="oklch(1 0 0 / 0.3)" />
          {/* Code lines on screen */}
          <rect x="14" y="6" width="40" height="4" rx="2" fill="url(#amberSoft)" />
          <rect x="14" y="16" width="80" height="3" rx="1.5" fill="oklch(1 0 0 / 0.35)" />
          <rect x="22" y="24" width="60" height="3" rx="1.5" fill="oklch(1 0 0 / 0.25)" />
          <rect x="22" y="32" width="90" height="3" rx="1.5" fill="oklch(1 0 0 / 0.3)" />
          <rect x="14" y="40" width="50" height="3" rx="1.5" fill="url(#amberSoft)" />
        </g>

        {/* Tiny floating spark, single accent */}
        <g transform="translate(330 110)" opacity="0.6">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="oklch(0.78 0.16 60 / 0.8)" />
        </g>
      </svg>
    </div>
  );
}
