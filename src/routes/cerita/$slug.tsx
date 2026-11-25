import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Prose } from "@/components/site/Prose";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { getProduct } from "@/data/products";
import { getProgram } from "@/data/programs";
import { getStory, publishedStories } from "@/data/stories";
import { fitDescription, pageHead } from "@/lib/seo";
import { absoluteUrl, canonicalUrl, SITE_URL } from "@/lib/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const Route = createFileRoute("/cerita/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story || !story.published || story.permission !== "granted") throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const story = loaderData?.story;
    return pageHead({
      title: story ? `${story.title} | Kampung IT Solo` : "Cerita | Kampung IT Solo",
      description: story
        ? fitDescription(story.summary, "Baca cerita lengkapnya di Kampung IT Solo.")
        : "Cerita dan studi kasus Kampung IT Solo.",
      path: story ? `/cerita/${story.slug}` : "/cerita",
      ...(story?.images[0]?.src ? { image: story.images[0].src } : {}),
      type: "article",
    });
  },
  component: StoryDetail,
});

function StoryDetail() {
  const { story } = Route.useLoaderData();
  const program = getProgram(story.programSlug);

  const relatedProducts = (program?.relatedProductSlugs ?? [])
    .map((slug) => getProduct(slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  const otherStories = publishedStories.filter((item) => item.slug !== story.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.summary,
    articleSection: story.sector,
    url: canonicalUrl(`/cerita/${story.slug}`),
    image: story.images.map((image) => absoluteUrl(image.src)),
    author: {
      "@type": "Organization",
      name: "Kampung IT Solo",
      url: SITE_URL,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Kampung IT Solo",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/kampung-it-solo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/cerita/${story.slug}`),
    },
    about: program
      ? {
          "@type": "Service",
          name: program.name,
          url: canonicalUrl(`/program/${program.slug}`),
        }
      : undefined,
    isPartOf: {
      "@type": "CollectionPage",
      name: "Cerita & Studi Kasus Kampung IT Solo",
      url: canonicalUrl("/cerita"),
    },
  };

  return (
    <PageShell revealKey={story.slug}>
      <div key={story.slug}>
        <PageHero
          eyebrow={`${story.sector} · ${story.year}`}
          title={story.title}
          description={story.summary}
          breadcrumbs={[
            { label: "Beranda", href: "/" },
            { label: "Cerita", href: "/cerita" },
            { label: story.title },
          ]}
          actions={
            <>
              {program && (
                <Button variant="forest" size="pill" asChild>
                  <Link to="/program/$slug" params={{ slug: program.slug }}>
                    Lihat Program <ArrowRight />
                  </Link>
                </Button>
              )}
              <Button variant="outlinePill" size="pill" asChild>
                <a
                  href={buildWhatsAppUrl(
                    `Halo Kampung IT Solo, saya membaca cerita ${story.client} dan ingin berdiskusi.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> Diskusi
                </a>
              </Button>
            </>
          }
          aside={
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={story.images[0]?.src}
                alt={story.images[0]?.alt ?? ""}
                width={992}
                height={672}
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
                <p className="text-[0.66rem] font-bold uppercase tracking-wide text-lime">
                  {story.client}
                </p>
                <p className="mt-1 text-sm font-bold text-navy-foreground">
                  {program?.name ?? "Program Kampung IT Solo"}
                </p>
              </div>
            </div>
          }
        />
        <JsonLd data={articleSchema} />

        <section className="py-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.3fr_1.7fr] lg:px-12">
            <aside data-reveal="up" className="h-fit lg:sticky lg:top-28">
              <p className="eyebrow">Ringkasan</p>
              <dl className="mt-4 space-y-4 text-[0.76rem]">
                <div>
                  <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Klien
                  </dt>
                  <dd className="mt-0.5 font-semibold leading-relaxed text-navy">{story.client}</dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Sektor
                  </dt>
                  <dd className="mt-0.5 font-semibold leading-relaxed text-navy">{story.sector}</dd>
                </div>
                <div>
                  <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                    Tahun
                  </dt>
                  <dd className="mt-0.5 font-semibold leading-relaxed text-navy">{story.year}</dd>
                </div>
                {program && (
                  <div>
                    <dt className="text-[0.62rem] font-extrabold uppercase tracking-wide text-muted-foreground">
                      Program
                    </dt>
                    <dd className="mt-0.5 font-semibold leading-relaxed text-navy">
                      <Link
                        to="/program/$slug"
                        params={{ slug: program.slug }}
                        className="text-forest hover:underline"
                      >
                        {program.name}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </aside>

            <div className="space-y-10">
              <div data-reveal="up">
                <p className="eyebrow">Konteks</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy lg:text-3xl">
                  Apa yang dihadapi klien.
                </h2>
                <div className="mt-4">
                  <Prose>
                    {story.challenge.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </Prose>
                </div>
              </div>

              {story.images[1] && (
                <figure data-reveal="clip" className="overflow-hidden rounded-2xl">
                  <img
                    src={story.images[1].src}
                    alt={story.images[1].alt}
                    width={1280}
                    height={768}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <figcaption className="mt-2 text-[0.68rem] text-muted-foreground">
                    {story.images[1].alt}
                  </figcaption>
                </figure>
              )}

              <div data-reveal="up">
                <p className="eyebrow">Pendekatan</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy lg:text-3xl">
                  Bagaimana kami bekerja.
                </h2>
                <div className="mt-4">
                  <Prose>
                    {story.approach.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </Prose>
                </div>
              </div>

              <div data-reveal="up">
                <p className="eyebrow">Hasil</p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy lg:text-3xl">
                  Yang tercatat setelah program.
                </h2>
                <div className="mt-4">
                  <Prose>
                    {story.result.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </Prose>
                </div>
              </div>

              {story.quote && (
                <blockquote className="relative overflow-hidden rounded-2xl bg-navy p-6 text-navy-foreground">
                  <Quote className="size-7 rotate-180 fill-lime text-lime" />
                  <p className="mt-3 text-base font-medium leading-relaxed">{story.quote.text}</p>
                  <footer className="mt-4 text-[0.72rem] text-navy-foreground/70">
                    {story.quote.name}, {story.quote.role}, {story.quote.organization}
                  </footer>
                </blockquote>
              )}

              {program && (
                <div
                  data-reveal="up"
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <p className="eyebrow">Program yang dijalankan</p>
                  <h2 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-navy">
                    {program.name}
                  </h2>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">{program.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Button variant="forest" size="pillSm" asChild>
                      <Link to="/program/$slug" params={{ slug: program.slug }}>
                        Lihat Program <ArrowRight />
                      </Link>
                    </Button>
                    <Button variant="outlinePill" size="pillSm" asChild>
                      <Link to="/kontak">Diskusikan Kebutuhan</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <RelatedLinks
          eyebrow="Produk yang relevan"
          title="Produk yang bisa mendukung program ini."
          description="Tidak semua cerita memakai produk. Tautan ini membantu Anda melihat produk yang relevan dengan program yang dijalankan."
          className="bg-section-tint py-14"
          items={relatedProducts.map((product) => ({
            href: `/products/${product.slug}`,
            title: product.name,
            description: product.cardDesc,
            meta: product.category,
            image: product.image,
          }))}
        />

        <RelatedLinks
          eyebrow="Cerita lain"
          title="Lihat cerita dari lapangan."
          items={otherStories.map((item) => ({
            href: `/cerita/${item.slug}`,
            title: item.title,
            description: item.cardDesc,
            meta: `${item.client} · ${item.year}`,
            image: item.images[0]?.src,
          }))}
        />

        <CtaBand
          eyebrow="Kolaborasi"
          title="Punya tantangan yang mirip?"
          description="Ceritakan kondisi lembaga, komunitas, atau usaha Anda. Tim akan membantu memetakan program dan langkah yang paling relevan."
          primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
          secondary={{
            label: "Tanya via WhatsApp",
            href: buildWhatsAppUrl(
              `Halo Kampung IT Solo, saya membaca cerita ${story.client} dan ingin berdiskusi.`,
            ),
            external: true,
          }}
        />
      </div>
    </PageShell>
  );
}
