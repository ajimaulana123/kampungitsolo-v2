import { useEffect } from "react";

/**
 * Scroll reveal for elements marked with `data-reveal`:
 *   data-reveal            fade-up
 *   data-reveal="stagger"  fade-up each direct child in turn
 *   data-reveal="clip"     image clip/zoom reveal
 *   data-reveal="left"     slide in from the left
 *   data-reveal="right"    slide in from the right
 *   data-reveal="pop"      scale in
 * Elements marked with `data-count="<n>"` count up to <n> when first seen.
 * Pass `resetKey` (e.g. a slug) to re-scan when the page content swaps.
 * Content stays visible without JS or with prefers-reduced-motion; each element animates once.
 */
export function useScrollReveal(resetKey?: unknown) {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    for (const el of els) {
      if (el.dataset["reveal"] === "stagger") {
        Array.from(el.children).forEach((c, i) =>
          (c as HTMLElement).style.setProperty("--i", String(i)),
        );
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

    // Count-up for numbers marked with data-count (keeps final value as fallback text).
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    let cio: IntersectionObserver | undefined;
    if (counters.length) {
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      cio = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            cio!.unobserve(el);
            const target = parseFloat(el.dataset["count"] ?? "");
            if (!Number.isFinite(target)) continue;
            const start = performance.now();
            const dur = 1200;
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / dur);
              el.textContent = String(Math.round(target * easeOut(t)));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      for (const el of counters) cio.observe(el);
    }

    return () => {
      io.disconnect();
      cio?.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [resetKey]);
}
