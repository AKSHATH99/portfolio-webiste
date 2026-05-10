import { useEffect } from "react";

/**
 * Adds the `is-visible` class to any element with `data-reveal` when it
 * scrolls into the viewport. Children with `data-reveal-child` get a staggered
 * delay based on their order.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    // stagger children
    els.forEach((el) => {
      const children = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
      children.forEach((c, i) => {
        c.style.setProperty("--reveal-delay", `${i * 80}ms`);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
