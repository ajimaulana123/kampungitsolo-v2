import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Tag,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Prose } from "@/components/site/Prose";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { getProduct } from "@/data/products";
import { getProgram, publishedPrograms, type Program } from "@/data/programs";
import { getStory } from "@/data/stories";
import { fitDescription, pageHead } from "@/lib/seo";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";
import { canonicalUrl, SITE_URL } from "@/lib/site";

function programSchema(program: Program) {
  const base = {
    "@context": "https://schema.org",
    "@type": program.schemaType,
    name: program.name,
    description: program.summary,
    url: canonicalUrl(`/program/${program.slug}`),
    provider: {
      "@type": "EducationalOrganization",
      name: "Kampung IT Solo",
      url: SITE_URL,
    },
    areaServed: ["Sukoharjo", "Surakarta", "Solo Raya"],
  };

  if (program.schemaType === "Course") {
    return {
      ...base,
      inLanguage: "id-ID",
      courseMode: "onsite",
    };
  }

  return {
    ...base,
    serviceType: program.shortName,
  };
}

function programTitle(program: Program) {
  const full = `${program.name} di Solo | Kampung IT Solo`;
  return full.length > 60 ? `${program.shortName} di Solo | Kampung IT Solo` : full;
}

export const Route = createFileRoute("/program/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program || !program.published) throw notFound();
    return { program };
  },
  head: ({ loaderData }) => {
    const program = loaderData?.program;
    return pageHead({
      title: program ? programTitle(program) : "Program | Kampung IT Solo",
      description: program
        ? fitDescription(
            program.summary,
            "Konsultasikan jadwal dan kebutuhan lembaga Anda bersama Kampung IT Solo.",
          )
        : "Program pelatihan digital Kampung IT Solo untuk lembaga, UMKM, dan komunitas.",
      path: program ? `/program/${program.slug}` : "/program",
      ...(program ? { image: program.image } : {}),
    });
  },
  component: ProgramDetail,
});

