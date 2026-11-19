import { useEffect } from "react";

/**
 * Gentle scroll parallax for elements marked `data-parallax="<factor>"`.
 * factor ~0.06-0.1 gives a subtle drift; transform-only, rAF-throttled.
 * Disabled with prefers-reduced-motion.
 */
export function useScrollParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")).map((el) => ({
      el,
      factor: parseFloat(el.dataset["parallax"] ?? "0") || 0.06,
    }));
    if (!els.length) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      for (const { el, factor } of els) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const offset = (r.top + r.height / 2 - mid) * factor;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      for (const { el } of els) el.style.transform = "";
    };
  }, []);
}
