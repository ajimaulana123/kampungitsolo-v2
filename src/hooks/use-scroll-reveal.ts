import { useEffect } from "react";

/**
 * Scroll reveal for elements marked with `data-reveal`:
 *   data-reveal            fade-up
 *   data-reveal="stagger"  fade-up each direct child in turn
 *   data-reveal="clip"     image clip/zoom reveal
 * Content stays visible without JS or with prefers-reduced-motion; each element animates once.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    for (const el of els) {
      if (el.dataset["reveal"] === "stagger") {
        Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty("--i", String(i)));
      }
      // Already on screen at load: show as-is so nothing blinks.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("reveal-done");
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-revealed");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of els) if (!el.classList.contains("reveal-done")) io.observe(el);
    root.classList.add("reveal-ready");

    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
}
