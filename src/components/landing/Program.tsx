import { ArrowRight, CircleCheck, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import workshop from "@/assets/program-workshop.jpg";

const programs = [
  "Pelatihan Coding & AI",
  "Workshop & Seminar",
  "Pemberdayaan UMKM",
  "Riset & Pengembangan",
  "Desa Digital & Literasi Teknologi",
  "Komunitas Teknologi",
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute -bottom-4 right-0 h-24 w-40 -skew-x-[40deg] bg-gradient-swoosh" />
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.25fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-r-2xl clip-slant-right">
            <img src={workshop} alt="Peserta program belajar bersama" loading="lazy" width={1280} height={768} className="aspect-[16/9] w-full object-cover" />
          </div>
          <button aria-label="Putar video" className="absolute bottom-8 left-12 grid size-12 place-items-center rounded-full bg-lime text-lime-foreground shadow-card transition-transform hover:scale-105">
            <Play className="size-4 translate-x-0.5 fill-current" />
          </button>
        </div>

        <div className="grid gap-8 px-6 lg:grid-cols-[1.55fr_0.75fr] lg:pr-12">
          <div>
            <SectionLabel lead="Program" rest="& Kegiatan" />
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Belajar, Berkarya,
              <br />
              dan Berkolaborasi.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Kami menghadirkan berbagai program untuk meningkatkan kompetensi digital dan
              memberdayakan masyarakat.
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {programs.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[0.78rem] text-ink">
                  <CircleCheck className="size-4 shrink-0 fill-lime text-background" />
                  {p}
                </li>
              ))}
            </ul>
            <Button variant="navy" size="pillSm" className="mt-7">
              Lihat Program Lengkap <ArrowRight />
            </Button>
          </div>

          <blockquote className="relative self-center rounded-2xl bg-surface p-6 shadow-soft">
            <Quote className="size-6 fill-forest text-forest" />
            <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-navy">
              “Kampung IT Solo adalah bukti nyata bahwa teknologi bisa memberdayakan masyarakat.”
            </p>
            <footer className="mt-4 text-[0.7rem] text-muted-foreground">— Mitra Kolaborasi</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
