import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenText, GraduationCap, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";

import type { LucideProps } from "lucide-react";

/** Monitor with a </> code mark, drawn in Lucide style. */
function MonitorCode({ className, strokeWidth = 2 }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="m9 8-2 2 2 2M15 8l2 2-2 2M13 7l-2 6" fill="none" />
    </svg>
  );
}

const items = [
  { icon: GraduationCap, title: "Elfan AI Academy", desc: "Pusat pelatihan AI & teknologi", tone: "text-forest fill-forest/10" },
  { icon: BookOpenText, title: "Bookless Library", desc: "Perpustakaan digital masa kini", tone: "text-sky fill-sky/10" },
  { icon: MonitorCode, title: "Elfan System", desc: "Solusi sistem berbasis teknologi", tone: "text-sky fill-sky/10" },
  { icon: Zap, title: "Smart Energy", desc: "Energi cerdas untuk masa depan", tone: "text-lime fill-lime" },
  { icon: ShieldCheck, title: "Smart Safety", desc: "Keamanan cerdas untuk masyarakat", tone: "text-background fill-forest" },
];

export function Ecosystem() {
  return (
    <section id="ekosistem" className="relative overflow-hidden py-14">
      <div className="pointer-events-none absolute inset-0 bg-streaks" />
      <div className="pointer-events-none absolute right-6 top-14 hidden h-20 w-16 bg-dots opacity-70 lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.6fr] lg:px-12">
        <div>
          <SectionLabel lead="Ekosistem" rest="& Inovasi" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Ekosistem Teknologi
            <br />
            untuk Masyarakat.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink">
            Kami menghadirkan berbagai solusi dan inovasi teknologi yang dapat dimanfaatkan oleh
            masyarakat, pendidikan, dan pemerintahan.
          </p>
          <Button variant="navy" size="pillSm" className="mt-6">
            Lihat Semua Ekosistem <ArrowRight />
          </Button>
        </div>

        <EcoCarousel />
      </div>
    </section>
  );
}

function EcoCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const go = (i: number) => {
    const n = (i + items.length) % items.length;
    setActive(n);
    const t = track.current;
    const el = t?.children[n] as HTMLElement | undefined;
    if (t && el) t.scrollTo({ left: el.offsetLeft - (t.clientWidth - el.clientWidth) / 2, behavior: "smooth" });
  };

  return (
    <div className="min-w-0">
      <div
        ref={track}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map(({ icon: Icon, title, desc, tone }, i) => {
          const on = i === active;
          return (
            <button
              key={title}
              type="button"
              onClick={() => go(i)}
              aria-pressed={on}
              className={`group flex w-40 shrink-0 snap-center flex-col items-center rounded-2xl px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                on
                  ? "bg-gradient-featured text-forest-foreground shadow-card ring-4 ring-forest/10"
                  : "border border-border bg-card text-navy shadow-soft"
              }`}
            >
              <span className={`grid size-12 place-items-center rounded-xl ${on ? "bg-forest-foreground/15" : "bg-surface"}`}>
                <Icon className={`size-7 ${on ? "text-forest-foreground fill-forest-foreground/20" : tone}`} strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 text-sm font-bold leading-tight">{title}</h3>
              <p className={`mt-3 text-[0.7rem] leading-snug ${on ? "opacity-85" : "text-ink"}`}>{desc}</p>
              <span className={`mt-auto grid size-6 place-items-center self-start rounded-full pt-0 ${on ? "bg-lime text-lime-foreground" : "border border-muted-foreground/40 text-muted-foreground group-hover:border-forest group-hover:text-forest"}`} style={{ marginTop: "1.25rem" }}>
                <ArrowRight className="size-3" />
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          {items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              aria-label={`Tampilkan ${it.title}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-forest" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" aria-label="Sebelumnya" onClick={() => go(active - 1)} className="grid size-9 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:border-forest hover:text-forest">
            <ArrowLeft className="size-4" />
          </button>
          <button type="button" aria-label="Berikutnya" onClick={() => go(active + 1)} className="grid size-9 place-items-center rounded-full bg-forest text-forest-foreground transition-opacity hover:opacity-90">
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
