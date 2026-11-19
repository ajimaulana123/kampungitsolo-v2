import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import { products } from "@/data/products";

export function Ecosystem() {
  return (
    <section id="ekosistem" className="relative overflow-hidden py-14">
      <div className="pointer-events-none absolute inset-0 bg-streaks" />
      <div className="pointer-events-none absolute right-6 top-14 hidden h-20 w-16 bg-dots opacity-70 lg:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.6fr] lg:px-12">
        <div data-reveal="up">
          <SectionLabel lead="Ekosistem" rest="& Inovasi" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Ekosistem Teknologi
            <br />
            untuk Masyarakat.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink">
            10 produk inovatif, dari AI dan energi hijau hingga IoT, yang memberdayakan pendidikan
            dan kehidupan sehari-hari.
          </p>
          <Button variant="navy" size="pillSm" className="mt-6" asChild>
            <a href="https://wa.me/6281235666665" target="_blank" rel="noreferrer">
              Konsultasi Produk <ArrowRight />
            </a>
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
    const n = (i + products.length) % products.length;
    setActive(n);
    const t = track.current;
    const el = t?.children[n] as HTMLElement | undefined;
    if (t && el)
      t.scrollTo({
        left: el.offsetLeft - (t.clientWidth - el.clientWidth) / 2,
        behavior: "smooth",
      });
  };

  return (
    <div className="min-w-0">
      <div
        ref={track}
        data-reveal="stagger"
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map(({ slug, image, name, cardDesc, featured }, i) => {
          const on = i === active;
          return (
            <Link
              key={slug}
              to="/products/$slug"
              params={{ slug }}
              className={`group relative flex h-56 w-44 shrink-0 snap-center flex-col justify-end overflow-hidden rounded-2xl p-4 text-left text-forest-foreground shadow-card transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lift ${
                on ? "ring-4 ring-lime/70" : "ring-1 ring-border"
              }`}
            >
              <img
                src={image}
                alt=""
                width={992}
                height={672}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-[scale] duration-700 ease-out group-hover:scale-110"
              />
              <span
                className={`absolute inset-0 transition-opacity duration-300 ${on ? "bg-gradient-to-t from-forest via-forest/70 to-forest/10" : "bg-gradient-to-t from-navy via-navy/60 to-navy/5"}`}
              />
              {featured && (
                <span className="absolute left-3 top-3 rounded-full bg-lime px-2 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-wide text-lime-foreground">
                  Featured 2026
                </span>
              )}
              <span className="relative">
                <h3 className="text-sm font-bold leading-tight">{name}</h3>
                <p className="mt-1.5 text-[0.7rem] leading-snug opacity-85">{cardDesc}</p>
                <span
                  className={`mt-3 grid size-6 place-items-center rounded-full transition-[background-color,color,translate] duration-300 group-hover:translate-x-1 ${on ? "bg-lime text-lime-foreground" : "border border-forest-foreground/60 group-hover:border-lime group-hover:bg-lime group-hover:text-lime-foreground"}`}
                >
                  <ArrowRight className="size-3" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {products.map((it, i) => (
            <button
              key={it.slug}
              type="button"
              aria-label={`Tampilkan ${it.name}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-forest" : "w-2 bg-border"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => go(active - 1)}
            className="grid size-9 place-items-center rounded-full border border-border bg-card text-navy transition-colors hover:border-forest hover:text-forest"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            onClick={() => go(active + 1)}
            className="grid size-9 place-items-center rounded-full bg-forest text-forest-foreground transition-opacity hover:opacity-90"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
