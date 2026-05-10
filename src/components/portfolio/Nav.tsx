import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-semibold">
          <span className="inline-block w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-sm">A</span>
          <span>Akshath<span className="text-muted-foreground">.dev</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center text-sm font-medium px-4 h-9 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
