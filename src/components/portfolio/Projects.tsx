import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  category: string;
  summary: string;
  problem: string;
  audience: string;
  stack: string[];
  live: string;
  github?: string;
  accent: string; // gradient classes
  image?: string; // image filename from /images folder
};

const projects: Project[] = [
  {
    title: "Web3 Document Verification",
    category: "Full‑Stack · Web3",
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
    title: "Live Coding Platform",
    category: "Real‑Time · Collaboration",
    summary: "A browser workspace where multiple people code, run and review code together — live.",
    problem: "Remote pair‑programming and coding interviews are clunky. This makes them feel local.",
    audience: "Coding interviews, teaching, pair programming, online bootcamps.",
    stack: ["React", "Monaco", "WebRTC", "Socket.IO", "Judge0", "Node.js"],
    live: "https://live-coding-video-chat-platform.onrender.com/",
    github: "https://github.com/AKSHATH99/live-coding-video-chat-platform",
    accent: "from-cyan-500/30 via-blue-500/20 to-indigo-500/30",
  },
  {
    title: "Live MCQ Platform",
    category: "Real‑Time · Education",
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
    title: "GUIDO — Mentor Discovery",
    category: "Full‑Stack · Education",
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
    category: "Map · Location",
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
    summary: "A secure vault concept for seed phrases, NFT metadata, wills and time‑locked transfers.",
    problem: "Crypto custody is risky and hard to explain. This page makes a complex security product feel safe and simple.",
    audience: "Crypto products, Web3 startups, security brands.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://estate-vault-secure.vercel.app/",
    accent: "from-indigo-500/30 via-blue-500/20 to-purple-500/30",
    image: "crypto-landing.png",
  },
];

const categories = ["All", "Landing Page", "Full‑Stack"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase().replace(/[^\w]/g, "")) || p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section data-reveal id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-semibold">Projects as proof.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
             Selected projects I worked on recently
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group surface-card shimmer-border rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-3px] transition-all">
      {/* Visual mockup */}
      <a href={p.live} target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden border-b border-border">
        {p.image ? (
          <>
            <img 
              src={`/images/${p.image}`} 
              alt={p.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
            <div className="absolute inset-0 bg-grid opacity-30" />
          </>
        )}
        {/* Browser chrome mockup */}
        <div className="absolute top-3 left-3 right-3 h-8 bg-background/50 backdrop-blur-sm border border-border rounded-md flex items-center gap-1.5 px-2">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
          <span className="ml-3 text-[10px] text-muted-foreground font-mono truncate">
            {p.live.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </a>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded-md whitespace-nowrap">
            {p.category}
          </span>
        </div>
        <p className="text-foreground/90">{p.summary}</p>

        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground font-mono">What it solves</dt>
            <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground font-mono">Useful for</dt>
            <dd className="mt-1 text-muted-foreground">{p.audience}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-foreground/80 font-mono">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
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
      </div>
    </article>
  );
}
