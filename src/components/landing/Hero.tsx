import { Activity, ArrowRight, Building2, Layers, MapPin, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LeafSwoosh } from "./Decor";
import building from "@/assets/hero-building.jpg";

const facts = [
  { icon: MapPin, label: "Sukoharjo · Solo Raya" },
  { icon: Building2, label: "Bin Alfan Group" },
  { icon: Activity, label: "Senin-Sabtu" },
];

export function Hero() {
  return (
    <div id="beranda" className="relative overflow-hidden pt-20">
      {/* Soft diagonal light bands behind the hero */}
      <div className="pointer-events-none absolute inset-0 bg-streaks opacity-80" />

      {/* Building photo: curved notch under the nav links, slanted left edge */}
      <div
        data-parallax="0.08"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[62%] md:block"
      >
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <clipPath id="hero-photo-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.6,0 L1,0 L1,1 L0,1 L0.31,0.215 C0.33,0.165 0.355,0.14 0.405,0.14 L0.525,0.14 C0.555,0.14 0.57,0.125 0.578,0.095 L0.588,0.035 C0.592,0.012 0.595,0 0.6,0 Z" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute inset-0 [clip-path:url(#hero-photo-clip)]">
          <img
            src={building}
            alt="Gedung Kampung IT Solo"
            width={1280}
            height={960}
            fetchPriority="high"
            className="mask-fade-bottom h-full w-full object-cover object-[30%_center]"
          />
          {/* Soft light band along the slanted edge */}
          <svg
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full fill-background"
            aria-hidden="true"
          >
            <path
              d="M0,1 L0.31,0.215 C0.33,0.165 0.355,0.14 0.405,0.14 L0.42,0.14 L0.07,1 Z"
              opacity="0.6"
            />
            <path d="M0.07,1 L0.42,0.14 L0.45,0.14 L0.11,1 Z" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Green leaf swooshes */}
      <LeafSwoosh className="animate-sway absolute -bottom-1 right-0 hidden h-36 w-[42%] md:block" />
      <LeafSwoosh flip className="absolute -bottom-2 left-0 h-14 w-40 opacity-90" />

      <section className="relative z-10 mx-auto max-w-[112rem] px-6 pb-20 pt-6 lg:px-12 lg:pb-28">
        <div className="max-w-xl xl:max-w-2xl">
          <span className="inline-flex animate-rise items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[0.7rem] font-bold text-navy">
            <span className="animate-pulse-dot size-2 rounded-full bg-lime" />
            Laboratorium Peradaban · Berbasis IT
          </span>
          <h1
            className="mt-4 animate-rise text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "120ms" }}
          >
            Kampung IT Solo.
            <br />
            Lab. Peradaban
            <br />
            <span className="text-gradient-headline">Berbasis IT.</span>
          </h1>
          <p
            className="mt-5 max-w-lg animate-rise text-[0.95rem] leading-relaxed text-ink"
            style={{ animationDelay: "240ms" }}
          >
            Pusat riset dan pengembangan pendidikan berbasis Adab &amp; IT di Cemani, Grogol,
            Sukoharjo. Kami membuka{" "}
            <Link to="/eduwisata" className="font-semibold text-forest hover:underline">
              eduwisata IT
            </Link>{" "}
            untuk sekolah, pesantren, dan komunitas, bagian dari Bin Alfan Group bersama Elfan
            Bookless Library, Alwustho Technologies, TUK, dan Alkubro.
          </p>
          <div
            className="mt-8 flex animate-rise flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Button variant="forest" size="pill" asChild>
              <a href="#reservasi">
                Reservasi Kunjungan <ArrowRight />
              </a>
            </Button>
            <Button variant="outlinePill" size="pill" asChild>
              <a href="#ekosistem">
                Jelajahi Ekosistem <Layers />
              </a>
            </Button>
          </div>

          <ul
            className="mt-7 flex animate-rise flex-wrap gap-2"
            style={{ animationDelay: "480ms" }}
          >
            {facts.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[0.72rem] font-semibold text-ink"
              >
                <Icon className="size-3.5 text-forest" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={building}
          alt="Gedung Kampung IT Solo"
          width={1280}
          height={960}
          className="mt-10 w-full rounded-2xl object-cover md:hidden"
        />

        {/* Stat card */}
        <div
          className="relative z-10 mt-6 flex w-fit animate-rise items-center gap-4 rounded-2xl bg-card px-5 py-4 shadow-card md:absolute md:bottom-10 md:right-8 md:mt-0 lg:right-12"
          style={{ animationDelay: "600ms" }}
        >
          <span className="grid size-11 place-items-center rounded-xl bg-lime/15">
            <Layers className="size-6 text-forest" />
          </span>
          <div>
            <p className="text-xl font-extrabold text-navy" data-count="10">
              10
            </p>
            <p className="text-[0.68rem] text-ink">Produk &amp; Layanan</p>
          </div>
          <TrendingUp className="ml-3 size-6 text-lime" />
        </div>
      </section>
    </div>
  );
}
