import { ArrowRight, Lightbulb, Play, Briefcase, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import { Skyline } from "./Decor";
import classroom from "@/assets/about-class.jpg";

const stats = [
  { icon: Briefcase, value: "50+", label: "Proyek Inovasi" },
  { icon: Lightbulb, value: "100+", label: "Mitra & Kolaborator" },
  { icon: Handshake, value: "10+", label: "Program Unggulan" },
];

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-section-tint py-10">
      <Skyline className="mask-fade-left absolute bottom-0 right-0 hidden h-[88%] w-[56%] text-sky opacity-[0.09] lg:block" />
      {/* left green blades */}
      <div className="pointer-events-none absolute -left-10 top-0 h-20 w-24 -skew-x-[35deg] bg-lime" />
      <div className="pointer-events-none absolute -left-16 top-24 hidden h-44 w-28 -skew-x-[35deg] bg-forest md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_1fr_0.55fr] lg:px-12">
        <div className="relative">
          <div className="absolute -bottom-3 -left-3 h-2/3 w-2/3 -skew-x-[20deg] rounded-2xl bg-forest" />
          <div className="relative overflow-hidden rounded-2xl clip-slant-both">
            <img src={classroom} alt="Kelas pemrograman di Kampung IT Solo" loading="lazy" width={1280} height={768} className="aspect-[16/9] w-full object-cover" />
            <button aria-label="Putar video" className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background/95 text-forest shadow-card transition-transform hover:scale-105">
              <Play className="size-5 translate-x-0.5 fill-current" />
            </button>
          </div>
        </div>

        <div>
          <SectionLabel lead="Tentang" rest="Kampung IT Solo" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Dari Kampung,
            <br />
            untuk Masa Depan Digital.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            Berawal dari semangat membangun masyarakat melek teknologi, Kampung IT Solo kini menjadi
            ekosistem inovasi yang menghubungkan pendidikan, riset, dan teknologi untuk kemajuan
            bersama.
          </p>
          <Button variant="lime" size="pillSm" className="mt-6">
            Kenal Lebih Dekat <ArrowRight />
          </Button>
        </div>

        <ul className="flex gap-6 border-border lg:flex-col lg:border-l lg:pl-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/15">
                <Icon className="size-5 fill-lime/30 text-forest" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xl font-extrabold text-navy">{value}</p>
                <p className="text-[0.7rem] text-ink">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
