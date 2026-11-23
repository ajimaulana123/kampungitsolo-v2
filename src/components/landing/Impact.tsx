import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgram } from "@/data/programs";
import { publishedStories } from "@/data/stories";
import { SectionLabel } from "./SectionLabel";
import { TestimonialSlider, type TestimonialItem } from "./TestimonialSlider";
import seminar from "@/assets/impact-seminar.jpg";
import umkm from "@/assets/impact-umkm.jpg";
import team from "@/assets/impact-team.jpg";
import city from "@/assets/impact-city.jpg";
import classroom from "@/assets/about-class.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const cases = publishedStories.map((story, index) => ({
  no: String(index + 1).padStart(2, "0"),
  client: story.client,
  project: getProgram(story.programSlug)?.name ?? "Program Kampung IT Solo",
  year: story.year,
  desc: story.cardDesc,
  slug: story.slug,
}));

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Santri tidak hanya belajar ilmu agama, tapi di sini dilatih memahami kecerdasan buatan (AI) dan teknologi terapan dengan adab yang tetap terjaga. Ini bekal kemandirian nyata untuk generasi santri.",
    name: "Pembina Santri",
    role: "Pengasuh & Instruktur",
    organization: "IDBC & Elfan AI Academy",
    client: "Pesantren Digital",
    image: classroom,
    imageAlt: "Santri dan pelajar mengikuti sesi teknologi di laboratorium Kampung IT Solo",
    avatar: avatar1,
  },
  {
    quote:
      "Dulu arsip dan pengumuman warga tersebar di berkas fisik dan grup chat. Setelah pendampingan dari tim Kampung IT Solo, alur kerja digital desa jadi tertata rapi dan layanan surat-menyurat warga jauh lebih cepat.",
    name: "Perangkat Desa & Pegiat Komunitas",
    role: "Mitra Pelatihan Desa Digital",
    organization: "Sukoharjo",
    client: "Pemerintah Desa",
    image: team,
    imageAlt: "Pendampingan kerja digital dan pengelolaan informasi bersama perangkat desa",
    avatar: avatar2,
  },
  {
    quote:
      "Tempat belajar teknologi yang sangat inspiratif di Solo Raya. Fasilitas lab dan perpustakaan digitalnya lengkap, suasananya nyaman, dan mentor membimbing langkah demi langkah dengan ramah.",
    name: "Pengunjung Studi Banding & Eduwisata",
    role: "Ulasan Terverifikasi",
    organization: "Google Maps",
    client: "Eduwisata Solo Raya",
    rating: 5,
    image: heroBuilding,
    imageAlt: "Gedung pusat eduwisata IT dan laboratorium peradaban Kampung IT Solo",
    avatar: avatar3,
  },
  {
    quote:
      "Sebelumnya foto katalog kami gelap dan kurang meyakinkan di marketplace. Setelah ikut workshop, kami bisa foto dan buat video produk yang bersih hanya bermodal kamera ponsel sendiri.",
    name: "Pelaku Usaha Batik",
    role: "Peserta Workshop UMKM",
    organization: "Solo Raya",
    client: "UMKM Solo Raya",
    image: umkm,
    imageAlt: "Praktik pengambilan foto dan video produk UMKM menggunakan smartphone",
    avatar: avatar4,
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

        <div className="mt-10">
          <TestimonialSlider items={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}
