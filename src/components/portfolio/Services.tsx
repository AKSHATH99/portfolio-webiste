import { Globe, Layers, Gauge, Radio, MapPin, Sparkles, ShieldCheck, Rocket, LineChart } from "lucide-react";

const services = [
  { icon: Globe, title: "Business Websites", desc: "Polished sites for restaurants, agencies, startups and local businesses — fast, responsive and conversion‑focused." },
  { icon: Rocket, title: "Landing Pages", desc: "Product, AI tool, SaaS or restaurant landing pages designed to turn visitors into customers." },
  { icon: Layers, title: "Full‑Stack Web Apps", desc: "End‑to‑end applications with auth, databases, dashboards and APIs — built to scale with your users." },
  { icon: Gauge, title: "Admin Dashboards & Tools", desc: "Internal tools and dashboards that help your team move faster and see what matters." },
  { icon: Radio, title: "Real‑Time Platforms", desc: "Live collaboration, quizzes, chat or anything that updates instantly across many users." },
  { icon: MapPin, title: "Map / Location Apps", desc: "Find‑near‑me, routing and discovery experiences using OpenStreetMap and Leaflet." },
  { icon: Sparkles, title: "AI Product Pages", desc: "Pages that explain AI products clearly and drive sign‑ups." },
  { icon: ShieldCheck, title: "Web3 Interfaces", desc: "Wallet‑connected dApps and Web3 product pages — Solana, IPFS and beyond." },
  { icon: LineChart, title: "MVPs & Prototypes", desc: "Have an idea? I help you turn it into a working product you can show to users or investors." },
];

export function Services() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">What I build</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">From idea to a live product.</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            You don't need to know the tech. Tell me what you want your users to do — I'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-6 rounded-xl surface-card shimmer-border hover:translate-y-[-2px] transition-all"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-surface-elevated grid place-items-center text-primary group-hover:text-accent transition-colors">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
