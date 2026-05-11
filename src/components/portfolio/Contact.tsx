import { Mail, Github, Linkedin, Twitter, FileText, Send, Globe, Layers, Gauge, PanelsTopLeft } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Globe, title: "Business Websites" },
  { icon: PanelsTopLeft, title: "Landing Pages" },
  { icon: Layers, title: "Full‑Stack Web Apps" },
  { icon: Gauge, title: "Admin Dashboards" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`New message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:akshathpkk@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12" data-reveal>
          {/* Left: Services + links */}
          <div data-reveal-child>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Let's talk</p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Let's build something.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Got a role, a project or just an idea worth exploring? Drop a message — I usually reply within a day.
            </p>

            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">What I can build for you</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <li key={s.title} className="flex items-center gap-3 px-3 py-2.5 rounded-md surface-card hover:bg-surface-elevated transition-colors">
                    <span className="w-7 h-7 rounded-md bg-surface-elevated grid place-items-center text-primary">
                      <s.icon className="size-3.5" />
                    </span>
                    <span className="text-sm">{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compact contact row */}
            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Or find me here</p>
              <div className="flex flex-wrap items-center gap-2">
                <a href="mailto:akshathpkk@gmail.com" className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors">
                  <Mail className="size-3.5 text-primary" /> Email
                </a>
                <a href="https://www.linkedin.com/in/akshath-p-519939287/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors">
                  <Linkedin className="size-3.5 text-accent" /> LinkedIn
                </a>
                <a href="https://github.com/AKSHATH99" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors">
                  <Github className="size-3.5" /> GitHub
                </a>
                <a href="https://twitter.com/AkshathP2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors">
                  <Twitter className="size-3.5" /> Twitter
                </a>
                <a href="/resume.pdf" className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors">
                  <FileText className="size-3.5 text-primary" /> Résumé
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div data-reveal-child>
            <form onSubmit={handleSubmit} className="surface-card shimmer-border rounded-2xl p-7">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="name">Name</label>
                  <input id="name" name="name" required className="mt-2 w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required className="mt-2 w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground" htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={6} placeholder="Tell me about your role, project or idea — even rough is fine." className="mt-2 w-full px-3 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none" />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 glow-ring transition-all"
              >
                {submitted ? "Opening your email…" : (<>Send message <Send className="size-4" /></>)}
              </button>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                This opens your email client. Or just write directly to akshathpkk@gmail.com.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
