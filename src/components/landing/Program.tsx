import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CircleCheck, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import { LeafSwoosh } from "./Decor";
import { publishedPrograms } from "@/data/programs";
import workshop from "@/assets/program-workshop.jpg";

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden bg-section-tint py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.25fr]">
        <div className="relative">
          <div className="absolute -right-2 top-6 hidden h-[85%] w-10 -skew-x-[14deg] rounded-xl bg-lime/40 lg:block" />
          <div className="relative overflow-hidden rounded-r-2xl clip-slant-right">
            <div data-reveal="clip">
              <img
                src={workshop}
                alt="Peserta pelatihan digital Kampung IT Solo belajar bersama"
                loading="lazy"
                width={1280}
                height={768}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
          <a
            href="#tentang"
            aria-label="Tonton video profil Kampung IT Solo"
            className="absolute bottom-8 left-12 grid size-12 place-items-center rounded-full bg-lime text-lime-foreground shadow-card transition-transform hover:scale-105"
          >
            <Play className="size-4 translate-x-0.5 fill-current" />
          </a>
        </div>

        <div className="grid gap-8 px-6 lg:grid-cols-[1.55fr_0.75fr] lg:pr-12">
          <div data-reveal="right">
            <SectionLabel lead="Program" rest="& Kegiatan" />
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Belajar, Berkarya,
              <br />
              dan Berkolaborasi.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Program eduwisata IT untuk desa, UMKM, pelajar, dan komunitas, dari pelatihan
              keterampilan digital hingga implementasi sistem.
            </p>
            <ul data-reveal="stagger" className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {publishedPrograms.map((p) => (
                <li key={p.slug} className="flex items-center gap-2 text-[0.78rem] text-ink">
                  <CircleCheck className="size-4 shrink-0 fill-lime text-background" />
                  <Link
                    to="/program/$slug"
                    params={{ slug: p.slug }}
                    className="hover:text-forest hover:underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-lg text-[0.72rem] leading-relaxed text-muted-foreground">
              Kelas reguler seperti kelas coding akhir pekan dan literasi digital bersifat terbuka.
              Pendampingan desa digital, workshop UMKM, dan implementasi modul disesuaikan dengan
              ruang lingkup.
            </p>
            <Button variant="navy" size="pillSm" className="mt-7" asChild>
              <Link to="/program">
                Lihat Program Lengkap <ArrowRight />
              </Link>
            </Button>
          </div>

          <blockquote
            data-reveal="pop"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            className="relative self-center overflow-hidden rounded-2xl border border-border bg-card p-6 pb-14 shadow-card"
          >
            <LeafSwoosh className="absolute -bottom-px -right-px h-20 w-36" />
            <Quote className="size-7 rotate-180 fill-forest text-forest" />
            <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-navy">
              “Kampung IT Solo adalah bukti nyata bahwa teknologi bisa memberdayakan masyarakat.”
            </p>
            <footer className="mt-4 text-[0.7rem] text-muted-foreground">Mitra Kolaborasi</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
