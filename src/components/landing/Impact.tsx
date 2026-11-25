import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProgram } from "@/data/programs";
import { publishedStories } from "@/data/stories";
import { SectionLabel } from "./SectionLabel";
import { TestimonialSlider, type TestimonialItem } from "./TestimonialSlider";
import academyClass from "@/assets/academy/academy-class.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import solarComponents from "@/assets/solar/solar-components.jpg";
import solarPanels from "@/assets/solar/solar-panels.jpg";
import systemHandover from "@/assets/system/system-handover.jpg";

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
      "Kampung IT Solo sambut tamu kehormatan dari Yaman, tingkatkan kerja sama internasional.",
    summary:
      "Delegasi dari Yaman meninjau langsung ekosistem Kampung IT Solo. Kunjungan ini membuka peluang kerja sama lintas negara di bidang pendidikan dan teknologi.",
    name: "Delegasi Yaman",
    role: "Kunjungan Kehormatan",
    organization: "Kampung IT Solo",
    client: "Kunjungan Internasional",
    instagramUrl: "https://www.instagram.com/p/DA2LRnFS6pO/",
  },
  {
    quote:
      "Ekosistem Kampung IT adalah perwujudan Smart Village yang sesungguhnya, dengan pemanfaatan inovasi teknologi yang luar biasa dan menginspirasi.",
    summary:
      "Dekan Fakultas Teknologi UNISSULA menilai Kampung IT sebagai contoh Smart Village yang dibangun dari inovasi sederhana namun berdampak luas.",
    name: "M. Qomaruddin, S.T., M.Sc., Ph.D.",
    role: "Dekan Fakultas Teknologi",
    organization: "UNISSULA",
    client: "Smart Village",
    instagramUrl: "https://www.instagram.com/p/DZ3vGacSDYT/",
  },
  {
    quote:
      "Kampung IT dapat menjadi role model dalam integrasi teknologi kecerdasan buatan dan energi terbarukan.",
    summary:
      "Rektor UICI melihat model Kampung IT sebagai rujukan integrasi AI dan energi terbarukan untuk pengembangan kampus dan pesantren.",
    name: "Prof. Dr. Ir. Asep Saefuddin, M.Sc.",
    role: "Rektor",
    organization: "UICI",
    client: "Pendidikan Tinggi",
    instagramUrl: "https://www.instagram.com/p/DZwGnXgSMHi/",
  },
  {
    quote:
      "Kampung IT bukan sekadar tempat belajar programming, melainkan wadah untuk menciptakan sistem lintas platform yang komprehensif.",
    summary:
      "Alumni DPRD Jawa Barat menyoroti pentingnya kesiapan SDM dan sistem lintas platform dalam membangun peradaban teknologi.",
    name: "Ir. H. Abdul Hadi Wijaya, M.Sc.",
    role: "Alumni DPRD Jawa Barat",
    client: "Transformasi Digital",
    instagramUrl: "https://www.instagram.com/p/DZtgV7sSeZ7/",
  },
  {
    quote:
      "Kampung IT adalah bukti nyata kedaulatan energi: memanfaatkan matahari, menyimpannya, dan menggunakannya untuk kemaslahatan serta pendidikan masyarakat.",
    summary:
      "Dekan Fakultas Ekologi Manusia IPB University menyebut lima gedung Kampung IT sudah mandiri memanfaatkan energi matahari.",
    name: "Prof. Dr. Sofyan Sjaf, S.Pt., M.Si.",
    role: "Dekan Fakultas Ekologi Manusia",
    organization: "IPB University",
    client: "Kedaulatan Energi",
    instagramUrl: "https://www.instagram.com/p/DZrDR4vSKt1/",
  },
  {
    quote: "Tempat belajar terbaik untuk memahami dunia yang akan datang.",
    summary:
      "Kaprodi Fakultas Teknik UNISSULA menekankan pembelajaran praktis agar anak didik adaptif terhadap teknologi masa depan.",
    name: "Dr. Gunawan, S.T., M.T.",
    role: "Kaprodi Fakultas Teknik",
    organization: "UNISSULA",
    client: "Pendidikan Teknologi",
    instagramUrl: "https://www.instagram.com/p/DZ6YVgNyiT6/",
  },
  {
    quote:
      "Kompetensi setara S1 tidak harus memakan waktu 4 tahun. Cukup 6 bulan pembelajaran konkret, santri sudah bisa menguasai teknologi dan aplikasinya.",
    summary:
      "Ketua Umum DDII menyoroti percepatan kompetensi santri melalui pembelajaran teknologi yang konkret dan aplikatif.",
    name: "Dr. Adian Husaini, SKH, M.Si., Ph.D.",
    role: "Ketua Umum",
    organization: "Dewan Dakwah Islamiyah Indonesia",
    client: "Pendidikan Alternatif",
    instagramUrl: "https://www.instagram.com/p/DZymoUCyZ-O/",
  },
  {
    quote:
      "Jazakumullah dengan sinerginya. Semoga inovasi Kampung IT bisa dikembangkan di masjid pantai Bali.",
    summary:
      "Catatan ini menyampaikan harapan agar inovasi Kampung IT dapat dikembangkan di masjid pantai Bali.",
    name: "Masjid Pantai Bali",
    role: "Sinergi Inovasi",
    organization: "Kampung IT Solo",
    client: "Sinergi Wilayah",
    instagramUrl: "https://www.instagram.com/p/DBh_r7BSoqt/",
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
          <div className="grid h-[360px] grid-cols-2 grid-rows-3 gap-2 sm:h-[300px] sm:grid-cols-[1fr_1fr_0.9fr] sm:grid-rows-2">
            <Photo src={heroBuilding} alt="Gedung Kampung IT Solo di Surakarta" w={1280} h={960} />
            <Photo
              src={systemHandover}
              alt="Staf sekolah melihat perangkat bersama tim pendamping ELFAN System"
              w={1200}
              h={900}
              delay={120}
            />
            <div className="row-span-2">
              <Photo
                src={academyClass}
                alt="Peserta ELFAN AI Academy belajar dengan laptop di kelas"
                w={1200}
                h={900}
                delay={240}
              />
            </div>
            <Photo
              src={solarPanels}
              alt="Panel surya pada atap bangunan"
              w={1200}
              h={900}
              delay={120}
            />
            <Photo
              src={solarComponents}
              alt="Inverter, proteksi, dan baterai penyimpanan di Open Lab Ufuk Hijau Energi"
              w={1200}
              h={900}
              delay={240}
            />
          </div>
          <p className="mt-3 text-[0.68rem] leading-relaxed text-ink/70">
            Dokumentasi:{" "}
            <a
              href="https://elfanaiacademy.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest"
            >
              ELFAN
            </a>
            ,{" "}
            <a
              href="https://kampungitsolo.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest"
            >
              Kampung IT Solo
            </a>
            , dan{" "}
            <a
              href="https://ufukhijau.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-forest underline decoration-forest/30 underline-offset-2 hover:decoration-forest"
            >
              Ufuk Hijau Energi
            </a>
            .
          </p>
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
