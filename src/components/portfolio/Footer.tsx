export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Akshath P · Built with care.</p>
        <p className="font-mono text-xs">Designed &amp; coded in India</p>
      </div>
    </footer>
  );
}
