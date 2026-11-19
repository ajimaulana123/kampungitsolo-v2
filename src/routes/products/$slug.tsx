import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { SectionLabel } from "@/components/landing/SectionLabel";
import { LeafSwoosh } from "@/components/landing/Decor";
import { getProduct, products } from "@/data/products";

const WHATSAPP = "https://wa.me/6281235666665";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: product ? `${product.name} · Kampung IT Solo` : "Produk · Kampung IT Solo" },
        {
          name: "description",
          content:
            product?.summary ?? "Produk dan layanan Kampung IT Solo, bagian dari Bin Alfan Group.",
        },
        { property: "og:title", content: product ? `${product.name} · Kampung IT Solo` : "Produk" },
        {
          property: "og:description",
          content: product?.summary ?? "Produk dan layanan Kampung IT Solo.",
        },
        { property: "og:type", content: "website" },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();

  const related = [
    ...products.filter((p) => p.slug !== product.slug && p.category === product.category),
    ...products.filter((p) => p.slug !== product.slug && p.category !== product.category),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="detail" />

      <main>
        <section className="relative overflow-hidden bg-section-tint">
          <LeafSwoosh className="absolute -bottom-2 right-0 hidden h-28 w-[36%] md:block" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-16">
            <div>
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
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    Hubungi Kami <MessageCircle />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-8 hidden h-[78%] w-8 -skew-x-12 rounded-xl bg-lime/40 lg:block"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={product.image}
                  alt={`Ilustrasi ${product.name}`}
                  width={992}
                  height={672}
                  fetchPriority="high"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-12">
            <div>
              <SectionLabel lead="Tentang" rest="Produk" />
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Apa itu
                <br />
                {product.name}?
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-ink">
              {product.description.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {product.features.length > 0 && (
          <section id="fitur" className="scroll-mt-24 bg-section-tint py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <SectionLabel lead="Fitur" rest="Unggulan" />
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Yang membuat {product.name} berbeda.
              </h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {product.features.map(({ title, desc }, i) => (
                  <li
                    key={title}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
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
              <SectionLabel lead="Cara" rest="Kerjanya" />
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                Penjelasan detail.
              </h2>
              <ol className="mt-8 grid gap-6 md:grid-cols-3">
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

        {product.specs.length > 0 && (
          <section className="bg-navy py-14 text-navy-foreground">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wide text-lime">
                  Spesifikasi
                </p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight lg:text-[2rem]">
                  Informasi
                  <br />
                  lengkap.
                </h2>
              </div>
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
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

        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <SectionLabel lead="Produk" rest="Lain" />
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
                  Bagian dari ekosistem yang sama.
                </h2>
              </div>
              <Link
                to="/"
                hash="ekosistem"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-forest hover:underline"
              >
                Lihat semua produk <ArrowRight className="size-3.5" />
              </Link>
            </div>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-forest"
                  >
                    <img
                      src={p.image}
                      alt=""
                      width={992}
                      height={672}
                      loading="lazy"
                      className="size-16 shrink-0 rounded-xl object-cover"
                    />
                    <span className="min-w-0">
                      <span className="block text-[0.82rem] font-bold text-navy">{p.name}</span>
                      <span className="mt-1 block text-[0.72rem] leading-snug text-ink">
                        {p.cardDesc}
                      </span>
                    </span>
                    <ArrowRight className="ml-auto size-4 shrink-0 text-forest transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col gap-6 rounded-3xl bg-navy p-8 text-navy-foreground shadow-card md:flex-row md:items-center lg:p-10">
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
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
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
      </main>

      <Footer variant="detail" />
    </div>
  );
}
