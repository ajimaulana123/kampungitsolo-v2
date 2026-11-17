import { ArrowRight, Play, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "./Navbar";
import building from "@/assets/hero-building.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";

export function Hero() {
  return (
    <div id="beranda" className="relative overflow-hidden">
      {/* Building photo, bleeding under the navbar and fading into the page */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[60%] md:block">
        <img
          src={building}
          alt="Gedung Kampung IT Solo"
          width={1280}
          height={960}
          className="mask-fade-left mask-fade-bottom h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent" />
      </div>

      {/* Green swooshes */}
      <div className="pointer-events-none absolute -bottom-6 right-0 hidden h-40 w-[34%] md:block">
        <div className="absolute bottom-6 right-0 h-16 w-full origin-bottom-right -skew-x-[40deg] bg-gradient-swoosh opacity-90" />
        <div className="absolute bottom-0 right-0 h-8 w-2/3 origin-bottom-right -skew-x-[40deg] bg-forest" />
      </div>

      <Navbar />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-12 lg:pb-28">
        <div className="max-w-xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-[0.7rem] font-bold text-navy">
            <span className="size-2 rounded-full bg-lime" />
            Digital Innovation Village
          </span>
          <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Membangun
            <br />
            Peradaban Digital,
            <br />
            <span className="text-gradient-headline">Dimulai dari Kampung.</span>
          </h1>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-ink">
            Kampung IT Solo adalah pusat edukasi, inovasi, dan pemberdayaan masyarakat berbasis
            teknologi di Kota Solo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="forest" size="pill" asChild>
              <a href="#ekosistem">
                Jelajahi Ekosistem <ArrowRight />
              </a>
            </Button>
            <Button variant="outlinePill" size="pill">
              <Play className="fill-current" /> Tonton Video
            </Button>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[a1, a2, a3, a4].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={96}
                  height={96}
                  className="size-9 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-xs leading-snug text-ink">
              Bersama membangun
              <br />
              masa depan digital
            </p>
          </div>
        </div>

        <img
          src={building}
          alt="Gedung Kampung IT Solo"
          width={1280}
          height={960}
          className="mt-10 w-full rounded-2xl object-cover md:hidden"
        />

        {/* Stat card */}
        <div className="relative z-10 mt-6 flex w-fit items-center gap-4 rounded-2xl bg-card px-5 py-4 shadow-card md:absolute md:bottom-10 md:right-8 md:mt-0 lg:right-12">
          <Users className="size-8 text-forest" />
          <div>
            <p className="text-xl font-extrabold text-navy">10K+</p>
            <p className="text-[0.68rem] text-ink">Masyarakat Teredukasi</p>
          </div>
          <TrendingUp className="ml-3 size-6 text-lime" />
        </div>
      </section>
    </div>
  );
}
