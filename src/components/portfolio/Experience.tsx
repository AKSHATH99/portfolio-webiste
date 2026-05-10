import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "SDE‑1",
    company: "Favhiker — Delnie",
    duration: "Nov 2025 — Present",
    desc: "Building scalable web applications with Next.js and NestJS. Shipping features, fixing bugs, improving performance and refining UI/UX for a real product team.",
  },
  {
    role: "Full Stack Intern",
    company: "BookMyPooja",
    duration: "Dec 2024 — May 2025",
    desc: "Contributed to web app development with Next.js and NestJS — feature work, debugging, performance, and UI polish that made it into production.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">Where I've shipped.</h2>
        </div>

        <ol className="relative border-l border-border ml-3 space-y-10">
          {jobs.map((j) => (
            <li key={j.company} className="pl-8 relative">
              <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-background border border-border grid place-items-center">
                <Briefcase className="size-3 text-primary" />
              </span>
              <div className="surface-card rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{j.role}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{j.duration}</span>
                </div>
                <p className="text-accent font-medium mt-1">{j.company}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
