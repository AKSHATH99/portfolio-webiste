import { ArrowUpRight, NotebookPen } from "lucide-react";

export function Blog() {
  return (
    <section data-reveal id="blog" className="relative py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-3">Writing</p>
          <h2 className="text-4xl sm:text-5xl font-semibold">Notes from the build.</h2>
        </div>

        <a
          href="https://www.notion.so/Dockerising-my-Reactjs-app-2179d1dc940a807fbf1be103f50e90cc"
          target="_blank"
          rel="noreferrer"
          className="group block surface-card shimmer-border rounded-2xl p-8 hover:translate-y-[-2px] transition-all max-w-3xl"
        >
          <div className="flex items-start gap-5">
            <div className="w-10 h-10 rounded-md overflow-hidden border-2 border-border bg-background shadow-sm">
              <img 
                src="/images/blog-headers/images.jpeg" 
                alt="Blog header"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">DevOps · React</div>
              <h3 className="mt-1 text-2xl font-semibold flex items-center gap-2">
                Dockerising my React.js app
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>
              <p className="mt-2 text-muted-foreground">
                A practical write‑up on containerizing a React.js app — what to include in the image, multi‑stage builds, and common gotchas.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
