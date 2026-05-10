const groups = [
  {
    title: "Frontend",
    blurb: "What your users see and interact with.",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Python"],
  },
  {
    title: "Backend",
    blurb: "Servers, APIs and data behind the product.",
    items: ["Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Infra · Real‑Time · Tools",
    blurb: "Performance, deployment, scaling and live features.",
    items: ["Redis", "Docker", "Kubernetes", "AWS", "Socket.IO"],
  },
];

export function TechStack() {
  return (
    <section data-reveal id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Tech stack</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">Tools I work with.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Grouped by what they do — so it's easy to scan whether you're a recruiter or a curious client.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="surface-card rounded-2xl p-6 shimmer-border">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{g.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-elevated border border-border text-sm font-mono"
                  >
                    <TechDot label={it} />
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechDot({ label }: { label: string }) {
  // simple deterministic color from name
  const hue = [...label].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <span
      className="w-2 h-2 rounded-full"
      style={{ background: `oklch(0.78 0.14 ${hue})` }}
    />
  );
}
