import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Layers, GraduationCap, Lightbulb, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GOAL, MISSIONS, VISION } from "@/data/organization";
import { AboutVideo } from "./AboutVideo";
import { SectionLabel } from "./SectionLabel";
import { Skyline } from "./Decor";

const facts = [
  { icon: Layers, value: "10", label: "Produk & Layanan" },
  { icon: Boxes, value: "16", label: "Modul Elfan System" },
  { icon: GraduationCap, value: "6", label: "Program & Kegiatan" },
  { icon: MapPin, value: "Sukoharjo", label: "Solo Raya" },
];

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden bg-section-tint py-16 lg:py-20">
      <Skyline className="mask-fade-left absolute bottom-0 right-0 hidden h-[88%] w-[56%] text-sky opacity-[0.09] lg:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-14 lg:px-12">
        <div className="relative">
          {/* Panel gradien yang bergeser tipis di belakang kartu video, jadi aksen hijau
              yang menyatu dengan bingkai alih-alih bentuk terpisah. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden translate-x-4 translate-y-4 rounded-[2rem] bg-gradient-brand opacity-90 sm:block"
          />
          {/* Aksen titik hijau di sudut luar kartu */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-7 -top-7 hidden size-24 rounded-2xl bg-dots opacity-60 lg:block"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] bg-navy shadow-card ring-1 ring-navy/10">
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
            Cemani, Grogol, Sukoharjo. Kami bagian dari Bin Alfan Group bersama Elfan Bookless
            Library, Alwustho Technologies, TUK, dan Alkubro, yang menumbuhkan kampung sebagai
            laboratorium peradaban digital.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="lime" size="pillSm" asChild>
              <a href="#visi-misi">
                Kenal Lebih Dekat <ArrowRight />
              </a>
            </Button>
            <Link
              to="/tentang"
              className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
            >
              Selengkapnya tentang kami <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Band angka */}
      <ul
        data-reveal="stagger"
        className="relative mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-6 lg:grid-cols-4 lg:px-12"
      >
        {facts.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime/15">
              <Icon className="size-5 text-forest" strokeWidth={2} />
            </span>
            <div>
              <p
                className="text-3xl font-extrabold leading-none tracking-tight text-navy lg:text-4xl"
                data-count={/^\d+$/.test(value) ? value : undefined}
              >
                {value}
              </p>
              <p className="mt-1.5 text-[0.72rem] font-medium text-ink">{label}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Visi, misi, dan goal */}
      <div
        id="visi-misi"
        className="relative mx-auto mt-8 grid max-w-7xl gap-5 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12"
      >
        <div data-reveal="stagger" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="eyebrow flex items-center gap-2">
              <Target className="size-4" /> Visi
            </span>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">{VISION}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="eyebrow flex items-center gap-2">
              <Lightbulb className="size-4" /> Goal
            </span>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-navy">{GOAL}</p>
          </div>
        </div>

        <div
          data-reveal="up"
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:p-8"
        >
          <span className="eyebrow">Misi</span>
          <ol className="mt-4 grid gap-5 sm:grid-cols-2">
            {MISSIONS.map(({ title, desc }, i) => (
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
