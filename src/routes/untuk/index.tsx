import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { publishedAudiences } from "@/data/audiences";
import { pageHead } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site";

const AUDIENCE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Solusi untuk Lembaga dan Usaha",
  description:
    "Jalur solusi Kampung IT Solo untuk sekolah, desa, dan UMKM, dengan program, produk, dan cerita yang relevan.",
  url: canonicalUrl("/untuk"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedAudiences.map((audience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: audience.name,
      url: canonicalUrl(`/untuk/${audience.slug}`),
    })),
  },
};

export const Route = createFileRoute("/untuk/")({
  head: () =>
    pageHead({
      title: "Solusi untuk Lembaga | Kampung IT Solo",
      description:
        "Solusi digital untuk sekolah, desa, dan UMKM. Lihat program, produk, dan cerita yang paling relevan dengan kebutuhan lembaga Anda.",
      path: "/untuk",
    }),
  component: AudienceHub,
});

function AudienceHub() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solusi per Audiens"
        title={
          <>
            Mulai dari kebutuhan
            <br />
            yang paling dekat.
          </>
        }
        description="Sekolah, desa, dan UMKM punya masalah yang berbeda. Pilih jalur yang paling mirip dengan kondisi Anda, lalu lihat program, produk, dan cerita yang relevan."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Solusi" }]}
        actions={
          <Button variant="forest" size="pill" asChild>
            <Link to="/kontak">
              Konsultasi Kebutuhan <ArrowRight />
            </Link>
          </Button>
        }
      />
      <JsonLd data={AUDIENCE_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div data-reveal="up" className="max-w-2xl">
            <p className="eyebrow">Pilih jalur</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Solusi yang tidak dipaksakan sama.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Setiap jalur menghubungkan masalah khas audiens dengan program, produk, dan cerita
              yang relevan, bukan daftar layanan yang sama untuk semua orang.
            </p>
          </div>

          <ul data-reveal="stagger" className="mt-8 grid gap-4 md:grid-cols-2">
            {publishedAudiences.map((audience) => (
              <li key={audience.slug}>
                <Link
                  to="/untuk/$slug"
                  params={{ slug: audience.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest hover:shadow-lift"
                >
                  <span className="block aspect-[16/9] overflow-hidden bg-section-tint">
                    <img
                      src={audience.image}
                      alt=""
                      width={992}
                      height={672}
                      loading="lazy"
                      className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-6">
                    <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-forest">
                      {audience.name}
                    </span>
                    <span className="mt-1 text-xl font-extrabold leading-tight tracking-tight text-navy">
                      {audience.headline}
                    </span>
                    <span className="mt-2 text-[0.8rem] leading-relaxed text-ink">
                      {audience.summary}
                    </span>
                    <span className="mt-4 space-y-2">
                      {audience.painPoints.slice(0, 2).map((painPoint) => (
                        <span
                          key={painPoint}
                          className="flex items-start gap-2 text-[0.74rem] text-ink"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-forest" />
                          {painPoint}
                        </span>
                      ))}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[0.72rem] font-bold text-forest">
                      Lihat solusi
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Tidak yakin?"
        title="Ceritakan kondisi lembaga Anda."
        description="Kalau masalah Anda tidak persis sama dengan salah satu jalur di atas, mulai dari percakapan. Tim akan membantu memetakan program dan produk yang relevan."
        primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
        secondary={{ label: "Lihat Semua Program", href: "/program" }}
      />
    </PageShell>
  );
}
