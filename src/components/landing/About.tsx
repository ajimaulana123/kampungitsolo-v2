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

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.25fr_1fr_0.55fr] lg:px-12">
        <div className="relative">
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <clipPath id="about-photo-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.15,0 L0.97,0 Q1,0 0.995,0.04 L0.885,0.96 Q0.88,1 0.85,1 L0.03,1 Q0,1 0.005,0.96 L0.115,0.04 Q0.12,0 0.15,0 Z" />
              </clipPath>
            </defs>
          </svg>
          {/* Green blades along the photo's slanted left edge */}
          <div className="pointer-events-none absolute -left-[28%] -top-[22%] hidden h-[38%] w-[30%] -skew-x-12 rounded-2xl bg-gradient-blade-lime md:block" />
          <div className="pointer-events-none absolute left-[calc(8.7%-22px)] top-0 hidden h-[55%] w-3.5 -skew-x-12 rounded-full bg-gradient-brand md:block" />
          <div className="pointer-events-none absolute -left-[32%] top-[42%] hidden h-[62%] w-[29%] -skew-x-12 rounded-2xl bg-gradient-blade-forest md:block" />
          <div className="relative overflow-hidden [clip-path:url(#about-photo-clip)]">
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
