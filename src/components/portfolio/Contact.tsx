import { Mail, Github, Linkedin, Twitter, FileText, Send, Globe, Layers, Gauge, Radio, MapPin, Sparkles, ShieldCheck, Rocket, LineChart } from "lucide-react";
import { useState } from "react";

const intents = [
  { id: "hiring", label: "Hiring opportunity" },
  { id: "freelance", label: "Freelance project" },
  { id: "role", label: "Internship / Full‑time" },
  { id: "idea", label: "Project idea" },
];

const services = [
  { icon: Globe, title: "Business Websites" },
  { icon: Rocket, title: "Landing Pages" },
  { icon: Layers, title: "Full‑Stack Web Apps" },
  { icon: Gauge, title: "Admin Dashboards" },
  { icon: Radio, title: "Real‑Time Platforms" },
  { icon: MapPin, title: "Map / Location Apps" },
  { icon: Sparkles, title: "AI Product Pages" },
  { icon: ShieldCheck, title: "Web3 Interfaces" },
  { icon: LineChart, title: "MVPs & Prototypes" },
];

export function Contact() {
  const [intent, setIntent] = useState("hiring");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`[${intents.find((i) => i.id === intent)?.label}] from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:akshathpkk@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12" data-reveal>
          {/* Left: Services I offer */}
          <div data-reveal-child>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Let's talk</p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Let's build something.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              You don't need to know the tech. Tell me what you want your users to do — I'll handle the rest.
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
          </div>

          {/* Right: form */}
          <div data-reveal-child>
            <form onSubmit={handleSubmit} className="surface-card shimmer-border rounded-2xl p-7">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">I'm reaching out about</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {intents.map((i) => (
                    <button
                      key={i.id}
                      type="button"
                      onClick={() => setIntent(i.id)}
                      className={`text-sm px-3 py-2 rounded-md border transition-colors ${
                        intent === i.id
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      {i.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
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
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your role, project or idea — even rough is fine." className="mt-2 w-full px-3 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none" />
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

            {/* Compact contact row */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
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
      </div>
    </section>
  );
}
