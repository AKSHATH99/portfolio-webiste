import emailjs from "@emailjs/browser";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Send,
  Globe,
  Layers,
  Gauge,
  PanelsTopLeft,
  Loader2,
} from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Globe, title: "Business Websites" },
  { icon: PanelsTopLeft, title: "Landing Pages" },
  { icon: Layers, title: "Full‑Stack Web Apps" },
  { icon: Gauge, title: "Admin Dashboards" },
];

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_acgt364";
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_rhx8uz4";
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "4wfPMYREujwU-Bxjy";

const STORAGE_KEY = "contact_message_sent";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [mailStatus, setMailStatus] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [alreadySent] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [loader, setLoader] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    setLoader(true);

    const dataToBeSend = {
      from_name: name,
      from_email: email,
      subject,
      message: `You recieved a mail from ${name} with email : ${email}. Subject : ${subject}. Message: ${message}`,
    };

    try {
      await emailjs.send(emailJsServiceId, emailJsTemplateId, dataToBeSend, emailJsPublicKey);
      setMailStatus(true);
      try {
        localStorage.setItem(STORAGE_KEY, "true");
      } catch {}
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Error sending email. Please try again.");
    } finally {
      setLoader(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12" data-reveal>
          {/* Left: Services + links */}
          <div data-reveal-child>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">
              Let's talk
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Let's build something.</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Got a role, a project or just an idea worth exploring? Drop a message — I usually
              reply within a day.
            </p>

            <div className="mt-8">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                What I can build for you
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md surface-card hover:bg-surface-elevated transition-colors"
                  >
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
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
                Or find me here
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="mailto:akshathpkk@gmail.com"
                  className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors"
                >
                  <Mail className="size-3.5 text-primary" /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/akshath-p-519939287/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors"
                >
                  <Linkedin className="size-3.5 text-accent" /> LinkedIn
                </a>
                <a
                  href="https://github.com/AKSHATH99"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors"
                >
                  <Github className="size-3.5" /> GitHub
                </a>
                <a
                  href="https://twitter.com/AkshathP2"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors"
                >
                  <Twitter className="size-3.5" /> Twitter
                </a>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-3 h-9 rounded-full surface-card text-xs hover:bg-surface-elevated transition-colors"
                >
                  <FileText className="size-3.5 text-primary" /> Résumé
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div data-reveal-child>
            {mailStatus && !alreadySent ? (
              <div className="surface-card shimmer-border rounded-2xl p-7 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Thank you for reaching out!</h3>
                <p className="text-muted-foreground max-w-sm">
                  I've received your message and will reach out to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="surface-card shimmer-border rounded-2xl p-7">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      disabled={alreadySent}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-2 w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={alreadySent}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-2 w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    disabled={alreadySent}
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="mt-2 w-full h-11 px-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div className="mt-4">
                  <label
                    className="text-xs font-mono uppercase tracking-wider text-muted-foreground"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    disabled={alreadySent}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell me about your role, project or idea — even rough is fine."
                    className="mt-2 w-full px-3 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {alreadySent ? (
                  <div className="mt-6 flex p-10 items-center justify-center gap-2 w-full h-11 rounded-md bg-primary/10 text-primary text-sm font-medium">
                    <Send className="size-4" />
                    <p className="">
                    I've received your message — will reach out to you as soon as possible.

                    </p>
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={loader}
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full h-11 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 glow-ring transition-all disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {loader ? (
                      <>
                        Sending <Loader2 className="size-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message <Send className="size-4" />
                      </>
                    )}
                  </button>
                )}
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  This sends your message directly to my inbox. Or just write directly to
                  akshathpkk@gmail.com.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
