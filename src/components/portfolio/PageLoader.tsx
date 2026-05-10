import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <span className="absolute inset-0 rounded-full border-2 border-border" />
          <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
          <span className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-sm font-display font-semibold">
            A
          </span>
        </div>
        <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}
