import type React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "./SectionLabel";
import seminar from "@/assets/impact-seminar.jpg";
import umkm from "@/assets/impact-umkm.jpg";
import team from "@/assets/impact-team.jpg";
import city from "@/assets/impact-city.jpg";
import classroom from "@/assets/about-class.jpg";

const cases = [
  {
    no: "01",
    client: "Desa Grogol, Weru — Sukoharjo",
    project: "Pelatihan Desa Digital",
    year: "2024",
    desc: "Mendampingi perangkat desa dan karang taruna membangun budaya kerja digital — dari surat menyurat hingga publikasi kegiatan desa.",
  },
  {
    no: "02",
    client: "UMKM Pasar Solo Raya",
    project: "Workshop Foto & Video Produk",
    year: "2023–2024",
    desc: "Belasan pelaku UMKM kuliner dan kerajinan dilatih membuat foto dan video produk berkualitas marketplace — hanya dengan ponsel.",
  },
  {
    no: "03",
    client: "Komunitas Pelajar SMK",
    project: "Kelas Coding Akhir Pekan",
    year: "Berjalan",
    desc: "Kelas mingguan pemrograman web yang terbuka untuk pelajar mana pun. Lulusan kelas mengisi ulang kelas berikutnya.",
  },
  {
    no: "04",
    client: "Karang Taruna & Pemuda Desa",
    project: "Literasi Media & Keamanan Digital",
    year: "2023",
    desc: "Sesi diskusi keliling tentang hoaks, jejak digital, dan etika bermedia sosial untuk pemuda di beberapa kelurahan.",
  },
];

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
    <section id="dampak" className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[0.85fr_1.2fr] lg:px-12">
        <div data-reveal="up">
          <SectionLabel lead="Jejak" rest="di Lapangan" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Pekerjaan kami,
            <br />
            dicatat oleh kampung.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
            Dari desa, UMKM, pelajar SMK, hingga karang taruna — program Kampung IT Solo berjalan
            bersama warga Solo Raya dan sekitarnya.
          </p>
          <Button variant="lime" size="pillSm" className="mt-6">
            Lihat Dampak Kami <ArrowRight />
          </Button>
        </div>

        <div className="relative lg:ml-4">
          <div className="pointer-events-none absolute -bottom-2 -left-10 hidden h-24 w-12 bg-dots lg:block" />
          <div className="grid h-[300px] grid-cols-[1fr_1fr_0.9fr] grid-rows-2 gap-2">
            <Photo src={seminar} alt="Seminar teknologi" w={992} h={672} />
            <Photo src={umkm} alt="Pendampingan UMKM" w={992} h={672} delay={120} />
            <div className="row-span-2">
              <Photo src={city} alt="Balai Kota Surakarta" w={752} h={896} delay={240} />
            </div>
            <Photo src={team} alt="Gerakan literasi digital" w={992} h={672} delay={120} />
            <Photo src={classroom} alt="Kelas pemrograman" w={1280} h={768} delay={240} />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-12">
        <div data-reveal="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map(({ no, client, project, year, desc }) => (
            <article
              key={no}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
