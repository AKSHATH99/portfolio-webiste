import { Mail, Github, Linkedin, Twitter, FileText, Send } from "lucide-react";
import { useState } from "react";

const intents = [
  { id: "hiring", label: "Hiring opportunity" },
  { id: "freelance", label: "Freelance project" },
  { id: "role", label: "Internship / Full‑time" },
  { id: "idea", label: "Project idea" },
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
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Let's build something.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Whether you're a recruiter, a founder with a half‑formed idea, or a business that just needs a great website — I'd love to hear from you.
            </p>

            <div className="mt-8 space-y-3">
              <a href="mailto:akshathpkk@gmail.com" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg surface-card grid place-items-center text-primary group-hover:text-glow transition-colors">
                  <Mail className="size-4" />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground">akshathpkk@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/akshath-p-519939287/" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg surface-card grid place-items-center text-accent transition-colors">
                  <Linkedin className="size-4" />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground">LinkedIn</span>
              </a>
              <a href="https://github.com/AKSHATH99" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg surface-card grid place-items-center transition-colors">
                  <Github className="size-4" />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground">GitHub</span>
              </a>
              <a href="https://twitter.com/AkshathP2" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg surface-card grid place-items-center transition-colors">
                  <Twitter className="size-4" />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground">@AkshathP2</span>
              </a>
              <a href="/resume.pdf" className="flex items-center gap-3 group">
                <span className="w-10 h-10 rounded-lg surface-card grid place-items-center text-primary transition-colors">
                  <FileText className="size-4" />
                </span>
                <span className="text-foreground/90 group-hover:text-foreground">Download résumé</span>
              </a>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
