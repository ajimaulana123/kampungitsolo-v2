import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, MessageCircle, Users } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { canonicalUrl, SITE_URL } from "@/lib/site";
import academyBootcampImg from "@/assets/academy/academy-bootcamp.jpg";
import academyLabImg from "@/assets/academy/academy-lab.jpg";
import academyClassImg from "@/assets/academy/academy-class.jpg";

const EDUWISATA_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Eduwisata IT Kampung IT Solo",
  serviceType: "Eduwisata IT dan studi banding",
  description:
    "Kunjungan belajar tentang pendidikan berbasis teknologi, literasi digital, dan ekosistem produk Kampung IT Solo di Sukoharjo.",
  url: canonicalUrl("/eduwisata"),
  provider: {
    "@type": "EducationalOrganization",
    name: "Kampung IT Solo",
    url: SITE_URL,
  },
  areaServed: ["Sukoharjo", "Surakarta", "Solo Raya"],
};

const learnItems = [
  {
    title: "Pendidikan berbasis teknologi",
    desc: "Melihat bagaimana Kampung IT Solo memakai platform digital, perpustakaan, dan AI untuk mendukung kegiatan belajar.",
  },
  {
    title: "Literasi digital",
    desc: "Mengenal cara kami membahas hoaks, jejak digital, dan etika bermedia sosial bersama pelajar dan komunitas.",
  },
  {
    title: "Ekosistem produk",
    desc: "Mendengar penjelasan tentang produk pendidikan, energi, dan IoT yang dikembangkan bersama mitra Bin Alfan Group.",
  },
  {
    title: "Praktik dan diskusi",
    desc: "Peserta dapat bertanya, berdiskusi, dan mencoba alur kegiatan yang sesuai dengan usia serta tujuan kunjungan.",
  },
];

const visitSteps = [
  {
    title: "Ceritakan tujuan kunjungan",
    desc: "Sampaikan asal sekolah atau komunitas, jumlah peserta, usia, dan hal yang ingin dipelajari.",
  },
  {
    title: "Susun alur dan jadwal",
    desc: "Tim menyiapkan durasi, aktivitas, dan kebutuhan ruang. Jadwal dikonfirmasi sebelum kunjungan.",
  },
  {
    title: "Kunjungan dan sesi belajar",
    desc: "Peserta mengikuti pengenalan, diskusi, dan praktik yang dipandu tim Kampung IT Solo.",
  },
  {
    title: "Refleksi dan tindak lanjut",
    desc: "Kegiatan ditutup dengan refleksi. Kalau diperlukan, sekolah atau komunitas dapat mendiskusikan program lanjutan.",
  },
];

const faqs = [
  {
    q: "Siapa yang bisa ikut eduwisata?",
    a: "Eduwisata dibuka untuk SD, SMP, SMA, SMK, pesantren, dan komunitas. Alur kegiatan disesuaikan dengan usia dan tujuan kunjungan.",
  },
  {
    q: "Berapa lama kunjungannya?",
    a: "Durasi menyesuaikan kebutuhan. Tim akan menyusun alur setelah mengetahui jumlah peserta dan hal yang ingin dipelajari.",
  },
  {
    q: "Berapa jumlah peserta yang bisa dilayani?",
    a: "Kapasitas ruangan dan pendampingan optimal hingga maksimal 35 peserta per sesi agar sesi praktik dan diskusi berjalan efektif.",
  },
  {
    q: "Apakah ada biaya?",
    a: "Biaya kunjungan fleksibel menyesuaikan kebutuhan alur dan konsumsi kegiatan. Rincian penawaran paket disampaikan langsung via WhatsApp sebelum jadwal dikonfirmasi.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Isi formulir reservasi di beranda atau hubungi WhatsApp Kampung IT Solo. Sertakan asal lembaga, jumlah peserta, dan perkiraan tanggal.",
  },
];

export const Route = createFileRoute("/eduwisata")({
  head: () =>
    pageHead({
      title: "Eduwisata IT Solo: Studi Banding | Kampung IT Solo",
      description:
        "Eduwisata IT untuk sekolah, pesantren, dan komunitas di Cemani, Grogol, Sukoharjo. Kenali program, produk, dan cara belajar Kampung IT Solo.",
      path: "/eduwisata",
    }),
  component: EduwisataPage,
});

function EduwisataPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Eduwisata IT"
        title={
          <>
            Kunjungan belajar
            <br />
            yang punya tujuan.
          </>
        }
        description="Eduwisata IT untuk sekolah, pesantren, dan komunitas. Peserta mengenal cara Kampung IT Solo memakai teknologi untuk pendidikan, literasi, dan pemberdayaan warga."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Eduwisata" }]}
        actions={
          <>
            <Button variant="forest" size="pill" asChild>
              <Link to="/" hash="reservasi">
                Reservasi Kunjungan <CalendarCheck />
              </Link>
            </Button>
            <Button variant="outlinePill" size="pill" asChild>
              <a
                href={buildWhatsAppUrl(
                  "Halo Kampung IT Solo, saya ingin bertanya tentang eduwisata untuk lembaga kami.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Tanya Eduwisata
              </a>
            </Button>
          </>
        }
        aside={
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img
              src={academyBootcampImg}
              alt="Pemateri menyampaikan materi kepada peserta kunjungan"
              width={992}
              height={672}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
              <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                Kunjungan dengan reservasi
              </p>
              <p className="mt-1 text-sm font-bold text-navy-foreground">
                Alur disusun sesuai tujuan lembaga.
              </p>
            </div>
          </div>
        }
      />
      <JsonLd data={EDUWISATA_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Yang dipelajari</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Bukan sekadar melihat tempat.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Kunjungan diarahkan pada pertanyaan yang dibawa peserta. Sekolah yang ingin mengenal
              literasi digital mendapat alur berbeda dari komunitas yang ingin mendiskusikan
              pemberdayaan warga.
            </p>
          </div>
          <ul data-reveal="stagger" className="mt-8 grid gap-4 sm:grid-cols-2">
            {learnItems.map(({ title, desc }) => (
              <li key={title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid size-9 place-items-center rounded-full bg-lime/25 text-forest">
                  <Check className="size-4" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-navy">{title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-12">
          <div data-reveal="up">
            <p className="eyebrow">Alur kunjungan</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Dari tujuan ke pengalaman belajar.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
              Durasi, jumlah peserta, dan aktivitas disepakati sebelum kunjungan. Tidak ada paket
              kaku yang dipaksakan untuk semua lembaga.
            </p>
          </div>
          <ol data-reveal="stagger" className="grid gap-6 sm:grid-cols-2">
            {visitSteps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-lime pt-4">
                <span className="text-sm font-extrabold text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-bold leading-snug text-navy">{step.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div data-reveal="up">
            <p className="eyebrow">Untuk siapa</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Dari sekolah sampai komunitas.
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {["SD", "SMP", "SMA", "SMK", "Pesantren", "Komunitas"].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[0.72rem] font-semibold text-navy"
                >
                  <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink">
              Setiap kelompok punya kebutuhan berbeda. Tim akan menyesuaikan bahasa, contoh, dan
              aktivitas agar tetap relevan dengan peserta.
            </p>
          </div>

          <div data-reveal="clip" className="grid grid-cols-2 gap-3">
            <img
              src={academyLabImg}
              alt="Peserta menggunakan laptop di laboratorium komputer Kampung IT Solo"
              width={1280}
              height={960}
              loading="lazy"
              className="col-span-2 aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <img
              src={academyClassImg}
              alt="Peserta mengikuti kegiatan belajar di ruang kelas Kampung IT Solo"
              width={992}
              height={672}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col justify-center rounded-2xl bg-navy p-5 text-navy-foreground">
              <Users className="size-6 text-lime" />
              <p className="mt-3 text-[0.8rem] font-bold leading-snug">
                Kapasitas optimal hingga maksimal 35 peserta per sesi kunjungan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-tint py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div data-reveal="up">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Sebelum menjadwalkan kunjungan.
            </h2>
          </div>
          <div data-reveal="up" className="space-y-4">
            {faqs.map(({ q, a }, index) => (
              <details
                key={q}
                className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-start gap-3 text-[0.85rem] font-bold text-navy">
                  <span className="text-[0.7rem] font-extrabold text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {q}
                  <ArrowRight className="ml-auto size-4 shrink-0 text-forest transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 pl-8 text-[0.8rem] leading-relaxed text-ink">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Kunjungan"
        title="Susun eduwisata untuk lembaga Anda."
        description="Kirim asal lembaga, jumlah peserta, dan tujuan kunjungan. Tim akan membantu menyiapkan alur yang sesuai."
        primary={{ label: "Reservasi Kunjungan", href: "/#reservasi" }}
        secondary={{
          label: "Tanya via WhatsApp",
          href: buildWhatsAppUrl(
            "Halo Kampung IT Solo, saya ingin menjadwalkan eduwisata untuk lembaga kami.",
          ),
          external: true,
        }}
      />
    </PageShell>
  );
}
