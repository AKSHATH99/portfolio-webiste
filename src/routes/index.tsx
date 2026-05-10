import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { TechStack } from "@/components/portfolio/TechStack";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akshath P — Full Stack Developer" },
      {
        name: "description",
        content:
          "Akshath P is a Full Stack Developer (SDE-1) building practical websites and web apps — real-time platforms, dashboards, landing pages and MVPs. Open to freelance and full-time roles.",
      },
      { property: "og:title", content: "Akshath P — Full Stack Developer" },
      { property: "og:description", content: "Websites, web apps and digital products that just work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
