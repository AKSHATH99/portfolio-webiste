import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
    document.documentElement.classList.toggle("light", stored === "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md surface-card hover:bg-surface-elevated transition-colors"
    >
      {theme === "dark" ? <Sun className="size-4 text-primary" /> : <Moon className="size-4 text-primary" />}
    </button>
  );
}
