import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { JsonLd } from "@/components/site/JsonLd";
import { PageHero } from "@/components/site/PageHero";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { pageHead } from "@/lib/seo";
import { canonicalUrl } from "@/lib/site";
import { buildWhatsAppUrl, WA_MESSAGES } from "@/lib/whatsapp";

const featured = products.find((product) => product.catalogFeatured) ?? products[0]!;
const pillars = Array.from(new Set(products.map((product) => product.category)));
const remaining = products.filter((product) => product.slug !== featured.slug);

const CATALOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Produk & Layanan Kampung IT Solo",
  description:
    "Katalog 10 produk teknologi pendidikan Kampung IT Solo, dari Elfan System dan AI hingga literasi, energi, dan IoT.",
  url: canonicalUrl("/products"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: canonicalUrl(`/products/${product.slug}`),
    })),
  },
};

export const Route = createFileRoute("/products/")({
  head: () =>
    pageHead({
      title: "Produk & Layanan Kampung IT Solo",
      description:
        "Sepuluh produk teknologi pendidikan Kampung IT Solo, dari platform Elfan System dan AI hingga literasi, energi surya, dan IoT.",
      path: "/products",
    }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Produk & Layanan"
        title={
          <>
            Ekosistem teknologi
            <br />
            untuk pendidikan dan masyarakat.
          </>
        }
        description="Sepuluh produk yang saling melengkapi: platform digital, literasi, energi, dan IoT untuk lembaga pendidikan, pesantren, desa, dan UMKM."
        breadcrumbs={[{ label: "Beranda", href: "/" }, { label: "Produk" }]}
        actions={
          <Button variant="forest" size="pill" asChild>
            <a href={buildWhatsAppUrl(WA_MESSAGES.product())} target="_blank" rel="noreferrer">
              Konsultasi Produk <MessageCircle />
            </a>
          </Button>
        }
      />
      <JsonLd data={CATALOG_SCHEMA} />

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 lg:p-10">
                <p className="eyebrow">Produk unggulan</p>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  {featured.name}
                </h2>
                <p className="mt-2 text-base font-semibold text-forest">{featured.tagline}</p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink">{featured.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {featured.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="inline-flex items-center gap-2 rounded-xl bg-surface px-3 py-2 text-[0.72rem] font-semibold text-navy"
                    >
                      <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button variant="navy" size="pill" asChild>
                    <Link to="/products/$slug" params={{ slug: featured.slug }}>
                      Lihat Detail <ArrowRight />
                    </Link>
                  </Button>
                  <Button variant="outlinePill" size="pill" asChild>
                    <a
                      href={buildWhatsAppUrl(WA_MESSAGES.product(featured.name))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tanya via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-64 bg-section-tint">
                <img
                  src={featured.image}
                  alt={`Ilustrasi ${featured.name}`}
                  width={992}
                  height={672}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="eyebrow">Semua produk</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy lg:text-[2rem]">
              Dikelompokkan per pilar.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Setiap produk bisa dipakai sendiri atau digabung dengan program pendampingan Kampung
              IT Solo.
            </p>
          </div>

          <div className="mt-10">
            {pillars.map((pillar, index) => {
              const items = remaining.filter((product) => product.category === pillar);
              if (items.length === 0) return null;

              return (
                <div
                  key={pillar}
                  className="border-t border-border py-8 first:border-t-0 first:pt-0"
                >
                  <div className="grid gap-6 lg:grid-cols-[0.6fr_1.4fr]">
                    <div>
                      <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-navy">
                        {pillar}
                      </h3>
                    </div>
                    <ul className="divide-y divide-border">
                      {items.map((product) => (
                        <li key={product.slug}>
                          <Link
                            to="/products/$slug"
                            params={{ slug: product.slug }}
                            className="group flex items-center gap-4 py-4 sm:gap-5"
                          >
                            <span className="size-20 shrink-0 overflow-hidden rounded-2xl sm:size-24">
                              <img
                                src={product.image}
                                alt=""
                                width={992}
                                height={672}
                                loading="lazy"
                                className="size-full object-cover transition-[scale] duration-500 ease-out group-hover:scale-105"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-base font-bold text-navy group-hover:text-forest">
                                {product.name}
                              </span>
                              <span className="mt-1 block text-[0.8rem] leading-relaxed text-ink">
                                {product.cardDesc}
                              </span>
                            </span>
                            <ArrowRight className="ml-auto size-4 shrink-0 text-forest transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Butuh arahan?"
        title="Pilih produk yang sesuai kebutuhan lembaga Anda."
        description="Ceritakan kondisi lembaga, jumlah pengguna, dan target digitalisasinya. Tim akan membantu memetakan produk dan program yang paling relevan."
        primary={{ label: "Diskusikan Kebutuhan", href: "/kontak" }}
        secondary={{
          label: "Tanya via WhatsApp",
          href: buildWhatsAppUrl(WA_MESSAGES.product()),
          external: true,
        }}
      />
    </PageShell>
  );
}
