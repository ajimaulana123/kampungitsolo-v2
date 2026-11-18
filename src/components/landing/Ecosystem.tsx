import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";

import academy from "@/assets/about-class.jpg";
import library from "@/assets/impact-seminar.jpg";
import system from "@/assets/impact-team.jpg";
import energy from "@/assets/impact-city.jpg";
import safety from "@/assets/impact-umkm.jpg";

const items = [
  { img: academy, title: "Elfan AI Academy", desc: "Pusat pelatihan AI & teknologi" },
  { img: library, title: "Bookless Library", desc: "Perpustakaan digital masa kini" },
  { img: system, title: "Elfan System", desc: "Solusi sistem berbasis teknologi" },
  { img: energy, title: "Smart Energy", desc: "Energi cerdas untuk masa depan" },
  { img: safety, title: "Smart Safety", desc: "Keamanan cerdas untuk masyarakat" },
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
        {items.map(({ img, title, desc }, i) => {
          const on = i === active;
          return (
            <button
              key={title}
              type="button"
              onClick={() => go(i)}
              aria-pressed={on}
              className={`group relative flex h-56 w-44 shrink-0 snap-center flex-col justify-end overflow-hidden rounded-2xl p-4 text-left text-forest-foreground shadow-card transition-all duration-300 hover:-translate-y-1 ${
                on ? "ring-4 ring-lime/70" : "ring-1 ring-border"
              }`}
            >
              <img src={img} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className={`absolute inset-0 transition-opacity duration-300 ${on ? "bg-gradient-to-t from-forest via-forest/70 to-forest/10" : "bg-gradient-to-t from-navy via-navy/60 to-navy/5"}`} />
              <span className="relative">
                <h3 className="text-sm font-bold leading-tight">{title}</h3>
                <p className="mt-1.5 text-[0.7rem] leading-snug opacity-85">{desc}</p>
                <span className={`mt-3 grid size-6 place-items-center rounded-full ${on ? "bg-lime text-lime-foreground" : "border border-forest-foreground/60"}`}>
                  <ArrowRight className="size-3" />
                </span>
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
