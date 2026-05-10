import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Github, Linkedin, FileText, Twitter, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden />

      <div className="mx-auto max-w-6xl px-6">
        <div className="anim-fade-up max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface-card text-xs text-muted-foreground mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for freelance & full-time roles
          </div>

          <h1 className="text-5xl sm:text-7xl font-semibold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Akshath P</span>.
            <br />
            I build websites &amp; web apps that just work.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Full Stack Developer (SDE&#8209;1) turning ideas into practical digital products —
            business sites, real‑time platforms, dashboards and MVPs. Whether you're a recruiter
            or a founder with a rough idea, I can help you ship.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all glow-ring"
            >
              View Work
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-md surface-card hover:bg-surface-elevated transition-colors font-medium"
            >
              <Sparkles className="size-4 text-accent" /> Contact
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-md border border-border hover:bg-surface transition-colors font-medium"
            >
              <FileText className="size-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a aria-label="GitHub" href="https://github.com/AKSHATH99" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <Github className="size-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/akshath-p-519939287/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <Linkedin className="size-5" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/AkshathP2" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
              <Twitter className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
