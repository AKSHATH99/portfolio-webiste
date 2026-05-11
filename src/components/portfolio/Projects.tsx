import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  category: string;
  group: "fullstack" | "landing" | "webapps";
  summary: string;
  problem: string;
  audience: string;
  stack: string[];
  live: string;
  github?: string;
  accent: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Web3 Document Verification",
    category: "Full‑Stack · Web3",
    group: "webapps",
    summary: "Verify if a document is authentic and untampered — backed by the blockchain.",
    problem: "Forged certificates and altered records are hard to catch. This platform lets anyone verify a document in seconds.",
    audience: "Universities, certification bodies, HR teams, government records.",
    stack: ["Solana", "IPFS", "React", "Tailwind", "PostgreSQL"],
    live: "https://doc-verify-alpha.vercel.app/",
    github: "https://github.com/AKSHATH99/DocVerify",
    accent: "from-purple-500/30 via-fuchsia-500/20 to-cyan-400/30",
    image: "doc-verify.png",
  },
  {
    title: "Live MCQ Platform",
    category: "Real‑Time · Education",
    group: "fullstack",
    summary: "Run live quizzes with instant results and a real‑time leaderboard.",
    problem: "Teachers and trainers want quick assessments without paper or delays. Hosts get instant insight; learners get instant feedback.",
    audience: "Teachers, coaching centers, hiring tests, workshops, events.",
    stack: ["Socket.IO", "Redis", "PostgreSQL", "React", "Tailwind"],
    live: "https://socketio-live-mcq.onrender.com/",
    github: "https://github.com/AKSHATH99/socketio-live-mcq",
    accent: "from-amber-500/30 via-orange-500/20 to-rose-500/30",
    image: "mcq-platform.png",
  },
  {
    title: "Live Coding Platform",
    category: "Real‑Time · Collaboration",
    group: "fullstack",
    summary: "A browser workspace where multiple people code, run and review code together — live.",
    problem: "Remote pair‑programming and coding interviews are clunky. This makes them feel local.",
    audience: "Coding interviews, teaching, pair programming, online bootcamps.",
    stack: ["React", "Monaco", "WebRTC", "Socket.IO", "Judge0", "Node.js"],
    live: "https://live-coding-video-chat-platform.onrender.com/",
    github: "https://github.com/AKSHATH99/live-coding-video-chat-platform",
    accent: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    title: "GUIDO — Mentor Discovery",
    category: "Full‑Stack · Education",
    group: "fullstack",
    summary: "Helps students discover mentors that match their career interests.",
    problem: "Finding the right mentor is hard. GUIDO matches students with mentors by domain and goals.",
    audience: "Student communities, education platforms, mentorship programs.",
    stack: ["React", "Node.js", "Express", "Tailwind", "Framer Motion"],
    live: "https://guido-frontend.vercel.app/",
    github: "https://github.com/AKSHATH99/GUIDO",
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    title: "Pharm‑Locator",
    category: "Web Application · Location",
    group: "webapps",
    summary: "Find nearby medical stores and get the best route to reach them.",
    problem: "Finding an open pharmacy quickly can be life‑critical. Pharm‑Locator surfaces options and routes them in seconds.",
    audience: "Healthcare services, local discovery, pharmacy chains, emergency apps.",
    stack: ["React", "Tailwind", "OpenStreetMap", "Leaflet"],
    live: "https://pharm-locator.vercel.app/",
    github: "https://github.com/AKSHATH99/locator",
    accent: "from-green-500/30 via-emerald-500/20 to-teal-500/30",
  },
  {
    title: "Indian‑Italian Restaurant",
    category: "Landing Page",
    group: "landing",
    summary: "A flavorful brand site with menu, gallery, specials and table booking.",
    problem: "Restaurants need a presence that looks as good as the food. This delivers brand, menu and bookings in one flow.",
    audience: "Restaurants, cafes, food brands, local businesses.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://spice-sage-showcase.vercel.app/",
    accent: "from-rose-500/30 via-orange-500/20 to-amber-500/30",
    image: "restaurant-hero.png",
  },
  {
    title: "Azure Escapes — Travel",
    category: "Landing Page",
    group: "landing",
    summary: "A polished travel agency landing page showcasing destinations and packages.",
    problem: "Travel brands need an experience that sells the dream. This page does it with motion, imagery and clear packages.",
    audience: "Travel agencies, tour operators, hospitality brands.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://azure-escapes.vercel.app/",
    accent: "from-sky-500/30 via-cyan-500/20 to-blue-500/30",
    image: "traevl-website.png",
  },
  {
    title: "Price‑Wise AI",
    category: "Landing Page",
    group: "landing",
    summary: "Landing page for an AI shopping assistant that finds better deals for you.",
    problem: "Shoppers want value, not just lower prices. This page explains the assistant and converts curious visitors.",
    audience: "AI products, SaaS launches, shopping tools.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://price-wise-theta-ochre.vercel.app/",
    accent: "from-violet-500/30 via-purple-500/20 to-pink-500/30",
    image: "pricewise-hero.png",
  },
  {
    title: "Estate Vault — Crypto",
    category: "Web3 · Product Page",
    group: "landing",
    summary: "A secure vault concept for seed phrases, NFT metadata, wills and time‑locked transfers.",
    problem: "Crypto custody is risky and hard to explain. This page makes a complex security product feel safe and simple.",
    audience: "Crypto products, Web3 startups, security brands.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://estate-vault-secure.vercel.app/",
    accent: "from-indigo-500/30 via-blue-500/20 to-purple-500/30",
    image: "crypto-landing.png",
  },
];