function ProgramDetail() {
  const { program } = Route.useLoaderData();

  const relatedProducts = program.relatedProductSlugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const relatedStories = (program.relatedStorySlugs ?? [])
    .map((slug) => getStory(slug))
    .filter((story): story is NonNullable<typeof story> =>
      Boolean(story && story.published && story.permission === "granted"),
    );

  const otherPrograms = publishedPrograms.filter((item) => item.slug !== program.slug).slice(0, 3);

  return (
    <PageShell revealKey={program.slug}>
      <div key={program.slug}>
        <PageHero
          eyebrow={program.format}
          title={program.name}
          description={program.summary}
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Program", href: "/program" },
            { label: program.name },
          ]}
          actions={
            <>
              <Button variant="forest" size="pill" asChild>
                <a
                  href={buildWhatsAppUrl(
                    `Halo Kampung IT Solo, saya ingin tahu jadwal dan detail ${program.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tanya Program <MessageCircle />
                </a>
              </Button>
              <Button variant="outlinePill" size="pill" asChild>
                <Link to="/kontak">
                  Konsultasi <ArrowRight />
                </Link>
              </Button>
            </>
          }
          aside={
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-8 hidden h-[78%] w-8 -skew-x-12 rounded-xl bg-lime/40 lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  width={992}
                  height={672}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
                  <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                    {program.duration}
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy-foreground">{program.format}</p>
                </div>
              </div>
            </div>
          }
        />
        <JsonLd data={programSchema(program)} />

        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-12">
            <div data-reveal="up">
              <p className="eyebrow">Untuk siapa</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Program ini disusun untuk siapa?
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {program.audience.map((audience) => (
                  <li
                    key={audience}
                    className="inline-flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[0.72rem] font-semibold text-navy"
                  >
                    <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                    {audience}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Prose>
                  {program.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="eyebrow">Informasi program</p>
              <dl className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 size-4 shrink-0 text-forest" />
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Audiens
                    </dt>
                    <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                      {program.audience.join(", ")}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-4 shrink-0 text-forest" />
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Format
                    </dt>
                    <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                      {program.format}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-forest" />
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Durasi
                    </dt>
                    <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                      {program.duration}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Lokasi
                    </dt>
                    <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                      {program.location}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-4 shrink-0 text-forest" />
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Jadwal
                    </dt>
                    <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                      {program.schedule}
                    </dd>
                  </div>
                </div>
                {program.price && (
                  <div className="flex items-start gap-3">
                    <Tag className="mt-0.5 size-4 shrink-0 text-forest" />
                    <div>
                      <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                        Biaya program
                      </dt>
                      <dd className="mt-0.5 text-[0.8rem] font-semibold leading-relaxed text-navy">
                        {program.price}
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
              <Button variant="forest" size="pill" className="mt-6 w-full" asChild>
                <a
                  href={buildWhatsAppUrl(WA_MESSAGES.program(program.name))}
                  target="_blank"
                  rel="noreferrer"
                >
                  Diskusikan Program <MessageCircle />
                </a>
              </Button>
            </aside>
          </div>
        </section>

        <section className="bg-section-tint py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div data-reveal="up" className="max-w-2xl">
              <p className="eyebrow">Hasil yang diharapkan</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Bukan janji, tetapi arah belajar.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                Setiap kelompok datang dengan kemampuan dan kebutuhan yang berbeda. Hasil berikut
                menjadi arah program, bukan angka yang dipaksakan sama untuk semua peserta.
              </p>
            </div>
            <ul data-reveal="stagger" className="mt-8 grid gap-4 md:grid-cols-2">
              {program.outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime/25 text-forest">
                    <Check className="size-4" />
                  </span>
                  <div>
                    <p className="text-[0.62rem] font-extrabold uppercase tracking-wide text-forest">
                      Hasil {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[0.82rem] font-semibold leading-relaxed text-navy">
                      {outcome}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div data-reveal="up" className="max-w-2xl">
              <p className="eyebrow">Alur kegiatan</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Bagaimana program berjalan.
              </h2>
            </div>
            <ol data-reveal="stagger" className="mt-8 grid gap-6 md:grid-cols-2">
              {program.curriculum.map((step, index) => (
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

        <section className="bg-section-tint py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <div data-reveal="up">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Pertanyaan sebelum mendaftar.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
                Kalau kebutuhan Anda belum tercakup di sini, kirim pertanyaan lewat WhatsApp atau
                halaman kontak.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              data-reveal="up"
              className="rounded-2xl border border-border bg-card px-6 shadow-soft"
            >
              {program.faqs.map(({ q, a }, index) => (
                <AccordionItem key={q} value={`item-${index}`} className="last:border-b-0">
                  <AccordionTrigger className="gap-4 text-[0.85rem] font-bold text-navy hover:no-underline">
                    <span className="flex items-start gap-3">
                      <span className="text-[0.7rem] font-extrabold text-forest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 text-[0.8rem] leading-relaxed text-ink">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <RelatedLinks
          eyebrow="Produk terkait"
          title="Produk yang relevan dengan program ini."
          description="Produk dapat dipakai sebagai pendukung setelah program, sesuai kebutuhan dan kesiapan lembaga."
          items={relatedProducts.map((product) => ({
            href: `/products/${product.slug}`,
            title: product.name,
            description: product.cardDesc,
            meta: product.category,
            image: product.image,
          }))}
        />

        {relatedStories.length > 0 && (
          <RelatedLinks
            eyebrow="Cerita terkait"
            title="Lihat bagaimana program ini berjalan."
            className="bg-section-tint py-14"
            items={relatedStories.map((story) => ({
              href: `/cerita/${story.slug}`,
              title: story.title,
              description: story.cardDesc,
              meta: `${story.client} · ${story.year}`,
              image: story.images[0]?.src,
            }))}
          />
        )}

        <RelatedLinks
          eyebrow="Program lain"
          title="Lanjutkan dengan program lain."
          items={otherPrograms.map((item) => ({
            href: `/program/${item.slug}`,
            title: item.name,
            description: item.cardDesc,
            meta: item.format,
            image: item.image,
          }))}
        />

        <CtaBand
          eyebrow="Butuh penyesuaian?"
          title="Rancang program bersama tim."
          description="Ceritakan jumlah peserta, lokasi, waktu, dan hasil yang diharapkan. Tim akan membantu memilih format dan langkah yang paling sesuai."
          primary={{
            label: "Tanya via WhatsApp",
            href: buildWhatsAppUrl(
              `Halo Kampung IT Solo, saya ingin berdiskusi tentang ${program.name}.`,
            ),
            external: true,
          }}
          secondary={{ label: "Halaman Kontak", href: "/kontak" }}
        />
      </div>
    </PageShell>
  );
}
