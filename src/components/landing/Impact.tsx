import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgram } from "@/data/programs";
import { publishedStories } from "@/data/stories";
import { SectionLabel } from "./SectionLabel";
import seminar from "@/assets/impact-seminar.jpg";
import umkm from "@/assets/impact-umkm.jpg";
import team from "@/assets/impact-team.jpg";
import city from "@/assets/impact-city.jpg";
import classroom from "@/assets/about-class.jpg";

const cases = publishedStories.map((story, index) => ({
  no: String(index + 1).padStart(2, "0"),
  client: story.client,
  project: getProgram(story.programSlug)?.name ?? "Program Kampung IT Solo",
  year: story.year,
  desc: story.cardDesc,
  slug: story.slug,
}));

function Photo({
  src,
  alt,
  w,
  h,
  delay = 0,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  delay?: number;
}) {
  return (
    <div
      data-reveal="clip"
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className="h-full w-full overflow-hidden rounded-lg"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={w}
        height={h}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function Impact() {
  return (
    <section id="dampak" className="py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[0.85fr_1.2fr] lg:px-12">
        <div data-reveal="left">
          <SectionLabel lead="Jejak" rest="di Lapangan" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Pekerjaan kami,
            <br />
            dicatat oleh kampung.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            Dari desa, UMKM, pelajar SMK, hingga karang taruna. Program Kampung IT Solo berjalan
            bersama warga Solo Raya dan sekitarnya.
          </p>
          <Button variant="lime" size="pillSm" className="mt-6" asChild>
            <Link to="/cerita">
              Lihat Dampak Kami <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="relative lg:ml-4">
          <div className="pointer-events-none absolute -bottom-2 -left-10 hidden h-24 w-12 bg-dots lg:block" />
          <div className="grid h-[300px] grid-cols-[1fr_1fr_0.9fr] grid-rows-2 gap-2">
            <Photo
              src={seminar}
              alt="Seminar teknologi Kampung IT Solo di Surakarta"
              w={992}
              h={672}
            />
            <Photo
              src={umkm}
              alt="Pendampingan foto produk untuk UMKM Solo Raya"
              w={992}
              h={672}
              delay={120}
            />
            <div className="row-span-2">
              <Photo src={city} alt="Balai Kota Surakarta" w={752} h={896} delay={240} />
            </div>
            <Photo
              src={team}
              alt="Kegiatan literasi digital bersama warga"
              w={992}
              h={672}
              delay={120}
            />
            <Photo
              src={classroom}
              alt="Kelas pemrograman untuk pelajar SMK"
              w={1280}
              h={768}
              delay={240}
            />
          </div>
        </div>
      </div>

      <div id="cerita-dampak" className="mx-auto mt-10 max-w-7xl px-6 lg:px-12">
        <div data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map(({ no, client, project, year, desc, slug }) => (
            <Link
              key={no}
              to="/cerita/$slug"
              params={{ slug }}
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest/40 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">{no}</span>
                <span className="rounded-full bg-surface px-2.5 py-1 text-[0.65rem] font-bold text-navy">
                  {year}
                </span>
              </div>
              <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-wide text-forest">
                {client}
              </p>
              <h3 className="mt-1 text-sm font-bold leading-snug text-navy">{project}</h3>
              <p className="mt-2 text-[0.75rem] leading-relaxed text-ink">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