type GroupKey = "fullstack" | "landing" | "webapps";
const groupMeta: Record<GroupKey, { label: string; blurb: string }> = {
  fullstack: {
    label: "Full‑Stack Web Apps",
    blurb: "End‑to‑end products with real users, real data and real‑time features.",
  },
  landing: {
    label: "Landing Pages",
    blurb: "High‑polish marketing pages built to convert visitors into customers.",
  },
  webapps: {
    label: "Web Applications & Tools",
    blurb: "Specialized frontend applications that solve specific domain problems.",
  },
};

const filters = ["All", "Full‑Stack", "Landing Page", "Web Apps"] as const;
type Filter = typeof filters[number];

function matchesFilter(p: Project, f: Filter) {
  if (f === "All") return true;
  if (f === "Full‑Stack") return p.group === "fullstack";
  if (f === "Landing Page") return p.group === "landing";
  if (f === "Web Apps") return p.group === "webapps";
  return true;
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    filters.forEach((f) => {
      if (f !== "All") c[f] = projects.filter((p) => matchesFilter(p, f)).length;
    });
    return c;
  }, []);

  const filtered = projects.filter((p) => matchesFilter(p, filter));

  const groupedOrder: GroupKey[] = ["fullstack", "landing", "webapps"];
  const grouped = groupedOrder
    .map((g) => ({ key: g, items: filtered.filter((p) => p.group === g) }))
    .filter((g) => g.items.length > 0);

  return (
    <section data-reveal id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Projects as proof.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Grouped so you can jump straight to what you care about.
            </p>
          </div>
        </div>

        {/* Sticky filter bar */}
        <div className="sticky top-16 z-20 -mx-6 px-6 py-3 mb-8 backdrop-blur-md bg-background/70 border-y border-border/50">
          <div className="flex flex-wrap gap-2">
            {filters.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {c} <span className="opacity-60">· {counts[c]}</span>
              </button>
            ))}
          </div>
        </div>

        {filter === "All" ? (
          <div className="space-y-14">
            {grouped.map((g, idx) => (
              <div key={g.key}>
                <div className="flex items-end justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{groupMeta[g.key].label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{groupMeta[g.key].blurb}</p>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-md whitespace-nowrap">
                    {g.items.length} {g.items.length === 1 ? "project" : "projects"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {g.items.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                  ))}
                </div>
                {idx < grouped.length - 1 && (
                  <div className="mt-14 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const visibleStack = p.stack.slice(0, 3);
  const overflow = p.stack.length - visibleStack.length;

  return (
    <article className="group surface-card shimmer-border rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-3px] transition-all">
      <a href={p.live} target="_blank" rel="noreferrer" className="block relative aspect-[16/9] overflow-hidden border-b border-border">
        {p.image ? (
          <>
            <img
              src={`/images/${p.image}`}
              alt={p.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
            <div className="absolute inset-0 bg-grid opacity-30" />
          </>
        )}
        <div className="absolute top-3 left-3 right-3 h-7 bg-background/50 backdrop-blur-sm border border-border rounded-md flex items-center gap-1.5 px-2">
          <span className="w-2 h-2 rounded-full bg-destructive/70" />
          <span className="w-2 h-2 rounded-full bg-primary/70" />
          <span className="w-2 h-2 rounded-full bg-accent/70" />
          <span className="ml-2 text-[10px] text-muted-foreground font-mono truncate">
            {p.live.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </a>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-md whitespace-nowrap">
            {p.category}
          </span>
        </div>
        <p className="text-sm text-foreground/85">{p.summary}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleStack.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated border border-border text-foreground/80 font-mono">
              {t}
            </span>
          ))}
          {overflow > 0 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-surface-elevated border border-border text-muted-foreground font-mono">
              +{overflow}
            </span>
          )}
        </div>

        {open && (
          <dl className="mt-4 space-y-2 text-sm border-t border-border pt-4">
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">What it solves</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{p.problem}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Useful for</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{p.audience}</dd>
            </div>
          </dl>
        )}

        <div className="mt-4 flex items-center justify-between gap-3 pt-3 border-t border-border">
          <div className="flex items-center gap-3">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-glow transition-colors"
            >
              Live demo <ExternalLink className="size-3.5" />
            </a>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="size-3.5" /> Source
              </a>
            )}
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-expanded={open}
          >
            {open ? "Hide" : "Details"}
            <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </article>
  );
}
