import type React from "react";
import { ArrowRight, Boxes, Layers, Lightbulb, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutVideo } from "./AboutVideo";
import { SectionLabel } from "./SectionLabel";
import { Skyline } from "./Decor";

const facts = [
  { icon: Layers, value: "10", label: "Produk & Layanan" },
  { icon: Boxes, value: "16", label: "Modul Elfan System" },
  { icon: MapPin, value: "RT 06/21", label: "Surakarta" },
];

const missions = [
  {
    title: "Internet sehat untuk semua",
    desc: "Memfasilitasi masyarakat dengan internet sehat sebagai sarana belajar dan pengembangan ekonomi.",
  },
  {
    title: "Edukasi & pemberdayaan",
    desc: "Mengedukasi masyarakat dan memberdayakan lingkungan dalam memanfaatkan IT untuk pendidikan dan ekonomi.",
  },
  {
    title: "Informasi produk IT",
    desc: "Memberikan informasi produk IT — hardware maupun aplikasi — untuk media pendidikan dan pengembangan ekonomi.",
  },
  {
    title: "Pusat belajar IT & entrepreneur",
    desc: "Solusi pusat belajar IT dan entrepreneur yang komprehensif dan efisien bagi masyarakat.",
  },
];

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-section-tint py-12">
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
            <div data-reveal="clip">
              <AboutVideo />
            </div>
          </div>
        </div>

        <div data-reveal="up">
          <SectionLabel lead="Tentang" rest="Kampung IT Solo" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Dari Kampung,
            <br />
            untuk Masa Depan Digital.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink">
            Kampung IT Solo adalah pusat riset dan pengembangan pendidikan berbasis Adab &amp; IT di
            RT 06/RW 21 Surakarta. Kami bagian dari Bin Alfan Group — bersama Elfan Bookless
            Library, Alwustho Technologies, TUK, dan Alkubro — yang menumbuhkan kampung sebagai
            laboratorium peradaban digital.
          </p>
          <Button variant="lime" size="pillSm" className="mt-6">
            Kenal Lebih Dekat <ArrowRight />
          </Button>
        </div>

        <ul
          data-reveal="stagger"
          className="flex gap-6 border-border lg:flex-col lg:border-l lg:pl-8"
        >
          {facts.map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-lime/15">
                <Icon className="size-5 text-forest" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xl font-extrabold text-navy">{value}</p>
                <p className="text-[0.7rem] text-ink">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Visi, misi, dan goal */}
      <div className="relative mx-auto mt-12 grid max-w-7xl gap-5 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="eyebrow flex items-center gap-2">
              <Target className="size-4" /> Visi
            </span>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">
              Mewujudkan lingkungan RT 06/RW 21 sebagai pusat eduwisata IT untuk pendidikan dan
              pengembangan ekonomi kreatif maupun konvensional berbasis online.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="eyebrow flex items-center gap-2">
              <Lightbulb className="size-4" /> Goal
            </span>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">
              Meningkatkan keilmuan dan taraf ekonomi masyarakat sekitar dengan menghasilkan cash
              yang nyata bagi setiap orang yang terlibat di dalamnya.
            </p>
          </div>
        </div>

        <div
          data-reveal="up"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:p-8"
        >
          <span className="eyebrow">Misi</span>
          <ol className="mt-4 grid gap-5 sm:grid-cols-2">
            {missions.map(({ title, desc }, i) => (
              <li key={title} className="flex gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-lime/20 text-[0.7rem] font-extrabold text-forest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[0.82rem] font-bold leading-snug text-navy">{title}</h3>
                  <p className="mt-1 text-[0.75rem] leading-relaxed text-ink">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
