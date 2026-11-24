import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink, MessageCircle, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/landing/SectionLabel";
import { LeafSwoosh } from "@/components/landing/Decor";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { PageShell } from "@/components/site/PageShell";
import { RelatedLinks } from "@/components/site/RelatedLinks";
import { getProduct, products, type Product } from "@/data/products";
import { getProgram } from "@/data/programs";
import { getStory } from "@/data/stories";
import { pageHead } from "@/lib/seo";
import { absoluteUrl, canonicalUrl } from "@/lib/site";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const DESCRIPTION_SUFFIX = " Konsultasi kebutuhan lembaga Anda bersama Kampung IT Solo.";

function productDescription(summary: string) {
  const combined = `${summary}${DESCRIPTION_SUFFIX}`;
  if (combined.length <= 160) return combined;
  return `${combined.slice(0, 157).replace(/\s+\S*$/, "")}...`;
}

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return pageHead({
      title: product ? `${product.name} | Kampung IT Solo` : "Produk | Kampung IT Solo",
      description: product
        ? productDescription(product.summary)
        : "Produk dan layanan Kampung IT Solo, bagian dari Bin Alfan Group.",
      path: product ? `/products/${product.slug}` : "/products",
    });
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();

  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter((p) => p.slug !== product.slug && p.category !== product.category),
  ].slice(0, 3);

  const relatedPrograms = (product.relatedProgramSlugs ?? [])
    .map((slug) => getProgram(slug))
    .filter((program): program is NonNullable<typeof program> => Boolean(program?.published));

  const relatedStories = (product.relatedStorySlugs ?? [])
    .map((slug) => getStory(slug))
    .filter((story): story is NonNullable<typeof story> =>
      Boolean(story?.published && story.permission === "granted"),
    );

  return (
    <PageShell revealKey={product.slug}>
      {/* key: replay the entrance motion when moving to another product */}
      <div key={product.slug}>
        <div className="border-b border-border bg-section-tint pt-24">
          <div className="mx-auto max-w-7xl px-6 pb-4 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Beranda", href: "/" },
                { label: "Produk", href: "/products" },
                { label: product.name },
              ]}
            />
          </div>
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.summary,
            category: product.category,
            url: canonicalUrl(`/products/${product.slug}`),
            image: absoluteUrl(product.image),
            brand: { "@type": "Organization", name: "Kampung IT Solo" },
          }}
        />
        {product.video && (
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: product.video.title,
              description: product.video.caption ?? product.summary,
              thumbnailUrl: [
                `https://i.ytimg.com/vi/${product.video.youtubeId}/sddefault.jpg`,
                `https://i.ytimg.com/vi/${product.video.youtubeId}/hqdefault.jpg`,
              ],
              uploadDate: product.video.uploadDate ?? "2025-01-01",
              embedUrl: `https://www.youtube-nocookie.com/embed/${product.video.youtubeId}`,
              contentUrl: `https://www.youtube.com/watch?v=${product.video.youtubeId}`,
            }}
          />
        )}
        <section className="relative overflow-hidden bg-section-tint">
          <LeafSwoosh className="absolute -bottom-2 right-0 hidden h-28 w-[36%] md:block" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
            <div className="animate-rise">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-forest">{product.tagline}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink">{product.summary}</p>

              {product.highlights.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <li
                      key={h}
                      className="inline-flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-[0.72rem] font-semibold text-navy shadow-soft"
                    >
                      <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                {product.features.length > 0 && (
                  <Button variant="navy" size="pill" asChild>
                    <a href="#fitur">
                      Lihat Fitur <ArrowRight />
                    </a>
                  </Button>
                )}
                <Button variant="forest" size="pill" asChild>
                  <a
                    href={buildWhatsAppUrl(WA_MESSAGES.product(product.name))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hubungi Kami <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-rise [animation-delay:120ms]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-8 hidden h-[78%] w-8 -skew-x-12 rounded-xl bg-lime/40 lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <div className="animate-clip-in">
                  <img
                    src={product.image}
                    alt={product.imageAlt ?? `Ilustrasi ${product.name}`}
                    width={992}
                    height={672}
                    fetchPriority="high"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
            <div data-reveal="up">
              <SectionLabel lead="Tentang" rest="Produk" />
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Apa itu
                <br />
                {product.name}?
              </h2>
            </div>
            <div data-reveal="stagger" className="space-y-4 text-sm leading-relaxed text-ink">
              {product.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {product.features.length > 0 && (
          <section id="fitur" className="scroll-mt-24 bg-section-tint py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div data-reveal="up">
                <SectionLabel lead="Fitur" rest="Unggulan" />
                <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                  Yang membuat {product.name} berbeda.
                </h2>
              </div>
              <ul data-reveal="stagger" className="mt-8 grid gap-4 md:grid-cols-3">
                {product.features.map(({ title, desc }, i) => (
                  <li
                    key={title}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest/40 hover:shadow-lift"
                  >
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-base font-bold leading-snug text-navy">{title}</h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {product.steps.length > 0 && (
          <section className="py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <div data-reveal="up">
                <SectionLabel lead="Cara" rest="Kerjanya" />
                <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                  Penjelasan detail.
                </h2>
              </div>
              <ol data-reveal="stagger" className="mt-8 grid gap-6 md:grid-cols-3">
                {product.steps.map(({ title, desc }, i) => (
                  <li key={title} className="border-t-2 border-lime pt-4">
                    <span className="text-sm font-extrabold text-forest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-base font-bold leading-snug text-navy">{title}</h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-ink">{desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <ProductMediaSection product={product} />

        {product.specs.length > 0 && (
          <section className="bg-navy py-14 text-navy-foreground">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
              <div data-reveal="up">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wide text-lime">
                  Spesifikasi
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight lg:text-[2rem]">
                  Informasi
                  <br />
                  lengkap.
                </h2>
              </div>
              <dl data-reveal="stagger" className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {product.specs.map(({ label, value }) => (
                  <div key={label} className="border-t border-navy-foreground/15 pt-3">
                    <dt className="text-[0.68rem] font-bold uppercase tracking-wide text-navy-foreground/60">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {relatedPrograms.length > 0 && (
          <RelatedLinks
            eyebrow="Program terkait"
            title="Program yang mendukung produk ini."
            description="Lihat program pendampingan yang bisa membantu lembaga memakai produk ini dengan lebih terarah."
            className="bg-section-tint py-14"
            items={relatedPrograms.map((program) => ({
              href: `/program/${program.slug}`,
              title: program.name,
              description: program.cardDesc,
              meta: program.format,
              image: program.image,
            }))}
          />
        )}

        {relatedStories.length > 0 && (
          <RelatedLinks
            eyebrow="Cerita terkait"
            title="Cerita dari lapangan."
            items={relatedStories.map((story) => ({
              href: `/cerita/${story.slug}`,
              title: story.title,
              description: story.cardDesc,
              meta: `${story.client} · ${story.year}`,
              image: story.images[0]?.src,
            }))}
          />
        )}

        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              data-reveal="up"
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <SectionLabel lead="Produk" rest="Lain" />
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                  Bagian dari ekosistem yang sama.
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
              >
                Lihat semua produk <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <ul data-reveal="stagger" className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-[translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-forest hover:shadow-lift"
                  >
                    <span className="size-16 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={p.image}
                        alt=""
                        width={992}
                        height={672}
                        loading="lazy"
                        className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-110"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.82rem] font-bold text-navy">{p.name}</span>
                      <span className="mt-1 block text-[0.72rem] leading-snug text-ink">
                        {p.cardDesc}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div
              data-reveal="up"
              className="flex flex-col gap-6 rounded-3xl bg-navy p-8 text-navy-foreground shadow-card md:flex-row md:items-center lg:p-10"
            >
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wide text-lime">
                  Tertarik dengan {product.name}?
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">Mari diskusi.</h2>
                <p className="mt-2 max-w-xl text-[0.8rem] leading-relaxed text-navy-foreground/85">
                  Hubungi tim untuk informasi lanjutan, demo produk, atau konsultasi kebutuhan
                  lembaga Anda.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:ml-auto">
                <Button variant="lime" size="pill" asChild>
                  <a
                    href={buildWhatsAppUrl(WA_MESSAGES.product(product.name))}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hubungi Kami <MessageCircle />
                  </a>
                </Button>
                <Button variant="outlinePill" size="pill" asChild>
                  <Link to="/" hash="reservasi">
                    Isi Buku Tamu <Check />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

function ProductMediaSection({ product }: { product: Product }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!product.video && (!product.gallery || product.gallery.length === 0)) {
    return null;
  }

  return (
    <section id="dokumentasi" className="scroll-mt-24 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div data-reveal="up" className="max-w-2xl">
          <SectionLabel lead="Dokumentasi" rest="& Penggunaan" />
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
            Lihat produk dalam penggunaan nyata.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            Simak video resmi dan dokumentasi lapangan, dari penggunaan produk hingga
            implementasinya di lokasi mitra.
          </p>
        </div>

        {product.video && (
          <div
            data-reveal="up"
            className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-card"
          >
            <div className="grid items-center lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-video w-full overflow-hidden bg-navy">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${product.video.youtubeId}?autoplay=1&rel=0`}
                    title={product.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="size-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="group relative size-full cursor-pointer text-left focus:outline-none focus:ring-4 focus:ring-lime"
                    aria-label={`Putar ${product.video.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${product.video.youtubeId}/sddefault.jpg`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://i.ytimg.com/vi/${product.video?.youtubeId}/hqdefault.jpg`;
                      }}
                      alt={product.video.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid size-16 place-items-center rounded-full bg-lime text-lime-foreground shadow-lift transition-all duration-300 ease-out group-hover:scale-110 sm:size-20">
                        <Play className="ml-1 size-7 fill-current sm:size-9" />
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[0.68rem] font-bold text-white backdrop-blur-md">
                        <Play className="size-3 fill-current" /> Video Profil Resmi
                      </span>
                      <p className="mt-2 line-clamp-2 text-sm font-bold text-white sm:text-base">
                        {product.video.title}
                      </p>
                    </div>
                  </button>
                )}
              </div>

              <div className="p-7 sm:p-9">
                <p className="eyebrow">Sorotan Video</p>
                <h3 className="mt-2 text-xl font-extrabold text-navy sm:text-2xl">
                  {product.video.title}
                </h3>
                {product.video.caption && (
                  <p className="mt-3 text-sm leading-relaxed text-ink">{product.video.caption}</p>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="outlinePill" size="pillSm" asChild>
                    <a
                      href={`https://www.youtube.com/watch?v=${product.video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Buka di YouTube <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                  {product.website && (
                    <Button variant="outlinePill" size="pillSm" asChild>
                      <a
                        href={product.website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        {product.website.label} <ExternalLink className="size-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {product.gallery && product.gallery.length > 0 && (
          <div className="mt-12">
            <div data-reveal="up" className="flex items-center justify-between">
              <div>
                <p className="eyebrow">Galeri Implementasi</p>
                <h3 className="mt-1 text-xl font-extrabold text-navy">
                  Implementasi &amp; fasilitas
                </h3>
              </div>
            </div>

            <div
              data-reveal="stagger"
              className={`mt-6 grid gap-6 sm:grid-cols-2 ${
                product.gallery.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {product.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/40 hover:shadow-lift"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-section-tint">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    {item.category && (
                      <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-white backdrop-blur-md">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[0.78rem] font-semibold leading-relaxed text-ink">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
