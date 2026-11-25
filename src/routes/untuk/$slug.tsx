import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Prose } from "@/components/site/Prose";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { Button } from "@/components/ui/button";
import { getAudience } from "@/data/audiences";
import { getProduct } from "@/data/products";
import { getProgram } from "@/data/programs";
import { getStory } from "@/data/stories";
import { pageHead } from "@/lib/seo";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";
import { canonicalUrl, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/untuk/$slug")({
  loader: ({ params }) => {
    const audience = getAudience(params.slug);
    if (!audience || !audience.published) throw notFound();
    return { audience };
  },
  head: ({ loaderData }) => {
    const audience = loaderData?.audience;
    return pageHead({
      title: audience ? `${audience.name} | Kampung IT Solo` : "Solusi | Kampung IT Solo",
      description: audience ? audience.summary : "Solusi digital Kampung IT Solo.",
      path: audience ? `/untuk/${audience.slug}` : "/untuk",
      ...(audience ? { image: audience.image } : {}),
    });
  },
  component: AudienceDetail,
});

function AudienceDetail() {
  const { audience } = Route.useLoaderData();

  const programs = audience.recommendedProgramSlugs
    .map((slug) => getProgram(slug))
    .filter((program): program is NonNullable<typeof program> => Boolean(program?.published));

  const products = audience.recommendedProductSlugs
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const stories = audience.storySlugs
    .map((slug) => getStory(slug))
    .filter((story): story is NonNullable<typeof story> =>
      Boolean(story?.published && story.permission === "granted"),
    );

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `Solusi untuk ${audience.name} | Kampung IT Solo`,
        description: audience.summary,
        url: canonicalUrl(`/untuk/${audience.slug}`),
        isPartOf: {
          "@type": "CollectionPage",
          name: "Solusi untuk Lembaga dan Usaha",
          url: canonicalUrl("/untuk"),
        },
      },
      {
        "@type": "Service",
        name: `Solusi digital untuk ${audience.name}`,
        description: audience.summary,
        url: canonicalUrl(`/untuk/${audience.slug}`),
        provider: {
          "@type": "EducationalOrganization",
          name: "Kampung IT Solo",
          url: SITE_URL,
        },
        areaServed: ["Sukoharjo", "Surakarta", "Solo Raya"],
      },
    ],
  };

  return (
    <PageShell revealKey={audience.slug}>
      <div key={audience.slug}>
        <PageHero
          eyebrow={`Solusi untuk ${audience.name}`}
          title={audience.headline}
          description={audience.summary}
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Solusi", href: "/untuk" },
            { label: audience.name },
          ]}
          actions={
            <>
              <Button variant="forest" size="pill" asChild>
                <Link to="/kontak">
                  Konsultasi <ArrowRight />
                </Link>
              </Button>
              <Button variant="outlinePill" size="pill" asChild>
                <a
                  href={buildWhatsAppUrl(
                    `Halo Kampung IT Solo, saya ingin berdiskusi tentang solusi untuk ${audience.name}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> Tanya via WhatsApp
                </a>
              </Button>
            </>
          }
          aside={
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={audience.image}
                alt={audience.imageAlt}
                width={992}
                height={672}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5">
                <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                  {audience.name}
                </p>
                <p className="mt-1 text-sm font-bold leading-snug text-navy-foreground">
                  Program, produk, dan cerita yang relevan.
                </p>
              </div>
            </div>
          }
        />
        <JsonLd data={schema} />

        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <div data-reveal="up">
              <p className="eyebrow">Masalah khas</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Yang sering menghambat.
              </h2>
              <ul className="mt-6 space-y-3">
                {audience.painPoints.map((painPoint) => (
                  <li
                    key={painPoint}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-[0.8rem] leading-relaxed text-ink shadow-soft"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                    {painPoint}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal="up">
              <p className="eyebrow">Pendekatan</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Mulai dari satu titik yang jelas.
              </h2>
              <div className="mt-5">
                <Prose>
                  {audience.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </Prose>
              </div>
            </div>
          </div>
        </section>

        <RelatedLinks
          eyebrow="Program relevan"
          title={`Program yang cocok untuk ${audience.name.toLowerCase()}.`}
          className="bg-section-tint py-14"
          items={programs.map((program) => ({
            href: `/program/${program.slug}`,
            title: program.name,
            description: program.cardDesc,
            meta: program.format,
            image: program.image,
          }))}
        />

        <RelatedLinks
          eyebrow="Produk relevan"
          title="Produk yang bisa mendukung."
          items={products.map((product) => ({
            href: `/products/${product.slug}`,
            title: product.name,
            description: product.cardDesc,
            meta: product.category,
            image: product.image,
          }))}
        />

        {stories.length > 0 && (
          <RelatedLinks
            eyebrow="Bukti dari lapangan"
            title="Cerita yang relevan."
            className="bg-section-tint py-14"
            items={stories.map((story) => ({
              href: `/cerita/${story.slug}`,
              title: story.title,
              description: story.cardDesc,
              meta: `${story.client} · ${story.year}`,
              image: story.images[0]?.src,
            }))}
          />
        )}

        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
            <div data-reveal="up">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Pertanyaan yang sering muncul.
              </h2>
            </div>
            <div data-reveal="up" className="space-y-4">
              {audience.faqs.map(({ q, a }, index) => (
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
          eyebrow="Langkah berikutnya"
          title={`Rancang solusi untuk ${audience.name.toLowerCase()}.`}
          description="Ceritakan kondisi, jumlah pengguna, dan hasil yang diharapkan. Tim akan membantu memilih program dan produk yang paling relevan."
          primary={{ label: "Konsultasi", href: "/kontak" }}
          secondary={{
            label: "Tanya via WhatsApp",
            href: buildWhatsAppUrl(WA_MESSAGES.audience(audience.name)),
            external: true,
          }}
        />
      </div>
    </PageShell>
  );
}
