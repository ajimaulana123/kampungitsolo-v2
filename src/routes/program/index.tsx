import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MapPin, MessageCircle, Users } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { publishedPrograms } from "@/data/programs";
import { pageHead } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const PROGRAM_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Program Pelatihan IT Kampung IT Solo",
  description:
    "Enam program pelatihan digital Kampung IT Solo untuk sekolah, pesantren, desa, UMKM, dan komunitas.",
  url: canonicalUrl("/program"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedPrograms.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: program.name,
      url: canonicalUrl(`/program/${program.slug}`),
    })),
  },
};

export const Route = createFileRoute("/program/")({
  head: () =>
    pageHead({
      title: "Program Pelatihan IT untuk Lembaga | Kampung IT Solo",
      description:
        "Enam program pelatihan digital Kampung IT Solo untuk sekolah, pesantren, desa, UMKM, dan komunitas. Pilih program atau konsultasikan kebutuhan lembaga Anda.",
      path: "/program",
    }),
  component: ProgramPage,
});

function ProgramPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Program & Kegiatan"
        title={
          <>
            Program yang dekat
            <br />
            dengan kebutuhan lembaga.
          </>
        }
        description="Enam program untuk sekolah, pesantren, pemerintah desa, UMKM, dan komunitas. Mulai dari kelas reguler sampai pendampingan yang disesuaikan dengan ruang lingkup."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Program" }]}
        actions={
          <>
            <Button variant="forest" size="pill" asChild>
              <Link to="/kontak">
                Konsultasi Program <ArrowRight />
              </Link>
            </Button>
            <Button variant="outlinePill" size="pill" asChild>
              <a href={buildWhatsAppUrl(WA_MESSAGES.program())} target="_blank" rel="noreferrer">
                <MessageCircle /> Tanya via WhatsApp
              </a>
            </Button>
          </>
        }
        aside={
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card lg:p-7">
            <p className="eyebrow">Mulai dari mana?</p>
            <h2 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-navy">
              Kelas reguler atau pendampingan.
            </h2>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink">
              Kelas coding dan literasi digital terbuka untuk peserta umum. Pendampingan desa,
              workshop UMKM, bootcamp, dan implementasi sistem disesuaikan dengan kebutuhan.
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5">
              <div>
                <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-forest">
                  Program
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-navy">
                  {publishedPrograms.length}
                </dd>
              </div>
              <div>
                <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-forest">
                  Fokus
                </dt>
                <dd className="mt-1 text-[0.78rem] font-bold leading-snug text-navy">
                  Lembaga, UMKM, komunitas
                </dd>
              </div>
            </dl>
          </div>
        }
      />
      <JsonLd data={PROGRAM_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Daftar program</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Pilih titik mulai yang paling relevan.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Setiap program punya audiens, format, dan hasil yang berbeda. Kalau belum yakin,
              ceritakan kondisi lembaga Anda dan tim akan membantu memetakan langkah pertama.
            </p>
          </div>

          <ol data-reveal="stagger" className="mt-10 border-t border-border">
            {publishedPrograms.map((program, index) => (
              <li
                key={program.slug}
                className="grid gap-6 border-b border-border py-8 lg:grid-cols-[0.48fr_1.52fr] lg:gap-10"
              >
                <div>
                  <p className="text-3xl font-extrabold leading-none text-border">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="eyebrow mt-4 flex items-start gap-2">
                    <Users className="mt-0.5 size-3.5 shrink-0" />
                    {program.audience.join(" · ")}
                  </p>
                  <dl className="mt-4 space-y-2 text-[0.72rem] leading-relaxed text-ink">
                    <div className="flex items-start gap-2">
                      <CalendarDays className="mt-0.5 size-3.5 shrink-0 text-forest" />
                      <div>
                        <dt className="sr-only">Format</dt>
                        <dd>{program.format}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 size-3.5 shrink-0 text-forest" />
                      <div>
                        <dt className="sr-only">Durasi</dt>
                        <dd>{program.duration}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 size-3.5 shrink-0 text-forest" />
                      <div>
                        <dt className="sr-only">Lokasi</dt>
                        <dd>{program.location}</dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-extrabold leading-tight tracking-tight text-navy lg:text-2xl">
                      <Link
                        to="/program/$slug"
                        params={{ slug: program.slug }}
                        className="hover:text-forest"
                      >
                        {program.name}
                      </Link>
                    </h3>
                    {program.featured && (
                      <span className="rounded-full bg-lime px-2.5 py-1 text-[0.6rem] font-extrabold uppercase tracking-wide text-lime-foreground">
                        Bootcamp
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink">
                    {program.summary}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {program.outcomes.slice(0, 4).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-[0.76rem] leading-relaxed text-ink"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime"
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/program/$slug"
                    params={{ slug: program.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
                  >
                    Lihat program <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        eyebrow="Belum yakin?"
        title="Ceritakan kebutuhan lembaga Anda."
        description="Jumlah peserta, lokasi, waktu, dan hasil yang diharapkan akan membantu tim menyusun program yang paling masuk akal. Tidak semua program harus dimulai dari paket yang sama."
        primary={{ label: "Konsultasi Program", href: "/kontak" }}
        secondary={{
          label: "Tanya via WhatsApp",
          href: buildWhatsAppUrl(WA_MESSAGES.program()),
          external: true,
        }}
      />
    </PageShell>
  );
}
